import { Flex,Text,Image } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <Image src="public/google.png" w={5} alt="google logo"/>
            <Text mx={3} color={"blue.500"}>
                Log in with google
            </Text>
        </Flex>
  )
}

export default GoogleAuth
