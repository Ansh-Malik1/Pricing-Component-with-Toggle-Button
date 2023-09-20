import {data} from "../data"
import Card from "./Basic";
function AnnualCard(){
    let filterData={}
    function getData(data){
        data.forEach(element => {
            if(element.id=="annually"){
                filterData={...element}
            }
        });
    }
    getData(data)
    return(
        <div className=" flex flex-col w-[100%] gap-5 lg:flex-row lg:justify-center lg:gap-0 lg:w-[80%] lg:mx-auto">
          <Card price={filterData.basic.price} storage={filterData.basic.storage} users={filterData.basic.users} send={filterData.basic.send} title="Basic"/>
          <Card price={filterData.proffessional.price} storage={filterData.proffessional.storage} users={filterData.proffessional.users} send={filterData.proffessional.send} title="Proffessional"/>
          <Card price={filterData.master.price} storage={filterData.master.storage} users={filterData.master.users} send={filterData.master.send} title="Master"/>
         
        </div>
    )

}

export default AnnualCard