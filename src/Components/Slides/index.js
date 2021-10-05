import React, { useEffect, useState } from 'react';
import Bio from '../Bio';

const Slides = (props) => {

    const { selection } = props;

    const styles = {
        frame: {
            height: '100%',
            width: '100%',
        }
    }

    useEffect(() => {
        
    },[selection])

    return (
        <div style={styles.frame}>
            <Bio />
        </div>
    )
}

export default Slides;