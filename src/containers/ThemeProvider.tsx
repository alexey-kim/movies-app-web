import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, Theme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';
import { Constants } from '../constants';
import { asRem, pxToRem } from '../utils/stylingUtils';

const defaultTheme: Theme = createMuiTheme();
const fontFamily = 'Roboto, sans-serif';

const breakpointValues: BreakpointValues = {
  xs: Constants.CSS_BREAKPOINTS.MOBILE_PORTRAIT_REM,
  sm: Constants.CSS_BREAKPOINTS.MOBILE_LANDSCAPE_REM,
  md: Constants.CSS_BREAKPOINTS.TABLET_PORTRAIT_REM,
  lg: Constants.CSS_BREAKPOINTS.TABLET_LANDSCAPE_REM,
  xl: Constants.CSS_BREAKPOINTS.DESKTOP_REM
};

// Use rem units instead of px
const commonThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: Constants.COLORS.PRIMARY
    },
    secondary: {
      main: Constants.COLORS.SECONDARY
    }
  },
  breakpoints: {
    values: breakpointValues,
    unit: 'rem',
    step: 1
  },
  mixins: {
    toolbar: {}
  },
  overrides: {
    MuiButton: {
      root: {
        padding: pxToRem(6, 16),
        minWidth: pxToRem(64),
        textTransform: 'inherit'
      },
      text: {
        padding: pxToRem(6, 8)
      },
      outlined: {
        padding: pxToRem(5, 15),
        borderWidth: pxToRem(1),
        '&$disabled': {
          borderWidth: pxToRem(1)
        }
      },
      outlinedPrimary: {
        borderWidth: pxToRem(1),
        '&:hover': {
          borderWidth: pxToRem(1)
        }
      },
      outlinedSecondary: {
        borderWidth: pxToRem(1),
        '&:hover': {
          borderWidth: pxToRem(1)
        },
        '&$disabled': {
          borderWidth: pxToRem(1)
        }
      },
      textSizeSmall: {
        padding: pxToRem(4, 5)
      },
      textSizeLarge: {
        padding: pxToRem(8, 11)
      },
      outlinedSizeSmall: {
        padding: pxToRem(3, 9)
      },
      outlinedSizeLarge: {
        padding: pxToRem(7, 21)
      },
      containedSizeSmall: {
        padding: pxToRem(4, 10)
      },
      containedSizeLarge: {
        padding: pxToRem(8, 22)
      },
      startIcon: {
        marginLeft: pxToRem(-4),
        marginRight: pxToRem(8),
        '&$iconSizeSmall': {
          marginLeft: pxToRem(-2)
        }
      },
      endIcon: {
        marginLeft: pxToRem(8),
        marginRight: pxToRem(-4),
        '&$iconSizeSmall': {
          marginRight: pxToRem(-2)
        }
      },
      iconSizeSmall: {
        '& > *:first-child': {
          fontSize: pxToRem(18)
        }
      },
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: pxToRem(20)
        }
      },
      iconSizeLarge: {
        '& > *:first-child': {
          fontSize: pxToRem(22)
        }
      }
    },
    MuiContainer: {
      fixed: {
        [`@media (min-width:${asRem(breakpointValues.sm)})`]: {
          maxWidth: asRem(breakpointValues.sm)
        },
        [`@media (min-width:${asRem(breakpointValues.md)})`]: {
          maxWidth: asRem(breakpointValues.md)
        },
        [`@media (min-width:${asRem(breakpointValues.lg)})`]: {
          maxWidth: asRem(breakpointValues.lg)
        },
        [`@media (min-width:${asRem(breakpointValues.xl)})`]: {
          maxWidth: asRem(breakpointValues.xl)
        }
      },
      maxWidthXs: {
        [`@media (min-width:${asRem(breakpointValues.xs)})`]: {
          maxWidth: asRem(breakpointValues.sm)
        }
      },
      maxWidthSm: {
        [`@media (min-width:${asRem(breakpointValues.sm)})`]: {
          maxWidth: asRem(breakpointValues.md)
        }
      },
      maxWidthMd: {
        [`@media (min-width:${asRem(breakpointValues.md)})`]: {
          maxWidth: asRem(breakpointValues.lg)
        }
      },
      maxWidthLg: {
        [`@media (min-width:${asRem(breakpointValues.lg)})`]: {
          maxWidth: asRem(breakpointValues.xl)
        }
      },
      maxWidthXl: {
        [`@media (min-width:${asRem(breakpointValues.xl)})`]: {
          maxWidth: asRem(Constants.CSS_BREAKPOINTS.WIDE_DESKTOP_REM)
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: pxToRem(12)
      },
      edgeStart: {
        marginLeft: pxToRem(-12),
        '$sizeSmall&': {
          marginLeft: pxToRem(-3)
        }
      },
      edgeEnd: {
        marginRight: pxToRem(-12),
        '$sizeSmall&': {
          marginRight: pxToRem(-3)
        }
      },
      sizeSmall: {
        padding: pxToRem(3)
      }
    },
    MuiPaper: {
      outlined: {
        borderWidth: pxToRem(1)
      }
    },
    MuiToolbar: {
      regular: {
        minHeight: pxToRem(56),
        [`@media (min-width:${asRem(breakpointValues.xs)}) and (orientation: landscape)`]: {
          minHeight: pxToRem(48)
        },
        [`@media (min-width:${asRem(breakpointValues.sm)})`]: {
          minHeight: pxToRem(64)
        }
      },
      dense: {
        minHeight: pxToRem(48)
      }
    },
    MuiTypography: {
      srOnly: {
        width: pxToRem(1),
        height: pxToRem(1)
      },
      paragraph: {
        marginBottom: pxToRem(16)
      }
    }
  },
  shadows: [
    'none',
    `${pxToRem(0, 2, 1, -1)} rgba(0,0,0,0.2), ${pxToRem(0, 1, 1, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 3, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 3, 1, -2)} rgba(0,0,0,0.2), ${pxToRem(0, 2, 2, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 5, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 3, 3, -2)} rgba(0,0,0,0.2), ${pxToRem(0, 3, 4, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 8, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 2, 4, -1)} rgba(0,0,0,0.2), ${pxToRem(0, 4, 5, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 10, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 3, 5, -1)} rgba(0,0,0,0.2), ${pxToRem(0, 5, 8, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 14, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 3, 5, -1)} rgba(0,0,0,0.2), ${pxToRem(0, 6, 10, 0)} rgba(0,0,0,0.14), ${pxToRem(0, 1, 18, 0)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 4, 5, -2)} rgba(0,0,0,0.2), ${pxToRem(0, 7, 10, 1)} rgba(0,0,0,0.14), ${pxToRem(0, 2, 16, 1)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 5, 5, -3)} rgba(0,0,0,0.2), ${pxToRem(0, 8, 10, 1)} rgba(0,0,0,0.14), ${pxToRem(0, 3, 14, 2)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 5, 6, -3)} rgba(0,0,0,0.2), ${pxToRem(0, 9, 12, 1)} rgba(0,0,0,0.14), ${pxToRem(0, 3, 16, 2)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 6, 6, -3)} rgba(0,0,0,0.2), ${pxToRem(0, 10, 14, 1)} rgba(0,0,0,0.14), ${pxToRem(0, 4, 18, 3)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 6, 7, -4)} rgba(0,0,0,0.2), ${pxToRem(0, 11, 15, 1)} rgba(0,0,0,0.14), ${pxToRem(0, 4, 20, 3)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 7, 8, -4)} rgba(0,0,0,0.2), ${pxToRem(0, 12, 17, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 5, 22, 4)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 7, 8, -4)} rgba(0,0,0,0.2), ${pxToRem(0, 13, 19, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 5, 24, 4)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 7, 9, -4)} rgba(0,0,0,0.2), ${pxToRem(0, 14, 21, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 5, 26, 4)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 8, 9, -5)} rgba(0,0,0,0.2), ${pxToRem(0, 15, 22, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 6, 28, 5)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 8, 10, -5)} rgba(0,0,0,0.2), ${pxToRem(0, 16, 24, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 6, 30, 5)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 8, 11, -5)} rgba(0,0,0,0.2), ${pxToRem(0, 17, 26, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 6, 32, 5)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 9, 11, -5)} rgba(0,0,0,0.2), ${pxToRem(0, 18, 28, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 7, 34, 6)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 9, 12, -6)} rgba(0,0,0,0.2), ${pxToRem(0, 19, 29, 2)} rgba(0,0,0,0.14), ${pxToRem(0, 7, 36, 6)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 10, 13, -6)} rgba(0,0,0,0.2), ${pxToRem(0, 20, 31, 3)} rgba(0,0,0,0.14), ${pxToRem(0, 8, 38, 7)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 10, 13, -6)} rgba(0,0,0,0.2), ${pxToRem(0, 21, 33, 3)} rgba(0,0,0,0.14), ${pxToRem(0, 8, 40, 7)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 10, 14, -6)} rgba(0,0,0,0.2), ${pxToRem(0, 22, 35, 3)} rgba(0,0,0,0.14), ${pxToRem(0, 8, 42, 7)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 11, 14, -7)} rgba(0,0,0,0.2), ${pxToRem(0, 23, 36, 3)} rgba(0,0,0,0.14), ${pxToRem(0, 9, 44, 8)} rgba(0,0,0,0.12)`,
    `${pxToRem(0, 11, 15, -7)} rgba(0,0,0,0.2), ${pxToRem(0, 24, 38, 3)} rgba(0,0,0,0.14), ${pxToRem(0, 9, 46, 8)} rgba(0,0,0,0.12)`
  ],
  shape: {
    borderRadius: asRem(Constants.CSS_BORDER_RADIUS_REM) as any
  },
  spacing: (multiplier: number) => asRem(multiplier / 2),
  typography: {
    fontFamily,
    body1: {
      ...defaultTheme.typography.body2,
      fontFamily
    }
  }
};

export const ThemeProvider: React.FC = ({ children }) => {

  // Support light and dark themes
  const isDarkTheme: boolean = useMediaQuery('(prefers-color-scheme: dark)');
  const currentTheme: Theme = createMuiTheme({
    ...commonThemeOptions,
    palette: {
      ...commonThemeOptions.palette,
      type: isDarkTheme ? 'dark' : 'light'
    }
  });

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
