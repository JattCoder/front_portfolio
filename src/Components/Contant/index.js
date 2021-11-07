import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitReview } from '../../actions/submitReview';
import { text } from '../../Helper/responsive';
import './styles.css';

const Contant = () => {

    const [submitTextColor, setTryAgainTextColor] = useState('white');
    const [submitBackgroundColor, setTryAgainBackgroundColor] = useState('black');
    const [submitOpacity, setTryAgainOpacity] = useState(1);
    const [submitButtonText, setSubmitText] = useState('SUBMIT');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        email: '',
        details: '',
    });

    const styles = {
        frame: {
            height: '78%',
            width: '70%',
            marginBottom: '3%',
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
            fontSize: text(2.8),
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
            fontSize: text(4.2),
        },
        bottomContainer: {
            width: '100%',
            height: '80%',
        },
        formContainer: {
            height: '100%',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        nameContainer: {
            width: '40%',
            height: '20%',
            marginTop: '7%',
            marginLeft: '15%',
        },
        nameTitleContainer: {},
        nameTitleTextContainer: {
            color: 'white',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            fontSize: text(2.6)
        },
        nameInputContainer: {
            width: '100%',
            height: '68%',
        },
        nameInput: {
            width: '97.5%',
            height: '80%',
            marginTop: '1.4%',
            background: '#222222',
            color: 'white',
            fontFamily: 'montserrat',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: errors.includes('name') ? 'red' : '#878787',
            paddingLeft: '4%',
            paddingRight: '4%',
            fontSize: text(2),
            outline: 'none'
        },
        emailContainer: {
            width: '40%',
            height: '20%',
            marginTop: '4%',
            marginLeft: '15%',
        },
        emailTitleContainer: {},
        emailTitleTextContainer: {
            color: 'white',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            fontSize: text(2.6)
        },
        emailInputContainer: {
            width: '100%',
            height: '68%',
        },
        emailInput: {
            width: '97.5%',
            height: '80%',
            marginTop: '1.4%',
            background: '#222222',
            color: 'white',
            fontFamily: 'montserrat',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: errors.includes('email') ? 'red' : '#878787',
            paddingLeft: '4%',
            paddingRight: '4%',
            fontSize: text(2),
            outline: 'none'
        },
        detailsContainer: {
            width: '40%',
            height: '20%',
            marginTop: '4%',
            marginLeft: '15%',
            position: 'absolute',
            right: '10%',
            top: '14%',
        },
        detailsTitleContainer: {},
        detailsTitleTextContainer: {
            color: 'white',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            fontSize: text(2.6)
        },
        detailsInputContainer: {
            width: '90%',
            height: '150%',
            marginTop: '-0.6%',
        },
        detailsInput: {
            width: '87.5%',
            height: '60%',
            marginTop: '1.4%',
            background: '#222222',
            color: 'white',
            fontFamily: 'montserrat',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: errors.includes('details') ? 'red' : '#878787',
            padding: '4%',
            fontSize: text(2),
            outline: 'none',
            resize: 'none',
        },
        submitButton: {
            width: '13%',
            height: '35%',
            border: '1px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: submitOpacity,
            backgroundColor: submitBackgroundColor,
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease"
        },
        submitButtonColor: {
            color: submitTextColor,
            fontFamily: 'Montserrat',
            textAlign: 'center',
            fontSize: text(1.8),
            transition: "all 0.7s ease",
            WebkitTransition: "all 0.7s ease",
            MozTransition: "all 0.7s ease",
        }
    }

    const onMouseHoverIn = () => {
        setTryAgainBackgroundColor('white');
        setTryAgainTextColor('black');
    }

    const onMouseHoverOut = () => {
        setTryAgainBackgroundColor('rgba(0,0,0,0)');
        setTryAgainTextColor('white');
    }

    const checkErrors = () => {
        const errors = [];
        if (form.name.trim().length === 0) {
            errors.push('name');
        }
        if (form.email.trim().length === 0 || !form.email.includes('@')) {
            errors.push('email');
        }
        if (form.details.trim().length === 0) {
            errors.push('details');
        }
        setErrors(errors);
        return errors;
    }

    const onPress = async () => {
        setSubmitText('SUBMITTING');
        if (!loading) {
            console.log('Submit Request')
            setLoading(true);
            const errors = checkErrors();
            if (errors.length > 0) {
                setLoading(false);
                setSubmitText('SUBMIT');
                return;
            }
            try {
                await dispatch(submitReview(JSON.stringify(form)));
                setLoading(false);
                setTimeout(() => setSubmitText('SUBMIT'),5000);
                setSubmitText('THANK YOU');
                setForm({name: '', email: '', details: ''});
            } catch (err) {
                setLoading(false);
                setTimeout(() => setSubmitText('SUBMIT'),5000);
                setSubmitText('FAILED');
                console.log('Back-End Error: ',JSON.parse(err.message));
            }
        }
    }

    const handleInputs = (input, type) => {
        switch(type){
            case 'name':
                setForm({...form, name: input});
                if (errors.includes('name') && input.trim().length > 0) {
                    errors.splice(errors.indexOf('name'), 1);
                }
                break;
            case 'email':
                setForm({...form, email: input});
                if (errors.includes('email') && input.trim().length > 0) {
                    errors.splice(errors.indexOf('email'), 1);
                }
                break;
            case 'details':
                setForm({...form, details: input});
                if (errors.includes('details') && input.trim().length > 0) {
                    errors.splice(errors.indexOf('details'), 1);
                }
                break;
        }
    }

    return(
        <div style={styles.frame}>
            <div style={styles.topContainer}>
                <text style={styles.contactText}>CONTACT</text>
                <div style={styles.dividerContainer} />
                <text style={styles.ownersName}>HARMANDEEP</text>
            </div>
            <div style={styles.bottomContainer}>
                <div style={styles.formContainer}>
                    <div style={styles.nameContainer}>
                        <div style={styles.nameTitleContainer}>
                            <text style={styles.nameTitleTextContainer}>Name</text>
                        </div>
                        <div style={styles.nameInputContainer}>
                            <input type="text" placeholder='Name' onChange={(d) => handleInputs(d.target.value, 'name')} value={form.name} disabled = {loading ? "disabled" : ""} style={styles.nameInput} />
                        </div>
                    </div>
                    <div style={styles.emailContainer}>
                        <div style={styles.emailTitleContainer}>
                            <text style={styles.emailTitleTextContainer}>Email</text>
                        </div>
                        <div style={styles.emailInputContainer}>
                            <input type="text" placeholder='Email' onChange={(d) => handleInputs(d.target.value, 'email')} value={form.email} disabled = {loading ? "disabled" : ""} style={styles.emailInput} />
                        </div>
                    </div>
                    <div style={styles.detailsContainer}>
                        <div style={styles.detailsTitleContainer}>
                            <text style={styles.detailsTitleTextContainer}>Additional Details</text>
                        </div>
                        <div style={styles.detailsInputContainer}>
                            <textarea type="text" placeholder='Details' onChange={(d) => handleInputs(d.target.value, 'details')} value={form.details} disabled = {loading ? "disabled" : ""} style={styles.detailsInput} />
                        </div>
                    </div>
                    <div style={{height: '20%', width: '70%', position: 'absolute', bottom: '19.6%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div class='submit-pointer' onMouseEnter={onMouseHoverIn} onMouseLeave={onMouseHoverOut} onClick={() => onPress()} disabled = {loading ? "disabled" : ""} style={styles.submitButton}>
                            <text style={styles.submitButtonColor}>{submitButtonText}</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contant;