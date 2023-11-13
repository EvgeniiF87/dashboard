import { CanvasDrawGraphProps } from './types';

class CanvasDrawGraph {
  readonly baseContext;
  constructor({ baseContext }: CanvasDrawGraphProps) {
    this.baseContext = baseContext;
  }

  drawLine = (
    numberLines: number, // колличество линий
    startX: number,
    startY: number,
    andX: number,
    andY: number,
    lineSpacingHorizontal: number, // интервал линий
    lineSpacingVertical: number, // интервал линий
    color: string
  ) => {
    this.baseContext.beginPath();
    for (let i = 0; i < numberLines; i++) {
      this.baseContext.moveTo(startX, startY);
      this.baseContext.lineTo(andX, andY);
      if (numberLines > 0) {
        startY -= lineSpacingHorizontal;
        andY -= lineSpacingHorizontal;
        startX += lineSpacingVertical;
        andX += lineSpacingVertical;
      }
    }
    this.baseContext.strokeStyle = color;
    this.baseContext.stroke();
  };

  drawNumberScale = (
    startX: number,
    startY: number,
    numberDigits: number, // колличество цыфр
    numberSpacing: number, // интервал цыфр
    numberSpacingHorizontal: number, // интервал расположения цыфр
    numberSpacingVertical: number, // интервал расположения цыфр
    style: string,
    color: string = 'black',
    textAlign: CanvasTextAlign,
    textBaseline: CanvasTextBaseline
  ) => {
    this.baseContext.beginPath();
    let startNumber = 0;
    for (let i = 0; i < numberDigits + 1; i++) {
      this.baseContext.fillText(`${startNumber}`, startX, startY);
      this.baseContext.textAlign = textAlign;
      this.baseContext.textBaseline = textBaseline;
      startY -= numberSpacingHorizontal;
      startX += numberSpacingVertical;
      startNumber += numberSpacing;
    }
    this.baseContext.font = style;
    this.baseContext.fillStyle = color;
    this.baseContext.stroke();
  };
}

export { CanvasDrawGraph };
