import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AuthButtons from "./authentication/AuthButtons";

interface UserInterfaceProps {
  children: React.ReactNode;
}

export default function UserInterface({ children }: UserInterfaceProps) {
  return (
    <Box position={"absolute"} top={0} left={0} width={"100%"}>
      <HStack padding={".5em"} justifyContent={"center"}>
        <AuthButtons />
      </HStack>

      <div>{children}</div>
    </Box>
  );
}
