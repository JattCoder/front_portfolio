import React, { useState } from 'react';
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
            name: 'App1',
            icon: '',
            shortDesc: 'Mobile App',
            description: 'This is an mobile app',
            images: '',
        },
        {
            name: 'App2',
            icon: '',
            shortDesc: 'Mobile App',
            description: 'This is an mobile app',
            images: '',
        },
        {
            name: 'Npm1',
            icon: '',
            shortDesc: 'NPM',
            description: 'This is an npm1 component',
            images: '',
        },
        {
            name: 'Npm2',
            icon: '',
            shortDesc: 'NPM',
            description: 'This is an npm2 component',
            images: '',
        },
    ];

    //const apps = useSelector(state => getAllProjects(state));
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
            height: 180,
            width: 180,
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
            height: 250,
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
            height: 150,
            width: 150,
            alignItems: 'center',
            background: "linear-gradient(#808080,#808080)",
            marginLeft: '.5%',
            marginRight: '.5%',
            boxShadow: "1px 3px 10px #818589",
            borderRadius: 4,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
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

    const renderApp = (app, index) => (
        <div onMouseOver={() => setSelectedApp(index)} onMouseLeave={() => setSelectedApp(-1)} style={boxStyles(index)}>
            <text>{app.name}</text>
        </div>
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