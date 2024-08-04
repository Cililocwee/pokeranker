import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex } from "@chakra-ui/react";
import ProfileDropDown from "../ProfileDropDown";

export default function AuthButtons() {
  const { loginWithPopup, isAuthenticated, logout, loginWithRedirect } =
    useAuth0();

  // !! TODO Implement AUTH0
  const handleLogin = () => {
    // loginWithRedirect();
    loginWithPopup();
  };

  const handleLogOut = () => {
    // logout({ logoutParams: { returnTo: window.location.origin } });
    logout();
  };

  return (
    <Flex marginLeft={"auto"}>
      {!isAuthenticated ? (
        <Button onClick={handleLogin}>Log In</Button>
      ) : (
        <ProfileDropDown onSignOut={handleLogOut} />
      )}
    </Flex>
  );
}
