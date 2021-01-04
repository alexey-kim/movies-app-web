import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import * as React from 'react';
import { useEventListener } from '../events/hooks/useEventListener';

export const Header: React.FC = () => {

  const [leftButton, setLeftButton] = React.useState<React.ReactNode>(() => undefined);
  const [title, setTitle] = React.useState<React.ReactNode>(() => undefined);
  const classes = useStyles();

  useEventListener('headerLeftButtonAndTitleSetEvent', async ({ leftButton: _leftButton, title: _title }): Promise<void> => {
    setLeftButton(_leftButton);
    setTitle(_title);
  });

  return (
    <AppBar position='sticky'>
      <Toolbar>
        {leftButton}
        {title || (
          <Typography
            component='h1'
            variant='h6'
            noWrap={true}>
            {/* TODO: Localise content */}
            Movies App
          </Typography>
        )}
        <div className={classes.spacer} />
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

const useStyles = makeStyles(() => createStyles({
  spacer: {
    flexGrow: 1
  }
}));
