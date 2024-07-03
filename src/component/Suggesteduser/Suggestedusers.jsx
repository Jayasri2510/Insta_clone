import { Box, Flex, VStack,Text,Link  } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import Suggesteduser from "./Suggesteduser"



const Suggestedusers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
      <Box fontSize={12} fontWeight={'bold'} color={'gray.500'}>
        Suggested for you
      </Box>
      <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.500'}} cursor={'pointer'}>
        See All
      </Text>
      </Flex>
      <Suggesteduser name="Jonny_20" followers={1032} avatar='https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg'/>
      <Suggesteduser name={'Princy-Puppy__111'} followers={"1K.50"} avatar={'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg'}/>
      <Suggesteduser name={'Maran_ _@'} followers={1001} avatar={'https://wallpapercave.com/wp/wp6694391.jpg'}/>
      <Suggesteduser name={'Angle0_11'} followers={3520} avatar={'https://wallpapercave.com/wp/wp6974725.jpg '}/>
       
       <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        @2024 Built By  {''}
        <Link href="https://www.youtube.com/@asaprogrammer" target="_blank" color="blue.700" fontSize={14}>
        As a Programmer
        </Link>
       </Box>
    </VStack>
  )
}

export default Suggestedusers
