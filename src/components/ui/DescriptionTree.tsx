import { styled } from "../../stitches.config";

const StyledDescriptionTree = styled("p", {
  color: "#303031",
  fontFamily: "'Proxima Nova', sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  letterSpacing: "-0.36px",
  marginBottom: "32px",
  "@bp2": {
    fontSize: "16px",
    lineHeight: "24px",
  },
});

function DescriptionTree() {
  return (
    <StyledDescriptionTree>
      If you can’t wait to run a new or existing organization on Open Enterprise
      and are willing to explore and navigate the beta, we’d love to get you
      started.
    </StyledDescriptionTree>
  );
}

export default DescriptionTree;
