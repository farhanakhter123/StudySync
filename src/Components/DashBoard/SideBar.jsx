import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Sidebar, MenuItem, SubMenu, Menu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dashboard } from "@mui/icons-material";
import "animate.css";

export default function SideBar() {
  const [collapsed, setCollapsed] = React.useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sideBar-dashBoard " style={{ display: "flex", height: "100vh", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", backgroundColor:"#bbbbbb", color:"#2d2d2d" }}>
      <Sidebar className="animate__animated animate__fadeInLeft" collapsed={collapsed}>
        <Menu style={{marginTop:"10px", position:"relative"}}>
          <MenuItem
            className="menu"
            icon={<MenuRoundedIcon onClick={toggle} />}
          >
          </MenuItem>
          <MenuItem style={{marginTop: "30px"}} icon={<HomeIcon />}>
            <Link to="/home"> Home</Link>
          </MenuItem>
          <MenuItem icon={<Dashboard />}>
            <Link to="/dashboard/">Dash Board</Link>
          </MenuItem>
          <SubMenu label="Courses" icon={<MenuBookIcon />}>
            <SubMenu label="Branch">
              <Link to="/dashboard/cse">
                <MenuItem>Computer Science</MenuItem>
              </Link>
              <Link>
                <MenuItem>Mechanical</MenuItem>
              </Link>
            </SubMenu>
          </SubMenu>
          <MenuItem icon={<AccountCircleIcon/>}>Account</MenuItem>
          <MenuItem style={{}} icon={<LogoutRoundedIcon />}>
            <Link>Logout</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <section></section>
      <Outlet />
    </div>
  );
}
