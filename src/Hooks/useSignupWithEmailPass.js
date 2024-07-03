import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/firebase";
import { doc,setDoc } from 'firebase/firestore';


const useSignupWithEmailPass = () => {
  const [
    createUserWithEmailAndPassword,
     
    loading,
    error,
  
  ] = useCreateUserWithEmailAndPassword(auth);

 const Signup=async(input)=>{
    if (!input.email || !input.password || !input.username || input.fullname ){
      console.log('Please fill the fields');
      return
    }
    try{
      const newUser= await useCreateUserWithEmailAndPassword(input.email,input.password)
      if (!newUser && error){
        console.log(error);
        return
      }
      if (newUser){
        const userDoc ={
          uid :newUser.user.uid,
          email :input.email,
          username :input.username,
          fullname :input.fullname,
          bio :'',
          profilePic :'',
          follower :[],
          following :[],
          posts :[],
          createdAt :Date.now()
        }
        await setDoc(doc(firestore, "Users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info",JSON.stringify(userDoc))
        loginUser(userDoc);

      }
    }
      catch(error){
        console.log(error);
      }
    }
  

  return (
   {loading,error,Signup}
  )
}

export default useSignupWithEmailPass;
