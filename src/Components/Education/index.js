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
            width: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        educationCell: {
            display: 'flex',
            marginBottom: '2%'
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

    const renderSchool = (school, index) => {
        return (
            <li key={school.id}>
                <div style={styles.educationCell}>
                    <img style={{height: 50, width: 50}} src={assignImage(school.icon)} alt={'School'} />
                    <text style={{color: 'white'}}>{school.name}</text>
                </div>
            </li>
        )
    }

    return (
        <div style={styles.frame}>
            <ul>
                {schools.map((school, index) => {
                    return renderSchool(school, index)
                })}
            </ul>
        </div>
    )
}

export default Education;