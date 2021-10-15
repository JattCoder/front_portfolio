import React, { useEffect, useState } from 'react';


const Live = () => {

    const [blink, setBlink] = useState(0);
    const [fade, setFade] = useState(1);

    const styles = {
        frame: {
            height: 20,
            width: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        live: {
            height: blink,
            width: blink,
            borderRadius: 50,
            opacity: fade,
            background: 'red',
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        }
    }

    const playLive = () => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setFade(1);
                    playLive();
                },1000)
                setBlink(0);
            },3000)
            setTimeout(() => {
                setFade(0);
            },250)
            setBlink(20);
        },2000)
    }

    useEffect(() => {
        playLive();
    },[])

    return(
        <div style={styles.frame}>
            <div style={styles.live} />
        </div>
    )
}

export default Live;