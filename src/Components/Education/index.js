import React from 'react';
import { useSelector } from 'react-redux';
import { getAllSchool } from '../../Helper/study';
import ASU from '../Schools/asu.png';
import CSU from '../Schools/csu.png';
import Duke from '../Schools/duke.png';
import Flatiron from '../Schools/flatiron.png';
import Michigan from '../Schools/michigan.png';
import San from '../Schools/san.png';

const Education = () => {

    const schools = useSelector((state) => getAllSchool(state));

    const styles = {
        frame: {
            height: '60%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'scroll',
            marginTop: '-5%',
            background: "linear-gradient(black, black, rgba(0,0,0,0), black, black)",
        },
        schoolListContainer: {
            height: '100%',
        },
        educationCell: {
            marginBottom: '2%'
        },
        schoolTopContainer: {
            width: '100%',
            display: 'flex'
        },
        schoolBottomContainer: {
            width: '100%',
            marginTop: '1.4%',
        },
        schoolName: {
            color: 'white',
            marginTop: '1%',
            marginLeft: '1.2%',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 20
        },
        schoolImage: {
            height: 50,
            width: 50,
            borderRadius: 10
        },
        schoolDesc: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: 20,
        }
    }

    //{id: 1, name: 'Cleveland State University', icon: '../Schools/csu.png', description: 'CS Courses: C, Java, Data Structures and Algorithms and JavaScript'}

    const assignImage = (schoolImg) => {
        if(schoolImg.includes('asu')) return ASU;
        else if(schoolImg.includes('csu')) return CSU;
        else if(schoolImg.includes('duke')) return Duke;
        else if(schoolImg.includes('flatiron')) return Flatiron;
        else if(schoolImg.includes('michigan')) return Michigan;
        else if(schoolImg.includes('san')) return San;
    }

    console.log('School: ',schools[0])

    const renderSchool = (school, index) => {
        return (
            <li key={school.id} style={{height: '30%', width: '100%', overflowY: 'scroll',}}>
                <div style={styles.educationCell}>
                    <div style={styles.schoolTopContainer}>
                        <img style={styles.schoolImage} src={assignImage(school.icon)} alt={'School'} />
                        <text style={styles.schoolName}>{school.name}</text>
                    </div>
                    <div style={styles.schoolBottomContainer}>
                        <text style={styles.schoolDesc}>{school.description}</text>
                    </div>
                </div>
            </li>
        )
    }

    return (
        <div style={styles.frame}>
            <ul style={styles.schoolListContainer}>
                {schools.map((school, index) => {
                    return renderSchool(school, index)
                })}
            </ul>
        </div>
    )
}

export default Education;