export interface Action{
  type: string,
  payload: any
}
export interface RoadData{
  length: number,
  parcelId: number,
  userId: string,
  municipality: string,
  admNr: number,
  segment: number,
  direction: string,
  type: string,
  fromKmt: string,
  toKmt: string,
  roadname: string,
  roadwidth: number,
  creationDate: string
}
export interface RoadFilter{
  roadname:string[],
  type:string,
  parcelId:number
}
export interface RoadTableState{
  rows: RoadData[],
  filter: RoadFilter,
}

export type DispatchType = (args: Action) => Action