import { css } from 'styled-components';

// FONT FAMILY

export const fontFamily = {
  serif: 'IBM Plex Serif',
  sansSerif: 'Muli',
  icon: 'panamericanaIconFont',
};

// FONT STYLE

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
};

// FONT SIZE

export const fontSize = {
  F70: '4.375rem ' /* 70pts */,
  F45: '2.8125rem ' /* 40pts */,
  F40: '2.5rem ' /* 40pts */,
  F37: '2.31rem ' /* 37pts */,
  F35: '2.1875rem ' /* 37pts */,
  F32: '2rem' /* 32pts */,
  F30: '1.875rem' /* 30pts */,
  F29: '1.8125rem' /* 29pts */,
  F28: '1.75rem' /* 28pts */,
  F27: '1.6875rem' /* 27pts */,
  F26: '1.625rem' /* 26pts */,
  F25: '1.5625rem' /* 25pts */,
  F24: '1.5rem' /* 24pts */,
  F23: '1.4375rem' /* 23pts */,
  F22: '1.375rem' /* 22pts */,
  F21: '1.3125rem' /* 21pts */,
  F20: '1.25rem' /* 20pts */,
  F19: '1.1875rem' /* 19pts */,
  F18: '1.125rem' /* 18pts */,
  F17: '1.0625rem' /* 17pts */,
  F16: '1rem' /* 16pts */,
  F15: '0.9375rem' /* 15pts */,
  F14: '0.875rem' /* 14pts */,
  F13: '0.8125rem' /* 13pts */,
  F12: '0.75rem' /* 12pts */,
  F11: '0.6875rem' /* 11pts */,
  F10: '0.625rem' /* 10pts */,
  F09: '0.5625rem' /* 9pts */,
  F08: '0.5rem' /* 8pts */,
};

// FONT WEIGHT

export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

// COLORS

export const colors = {

  // BASICS

  greyLighter: '#F9FBFA',
  greyLight: '#EDF2F0',
  greyMed: '#BCBDC1',
  greyDark: '#6E6F71',
  greyDarker: '#323031',

  white: '#FFFFFF',
  black: '#000000',

  secondaryLight: '#FBFAF7',
  secondary: '#EAC36A',
  secondaryDark: '#B29451',
  secondaryDarker: '#57503b',

  red: '#F2735F',
  orange: '#EFA773',
  orangeDark: '#956847',


  // DEFAULT

  primaryLightest: '#F1F7F6',
  primaryLighter: '#E8F3F1',
  primaryLight: '#AFC6CA',
  primary: '#8DC3B9',
  primaryTrans10: '#E6F1EF',
  primaryMed: '#5C817A',
  primaryDark: '#578995',
  primaryDarker: '#485869',
  primaryDarkerLightest: '#EAEBEC',
  primaryDarkerLighten: '#B6BCC3',
  primaryDarkerMed: '#7C8995',

  // DARK


  darkPrimaryLightest: '#68a1af',
  darkPrimaryLighter: '#BFC8C9',
  darkPrimaryLight: '#7F9194',
  darkPrimaryMed: '#2C3640',
  darkPrimaryMedTwo: '#37424F',
  darkPrimaryDark: '#1A2026',
  darkPrimaryDarkest: '#0E1113',
  darkPrimaryDarkestLightest: '#96a3b1',
  darkPrimaryDarkestLighten: '#4d5e69',
  darkPrimaryDarkestMed: '#262e33',

  // SEPIA

  beigeLighter: '#fffaf4',
  beigeLight: '#ffedda',
  beigeMed: '#bfa991',
  beigeDark: '#8f7252',
  beigeDarker: '#3e3122',

  sepiaLightest: '#fffdf9',
  sepiaLighter: '#f7f2ea',
  sepiaLight: '#f7f3ea',
  sepiaTrans: '#e8e4db',
  sepia: '#c5b9b2',
  sepiaMed: '#736c67',
  sepiaDark: '#5d544d',
  sepiaDarker: '#372e26',
  sepiaDarkerLightest: '#d6c9be',
  sepiaDarkerLighten: '#a09489',
  sepiaDarkerLight: '#756759',
  sepiaDarkerMed: '#645445',

};

