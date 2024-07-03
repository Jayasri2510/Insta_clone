import { Input ,Button} from "@chakra-ui/react"
import { useState } from "react"

const login = () => {
    const [input,setInput] =useState({
        email:'',
        password:'',
      
     })
    
   return <>
   <Input 
        variant='filled' placeholder='Email' fontSize={14} type="email"
         value={input.email}
         size={'sm'}
         onChange={(e)=>setInput({...input,email:e.target.value})}
        />
         <Input 
        variant='filled' placeholder='Password' fontSize={14} type="Password"
         value={input.password}
         size={'sm'}
        onChange={(e)=>setInput({...input,password:e.target.value})}
        />
        <Button width={'full'} colorScheme="blue" size={'sm'} fontSize={14} >Log in</Button>
   </>
  
}

export default login
