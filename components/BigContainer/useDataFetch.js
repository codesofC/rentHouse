import { dataFetch } from ".";
import { useContext } from "react";

export const useDataFetch = () => {
    const context = useContext(dataFetch)

    if(!context){
        throw new Error("useDataFetch must be used wiithin DataFetch")
    }

    return context
}