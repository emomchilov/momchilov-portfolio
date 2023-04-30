import { useEffect, useState } from "react";

const breakpoints = {
  0: "isMobile",
  940: "isDesktop",
  1024: "isDesktop",
};

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 940) {
      setBreakPoint(breakpoints[0]);
    }
    if (940 < windowSize.width && windowSize.width < 1024) {
      setBreakPoint(breakpoints[940]);
    }
    if (windowSize.width >= 1024) {
      setBreakPoint(breakpoints[1024]);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;
