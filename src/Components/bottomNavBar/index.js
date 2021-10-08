import React, { useEffect, useState } from 'react';

const BottomNavBar = (props) => {

    const [preSelected, setPreSelected] = useState(-1);
    const Sections = ['Apps', 'Work', 'Home', 'Education', 'Contact'];
    const styles = {
        frame: {
            height: '20%',
            width: '95%',
            position: 'absolute',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: "linear-gradient(to right, rgba(0,0,0,0), rgba(211,211,211, 0.09), rgba(0,0,0,0))",
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
            height: '20%',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '3%',
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
        <div onClick={() => props.newSelection(index)} onMouseEnter={()=>setPreSelected(index)} onMouseLeave={()=>setPreSelected(-1)} style={setItemStyle(index)}>
            <text style={setItemTextStyle(index)}>{item}</text>
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