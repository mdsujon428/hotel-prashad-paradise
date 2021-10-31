import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const location =useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'
    const { logInUsingGoogle } = useAuth()
    const google = <FontAwesomeIcon style={{ color: 'white', fontSize: '22px' }} icon={faGoogle}> </FontAwesomeIcon>

    const signInWithGoogle = (e) => {
        logInUsingGoogle()
        .then(result=>{
            history.push(redirect_url)
        })
        .then(error=>{
            // console.log(error.message)
        })
        e.preventDefault();
    }

    return (
        <div className='mt-5 d-flex justify-content-center align-item-center'>
            <form className='w-25'>
                <button onClick={signInWithGoogle} type="submit" className="btn btn-danger form-control fs-5">{google} Google+</button>
            </form>
        </div>
    );
};

export default Login;