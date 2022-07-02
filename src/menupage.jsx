import React from "react";

export default class MenuPage extends React.Component{

     
     state={
          menu:""
     }
   
     getMenu= async () => {
          let items = []

          const responde = await fetch("http://192.168.14.76:8080/menu/get")
          const data = await responde.json();
          data.forEach((e)=>items.push(e));
          console.log(items);
          this.setState({
               menu: items.map(i=>(
                    <div className="flex space-x-3 mb-5 border w-96">
                         <div className="shrink-0 ">
                              <img src="https://img.pizza/100/100" alt="mmm pizza"/>     
                         </div>
                         <div className="">
                              <span key={i.name + i.id}>{i.name}</span><br/>
                              <span>price: {i.price}</span><br/>
                              <span>description: {i.description}</span>
                         </div>  
                         
                    </div>
               ))
               })
          }


     componentDidMount(){
          this.getMenu()
     }
     

     render(){
          return(<div>{this.state.menu}</div>)
     }
}