import {Box, Flex, GridItem ,Text,Image,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalContent,ModalOverlay, Avatar, Divider,VStack} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Comment from '../Comment/Comment';
import Postfooter from '../Feedposts/Postfooter'

const ProfilePost = ({img}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <GridItem  
    cursor={'pointer'}
    borderRadius={4}
    overflow={'hidden'}
    border={'1px solid '}
    borderColor={'whiteAlpha.300'}
    position={'relative'}
    aspectRatio={1/1}
    onClick={onOpen}
    >
        <Flex opacity={0} _hover={{opacity:1}} position={'absolute'} top={0} left={0} right={0} bottom={0} bg={'blackAlpha.700'} transition={'all 0.3s ease'} zIndex={1} justifyContent={'center'}> 
            <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
            <Flex>
                <AiFillHeart size={20}/>
                <Text fontWeight={'bold'} ml={2}> 
                    7
                </Text>
            </Flex>
             <Flex>
             <FaComment size={20}/>
                <Text fontWeight={'bold'} ml={2}> 
                    7
                </Text>
             </Flex>
            </Flex>
        </Flex>
        <Image src={img} alt='Profile Post' w={'100%'} h={'100%'} objectFit={'cover'}/>
         </GridItem>
            <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:'3xl',md:'5xl'}}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
           
          
                <Flex gap={4} w={{base:'90%',sm:'70%',md:'full'}} mx={'auto'}>
                    <Box borderRadius={5} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.500'} flex={1.5}>
                        <Image src={img} alt="Profile"/>
                    </Box>
                    <Flex flex={1} flexDir={'column'} px={10} display={{base:'none',md:'flex'}}>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Flex alignItems={'center'} gap={4}>
                            <Avatar src='public/profilepic.png' size={'sm'} name='As a programmer'/>
                            <Text fontWeight={'bold'} fontSize={12}>
                                asprogrammer
                            </Text></Flex>
                            <Box _hover={{color:'red.500',bg:'whiteAlpha.300'}} borderRadius={3} p={1} alignSelf={'flex-end'} >
                                <MdDelete size={20} cursor={'pointer'}/>
                            </Box>
                        </Flex>
                        <Divider my={4} bg={'grey.500'}/>
                        <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'} >
                             <Comment createdAt='1d ago' usename='Gokul' text='Dummy imagrs' profilepic='https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png'/>
                             <Comment createdAt='2d ago' usename='Jackky' text='Nice pic girl !' profilepic='https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                             <Comment createdAt='1w ago' usename='Williums' text='Good job' profilepic='https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg'/>
                        </VStack>
                        <Divider my={4} bg={'gray.800'}/>
                         <Postfooter isPropic={true}/>
                    </Flex>
                </Flex></ModalBody>
        </ModalContent>
      </Modal>

         </>
  ) 
};

export default ProfilePost;
