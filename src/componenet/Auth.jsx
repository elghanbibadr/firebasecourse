import { useState } from "react"
import {auth} from "../config/firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"




const Auth = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const signIn=async()=>{
   await createUserWithEmailAndPassword(auth,email,password)
  }
  return (
    <div>
        <input placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signIn}>sign in </button>
    </div>
  )
}

export default Auth