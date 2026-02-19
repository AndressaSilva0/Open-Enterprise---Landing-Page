import { styled } from "../../stitches.config";
import Icon6 from "../../assets/Icon6.png";
import EngageGraphic from "./EngageGraphic";

const SectionContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1329px",
  margin: "0 auto 120px auto",
  gap: "80px",
  "@bp2": {
    flexDirection: "column",
    gap: "40px",
    margin: "0 auto 40px auto",
    padding: "0 20px",
    textAlign: "center",
  },
});

const TextContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  flex: 1,
  "& h1": {
    color: "#303031",
    fontFamily: "'Young Serif', serif",
    fontSize: "48px",
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
    fontWeight: 400,
    lineHeight: "26px",
    letterSpacing: "-0.36px",
    margin: 0,
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
      alignSelf: "center",
    },
  },
});

const GraphicWrapper = styled("div", {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function FeatureEngageContributors() {
  return (
    <SectionContainer>
      <TextContent>
        <img src={Icon6} alt="Icon 6" />
        <h1>Engage highly committed contributors</h1>
        <p>
          You need talented people on-demand across various tasks that your
          full-time workforce can’t prioritize at the moment. As an Open
          Enterprise, you can easily fund tasks and have people apply to work on
          them in return for funds or shares.
        </p>
      </TextContent>
      <GraphicWrapper>
        <EngageGraphic />
      </GraphicWrapper>
    </SectionContainer>
  );
}

export default FeatureEngageContributors;
