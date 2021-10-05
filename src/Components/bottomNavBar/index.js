import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BottomNavBar = () => {

    const [selection, setSelection] = useState(2);
    const Sections = ['Apps', 'Work', 'Home', 'Education', 'Contact'];
    const styles = {
        frame: {
            height: '20%',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: "linear-gradient(black, #848587);"
        },
        selectedItem: {
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '3%',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        selectedItemText: {
            fontFamily: 'Montserrat',
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        nonSelectedItem: {
            marginLeft: '5%',
            marginRight: '5%',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        nonSelectedItemText: {
            fontFamily: 'Montserrat',
            color: 'rgba(211,211,211, 1)',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        }
    }

    const render = (item, index) => (
        <div onClick={() => setSelection(index)} style={index === selection ? styles.selectedItem : styles.nonSelectedItem}>
            <text style={index === selection ? styles.selectedItemText : styles.nonSelectedItemText}>{item}</text>
        </div>
    )

    return(
        <div style={styles.frame}>
            {Sections.map((item, index) => {
                return render(item, index);
            })}
        </div>
    )
}

export default BottomNavBar;