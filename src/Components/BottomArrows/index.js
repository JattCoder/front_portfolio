import React, { useEffect, useState } from 'react';

const BottomArrows = () => {

    const [arrow1Color, setArrow1Color] = useState('black');
    const [arrow2Color, setArrow2Color] = useState('black');
    const [arrow3Color, setArrow3Color] = useState('black');

    const styles = {
        frame: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '14%',
            display: 'flex',
            justifyContent: 'center',
        },
        centeredContainer: {
            height: '100%',
            width: '12%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '7%'
        },
        smallArrow: {
            width: 40,
            height: 40,
            backgroundColor: arrow1Color,
            position:'absolute',
            transform: 'rotate(45deg)',
            top: -4,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        mediumArrow: {
            width: 45,
            height: 45,
            backgroundColor: arrow2Color,
            position:'absolute',
            transform: 'rotate(45deg)',
            top: -2,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        largeArrow: {
            width: 50,
            height: 50,
            backgroundColor: arrow3Color,
            position:'absolute',
            transform: 'rotate(45deg)',
            top: 0,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        block: {
            width: 35,
            height: 35,
            position:'absolute',
            transform: 'rotate(45deg)',
            top: -6,
            backgroundColor: 'black',
        }
    }

    const animateArrows = () => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setArrow3Color('black');
                    waitBeforeAnimate();
                },300);
                setArrow3Color('rgba(211,211,211,0.4)');
                setArrow2Color('black');
            },300);
            setArrow2Color('rgba(211,211,211,0.3)');
            setArrow1Color('black');
        },300);
        setArrow1Color('rgba(211,211,211,0.2)');
    };

    const waitBeforeAnimate = () => {
        setTimeout(() => {
            animateArrows()
        },3000)
    }

    useEffect(() => {
        setTimeout(() => {
            waitBeforeAnimate();
        },7000)
    },[])

    return(
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                <div style={styles.largeArrow}/>
                <div style={styles.mediumArrow}/>
                <div style={styles.smallArrow}/>
                <div style={styles.block}/>
            </div>
        </div>
    )
}

export default BottomArrows;