import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex } from "@chakra-ui/react";
import ProfileDropDown from "../ProfileDropDown";

export default function AuthButtons() {
  const { loginWithPopup, isAuthenticated, logout } = useAuth0();

  // !! TODO Implement AUTH0
  const handleLogin = () => {
    loginWithPopup();
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <Flex marginLeft={"auto"}>
      {isAuthenticated ? (
        <Button onClick={handleLogin} backgroundColor={"white"}>
          Log In
        </Button>
      ) : (
        <ProfileDropDown onSignOut={() => alert("Unimplemented")} />
      )}
    </Flex>
  );
}
