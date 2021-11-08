import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../Helper/projects';
import Pic from './test.jpeg';
import './styles.css';

const Apps = () => {

    const apps = [
        // {
        //     id: 1,
        //     name: 'App1',
        //     icon: '',
        //     shortDesc: 'Mobile App',
        //     description: 'This is an mobile app',
        //     images: '',
        // },
        // {
        //     id: 2,
        //     name: 'App2',
        //     icon: '',
        //     shortDesc: 'Mobile App',
        //     description: 'This is an mobile app',
        //     images: '',
        // },
        // {
        //     id: 3,
        //     name: 'Npm1',
        //     icon: '',
        //     shortDesc: 'NPM',
        //     description: 'This is an npm1 component',
        //     images: '',
        // },
        // {
        //     id: 4,
        //     name: 'Npm2',
        //     icon: '',
        //     shortDesc: 'NPM',
        //     description: 'This is an npm2 component',
        //     images: '',
        // },
    ];

    //const apps = useSelector(state => getAllProjects(state));
    const section = useRef('');
    const [selectedApp, setSelectedApp] = useState(0);
    const [typeSelected, setTypeSelected] = useState('Mobile App');
    const [cellOpacity, setCellOpacity] = useState(0);
    const styles = {
        frame: {
            height: '70%',
            width: '70%',
            display: 'flex',
            background: "linear-gradient(rgba(0,0,0,0), black",
            justifyContent: 'center',
            marginBottom: '2%',
            overflowX: 'scroll',
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
        topSwitch: {
            position: 'absolute',
            top: '10%',
            left: '5%',
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
        },
        appCellContainer: {
            height: '60%',
            width: '50%',
            backgroundColor: 'red',
            marginRight: '2%',
            borderRadius: 10,
            opacity: 1,
            boxShadow: "1px 3px 10px black",
            backgroundImage: `url(${Pic})`,
            transition: "all 0.2s ease",
            WebkitTransition: "all 0.2s ease",
            MozTransition: "all 0.2s ease",
        },
        selectedAppCellContainer: {
            height: window.innerHeight,
            width: '100%',
            marginRight: '2%',
            borderRadius: 10,
            opacity: 1,
            boxShadow: "1px 3px 10px black",
            backgroundImage: `url(${Pic})`,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        nonSelectedAppCellContainer: {
            height: '50%',
            width: '40%',
            backgroundColor: 'red',
            marginRight: '2%',
            borderRadius: 10,
            opacity: 0.3,
            backgroundImage: `url(${Pic})`,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        dividerContainer: {
            width: '0.1%',
            height: '100%',
            marginLeft: '1%',
            marginRight: '1%',
            background: "linear-gradient(black, white, red, red, black)"
        },
    }

    const appCell = (item) => {
        return (
            <div onMouseEnter={() => setSelectedApp(item.id)} onMouseLeave={() => setSelectedApp(0)} style={selectedApp === 0 ? styles.appCellContainer : selectedApp === item.id ? styles.selectedAppCellContainer : styles.nonSelectedAppCellContainer}>
                <div style={{height: '100%', width: '100%', background: 'linear-gradient(310deg, rgba(0,0,0,0), black)'}}>
                    <div style={{ paddingLeft: '5%', paddingTop: '3%'}}><text style={{color: 'rgba(255,255,255, 0.8)', fontWeight: 'bold', fontSize: 23}}>{item.name}</text></div>
                    <div style={{ paddingLeft: '4%', paddingTop: '5%'}}><text style={{color: 'rgba(255,255,255, 0.6)'}}>{item.description}</text></div>
                </div>
            </div>
        )
    }

    const noApps = () => (
        <div style={styles.noAppsLayout}><text style={styles.noAppsText}>Harmandeep's Applications will be available soon</text></div>
    )

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                {apps.length > 0 ? apps.filter(item => typeSelected === item.shortDesc).map(item => {
                    return appCell(item);
                }) : noApps()}
            </div>
            {apps.length > 0 ? (
                <div style={styles.topSwitch}>
                    <div className='submit-pointer' onClick={() => setTypeSelected('Mobile App')} style={{marginRight: '3%'}}><text style={styles.projectText}>Projects</text></div>
                    <div style={styles.dividerContainer} />
                    <div className='submit-pointer' onClick={() => setTypeSelected('NPM')} style={{marginLeft: '3%'}}><text style={styles.npmText}>NPM</text></div>
                </div>
            ) : null}
        </div>
    )
}

export default Apps;