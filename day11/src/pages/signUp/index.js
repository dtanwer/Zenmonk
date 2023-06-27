import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import './index.css'
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(auth?.currentUser?.email);

    const usersCollectionRef = collection(db, "users");

    // const createUser = async (data) => {
    //     try {
    //         const res = await addDoc(usersCollectionRef, { firstName: data.firstName, photoUrl: data.photoUrl, email: data.email, id: Date.now() });
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            // createUser(res.user);
            // navigate('/message')
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="signUp">
            <div className="left">
                <h1>Deep</h1>
            </div>
            <div className="right">
                <div className="box">
                    <div className="heading">
                        <h1>Sign Up.</h1>
                        <p>Sign up to your account</p>
                    </div>
                    <div className="inputBox">
                        <form action="" onSubmit={signIn}>
                            <div className="email">
                                <input placeholder="Email.." className="input" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="password">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder=" Password.."
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="confirmPassword">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder=" Confirm Password.."
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit"> Signin</button>
                        </form>
                    </div>
                    <div className="signUpText">
                        <p>Already have an account?<span onClick={() => navigate('/')} > Login here</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};