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
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red'
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

    console.log('Jobs: ',allJobs)

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>

            </div>
        </div>
    )
}

export default Work;