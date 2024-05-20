import { StyleSheet } from 'react-native';

import COLOURS from './colors';
import CONSTANTS from './constants';

export default StyleSheet.create({
	flexOne: {
		flex: 1
	},
	flexGrowOne: {
		flexGrow: 1
	},
	flexGrow100: {
		flexGrow: 100
	},
	flex01:{
		flex: 0.1
	},
	flex05:{
		flex: 0.5
	},
	flex08:{
		flex: 0.8
	},
	flex09:{
		flex: 0.9
	},
	justifyCenter: {
		justifyContent: 'center'
	}, 
	justifyFlexStart: {
		justifyContent: 'flex-start'
	},
	justifyFlexEnd: {
		justifyContent: 'flex-end'
	},
	alignItemsCenter: {
		alignItems: 'center'
	},
	alignItemsFlexEnd: {
		alignItems: 'flex-end'
	},
	alignItemsFlexStart: {
		alignItems: 'flex-start'
	},
	alignContentStart: {
		alignContent: 'flex-start'
	},
	alignContentCenter:{
		alignContent: 'center'
	},
	row:{
		flexDirection: 'row'
	},
	column:{
		flexDirection: 'column'
	},
	spaceBetween: {
		justifyContent: 'space-between'
	},
	overFlow: {
		overflow: 'hidden'
	},
	alignSelfFlexEnd: {
		alignSelf: 'flex-end'
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},	
	right: {
		right: 0
	},
	textAlign: {
		textAlign: 'center'
	},
	textAlignCenter: {
		textAlign: 'center'
	},
	underLine: {
		textDecorationLine: 'underline'
	},
	lineThrough: {
		textDecorationLine: 'line-through'
	},
	textUppercase: {
		textTransform: 'uppercase'
	},
	activeZindex: {
		zIndex: 1
	},
	zeroZindex: {
		zIndex: 0
	},
	opacityDisable: {
		opacity: 0.4
	},
	flexWrap:{
		flexWrap: 'wrap'
	},
	disabled:{
		opacity: 0.5
	},
	position: {
		position: 'absolute'
	},
	positionAbsolute: {
		position: 'absolute',
	},
	positionAbsoluteBottom: {
		position: 'absolute',
		bottom: 0
	},
	positionAbsoluteTop: {
		position: 'absolute',
		top: 0
	},
	positionAbsoluteRight: {
		position: 'absolute',
		right: 0
	},

	borderStyleDashed: {
		borderStyle: 'dashed'
	},
	right16:{
		right: CONSTANTS.Width16
	},
	topNegative10: {
		top: -CONSTANTS.Width10
	},
	top6: {
		top: CONSTANTS.Width6
	},
	top12: {
		top : CONSTANTS.Width12
	},
	top34:{
		top: CONSTANTS.Width34
	},

	right6: {
		right: CONSTANTS.Width6
	},
	right10: {
		right: CONSTANTS.Width10
	},

	// font
	normal: {
		fontFamily: 'PlusJakartaSans-Regular'
	},
	medium: {
		fontFamily: 'PlusJakartaSans-Medium'
	}, 
	bold: {
		fontFamily: 'PlusJakartaSans-Bold'
	},
	extraBold: {
		fontFamily: 'PlusJakartaSans-ExtraBold'
	}, 

	// font size
	fontSize9:{
		fontSize: CONSTANTS.fontSize9
	},
	fontSize10:{
		fontSize: CONSTANTS.fontSize10
	},
	fontSize11:{
		fontSize: CONSTANTS.fontSize11
	},
	fontSize12:{
		fontSize: CONSTANTS.fontSize12
	},
	fontSize13:{
		fontSize: CONSTANTS.fontSize13
	},
	fontSize14:{
		fontSize: CONSTANTS.fontSize14
	},
	fontSize16:{
		fontSize: CONSTANTS.fontSize16
	},
	fontSize18:{
		fontSize: CONSTANTS.fontSize18
	},
	fontSize20:{
		fontSize: CONSTANTS.Width20
	},
	fontSize24:{
		fontSize: CONSTANTS.fontSize24
	},

	overlayColorWhite: {
		overlayColor: COLOURS.WHITE
	},	
	// font color
	colorPrimary:{
		color: COLOURS.PRIMARY_COLOR
	},
	colorLynch: {
		color: COLOURS.LYNCH
	},
	colorPrussianBlue:{
		color: COLOURS.PRUSSIAN_BLUE
	},
	colorRed:{
		color: COLOURS.RED
	},
	colorWhite:{
		color: COLOURS.WHITE
	},
	colorNavyBlue:{ 
		color: COLOURS.NAVY_BLUE
	},
	colorMangoTango:{
		color: COLOURS.MANGO_TANGO
	},
	colorSilverBlue:{
		color: COLOURS.SILVER_BLUE
	},
	colorSeaBlue:{
		color: COLOURS.SEA_BLUE
	},
	colorRockBlue:{
		color: COLOURS.ROCK_BLUE
	},
	colorBlack: {
		color: COLOURS.BLACK
	},
	colorCaribbeanGreen: {
		color: COLOURS.CARIBBEAN_GREEN
	},

	borderColorWildSand:{
		borderColor: COLOURS.WILD_SAND
	},
	borderColorWhiteSmokeTint:{
		borderColor: COLOURS.WHITE_SMOKE_TINT
	},


	// line height
	lineHeight12:{
		lineHeight: CONSTANTS.Width12
	},
	lineHeight13:{
		lineHeight: CONSTANTS.Width13
	},
	lineHeight14:{
		lineHeight: CONSTANTS.Width14
	},
	lineHeight15:{
		lineHeight: CONSTANTS.Width15
	},
	lineHeight16:{
		lineHeight: CONSTANTS.Width16
	},
	lineHeight18:{
		lineHeight: CONSTANTS.Width18
	},
	lineHeight20:{
		lineHeight: CONSTANTS.Width20
	},
	lineHeight22:{
		lineHeight: CONSTANTS.Width22
	},
	lineHeight24:{
		lineHeight: CONSTANTS.Width24
	},
	lineHeight28:{
		lineHeight: CONSTANTS.Width28
	},
	lineHeight30:{
		lineHeight: CONSTANTS.Width30
	},

	// background Color 
	backgroundColorPrimary:{
		backgroundColor: COLOURS.PRIMARY_COLOR
	},
	backgroundColorWhite:{
		backgroundColor: COLOURS.WHITE
	},
	backgroundColorWhiteSmokeTint: {
		backgroundColor:COLOURS.WHITE_SMOKE_TINT
	},
	backgroundColorCloudGrey:{
		backgroundColor: COLOURS.CLOUD_GREY
	},
	backgroundColorWhiteSmoke:{
		backgroundColor: COLOURS.WHITE_SMOKE
	},
	backgroundColorOffGreen:{
		backgroundColor: COLOURS.OFF_GREEN
	},
	backgroundColorZircon:{
		backgroundColor: COLOURS.ZIRCON
	},
	backgroundColorRed:{
		backgroundColor: COLOURS.RED
	},
	backgroundColorPrussianBlue:{
		backgroundColor: COLOURS.PRUSSIAN_BLUE
	},
	backgroundColorLightGreen:{
		backgroundColor: COLOURS.LIGHT_GREEN
	},
	backgroundColorLightCyan:{
		backgroundColor: COLOURS.LIGHT_CYAN
	},
	backgroundColorAliceBlue:{
		backgroundColor: COLOURS.ALICE_BLUE
	},
	backgroundColorBlur:{
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	backgroundColorSmokeWhite:{
		backgroundColor: COLOURS.SMOKE_WHITE
	},
	backgroundColorCyan:{
		backgroundColor: COLOURS.CYAN
	},
	backgroundColorCyanGreen:{
		backgroundColor: COLOURS.CYAN_GREEN
	},
	backgroundColorSkyBlue:{
		backgroundColor: COLOURS.SKY_BLUE
	},
	backgroundColorSolitude:{
		backgroundColor: COLOURS.SOLITUDE
	},
	backgroundColorCoconutWhite:{
		backgroundColor: COLOURS.COCONUT_WHITE
	},
	backgroundColorOceanBlue:{
		backgroundColor: COLOURS.OCEAN_BLUE
	},
	backgroundColorUranianBlue:{
		backgroundColor: COLOURS.URANIAN_BLUE
	},
	backgroundColorTwilightBlue:{
		backgroundColor: COLOURS.TWILIGHT_BLUE
	},
	backgroundColorBlueGem:{
		backgroundColor: COLOURS.BLUE_GEM
	},
	backgroundColorBlack:{
		backgroundColor: COLOURS.BLACK
	},
	backgroundColorNavyBlue:{
		backgroundColor: COLOURS.NAVY_BLUE
	},
	backgroundColorVarden:{
		backgroundColor: COLOURS.VARDEN
	},
	backgroundColorBlueGem:{
		backgroundColor: COLOURS.BLUE_GEM
	},
	backgroundColorTraquil:{
		backgroundColor: COLOURS.TRANQUIL
	},
	backgroundColorTransparent:{
		backgroundColor: COLOURS.transparent
	},
	backgroundColorWhiteIce: {
		backgroundColor: COLOURS.WHITE_ICE
	},
	backgroundColorSolitudeDark: {
		backgroundColor: COLOURS.SOLITUDE_DARK
	},
	backgroundColorCaribbeanGreen: {
		backgroundColor: COLOURS.CARIBBEAN_GREEN
	},
	backgroundColorScienceBlue: {
		backgroundColor: COLOURS.SCIENCE_BLUE
	},
	

	// border radius
	borderRadius2:{
		borderRadius: CONSTANTS.Width2
	},
	borderRadius4:{
		borderRadius: CONSTANTS.Width4
	},
	borderRadius8:{
		borderRadius: CONSTANTS.Width8
	},
	borderRadius10:{
		borderRadius: CONSTANTS.Width10
	},
	borderRadius12:{
		borderRadius: CONSTANTS.Width12
	},
	borderRadius16:{
		borderRadius: CONSTANTS.Width16
	},
	borderRadius20:{
		borderRadius: CONSTANTS.Width20
	},
	borderRadius24:{
		borderRadius: CONSTANTS.Width24
	},
	borderRadius48:{
		borderRadius: CONSTANTS.Width48
	},
	borderRadius100:{
		borderRadius: CONSTANTS.Width100
	},

	borderTopLeftRadius8:{
		borderTopLeftRadius: CONSTANTS.Width8
	},
	borderTopRightRadius8:{
		borderTopRightRadius: CONSTANTS.Width8
	},
	borderBottomLeftRadius8:{
		borderBottomLeftRadius: CONSTANTS.Width8
	},
	borderBottomRightRadius8:{
		borderBottomRightRadius: CONSTANTS.Width8
	},
	borderTopRightRadius10: {
		borderTopRightRadius : CONSTANTS.Width10
	},
	borderBottomRightRadius10: {
		borderBottomRightRadius : CONSTANTS.Width10
	},

	borderTopLeftRadius10: {
		borderTopLeftRadius : CONSTANTS.Width10
	},
	borderBottomLeftRadius10: {
		borderBottomLeftRadius : CONSTANTS.Width10
	},
	borderTopLeftRadius24:{
		borderTopLeftRadius: CONSTANTS.Width24
	},
	borderTopRightRadius24:{
		borderTopRightRadius: CONSTANTS.Width24
	},
	borderBottomLeftRadius24:{
		borderBottomLeftRadius: CONSTANTS.Width24
	},
	borderBottomRightRadius24:{
		borderBottomRightRadius: CONSTANTS.Width24
	},
	borderTopLeftRadius100:{
		borderTopLeftRadius: CONSTANTS.Width100
	},
	borderTopRightRadius100:{
		borderTopRightRadius: CONSTANTS.Width100
	},
	borderBottomLeftRadius100:{
		borderBottomLeftRadius: CONSTANTS.Width100
	},
	borderBottomRightRadius100:{
		borderBottomRightRadius: CONSTANTS.Width100
	},

	borderRadiusTop8:{
		borderTopLeftRadius: CONSTANTS.Width8,
		borderTopRightRadius: CONSTANTS.Width8
	},

	// border width
	borderWidth1:{
		borderWidth: StyleSheet.hairlineWidth * 1
	},
	borderWidth2:{
		borderWidth: StyleSheet.hairlineWidth * 2
	},
	borderWidth3:{
		borderWidth: StyleSheet.hairlineWidth * 3
	},
	borderWidth4:{
		borderWidth: StyleSheet.hairlineWidth * 4
	},

	borderBottomWidth1: {
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	borderTopWidth1: {
		borderTopWidth: StyleSheet.hairlineWidth * 1
	},
	borderTopWidth2: {
		borderTopWidth: StyleSheet.hairlineWidth * 2
	},
	borderBottomWidth2:{
		borderBottomWidth: StyleSheet.hairlineWidth * 2
	},
	borderRightWidth1:{
		borderRightWidth: StyleSheet.hairlineWidth * 1
	},
	borderRightWidth2:{
		borderRightWidth: StyleSheet.hairlineWidth * 2
	},


	// border color
	borderColorPrimary:{
		borderColor: COLOURS.PRIMARY_COLOR
	},
	borderColorRed:{
		borderColor: COLOURS.RED
	},
	borderColorLynch:{
		borderColor: COLOURS.LYNCH
	},
	borderColorAshGrey:{
		borderColor: COLOURS.ASH_GREY
	},
	borderColorCoconutWhite:{
		borderColor: COLOURS.COCONUT_WHITE
	},
	borderColorWhite:{
		borderColor: COLOURS.WHITE
	},
	borderColorWhiteSmoke:{
		borderColor: COLOURS.SMOKE_WHITE
	},
	borderColorSilverBlue:{
		borderColor: COLOURS.SILVER_BLUE
	},
	borderColorVodkaBlue:{
		borderColor: COLOURS.VODKA_BLUE
	},
	borderColorCharcoalBlue:{
		borderColor: COLOURS.CHARCOAL_BLUE
	},
	borderColorPaleSolitude:{
		borderColor: COLOURS.PALE_SOLITUDE
	},
	backgroundColorIceberg:{
		backgroundColor: COLOURS.ICEBERG
	},

	borderBottomColorPrimary:{
		borderBottomColor: COLOURS.PRIMARY_COLOR
	},
	borderBottomColorWhite:{
		borderBottomColor: COLOURS.WHITE
	},
	borderBottomColorSmokeWhite:{
		borderBottomColor: COLOURS.WHITE_SMOKE
	},
	margin8:{
		margin: CONSTANTS.Width8
	},

	// margin left
	marginLeft2:{
		marginLeft: CONSTANTS.Width2
	},
	marginLeft4:{
		marginLeft: CONSTANTS.Width4
	},
	marginLeft6:{
		marginLeft: CONSTANTS.Width6
	},
	marginLeft8:{
		marginLeft: CONSTANTS.Width8
	},
	marginLeft10:{
		marginLeft: CONSTANTS.Width10
	},
	marginLeft12:{
		marginLeft: CONSTANTS.Width12
	},
	marginLeft16:{
		marginLeft: CONSTANTS.Width16
	},
	marginLeft20:{
		marginLeft: CONSTANTS.Width20
	},
	marginLeft24:{
		marginLeft: CONSTANTS.Width24
	},
	marginLeft112:{
		marginLeft: CONSTANTS.Width112
	},

	// margin right
	marginRight8:{
		marginRight: CONSTANTS.Width8
	},
	marginRight16:{
		marginRight: CONSTANTS.Width16
	},
	marginRight20:{
		marginRight: CONSTANTS.Width20
	},
	marginRight24:{
		marginRight: CONSTANTS.Width24
	},
	marginRight34:{
		marginRight: CONSTANTS.Width34
	},


	// margin Top
	marginTopMinus10:{
		marginTop: -(CONSTANTS.Width10)
	},
	marginTopMinus16:{
		marginTop: -(CONSTANTS.Width16)
	},
	marginTopMinus36:{
		marginTop: -(CONSTANTS.Width36)
	},
	marginTopMinus48:{
		marginTop: -(CONSTANTS.Width48)
	},
	marginTop2:{
		marginTop: CONSTANTS.Width2
	},
	marginTop4:{
		marginTop: CONSTANTS.Width4
	},
	marginTop6:{
		marginTop: CONSTANTS.Width6
	},
	marginTop8:{
		marginTop: CONSTANTS.Width8
	},
	marginTop12:{
		marginTop: CONSTANTS.Width12
	},
	marginTop16:{
		marginTop: CONSTANTS.Width16
	},
	marginTop18:{
		marginTop: CONSTANTS.Width18
	},
	marginTop22:{
		marginTop: CONSTANTS.Width22
	},
	marginTop24:{
		marginTop: CONSTANTS.Width24
	},
	marginTop28:{
		marginTop: CONSTANTS.Width28
	},
	marginTop30:{
		marginTop: CONSTANTS.Width30
	},
	marginTop32:{
		marginTop: CONSTANTS.Width32
	},
	marginTop38:{
		marginTop: CONSTANTS.Width38
	},
	marginTop40:{
		marginTop: CONSTANTS.Width40
	},
	marginTop44:{
		marginTop: CONSTANTS.Width44
	},
	marginTop136:{
		marginTop: CONSTANTS.Width136
	},

	// marginBottom
	marginBottom4:{
		marginBottom: CONSTANTS.Width4
	},
	marginBottom8:{
		marginBottom: CONSTANTS.Width8
	},
	marginBottom12:{
		marginBottom: CONSTANTS.Width12
	},
	marginBottom14:{
		marginBottom: CONSTANTS.Width14
	},
	marginBottom16:{
		marginBottom: CONSTANTS.Width16
	},
	marginBottom22:{
		marginBottom: CONSTANTS.Width22
	},
	marginBottom24:{
		marginBottom: CONSTANTS.Width24
	},
	marginBottom32:{
		marginBottom: CONSTANTS.Width32
	},
	marginBottom36:{
		marginBottom: CONSTANTS.Width36
	},
	marginBottom76:{
		marginBottom: CONSTANTS.Width76
	},
	marginBottom78:{
		marginBottom: CONSTANTS.Width78
	},

	// padding Bottom
	paddingBottom8:{
		paddingBottom: CONSTANTS.Width8
	},
	paddingBottom12:{
		paddingBottom: CONSTANTS.Width12
	},
	paddingBottom16:{
		paddingBottom: CONSTANTS.Width16
	},
	paddingBottom18:{
		paddingBottom: CONSTANTS.Width18
	},
	paddingBottom20:{
		paddingBottom: CONSTANTS.Width20
	},
	paddingBottom24:{
		paddingBottom: CONSTANTS.Width24
	},
	paddingBottom36:{
		paddingBottom: CONSTANTS.Width36
	},
	paddingBottom42:{
		paddingBottom: CONSTANTS.Width42
	},
	paddingBottom44:{
		paddingBottom: CONSTANTS.Width44
	},
	paddingBottom48:{
		paddingBottom: CONSTANTS.Width48
	},
	paddingBottom60:{
		paddingBottom: CONSTANTS.Width60
	},
	paddingBottom64: {
		paddingBottom: CONSTANTS.Width64
	},
	paddingBottom78:{
		paddingBottom: CONSTANTS.Width78
	},
	paddingBottom82:{
		paddingBottom: CONSTANTS.Width82
	},

	//padding top
	paddingTop4:{
		paddingTop: CONSTANTS.Width4
	},
	paddingTop8:{
		paddingTop: CONSTANTS.Width8
	},
	paddingTop10:{
		paddingTop: CONSTANTS.Width10
	},
	paddingTop12:{
		paddingTop: CONSTANTS.Width12
	},
	paddingTop16:{
		paddingTop: CONSTANTS.Width16
	},
	paddingTop20:{
		paddingTop: CONSTANTS.Width20
	},
	paddingTop24:{
		paddingTop: CONSTANTS.Width24
	},
	paddingTop32: {
		paddingTop: CONSTANTS.Width32
	},
	paddingTop36:{
		paddingTop: CONSTANTS.Width36
	},
	paddingTop40:{
		paddingTop: CONSTANTS.Width40
	},
	paddingTop44:{
		paddingTop: CONSTANTS.Width44
	},
	paddingTop60: {
		paddingTop: CONSTANTS.Width60
	},
	paddingTop64:{
		paddingTop: CONSTANTS.Width64
	},
	paddingTop82:{
		paddingTop: CONSTANTS.Width82
	},
	paddingTop140: {
		paddingTop: CONSTANTS.Width140
	},

	// paddingRight
	paddingRight4:{
		paddingRight: CONSTANTS.Width4
	},
	paddingRight8:{
		paddingRight: CONSTANTS.Width8
	},
	paddingRight16:{
		paddingRight: CONSTANTS.Width16
	},
	paddingRight20:{
		paddingRight: CONSTANTS.Width20
	},
	paddingRight48:{
		paddingRight: CONSTANTS.Width48
	},
	paddingRight33:{
		paddingRight: CONSTANTS.Width33
	},
	paddingRight78:{
		paddingRight: CONSTANTS.Width78
	},
	paddingRight60 :{
		paddingRight: CONSTANTS.Width60
	},

	// padding left
	paddingLeft6: {
		paddingLeft: CONSTANTS.Width6
	},
	paddingLeft8 : {
		paddingLeft: CONSTANTS.Width8
	},
	paddingLeft10: {
		paddingLeft: CONSTANTS.Width10
	},
	paddingLeft16: {
		paddingLeft: CONSTANTS.Width16
	},
	paddingLeft24:{
		paddingLeft: CONSTANTS.Width24
	},
	paddingLeft32: {
		paddingLeft: CONSTANTS.Width32
	},

	// common padding
	padding4:{
		padding: CONSTANTS.Width4
	},
	padding6:{
		padding: CONSTANTS.Width6
	},
	padding8:{
		padding: CONSTANTS.Width8
	},
	padding10:{
		padding: CONSTANTS.Width10
	},
	padding12:{
		padding: CONSTANTS.Width12
	},
	padding16:{
		padding: CONSTANTS.Width16
	},
	padding24:{
		padding: CONSTANTS.Width24
	},
	paddingHorizontal6:{
		paddingHorizontal: CONSTANTS.Width6
	},
	paddingHorizontal4:{
		paddingHorizontal: CONSTANTS.Width4
	},
	paddingHorizontal8:{
		paddingHorizontal: CONSTANTS.Width8
	},
	paddingHorizontal10:{
		paddingHorizontal: CONSTANTS.Width10
	},	
	paddingHorizontal12:{
		paddingHorizontal: CONSTANTS.Width12
	},
	paddingHorizontal16:{
		paddingHorizontal: CONSTANTS.Width16
	},
	paddingHorizontal32:{
		paddingHorizontal: CONSTANTS.Width32
	},

	paddingVertical2:{
		paddingVertical: CONSTANTS.Width2
	},
	paddingVertical4:{
		paddingVertical: CONSTANTS.Width4
	},
	paddingVertical5:{
		paddingVertical: CONSTANTS.Width5
	},
	paddingVertical8:{
		paddingVertical: CONSTANTS.Width8
	},
	paddingVertical10:{
		paddingVertical: CONSTANTS.Width10
	},
	paddingVertical12:{
		paddingVertical: CONSTANTS.Width12
	},
	paddingVertical16:{
		paddingVertical: CONSTANTS.Width16
	},
	paddingVertical21:{
		paddingVertical: CONSTANTS.Width21
	},
	paddingVertical36: {
		paddingVertical: CONSTANTS.Width36
	},


	// height width
	heightWidth4:{
		height: CONSTANTS.Width4,
		width: CONSTANTS.Width4
	},
	heightWidth8:{
		height: CONSTANTS.Width8,
		width: CONSTANTS.Width8
	},
	heightWidth16:{
		height: CONSTANTS.Width16,
		width: CONSTANTS.Width16
	},
	heightWidth18:{
		height: CONSTANTS.Width18,
		width: CONSTANTS.Width18
	},
	heightWidth20:{
		height: CONSTANTS.Width20,
		width: CONSTANTS.Width20
	},
	heightWidth24:{
		height: CONSTANTS.Width24,
		width: CONSTANTS.Width24
	},
	heightWidth28:{
		height: CONSTANTS.Width28,
		width: CONSTANTS.Width28
	},
	heightWidth32:{
		height: CONSTANTS.Width32,
		width: CONSTANTS.Width32
	},
	heightWidth40:{
		height: CONSTANTS.Width40,
		width: CONSTANTS.Width40
	},
	heightWidth46:{
		height: CONSTANTS.Width46,
		width: CONSTANTS.Width46
	},
	heightWidth48:{
		height: CONSTANTS.Width48,
		width: CONSTANTS.Width48
	},
	heightWidth55:{
		height: CONSTANTS.Width55,
		width: CONSTANTS.Width55
	},
	heightWidth60:{
		height: CONSTANTS.Width60,
		width: CONSTANTS.Width60
	},
	heightWidth90: {
		height: CONSTANTS.Width90,
		width: CONSTANTS.Width90
	},
	heightWidth92:{
		height: CONSTANTS.Width92,
		width: CONSTANTS.Width92
	},
	heightWidth96:{
		height: CONSTANTS.Width96,
		width: CONSTANTS.Width96
	},
	heightWidth98:{
		height: CONSTANTS.Width98,
		width: CONSTANTS.Width98
	},
	heightWidth120:{
		height: CONSTANTS.Width120,
		width: CONSTANTS.Width120
	},

	//height on width
	heightOnWidth1:{
		height: CONSTANTS.Width1
	},
	heightOnWidth2:{
		height: CONSTANTS.Width2
	},
	heightOnWidth5:{
		height: CONSTANTS.Width5
	},
	heightOnWidth14:{
		height: CONSTANTS.Width14
	},
	heightOnWidth16:{
		height: CONSTANTS.Width16
	},
	heightOnWidth18:{
		height: CONSTANTS.Width18
	},
	heightOnWidth24:{
		height: CONSTANTS.Width24
	},
	heightOnWidth30:{
		height: CONSTANTS.Width30
	},
	heightOnWidth20:{
		height: CONSTANTS.Width20
	},
	heightOnWidth32:{
		height: CONSTANTS.Width32
	},
	heightOnWidth38:{
		height: CONSTANTS.Width38
	},
	heightOnWidth40:{
		height: CONSTANTS.Width40
	},
	heightOnWidth42:{
		height: CONSTANTS.Width42
	},
	heightOnWidth48:{
		height: CONSTANTS.Width48
	},
	heightOnWidth56:{
		height: CONSTANTS.Width56
	},
	heightOnWidth60:{
		height: CONSTANTS.Width60
	},
	heightOnWidth68:{
		height: CONSTANTS.Width68
	},
	heightOnWidth72:{
		height: CONSTANTS.Width72
	},
	heightOnWidth78:{
		height: CONSTANTS.Width78
	},
	heightOnWidth80:{
		height: CONSTANTS.Width80
	},
	heightOnWidth86:{
		height: CONSTANTS.Width86
	},
	heightOnWidth92:{
		height: CONSTANTS.Width92
	},
	heightOnWidth102:{
		height: CONSTANTS.Width102
	},
	heightOnWidth120:{
		height: CONSTANTS.Width120
	},
	heightOnWidth124:{
		height: CONSTANTS.Width124
	},
	heightOnWidth138:{
		height: CONSTANTS.Width138
	},
	heightOnWidth148:{
		height: CONSTANTS.Width148
	},
	heightOnWidth160:{
		height: CONSTANTS.Width160
	},
	heightOnWidth195:{
		height: CONSTANTS.Width195
	},
	heightOnWidth220:{
		height: CONSTANTS.Width220
	},
	heightOnWidth262:{
		height: CONSTANTS.Width262
	},
	height600:{
		height: CONSTANTS.Height600
	},
	height656:{
		height: CONSTANTS.Height656
	},
	fullHeight: {
		height: CONSTANTS.FullHeight
	},
	fullWidth: {
		width: CONSTANTS.FullWidth
	},
	
	// width 
	width: {
		width: CONSTANTS.Width
	},
	width2: {
		width: CONSTANTS.Width2
	},
	width:{
		width: CONSTANTS.Width
	},
	width16:{
		width: CONSTANTS.Width16
	},
	width18:{
		width: CONSTANTS.Width18
	},
	width24:{
		width: CONSTANTS.Width24
	},
	width32:{
		width: CONSTANTS.Width32
	},
	width48:{
		width: CONSTANTS.Width48
	},
	width55:{
		width: CONSTANTS.Width55
	},
	width60:{
		width: CONSTANTS.Width60
	},
	width64:{
		width: CONSTANTS.Width64
	},
	width58:{
		width: CONSTANTS.Width58
	},
	width72:{
		width: CONSTANTS.Width72
	},
	width74:{
		width: CONSTANTS.Width74
	},
	width75:{
		width: CONSTANTS.Width75
	},
	width80: {
		width: CONSTANTS.Width80
	},
	width84:{
		width: CONSTANTS.Width84
	},
	width90:{
		width: CONSTANTS.Width90
	},
	width94:{
		width: CONSTANTS.Width94
	},
	width103:{
		width: CONSTANTS.Width103
	},
	width105:{
		width: CONSTANTS.Width105
	},
	Width112:{
		width: CONSTANTS.Width112
	},
	width140:{
		width: CONSTANTS.Width140
	},
	width148:{
		width: CONSTANTS.Width148
	},
	width156:{
		width: CONSTANTS.Width156
	},
	width160:{
		width: CONSTANTS.Width160
	},
	width132:{
		width: CONSTANTS.Width132
	},
	width172:{
		width: CONSTANTS.Width172
	},
	width180:{
		width: CONSTANTS.Width180
	},
	width184:{
		width: CONSTANTS.Width184
	},
	width200:{
		width: CONSTANTS.Width200
	},
	width220:{
		width: CONSTANTS.Width220
	},
	width242:{
		width: CONSTANTS.Width242
	},
	width260:{
		width: CONSTANTS.Width260
	},
	width268:{
		width: CONSTANTS.Width268
	},
	width278:{
		width: CONSTANTS.Width278
	},
	Width280: {
		width: CONSTANTS.Width280
	},
	width312:{
		width: CONSTANTS.Width312
	},
	width320:{
		width: CONSTANTS.Width320
	},
	width328:{
		width: CONSTANTS.Width328
	},
	width330: {
		width: CONSTANTS.Width330
	},
	Width406: {
		width: CONSTANTS.Width406
	},

	// max min
	minWidth50:{
		minWidth: CONSTANTS.Width50
	},
	maxWidth66:{
		maxWidth: CONSTANTS.Width66
	},
	maxWidth70:{
		maxWidth: CONSTANTS.Width70
	},
	maxWidth88:{
		maxWidth: CONSTANTS.Width88
	},
	maxWidth99: {
		maxWidth: CONSTANTS.Width99
	},
	maxWidth150:{
		maxWidth: CONSTANTS.Width150
	},
	maxWidth160:{
		maxWidth: CONSTANTS.Width160
	},
	maxWidth190:{
		maxWidth: CONSTANTS.Width190
	},
	maxWidth210:{
		maxWidth: CONSTANTS.Width210
	},
	maxWidth260:{
		maxWidth: CONSTANTS.Width260
	},
	maxHeight60Percentage:{
		maxHeight: CONSTANTS.Width + CONSTANTS.Width100,
		flexGrow: 1
	},
	maxHeight80Percentage: {
		maxHeight: CONSTANTS.Height * (80/100)
	},
	maxHeight60Percentage: {
		maxHeight: CONSTANTS.Height * (60/100)
	},
	bottom8: {
		bottom: CONSTANTS.Width8
	},
	bottom12: {
		bottom: CONSTANTS.Width12
	},
	bottom16: {
		bottom: CONSTANTS.Width16
	},

	//left
	left16:{
		left:CONSTANTS.Width16
	},
	absoluteFill: {
		...StyleSheet.absoluteFill,
	}
})