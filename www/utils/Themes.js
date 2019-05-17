import { colors } from './Constants';

// THEMES

const themes = {

  // ///////////////////////////////// DEFAULT

  default: {
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
    quoteMidText: colors.greyDark,
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
    calendarArrow: colors.primaryDarkerLighten,
    calendarArrowHover: colors.primaryDarkerMed,
    calendarDateText: colors.primaryDarkerMed,
    calendarEventTypeTitle: colors.primaryDark,
    calendarEventTypeBorder: colors.primary,
    calendarCalendarTypeTitle: colors.secondaryDark,
    calendarCalendarTypeBorder: colors.secondary,
    calendarEventTitle: colors.primaryDarkerMed,
    calendarEventDescription: colors.primaryDarkerMed,

    // COLOR PICKER

    swatchBg: colors.white,
    swatchBorder: colors.greyMed,
    swatchLabel: colors.primaryDarkerLighten,

    // HIGHLIGHTS

    highlightItemBg: colors.white,
    highlightItemSettingsBorder: colors.primaryLighter,
    highlightSummaryText: colors.greyDarker,
    highlightSummaryOptionsDivision: colors.primaryDarkerLighten,
    highlightSummaryOptionIcon: colors.primaryDarkerLighten,
    highlightSummaryOptionIconHover: colors.primaryDarkerMed,

    // ITEMS

    itemLinkHoverBg: colors.primaryDarkerLighten,
    itemLinkActiveHoverBg: colors.primaryDarkerMed,
    itemDivision: colors.primaryDarkerLighten,
    itemLockIcon: colors.primaryLight,
    itemIcon: colors.primaryDarkerLighten,
    itemIconHover: colors.primaryDarkerMed,
    itemDate: colors.primaryDarkerMed,
    itemUnlockDate: colors.primaryLight,
    itemName: colors.primaryDarkerMed,
    itemNameBorder: colors.primaryDarkerLighten,
    itemText: colors.primaryDarkerMed,
    itemSection: colors.primaryDarkerLighten,
    itemLevelThree: colors.primaryDarkerMed,

    // INDEX

    indexEditTitleInputBorder: colors.primaryLight,
    indexEditTitleInput: colors.primaryDarker,
    indexTitle: colors.primaryDarker,

    // USER

    userImageBorder: colors.primaryDarkerLighten,
    userName: colors.primaryDark,
    userRole: colors.primaryDark,
    userProgressBg: colors.primaryTrans10,
    userProgressTitle: colors.primaryDark,
    userProgress: colors.primaryDark,
    userProgressIcon: colors.primaryDark,
    medalTitleBorder: colors.primaryDarkerLighten,
    medalTitle: colors.primaryDark,
    medalName: colors.primaryDarker,
    medalDescription: colors.primaryDarker,
    medalIcon: colors.primaryDarker,

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

  // ///////////////////////////////// DARK

  dark: {
    error: colors.red,
    warning: colors.orange,
    warningDark: colors.orangeDark,

    // BACKGROUNDS

    bodyBg: colors.darkPrimaryDark,
    bodyScroll: colors.darkPrimaryMedTwo,
    bodyScrollHover: colors.darkPrimaryDarkestLighten,

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

    counterBg: colors.secondary,
    counterNumber: colors.darkPrimaryDarkest,

    // TABS

    tabMarker: colors.secondary,
    tabBorder: colors.darkPrimaryDarkestMed,
    tabText: colors.primaryDarkerLighten,
    tabTextHover: colors.secondary,

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

    title: colors.darkPrimaryLighter,
    subtitle: colors.darkPrimaryLighter,
    paragraph: colors.darkPrimaryLighter,
    listDecoration: colors.secondary,

    // LINK

    link: colors.primaryDark,
    linkHover: colors.primaryDarker,

    // HIGHLIGHTED
    highlightedBg: colors.darkPrimaryMed,
    highlightedText: colors.darkPrimaryLight,

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

    quoteText: colors.secondary,
    quoteMidText: colors.darkPrimaryLighter,
    quoteSmallAccent: colors.secondary,
    quoteMidAccent: colors.greyDark,

    // IMAGES

    imageFooterDivision: colors.greyMed,
    imageFooterText: colors.greyMed,

    // BLOCK

    infoBorder: colors.primary,
    infoBg: '#3c5051',
    infoText: colors.primaryPrimary,

    knowledgeBorder: colors.secondary,
    knowledgeBg: colors.secondaryDarker,
    knowledgeText: colors.secondary,

    // AUTHOR

    authorName: colors.primaryDark,
    authorDate: colors.greyMed,

    // EDIT

    editWrapperBorder: colors.greyMed,

    // ADD

    addDivision: colors.greyMed,
    addOptionsDivision: colors.primaryDarkerLightest,
    addBgSidebar: colors.darkPrimaryDarkest,
    addBg: colors.darkPrimaryDark,
    addIcon: colors.primaryDarkerLighten,
    addIconHover: colors.primaryDarkerMed,
    addOptionIcon: colors.primaryDarkerLighten,
    addOptionIconHover: colors.primaryDarkerMed,

    // SIDEBAR

    sidebarBg: colors.darkPrimaryDarkest,
    sidebarScroll: colors.darkPrimaryDarkestMed,
    sidebarScrollHover: colors.darkPrimaryDarkestLighten,

    sidebarMenuBg: colors.darkPrimaryDark,
    sidebarMenuIcon: colors.darkPrimaryLight,
    sidebarMenuIconHover: colors.secondary,
    sidebarMenuIconActiveHover: colors.secondaryDark,

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
    calendarArrow: colors.primaryDarkerLighten,
    calendarArrowHover: colors.primaryDarkerMed,
    calendarDateText: colors.primaryDarkerMed,
    calendarEventTypeTitle: colors.primaryDark,
    calendarEventTypeBorder: colors.primary,
    calendarCalendarTypeTitle: colors.secondaryDark,
    calendarCalendarTypeBorder: colors.secondary,
    calendarEventTitle: colors.primaryDarkerMed,
    calendarEventDescription: colors.primaryDarkerMed,

    // COLOR PICKER

    swatchBg: colors.white,
    swatchBorder: colors.greyMed,
    swatchLabel: colors.primaryDarkerLighten,

    // HIGHLIGHTS

    highlightItemBg: colors.white,
    highlightItemSettingsBorder: colors.primaryLighter,
    highlightSummaryText: colors.greyDarker,
    highlightSummaryOptionsDivision: colors.primaryDarkerLighten,
    highlightSummaryOptionIcon: colors.primaryDarkerLighten,
    highlightSummaryOptionIconHover: colors.primaryDarkerMed,

    // ITEMS

    itemLinkHoverBg: colors.darkPrimaryDarkestLighten,
    itemLinkActiveHoverBg: colors.primaryDarkerMed,
    itemDivision: colors.primaryDarkerLighten,
    itemLockIcon: colors.primaryLight,
    itemIcon: colors.primaryDarkerLighten,
    itemIconHover: colors.primaryDarkerMed,
    itemDate: colors.primaryDarkerMed,
    itemUnlockDate: colors.primaryLight,
    itemName: colors.primaryDarkerMed,
    itemNameBorder: colors.primaryDarkerLighten,
    itemText: colors.primaryDarkerMed,
    itemSection: colors.primaryDarkerLighten,
    itemLevelThree: colors.primaryDarkerMed,

    // INDEX

    indexEditTitleInputBorder: colors.primaryLight,
    indexEditTitleInput: colors.primaryDarker,
    indexTitle: colors.darkPrimaryDarkestLightest,

    // USER

    userImageBorder: colors.primaryDarkerLighten,
    userName: colors.primaryDark,
    userRole: colors.primaryDark,
    userProgressBg: colors.darkPrimaryDark,
    userProgressTitle: colors.darkPrimaryLightest,
    userProgress: colors.darkPrimaryLightest,
    userProgressIcon: colors.darkPrimaryLightest,
    medalTitleBorder: colors.primaryDarkerLighten,
    medalTitle: colors.primaryDark,
    medalName: colors.primaryDarker,
    medalDescription: colors.primaryDarker,
    medalIcon: colors.primaryDarker,

    // HEADER

    headerBg: colors.darkPrimaryMedTwo,
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

  // ///////////////////////////////// SEPIA

  sepia: {},
};

export default themes;
