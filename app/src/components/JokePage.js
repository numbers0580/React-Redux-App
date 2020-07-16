import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {cnJokes} from '../actions/cnActions';
//import {reducer} from '../reducers/cnReducer';

const JokePage = (props) => {
    useEffect(() => {props.cnJokes();}, []);

    const styler = function() {
        return {
            container: {
                width: '100%',
                background: 'black',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center'
            },
            page: {
                height: '100vh',
                width: '80%',
                boxSizing: 'border-box',
                background: 'silver',
                border: '20px solid #600000',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            h1: {
                width: '50%',
                background: 'black',
                color: 'white',
                borderRadius: '50%',
                padding: '5%',
                marginTop: '5%',
                fontSize: '3rem'
            },
            loading: {
                background: '#0000CC',
                border: '4px solid #000080',
                borderRadius: '5px',
                color: '#00FF00',
                padding: '1%'
            },
            lulz: {
                width: '60%',
                height: '240px',
                background: '#FFF689',
                border: '10px solid #FFA500',
                borderRadius: '10px',
                boxShadow: '10px 10px 20px #FF7602A0',
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#A00000'
            }
        };
    };

    return (
        <div style={styler().container}>
            <div style={styler().page}>
                <h1 style={styler().h1}>Random Chuck Norris Joke</h1>
                {props.gettingJoke && <div style={styler().loading}>Chuck Norris will bring you a joke at his convenience.</div>}
                {props.theJoke && !props.gettingJoke && <div style={styler().lulz}>{props.theJoke}</div>}
            </div>
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