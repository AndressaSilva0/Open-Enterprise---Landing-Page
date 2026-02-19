import { styled } from "../../stitches.config";
import KasMoss from "../../assets/Kas Moss.png";
import DillonKydd from "../../assets/Dillon Kydd.png";
import AnnaOlsen from "../../assets/Anna Olsen.png";

const GraphicContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  backgroundColor: "#FFFFFF",
  borderRadius: "16px",
  boxShadow: "12px 12px 0px #71A894", // SOMBRA SÓLIDA: Estilo marcante do Figma, sem blur.
  width: "100%",
  maxWidth: "480px",
  gap: "24px",
  border: "2px solid #303031",
  position: "relative",
  "@bp2": {
    padding: "24px",
    boxShadow: "8px 8px 0px #71A894",
  },

  "& .title": {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#303031",
    marginBlockEnd: "8px",
  },
});

const MemberRow = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  "& img": {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid #303031", // Adicionando borda nas fotos para destaque.
  },
  "& .info": {
    display: "flex",
    flexDirection: "column",
    "& strong": {
      fontSize: "18px",
      color: "#303031",
      fontFamily: "Inter, sans-serif",
      lineHeight: "1.2",
    },
    "& span": {
      fontSize: "12px",
      color: "#66645E",
      textTransform: "uppercase", // Estilo "100 SHARES"
      letterSpacing: "1px",
    },
  },
});

function FeatureGraphic() {
  return (
    <GraphicContainer>
      <div className="title">Members</div>
      <MemberRow>
        <img src={DillonKydd} alt="Dillon Kydd" />
        <div className="info">
          <strong>Dillon Kydd</strong>
          <span>100 SHARES</span>
        </div>
      </MemberRow>
      <MemberRow>
        <img src={AnnaOlsen} alt="Anna Olsen" />
        <div className="info">
          <strong>Anna Olsen</strong>
          <span>100 SHARES</span>
        </div>
      </MemberRow>
      <MemberRow>
        <img src={KasMoss} alt="Kas Moss" />
        <div className="info">
          <strong>Kas Moss</strong>
          <span>100 SHARES</span>
        </div>
      </MemberRow>
    </GraphicContainer>
  );
}

export default FeatureGraphic;
