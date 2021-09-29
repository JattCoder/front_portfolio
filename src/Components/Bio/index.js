import React, { useEffect, useState } from 'react';
import MyPic from '../myPic/me.png';

const Bio = (props) => {

    const [picOpacity, setPicOpacity] = useState(0);
    
    const styles = {
        frame: {
            position: 'absolute',
            right: '10%',
            opacity: picOpacity,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        pic: {
            height: 530,
            width: 400,
        }
    }

    const animatePic = () => {
        setPicOpacity(1);
    }

    useEffect(() => {
        animatePic();
    },[])

    return(
        <div style={styles.frame}>
            <img src={MyPic} style={styles.pic} alt={'Can not display'} />
        </div>
    )
}

export default Bio;