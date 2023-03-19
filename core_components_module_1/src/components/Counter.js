import React,{useState} from "react"; 
let element = React.createElement
let defaultValue = 0;

function Counter() {
    const [counterValue,setCounter] = useState(defaultValue)
    function increment(){
        setCounter (defaultValue++)
    }
    function Button(props){
      return element('button',{onClick:props.clickHandler},props.name);
    }
    function decrement(){
        setCounter (defaultValue--)
    }
  return React.createElement('div',null,
  element(Button,{clickHandler:increment,name:'Increment'},null),
  element(Button,{clickHandler:decrement,name:'Decrement'},null),
  element('p',null,counterValue))
}
export default Counter;
