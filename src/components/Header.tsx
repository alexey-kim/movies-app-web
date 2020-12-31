import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import * as React from 'react';

export const Header: React.FC = () => {

  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          aria-label='back'
          className={classes.backButton}>
          <ArrowBackOutlinedIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          className={classes.title}>
          Pop Movies
        </Typography>
        <IconButton
          color='inherit'
          edge='end'
          aria-label='settings'>
          <MoreVertOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));
