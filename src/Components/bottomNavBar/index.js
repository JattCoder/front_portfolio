import React, { useEffect, useState } from 'react';
import './styles.css';

const BottomNavBar = (props) => {

    const [frameOpacity, setFrameOpacity] = useState(0);
    const [marginBottom, setMarginBottom] = useState('-5%');
    const [optionOpacity, setOptionOpacity] = useState(0);
    const [preSelected, setPreSelected] = useState(-1);
    const Sections = ['Apps', 'Work', 'Home', 'Education', 'Contact'];
    const styles = {
        frame: {
            height: '20%',
            width: '95%',
            position: 'absolute',
            bottom: 0,
            opacity: frameOpacity,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            //boxShadow: '0px 0px 70px 5px #555555',
            background: "linear-gradient(to right, rgba(0,0,0,0), rgba(211,211,211, 0.09), rgba(0,0,0,0))",
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
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
            color: 'red',
            fontSize: 20,
            fontWeight: 'bold',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        preSelectedItem: {
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: marginBottom,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        preSelectedItemText: {
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
            marginBottom: marginBottom,
            opacity: optionOpacity,
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

    const setItemStyle = (index) => {
        if(index === preSelected && index !== props.selection) {
            return styles.preSelectedItem;
        } else if(index === props.selection){
            return styles.selectedItem;
        } else {
            return styles.nonSelectedItem;
        }
    }

    const setItemTextStyle = (index) => {
        if(index === preSelected && index !== props.selection) {
            return styles.preSelectedItemText;
        } else if(index === props.selection){
            return styles.selectedItemText;
        } else {
            return styles.nonSelectedItemText;
        }
    }

    const render = (item, index) => (
        <div class='bottom_selection' onClick={() => props.newSelection(index)} onMouseEnter={()=>setPreSelected(index)} onMouseLeave={()=>setPreSelected(-1)} style={setItemStyle(index)}>
            <text style={setItemTextStyle(index)}>{item}</text>
        </div>
    )

    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => {
                setMarginBottom('0%');
                setOptionOpacity(1);
            },1000)
            setFrameOpacity(1);
        },2000)
    },[])

    return(
        <div style={styles.frame}>
            {Sections.map((item, index) => {
                return render(item, index);
            })}
        </div>
    )
}

export default BottomNavBar;