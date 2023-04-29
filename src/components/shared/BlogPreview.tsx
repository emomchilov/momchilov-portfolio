import AmazonLogo from "../../assets/img/amazon-logo";
import BigLittleLogo from "../../assets/img/big-little-logo";
import BlockchainLogo from "../../assets/img/blockchain-logo";
import LiveTextLogo from "../../assets/img/live-text-logo";
import { BlogTitle } from "./BlogTitle";
import { Divider } from "./Divider";

interface Props {
  title: string;
  description: string;
  icon: string;
  leftOrientation: boolean;
  link: string;
  className?: string;
}

function getIconfromName(iconName: string): JSX.Element {
  switch (iconName) {
    case "AmazonLogo":
      return <AmazonLogo className="place-self-center self-center" />;
    case "BigLittleLogo":
      return (
        <BigLittleLogo className="place-self-center self-center scale-150" />
      );
    case "BlockchainLogo":
      return (
        <BlockchainLogo className="place-self-center self-center scale-150" />
      );
    case "LiveTextLogo":
      return (
        <LiveTextLogo className="place-self-center pr-8 self-center scale-150" />
      );
    default:
      return <AmazonLogo className="" />;
  }
}

const BlogPreview: React.FC<Props> = ({
  title,
  description,
  icon,
  leftOrientation,
  link = "",
  className = "",
}) => {
  return (
    <>
      <div className={`${className} grid grid-cols-2 py-24 px-12`}>
        {leftOrientation ? getIconfromName(icon) : <></>}
        <BlogTitle
          title={title}
          subtitle={description}
          link={link}
          underline={true}
        ></BlogTitle>
        {leftOrientation ? <></> : getIconfromName(icon)}
      </div>
    </>
  );
};

export default BlogPreview;
