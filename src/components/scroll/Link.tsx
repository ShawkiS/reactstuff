import * as React from "react";
import { CSSProperties, useEffect } from "react";
import { scrollToSection, updateUrlHash } from "../../utils";
import useInView from "./useInView";

type Props = {
  style?: CSSProperties;
  sectionId: string;
  section: any;
  activeClass: string;
  children: React.ReactNode;
};

const Link = React.forwardRef<HTMLDivElement, Props>(
  ({ children, sectionId, section, activeClass, ...props }) => {
    let isView = useInView(section);

    useEffect(() => {
      if (isView) {
        updateUrlHash(`#${sectionId}`);
      }
    }, [isView]);

    const scroll = () => scrollToSection(section);

    return (
      <a className={isView ? `${activeClass}` : ""} onClick={scroll} {...props}>
        {children}
      </a>
    );
  }
);

export default Link;