import { StyleSheet } from "react-native";


/**************** Basic Styles ******************/

const  ButtonBasic = {
    width: '296px',
    height: '48px',
    borderRadius: 8,
    textAlign: 'center',
}


const InputBasic = {
    width: '296px',
    height: '48px',
    borderRadius: 8,
};

const fontBasic = {
    fontFamily: 'Noto Sans KR',
    color: 'rgba(0, 0, 0, 0.95)',
}


/**************** Global Style ******************/

 const GlobalStyles = StyleSheet.create({
    ButtonNormal: {
        ...ButtonBasic,
        backgroundColor: '#000000',
        color:'#FFFFFF',
    },
    ButtonActive: {
        ...ButtonBasic,
        backgroundColor: '#2E2E2E',
        color:'#727272',
    },
    ButtonValidation: {
        ...ButtonBasic,
        backgroundColor: '#2E2E2E',
        color:'#FFFFFF',
    },
    ButtonDisabled: {
        ...ButtonBasic,
        backgroundColor: '#CCCCCC',
        color:'#FFFFFF',
    },

    // input
    InputNormal: {
        ...InputBasic,
        border: '1px solid #A6A6A6'
    },
    InputActive: {
        ...InputBasic,
        border: '1px solid #120DFF',
        boxShadow: ' 0px 0px 14px rgba(18, 13, 255, 0.18)'
    },
    InputValidation: {
        ...InputBasic,
        border: '1px solid #120DFF',
        boxShadow: ' 0px 0px 14px rgba(18, 13, 255, 0.18)'
    },
    InputError: {
        ...InputBasic,
        border: '1px solid #FF2B0E',
        boxShadow: '0px 0px 14px rgba(255, 43, 14, 0.18)'
    },

    // font
    fontCaption: {
        ...fontBasic,
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: 0.03,
        fontWeight: '300',
    },
    fontButton1: {
        ...fontBasic,
        fontSize: 14,
        lineHeight: 25,
        letterSpacing: 0.0025,
        fontWeight: '700',
    },
    fontBody2: {
        ...fontBasic,
        fontSize: 14,
        lineHeight: 25,
        letterSpacing: 0.0025,
        fontWeight: '300',
    },
    fontBody1: {
        ...fontBasic,
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.005,
        fontWeight: '300',
    },
    fontSubtitle2: {
        ...fontBasic,
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.001,
        fontWeight: '500',
    },
    fontSubtitle1: {
        ...fontBasic,
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.0015,
        fontWeight: '500',
    },
    fontH1: {
        ...fontBasic,
        fontSize: 33,
        lineHeight: 50,
        letterSpacing: 0.0025,
        fontWeight: '900',
    },
    fontH2: {
        ...fontBasic,
        fontSize: 23,
        lineHeight: 36,
        fontWeight: '700',
    },
    fontH3: {
        ...fontBasic,
        fontSize: 19,
        lineHeight: 32,
        fontWeight: '700',
    },
    fontError: {
        ...fontBasic,
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.0025,
        fontWeight: '300',
        color: '#FF2B0E',
    },
})


export default GlobalStyles