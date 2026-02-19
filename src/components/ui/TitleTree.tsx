import { styled } from "../../stitches.config";

const StyledTitleTree = styled("h1", {
  color: "#303031",
  fontFamily: "Bely Display",
  fontWeight: "bold",
  fontSize: "48px",
  fontStyle: "normal",
  lineHeight: "64px",
  margin: "0",
  "@bp2": {
    fontSize: "32px",
    lineHeight: "42px",
    textAlign: "center",
  },
});

function TitleTree() {
  return <StyledTitleTree>Start an Open Enterprise</StyledTitleTree>;
}

export default TitleTree;
