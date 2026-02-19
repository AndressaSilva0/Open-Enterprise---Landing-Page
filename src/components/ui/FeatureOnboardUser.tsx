import { styled } from "../../stitches.config";
import Icon5 from "../../assets/Icon5.png";

const FeatureOnboardUserContainer = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "644px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "24px",
  "& h1": {
    color: "#303031",
    fontFamily: "'Young Serif', serif",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "64px",
    margin: 0,
    "@bp2": {
      fontSize: "32px",
      lineHeight: "40px",
    },
  },
  "& p": {
    color: "#303031",
    fontFamily: "'Inter', sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    letterSpacing: "-0.36px",
    "@bp2": {
      fontSize: "16px",
    },
  },
  "& img": {
    width: "80px",
    height: "80px",
    margin: "0 0 8px 0",
    "@bp2": {
      width: "60px",
      height: "60px",
    },
  },
});

function FeatureOnboardUser() {
  return (
    <FeatureOnboardUserContainer>
      <img src={Icon5} alt="Icon5" />
      <h1>Onboard users, investors and advisors as you grow</h1>
      <p>
        You’ve bootstrapped and delivered an MVP, and some investors and
        advisors are interested in having a chat with you. As an Open
        Enterprise, you can onboard them seamlessly into your digital
        organization and align them with your success.
      </p>
    </FeatureOnboardUserContainer>
  );
}

export default FeatureOnboardUser;
