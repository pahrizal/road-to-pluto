import { TableAction } from "../common/constants";
import { IsEmpty } from "../common/check";
import { Action,RoadTableState } from "../common/types";
import data from '../dummyData.json'
const initialState:RoadTableState={
  rows:data,
  filter:{
    roadname:[],
    parcelId:0,
    type:""
  }
}
const roadTableReducer = (state: RoadTableState = initialState,action: Action): RoadTableState =>{
  const {type, payload} = action;
  switch(type){
    case TableAction.Filter:
      let newRows = data;
      if(!IsEmpty(payload.roadname) && payload.roadname.length>0){
        newRows = data.filter(x=> new RegExp(payload.roadname.join("|"),'i').test(x.roadname))
      }
      if(!IsEmpty(payload.type)){
        newRows = newRows.filter(x=> x.type===payload.type)
      }
      if(!IsEmpty(payload.parcelId) && parseInt(payload.parcelId,10)>0){
       newRows = newRows.filter(x=> x.parcelId===parseInt(payload.parcelId,10))
      }
      const out= {
        ...state,
        filter: {...payload},
        rows:newRows
      }
      console.log(out)
      return out;
    default:
      return state
  }
}
export default roadTableReducer