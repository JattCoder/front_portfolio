import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../Helper/projects';
import './styles.css';

const Apps = () => {

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
    const [typeSelected, setTypeSelected] = useState(0);
    const styles = {
        frame: {
            height: '70%',
            width: '70%',
            display: 'flex',
            background: "linear-gradient(rgba(0,0,0,0), black",
            justifyContent: 'center',
            marginBottom: '2%',
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
        },
        topSwitch: {
            position: 'absolute',
            top: '10%',
            height: '9%',
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
        },
        projectText: {
            color: typeSelected === 'Mobile App' ? 'white' : '#696969',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            width: '25%',
            textAlign: 'center',
            transition: "all 0.2s ease",
            WebkitTransition: "all 0.2s ease",
            MozTransition: "all 0.2s ease",
        },
        npmText: {
            color: typeSelected === 'NPM' ? 'white' : '#696969',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            width: '25%',
            textAlign: 'center',
            transition: "all 0.2s ease",
            WebkitTransition: "all 0.2s ease",
            MozTransition: "all 0.2s ease",
        }
    }

    const appCell = () => (
        <div>
            <text>App</text>
        </div>
    )

    const noApps = () => (
        <div style={styles.noAppsLayout}><text style={styles.noAppsText}>Harmandeep's Applications will be available soon</text></div>
    )

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                {apps.filter(item => typeSelected === item.shortDesc).map(item => {
                    return appCell(item);
                })}
            </div>
            <div style={styles.topSwitch}>
                <div class='submit-pointer' onClick={() => setTypeSelected('Mobile App')} style={{marginRight: '3%'}}><text style={styles.projectText}>Projects</text></div>
                <div class='submit-pointer' onClick={() => setTypeSelected('NPM')} style={{marginLeft: '3%'}}><text style={styles.npmText}>NPM</text></div>
            </div>
        </div>
    )
}

export default Apps;