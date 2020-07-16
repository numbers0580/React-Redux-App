import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {cnJokes} from '../actions/cnActions';
//import {reducer} from '../reducers/cnReducer';

const JokePage = (props) => {
    useEffect(() => {props.cnJokes();}, []);

    return (
        <div>
            <h1>Random Chuck Norris Joke</h1>
            {props.gettingJoke && <div style={{width: '100%', background: 'silver'}}>Chuck Norris will bring you a joke at his convenience.</div>}
            {props.theJoke && !props.gettingJoke && <p>{props.theJoke}</p>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        theJoke: state.theJoke,
        errorMsg: state.errorMsg,
        gettingJoke: state.gettingJoke
    };
};

export default connect(mapStateToProps, {cnJokes})(JokePage);