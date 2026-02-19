import { styled } from "../../stitches.config";
import Cover1 from "../../assets/Cover.png";
import Cover2 from "../../assets/Cover2.png";
import Cover3 from "../../assets/Cover3.png";
import Cover4 from "../../assets/Cover4.png";

const GraphicContainer = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: "640px",
  height: "460px",
  margin: "0 auto",
  "@bp2": {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0 20px",
  },
});

// 1. Card de Tarefa (O que fica no topo e centralizado)
const TaskCard = styled("div", {
  position: "absolute",
  top: "0",
  left: "80px",
  width: "480px",
  backgroundColor: "#FFF",
  border: "2px solid #303031",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "8px 8px 0px #71A894",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  "@bp2": {
    position: "relative",
    top: "auto",
    left: "auto",
    width: "100%",
    boxSizing: "border-box",
  },
});

const TaskHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TaskTitle = styled("h4", {
  fontFamily: "Space Mono",
  fontSize: "16px",
  fontWeight: 700,
  margin: 0,
});

const ShareBadge = styled("span", {
  backgroundColor: "#7ba79d",
  color: "#FFF",
  padding: "4px 12px",
  borderRadius: "99px",
  fontSize: "12px",
  fontWeight: 700,
  fontFamily: "Inter",
});

const TaskDesc = styled("p", {
  fontFamily: "Inter",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#66645E",
  margin: 0,
});

// 2. Card de Candidatos (O que fica embaixo na esquerda)
const ApplicantsCard = styled("div", {
  position: "absolute",
  top: "160px",
  left: "-10px",
  width: "320px",
  backgroundColor: "#f4f2ec",
  border: "4px solid #303031",
  borderRadius: "16px",
  padding: "32px 24px",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "@bp2": {
    position: "relative",
    top: "auto",
    left: "auto",
    width: "100%",
    boxSizing: "border-box",
  },
});

const ApplicantItem = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  justifyContent: "space-between",
});

const ApplicantInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const ApplicantAvatar = styled("img", {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
});

const ApplicantName = styled("span", {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 500,
});

const Rating = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "14px",
  fontFamily: "Space Mono",
  "&::before": {
    content: "'★'",
    color: "#ffc107",
  },
});

// 3. Card de Perfil (O que fica embaixo na direita)
const ProfileCard = styled("div", {
  position: "absolute",
  top: "190px",
  right: "-10px",
  width: "220px",
  backgroundColor: "#FFF",
  border: "4px solid #71A894",
  borderRadius: "16px",
  padding: "24px 20px",
  zIndex: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@bp2": {
    position: "relative",
    top: "auto",
    right: "auto",
    width: "100%",
    boxSizing: "border-box",
  },
});

const ProfilePhoto = styled("img", {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  marginBottom: "12px",
});

const ProfileName = styled("h5", {
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: 700,
  margin: "0 0 4px 0",
});

const ProfileRole = styled("span", {
  fontFamily: "Space Mono",
  fontSize: "11px",
  color: "#66645E",
  display: "block",
  marginBottom: "12px",
});

const ViewProfileButton = styled("button", {
  width: "100%",
  backgroundColor: "#303031",
  color: "#FFF",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  fontSize: "12px",
  fontWeight: 700,
  fontFamily: "Inter",
  cursor: "pointer",
});

function EngageGraphic() {
  return (
    <GraphicContainer>
      {/* Card de Tarefa */}
      <TaskCard>
        <TaskHeader>
          <TaskTitle>Write a how-to on Open Enterprise</TaskTitle>
          <ShareBadge>1 SHARE</ShareBadge>
        </TaskHeader>
        <TaskDesc>
          Looking for an amazing copywriter using Open Enterprise to help us
          write an article on how to get started.
        </TaskDesc>
      </TaskCard>

      {/* Card de Candidatos */}
      <ApplicantsCard>
        <TaskTitle style={{ fontSize: "14px" }}>3 applicants</TaskTitle>
        <ApplicantItem>
          <ApplicantInfo>
            <ApplicantAvatar src={Cover1} />
            <ApplicantName>Jason Kwon</ApplicantName>
          </ApplicantInfo>
          <Rating>4.8</Rating>
        </ApplicantItem>
        <ApplicantItem>
          <ApplicantInfo>
            <ApplicantAvatar src={Cover2} />
            <ApplicantName>Alex Rose</ApplicantName>
          </ApplicantInfo>
          <Rating>4.5</Rating>
        </ApplicantItem>
        <ApplicantItem>
          <ApplicantInfo>
            <ApplicantAvatar src={Cover3} />
            <ApplicantName>Lizzie Ulrich</ApplicantName>
          </ApplicantInfo>
          <Rating>4.2</Rating>
        </ApplicantItem>
      </ApplicantsCard>

      {/* Card de Perfil */}
      <ProfileCard>
        <ProfilePhoto src={Cover2} />
        <ProfileName>Alex Rose</ProfileName>
        <ProfileRole>UX Writer</ProfileRole>
        <div
          style={{
            display: "flex",
            gap: "12px",
            fontSize: "10px",
            marginBottom: "12px",
            fontFamily: "Inter",
          }}
        >
          <span>4 commits</span>
          <Rating>4.5</Rating>
        </div>
        <ViewProfileButton>View profile</ViewProfileButton>
      </ProfileCard>
    </GraphicContainer>
  );
}

export default EngageGraphic;
