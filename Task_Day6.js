// Task 1: User → Admin Class Hierarchy

class user{
    constructor(username){
        this.username=username;
    }

    login(){
        return `${this.username} is logged in`
    }
}

class admin extends user{
    constructor(username,role){
        super(username);
        this.role=role;
    }

    deleteaccount(){
        return `account deleted `
    }
}

const normalUser = new user("Shivaji");
const normalAdmin=new admin("saurabh");
console.log(normalUser.username);  
console.log(normalUser.login()); 
console.log(normalAdmin.username);
console.log(normalAdmin.deleteaccount());



//Task 2: Implement Private Fields

class secureuser{
    password;
    constructor(name,pass){
        this.name=name;
         this.password=pass;
    }

    checkpass(input){
        return this.password===input;
    }
}

const pass1=new secureuser("shiva123");
console.log(pass1.checkpass());





//Task 3: Prototype-Based Utility Functions


function StringUtil(str){
     this.str=str 
}

StringUtil.prototype.capital=function(){
    return this.str.charAt(0).toUpperCase()
}

StringUtil.prototype.reverse = function () {
  return this.str.split("").reverse().join("");
};


const s = new StringUtil("shivaji");
console.log(s.capital());
console.log(s.reverse());


