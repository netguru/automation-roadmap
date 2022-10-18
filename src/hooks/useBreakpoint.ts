import { useEffect, useState } from "react";
import { Media, size } from "styles/responsive";

const getDeviceConfig = (width: number): Media => {
  if (width < parseInt(size.tablet, 10)) {
    return "mobile";
  }
  if (width < parseInt(size.desktop, 10)) {
    return "tablet";
  }
  return "desktop";
};

const useBreakpoint = (): Media => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    };
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
