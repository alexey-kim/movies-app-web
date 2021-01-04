import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import * as React from 'react';

export interface IMaxWidthContainerProps {
  readonly children: NonNullable<React.ReactNode>;
  readonly maxWidthBreakpoint: Breakpoint;
}

export const MaxWidthContainer: React.FC<IMaxWidthContainerProps> = ({ children, maxWidthBreakpoint }) => {

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container
        component='main'
        maxWidth={maxWidthBreakpoint}
        className={classes.mainContent}>
        {children}
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  background: {
    backgroundColor: theme.palette.action.disabledBackground
  },
  mainContent: {
    backgroundColor: theme.palette.background.default,
    padding: 0
  }
}));
