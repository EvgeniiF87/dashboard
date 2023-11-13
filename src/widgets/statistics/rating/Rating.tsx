import { useEffect, useRef } from "react";
import styles from "./Rating.module.scss";
import TitleStatistic from "../../../shared/ui/title-statistic/TitleStatistic";

type DrawPieSliceProps = {
  context: CanvasRenderingContext2D;
  color: string;
  centerX: number;
  centerY: number;
  radius: number;
  startAngle: number;
  endAngle: number;
};

export const  Rating = () => {
  const refRating = useRef<HTMLCanvasElement>(null);
  const likes = { color: "#008615", sum: 1500 };
  const dislike = { color: "#FF9393", sum: 1011 };
  const sumLikes = likes.sum + dislike.sum;

  const listValue = ["все время", "год", "месяц"];

  useEffect(() => {
    const canvas = refRating.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: canvas.height / 2,
      startAngle: 0,
      endAngle: Math.PI * 2 - (2 * Math.PI * likes.sum) / sumLikes,
      color: "#EEEEEE",
    });

    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: canvas.height / 2,
      startAngle: Math.PI * 2 - (2 * Math.PI * likes.sum) / sumLikes,
      endAngle: Math.PI * 2,
      color: likes.color,
    });

    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: canvas.height / 2 - 8,
      startAngle: 0,
      endAngle: Math.PI * 2,
      color: "#fff",
    });

    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: 50,
      startAngle: 0,
      endAngle: (2 * Math.PI * dislike.sum) / sumLikes,
      color: dislike.color,
    });

    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: 50,
      startAngle: (2 * Math.PI * dislike.sum) / sumLikes,
      endAngle: Math.PI * 2,
      color: "#EEEEEE",
    });

    drawPieSlice({
      context,
      centerX,
      centerY,
      radius: 44,
      startAngle: 0,
      endAngle: Math.PI * 2,
      color: "#fff",
    });

    drawNumber(context, centerX, centerY, "4.83");
  }, []);

  function drawPieSlice({
    context,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color,
  }: DrawPieSliceProps) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.closePath();
    context.fill();
  }

  const drawNumber = (
    context: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    num: string
  ) => {
    context.beginPath();
    context.font = "900 32px Inter";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "black";

    context.fillText(num, centerY, centerX);
  };

  return (
    <div className={styles.root}>
      <canvas ref={refRating} width={140} height={140}></canvas>
      <div className={styles.container_likes}>
        <TitleStatistic text={"Количество за"} listValue={listValue} />

        <div className={`${styles.likes} ${styles.likes_img_like}`}>
          <p>{likes.sum}</p>
          <span className={styles.span_color_green}>{` +${1}`}</span>
        </div>

        <div className={`${styles.likes} ${styles.likes_img_dislike}`}>
          <p>{dislike.sum}</p>
          <span className={styles.span_color_pink}>{` +${5}`}</span>
        </div>
      </div>
    </div>
  );
}
