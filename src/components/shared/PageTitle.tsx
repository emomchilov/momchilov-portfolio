interface Props {
  title: string;
  description: string;
  className?: string;
}

const PageTitle: React.FC<Props> = ({ title, description, className = "" }) => {
  return (
    <div className={className}>
      <h3 className={`text-[36px]`}>{title}</h3>
      <h6 className={`py-2 font-poppinsExtraLight`}>{description}</h6>
    </div>
  );
};

export default PageTitle;
