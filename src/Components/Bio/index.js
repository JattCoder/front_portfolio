import React from 'react';
import { useSelector } from 'react-redux';
import { getProfileName } from '../../Helper/userInfo';

const Bio = (props) => {

    const data = useSelector( state => getProfileName(state));
    

    const styles = {
        frame: {
            width: '60%',
            height: '100%',
            position: 'absolute',
            right: 0
        }
    }

    return(
        <div>
            <text style={{color:'white'}}>Bio</text>
        </div>
    )
}

export default Bio;