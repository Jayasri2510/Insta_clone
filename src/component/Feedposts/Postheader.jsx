import { Box, Flex, Avatar, Text } from "@chakra-ui/react"


const Postheader = ({username,avatar}) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} width={"full"} my={2}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={avatar} alt="profile" size={'sm'} />
                <Flex fontSize={12} fontWeight={'bold'} gap={'2'}>
                    {username}
                    <Box color={'gray.500'}> .1w </Box>
                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{ color: 'white' }} transition={"0.2s ease-in-out"}>
                    Unfollow
                </Text>
            </Box>
        </Flex>
    );
};

export default Postheader
