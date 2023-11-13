import  { useRef, useEffect } from 'react';
import styles from './GraphColumn.module.scss';
import TitleStatistic from '../../../shared/ui/title-statistic/TitleStatistic';
import { CanvasDrawGraph } from '../../../shared/service/canvas/CanvasDrawGraph';

export default function GraphColumn() {
  const refCanvas = useRef<HTMLCanvasElement | null>(null);

  const data = [
    { month: 'Jan', numberEvents: 352 },
    { month: 'Jan', numberEvents: 142 },
    { month: 'Jan', numberEvents: 225 },
    { month: 'Jan', numberEvents: 452 },
    { month: 'Jan', numberEvents: 420 },
    { month: 'Jan', numberEvents: 45 },
    { month: 'Jan', numberEvents: 652 },
    { month: 'Jan', numberEvents: 652 },
    { month: 'Jan', numberEvents: 652 },
    { month: 'Jan', numberEvents: 652 },
    { month: 'Jan', numberEvents: 652 },
    { month: 'Jan', numberEvents: 652 },
  ];

  const maxEvents = data.reduce((sum, num) => {
    if (sum < num.numberEvents) {
      return num.numberEvents;
    } else {
      return sum;
    }
  }, 0);

  const numberHorizontalLineMark = Math.ceil(Math.max(maxEvents) / 250);
  const HeightY = numberHorizontalLineMark * 60 + 7;
  const widthX = data.length * 73.5;

  useEffect(() => {
    const canvas = refCanvas.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const graphColumn = new CanvasDrawGraph({
      baseContext: context,
    });

    graphColumn.drawLine(
      1,
      50,
      HeightY,
      widthX + 50,
      HeightY,
      0,
      0,
      'rgba(0, 0, 0, 1)'
    );

    graphColumn.drawLine(
      numberHorizontalLineMark,
      50,
      HeightY - 60,
      60,
      HeightY - 60,
      60,
      0,
      'rgba(0, 0, 0, 1)'
    );

    graphColumn.drawLine(1, 60, 7, 60, HeightY, 0, 0, 'rgba(0, 0, 0, 1)');

    graphColumn.drawLine(
      data.length,
      97,
      HeightY,
      97,
      HeightY + 10,
      0,
      74.5,
      'rgba(0, 0, 0, 1)'
    );

    graphColumn.drawNumberScale(
      30,
      HeightY,
      numberHorizontalLineMark,
      250,
      60,
      0,
      'normal 12px Inter',
      'black',
      'center',
      'alphabetic'
    );
  }, []);

  return (
    <div className={styles.root}>
      <TitleStatistic
        text={'Количество добавлений события в календарь'}
        listValue={null}
      />
      <canvas
        width={widthX + 50}
        height={HeightY + 52}
        ref={refCanvas}
      ></canvas>
    </div>
  );
}
