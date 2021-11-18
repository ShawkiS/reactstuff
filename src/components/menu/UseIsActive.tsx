import { useEffect, useState } from "react"
import { useMenuDetails } from "./menuProvider";

export const useIsActive = (id: string) => {
    const context = useMenuDetails();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [style, setStyle] = useState<React.CSSProperties>();

    useEffect(() => {
      const activeStatus = context?.selectedItem === id;
      setIsActive(activeStatus);
      setStyle(activeStatus ? context.isActiveStyle : context.notActiveStyle)
    }, [context.selectedItem])

    return [isActive, style];
  }