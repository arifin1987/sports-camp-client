import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const[loading,setLoading]= useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleAuthProvider);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            if(currentUser){
                axios.post('https://sports-camp-server-eight.vercel.app/jwt',{email:currentUser.email})
                .then(data=>{
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            
        })
        return()=>{
             unsubscribe();
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;