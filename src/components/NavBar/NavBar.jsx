
import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";


const NavBar = () => {

    const[open,setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
      
      
    return (
        <nav>
            <div className="md:hidden"  onClick={()=>setOpen(!open)} >
                {
                    open=== true ? <ImCross className="text-xl "></ImCross>:<IoMdMenu className="text-xl "></IoMdMenu>
                }
              
            </div>
            <ul className="md:flex">
            {
                routes.map(route=><Link key={route.id} route = {route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;