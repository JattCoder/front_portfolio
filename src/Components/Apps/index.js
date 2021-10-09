import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../Helper/projects';

const Apps = () => {

    /*
        t.string "name"
        t.string "icon"
        t.string "shortDesc"
        t.text "description"
        t.string "images"
    */

    const apps = [
        {
            id: 1,
            name: 'App1',
            icon: '',
            shortDesc: 'Mobile App',
            description: 'This is an mobile app',
            images: '',
        },
        {
            id: 2,
            name: 'App2',
            icon: '',
            shortDesc: 'Mobile App',
            description: 'This is an mobile app',
            images: '',
        },
        {
            id: 3,
            name: 'Npm1',
            icon: '',
            shortDesc: 'NPM',
            description: 'This is an npm1 component',
            images: '',
        },
        {
            id: 4,
            name: 'Npm2',
            icon: '',
            shortDesc: 'NPM',
            description: 'This is an npm2 component',
            images: '',
        },
    ];

    //const apps = useSelector(state => getAllProjects(state));
    const section = useRef('');
    const [selectedApp, setSelectedApp] = useState(-1);
    const styles = {
        frame: {
            height: '100%',
            width: '100%',
            display: 'flex',
            background: "linear-gradient(rgba(0,0,0,0), black",
            justifyContent: 'center',
        },
        centeredContainer: {
            height: '80%',
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        noAppsText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            width: '25%',
            textAlign: 'center',
        },
        noAppsLayout: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        appBox: {
            height: 330,
            width: 180,
            marginTop: '10%',
            background: "linear-gradient(#D3D3D3,#808080)",
            marginLeft: '.5%',
            marginRight: '.5%',
            boxShadow: "1px 3px 10px #818589",
            borderRadius: 4,
            alignItems: 'center',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        selectedApp: {
            height: 370,
            width: 250,
            display: 'flex',
            justifyContent: 'center',
            background: "linear-gradient(#D3D3D3,#D3D3D3)",
            marginLeft: '.5%',
            marginRight: '.5%',
            boxShadow: "1px 3px 70px #818589",
            borderRadius: 4,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        nonSelectedApp: {
            height: 270,
            width: 150,
            marginTop: '5%',
            alignItems: 'center',
            background: "linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7))",
            marginLeft: '.5%',
            marginRight: '.5%',
            boxShadow: "1px 3px 10px black",
            borderRadius: 4,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        breakerFrame: {
            height: '30%',
            width: '3%',
            marginTop: '-17%',
            marginLeft: '3%',
            opacity: selectedApp !== -1 ? 0 : 1,
            transition: "all 0.2s ease",
            WebkitTransition: "all 0.2s ease",
            MozTransition: "all 0.2s ease",
        }
    }

    const boxStyles = (index) => {
        if(selectedApp !== -1){
            if(selectedApp === index){
                return styles.selectedApp;
            }
            return styles.nonSelectedApp
        }
        return styles.appBox
    }

    const noApps = () => (
        <div style={styles.noAppsLayout}><text style={styles.noAppsText}>Harmandeep's Applications will be available soon</text></div>
    )

    const addBreaker = (app, index) => {
        section.current = app.shortDesc
        return (
            <div style={styles.breakerFrame}>
                <text style={{color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>{app.shortDesc === 'NPM' ? 'Node Packages' : 'Mobile Apps'}</text>
                {index !== 0 ? <div style={{height: '100%', width: '1%',background: "linear-gradient(white,white,white, white,rgba(255,255,255,0))", }} /> : null}
            </div>
        )
    }

    const renderApp = (app, index) => (
        <>
            {app.shortDesc !== section.current ? addBreaker(app, index) : null}
            <div onMouseOver={() => setSelectedApp(app.id)} onMouseLeave={() => setSelectedApp(-1)} style={boxStyles(app.id)}>
                <text>{app.name}</text>
            </div>
        </>
    )

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                {apps.length > 0 ? apps.map((app, index) => {
                    return renderApp(app, index)
                }) : noApps()}
            </div>
        </div>
    )
}

export default Apps;