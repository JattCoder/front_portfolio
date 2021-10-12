import React from 'react';
import { useSelector } from 'react-redux';
import { getJobs, getLastJob } from '../../Helper/jobs';
import Cs from './Cs';
import Freelance from './freelance.png';


const Work = () => {

    const currentJob = useSelector(state => getLastJob(state));
    const allJobs = useSelector(state => getJobs(state));
    const styles = {
        frame: {
            height: '60%',
            width: '70%',
            display: 'flex',
            alignItems: 'center',
            background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0), rgba(0,0,0,1)",
        },
        centeredContainer: {
            height: '65%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        noAppsText: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            width: '30%',
            textAlign: 'center',
        },
        workCell: {
            height: '35%',
            width: '40%',
        },
        workNameContainer: {
            width: '50%',
        },
        workName: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 20,
        },
        workTitleContainer: {
            width: '80%',
            height: '50%',
        },
        workTitle:{
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 15,
        },
        bottomDotContainer: {
            width: '100%',
            height: '20%',
            display: 'flex',
            alignItems: 'center',
        },
        bottomDot: {
            height: 10,
            width: 10,
            background: 'red',
            borderRadius: 50,
        }

    }

    console.log(allJobs)

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                {allJobs.map(job => {
                    return(
                       <div style={styles.workCell}>
                            <div style={styles.workNameContainer}><text style={styles.workName}>{job.name.replace('and Deli', '')}</text></div>
                            <div style={styles.workTitleContainer}><text style={styles.workTitle}>{job.title}</text></div>
                            <div style={styles.bottomDotContainer}><div style={styles.bottomDot}/></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work;