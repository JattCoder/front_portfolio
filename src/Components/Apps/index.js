import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../Helper/projects';

const Apps = () => {

    const apps = useSelector(state => getAllProjects(state));
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