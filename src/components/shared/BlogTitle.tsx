interface Props {
  title: string;
  subtitle: string;
  link?: string;
  className?: string;
  textWhite?: boolean;
  underline?: boolean;
}

// ${textWhite ? 'text-white' : 'text-black'}`

export const BlogTitle: React.FC<Props> = ({
  title,
  subtitle,
  link,
  className = "",
}) => {
  return (
    <div className={className}>
      <a
        className="font-casual text-h3 underline text-black"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <h6 className="py-2 font-poppinsExtraLight text-grey-dark">{subtitle}</h6>
    </div>
  );
};
