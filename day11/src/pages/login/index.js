import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setLogin } from "../../features/userSlice";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import './index.css';
import { useNavigate } from "react-router-dom";

import google from '../../icons/google.png'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            dispatch(setLogin(res._tokenResponse));
            navigate('/home');
        } catch (err) {
            console.error(err);
        }
    };
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res)
            dispatch(setLogin(res._tokenResponse));
            navigate('/home');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className='login'>
            <div className="left">
                <h1>Deep</h1>
            </div>
            <div className="right">
                <div className="box">
                    <div className="heading">
                        <h1>Sign In.</h1>
                        <p>Sign in to your account</p>
                    </div>
                    <div className="loginWithGoogle">
                        <button onClick={signInWithGoogle}> <span className="btnText"> <img className="icon" src={google} alt="icon" /> <span>Sign in With Google</span> </span> </button>
                    </div>
                    <div className="inputBox">
                        <form onSubmit={signIn}>
                            <div className="email">
                                <input  className="input" placeholder=" Email.." onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="password">
                                <input
                                    type="password"
                                    placeholder=" Password.."
                                    className="input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit"  > Signin</button>
                        </form>
                    </div>
                    <div className="signUpText">
                        <p>Don't have an account?<span onClick={() => navigate('/signUp')} > Register here</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login