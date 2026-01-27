import { useEffect, useState } from "react";

 export const useFetch=(url)=>{

  const[data,setData]=useState(null);
  const[loading,setLoading]=useState(false);
  const[errors,seterrors]=useState(null);

  useEffect(()=>{

    if(!url)
      return;

      const controller=new AbortController();

      async function  fetchData() {
        setLoading(true);

        try{
          const res=await fetch(url,{signal:controller.signal});
          if(!res.ok) throw new Error("fetch failed");

          const json=await res.json();
          setData(json);
          seterrors(null);
        }
      catch (err) {
        if (err.name !== "AbortError") {
          seterrors(err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    //cleanup 
    return () => controller.abort();
  }, [url]);

  return { data, loading, errors };
};