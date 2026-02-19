import { styled } from "../../stitches.config";

const TitleSectionStyled = styled("section", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
  padding: "80px 20px 0 20px",
  boxSizing: "border-box",
  "@bp2": {
    padding: "40px 20px 0 20px",
  },
  "& h2": {
    margin: 0,
    color: "#303031",
    textAlign: "center",
    fontFamily: "Young Serif, serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.2",
    maxWidth: "900px",
    "@bp2": {
      fontSize: "32px",
    },
  },
});

function TitleSection() {
  return (
    <TitleSectionStyled>
      <h2>Reimagining what it means to work</h2>
    </TitleSectionStyled>
  );
}
export default TitleSection;
