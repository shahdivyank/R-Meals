import React, {useState} from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase"
import { getAuth } from "firebase/auth";
import Dashboard from '../Dashboard/Dashboard';


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const signIn = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                var address = result.user.email;
                var display = result.user.displayName;
                setLoggedIn(true);
               
            }).catch((error) => {
                alert(error)
            });
    }

  return (
    <div>
        {
            loggedIn ? <Dashboard/> : <button onClick={signIn}>Login</button>
        }

    </div>
  )
}

export default Home