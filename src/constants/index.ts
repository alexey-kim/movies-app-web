const CODE = 'code';

export const Constants = {
  COLORS: {
    PRIMARY: '#212121',
    SECONDARY: '#726a65'
  },
  CSS_BORDER_RADIUS_REM: 0.25,
  CSS_BREAKPOINTS: {
    /** xs - 0px */
    MOBILE_PORTRAIT_REM: 0,
    /** sm - 480px */
    MOBILE_LANDSCAPE_REM: 30,
    /** md - 768px */
    TABLET_PORTRAIT_REM: 48,
    /** lg - 1024px */
    TABLET_LANDSCAPE_REM: 64,
    /** xl - 1280px */
    DESKTOP_REM: 80,
    /** xxl - 1920px */
    WIDE_DESKTOP_REM: 120
  },
  /** 16px */
  CSS_PX_PER_REM: 16,
  DI: {
    EVENT_SERVICE: Symbol('EventService')
  },
  /** 3 / 2 aspect ratio */
  IMAGE_ASPECT_RATIO: 1.5,
  PAGE_SIZE: 20,
  ROUTE_PARAMS: {
    CODE
  },
  ROUTES: {
    ALL_MOVIES: '/',
    MOVIE_DETAIL: `/movies/:${CODE}`
  }
} as const;
