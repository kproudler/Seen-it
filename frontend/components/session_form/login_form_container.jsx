import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to='/signup'>Sign up instead</Link>
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);