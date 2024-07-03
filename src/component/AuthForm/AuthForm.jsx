import { Box, VStack ,Icon,Image, Input, Button, Flex,Text} from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login"
import Signup from "./signup.jsx"
import GoogleAuth from "./GoogleAuth"


const AuthForm = () => {
   
    const [islogin,setIslogin]=useState(true)

   

 
 

  return (
    <>
   <Box border={"1px solid gray"} borderRadius={4} padding={5}>
     <VStack spacing={4}>
        <Image src='public/logo.png' h={24} alt='insta-logo' /> 

        {islogin ? <Login /> : <Signup/>}
        
        <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
            <Box flex={2} h={.5} bg={"gray.600"}/>
            <Text mx={2} color={'white'}>OR</Text>
            <Box flex={2} h={.5} bg={"gray.600"}/>
        </Flex>
       <GoogleAuth/>
    </VStack> 
   </Box>
    <Box border={'1px solid gray '} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2} fontSize={14}>{islogin ?"Don't have an account":'Already have an account'}</Box>
            <Box onClick={()=>setIslogin(!islogin)} color={'blue.500'} cursor={'pointer'}>{islogin?'Sign up':'Log in'}</Box>

        </Flex>
    </Box>
  </>   

  )
}

export default AuthForm
