interface Props {
  color?: string;
  className?: string;
}

// ${textWhite ? 'text-white' : 'text-black'}`

export const Divider: React.FC<Props> = ({
  color = "grey",
  className = "",
}) => {
  return <div className={`h-0.5 w-full bg-${color} ${className}`} />;
};
