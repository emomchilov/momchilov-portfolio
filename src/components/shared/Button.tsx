interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "default",
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant}` + (disabled ? " disabled" : "")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
