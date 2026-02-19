import { styled } from "../../stitches.config";

interface CardSecondProps {
  title: string;
  description: string;
  tag: string;
  date: string;
}

const StyledCardSecond = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Empurra o footer para o final
  borderRadius: "16px",
  background: "#FFF",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  flex: 1, // FAZ O CARD CRESCER E DIMINUIR EQUITATIVAMENTE
  maxWidth: "427px", // LARGURA MÁXIMA DO FIGMA
  width: "100%",
  height: "auto",
  minHeight: "260px",
  padding: "32px 24px 24px 24px",
  "@bp2": {
    padding: "24px 16px",
    minHeight: "auto",
  },
  border: "1px solid #F0F0F0",
  "& h2": {
    color: "#303031",
    fontFamily: "'Space Mono', monospace",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "24px",
    margin: "0 0 16px 0",
  },
  "& p": {
    color: "#66645E",
    fontFamily: "'Inter', sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    margin: 0,
    flex: 1,
  },
});

const CardFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "24px",
});

const Tag = styled("span", {
  display: "inline-flex",
  padding: "4px 12px",
  borderRadius: "99px",
  background: "#71A894",
  color: "#FFF",
  fontFamily: "'Space Mono', monospace",
  fontSize: "14px",
  fontWeight: 700,
});

const DateText = styled("span", {
  color: "#303031",
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: 600,
});

function CardSecond({ title, description, tag, date }: CardSecondProps) {
  return (
    <StyledCardSecond>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <CardFooter>
        <Tag>{tag}</Tag>
        <DateText>{date}</DateText>
      </CardFooter>
    </StyledCardSecond>
  );
}
export default CardSecond;
