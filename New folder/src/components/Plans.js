import AnnualCard from "./AnnualCard"
import MonthlyCard from "./MonthlyCard"

function Plans({toggle}){
    console.log(toggle)
    if(toggle==true){
        return(<AnnualCard/>)
    }
    else{
        return(<MonthlyCard/>)
    }
    
}

export default Plans