import { styled } from "../../stitches.config";

const StyledDescription = styled("p", {
  color: "#303031",
  textAlign: "center",
  fontFamily: "'Inter', sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "26px",
  letterSpacing: "-0.36px",
  margin: "0 auto 48px auto",
  maxWidth: "900px",
  "@bp2": {
    fontSize: "16px",
    lineHeight: "24px",
    padding: "0 20px",
  },
});

function DescriptionSecond() {
  return (
    <StyledDescription>
      As an Open Enterprise ourselves, we are actively looking for new talent to
      join our mission of improving and delivering the Open Enterprise model to
      the world. Apply for open tasks and earn a stake in our success.
    </StyledDescription>
  );
}
export default DescriptionSecond;
