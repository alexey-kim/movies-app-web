import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import * as React from 'react';
import { css } from '../utils/stylingUtils';

export interface IMaxWidthContainerProps {
  readonly children: NonNullable<React.ReactNode>;
  readonly maxWidthBreakpoint: Breakpoint;
  readonly contentClassName?: string;
}

export const MaxWidthContainer: React.FC<IMaxWidthContainerProps> = ({ children, maxWidthBreakpoint, contentClassName }) => {

  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Container
        component='main'
        maxWidth={maxWidthBreakpoint}
        className={css(classes.mainContent, contentClassName)}>
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
    padding: theme.spacing(2)
  }
}));
