import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ChipInput from 'material-ui-chip-input'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SearchInput = (props: any) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <ChipInput 
        defaultValue={[]}
        onChange={props.onChange}
        fullWidth={true}
        InputProps={{placeholder:props.placeholder}}
      />
      <IconButton className={classes.iconButton} onClick={props.onSearch}  aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
