import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NewTaskForm from './components/header/NewTaskForm';
import Footer from './components/main/footer/Footer';
import TaskList from './components/main/todo-list/TaskList';

class AppContent extends Component {
   state = {
      arrayElements: [
         {name: '', description: 'Completed task', id: 1},
         {name: 'editing', description: 'Editing task', id: 2},
         {name: '', description: 'Active task', id: 3}
      ]
   }

   deletedItem = (id) => {
      this.setState(({ arrayElements }) => {
         const newArrayElements = arrayElements.filter((item) => id !== item.id);
         // const idx = arrayElements.findIndex((el) => el.id === id);
         // const [...newArrayElements] = arrayElements; 
         // newArrayElements.splice( idx, 1 );
         
         return {
            arrayElements: newArrayElements
         }
      })
   }

   render (){
      return (
         <>
            <NewTaskForm />
            <section className="main">
               <TaskList 
               todos={this.state.arrayElements}
               onDeleted={this.deletedItem}/>
               <Footer />
            </section>
         </>
      );
   }   
}

// const App = () => {
//    return (

//    )
// }

const root = ReactDOM.createRoot(document.querySelector('.todoapp'));
root.render(<AppContent/>);

