import { styled } from "../../stitches.config";
import Icon4 from "../../assets/Icon4.png";

const FeatureInfoStyled = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "644px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "24px",
  "@bp2": {
    alignItems: "center",
    textAlign: "center",
  },
  "& h3": {
    color: "#303031",
    fontFamily: "Young Serif, serif",
    fontSize: "56px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1.1",
    margin: 0,
    letterSpacing: "-1px",
    "@bp2": {
      fontSize: "32px",
    },
  },
  "& p": {
    color: "#303031",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: "-0.2px",
    margin: 0,
    opacity: 0.9,
    "@bp2": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  "& img": {
    width: "80px",
    height: "80px",
    margin: 0,
    "@bp2": {
      width: "60px",
      height: "60px",
    },
  },
});

function FeatureInfo() {
  return (
    <FeatureInfoStyled>
      <img src={Icon4} alt="" />
      <div>
        <h3>Kickstart an organization with your co-founders</h3>
        <p>
          It’s the early days, you just had a long conversation with two friends
          about a meaningful challenge that you’re all passionate about and have
          a potential solution for. You’re ready to embark the startup journey.
        </p>
      </div>
    </FeatureInfoStyled>
  );
}
export default FeatureInfo;
