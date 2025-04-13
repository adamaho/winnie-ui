import { useCallback } from "react";
import { Button } from "react-aria-components";

import style from "./accent.module.css";

type AccentProps = {
  color: string;
};

export function Accent({ color }: AccentProps) {
  /**
   * Set the accent color attribute on the body
   */
  const handleSetAccentColor = useCallback(() => {
    document.body.setAttribute("data-accent-color", color);
  }, []);
  return (
    <Button
      className={style.accent}
      data-accent-color={color}
      onPress={handleSetAccentColor}
      aria-label={`Change accent color to ${color}`}
    />
  );
}
