import { useState } from "react"
import {auth,googleProvider} from "../config/firebase-config"
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth"



const Auth = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const signIn=async()=>{
   await createUserWithEmailAndPassword(auth,email,password)
  }
  const signInWithGoogle=async()=>{
   await signInWithPopup(auth,googleProvider)
  }
  

  return (
    <div>
        <input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signIn}>sign in </button>
        <button onClick={signInWithGoogle}>sign in with google </button>
    </div>
  )
}

export default Auth