import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NativeSelect } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    paddingLeft:20,
    paddingRight:20,
    display: 'flex',
    alignItems: 'center', 
    marginLeft:20,  
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff',
    boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius:4,
    minWidth:200
    },
}));

export const CustomSelect = (props: any) => {
  const classes = useStyles();
  return (
    <NativeSelect {...props} className={classes.root}>
      <option key="ns-0" value="">{props.placeholder}</option>
      {props.items.map((v:any)=><option key={v.value} value={v.value}>{v.text}</option>)}
    </NativeSelect>
    
  );
}
