import { Avatar, Flex ,Text} from "@chakra-ui/react"


const Comment = ({createdAt,usename,text,profilepic}) => {
  return (
    <Flex>
        <Avatar src={profilepic} name={usename} size={'sm'}/>
        <Flex direction={'column'}>
            <Flex gap={2}>
                <Text fontWeight={'bold'} fontSize={12}>
                   {usename}
                </Text>
                <Text fontSize={14}>
                   {text}
                </Text>
            </Flex>
            <Text fontWeight={'bold'} fontSize={12} color={'gray'}>
                   {createdAt}
                </Text>
        </Flex>
    </Flex>
  )
}

export default Comment
