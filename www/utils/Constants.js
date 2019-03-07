import React from 'react';
import styled, { css } from 'styled-components';

// FONT FAMILY

export const fontFamily = {
  serif: 'IBM Plex Serif',
  sansSerif: 'Muli',
};

// FONT STYLE

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
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
};

// COLORS

export const colors = {
  greyLighter: '#F9FBFA',
  greyLight: '#EDF2F0',
  greyMed: '#BCBDC1',
  greyDark: '#6E6F71',
  greyDarker: '#323031',

  primaryLight: '#AFC6CA',
  primary: '#8DC3B9',
  primaryDark: '#578995',
  primaryDarker: '#485869',

  secondary: '#EAC36A',
  error: '#F2735F',
  warning: '#EFA773',
  warningDark: '#956847',

  white: '#FFFFFF',

  backgroundLightGreen: '#F9FBFA',
};

// MEDIA QUERIES

export const sizes = {
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
