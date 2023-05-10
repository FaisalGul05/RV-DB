import React, { useState } from "react";

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [screenType, setScreenType] = useState("INITIAL");

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 960) {
      setScreenType("DESKTOP");
    } else if (window.innerWidth <= 960) {
      setScreenType("TABLET");
    }
  };

  return {
    windowWidth,
    screenType,
  };
};
