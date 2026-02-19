import { styled } from "../../stitches.config";
import LogoImage from "../../assets/Logo.png";

const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const LogoImg = styled("img", {
  width: "auto",
  height: "32px",
});

const LogoText = styled("span", {
  color: "#303031",
  fontFamily: "Proxima Nova",
  fontSize: "24px",
  fontWeight: 700,
  "@bp2": {
    fontSize: "18px",
  },
});

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={LogoImage} alt="Open Enterprise Logo" />
      <LogoText>Open Enterprise</LogoText>
    </LogoContainer>
  );
}

export default Logo;
