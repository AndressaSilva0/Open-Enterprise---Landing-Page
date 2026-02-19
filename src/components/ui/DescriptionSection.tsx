import { styled } from "../../stitches.config";

const DescriptionSectionStyled = styled("section", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
  padding: "8px 20px 80px 20px",
  boxSizing: "border-box",
  "@bp2": {
    padding: "8px 20px 40px 20px",
  },
  "& p": {
    margin: 0,
    color: "#66645E",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px", // Fixed line-height error (was 18px)
    maxWidth: "800px",
    "@bp2": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
});

function DescriptionSection() {
  return (
    <DescriptionSectionStyled>
      <p>
        Teams and communities using Open Enterprise fundamentally unlock a
        reality of work that reimagines how people engage in economic
        opportunity, meeting the demands and expectations of a modern
        organization.
      </p>
    </DescriptionSectionStyled>
  );
}
export default DescriptionSection;
