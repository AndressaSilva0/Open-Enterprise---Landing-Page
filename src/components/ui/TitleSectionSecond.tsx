import { styled } from "../../stitches.config";

const StyledTitle = styled("h1", {
  color: "#303031",
  textAlign: "center",
  fontFamily: "'Young Serif', serif",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "64px",
  margin: "0 0 16px 0",
  "@bp2": {
    fontSize: "32px",
    lineHeight: "42px",
  },
});

function TitleSectionSecond() {
  return <StyledTitle>Help us improve Open Enterprise</StyledTitle>;
}
export default TitleSectionSecond;
