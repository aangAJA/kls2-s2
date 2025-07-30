"use client"

import { ButtonSuccess, ButtonWarning, ButtonDanger,ButtonAmba, Nigg, Waw } from "../componen/button";

const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           <ButtonAmba type="button" className="ml-2" onClick={() => alert("amba got click!")}>
              ambaton
           </ButtonAmba>
           <Nigg type="button" className="ml-2" onClick={() => alert("night got click!")}>
              nigg
           </Nigg>
           <Waw type="button" className="ml-2" onClick={() => alert("uwaw got click!")}>
              waw
           </Waw>
       </div>
   )
}

export default TestButton;
