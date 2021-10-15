import React from 'react';

const Contant = () => {

    const styles = {
        frame: {
            height: '70%',
            width: '70%',
            marginBottom: '4.4%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        topContainer: {
            height: '10%',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        contactText: {
            color: 'red',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 24,
        },
        dividerContainer: {
            width: '0.1%',
            height: '100%',
            marginLeft: '1%',
            marginRight: '1%',
            background: "linear-gradient(black, white, white, white, black)"
        },
        ownersName: {
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: 35,
        },
        bottomContainer: {
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        nameContainer: {

        },
        
    }

    return(
        <div style={styles.frame}>
            <div style={styles.topContainer}>
                <text style={styles.contactText}>CONTACT</text>
                <div style={styles.dividerContainer} />
                <text style={styles.ownersName}>HARMANDEEP</text>
            </div>
            <div style={styles.bottomContainer}>

            </div>
        </div>
    )
}

export default Contant;