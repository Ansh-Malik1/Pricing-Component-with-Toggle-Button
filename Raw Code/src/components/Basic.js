

function Card(props){
    const price = props.price
    const storage =props.storage
    const users =props.users
    const send =props.send
    const title =props.title
    console.log(price , storage , users , send ,title )
    return(
        <div className={`w-[90%] rounded-2xl mx-auto flex flex-col items-center gap-2 shadow-lg  shadow-gray-600  ${(title=="Proffessional") ?(" bg-gradient-to-b from-[#a3a8f0] to-[#898eeb] bg-contain bg-opacity-75 z-10 text-white"):("bg-white")} py-2 lg:gap-4 lg:mt-5 lg:${(title=="Proffessional") ? ("scale-105") :("scale-100")}`}>
            <h3 className={`font-bold mt-3 text-lg ${(title=="Proffessional") ? ("text-white  opacity-100") : ("text-[#494C5F]  opacity-60")}` }>{title}</h3>
            <div className="w-[80%] bg-slate-300 h-[2px]"></div>
            <h1 className={` font-bold text-5xl ${(title=="Proffessional") ? ("text-white") : ("text-[#494C5F]")}`}>{price}</h1>
            <div className="w-[80%] bg-slate-300 h-[2px]"></div>
            <p className={` font-semibold   ${(title=="Proffessional") ? ("text-white") : ("text-[#494C5F]")}`}><span>{storage}</span> Storage</p>
            <div className="w-[80%] bg-slate-300 h-[2px]"></div>
            <p className={` font-semibold  ${(title=="Proffessional") ? ("text-white") : ("text-[#494C5F]")}`}>{users} Users Allowed</p>
            <div className="w-[80%] bg-slate-300 h-[2px]"></div>
            <p className={` font-semibold ${(title=="Proffessional") ? ("text-white") : ("text-[#494C5F]")} `}>Send upto <span>{send} data</span></p>
            <div className="w-[80%] bg-slate-300 h-[1px]"></div>
            <button className={` ${(title=="Proffessional") ? ("bg-white text-blue-500"):("bg-blue-500 text-white")}  px-4 py-2 rounded-md font-semibold mt-3 mb-3`}>Learn More</button>
        </div>
    )
}

export default Card