import logo from "../../assets/logo.svg";
import dropDownIcon from "../../assets/chevron-down.svg";
import home from "../../assets/home.svg";
import cloud from "../../assets/cloud.svg";
import code from "../../assets/code.svg";
import setting from "../../assets/gear.svg";
import book from "../../assets/book.svg";
import phone from "../../assets/phone.svg";
import signout from "../../assets/sign-out.svg";
import menu from "../../assets/bars.svg";
import close from "../../assets/close.svg";
import "./Sidebar.css"
import { useEffect, useRef, useState } from "react";

interface sidebarList {
    title: string,
    logo: string
}

const Sidebar = () => {
    const [toggle ,  setToggle] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null)
    const sidebarList: sidebarList[] = [


        { title: "Repositories", logo: home },
        { title: "AI Code Review", logo: code },
        { title: "Cloud Security", logo: cloud },
        { title: "How to Use", logo: book },
        { title: "Settings", logo: setting },
    ]

    const updateSidebarWidth = () => {
   console.log(sidebarRef.current?.offsetWidth)
        if (sidebarRef.current && sidebarRef.current?.offsetWidth < 250) {
           setToggle(!toggle)
        } else {
            console.log("updating to flse")
          setToggle(true);
        }
      };
    

useEffect(() => {
    updateSidebarWidth();

    const handleResize = () => {
      updateSidebarWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
},[])
    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className="sidebar-header">
                <div className="sidebar-branding ">
                    <img src={logo} alt="logo" className="sidebar-logo" />
                    <h1 className="sidebar-title">CodeAnt AI</h1>
                    <img src={!toggle ? menu : close} alt="menu"  className="sidebar-toggler"
                    onClick={() => setToggle(!toggle)}
                    />
                </div>
                { 
               toggle &&
                <div className="sidebar-user">
                    <h3 className="sidebar-username"> UtkarshDhairyaPanwar</h3>
                    <img src={dropDownIcon} alt="drop-down-icon" className="sidebar-drop-icon" />
                </div>
}
            </div>
            <ul className="sidebar-list">
                { toggle && 
                    sidebarList?.map((item, index) => {
                        return (
                            <li className={index === 0 ? "sidebar-item sidebar-item__active" : "sidebar-item"} key={index}>
                                <a  className="sidebar-link">
                                    <img src={item.logo} alt={item.title} className="sidebar-icon" />
                                    <span className="sidebar-text">{item.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            {toggle && 
            <div className="sidebar-footer">
                <div className="sidebar-footer-item">
                    <img src={phone} alt="call-icon" className="sidebar-icon" />
                    <p className="sidebar-footer-text">Support</p>
                </div>
                <div className="sidebar-footer-item">
                    <img src={signout} alt="signout-icon" className="sidebar-icon" />
                    <p className="sidebar-footer-text">Logout</p>
                </div>
            </div> 
}


        </div>
    )

}

export default Sidebar;