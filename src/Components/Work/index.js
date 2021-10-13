import React from 'react';
import { useSelector } from 'react-redux';
import { getJobs, getLastJob } from '../../Helper/jobs';
import Cs from './Cs';
import Freelance from './freelance.png';
import Walletifai from './walletifai.svg';


const Work = () => {

    const LongText = 'This is one long long long long long long long long long long long long long long long long long long long long long long long long long text';

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
            justifyContent: 'center',
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
            marginTop: '-10%',
        },
        workImageContainer: {
            height: 50,
            width: 50,
            marginRight: '3%',
            marginBottom: '8.5%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        workImage: {
            height: '100%',
            width: '100%',
        },
        workNameContainer: {
            width: '100%',
        },
        workName: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 20,
        },
        workTitleContainer: {
            width: '80%',
            height: '100%',
            marginBottom: '10%',
        },
        workTitle:{
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 15,
        },
        workDescContainer: {

        },
        workDesc: {

        },
        bottomDotContainer: {
            width: '100%',
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '1%',
            marginTop: '6%',
        },
        bottomDot: {
            height: 10,
            width: 10,
            background: '#D3D3D3',
            borderRadius: 50,
        },
        lastDot: {
            height: 15,
            width: 15,
            background: 'red',
            borderRadius: 50,
        },
        line: {
            width: '95%',
            height: '1%',
            background: 'white',
            marginLeft: '2%',
        }
    }

    return (
        <div style={styles.frame}>
            <div style={styles.centeredContainer}>
                {allJobs.map((job, index) => {
                    return(
                       <div style={styles.workCell}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div style={styles.workImageContainer}>
                                    {index === 0 ? (<div style={{background: '#696969', height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 2}}><text style={{color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold', marginLeft: '5%', marginTop: '5%'}}>C's</text></div>) : 
                                    <img style={styles.workImage} src={index === 0 ? null : index === 1 ? Freelance : Walletifai} alt={'Work'} />}
                                </div>
                                <div style={{height: '100%', width: '100%'}}>
                                    <div style={styles.workNameContainer}><text style={styles.workName}>{job.name.replace('and Deli', '')}</text></div>
                                    <div style={styles.workTitleContainer}><text style={styles.workTitle}>{job.title}</text></div>
                                </div>
                            </div>
                            <div style={{width: '100%', height: '80%',}}>
                                <text style={{color: 'white'}}>{job.responsibility}</text>
                            </div>
                            <div style={styles.bottomDotContainer}>
                                <div style={index <= allJobs.length - 2 ? styles.bottomDot : styles.lastDot }/>
                                {index <= allJobs.length - 2 ? <div style={styles.line}/> : null}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work;