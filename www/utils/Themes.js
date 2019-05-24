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
    selection: colors.greyLight,
    bodyScroll: colors.primaryLight,
    bodyScrollHover: colors.primary,

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

    // SETTINGS

    skinTitleText: colors.primaryDark,
    skinThumbText: colors.primaryDarkerLighten,
    skinThumbTextHover: colors.primaryDarkerMed,
    skinBorder: colors.primaryDarkerLighten,
    skinBorderHover: colors.primaryDarkerMed,
    
    fontSizeIcon: colors.primaryDarkerLighten,
    fontSizeBarValue: colors.white,
    fontSizeBar: colors.primaryDarkerMed,

    settingsDivision: colors.primaryDarkerLighten,

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
    selection: colors.darkPrimaryDarkest,
    bodyScroll: colors.darkPrimaryMedTwo,
    bodyScrollHover: colors.darkPrimaryDarkestLighten,

    // ICON

    iconColor: colors.greyDark,

    // BUTTONS

    outlineButtonBorder: colors.secondary,
    outlineButtonText: colors.secondary,
    outlineButtonTextHover: colors.darkPrimaryDarkest,
    outlineButtonBg: colors.secondary,

    buttonText: colors.darkPrimaryDarkest,
    buttonBg: colors.secondary,
    buttonBgHover: colors.secondaryDark,

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
    tableBasicBg: colors.darkPrimaryDark,
    tableBasicBorder: colors.darkPrimaryMed,
    tableBasicText: colors.darkPrimaryLighter,

    tableHighlightedBg: colors.darkPrimaryMed,
    tableHighlightedBorder: colors.darkPrimaryDark,
    tableHighlightedText: colors.darkPrimaryLighter,

    cellHeaderBg: colors.darkPrimaryMedTwo,
    cellHeaderText: colors.darkPrimaryLighter,

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
    knowledgeBg: colors.darkSecondaryDark,
    knowledgeText: colors.secondary,

    // AUTHOR

    authorName: colors.primaryDark,
    authorDate: colors.greyMed,

    // EDIT

    editWrapperBorder: colors.greyMed,

    // ADD

    addDivision: colors.greyMed,
    addOptionsDivision: colors.primaryDarkerLightest,
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

    swatchBg: colors.darkPrimaryDarkestMed,
    swatchBorder: colors.greyMed,
    swatchLabel: colors.primaryDarkerLighten,

    // HIGHLIGHTS

    highlightItemBg: colors.darkPrimaryDarkestMed,
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

    // SETTINGS

    skinTitleText: colors.primaryDark,
    skinThumbText: colors.darkPrimaryDarkestLighten,
    skinThumbTextHover: colors.secondary,
    skinBorder: colors.darkPrimaryDarkestLighten,
    skinBorderHover: colors.secondary,

    fontSizeIcon: colors.darkPrimaryDarkestLighten,
    fontSizeBarValue: colors.darkPrimaryDarkestLighten,
    fontSizeBar: colors.secondary,

    settingsDivision: colors.darkPrimaryDarkestMed,

    // HEADER

    headerBg: colors.darkPrimaryMedTwo,
    headerModule: colors.darkPrimaryLighter,
    headerTitle: colors.darkPrimaryLighter,
    headerTitleBorder: colors.darkPrimaryLighter,
    editToolsDivision: colors.darkPrimaryLighter,
    headerIcon: colors.darkPrimaryLighter,
    headerIconHover: colors.secondary,

    // FOOTER

    footerLink: colors.darkPrimaryLighter,
    footerLinkHover: colors.secondary,
    footerLinkDivision: colors.darkPrimaryLighter,
  },

  // ///////////////////////////////// SEPIA

  sepia: {
    error: colors.red,
    warning: colors.orange,
    warningDark: colors.orangeDark,

    // BACKGROUNDS

    bodyBg: colors.sepiaLightest,
    selection: colors.sepiaLighter,
    bodyScroll: colors.sepia,
    bodyScrollHover: colors.sepiaDark,

    // ICON

    iconColor: colors.beigeDark,

    // BUTTONS

    outlineButtonBorder: colors.sepiaMed,
    outlineButtonText: colors.sepiaMed,
    outlineButtonTextHover: colors.white,
    outlineButtonBg: colors.sepiaMed,

    buttonText: colors.white,
    buttonBg: colors.sepiaMed,
    buttonBgHover: colors.sepiaDark,

    buttonIconHover: colors.sepiaDarker,
    buttonIconActive: colors.sepiaDarker,
    buttonIconActiveHover: colors.sepiaDark,

    // COUNTER

    counterBg: colors.beigeDark,
    counterNumber: colors.white,

    // TABS

    tabMarker: colors.beigeDark,
    tabBorder: colors.sepiaDarkerLightest,
    tabText: colors.beigeMed,
    tabTextHover: colors.beigeDark,

    // TOOLTIP

    tooltipBg: colors.sepiaDarker,
    tooltipIcon: colors.white,
    tooltipIconActive: colors.secondary,

    // FORMS

    label: colors.sepiaDarkerLighten,
    inputBorder: colors.sepiaDarkerLighten,
    inputBorderWithValue: colors.sepiaMed,
    labelWithValue: colors.sepiaMed,
    checkBg: colors.sepia,
    checkIcon: colors.white,
    checkLabelHover: colors.sepia,

    // PROGRESS BAR

    smallProgressBarTrail: colors.sepiaDarkerLightest,
    smallProgressBarPath: colors.sepiaDarkerMed,

    largeProgressBarPath: colors.sepia,

    circleProgressBarTrail: colors.sepiaMed,
    circleProgressBarPath: colors.sepiaDarker,

    // CONTENT

    // TEXT

    title: colors.sepiaDark,
    subtitle: colors.sepiaDark,
    paragraph: colors.sepiaDark,
    listDecoration: colors.secondary,

    // LINK

    link: colors.beigeMed,
    linkHover: colors.sepiaMed,

    // HIGHLIGHTED
    highlightedBg: colors.sepiaLighter,
    highlightedText: colors.sepiaDarkerMed,

    // TABLE

    tableListDecoration: colors.secondary,
    tableBasicBg: colors.sepiaLightest,
    tableBasicBorder: colors.sepia,
    tableBasicText: colors.sepiaDark,

    tableHighlightedBg: colors.sepia,
    tableHighlightedBorder: colors.sepiaLightest,
    tableHighlightedText: colors.white,

    cellHeaderBg: colors.sepiaDarkerMed,
    cellHeaderText: colors.white,

    // QUOTES

    quoteText: colors.sepiaDark,
    quoteMidText: colors.sepiaDark,
    quoteSmallAccent: colors.secondary,
    quoteMidAccent: colors.sepiaDarkerLightest,

    // IMAGES

    imageFooterDivision: colors.beigeMed,
    imageFooterText: colors.sepiaDark,

    // BLOCK

    infoBorder: colors.sepiaInfoBorder,
    infoBg: colors.sepiaInfoBg,
    infoText: colors.sepiaInfoText,

    knowledgeBorder: colors.secondary,
    knowledgeBg: '#fff6dc',
    knowledgeText: colors.secondaryDark,

    // AUTHOR

    authorName: colors.sepiaDark,
    authorDate: colors.beigeMed,

    // EDIT

    editWrapperBorder: colors.beigeMed,

    // ADD

    addDivision: colors.beigeMed,
    addOptionsDivision: colors.sepiaDarkerLightest,
    addIcon: colors.sepiaDarkerLighten,
    addIconHover: colors.sepiaDarkerMed,
    addOptionIcon: colors.sepiaDarkerLighten,
    addOptionIconHover: colors.sepiaDarkerMed,

    // SIDEBAR

    sidebarBg: colors.sepiaLight,
    sidebarScroll: colors.sepiaDarkerLightest,
    sidebarScrollHover: colors.sepiaDarkerLighten,

    sidebarMenuBg: colors.sepiaLightest,
    sidebarMenuIcon: colors.sepia,
    sidebarMenuIconHover: colors.beigeDark,
    sidebarMenuIconActiveHover: colors.sepiaDarkerMed,

    // CALENDAR

    calendarMonth: colors.sepiaDarkerMed,
    calendarWeekDay: colors.sepiaDarkerLighten,
    calendarDay: colors.sepiaDarkerMed,
    calendarDivision: colors.sepiaDarkerLighten,
    calendarEventOnDay: colors.sepiaDarkerLighten,
    calendarTextHover: colors.white,
    calendarDayHover: colors.sepia,
    calendarCurrentDay: colors.sepiaDark,
    calendarCurrentDayHover: colors.sepiaDarker,
    calendarActiveDay: colors.sepia,
    calendarActiveDayHover: colors.sepia,
    calendarArrow: colors.sepiaDarkerLighten,
    calendarArrowHover: colors.sepiaDarkerMed,
    calendarDateText: colors.sepiaDarkerMed,
    calendarEventTypeTitle: colors.sepiaDark,
    calendarEventTypeBorder: colors.sepia,
    calendarCalendarTypeTitle: colors.secondaryDark,
    calendarCalendarTypeBorder: colors.secondary,
    calendarEventTitle: colors.sepiaDarkerMed,
    calendarEventDescription: colors.sepiaDarkerMed,

    // COLOR PICKER

    swatchBg: colors.white,
    swatchBorder: colors.beigeMed,
    swatchLabel: colors.sepiaDarkerLighten,

    // HIGHLIGHTS

    highlightItemBg: colors.white,
    highlightItemSettingsBorder: colors.primaryLighter,
    highlightSummaryText: colors.greyDarker,
    highlightSummaryOptionsDivision: colors.sepiaDarkerLightest,
    highlightSummaryOptionIcon: colors.sepiaDarkerLightest,
    highlightSummaryOptionIconHover: colors.sepiaDarkerMed,

    // ITEMS

    itemLinkHoverBg: colors.sepiaDarkerLightest,
    itemLinkActiveHoverBg: colors.sepiaDarkerMed,
    itemDivision: colors.sepiaDarkerLightest,
    itemLockIcon: colors.sepia,
    itemIcon: colors.sepiaDarkerLightest,
    itemIconHover: colors.sepiaDarkerMed,
    itemDate: colors.sepiaDarkerMed,
    itemUnlockDate: colors.sepia,
    itemName: colors.sepiaDarkerMed,
    itemNameBorder: colors.sepiaDarkerLightest,
    itemText: colors.sepiaDarkerMed,
    itemSection: colors.sepiaDarkerLightest,
    itemLevelThree: colors.sepiaDarkerMed,

    // INDEX

    indexEditTitleInputBorder: colors.sepia,
    indexEditTitleInput: colors.sepiaDarker,
    indexTitle: colors.sepiaDarker,

    // USER

    userImageBorder: colors.sepiaDarkerLightest,
    userName: colors.sepiaDark,
    userRole: colors.sepiaDark,
    userProgressBg: colors.sepiaTrans,
    userProgressTitle: colors.sepiaDarkerMed,
    userProgress: colors.sepiaDarkerMed,
    userProgressIcon: colors.sepiaDarkerMed,
    medalTitleBorder: colors.sepiaDarkerLightest,
    medalTitle: colors.sepiaDarkerMed,
    medalName: colors.sepiaDarkerMed,
    medalDescription: colors.sepiaDarkerMed,
    medalIcon: colors.sepiaDarkerMed,

    // SETTINGS

    skinTitleText: colors.sepiaDark,
    skinThumbText: colors.sepiaDarkerLighten,
    skinThumbTextHover: colors.sepiaDarkerMed,
    skinBorder: colors.sepiaDarkerLighten,
    skinBorderHover: colors.sepiaDarkerMed,

    fontSizeIcon: colors.sepiaDarkerLighten,
    fontSizeBarValue: colors.white,
    fontSizeBar: colors.beigeDark,

    settingsDivision: colors.sepiaDarkerLighten,

    // HEADER

    headerBg: colors.sepiaDark,
    headerModule: colors.sepiaLighter,
    headerTitle: colors.sepiaLighter,
    headerTitleBorder: colors.sepiaLighter,
    editToolsDivision: colors.sepiaLighter,
    headerIcon: colors.sepiaLighter,
    headerIconHover: colors.secondary,

    // FOOTER

    footerLink: colors.sepiaMed,
    footerLinkHover: colors.sepiaDarker,
    footerLinkDivision: colors.sepiaMed,
  },
};

export default themes;
