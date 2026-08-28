import Header from "./Header";
import Text from "./Text";
import ImgContainer from "./ImgContainer";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Footer from "./Footer";

function Explore() {
  return (
    <>
      <Header placeHolderText="Explore" />
      <Text textMessage="Our Services" />
      <ImgContainer imgUrl="/images/service.png" />
      <Paragraph paraText="We belive in the power of refined simplicity. Our services are tailored to remove complexity and elevate your core value perposition" />
      <Button buttonText="SCHEDULE A CONSULTATION" />
      <Footer />
    </>
  );
}

export default Explore;
