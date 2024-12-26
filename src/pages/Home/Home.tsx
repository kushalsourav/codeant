import Dashboard from "../../components/Dashboard/Dashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
 return(
    <>
    <div className="home-page">
    <Sidebar />
    <Dashboard />
    </div>
</>
 )
}

export default Home;