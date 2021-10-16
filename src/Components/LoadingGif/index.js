import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { gethome } from '../../actions/gethome';
import '../../fonts/MontserratMedium.ttf';
import './styles.css'

const LoadingGif = (props) => {

    const [w,setW] = useState(0);
    const [e,setE] = useState(0);
    const [l,setL] = useState(0);
    const [c,setC] = useState(0);
    const [o,setO] = useState(0);
    const [m,setM] = useState(0);
    const [e2,setE2] = useState(0);
    const [wColor, setWColor] = useState('white');
    const [tryAgainTextColor, setTryAgainTextColor] = useState('white');
    const [tryAgainBackgroundColor, setTryAgainBackgroundColor] = useState('black');
    const [tryAgainOpacity, setTryAgainOpacity] = useState(0);
    const dispatch = useDispatch();

    const styles = {
        text1: {
            fontFamily: 'Montserrat',
            fontSize: w === 1 ? 50 : w === 2 ? 40 : 0,
            opacity: w === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: wColor,
        },
        text2: {
            fontFamily: 'Montserrat',
            fontSize: e === 1 ? 50 : e === 2 ? 40 : 0,
            opacity: e === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        text3: {
            fontFamily: 'Montserrat',
            fontSize: l === 1 ? 50 : l === 2 ? 40 : 0,
            opacity: l === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        text4: {
            fontFamily: 'Montserrat',
            fontSize: c === 1 ? 50 : c === 2 ? 40 : 0,
            opacity: c === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        text5: {
            fontFamily: 'Montserrat',
            fontSize: o === 1 ? 50 : o === 2 ? 40 : 0,
            opacity: o === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        text6: {
            fontFamily: 'Montserrat',
            fontSize: m === 1 ? 50 : m === 2 ? 40 : 0,
            opacity: m === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        text7: {
            fontFamily: 'Montserrat',
            fontSize: e2 === 1 ? 50 : e2 === 2 ? 40 : 0,
            opacity: e2 === 1 ? 1 : 0,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            color: 'white'
        },
        tryAgainButton: {
            width: '13%',
            height: '9%',
            border: '1px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: tryAgainOpacity,
            backgroundColor: tryAgainBackgroundColor,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            position:'absolute',
            zIndex: 1
        },
        tryAgainButtonColor: {
            color: tryAgainTextColor,
            fontFamily: 'Montserrat',
            textAlign: 'center',
            fontSize: 12,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        }
    }

    const success = () => {
        setTimeout(() => {
            hideIntro();
        },1000)
        setWColor('red');
    }

    const hideIntro = () => {
        setTimeout(() => {
            props.isLoaded(true);
        },1000)
        setW(2);
        setE(2);
        setL(2);
        setC(2);
        setO(2);
        setM(2);
        setE2(2);
    }

    const hideWelcome = (resp) => {
        setTimeout(() => {
            if (resp){
                success();
            } else {
                setTryAgainOpacity(1)
            }
        },1000)
        if (!resp) hideIntro();
    }

    const fetchData = async () => {
        // start W Color
        try{
            await dispatch(gethome());
            hideWelcome(true);
        } catch (err) {
            hideWelcome(false);
        }
    }

    const playAnim = () => {
        setTimeout(() => {
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    setTimeout(() => {
                                        fetchData();
                                    },2000)
                                    setE2(1);
                                },200)
                                setM(1);
                            },200)
                            setO(1);
                        },200)
                        setC(1);
                    },200)
                    setL(1);
                },200)
                setE(1);
            },200)
            setW(1);
        }, 500)
    }

    const onMouseHoverIn = () => {
        setTryAgainBackgroundColor('white');
        setTryAgainTextColor('black');
    }

    const onMouseHoverOut = () => {
        setTryAgainBackgroundColor('rgba(0,0,0,0)');
        setTryAgainTextColor('white');
    }

    const tryAgain = () => {
        setTimeout(() => {
            playAnim();
        },1000)
        setTryAgainOpacity(0);
    }

    useEffect(() => {
        playAnim();
    },[])

    return (
        <>
            <div onMouseEnter={onMouseHoverIn} onMouseLeave={onMouseHoverOut} onClick={tryAgain} style={styles.tryAgainButton}>
                <text style={styles.tryAgainButtonColor}>TRY AGAIN</text>
            </div>
            <div style={{position: 'absolute'}}>
                <text style={styles.text1}>W</text>
                <text style={styles.text2}>E</text>
                <text style={styles.text3}>L</text>
                <text style={styles.text4}>C</text>
                <text style={styles.text5}>O</text>
                <text style={styles.text6}>M</text>
                <text style={styles.text7}>E</text>
            </div>
        </>
    )
}

export default LoadingGif;