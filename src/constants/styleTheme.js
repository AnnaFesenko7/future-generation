export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    header: '#d4d9d6',
    backgroundBody: '#f7fcf9',
    accentColor: '#0090d7',
    tel: '#1925ff',
  },

  fontSizes: {
    ss: '10px',
    xs: '12px',
    s: '14px',
    xm: '16px',
    m: '20px',
    l: '32px',
    xl: '40px',
    xxl: '45px',
    xxxl: '64px',
  },
  space: [0, 2, 4, 8, 16, 20, 40, 64, 96, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontWeights: {
    light: 300,
    normal: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.38,
    secondBody: 1.21,
    heading: 2.71,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
    dropdown: '1px solid #050eb5',
    // test: '3px red',
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
  boxShadow: {
    main: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    btn: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    inputTitle: '0px 1px 2px rgba(29, 29, 27, 0.15)',
    infoBox: '0px 2px 3px rgba(9, 30, 63, 0.1)',
  },

  transform: {
    invisible: 'translateX(100%)',
    full: 'translateX(0)',
  },

  media: {
    mobile: 'screen and (min-width: 320px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1280px)',
  },
  mediaWidth: {
    mobile: 320,
    tablet: 768,
    desktop: 1280,
  },
};
