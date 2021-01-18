import * as React from 'react';
import { SearchInput } from './component/searchInput'
import './App.css';
import { RoadData, RoadFilter, RoadTableState } from './common/types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { CustomSelect } from './component/customSelect';
import _ from 'lodash'
import { TableAction } from './common/constants';
import { Dispatch } from "redux"
import RoadTable from './component/roadTable';
import BottomNav from './component/bottomNav';
import { Button } from '@material-ui/core';

const App: React.FC = () => {
  const roads: readonly RoadData[] = useSelector(
    (state: RoadTableState) => state.rows, shallowEqual
  )
  const filter: RoadFilter = useSelector(
    (state: RoadTableState) => state.filter, shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()

  const roadTypes: string[] = Object.keys(_.groupBy(roads, (v: RoadData) => v.type));
  const parcelIds: string[] = Object.keys(_.groupBy(roads, (v: RoadData) => v.parcelId));
  const doFilter = React.useCallback(
    (filterData: RoadFilter) => dispatch({ type: TableAction.Filter, payload: filterData }), [dispatch]
  )
  const handleRoadNameFilter = (v: string[]) => {
    doFilter({ ...filter, roadname: v })
  }
  const handleParcelIdFilter = (e: any) => {
    doFilter({ ...filter, parcelId: e.target.value })
  }
  const handleRoadTypeFilter = (e: any) => {
    doFilter({ ...filter, type: e.target.value })
  }
  const handleSearch = (e: any) => {
    console.log(roads)
  }
  return (
    <>
    <div className="content-inside">
      <div style={{ display: 'flex', width:'100%',justifyContent:'center'}}>
        <SearchInput placeholder="Road name..." onChange={handleRoadNameFilter} onSearch={handleSearch} />
        <CustomSelect onChange={handleParcelIdFilter} placeholder="Parcel ID..." items={parcelIds.map((v: string) => ({ value: v, text: v }))} />
        <CustomSelect onChange={handleRoadTypeFilter} placeholder="Road Type..." items={roadTypes.map((v: string) => ({ value: v, text: v }))} />
      </div>
      <div style={{ display:'flex', width:'100%',justifyContent:'center',marginTop:40}}>
        <RoadTable rows={roads} style={{width:'90%',minWidth:570}} />
      </div>
    </div>
    <footer className="footer">
      <div style={{paddingRight:40}}>
        <Button variant="outlined" style={{borderColor:'#fff',color:'#fff'}}>Export</Button>
      </div>
    </footer>      
    </>
);
}

export default App;
