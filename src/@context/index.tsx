import { createContext, FunctionComponent, useEffect, useState } from "react";
import { GetAnime } from "../@api";
import { propsCardData, PropsContext } from "../interface";
import { ApiDataExtrace } from "../utils";

export const UseContext = createContext<any>(null);

export const WrappContext: FunctionComponent<PropsContext> = (props) => {
  const { children } = props;
  const [state, setState] = useState<propsCardData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await GetAnime();
        const extract = ApiDataExtrace(data);
        setState(extract);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return <UseContext.Provider value={state}>{children}</UseContext.Provider>;
};
