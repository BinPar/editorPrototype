import React from 'react';
import styled, { css } from 'styled-components';

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
  F40: '2.5rem '/* 40pts */,
  F37: '2.31rem '/* 37pts */,
  F35: '2.1875rem '/* 37pts */,
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
  greyLighter: '#F9FBFA',
  greyLight: '#EDF2F0',
  greyMed: '#BCBDC1',
  greyDark: '#6E6F71',
  greyDarker: '#323031',

  primaryLightest: '#F0F6F5',
  primaryLighter: '#E8F3F1',
  primaryLight: '#AFC6CA',
  primary: '#8DC3B9',
  primaryMed: '#5C817A',
  primaryDark: '#578995',
  primaryDarker: '#485869',

  secondaryLight: '#FBFAF7',
  secondary: '#EAC36A',
  secondaryDark: '#B29451',

  error: '#F2735F',
  warning: '#EFA773',
  warningDark: '#956847',

  white: '#FFFFFF',

  backgroundLightGreen: '#F9FBFA',

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

// ICONS

export const icon = {
  addCircle: 'addCircle',
  alignLeft: 'alignLeft',
  alignRight: 'alignRight',
  article: 'article',
  bell: 'bell',
  blockLeft: 'blockLeft',
  blockRight: 'blockRight',
  bold: 'bold',
  bulletList: 'bulletList',
  calendar: 'calendar',
  centered: 'centered',
  check: 'check',
  clock: 'clock',
  close: 'close',
  closeCircle: 'closeCircle',
  doubt: 'doubt',
  dragMouse: 'dragMouse',
  edit: 'edit',
  evaluation: 'evaluation',
  fixedTextLeft: 'fixedTextLeft',
  fixedTextRight: 'fixedTextRight',
  full: 'full',
  highlight: 'highlight',
  image: 'image',
  index: 'index',
  information: 'information',
  italic: 'italic',
  knowledge: 'knowledge',
  letterList: 'letterList',
  link: 'link',
  longArrowLeft: 'longArrowLeft',
  longArrowRight: 'longArrowRight',
  maximize: 'maximize',
  midCenter: 'midCenter',
  midLeft: 'midLeft',
  midRight: 'midRight',
  minimize: 'minimize',
  numberList: 'numberList',
  paragraph: 'paragraph',
  quote: 'quote',
  quoteOne: 'quoteOne',
  quoteThree: 'quoteThree',
  quoteTwo: 'quoteTwo',
  redo: 'redo',
  resources: 'resources',
  star: 'star',
  subtitle: 'subtitle',
  table: 'table',
  textLeft: 'textLeft',
  textRight: 'textRight',
  undo: 'undo',
  user: 'user',
  video: 'video',
  videoPlay: 'videoPlay',
};
