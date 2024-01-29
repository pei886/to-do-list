import { Outlet, Link } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";

const Layout = () => {
  return (
    <>
        <NavBar />
        <h1>Hi, welcome!</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dui cursus, 
            iaculis ligula at, pretium tellus. Etiam blandit purus nulla, a feugiat purus eleifend 
            sit amet. Maecenas vitae ligula porta odio sodales volutpat a nec purus. Praesent quis 
            mattis metus, et consectetur nulla. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Maecenas molestie arcu eu dolor vehicula viverra. Curabitur ut purus sodales, 
            pharetra diam ac, dignissim erat. Donec non risus eu est pharetra mollis a ac leo. 
            Etiam ex erat, gravida ac eleifend sed, feugiat eu tortor. Nullam lacus sapien, 
            elementum vitae lectus at, accumsan efficitur libero. Suspendisse potenti. Integer
             et dui ut purus suscipit placerat quis eu orci.</h5>
    </>
  )
};

export default Layout;