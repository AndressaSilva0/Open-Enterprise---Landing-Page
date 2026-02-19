import { styled } from "../../stitches.config";
import JassirJonis from "../../assets/Jassir Jonis.png";
import GridDecorationImage from "../../assets/Grid.png";

const Wrapper = styled("div", {
  position: "relative",
  width: "fit-content",
});

const GridDecoration = styled("img", {
  position: "absolute",
  width: "292px",
  height: "292px",
  left: "-64px",
  bottom: "-64px",
  zIndex: -1,
  pointerEvents: "none",
  "@bp1": {
    display: "none",
  },
});

const WidgetContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "48px 56px",
  backgroundColor: "#FFF",
  borderRadius: "20px",
  border: "4px solid #303031",
  width: "100%",
  maxWidth: "560px",
  gap: "32px",
  boxSizing: "border-box",
  fontFamily: "'Space Mono', monospace",
  position: "relative",
  zIndex: 1,
  "@bp2": {
    padding: "32px 20px",
    gap: "24px",
  },
});

const ProfileHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

const Avatar = styled("img", {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "2px solid #303031",
  objectFit: "cover",
});

const Identity = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const Name = styled("h3", {
  color: "#303031",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "1.2",
  margin: 0,
});

const Role = styled("span", {
  color: "#66645E",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "1.2",
});

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const Message = styled("p", {
  color: "#303031",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  margin: 0,
});

const StatsGrid = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "16px",
});

const StatItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const StatLabel = styled("span", {
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  color: "#66645E",
  letterSpacing: "2px",
});

const StatValue = styled("span", {
  color: "#303031",
  fontSize: "28px",
  fontWeight: 400,
  lineHeight: "1",
});

const VoteButton = styled("button", {
  color: "#FFF",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "1",
  cursor: "pointer",
  borderRadius: "999px",
  background: "#303031",
  width: "100%",
  padding: "20px 32px",
  border: "none",
  marginTop: "16px",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    filter: "brightness(1.2)",
  },
});

interface ProposalWidgetProps {
  name?: string;
  role?: string;
  message?: string;
  commit?: string;
  shares?: string;
  avatar?: string;
}

function ProposalWidget({
  name = "Jassir Jonis",
  role = "Pre-seed angel investor",
  message = "Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.",
  commit = "10,000 DAI",
  shares = "20",
  avatar = JassirJonis,
}: ProposalWidgetProps) {
  return (
    <Wrapper>
      <GridDecoration src={GridDecorationImage} alt="" aria-hidden="true" />
      <WidgetContainer>
        <ProfileHeader>
          <Avatar src={avatar} alt={name} />
          <Identity>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Identity>
        </ProfileHeader>

        <ContentWrapper>
          <Message>{message}</Message>

          <StatsGrid>
            <StatItem>
              <StatLabel>Commit</StatLabel>
              <StatValue>{commit}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Shares</StatLabel>
              <StatValue>{shares}</StatValue>
            </StatItem>
          </StatsGrid>

          <VoteButton>Go to vote</VoteButton>
        </ContentWrapper>
      </WidgetContainer>
    </Wrapper>
  );
}

export default ProposalWidget;
