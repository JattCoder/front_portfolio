import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfileName, getProfileDesc } from '../../Helper/userInfo';

const Bio = () => {

    const name = useSelector((state) => getProfileName(state));
    const desc = useSelector((state) => getProfileDesc(state));
    const [hiSize, setHiSize] = useState(0);
    const [imSize, setImSize] = useState(0);
    const [nameSize, setNameSize] = useState(0);
    const [descOpacity, setDescOpacity] = useState(0);
    const [frameOpacity, setFrameOpacity] = useState(0);
    
    const styles = {
        frame: {
            opacity: frameOpacity,
            alignItems: 'center',
            justifyContent: 'center',
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
            flexDirection: 'row',
            flex: 1,
        },
        hello: {
            color: 'red',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: hiSize,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        i: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: imSize,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        name: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: nameSize,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        desc: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 20,
            opacity: descOpacity,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        }
    }

    const displayDesc = () => {
        setDescOpacity(1);
    }

    const displayName = () => {
        setTimeout(() => {
            displayDesc();
        },1500);
        setNameSize(50);
        setImSize(45);
    }

    const displayIm = () => {
        setTimeout(() => {
            displayName();
        },1500);
        setImSize(60);
        setHiSize(45);
    }

    const displayHi = () => {
        setTimeout(() => {
            displayIm();
        },1500);
        setHiSize(60);
    }

    const animateBio = () => {
        setFrameOpacity(1);
        displayHi();
    }

    useEffect(() => {
        animateBio();
    },[])

    return(
        <div style={styles.frame}>
            <div style={{position: 'absolute', left: '15%', top: '25%'}}>
                <text style={styles.hello}>Hi</text>
                <text style={styles.i}>, I'm</text>
            </div>
            <div style={{position: 'absolute', left: '15%', top: '35%'}}><text style={styles.name}>{name}</text></div>
            <div style={{position: 'absolute', left: '15%', top: '55%', width: '70%'}}><text style={styles.desc}>{desc}</text></div>
        </div>
    )
}

export default Bio;