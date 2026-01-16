import {add,mutiply,sub} from "./math.js";
import { getcacheresult } from "./cache.js";

const calcContext = {
  name: "basic-calculator"
};

const total=add(20,10);
const mutitotal=mutiply(20,10);
const subtra=sub(20,10);

console.log("addition=",total);
console.log("mutiply=",mutitotal);
console.log("sub=",subtra);


const heavyresult=getcacheresult(calcContext,()=>{
    let count=0;
    for(let i=0;i<10;i++){
        count+=i;
    }
     return count;
})

console.log("Cached Result:", heavyresult);