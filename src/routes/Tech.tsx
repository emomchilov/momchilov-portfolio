import PageTitle from "../components/about/PageTitle";
import { Header } from "../components/header/Header";
import BlogPreview from "../components/shared/BlogPreview";
import { Divider } from "../components/shared/Divider";

export function Tech() {
  return (
    <>
      <Header></Header>
      <div className="bg-blue-lighter h-full">
        <div className="grid md:grid-cols-[1fr_3fr_1fr] md:py-24">
          <div></div>
          <div className="bg-white">
            <div className="bg-grey-light p-6 md:p-24">
              <PageTitle
                title="tech"
                description="as a tech enthusiast and software engineer by trade, i enjoy the challenge of solving life's problems with code. from college computer science assignments to personal passion projects, i've compiled my work, research, and thoughts over the years in one neat place. welcome to my brain dump of all-things tech! "
              ></PageTitle>
            </div>
            <Divider></Divider>
            <div className="bg-white">
              <BlogPreview
                title="live text & the power of regex"
                description="follow along as i implement Apple's iOS 15 live text feature in a mobile tip calculator using SwiftUI, UIKit, and regular expressions."
                icon="LiveTextLogo"
                leftOrientation={true}
                link="https://medium.com/captech-corner/ios-live-text-filtering-for-custom-content-types-using-regex-5b52f0705dc9"
              ></BlogPreview>
              <Divider></Divider>
              <BlogPreview
                title="create and share a SwiftUI-generated PDF using ImageRenderer"
                description="unlock the simplicity of creating and exporting PDFs with SwiftUI. learn how to seamlessly design layouts and share your documents effortlessly."
                icon="PDFLogo"
                leftOrientation={false}
                link="https://medium.com/@edenmomchilov/create-and-share-a-swiftui-generated-pdf-using-imagerenderer-549b6422d078"
              ></BlogPreview>
              <BlogPreview
                title="all about blockchain"
                description="crypto, bitcoin, NFTs... what's the technology behind all of these buzzwords? with the help of Alex & Don Tapscott's book The Blockchain Revolution, i break down the basics of blockchain technology and distributed ledgers."
                icon="BlockchainLogo"
                leftOrientation={true}
                link="https://medium.com/@edenmomchilov/the-basics-of-blockchain-technology-a1f46fff0d8b"
              ></BlogPreview>
              <Divider></Divider>
              <BlogPreview
                title="augmented reality app wins technology builder award"
                description="see the press release for my product team's recognition at the 2023 rvatech/Gala Awards."
                icon="TeamworkLogo"
                leftOrientation={false}
                link="https://www.captechconsulting.com/news/vistar-receives-technology-builder-award"
              ></BlogPreview>
              <Divider></Divider>
              <BlogPreview
                title="optimized shipping costs for Amazon Prime orders"
                description="how my team built a Visual Basic application that analyzes distance and price constraints to calculate optimal shipping paths for randomly generated Amazon Prime orders."
                icon="AmazonLogo"
                leftOrientation={true}
                link="https://medium.com/@edenmomchilov/optimized-shipping-costs-for-amazon-prime-orders-2ca7cb817df0"
              ></BlogPreview>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
