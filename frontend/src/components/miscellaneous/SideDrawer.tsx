import {
  Box,
  Button,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  BellIcon,
  ChevronDownIcon,
  CloseIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.50"
      w="100%"
      p="5px 10px"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="md"
    >
      <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
        <InputGroup w="250px" display={{ base: "none", md: "flex" }}>
          <Input
            placeholder="Search User"
            value={search}
            onChange={handleSearchChange}
            borderRadius="md"
            focusBorderColor="teal.400"
          />
          {search && (
            <InputRightElement>
              <Button size="sm" variant="ghost" onClick={clearSearch}>
                <CloseIcon w={3} h={3} />
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="Work sans" color="teal.500">
        Chatify
      </Text>
      <Box display="flex" alignItems="center">
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            p={1}
            _hover={{ bg: "teal.100" }}
          >
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          <MenuList>
            {/* Add notifications here */}
            <MenuItem>No new notifications</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: "teal.100" }}
          >
            <Avatar
              size="sm"
              cursor="pointer"
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}

export default SideDrawer;
