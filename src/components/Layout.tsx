import { Outlet, Link } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";

const Layout = () => {
  return (
    <>
        <NavBar />
        <h1>Hi, welcome!</h1>
        <h5>You can add new tasks and details of the tasks in "Add Task" function from the navigation bar above.
        </h5>
        <></>
        <h5>
          You can also see your current tasks in the "My Tasks" function from the navigation bar above.
        </h5>
    </>
  )
};

export default Layout;