const resultcache=new WeakMap();

function getcacheresult(obj,cal){
    if(resultcache.has(obj)){
        return resultcache.get(obj);
    }

    const result=cal();
    resultcache.set(obj,result)
   return result;
}

export{getcacheresult};