import { Box,Image } from "@chakra-ui/react"
import Postheader from "./Postheader"
import Postfooter from "./Postfooter"



const Feedpost = ({img,username,avatar}) => {
  return <>
   <Postheader username={username} avatar={avatar}/>
  <Box my={3} borderRadius={10} overflow={'hidden'}>
    <Image src={img} alt={username} />
  </Box>
  <Postfooter username={username} />
  </>
}

export default Feedpost
