import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllMedia } from '../../Helper/socialMedia';

const SocialMediaAccounts = () => {

    const socialMedia = useSelector(state => getAllMedia(state));

    const styles = {
        frame: {
            width: '100%',
            height: '50%',
            position: 'absolute',
            bottom: 0,
        },
        linkedInFrame: {
            transform: 'rotate(270deg)',
            position: 'absolute',
            right: '-1.5%',
            bottom: '15%',
        },
        linkedInText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 25,
        },
        gitHubFrame: {
            transform: 'rotate(270deg)',
            position: 'absolute',
            right: '-1.1%',
            bottom: '45%',
        },
        gitHubText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 25,
        },
        emailFrame: {
            transform: 'rotate(90deg)',
            position: 'absolute',
            left: '-9.5%',
            bottom: '50%',
        },
        emailText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 25,
        }
    }

    console.log('Social Media: ',socialMedia);

    return(
        <div style={styles.frame}>
            <div style={styles.linkedInFrame}><text style={styles.linkedInText}>LinkedIn</text></div>
            <div style={styles.emailFrame}><text style={styles.emailText}>{socialMedia.email}</text></div>
            <div style={styles.gitHubFrame}><text style={styles.gitHubText}>GitHub</text></div>
        </div>
    )
}

export default SocialMediaAccounts;