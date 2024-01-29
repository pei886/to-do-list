// import "./App.css"
// import { NavBar } from "./components/NavBar/NavBar";
// // import ListGroup from "./components/ListGroup";

// // function App() {
// //   let cities = ["New York", "Shanghai", "San Francisco", "London", "Paris"];

// //   const handleSelectItem = (city: string) => {
// //     console.log(city)
// //   }

// //   return <div><ListGroup items = {cities} heading="Cities" onSelectItem={handleSelectItem}/></div>;
// // }

// // export default App;

// import TaskList from "./components/TaskList";

// function App() {

//   return (
//     <div className="App">
//       <NavBar />
//       <TaskList />
//     </div>
//   )
// }

// export default App;

import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import Layout from './components/Layout'
import AddTask from './components/AddTask'
import { NavBar } from './components/NavBar/NavBar'
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element={<Layout />} />
            <Route path = "/mytasks" element = {<TaskList />} />
            <Route path = "/add" element = {<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App