import { Avatar, Text, Flex ,Link} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"


const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name="As a Programmer" size={'lg'} src="/public/profilepic.png">
            <Text fontSize={12} fontWeight={'bold'}>
                asaprogrammer
            </Text>
        </Avatar>
      </Flex>
      <Link to={"/auth "} as={RouterLink} color={'blue.500'} cursor={'pointer'} fontWeight={'medium'} fontSize={14} style={{textDecoration:'none'}} >Log Out
      </Link>
    </Flex>
  )
}

export default SuggestedHeader
