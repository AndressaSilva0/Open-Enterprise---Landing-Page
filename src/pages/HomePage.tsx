import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { styled } from "../stitches.config";
import Title from "../components/ui/Title";
import Description from "../components/ui/Description";
import Button from "../components/ui/Button";
import Illustration from "../assets/Illustration.png";
import Vector from "../assets/Vector.png";
import TitleSection from "../components/ui/TitleSection";
import DescriptionSection from "../components/ui/DescriptionSection";
import CardStyled from "../components/ui/Card";
import FeatureInfo from "../components/ui/FeatureInfo";
import FeatureGraphic from "../components/ui/FeatureGraphic";
import Icon from "../assets/Icon.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import ProposalWidget from "../components/ui/ProposalWidget";
import FeatureOnboardUser from "../components/ui/FeatureOnboardUser";
import FeatureEngageContributors from "../components/ui/FeatureEngageContributors";
import CardSecond from "../components/ui/CardSecond";
import TitleSectionSecond from "../components/ui/TitleSectionSecond";
import DescriptionSecond from "../components/ui/DescriptionSecond";
import ButtonViewMore from "../components/ui/ButtonViewMore";
import Divider from "../assets/Divider.png";
import TitleTree from "../components/ui/TitleTree";
import DescriptionTree from "../components/ui/DescriptionTree";
import PabloSign from "../assets/pablo-sign-in.png";

const Main = styled("main", {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
});

const HeroContent = styled("div", {
  padding: "120px 80px",
  maxWidth: "1400px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "60px",
  // Hero Section: No mobile, trocamos de linha (row) para coluna (column) e centralizamos.
  // O padding e o gap diminuem para evitar espaços vazios excessivos.
  "@bp3": {
    flexDirection: "column",
    textAlign: "center",
    padding: "40px 24px",
    gap: "32px",
  },
});

const TextContent = styled("div", {
  flex: "0 1 600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "@bp3": {
    flex: "1",
    alignItems: "center",
  },
});

const IllustrationWrapper = styled("div", {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  position: "relative", // Necessário para posicionar o Vector de forma absoluta dentro dele.
  "& .illustration": {
    maxWidth: "100%",
    height: "auto",
    zIndex: 1, // Garante que a ilustração principal fique na frente do veteor.
  },
  "& .vector": {
    position: "absolute", // Tira o vetor do fluxo normal e permite posicionar livremente.
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Técnica clássica para centralizar um elemento absoluto.
    width: "672.099px",
    height: "719.628px",
    zIndex: -1, // Coloca o vetor atrás da ilustração.
    opacity: 0.8,
  },
});

const CardsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  maxWidth: "1329px",
  margin: "0 auto 120px auto",
  // Grid de Cards iniciais: Empilha verticalmente no mobile.
  "@bp3": {
    flexDirection: "column",
    textAlign: "center",
    padding: "40px 24px",
    alignItems: "center",
    margin: "0 auto 40px auto",
  },
});

const FeaturesContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  gap: "24px",
  maxWidth: "1329px",
  margin: "0 auto 120px auto",
  // Seção de Funcionalidades (Kickstart): Forçamos o empilhamento e reduzimos o padding.
  // O gap de 40px mantém os itens (texto e gráfico) próximos o suficiente.
  "@bp3": {
    flexDirection: "column",
    textAlign: "center",
    padding: "20px 24px",
    alignItems: "center",
    gap: "40px",
    margin: "0 auto 40px auto",
  },
});

const ProposalContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "24px",
  maxWidth: "1329px",
  margin: "0 auto 120px auto",
  "@bp3": {
    flexDirection: "column",
    textAlign: "center",
    padding: "20px 24px",
    alignItems: "center",
    margin: "0 auto 40px auto",
  },
});

const CardsGrid = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  maxWidth: "1329px",
  margin: "0 auto",
  "@bp3": {
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px",
  },
});

const ButtonViewMoreContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  marginTop: "92px",
  "@bp3": {
    marginTop: "32px",
  },
});

const DividerImage = styled("img", {
  display: "block",
  width: "100%",
  maxWidth: "1800px",
  height: "auto",
  margin: "80px auto 120px auto",
  "@bp3": {
    margin: "24px auto",
  },
});

const TreeSectionContainer = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1329px",
  margin: "0 auto 160px auto",
  padding: "0 24px",
  gap: "80px",
  // Seção final "Start an Open Enterprise": Layout de coluna e espaçamento reduzido.
  "@bp3": {
    flexDirection: "column",
    textAlign: "center",
    gap: "32px",
    margin: "0 auto 24px auto",
  },
});

const TreeTextContent = styled("div", {
  flex: "0 0 644px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "@media (max-width: 1024px)": {
    flex: "1",
    alignItems: "center",
  },
});

const TreeGraphicWrapper = styled("div", {
  flex: "1",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
});

const TreeImage = styled("img", {
  width: "644px",
  height: "361px",
  objectFit: "contain",
  "@bp3": {
    width: "100%",
    height: "auto",
  },
});

const SectionDivider = styled("div", {
  margin: "120px 0",
  "@bp3": {
    margin: "32px 0",
  },
});

function HomePage() {
  return (
    <div style={{ background: "#F9F9F8", minHeight: "100vh" }}>
      <Header />
      <Main>
        <HeroContent>
          {/* ... Hero Content ... */}
          <TextContent>
            <Title />
            <Description />
            <Button />
          </TextContent>
          <IllustrationWrapper>
            <img src={Vector} alt="" className="vector" aria-hidden="true" />
            <img
              src={Illustration}
              alt="Open collaboration illustration"
              className="illustration"
            />
          </IllustrationWrapper>
        </HeroContent>
        <div style={{ padding: window.innerWidth < 768 ? "0 20px" : "0 80px" }}>
          <TitleSection />
          <DescriptionSection />
          <CardsContainer>
            {/* ... Cards ... */}
            <CardStyled
              icon={Icon}
              title="Modern workforce"
              text="Multistakeholder governance aligns employees with the organization’s wider community."
            />
            <CardStyled
              icon={Icon2}
              title="Meritocratic by design"
              text="Tokenized ownership aligns deeply committed individuals with the organization’s success."
            />
            <CardStyled
              icon={Icon3}
              title="Engineered for resilience"
              text="Open Enterprise supports best practices in sociocratic management."
            />
          </CardsContainer>

          <FeaturesContainer>
            <FeatureInfo />
            <FeatureGraphic />
          </FeaturesContainer>

          <ProposalContainer>
            <ProposalWidget />
            <FeatureOnboardUser />
          </ProposalContainer>

          <FeatureEngageContributors />

          <SectionDivider>
            <TitleSectionSecond />
            <DescriptionSecond />
            <CardsGrid>
              {/* ... Cards ... */}
              <CardSecond
                title="Ideate a list of features based on the Sociocracy model"
                description="We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s..."
                tag="5 AUT"
                date="Apply by May 15"
              />
              <CardSecond
                title="Update documentation with FAQs"
                description="Review our community chat for the most frequently asked questions and document answers for our product docs."
                tag="10 AUT"
                date="Apply by May 18"
              />
              <CardSecond
                title="Tutorial video series"
                description="Create a series of video tutorials that cover everything from start to finish on using Open Enterprise."
                tag="40 AUT"
                date="Apply by May 20"
              />
            </CardsGrid>
            <ButtonViewMoreContainer>
              <ButtonViewMore />
            </ButtonViewMoreContainer>
            <DividerImage src={Divider} alt="" aria-hidden="true" />

            <TreeSectionContainer>
              <TreeTextContent>
                <TitleTree />
                <DescriptionTree />
                <Button />
              </TreeTextContent>
              <TreeImage src={PabloSign} alt="" />
            </TreeSectionContainer>
          </SectionDivider>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default HomePage;
