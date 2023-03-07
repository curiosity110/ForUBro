import { HeaderContainer, Navbar } from "./Header.styles";
import { StandardButton, LogoutButton } from "../../styles/Buttons.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>Moviezzz</h1>
      </div>

      <Navbar>
        <StandardButton background="green">Login</StandardButton>
        <StandardButton size={"medium"} small background="yellow">
          Subscribe
        </StandardButton>
        <LogoutButton background="red">Logout</LogoutButton>
      </Navbar>
    </HeaderContainer>
  );
};
export default Header;
