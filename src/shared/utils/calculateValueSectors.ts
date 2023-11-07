import { ISelector } from "../service/canvas/types";


type Selectors = {
  count: number;
  color: string;
}

export function calculatePieSectors(radius: number, selectors: Selectors[]): ISelector[] {
  const numSectors = selectors.length;
  let totalPercentage = 0; 

  const sectors = [];
  const result = []

  for (let i = 0; i < numSectors; i++) {
    const percentage = selectors[i].count;
    sectors.push(percentage);
    totalPercentage += percentage;
  }

  /** Нормализуем доли секторов, чтобы их сумма была равна 100% */
  for (let i = 0; i < numSectors; i++) {
    sectors[i] /= totalPercentage;
    sectors[i] *= 100; 
    const ratio = sectors[i]
    const color = selectors[i].color
    result.push({ ratio, radius, color })
  }

  return result;
}

