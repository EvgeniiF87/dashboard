import Style from './GraphLine.module.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function GraphLine() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const data = {
    views: [2500, 5000, 2500, 1000, 2500, 2504, 4000],
    subscribers: [2900, 1000, 2900, 1500, 4000, 2594, 4800],
  };

  const numberLine = Math.ceil(Math.max(...data.views) / 1000);
  const graphHeight = numberLine * 41.5 + 22;

  const drawHorizontalLine = (context: CanvasRenderingContext2D, num: number, graphHeight: number) => {
    context.beginPath();
    let startLine = 0;
    for (let i = 0; i < num + 1; i++) {
      context.moveTo(45, graphHeight - startLine);
      context.lineTo(592, graphHeight - startLine);
      startLine += 41.5;
    }
    context.strokeStyle = 'rgba(238, 238, 238, 1)';
    context.stroke();
  };

  const drawColumLine = (context: CanvasRenderingContext2D, graphHeight: number) => {
    context.beginPath();
    let startColum = 45;

    for (let i = 0; i < 7; i++) {
      context.moveTo(startColum, 6);
      context.lineTo(startColum, graphHeight);
      startColum += 91;
    }
    context.strokeStyle = 'rgba(238, 238, 238, 1)';
    context.stroke();
  };

  const drawnumber = (context: CanvasRenderingContext2D, num: number, graphHeight: number) => {
    context.beginPath();
    context.font = 'normal 12px Inter';
    context.fillStyle = 'black';
    let scale = 0;
    let y = graphHeight;
    for (let i = 0; i < num + 1; i++) {
      let x = 30;
      if (scale.toString().length > 1) {
        x = x - scale.toString().length * 4;
      }
      context.fillText(`${scale}`, x, y);
      y -= 41.5;
      scale += 1000;
    }
    context.stroke();
  };

  const drawWeek = (context: CanvasRenderingContext2D, graphHeight: number) => {
    context.beginPath();
    context.font = 'normal 12px Inter';
    context.fillStyle = 'black';
    const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let y = 38;
    week.forEach((day) => {
      context.fillText(`${day}`, y, graphHeight);
      y += 91;
    });
  };

  const drawViewsChart = (context: CanvasRenderingContext2D , data: number[], graphHeight: number, color: string) => {
    context.beginPath();

    let startX = 45;

    for (let i = 0; i < data.length; i++) {
      const startY = graphHeight - (data[i] / 1000) * 41.5;
      const andY = graphHeight - (data[i + 1] / 1000) * 41.5;
      context.moveTo(startX, startY);

      context.bezierCurveTo(
        startX + 30,
        startY,
        startX + 40,
        andY,
        startX + 91,
        andY
      );

      startX += 91;
    }
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
  };

  const drawPointsChart = (context: CanvasRenderingContext2D , data: number[], graphHeight: number, color: string) => {
    context.beginPath();
    let x = 45;

    for (let i = 0; i < data.length; i++) {
      const y = graphHeight - (data[i] / 1000) * 41.5;
      context.arc(x, y, 3, 0, Math.PI * 2, true);
      context.fill();
      context.fillStyle = color;
      x += 91;
      context.moveTo(x, graphHeight - (data[i + 1] / 1000) * 41.5);
    }

    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    drawHorizontalLine(context, numberLine, graphHeight - 16);
    drawColumLine(context, graphHeight - 16);
    drawnumber(context, numberLine, graphHeight - 13);
    drawWeek(context, graphHeight - 2);
    drawViewsChart(context, data.views, graphHeight - 16, '#1375AD');
    drawPointsChart(context, data.views, graphHeight - 16, '#1375AD');
    drawViewsChart(context, data.subscribers, graphHeight - 16, 'black');
    drawPointsChart(context, data.subscribers, graphHeight - 16, 'black');
  }, []);

  return (
    <div className={Style.root}>
      <div className={Style.title_container}>
        <h2 className={Style.title}>Количество просмотров и подписок за</h2>
      </div>
      <canvas
        className={Style.canvas}
        ref={canvasRef}
        width="598"
        height={graphHeight + 1}
      ></canvas>
      <ul className={Style.marker_container}>
        <li className={Style.marker_discription}>
          <div className={`${Style.marker} ${Style.marker_views}`}></div>
          <p>Просмотры</p>
        </li>
        <li className={Style.marker_discription}>
          <div className={`${Style.marker} ${Style.marker_subscribers}`}></div>
          <p>Подписки</p>
        </li>
      </ul>
    </div>
  );
}
