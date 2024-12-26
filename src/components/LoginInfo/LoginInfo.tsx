import logo from "../../assets/logo.svg";
import stats from "../../assets/stats.svg";
import arrowup from "../../assets/small-right.svg";
import subtract from "../../assets/Subtract.svg";
import "./LoginInfo.css";


const LoginInfo = () => {
    return(

        <div className="login-info">
        <img src={subtract} alt="login-subtract" className="login-subtract" />
           <div className="login-info-card-1">
           <div className="login-branding">
                    <img src={logo} alt="logo" className="login-branding-logo" />
                    <h1 className="login-branding-title">AI to Detect & Autofix Bad Code</h1>
            </div>
            <div className="login-info-card-body">
                <div className="card-body-info">
                     <h4>30+</h4>
                     <span>Language Support</span>
                </div>
                <div className="card-body-info">
                <h4>10K+</h4>
                <span>Developers</span>
                </div>
                <div className="card-body-info">
                <h4>100K+</h4>
                <span>Hours Saved</span>
                </div>
            </div>
           </div>
           <div className="login-info-card-2">
            <img src={stats} alt="stats" className="login-stats-logo" />
            <div className="login-info-card-body-2">
                <img src={arrowup} alt="arrow up" className="login-arrowup-logo" />
                <p className="login-text">14%</p>
                <span className="login-span">This week</span>
            </div>
            <div>
                    <p className="login-text-issue">Issues Fixed</p>
                    <span className="login-text-500">500K+</span>
                </div>
            </div>
          
        </div>
    )
}

export default LoginInfo;