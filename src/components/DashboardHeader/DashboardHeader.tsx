import "./DashboardHeader.css";
import search from "../../assets/search.svg";
import plus from "../../assets/plus.svg";
import refresh from "../../assets/refresh.svg";

const DashboardHeader = () => {
return (
    <>
    <div className="dashboardheader">
    <div className="dashboardheader-banner">
        <div className="dashboardheader-title">
             <h1>Repositories</h1>
             <span>33 total repositories</span>
        </div>
        <div className="dashboardheader-buttons">
           <button className="dashboardheader-button">
            <img src={refresh} alt="btn-icon" className="dashboardheader-icon" />
            <p>Refresh All</p>
           </button>
           <button className="dashboardheader-button dashboardheader-button-fill">
            <img src={plus} alt="btn-icon" className="dashboardheader-icon" />
            <p>Add Repository</p>
           </button>
        </div>
    </div>
    <div className="dashboardheader-input">
        <img src={search} alt="search-icon" className="sidebar-icon search-icon" />
        <input type="text" className="dashboardheader-search" placeholder="Search Repositories" />
    </div>
    </div>
    </>
)
}

export default DashboardHeader