
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, Button, Input, InputGroup, InputRightElement, } from "@chakra-ui/react"
import { useState } from "react"
import useSignupWithEmailPass from "../../Hooks/useSignupWithEmailPass";

const signup = () => {
    const [input,setInput] =useState({
        
        usename:'',
        fullname:'',
        email:'',
        password:'',
        
     });
     const [showPassword,setShowPassword]=useState(false)
     const {loading,error,Signup}=useSignupWithEmailPass()

  return (
    <>
    <Input 
        variant='filled' placeholder='Email' fontSize={14} type="email"
         size={'sm'}
         value={input.email}
         onChange={(e)=>setInput({...input,email:e.target.value})}
        />
        <Input 
        variant='filled' placeholder='Usename' fontSize={14} type="text"
         value={input.usename}
         size={'sm'}
         onChange={(e)=>setInput({...input,usename:e.target.value})}
        />
        <Input 
        variant='filled' placeholder='Full name' fontSize={14} type="text"
         value={input.fullname}
         size={'sm'}
         onChange={(e)=>setInput({...input,fullname:e.target.value})}
        />
        <InputGroup>
        <Input 
        variant='filled' placeholder='Password' fontSize={14} type={showPassword ?"text":'password'}
         value={input.password}
         size={'sm'}
        onChange={(e)=>setInput({...input,password:e.target.value})}
        />
        <InputRightElement h={'full'}>
          <Button variant={'ghost'} size={'sm'} onClick={()=> setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}

          </Button>
        </InputRightElement>
        </InputGroup>
        {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4} >
          {error.message}
        </Alert>
        )}

        <Button width={'full'} colorScheme="blue" size={'sm'} fontSize={14}  isLoading={loading}
        onClick={()=>signup(input)}>Sign up</Button>

    </>
  )
}

export default signup;
