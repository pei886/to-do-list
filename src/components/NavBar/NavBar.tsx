import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import TaskList from '../TaskList'
import AddTask from '../AddTask'
import Layout from '../Layout'

export const NavBar = () => {
  return (
        <>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/mytasks">My Tasks</Link>
            </li>
            <li>
            <Link to="/add">Add Task</Link>
            </li>
        </ul>
        </nav>
    </>


  )
}

  