import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  backgroundColor: "#72a391", // O fundo verde-teal dá destaque ao botão de "Call to Action".
  color: "#FFFFFF",
  display: "inline-flex",
  padding: "16px 32px",
  alignItems: "center",
  borderRadius: "8px",
  border: "none",
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 0.2s", // Transição suave para a cor não mudar bruscamente.
  "&:hover": {
    backgroundColor: "#618d7d", // Cor de hover: feedback visual que o botão é clicável.
  },
});

function Button() {
  return <StyledButton>Request early access</StyledButton>;
}
export default Button;
