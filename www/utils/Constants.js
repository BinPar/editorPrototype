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

  secondaryLight: '#FBFAF7',
  secondary: '#EAC36A',
  secondaryDark: '#B29451',

  red: '#F2735F',
  orange: '#EFA773',
  orangeDark: '#956847',

};

// THEMES

export const themes = {

  defaultTheme: {
    white: colors.white,

    greyLighter: colors.greyLighter,
    greyLight: colors.greyLight,
    greyMed: colors.greyMed,
    greyDark: colors.greyDark,
    greyDarker: colors.greyDarker,

    primaryLightest: colors.primaryLightest,
    primaryLighter: colors.primaryLighter,
    primaryLight: colors.primaryLight,
    primary: colors.primary,
    primaryTrans10: colors.primaryTrans10,
    primaryMed: colors.primaryMed,
    primaryDark: colors.primaryDark,
    primaryDarker: colors.primaryDarker,
    primaryDarkerLightest: colors.primaryDarkerLightest,
    primaryDarkerLighten: colors.primaryDarkerLighten,
    primaryDarkerMed: colors.primaryDarkerMed,

    secondaryLight: colors.secondaryLight,
    secondary: colors.secondary,
    secondaryDark: colors.secondaryDark,

    error: colors.red,
    warning: colors.orange,
    warningDark: colors.orangeDark,

    // BACKGROUNDS

    bodyBg: colors.white,

    // ICON

    iconColor: colors.greyDark,

    // BUTTONS

    outlineButtonBorder: colors.primaryMed,
    outlineButtonText: colors.primaryMed,
    outlineButtonTextHover: colors.white,
    outlineButtonBg: colors.primaryMed,

    buttonText: colors.white,
    buttonBg: colors.primaryMed,
    buttonBgHover: colors.primaryDark,

    buttonIconHover: colors.greyDarker,
    buttonIconActive: colors.greyDarker,
    buttonIconActiveHover: colors.greyDark,

    // COUNTER

    counterBg: colors.primaryLight,
    counterNumber: colors.white,

    // TABS

    tabMarker: colors.primaryMed,
    tabBorder: colors.primaryLighter,
    tabText: colors.primaryDarkerLighten,
    tabTextHover: colors.primaryMed,

    // TOOLTIP

    tooltipBg: colors.greyDark,
    tooltipIcon: colors.white,
    tooltipIconActive: colors.primary,

    // FORMS

    label: colors.primaryDarkerLighten,
    inputBorder: colors.primaryDarkerLighten,
    inputBorderWithValue: colors.primaryMed,
    labelWithValue: colors.primaryMed,
    checkBg: colors.primary,
    checkIcon: colors.white,
    checkLabelHover: colors.primary,

    // PROGRESS BAR

    smallProgressBarTrail: colors.primaryDarkerLighten,
    smallProgressBarPath: colors.primaryDarkerMed,

    largeProgressBarPath: colors.primaryLight,

    circleProgressBarTrail: colors.primaryLight,
    circleProgressBarPath: colors.primary,

    // CONTENT

    // TEXT

    title: colors.greyDarker,
    subtitle: colors.greyDarker,
    paragraph: colors.greyDarker,
    listDecoration: colors.secondary,

    // LINK

    link: colors.primaryDark,
    linkHover: colors.primaryDarker,

    // HIGHLIGHTED
    highlightedBg: colors.greyLighter,
    highlightedText: colors.primaryDarker,

    // TABLE

    tableListDecoration: colors.primary,
    tableBasicBg: colors.white,
    tableBasicBorder: colors.primaryLightest,
    tableBasicText: colors.greyDark,

    tableHighlightedBg: colors.primaryLightest,
    tableHighlightedBorder: colors.white,
    tableHighlightedText: colors.primaryMed,

    cellHeaderBg: colors.primaryLight,
    cellHeaderText: colors.white,

    // QUOTES

    quoteText: colors.greyDark,
    quoteSmallAccent: colors.secondary,
    quoteMidAccent: colors.greyLight,

    // IMAGES

    imageFooterDivision: colors.greyMed,
    imageFooterText: colors.greyMed,

    // BLOCK

    infoBorder: colors.primary,
    infoBg: colors.primaryLighter,
    infoText: colors.primaryMed,

    knowledgeBorder: colors.secondary,
    knowledgeBg: colors.secondaryLight,
    knowledgeText: colors.secondaryDark,

    // AUTHOR

    authorName: colors.primaryDark,
    authorDate: colors.greyMed,

    // EDIT

    editWrapperBorder: colors.greyMed,

    // ADD

    addDivision: colors.greyMed,
    addOptionsDivision: colors.primaryDarkerLightest,
    addBgSidebar: colors.primaryLightest,
    addBg: colors.white,
    addIcon: colors.primaryDarkerLighten,
    addIconHover: colors.primaryDarkerMed,
    addOptionIcon: colors.primaryDarkerLighten,
    addOptionIconHover: colors.primaryDarkerMed,

    // SIDEBAR

    sidebarBg: colors.primaryLightest,
    sidebarScroll: colors.primaryLighter,
    sidebarScrollHover: colors.primary,

    sidebarMenuBg: colors.white,
    sidebarMenuIcon: colors.greyMed,
    sidebarMenuIconHover: colors.primary,
    sidebarMenuIconActiveHover: colors.primaryLight,

    // CALENDAR

    calendarMonth: colors.primaryDarkerMed,
    calendarWeekDay: colors.primaryDarkerLighten,
    calendarDay: colors.primaryDarkerMed,
    calendarDivision: colors.primaryDarkerLighten,
    calendarEventOnDay: colors.primaryDarkerLighten,
    calendarTextHover: colors.white,
    calendarDayHover: colors.primaryLight,
    calendarCurrentDay: colors.primaryDark,
    calendarCurrentDayHover: colors.primaryDarker,
    calendarActiveDay: colors.primary,
    calendarActiveDayHover: colors.primaryLight,

    // HEADER

    headerBg: colors.primaryDark,
    headerModule: colors.white,
    headerTitle: colors.white,
    headerTitleBorder: colors.white,
    editToolsDivision: colors.white,
    headerIcon: colors.white,
    headerIconHover: colors.primaryLight,

    // FOOTER

    footerLink: colors.greyDark,
    footerLinkHover: colors.primaryDark,
    footerLinkDivision: colors.greyMed,
  },

  darkTheme: {
    white: colors.white,

    greyLighter: colors.greyLighter,
    greyLight: colors.greyLight,
    greyMed: colors.greyMed,
    greyDark: colors.greyDark,
    greyDarker: colors.greyDarker,

    primaryLightest: colors.primaryLightest,
    primaryLighter: colors.primaryLighter,
    primaryLight: colors.primaryLight,
    primary: colors.primary,
    primaryTrans10: colors.primaryTrans10,
    primaryMed: colors.primaryMed,
    primaryDark: colors.primaryDark,
    primaryDarker: colors.primaryDarker,
    primaryDarkerLightest: colors.primaryDarkerLightest,
    primaryDarkerLighten: colors.primaryDarkerLighten,
    primaryDarkerMed: colors.primaryDarkerMed,

    secondaryLight: colors.secondaryLight,
    secondary: colors.secondary,
    secondaryDark: colors.secondaryDark,

    error: colors.red,
    warning: colors.orange,
    warningDark: colors.orangeDark,

    // BACKGROUNDS

    bodyBg: colors.white,

    // ICON

    iconColor: colors.greyDark,

    // BUTTONS

    outlineButtonBorder: colors.primaryMed,
    outlineButtonText: colors.primaryMed,
    outlineButtonTextHover: colors.white,
    outlineButtonBg: colors.primaryMed,

    buttonText: colors.white,
    buttonBg: colors.primaryMed,
    buttonBgHover: colors.primaryDark,

    buttonIconHover: colors.greyDarker,
    buttonIconActive: colors.greyDarker,
    buttonIconActiveHover: colors.greyDark,

    // COUNTER

    counterBg: colors.primaryLight,
    counterNumber: colors.white,

    // TABS

    tabMarker: colors.primaryMed,
    tabBorder: colors.primaryLighter,
    tabText: colors.primaryDarkerLighten,
    tabTextHover: colors.primaryMed,

    // TOOLTIP

    tooltipBg: colors.greyDark,
    tooltipIcon: colors.white,
    tooltipIconActive: colors.primary,

    // FORMS

    label: colors.primaryDarkerLighten,
    inputBorder: colors.primaryDarkerLighten,
    inputBorderWithValue: colors.primaryMed,
    labelWithValue: colors.primaryMed,
    checkBg: colors.primary,
    checkIcon: colors.white,
    checkLabelHover: colors.primary,

    // PROGRESS BAR

    smallProgressBarTrail: colors.primaryDarkerLighten,
    smallProgressBarPath: colors.primaryDarkerMed,

    largeProgressBarPath: colors.primaryLight,

    circleProgressBarTrail: colors.primaryLight,
    circleProgressBarPath: colors.primary,

    // CONTENT

    // TEXT

    title: colors.greyDarker,
    subtitle: colors.greyDarker,
    paragraph: colors.greyDarker,
    listDecoration: colors.secondary,

    // LINK

    link: colors.primaryDark,
    linkHover: colors.primaryDarker,

    // HIGHLIGHTED
    highlightedBg: colors.greyLighter,
    highlightedText: colors.primaryDarker,

    // TABLE

    tableListDecoration: colors.primary,
    tableBasicBg: colors.white,
    tableBasicBorder: colors.primaryLightest,
    tableBasicText: colors.greyDark,

    tableHighlightedBg: colors.primaryLightest,
    tableHighlightedBorder: colors.white,
    tableHighlightedText: colors.primaryMed,

    cellHeaderBg: colors.primaryLight,
    cellHeaderText: colors.white,

    // QUOTES

    quoteText: colors.greyDark,
    quoteSmallAccent: colors.secondary,
    quoteMidAccent: colors.greyLight,

    // IMAGES

    imageFooterDivision: colors.greyMed,
    imageFooterText: colors.greyMed,

    // BLOCK

    infoBorder: colors.primary,
    infoBg: colors.primaryLighter,
    infoText: colors.primaryMed,

    knowledgeBorder: colors.secondary,
    knowledgeBg: colors.secondaryLight,
    knowledgeText: colors.secondaryDark,

    // AUTHOR

    authorName: colors.primaryDark,
    authorDate: colors.greyMed,

    // EDIT

    editWrapperBorder: colors.greyMed,

    // ADD

    addDivision: colors.greyMed,
    addOptionsDivision: colors.primaryDarkerLightest,
    addBgSidebar: colors.primaryLightest,
    addBg: colors.white,
    addIcon: colors.primaryDarkerLighten,
    addIconHover: colors.primaryDarkerMed,
    addOptionIcon: colors.primaryDarkerLighten,
    addOptionIconHover: colors.primaryDarkerMed,

    // SIDEBAR

    sidebarBg: colors.primaryLightest,
    sidebarScroll: colors.primaryLighter,
    sidebarScrollHover: colors.primary,

    sidebarMenuBg: colors.white,
    sidebarMenuIcon: colors.greyMed,
    sidebarMenuIconHover: colors.primary,
    sidebarMenuIconActiveHover: colors.primaryLight,

    // CALENDAR

    calendarMonth: colors.primaryDarkerMed,
    calendarWeekDay: colors.primaryDarkerLighten,
    calendarDay: colors.primaryDarkerMed,
    calendarDivision: colors.primaryDarkerLighten,
    calendarEventOnDay: colors.primaryDarkerLighten,
    calendarTextHover: colors.white,
    calendarDayHover: colors.primaryLight,
    calendarCurrentDay: colors.primaryDark,
    calendarCurrentDayHover: colors.primaryDarker,
    calendarActiveDay: colors.primary,
    calendarActiveDayHover: colors.primaryLight,

    // HEADER

    headerBg: colors.primaryDark,
    headerModule: colors.white,
    headerTitle: colors.white,
    headerTitleBorder: colors.white,
    editToolsDivision: colors.white,
    headerIcon: colors.white,
    headerIconHover: colors.primaryLight,

    // FOOTER

    footerLink: colors.greyDark,
    footerLinkHover: colors.primaryDark,
    footerLinkDivision: colors.greyMed,
  },

  lightTheme: {
    headerBg: colors.primaryDark,
    sidebarBg: '#13181C',
    bodyBg: '#1A2026',
    paragraph: colors.greyDarker,
  },
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
  full: 'full',
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
