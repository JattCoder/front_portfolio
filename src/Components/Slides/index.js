import React, { useEffect, useState } from 'react';
import Apps from '../Apps';
import Work from '../Work';
import Bio from '../Bio';
import Education from '../Education';
import Contant from '../Contant';

const Slides = (props) => {

    //['Apps', 'Work', 'Home', 'Education', 'Contact'];
    const { selection } = props;
    const [pageOpacity, setPageOpacity] = useState(1);
    const [pageSelection, setPageSelection] = useState(-1);

    const styles = {
        frame: {
            height: '100%',
            width: '100%',
            transition: "all 0.5s ease",
            WebkitTransition: "all 0.5s ease",
            MozTransition: "all 0.5s ease",
            opacity: pageOpacity
        },
        
    }

    const displayNewData = () => {
        setTimeout(() => setPageOpacity(1),500);
        setPageSelection(selection);
    }

    const hidePage = () => {
        setTimeout(() => displayNewData(), 1000)
        setPageOpacity(0);
    }

    useEffect(() => {
        hidePage();
    },[selection])

    return (
        <div style={styles.frame}>
            {pageSelection === 0 ? <Apps /> :
            pageSelection === 1 ? <Work /> :
            pageSelection === 2 ? <Bio /> :
            pageSelection === 3 ? <Education /> :
            pageSelection === 4 ? <Contant />:
            null}
        </div>
    )
}

export default Slides;