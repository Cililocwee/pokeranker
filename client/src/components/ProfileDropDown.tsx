import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface ProfileDropDownProps {
  onSignOut: () => void;
}

export default function ProfileDropDown({ onSignOut }: ProfileDropDownProps) {
  const { user } = useAuth0();

  return (
    <Menu>
      <MenuButton
        backgroundColor={"transparent"}
        shadow={"md"}
        borderRadius={"full"}
      >
        <Avatar
          size={"lg"}
          src={user?.picture}
          name="Dev"
          border={"1px solid lightgray"}
        />
      </MenuButton>
      <MenuList fontSize={"lg"}>
        <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}
