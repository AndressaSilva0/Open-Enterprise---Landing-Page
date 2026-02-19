import { styled } from "../../stitches.config";

const StyledButtonViewMore = styled("button", {
  display: "inline-flex",
  padding: "20px 24px",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  background: "#303031",
  color: "#FFF",
  textAlign: "center",
  fontFamily: "'Proxima Nova', sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
});

function ButtonViewMore() {
  return <StyledButtonViewMore>View more</StyledButtonViewMore>;
}

export default ButtonViewMore;
