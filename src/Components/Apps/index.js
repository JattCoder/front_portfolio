import React from 'react';
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
    const styles = {
        frame: {
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        centeredContainer: {
            height: '65%',
            width: '70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        noAppsText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            width: '25%',
            textAlign: 'center',
        }
    }

    const noApps = () => (
        <text style={styles.noAppsText}>Harmandeep's Applications will be available soon</text>
    )

    const renderApp = (app, index) => (
        <div></div>
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