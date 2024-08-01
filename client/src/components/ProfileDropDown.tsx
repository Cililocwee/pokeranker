import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

interface ProfileDropDownProps {
  onSignOut: () => void;
}

export default function ProfileDropDown({ onSignOut }: ProfileDropDownProps) {
  return (
    <Menu>
      <MenuButton
        backgroundColor={"transparent"}
        shadow={"md"}
        borderRadius={"full"}
      >
        <Avatar
          size={"lg"}
          src="../assets/0.png"
          name="Dev"
          border={"1px solid lightgray"}
        />
      </MenuButton>
      <MenuList fontSize={"lg"}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
}
