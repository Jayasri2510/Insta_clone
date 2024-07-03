import { Container, Flex, VStack,SkeletonCircle, Skeleton, Box,Stack } from "@chakra-ui/react"
import Feedpost from './Feedpost'
import { useEffect, useState } from "react"

const Feedposts = () => {
  const [isloading,setIsloading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setIsloading(false)
    },2000)
  },[])
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
    {isloading && [0,1,2,3].map((_,idx)=>(
      <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
        <Flex gap={2}>
        <SkeletonCircle size='10' />
        <VStack key={idx} gap={4} alignItems={'flex-start'} >
        <Stack>
        <Skeleton height='10px' width='200px'/>
       <Skeleton height='10px' width='20'/>
   </Stack>
        </VStack>
        </Flex>
        <Skeleton w={'full'}>
          <Box h={'500px'}>contents wrapped</Box>
        </Skeleton>
      </VStack>
    ))}
    {!isloading && (
      <>
     <Feedpost img='public/img1.png' username='Jayasri' avatar='public/img1.png'/>
    <Feedpost img='public/img2.png' username='Valar' avatar='public/img2.png'/>
    <Feedpost img='public/img3.png' username='Pooja' avatar='public/img3.png'/>
    <Feedpost img='public/img4.png' username='Shiny' avatar='public/img4.png'/>
      </>
    )}
   
    
    
   </Container>
  )
}

export default Feedposts
