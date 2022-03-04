import { useMemo, memo } from "react";

interface ToggleTextProps {
  color: string;
  children: React.ReactNode;
}

const ToggleText = memo(({ color, children }: ToggleTextProps) => {
  const style = useMemo(() => ({ color }), [color]);

  return <span style={style}>{children}</span>;
});

export default ToggleText;
