import { useState } from "react"


function Toggle({setToggle , toggle}){
    function handleToggle(){
        setToggle(!toggle)
    }
    return(
        <div className="flex w-[80%] justify-center items-center gap-3">
           <h2 className=" font-semibold text-lg text-[#525050]">Annually</h2>
           <div className="w-[40%] h-10 bg-purple-400 rounded-3xl relative lg:w-[12%] lg:h-10 lg:pr-1  md:w-[15%] md:pr-1 md:pl-14">
            <div onClick={handleToggle} className={`w-[30%] h-9 bg-white rounded-3xl absolute top-[2px] ${(toggle) ? ("left-[5%]") : ("left-[63%]")}  transition-all duration-200 lg:w-[30%] lg:h-9 md:w-[30%]`}></div>
           </div>
           <h2  className=" font-semibold text-lg text-[#525050]">Monthly</h2>
        </div>

    )
}

export default Toggle