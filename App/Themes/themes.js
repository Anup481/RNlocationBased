import { StyleSheet } from 'react-native';

import CONSTANTS from './constants';
import BASE from './base';
import COLORS from './colors';

export default StyleSheet.create({
	flexOne: {
		...BASE.flexOne,
	},
	flexGrowOne: {
		...BASE.flexGrowOne
	},
	flexGrow100: {
		...BASE.flexGrow100
	},
	flex01: {
		...BASE.flex01
	},
	flex05: {
		...BASE.flex05
	},
	flex08: {
		...BASE.flex08
	},
	flex09: {
		...BASE.flex09
	},
	row: {
		...BASE.row
	},
	column: {
		...BASE.column
	},
	flexWrap: {
		...BASE.flexWrap
	},

	spaceBetween: {
		...BASE.spaceBetween
	},
	width: {
		...BASE.width
	},
	justifyCenter: {
		...BASE.justifyCenter
	},
	alignItemsCenter: {
		...BASE.alignItemsCenter
	},
	alignItemsFlexStart: {
		...BASE.alignItemsFlexStart
	},
	alignContentStart: {
		...BASE.alignContentStart
	},
	alignContentCenter: {
		...BASE.alignContentCenter
	},
	alignItemsFlexEnd: {
		...BASE.alignItemsFlexEnd
	},
	alignSelfFlexEnd: {
		...BASE.alignSelfFlexEnd
	},
	justifyFlexEnd: {
		...BASE.justifyFlexEnd,
	},
	justifyFlexStart: {
		...BASE.justifyFlexStart
	},
	center: {
		...BASE.center
	},
	overFlow: {
		...BASE.overFlow
	},
	normalLetterSpacing: {
		letterSpacing: 0.2
	},
	defaultLetterSpacing: {
		letterSpacing: 0.5
	},
	letterSpace: {
		letterSpacing: 1
	},
	letterSpace8: {
		letterSpacing: 8
	},
	activeZindex: {
		...BASE.activeZindex
	},
	zeroZindex: {
		...BASE.zeroZindex
	},
	fullHeight: {
		...BASE.fullHeight
	},
	fullWidth: {
		...BASE.fullWidth
	},

	absoluteFill: {
		...StyleSheet.absoluteFill,
	},
	position: {
		...BASE.position
	},
	positionAbsolute: {
		...BASE.positionAbsolute
	},
	positionAbsoluteTop: {
		...BASE.positionAbsoluteTop
	},
	positionAbsoluteBottom: {
		...BASE.positionAbsoluteBottom
	},
	positionAbsoluteRight: {
		...BASE.positionAbsoluteRight
	},
	underLine: {
		...BASE.underLine
	},
	lineThrough: {
		...BASE.lineThrough
	},
	textAlign: {
		...BASE.textAlign
	},
	textUppercase: {
		...BASE.textUppercase
	},
	borderStyleDashed: {
		...BASE.borderStyleDashed
	},
	opacityDisable: {
		...BASE.opacityDisable
	},


	right: {
		...BASE.right
	},
	right16: {
		...BASE.right16
	},
	top6: {
		...BASE.top6
	},

	right6: {
		...BASE.right6
	},

	top34: {
		...BASE.top34
	},
	transform180: {
		transform: [{ rotate: '180deg' }]
	},
	transform270: {
		transform: [{ rotate: '270deg' }]
	},
	disabled: {
		...BASE.disabled
	},

	// font
	normal: {
		...BASE.normal
	},
	medium: {
		...BASE.medium
	},
	bold: {
		...BASE.bold
	},
	extraBold: {
		...BASE.extraBold
	},

	// font size
	fontSize9: {
		...BASE.fontSize9
	},
	fontSize10: {
		...BASE.fontSize10
	},
	fontSize11: {
		...BASE.fontSize11
	},
	fontSize12: {
		...BASE.fontSize12
	},
	fontSize13: {
		...BASE.fontSize13
	},
	fontSize14: {
		...BASE.fontSize14
	},
	fontSize16: {
		...BASE.fontSize16
	},
	fontSize18: {
		...BASE.fontSize18
	},
	fontSize20: {
		...BASE.fontSize20
	},
	fontSize24: {
		...BASE.fontSize24
	},

	overlayColorWhite: {
		...BASE.overlayColorWhite
	},
	// font color
	colorPrimary: {
		...BASE.colorPrimary
	},
	colorLynch: {
		...BASE.colorLynch
	},
	colorPrussianBlue: {
		...BASE.colorPrussianBlue
	},
	colorRed: {
		...BASE.colorRed
	},
	colorWhite: {
		...BASE.colorWhite
	},
	colorNavyBlue: {
		...BASE.colorNavyBlue
	},
	colorMangoTango: {
		...BASE.colorMangoTango
	},
	colorSilverBlue: {
		...BASE.colorSilverBlue
	},
	colorSeaBlue: {
		...BASE.colorSeaBlue
	},
	colorRockBlue: {
		...BASE.colorRockBlue
	},
	colorBlack: {
		...BASE.colorBlack
	},
	colorCaribbeanGreen: {
		...BASE.colorCaribbeanGreen
	},
	colorAlgaeGreen: {
		color: COLORS.ALGAE_GREEN
	},

	// line height
	lineHeight12: {
		...BASE.lineHeight12
	},
	lineHeight13: {
		...BASE.lineHeight13
	},
	lineHeight14: {
		...BASE.lineHeight14
	},
	lineHeight15: {
		...BASE.lineHeight15
	},
	lineHeight16: {
		...BASE.lineHeight16
	},
	lineHeight18: {
		...BASE.lineHeight18
	},
	lineHeight20: {
		...BASE.lineHeight20
	},
	lineHeight22: {
		...BASE.lineHeight22
	},
	lineHeight24: {
		...BASE.lineHeight24
	},
	lineHeight28: {
		...BASE.lineHeight28
	},
	lineHeight30: {
		...BASE.lineHeight30
	},

	// background color
	backgroundColorPrimary: {
		...BASE.backgroundColorPrimary
	},
	backgroundColorWhite: {
		...BASE.backgroundColorWhite
	},
	backgroundColorCloudGrey: {
		...BASE.backgroundColorCloudGrey
	},
	backgroundColorWhiteSmoke: {
		...BASE.backgroundColorWhiteSmoke
	},
	backgroundColorWhiteSmokeTint: {
		...BASE.backgroundColorWhiteSmokeTint
	},
	backgroundColorOffGreen: {
		...BASE.backgroundColorOffGreen
	},
	backgroundColorZircon: {
		...BASE.backgroundColorZircon
	},
	backgroundColorRed: {
		...BASE.backgroundColorRed
	},
	backgroundColorPrussianBlue: {
		...BASE.backgroundColorPrussianBlue
	},
	backgroundColorLightGreen: {
		...BASE.backgroundColorLightGreen
	},
	backgroundColorLightCyan: {
		...BASE.backgroundColorLightCyan
	},
	backgroundColorAliceBlue: {
		...BASE.backgroundColorAliceBlue
	},
	backgroundColorBlur: {
		...BASE.backgroundColorBlur
	},
	backgroundColorSmokeWhite: {
		...BASE.backgroundColorSmokeWhite
	},
	backgroundColorCyan: {
		...BASE.backgroundColorCyan
	},
	backgroundColorCyanGreen: {
		...BASE.backgroundColorCyanGreen
	},
	backgroundColorSkyBlue: {
		...BASE.backgroundColorSkyBlue
	},
	backgroundColorSolitude: {
		...BASE.backgroundColorSolitude
	},
	backgroundColorCoconutWhite: {
		...BASE.backgroundColorCoconutWhite
	},
	backgroundColorOceanBlue: {
		...BASE.backgroundColorOceanBlue
	},
	backgroundColorUranianBlue: {
		...BASE.backgroundColorUranianBlue
	},
	backgroundColorTwilightBlue: {
		...BASE.backgroundColorTwilightBlue
	},
	backgroundColorBlueGem: {
		...BASE.backgroundColorBlueGem
	},
	backgroundColorBlack: {
		...BASE.backgroundColorBlack
	},
	backgroundColorNavyBlue: {
		...BASE.backgroundColorNavyBlue
	},
	backgroundColorVarden: {
		...BASE.backgroundColorVarden
	},
	backgroundColorBlueGem: {
		...BASE.backgroundColorBlueGem
	},
	backgroundColorIceberg: {
		...BASE.backgroundColorIceberg
	},
	backgroundColorTraquil: {
		...BASE.backgroundColorTraquil
	},
	backgroundColorTransparent: {
		...BASE.backgroundColorTransparent
	},
	backgroundColorWhiteIce: {
		...BASE.backgroundColorWhiteIce
	},
	backgroundColorSolitudeDark: {
		...BASE.backgroundColorSolitudeDark
	},
	backgroundColorCaribbeanGreen: {
		...BASE.backgroundColorCaribbeanGreen
	},
	backgroundColorScienceBlue: {
		...BASE.backgroundColorScienceBlue
	},
	backgroundColorAlgaeGreen: {
		backgroundColor: COLORS.ALGAE_GREEN
	},
	backgroundColorAshGrey: {
		backgroundColor: COLORS.ASH_GREY
	},

	// border radius
	borderRadius2: {
		...BASE.borderRadius2
	},
	borderRadius4: {
		...BASE.borderRadius4
	},
	borderRadius8: {
		...BASE.borderRadius8
	},
	borderRadius10: {
		...BASE.borderRadius10
	},
	borderRadius12: {
		...BASE.borderRadius12
	},
	borderRadius16: {
		...BASE.borderRadius16
	},
	borderRadius20: {
		...BASE.borderRadius20
	},
	borderRadius24: {
		...BASE.borderRadius24
	},
	borderRadius48: {
		...BASE.borderRadius48
	},
	borderRadius100: {
		...BASE.borderRadius100
	},


	borderTopLeftRadius8: {
		...BASE.borderTopLeftRadius8
	},
	borderTopRightRadius8: {
		...BASE.borderTopRightRadius8
	},
	borderBottomLeftRadius8: {
		...BASE.borderBottomLeftRadius8
	},
	borderBottomRightRadius8: {
		...BASE.borderBottomRightRadius8
	},

	borderTopRightRadius10: {
		...BASE.borderTopRightRadius10
	},
	borderBottomRightRadius10: {
		...BASE.borderBottomRightRadius10
	},
	borderTopLeftRadius10: {
		...BASE.borderTopLeftRadius10
	},
	borderBottomLeftRadius10: {
		...BASE.borderBottomLeftRadius10
	},
	borderTopLeftRadius24: {
		...BASE.borderTopLeftRadius24
	},
	borderTopRightRadius24: {
		...BASE.borderTopRightRadius24
	},
	borderBottomLeftRadius24: {
		...BASE.borderBottomLeftRadius24
	},
	borderBottomRightRadius24: {
		...BASE.borderBottomRightRadius24
	},
	borderTopLeftRadius100: {
		...BASE.borderTopLeftRadius100
	},
	borderTopRightRadius100: {
		...BASE.borderTopRightRadius100
	},
	borderBottomLeftRadius100: {
		...BASE.borderBottomLeftRadius100
	},
	borderBottomRightRadius100: {
		...BASE.borderBottomRightRadius100
	},
	borderTopLeftRadius24: {
		...BASE.borderTopLeftRadius24
	},
	borderTopRightRadius24: {
		...BASE.borderTopRightRadius24
	},
	borderRadiusTop8: {
		...BASE.borderRadiusTop8
	},
	borderRadiusTopLeft8: {
		...BASE.borderTopLeftRadius8
	},

	//border width
	borderWidth1: {
		...BASE.borderWidth1
	},
	borderWidth2: {
		...BASE.borderWidth2
	},
	borderWidth3: {
		...BASE.borderWidth3
	},
	borderWidth4: {
		...BASE.borderWidth4
	},

	borderBottomWidth1: {
		...BASE.borderBottomWidth1
	},
	borderTopWidth1: {
		...BASE.borderTopWidth1
	},
	borderTopWidth2: {
		...BASE.borderTopWidth2
	},
	borderBottomWidth2: {
		...BASE.borderBottomWidth2
	},
	borderRightWidth1: {
		...BASE.borderRightWidth1
	},
	borderRightWidth2: {
		...BASE.borderRightWidth2
	},

	// border color
	borderColorPrimary: {
		...BASE.borderColorPrimary
	},
	borderColorRed: {
		...BASE.borderColorRed
	},
	borderColorLynch: {
		...BASE.borderColorLynch
	},
	borderColorAshGrey: {
		...BASE.borderColorAshGrey
	},
	borderColorCoconutWhite: {
		...BASE.borderColorCoconutWhite
	},
	borderColorWhite: {
		...BASE.borderColorWhite
	},
	borderColorWhiteSmoke: {
		...BASE.borderColorWhiteSmoke
	},
	borderColorCharcoalBlue: {
		...BASE.borderColorCharcoalBlue
	},
	borderColorSilverBlue: {
		...BASE.borderColorSilverBlue
	},
	borderColorVodkaBlue: {
		...BASE.borderColorVodkaBlue
	},
	borderColorWildSand: {
		...BASE.borderColorWildSand
	},
	borderColorPaleSolitude: {
		...BASE.borderColorPaleSolitude
	},
	borderColorWhiteSmokeTint: {
		...BASE.borderColorWhiteSmokeTint
	},
	borderColorAlgaeGreen: {
		borderColor: COLORS.ALGAE_GREEN
	},

	borderBottomColorPrimary: {
		...BASE.borderBottomColorPrimary
	},
	borderBottomColorWhite: {
		...BASE.borderBottomColorWhite
	},
	borderBottomColorSmokeWhite: {
		...BASE.borderBottomColorSmokeWhite
	},


	// shadow
	shadow: {
		elevation: 5, // Set the elevation to create a shadow on Android
		shadowColor: 'rgba(0, 0, 0, 1)', // Shadow color for iOS
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 4,
	},
	// shadow
	shadowLite16: {
		shadowOffset: {
			width: 1,
			height: 8,
		},
		shadowOpacity: 0.15,
		shadowRadius: 1,
		elevation: 2,
	},
	shadowLite: {
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowRadius: 2.5,
		elevation: 4,
	},
	shadowSpread: {
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowRadius: 2.5,
		elevation: 10,
	},
	maxShadow: {
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowRadius: 2.5,
		elevation: 24,
	},

	// margin
	margin8: {
		...BASE.margin8
	},


	// margin left
	marginLeft2: {
		...BASE.marginLeft2
	},
	marginLeft4: {
		...BASE.marginLeft4
	},
	marginLeft6: {
		...BASE.marginLeft6
	},
	marginLeft8: {
		...BASE.marginLeft8
	},
	marginLeft10: {
		...BASE.marginLeft10
	},
	marginLeft12: {
		...BASE.marginLeft12
	},
	marginLeft16: {
		...BASE.marginLeft16
	},
	marginLeft20: {
		...BASE.marginLeft20
	},
	marginLeft24: {
		...BASE.marginLeft24
	},
	marginLeft112: {
		...BASE.marginLeft112
	},

	// margin right
	marginRight8: {
		...BASE.marginRight8
	},
	marginRight16: {
		...BASE.marginRight16
	},
	marginRight20: {
		...BASE.marginRight20
	},
	marginRight24: {
		...BASE.marginRight24
	},
	marginRight34: {
		...BASE.marginRight34
	},

	// marginTop
	marginTopMinus10: {
		...BASE.marginTopMinus10
	},
	marginTopMinus16: {
		...BASE.marginTopMinus16
	},
	marginTopMinus36: {
		...BASE.marginTopMinus36
	},
	marginTopMinus48: {
		...BASE.marginTopMinus48
	},
	marginTop2: {
		...BASE.marginTop2
	},
	marginTop4: {
		...BASE.marginTop4
	},
	marginTop6: {
		...BASE.marginTop6
	},
	marginTop8: {
		...BASE.marginTop8
	},
	marginTop12: {
		...BASE.marginTop12
	},
	marginTop16: {
		...BASE.marginTop16
	},
	marginTop18: {
		...BASE.marginTop18
	},
	marginTop22: {
		...BASE.marginTop22
	},
	marginTop24: {
		...BASE.marginTop24
	},
	marginTop28: {
		...BASE.marginTop28
	},
	marginTop30: {
		...BASE.marginTop30
	},
	marginTop32: {
		...BASE.marginTop32
	},
	marginTop38: {
		...BASE.marginTop38
	},
	marginTop40: {
		...BASE.marginTop40
	},
	marginTop44: {
		...BASE.marginTop44
	},
	marginTop136: {
		...BASE.marginTop136
	},

	// margin bottom
	marginBottom4: {
		...BASE.marginBottom4
	},
	marginBottom8: {
		...BASE.marginBottom8
	},
	marginBottom12: {
		...BASE.marginBottom12
	},
	marginBottom14: {
		...BASE.marginBottom14
	},
	marginBottom16: {
		...BASE.marginBottom16
	},
	marginBottom22: {
		...BASE.marginBottom22
	},
	marginBottom24: {
		...BASE.marginBottom24
	},
	marginBottom32: {
		...BASE.marginBottom32
	},
	marginBottom36: {
		...BASE.marginBottom36
	},
	marginBottom76: {
		...BASE.marginBottom76
	},
	marginBottom78: {
		...BASE.marginBottom78
	},

	// padding bottom
	paddingBottom8: {
		...BASE.paddingBottom8
	},
	paddingBottom12: {
		...BASE.paddingBottom12
	},
	paddingBottom16: {
		...BASE.paddingBottom16
	},
	paddingBottom18: {
		...BASE.paddingBottom18
	},
	paddingBottom20: {
		...BASE.paddingBottom20
	},
	paddingBottom24: {
		...BASE.paddingBottom24
	},
	paddingBottom36: {
		...BASE.paddingBottom36
	},
	paddingBottom42: {
		...BASE.paddingBottom42
	},
	paddingBottom44: {
		...BASE.paddingBottom44
	},
	paddingBottom48: {
		...BASE.paddingBottom48
	},
	paddingBottom60: {
		...BASE.paddingBottom60
	},
	paddingBottom64: {
		...BASE.paddingBottom64
	},
	paddingBottom78: {
		...BASE.paddingBottom78
	},
	paddingBottom82: {
		...BASE.paddingBottom82
	},

	// padding top
	paddingTop4: {
		...BASE.paddingTop4
	},
	paddingTop8: {
		...BASE.paddingTop8
	},
	paddingTop10: {
		...BASE.paddingTop10
	},
	paddingTop12: {
		...BASE.paddingTop12
	},
	paddingTop16: {
		...BASE.paddingTop16
	},
	paddingTop20: {
		...BASE.paddingTop20
	},
	paddingTop24: {
		...BASE.paddingTop24
	},
	paddingTop32: {
		...BASE.paddingTop32
	},
	paddingTop36: {
		...BASE.paddingTop36
	},
	paddingTop40: {
		...BASE.paddingTop40
	},
	paddingTop60: {
		...BASE.paddingTop60
	},
	paddingTop64: {
		...BASE.paddingTop64
	},
	paddingTop82: {
		...BASE.paddingTop82
	},
	paddingTop140: {
		...BASE.paddingTop140
	},

	// padding right
	paddingRight4: {
		...BASE.paddingRight4
	},
	paddingRight8: {
		...BASE.paddingRight8
	},
	paddingRight16: {
		...BASE.paddingRight16
	},
	paddingRight20: {
		...BASE.paddingRight20
	},
	paddingRight48: {
		...BASE.paddingRight48
	},
	paddingRight33: {
		...BASE.paddingRight33
	},
	paddingRight78: {
		...BASE.paddingRight78
	},
	paddingRight60: {
		...BASE.paddingRight60
	},

	paddingLeft6: {
		...BASE.paddingLeft6
	},
	paddingLeft8: {
		...BASE.paddingLeft8
	},
	paddingLeft10: {
		...BASE.paddingLeft10
	},
	paddingLeft16: {
		...BASE.paddingLeft16
	},
	paddingLeft24: {
		...BASE.paddingLeft24
	},
	paddingLeft32: {
		...BASE.paddingLeft32
	},

	// common padding
	padding4: {
		...BASE.padding4
	},
	padding6: {
		...BASE.padding6
	},
	padding8: {
		...BASE.padding8
	},
	padding10: {
		...BASE.padding10
	},
	padding12: {
		...BASE.padding12
	},
	padding16: {
		...BASE.padding16
	},
	padding24: {
		...BASE.padding24
	},
	paddingHorizontal6: {
		...BASE.paddingHorizontal6
	},
	paddingHorizontal4: {
		...BASE.paddingHorizontal4
	},
	paddingHorizontal8: {
		...BASE.paddingHorizontal8
	},
	paddingHorizontal10: {
		...BASE.paddingHorizontal10
	},
	paddingHorizontal12: {
		...BASE.paddingHorizontal12
	},
	paddingHorizontal16: {
		...BASE.paddingHorizontal16
	},
	paddingHorizontal32: {
		...BASE.paddingHorizontal32
	},

	paddingVertical2: {
		...BASE.paddingVertical2
	},
	paddingVertical4: {
		...BASE.paddingVertical4
	},
	paddingVertical5: {
		...BASE.paddingVertical5
	},
	paddingVertical8: {
		...BASE.paddingVertical8
	},
	paddingVertical10: {
		...BASE.paddingVertical10
	},
	paddingVertical12: {
		...BASE.paddingVertical12
	},
	paddingVertical16: {
		...BASE.paddingVertical16
	},
	paddingVertical21: {
		...BASE.paddingVertical21
	},
	paddingVertical36: {
		...BASE.paddingVertical36
	},


	// height width
	heightWidth4: {
		...BASE.heightWidth4
	},
	heightWidth8: {
		...BASE.heightWidth8
	},
	heightWidth16: {
		...BASE.heightWidth16
	},
	heightWidth18: {
		...BASE.heightWidth18
	},
	heightWidth20: {
		...BASE.heightWidth20
	},
	heightWidth24: {
		...BASE.heightWidth24
	},
	heightWidth28: {
		...BASE.heightWidth28
	},
	heightWidth32: {
		...BASE.heightWidth32
	},
	heightWidth40: {
		...BASE.heightWidth40
	},
	heightWidth46: {
		...BASE.heightWidth46
	},
	heightWidth48: {
		...BASE.heightWidth48
	},
	heightWidth55: {
		...BASE.heightWidth55
	},
	heightWidth60: {
		...BASE.heightWidth60
	},
	heightWidth90: {
		...BASE.heightWidth90
	},
	heightWidth92: {
		...BASE.heightWidth92
	},
	heightWidth96: {
		...BASE.heightWidth96
	},
	heightWidth98: {
		...BASE.heightWidth98
	},
	heightWidth120: {
		...BASE.heightWidth120
	},

	//height on width
	heightOnWidth1: {
		...BASE.heightOnWidth1
	},
	heightOnWidth2: {
		...BASE.heightOnWidth2
	},
	heightOnWidth5: {
		...BASE.heightOnWidth5
	},
	heightOnWidth14: {
		...BASE.heightOnWidth14
	},
	heightOnWidth16: {
		...BASE.heightOnWidth16
	},
	heightOnWidth18: {
		...BASE.heightOnWidth18
	},
	heightOnWidth20: {
		...BASE.heightOnWidth20
	},
	heightOnWidth24: {
		...BASE.heightOnWidth24
	},
	heightOnWidth30: {
		...BASE.heightOnWidth30
	},
	heightOnWidth32: {
		...BASE.heightOnWidth32
	},
	heightOnWidth38: {
		...BASE.heightOnWidth38
	},
	heightOnWidth40: {
		...BASE.heightOnWidth40
	},
	heightOnWidth42: {
		...BASE.heightOnWidth42
	},
	heightOnWidth48: {
		...BASE.heightOnWidth48
	},
	heightOnWidth56: {
		...BASE.heightOnWidth56
	},
	heightOnWidth60: {
		...BASE.heightOnWidth60
	},
	heightOnWidth68: {
		...BASE.heightOnWidth68
	},
	heightOnWidth72: {
		...BASE.heightOnWidth72
	},
	heightOnWidth78: {
		...BASE.heightOnWidth78
	},
	heightOnWidth80: {
		...BASE.heightOnWidth80
	},
	heightOnWidth86: {
		...BASE.heightOnWidth86
	},
	heightOnWidth92: {
		...BASE.heightOnWidth92
	},
	heightOnWidth102: {
		...BASE.heightOnWidth102
	},
	heightOnWidth120: {
		...BASE.heightOnWidth120
	},
	heightOnWidth124: {
		...BASE.heightOnWidth124
	},
	heightOnWidth138: {
		...BASE.heightOnWidth138
	},
	heightOnWidth148: {
		...BASE.heightOnWidth148
	},
	heightOnWidth160: {
		...BASE.heightOnWidth160
	},
	heightOnWidth195: {
		...BASE.heightOnWidth195
	},
	heightOnWidth220: {
		...BASE.heightOnWidth220
	},
	heightOnWidth262: {
		...BASE.heightOnWidth262
	},
	height50: {
		height: CONSTANTS.Width50
	},
	height242: {
		height: CONSTANTS.Width242
	},
	height600: {
		...BASE.height600
	},
	height656: {
		...BASE.height656
	},


	// width
	width: {
		...BASE.width
	},
	width2: {
		...BASE.width2
	},
	width4: {
		...BASE.width4
	},
	width16: {
		...BASE.width16
	},
	width18: {
		...BASE.Width18
	},
	width24: {
		...BASE.width24
	},
	width32: {
		...BASE.width32
	},
	width48: {
		...BASE.width48
	},
	width55: {
		...BASE.width55
	},
	width60: {
		...BASE.width60
	},
	width64: {
		...BASE.width64
	},
	width58: {
		...BASE.width58
	},
	width72: {
		...BASE.width72
	},
	width74: {
		...BASE.width74
	},
	width75: {
		...BASE.width75
	},
	width80: {
		...BASE.width80
	},
	width84: {
		...BASE.width84
	},
	width90: {
		...BASE.width90
	},
	width94: {
		...BASE.width94
	},
	width103: {
		...BASE.width103
	},
	width105: {
		...BASE.width105
	},
	Width113: {
		...BASE.Width113
	},
	Width112: {
		...BASE.Width112
	},
	width140: {
		...BASE.width140
	},
	width148: {
		...BASE.width148
	},
	width156: {
		...BASE.width156
	},
	width160: {
		...BASE.width160
	},
	width164: {
		width: CONSTANTS.Width164
	},
	width172: {
		...BASE.width172
	},
	width132: {
		...BASE.width132
	},
	width180: {
		...BASE.width180
	},
	width184: {
		...BASE.width184
	},
	width200: {
		...BASE.width200
	},
	width220: {
		...BASE.width220
	},
	width242: {
		...BASE.width242
	},
	width260: {
		...BASE.width260
	},
	width268: {
		...BASE.width268
	},
	width278: {
		...BASE.width278
	},
	Width280: {
		...BASE.Width280
	},
	width312: {
		...BASE.width312
	},
	width320: {
		...BASE.width320
	},
	width328: {
		...BASE.width328
	},
	width330: {
		...BASE.width330
	},
	width360: {
		width: CONSTANTS.Width360
	},
	Width406: {
		...BASE.Width406
	},

	// max min
	minWidth50: {
		...BASE.minWidth50
	},
	maxWidth66: {
		...BASE.maxWidth66
	},
	maxWidth70: {
		...BASE.maxWidth70
	},
	maxWidth88: {
		...BASE.maxWidth88
	},
	maxWidth99: {
		...BASE.maxWidth99
	},
	maxWidth150: {
		...BASE.maxWidth150
	},
	maxWidth160: {
		...BASE.maxWidth160
	},
	maxWidth190: {
		...BASE.maxWidth190
	},
	maxWidth210: {
		...BASE.maxWidth210
	},
	maxWidth235: {
		maxWidth: CONSTANTS.Width235
	},
	maxWidth260: {
		...BASE.maxWidth260
	},
	maxWidth312: {
		maxWidth: CONSTANTS.Width320
	},
	maxHeight60Percentage: {
		...BASE.maxHeight60Percentage
	},
	maxHeight80Percentage: {
		...BASE.maxHeight80Percentage
	},
	maxHeight60Percentage: {
		...BASE.maxHeight60Percentage
	},

	height40: {
		height: CONSTANTS.Width40
	},
	height100: {
		height: CONSTANTS.Width100
	},
	height140: {
		height: CONSTANTS.Width140
	},
	height160: {
		height: CONSTANTS.Width160
	},

	topLeft2: {
		top: CONSTANTS.Width2,
		left: CONSTANTS.Width2
	},
	topLeft8: {
		top: CONSTANTS.Width8,
		left: CONSTANTS.Width8,
	},
	topNegative10: {
		...BASE.topNegative10
	},
	topRight0: {
		top: -6,
		right: 0
	},
	userBackgroundImage: {
		bottom: 0,
		right: 0,
	},

	top0: {
		top: 0
	},
	top12: {
		...BASE.top12
	},
	bottom0: {
		bottom: 0
	},
	bottom8: {
		...BASE.bottom8
	},
	bottom12: {
		...BASE.bottom12
	},
	bottom16: {
		...BASE.bottom16
	},
	negativeTop68: {
		top: CONSTANTS.Width68 * -1
	},
	bottomRight8: {
		bottom: CONSTANTS.Width8,
		right: CONSTANTS.Width8,
	},
	topRight16: {
		top: CONSTANTS.Width16,
		right: CONSTANTS.Width16,
	},

	modalBannerImage: {
		width: CONSTANTS.Width,
		height: CONSTANTS.Width124
	},

	//left
	left16: {
		...BASE.left16
	},

	right10: {
		...BASE.right10
	},
	absoluteFill: {
		...BASE.absoluteFill
	}
})