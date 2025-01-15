import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrollto = () => {

    const {pathname} = useLocation();

    //console.log(useLocation());
    useEffect(() => {

      if(pathname === "/"){
        return;
      }else{
        window.scroll(0,0);
      }

        

    }, [pathname])
    

  return null;
}

export default Scrollto;