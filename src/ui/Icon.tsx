export interface IconType {
  className?: string | undefined;
  size?: number;
  onClick?: any;
  color?: string;
  viewBox?: string;
}

interface IconWrapType extends IconType {
  children?: any;
  viewBox?: string;
  fillStroke?: string;
  reverse?: boolean;
}

export const IconWrap = ({
  className = "",
  onClick = undefined,
  color = "currentColor",
  fillStroke = "transparent",
  size = 24,
  viewBox = "0 0 24 24",
  children,
  reverse = false,
}: IconWrapType) => {
  const reverseClass = reverse ? "reverse " : "";
  return (
    <svg
      viewBox={viewBox}
      className={reverseClass + className}
      fill={color}
      stroke={fillStroke}
      onClick={onClick}
      width={size}
      height={size}
    >
      {children}
    </svg>
  );
};