// MEDIA QUERIES

export const sizes = {
  minDeskMegaHD: 1921,

  maxDeskUltraHD: 1920,
  minDeskUltraHD: 1661,

  maxDeskHD: 1660,
  minDeskHD: 1441,

  maxDeskLarge: 1440,
  minDeskLarge: 1280,

  maxDesk: 1279,
  minDesk: 1025,

  maxTablet: 1024,
  minTablet: 768,

  maxMobile: 767,
  minMobile: 480,
};

export const maxMedia = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${sizes[key] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const minMedia = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${sizes[key] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

// SIDEBAR

export const sidebarWidth = '350px';

// ICONS

export const icon = {
  addCircle: 'addCircle',
  adjustment: 'adjustment',
  alignLeft: 'alignLeft',
  alignRight: 'alignRight',
  article: 'article',
  badge: 'badge',
  bell: 'bell',
  blockLeft: 'blockLeft',
  blockRight: 'blockRight',
  bold: 'bold',
  bulletList: 'bulletList',
  calendar: 'calendar',
  centered: 'centered',
  check: 'check',
  checkCircle: 'checkCircle',
  clock: 'clock',
  close: 'close',
  closeCircle: 'closeCircle',
  doubt: 'doubt',
  drag: 'drag',
  dragMouse: 'dragMouse',
  edit: 'edit',
  editSmall: 'editSmall',
  evaluation: 'evaluation',
  eye: 'eye',
  fixedTextLeft: 'fixedTextLeft',
  fixedTextRight: 'fixedTextRight',
  fontBig: 'fontBig',
  fontSmall: 'fontSmall',
  full: 'full',
  hexagon: 'hexagon',
  highlight: 'highlight',
  image: 'image',
  index: 'index',
  information: 'information',
  italic: 'italic',
  knowledge: 'knowledge',
  letterList: 'letterList',
  link: 'link',
  lock: 'lock',
  longArrowLeft: 'longArrowLeft',
  longArrowRight: 'longArrowRight',
  logout: 'logout',
  maximize: 'maximize',
  midCenter: 'midCenter',
  midLeft: 'midLeft',
  midRight: 'midRight',
  minimize: 'minimize',
  numberList: 'numberList',
  paragraph: 'paragraph',
  print: 'print',
  quote: 'quote',
  quoteOne: 'quoteOne',
  quoteThree: 'quoteThree',
  quoteTwo: 'quoteTwo',
  redo: 'redo',
  resources: 'resources',
  star: 'star',
  starCircle: 'starCircle',
  settings: 'settings',
  subtitle: 'subtitle',
  table: 'table',
  textLeft: 'textLeft',
  textRight: 'textRight',
  trash: 'trash',
  undo: 'undo',
  user: 'user',
  video: 'video',
  videoPlay: 'videoPlay',
};

// INPUT

export const inputSize = {
  full: css`
    width: 100%;
  `,
  half: css`
    ${maxMedia.maxMobile`
      width: 100%;
    `}
    ${minMedia.minTablet`
      width: calc(50% - 10px);
    `}
  `,
  third: css`
    ${maxMedia.maxMobile`
      width: 100%;
    `}
    ${maxMedia.maxTablet`
      width: calc(50% - 15px);
    `}
    ${minMedia.minDesk`
      width: calc((100% / 3) - 15px);
    `}
  `,
  fourth: css`
    ${maxMedia.minMobile`
      width: 100%;
    `}
    ${maxMedia.maxTablet`
      width: calc(50% - 15px);
    `}
    ${minMedia.minDesk`
      width: calc((100% / 4) - 15px);
    `}
  `,
  fifth: css`
    ${maxMedia.minMobile`
      width: 100%;
    `}
    ${maxMedia.maxTablet`
      width: calc(50% - 15px);
    `}
    ${minMedia.minDesk`
      width: calc((100% / 5) - 15px);
    `}
  `,
  sixth: css`
    ${maxMedia.minMobile`
      width: 100%;
    `}
    ${maxMedia.maxTablet`
      width: calc(50% - 15px);
    `}
    ${minMedia.minDesk`
      width: calc((100% / 6) - 15px);
    `}
  `,
};
