import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Home() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="lg"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" fontWeight="bold">
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" p={6} borderRadius="lg" boxShadow="lg" width="100%">
        <Tabs variant="enclosed-colored" colorScheme="teal">
          <TabList mb="1em" justifyContent="center">
            <Tab _selected={{ color: "white", bg: "teal.500" }}>Login</Tab>
            <Tab _selected={{ color: "white", bg: "teal.500" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
