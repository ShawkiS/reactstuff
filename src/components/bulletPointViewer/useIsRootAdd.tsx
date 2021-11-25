import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../types";

export const useIsRootAdd = () => {
    const [isRoot, setIsRoot] = useState(true);
    const state: State = useSelector((state: State) => state);
    
    useEffect(() => {
        setIsRoot(state.inputId === 0
            ? true : false);
    }, [state.inputId])

    return isRoot;
}