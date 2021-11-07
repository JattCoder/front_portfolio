import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllMedia } from '../../Helper/socialMedia';
import { text, width, height } from '../../Helper/responsive';
import './styles.css';

const SocialMediaAccounts = () => {

    const socialMedia = useSelector(state => getAllMedia(state));
    const [animateEmail, setAnimateEmail] = useState(height(-10.5));
    const [animateGutHub, setAnimateGitHub] = useState(height(-10));
    const [animateLinkedIn, setAnimatedLinkedIn] = useState(height(-10.5));
    const [handleEmailStyles, setHandleEmailStyles] = useState({
        weight: 'normal',
        size: text(2.4),
    });
    const [handleLinkedInStyles, setHandleLinkedInStyles] = useState({
        weight: 'normal',
        size: text(2.4),
    });
    const [handleGitHubStyles, setHandleGitHubStyles] = useState({
        weight: 'normal',
        size: text(2.4),
    });

    const styles = {
        frame: {
            width: width(100),
            height: height(50),
            position: 'absolute',
            bottom: 0,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        linkedInFrame: {
            transform: 'rotate(270deg)',
            position: 'absolute',
            right: width(-1.5),
            bottom: animateLinkedIn,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
            height: '7%'
        },
        linkedInText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: handleLinkedInStyles.size,
            fontWeight: handleLinkedInStyles.weight,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        },
        gitHubFrame: {
            transform: 'rotate(270deg)',
            position: 'absolute',
            right: animateGutHub,
            bottom: '45%',
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            height: '7%'
        },
        gitHubText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: handleGitHubStyles.size,
            fontWeight: handleGitHubStyles.weight,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        },
        emailFrame: {
            transform: 'rotate(90deg)',
            position: 'absolute',
            left: width(-9.6),
            bottom: animateEmail,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
            height: '7%',
        },
        emailText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: handleEmailStyles.size,
            fontWeight: handleEmailStyles.weight,
            transition: "all 1s ease",
            WebkitTransition: "all 1s ease",
            MozTransition: "all 1s ease",
        }
    }

    const mouseEntered = (profile) => {
        if (profile === 'LinkedIn'){
            setHandleLinkedInStyles({
                weight: 'bold',
                size: text(3.2),
            });
        } else if (profile === 'Email') {
            setHandleEmailStyles({
                weight: 'bold',
                size: text(3.2),
            });
        } else {
            setHandleGitHubStyles({
                weight: 'bold',
                size: text(3.2),
            })
        }
    }

    const mouseLeft = (profile) => {
        if (profile === 'LinkedIn'){
            setHandleLinkedInStyles({
                weight: 'normal',
                size: text(2.4),
            });
        } else if (profile === 'Email') {
            setHandleEmailStyles({
                weight: 'normal',
                size: text(2.4),
            });
        } else {
            setHandleGitHubStyles({
                weight: 'normal',
                size: text(2.4),
            })
        }
    }

    const animateProfiles = () => {
        setAnimateEmail(height(24));
        setAnimateGitHub(width(-1.1));
        setAnimatedLinkedIn(height(8));
    }

    const updateSizes = () => {
        console.log('Screen Resized: ')
    }

    useEffect(() => {
        animateProfiles();
        window.addEventListener('resize', updateSizes)
    },[])

    return(
        <div style={styles.frame}>
            <div class='links' onClick={() => window.open(socialMedia.linkedin)} onMouseEnter={() => mouseEntered('LinkedIn')} onMouseLeave={() => mouseLeft('LinkedIn')} style={styles.linkedInFrame}><text style={styles.linkedInText}>LinkedIn</text></div>
            <div class='links' onMouseEnter={() => mouseEntered('Email')} onMouseLeave={() => mouseLeft('Email')} style={styles.emailFrame}><text style={styles.emailText}>{socialMedia.email}</text></div>
            <div class='links' onClick={() => window.open(socialMedia.github)} onMouseEnter={() => mouseEntered('GitHub')} onMouseLeave={() => mouseLeft('GitHub')} style={styles.gitHubFrame}><text style={styles.gitHubText}>GitHub</text></div>
        </div>
    )
}

export default SocialMediaAccounts;