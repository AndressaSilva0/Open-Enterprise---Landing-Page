import { styled } from "../../stitches.config";

const StyledDescription = styled("p", {
  color: "#66645E",
  fontFamily: "Inter, sans-serif",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "32px",
  width: "100%",
  maxWidth: "608px",
  margin: "0 0 40px 0",
  "@bp2": {
    fontSize: "18px",
    lineHeight: "28px",
  },
});

function Description() {
  return (
    <StyledDescription>
      Run an organization where members get rewarded for their contributions
      with fractional ownership.
    </StyledDescription>
  );
}
export default Description;
