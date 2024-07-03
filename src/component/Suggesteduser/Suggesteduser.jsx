import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"


const Suggesteduser = ({followers,name,avatar}) => {
  const [followed,setFollowed]=useState(false)
  return (
   <Flex justifyContent={'space-between'} alignItems={'center'} w={'fill '}>
<Flex alignItems={'center'} gap={2}>
<Avatar src={avatar} name={name} size={'md'}/>
<VStack spacing={2} alignItems={'flex-start'}>
  <Box fontSize={12} fontWeight={'bold'}>
    {name}
  </Box>
  <Box fontSize={11} fontWeight={'bold'} color={'gray.600'}>
    {followers} followers
  </Box>
</VStack>
</Flex>
<Button fontSize={15} bg={'transparent'} p={0} ml={100} h={'max-content'} fontWeight={'medium'} color={'blue.400'} cursor={'pointer'} _hover={{color:'white'}} onClick={()=>{setFollowed(!followed)}}>
 {followed ?'Unfollow':'Follow'}
</Button>
   </Flex>
  )
}

export default Suggesteduser
