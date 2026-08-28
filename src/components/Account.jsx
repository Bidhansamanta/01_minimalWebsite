import Header from "./Header";
import Form from "./Form";
import Text from "./Text";
import Paragraph from "./Paragraph";
import Middle from "./Middle";
import Address from "./Address";
import Footer from "./Footer";

function Account({ placeHolderText }) {
  return (
    <>
      <Header placeHolderText="Account" />
      <Form />
      <Text textMessage="Let's start a conversation." />
      <Paragraph paraText="We partner with forward-thinking brands to craft exceptional digital experiences. Reach out to discuss your next project." />
      <hr className="border-0 border-t border-gray-300 my-4" />
      <Address heading3="STUDIO" heading4="1200 Minimalist Way, Suite 400 San Francisco, CA 94103"/>
      <Address heading3="INQUIRIES" heading4="hello@studio.com"/>
      <hr className="border-0 border-t border-gray-300 my-4" />
      <Middle li1="Instagram" li2="LinkedIn" li3="Twitter"/>
      <Footer />
    </>
  );
}

export default Account;
