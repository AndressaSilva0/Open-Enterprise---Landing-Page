import { useState } from "react";
import { styled } from "../../stitches.config";
import Logo from "../ui/Logo";

const StyledHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 64px",
  backgroundColor: "#ffffff",
  position: "relative",
  zIndex: 100,
  "@bp2": {
    padding: "16px 20px",
  },
});

const Nav = styled("nav", {
  display: "flex",
  gap: "32px",
  alignItems: "center",
  "@bp3": {
    gap: "16px",
  },
  "@bp2": {
    display: "none",
  },
});

const NavLink = styled("a", {
  textDecoration: "none",
  color: "#303031",
  fontFamily: "Proxima Nova, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  cursor: "pointer",
  "&:hover": {
    color: "#4e4e4f",
  },
});

const RequestLink = styled(NavLink, {
  color: "#ffffff",
  backgroundColor: "#359E87",
  padding: "12px 24px",
  borderRadius: "8px",
  fontWeight: 600,
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "#2d8673",
    color: "#ffffff",
  },
});

const HamburgerButton = styled("button", {
  display: "none",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "30px",
  height: "24px",
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: 0,
  zIndex: 101,
  "@bp2": {
    display: "flex",
  },
  "& span": {
    width: "30px",
    height: "3px",
    background: "#303031",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",
  },
});

const MobileMenu = styled("div", {
  display: "none",
  "@bp2": {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#ffffff",
    padding: "80px 20px",
    gap: "24px",
    zIndex: 99,
    transition: "transform 0.3s ease-in-out",
  },
  variants: {
    isOpen: {
      true: {
        transform: "translateX(0)",
      },
      false: {
        transform: "translateX(100%)",
      },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo />
      <Nav>
        <NavLink href="#">Why Open Enterprise</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Contribute</NavLink>
        <RequestLink href="#">Request early access</RequestLink>
      </Nav>

      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            transform: isOpen
              ? "rotate(45deg) translate(5px, 5px)"
              : "rotate(0)",
            background: isOpen ? "#303031" : "#303031",
          }}
        />
        <span
          style={{
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "translateX(20px)" : "translateX(0)",
          }}
        />
        <span
          style={{
            transform: isOpen
              ? "rotate(-45deg) translate(5px, -5px)"
              : "rotate(0)",
          }}
        />
      </HamburgerButton>

      <MobileMenu isOpen={isOpen}>
        <NavLink
          href="#"
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "28px", fontWeight: 700 }}
        >
          Why Open Enterprise
        </NavLink>
        <NavLink
          href="#"
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "28px", fontWeight: 700 }}
        >
          Features
        </NavLink>
        <NavLink
          href="#"
          onClick={() => setIsOpen(false)}
          style={{ fontSize: "28px", fontWeight: 700 }}
        >
          Contribute
        </NavLink>
        <RequestLink
          href="#"
          onClick={() => setIsOpen(false)}
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "20px",
            alignSelf: "flex-start",
            width: "fit-content",
          }}
        >
          Request early access
        </RequestLink>
      </MobileMenu>
    </StyledHeader>
  );
}

export default Header;
