import { useEffect, useState } from "react";
import { getScrollPercentage } from "../../utils";

export default function useScrollPercentage(body: any) {
  const [scrollPercentage, setScrollPercentage] = useState("0%");

  const handleScroll = () => {
    setScrollPercentage(getScrollPercentage(body));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return scrollPercentage;
}
