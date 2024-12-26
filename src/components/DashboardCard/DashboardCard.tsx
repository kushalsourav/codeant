import "./DashboardCard.css";
import ellipse from "../../assets/Ellipse 1.svg";
import database from "../../assets/database.svg";
interface CardDetails {
    name : string;
    visibility: string;
    language: string;
    size: number;
    updated: number
    index: number
}


const DashboardCard = ({name, visibility, language, size, updated, index } : CardDetails) => {

    return (
        <>
        <div className="dashboardcard" key={index}>
            <div className="dashboardcard-header">
                <h4 className="dashboardcard-title">
                     {name}
                </h4>
                <span className="dashboardcard-visibility">{visibility}</span>
            </div>
            <div className="dashboardcard-info">
                <p className="dashboardcard-language">{language} <img src={ellipse} alt="dot" className="dashboardcard-dot"/></p>
                <span className="dashboardcard-size">
                    <img src={database} alt="database" className="dashboardcard-icon" />
                    <p className="dashboardcard-text">{size} KB</p>
                </span>
                <p className="dashboardcard-updated">
                 Updated {updated} {updated > 1 ? "days" : "day"} ago
                </p>
            </div>
        </div>
        </>
    )
}

export default DashboardCard;