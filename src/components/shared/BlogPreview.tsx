import React from "react";
import AmazonLogo from "../../assets/img/amazon-logo";
import BigLittleLogo from "../../assets/img/big-little-logo";
import BlockchainLogo from "../../assets/img/blockchain-logo";
import LiveTextLogo from "../../assets/img/live-text-logo";
import { BlogTitle } from "./BlogTitle";
import useBreakpoint from "../../hooks/useBreakpoint";

interface Props {
  title: string;
  description: string;
  icon: string;
  leftOrientation: boolean;
  link: string;
  className?: string;
}

const BlogPreview: React.FC<Props> = ({
  title,
  description,
  icon,
  leftOrientation,
  link = "",
  className = "",
}) => {
  const screen = useBreakpoint();
  function getIconfromName(iconName: string): JSX.Element {
    switch (iconName) {
      case "AmazonLogo":
        return (
          <AmazonLogo
            className={`${
              screen === "isDesktop"
                ? "place-self-center self-center"
                : "place-self-center mb-12"
            }`}
          />
        );
      case "BigLittleLogo":
        return (
          <BigLittleLogo
            className={`${
              screen === "isDesktop"
                ? "place-self-center self-center scale-150"
                : "place-self-center mb-24 scale-150"
            }`}
          />
        );
      case "BlockchainLogo":
        return (
          <BlockchainLogo
            className={`${
              screen === "isDesktop"
                ? "place-self-center self-center scale-150"
                : "place-self-center mb-24 scale-150"
            }`}
          />
        );
      case "LiveTextLogo":
        return (
          <LiveTextLogo
            className={`${
              screen === "isDesktop"
                ? "place-self-center self-center scale-150"
                : "place-self-center mb-24 scale-150"
            }`}
          />
        );
      default:
        return <AmazonLogo className="" />;
    }
  }
  return (
    <>
      <div className={`${className} grid md:grid-cols-2 pt-12 md:py-24 px-12`}>
        {leftOrientation || screen === "isMobile" ? (
          getIconfromName(icon)
        ) : (
          <></>
        )}
        <BlogTitle
          title={title}
          subtitle={description}
          link={link}
          underline={true}
        ></BlogTitle>
        {leftOrientation || screen === "isMobile" ? (
          <></>
        ) : (
          getIconfromName(icon)
        )}
      </div>
    </>
  );
};

export default BlogPreview;
