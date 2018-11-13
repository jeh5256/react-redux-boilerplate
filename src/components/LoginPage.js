import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">React Boilerplate</h1>
            <p>A boilerplate for React</p>
            <button className="button" onClick={startLogin}>Login With Google</button>
        </div>
    </div>
);

const matchDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, matchDispatchToProps)(LoginPage);