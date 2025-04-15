import { type Dispatch, type SetStateAction, useCallback } from "react";
import { ToggleButton } from "react-aria-components";

import style from "./accent.module.css";

type AccentProps = {
  color: string;
  selectedAccentColor: string;
  setSelectedAccentColor: Dispatch<SetStateAction<string>>;
};

export function Accent({
  color,
  selectedAccentColor,
  setSelectedAccentColor,
}: AccentProps) {
  /**
   * Set the accent color attribute on the body
   */
  const handleSetAccentColor = useCallback(() => {
    document.body.setAttribute("data-accent-color", color);
    setSelectedAccentColor(color);
  }, []);

  return (
    <ToggleButton
      className={style.accent}
      data-accent-color={color}
      onPress={handleSetAccentColor}
      isSelected={selectedAccentColor === color}
      aria-label={`Change accent color to ${color}`}
    />
  );
}
