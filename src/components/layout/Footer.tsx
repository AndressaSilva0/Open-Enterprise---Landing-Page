import { styled } from "../../stitches.config";

const StyledFooter = styled("footer", {
  width: "100%",
  padding: "40px 0",
  backgroundColor: "#FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ContentWrapper = styled("div", {
  width: "100%",
  maxWidth: "1329px",
  margin: "0 auto",
  padding: "0 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "24px",
    textAlign: "center",
  },
});

const Logo = styled("p", {
  color: "#303031",
  fontFamily: "'Space Mono', monospace",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "-0.96px",
  margin: 0,
});

const LinksGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "40px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "16px",
  },
});

const FooterLink = styled("a", {
  color: "#303031",
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "-0.4px",
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer",
  "&:hover": {
    color: "#71A894",
  },
});

const ContactLink = styled(FooterLink, {
  color: "#71A894",
  fontWeight: 700,
  "&:hover": {
    color: "#618d7d",
  },
});

interface FooterProps {
  logo?: string;
  documentation?: string;
  github?: string;
  twitter?: string;
  link?: string;
}

function Footer({
  logo = "Open Enterprise",
  documentation = "Documentation",
  github = "GitHub",
  twitter = "Twitter",
  link = "Contact us",
}: FooterProps) {
  return (
    <StyledFooter>
      <ContentWrapper>
        <Logo>{logo}</Logo>
        <LinksGroup>
          <FooterLink
            as="button"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {documentation}
          </FooterLink>
          <FooterLink
            as="button"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {github}
          </FooterLink>
          <FooterLink
            as="button"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {twitter}
          </FooterLink>
          <ContactLink
            as="button"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {link}
          </ContactLink>
        </LinksGroup>
      </ContentWrapper>
    </StyledFooter>
  );
}

export default Footer;
