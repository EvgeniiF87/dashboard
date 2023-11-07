import { useEffect, useRef } from "react";
import { CanvasDraw, PieChardDraw } from "../../service/canvas";
import { calculatePieSectors } from "../../utils/calculateValueSectors";
import { animatePie } from "../../utils/animatePie";


type DiagramPieProps = {
  selectorList: { count: number; color: string }[];
};

const DiagramPie = ({ selectorList }: DiagramPieProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRequestIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.width = 180;
    canvasRef.current.height = 180;

    const context = canvasRef.current.getContext("2d");

    if (!context) return;

    const drawService = new CanvasDraw(context);

    const selectorsList = calculatePieSectors(90, selectorList);

    const pieChard = new PieChardDraw({
      radius: 90,
      drawService,
      selectors: selectorsList,
      totalCount: selectorList.reduce((acc, item) => acc + item.count, 0)
    });

    const animateClouser = animatePie(context, pieChard);

    if (animateClouser) {
      animationRequestIdRef.current = requestAnimationFrame(() => animateClouser());
    } else {
      console.error("animateClouser is undefined");
    }

    return () => {
      if (animationRequestIdRef.current) {
        cancelAnimationFrame(animationRequestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} width={160} height={160}></canvas>;
};

export { DiagramPie };
