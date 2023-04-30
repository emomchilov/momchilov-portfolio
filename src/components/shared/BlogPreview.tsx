import React from "react";
import AmazonLogo from "../../Assets/img/amazon-logo";
import BigLittleLogo from "../../Assets/img/big-little-logo";
import BlockchainLogo from "../../Assets/img/blockchain-logo";
import LiveTextLogo from "../../Assets/img/live-text-logo";
import { BlogTitle } from "./BlogTitle";

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
      <div className={`${className} grid md:grid-cols-2 py-24 px-12`}>
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
