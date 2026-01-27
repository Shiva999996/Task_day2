// 1. Implement an event bus. 
class EventBus{
    constructor(){
        this.events={};
    }

    on(event,handler){
        (this.events[event] ||=[]).push(handler);
    }

     off(event,handler){
        this.events[event]=(this.events[event] || [])
        .filter(h=> h !==handler)
     }

     emit(event,data){
        (this.events[event] || []).forEach(fn=> fn(data)) 
     }
}

//usage
const bus=new EventBus();

bus.on("login",user=>console.log("user logged:",user));
bus.emit("login",{name:"shivaji"});



// 2.Create a factory for dynamic component creation.

class ComponentFactory{
    constructor(){
        this.components={};
    }

    register(type,component){
        this.components[type]=component;
    }

    create(type,props){
        return new this.components[type](props);
    }
}

class Button{
    constructor(props){
        this.text=props.text;
    }
    render(){
        return `<button>${this.text}</button>`
    }
}

class Input{
    constructor(props){
        this.placeholder=props.placeholder;
    }
    render(){
        return `<input placeholder="${this.placeholder}"/>`;
    }
}


const factory = new ComponentFactory();
factory.register("button", Button);
factory.register("input", Input);

const btn = factory.create("button", { text: "Submit" });
const input=factory.create("input",{placeholder:"king shiva"})
console.log(btn.render());
console.log(input.render());
