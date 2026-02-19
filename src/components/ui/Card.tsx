import { styled } from "../../stitches.config";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const CardStyled = styled("div", {
  display: "flex", // Flexbox permite organizar os itens em linha ou coluna.
  flexDirection: "column", // Organiza os itens um abaixo do outro.
  alignItems: "center", // CENTRALIZAÇÃO HORIZONTAL: Alinha os itens no eixo secundário (neste caso, o horizontal).
  justifyContent: "center", // CENTRALIZAÇÃO VERTICAL: Distribui o espaço no eixo principal (vertical).
  gap: "16px", // ESPAÇAMENTO: Define a distância fixa entre cada elemento filho.
  padding: "48px 32px", // RESPIRT: Aumentamos o padding para dar mais ar ao conteúdo dentro do card.
  borderRadius: "16px", // BORDAS: Deixamos mais arredondado para um visual mais moderno.
  backgroundColor: "#ffffff",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)", // SOMBRA: Mais suave e espalhada (blur alto, opacidade baixa).
  width: "100%",
  maxWidth: "427px",
  height: "auto",
  minHeight: "340px",
  flexShrink: 0,
  "@bp2": {
    padding: "32px 24px",
    minHeight: "auto",
  },
  transition: "transform 0.2s ease-in-out", // MICRO-ANIMAÇÃO: Prepara para um efeito de hover.

  "&:hover": {
    transform: "translateY(-4px)", // EFEITO: O card sobe levemente ao passar o mouse.
  },

  "& h2": {
    color: "#303031",
    textAlign: "center", // CENTRALIZAÇÃO DE TEXTO: Garante que as linhas de texto fiquem no centro.
    fontFamily: "Inter, sans-serif", // FONTE: Usando a fonte padrão do projeto.
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px",
    margin: 0,
  },
  "& p": {
    color: "#66645E", // HIERARQUIA: Uma cor um pouco mais clara para a descrição.
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26px",
    margin: 0,
  },
  "& img": {
    marginBottom: "8px", // ESPAÇO EXTRA: Um respiro adicional abaixo do ícone.
  },
});

function Card({ icon, title, text }: CardProps) {
  return (
    <CardStyled>
      <img src={icon} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </CardStyled>
  );
}
export default Card;
