import { useState } from "react";

import { Accent } from "./accent";

import style from "./accents.module.css";

export function Accents() {
  /**
   * track the current accent color
   */
  const [selectedAccentColor, setSelectedAccentColor] = useState("lime");

  return (
    <div className={style.accents}>
      {[
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "sky",
        "blue",
        "indigo",
        "purple",
        "fuchsia",
        "pink",
        "brown",
      ].map((color) => {
        return (
          <Accent
            key={color}
            color={color}
            selectedAccentColor={selectedAccentColor}
            setSelectedAccentColor={setSelectedAccentColor}
          />
        );
      })}
    </div>
  );
}
