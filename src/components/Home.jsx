import Header from "./Header";
import Footer from "./Footer";
import Text from "./Text";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ImgContainer from "./ImgContainer";
import Card from "./Card";

function Home() {
  return (
    <div className="flex flex-col">
      <Header placeHolderText="Dashboard" />
      <Text textMessage="Engineering Clarity in a Complex World." />
      <Paragraph paraText="We bulid focused, high-performance digital products for enterpeise that demand precision and elegence." />
      <Button buttonText="VIEW OUR PORTFOLIO" />
      <ImgContainer imgUrl="./images/image.png" />
      <Text textMessage="Selected Works" />
      <Paragraph paraText="A collection of our most rigorous executions." />
      <Card
        imgUrl="./images/Home.png"
        text="Nexus Financial"
        paragraph="Core Banking Platfrom Redesign"
        year="2023"
      />
      <Card
        imgUrl="./images/health.png"
        text="Aura Health"
        paragraph="Patient Experience Architecture"
        year="2024"
      />
      <Text textMessage="Their obsession with removing the unnecessary resulted in a  product that feels inevitable." />
      <Paragraph paraText="SARAH JENKINS, CTO AT VELLUM" />
      <Footer />
    </div>
  );
}

export default Home;
