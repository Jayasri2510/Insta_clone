import { Flex,Box } from '@chakra-ui/react'
import Sidebar from '../../component/sidebar/sidebar'
import { useLocation } from 'react-router-dom'

const pageLayout = ({children}) => {
  const{pathname} =useLocation()
  return (
    <Flex>
        {/* side bar on left */}
        {pathname !=="/auth" ? (
          <Box w={{base:"70px",md:"240px"}}>
          <Sidebar/>
      </Box>
        ):null}

        {/* page content on right */}
        <Box flex={1} w={{base:"calc(100% - 70px)",md:"calc(100%-240px)"}} >
            {children}
        </Box>

    </Flex>
  )
}

export default pageLayout
