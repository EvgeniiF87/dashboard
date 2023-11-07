import type { CustomError } from "../../../shared";
import type { InfoModel } from "../domain";
import { CreateInfoInput, UpdateInfoInput } from "../DTO/info-dto";



export interface InfoService {
  createInfo: (args: CreateInfoInput) => Promise<{ data: {createInfo: InfoModel } } | CustomError>;
  removeInfo: (id: number) => Promise<{ data: {removeInfo: InfoModel } } | CustomError>;
  updateInfo: (args: UpdateInfoInput) => Promise<{ updateInfo: {createInfo: InfoModel } } | CustomError>;
  info: (id: number) => Promise<{ data: {info: InfoModel } } | CustomError>;
  allInfo: () => Promise<{ data: {allInfo: InfoModel[] } } | CustomError>;
}