import { signInWithPopup,getAuth,GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication()

const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase =()=>{
    const [user,setUser] = useState({})
    const logInUsingGoogle =()=>{
       return signInWithPopup(auth,googleProvider)
        
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            //SignOut
            setUser({})
        })
        .then(error=>{
            console.log('an error happen')
        })
    }
    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return ()=> unsubscribed;
    },[])
    return{
        user,
        logInUsingGoogle,
        logOut
    }
}
export default useFirebase;