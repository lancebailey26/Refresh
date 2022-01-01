import React, {useState} from "react";
import './MainNavigation.css'
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop"

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerOpen] = useState(false)
    
    const openDrawer = () => {
        setDrawerOpen(true)
    }
    const closeDrawer = () => {
        setDrawerOpen(false)
    }
return (
    <>
    {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
    {drawerIsOpen &&
    <SideDrawer onClick={closeDrawer}>
     
        <nav className="main-navigation__drawer-nav">
            <NavLinks />
        </nav>
    </SideDrawer>
    }
    <MainHeader>
    <button className='main-navigation__menu-btn' onClick={openDrawer}>
        <span />
        <span />
        <span />
    </button>
    <h1 className='main-navigation__title'>
       <Link to='/'> YourPlaces </Link>
    </h1>
    <nav className="main-navigation__header-nav">
       <NavLinks />
    </nav>
</MainHeader>
</>)
}

export default MainNavigation