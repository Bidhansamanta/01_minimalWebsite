import Header from "./Header";
import Text from "./Text";
import Paragraph from "./Paragraph";
import ImgContainer from "./ImgContainer";
import Middle from "./Middle";
import CollectionsCard from "./CollectionsCard";
import Footer from "./Footer";

function Collections() {
  return (
    <>
      <Header placeHolderText="Collections" />
      <Text textMessage="Selected Work" />
      <Paragraph paraText="A curation of projects defining modern commerce and spatial design. Built on the principles of minimalism, utility, and refined aesthetics." />
      <ImgContainer imgUrl="/images/collections.png" />
      <Middle li1="ALL WORKS" li2="ARCHITECTURE" li3="DIGITAL" li4="OBJECTS"/>
      <CollectionsCard
        imgUrl="./public/images/cup.png"
        paragraph="INDUSTRIAL DESIGN"
        text="Forma Brew Collection"
      />
      <CollectionsCard
        imgUrl="/images/mobile.png"
        paragraph="DIGITAL PRODUCT"
        text="Oasis App Interface"
      />
      <CollectionsCard
        imgUrl="/images/office.png"
        paragraph="INTERIOR ARCHITECTURE"
        text="Vanguard Headquarter"
      />
      <CollectionsCard
        imgUrl="/images/book.png"
        paragraph="PRINT TYPOGRAPHY"
        text="Monograph: Volume IV"
      />
      <Footer />
    </>
  );
}

export default Collections;
