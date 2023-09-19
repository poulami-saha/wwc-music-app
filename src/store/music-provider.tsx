import { PropsWithChildren, useEffect, useState } from "react";
import React from "react";

export type viewportType = {
  width: number;
  height: number;
  breakpoint: number;
};
export const ViewportContext = React.createContext<viewportType>({
  width: 0,
  height: 0,
  breakpoint: 0,
});

const ViewportProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 620;

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height, breakpoint }}>
      {children}
    </ViewportContext.Provider>
  );
};
export default ViewportProvider;
