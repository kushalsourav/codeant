import DashboardCard from "../DashboardCard/DashboardCard";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Dashbord.css"
const Dashboard = () => {
    const data = [
        {
          name: "design-system",
          visibility: "Public",
          language: "React",
          size: 7320,
          updated: 1
        },
        {
          name: "codeant-ci-app",
          visibility: "Private",
          language: "Javascript",
          size: 5871,
          updated: 2
        },
        {
          name: "analytics-dashboard",
          visibility: "Private",
          language: "Python",
          size: 4521,
          updated: 5
        },
        {
          name: "mobile-app",
          visibility: "Public",
          language: "Swift",
          size: 3096,
          updated: 3
        },
        {
          name: "e-commerce-platform",
          visibility: "Private",
          language: "Java",
          size: 6210,
          updated: 6
        },
        {
          name: "blog-website",
          visibility: "Public",
          language: "HTML/CSS",
          size: 1876,
          updated: 4
        },
        {
          name: "social-network",
          visibility: "Private",
          language: "PHP",
          size: 5432,
          updated: 7
        }
      ];
      
    return(
        <div className="dashboard">
            <div className="dashboard-container">
            <DashboardHeader />
        {data?.map((detail, index) => {
           const {name, visibility, language, size, updated } = detail
            return     <DashboardCard  name={name} visibility={visibility} language={language} size={size} updated={updated} index={index}/>
        })}
            </div>
    
        </div>
    )
}

export default Dashboard;