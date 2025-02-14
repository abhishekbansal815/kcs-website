"use client"

import { createContext, useState } from "react";

interface ColorContextType {
  lineColor: string;
  setLineColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorContext = createContext<ColorContextType | null>(null);

const ColorProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [lineColor, setLineColor] = useState("red");

  return (
    <ColorContext.Provider value={{ lineColor, setLineColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;