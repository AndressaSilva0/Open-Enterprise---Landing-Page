import { styled } from "../../stitches.config";

const StyledTitle = styled("h1", {
  color: "#303031",
  fontFamily: "Young Serif, serif",
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.1",
  width: "100%",
  maxWidth: "608px",
  margin: "0 0 24px 0",
  "@bp2": {
    fontSize: "40px",
  },
});

function Title() {
  return <StyledTitle>A new model for open collaboration</StyledTitle>;
}
export default Title;
