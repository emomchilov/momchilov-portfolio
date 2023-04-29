interface Props {
  title: string;
  subtitle: string;
}

export const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="py-10 font-casual text-h3 text-white">
      {title}
      <h6 className="py-2 text-white">{subtitle}</h6>
    </div>
  );
};
