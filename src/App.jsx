import { Result } from "postcss"
import { useState } from "react"
import {auth,provider} from './firebase'
import { signInWithRedirect } from "firebase/auth"


function App() {
  const [user, setuser] = useState(null)

  const handleSignin= async()=>{
    try {
      const result= await signInWithRedirect(auth, provider)
      setuser(result.user)
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleSignout= async()=>{
    try {
      await signOut(auth)
      setuser(null)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
    {!user ? (
          <button
            onClick={handleSignin}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
          >
            Sign in with Google
          </button>
        ) : (
          <div className="text-center">
            <p className="mb-4">Welcome, {user.displayName}</p>
            <button
              onClick={handleSignout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full"
            >
              Sign Out
            </button>
          </div>
        )}
    </div>
   </div>
  )
}

export default App
 