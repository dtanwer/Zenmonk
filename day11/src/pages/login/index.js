import { useState, useEffect } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setLogin } from "../../features/userSlice";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import './index.css';
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";
import google from '../../icons/google.png';
import { userPresent } from "../../utils/userPresent";
import { updateOnline } from "../../utils/updateOnline";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [users,setUsers]=useState([]);
    const usersCollectionRef = collection(db, "users");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const createUser = async (data,UserId,name,online=false) => {
        try {
            const res = await addDoc(usersCollectionRef, { email: data.email, UserId,name,online,rooms:{dummy:1}});
            // console.log('this',res);
        } catch (error) {
            console.log(error);
        }
    };
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            // console.log(res._tokenResponse)
            // console.log(res);
            const filterUser=userPresent(users, res._tokenResponse.email);
            const UserId=Date.now();
            if (filterUser.length === 0) {
                createUser(res._tokenResponse,UserId,res._tokenResponse.firstName,true);
                dispatch(setLogin({email:res._tokenResponse.email,UserId,name:res._tokenResponse.firstName}));
            }
            else {
                // console.log(filterUser);
                updateOnline(filterUser[0].id,true);
                dispatch(setLogin({...filterUser[0],online:true}));
            }
            navigate('/message');
        } catch (err) {
            console.error(err);
        }
    };
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            // console.log(res)
            const UserId=Date.now();
            const filterUser=userPresent(users, res._tokenResponse.email);
            // console.log(filterUser.length);
            if (userPresent(users, res._tokenResponse.email).length === 0) {
                createUser(res._tokenResponse,UserId,true);
            }
            else{
                updateOnline(filterUser[0].id,true);
                dispatch(setLogin({...filterUser[0],online:true}));
            }
            navigate('/message');
        } catch (err) {
            console.error(err);
        }
    };

   
    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getDocs(usersCollectionRef);
                const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                users = setUsers([...res]);
            }
            catch (error) {
                console.log(error)
            }
        };
        getUsers();
        // console.log(users)
        // console.log(userPresent(users,'tanwer644d@gmail.com'))
    },[]);


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
                                <input className="input" placeholder=" Email.." onChange={(e) => setEmail(e.target.value)} required />
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