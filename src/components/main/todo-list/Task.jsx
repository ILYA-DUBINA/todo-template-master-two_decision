import React, { Component } from "react";

export default class Task extends Component{

   state = {
      completed: false,
   }
   addTaskName = () => {
      this.setState(({ completed }) => {
         return {
            completed: !completed
         }
      })
   }

   render(){
      let { id, name, description, onDeleted } = this.props;
      let { completed } = this.state;

      if(completed){
         name = ' completed';
      }
      
      return (
         <>
            <li key={id} className={name}>
               <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label onClick={ this.addTaskName }>
                     <span className="description">{description}</span>
                     <span className="created"> task created {new Date().getMinutes()} minutes ago</span>
                  </label>
                  <button className="icon icon-edit"></button>
                  <button className="icon icon-destroy" onClick={onDeleted}></button>               
               </div>
               {name === 'editing' ? <input type="text" className="edit" defaultValue="Editing task" /> : null}
            </li>
         </>
      )
   }
}

// const Task = (props) => {
   
// }

// export default Task;