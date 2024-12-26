
import LoginInfo from "../../components/LoginInfo/LoginInfo"
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import gitlab from "../../assets/gitlab.svg";
import azure from "../../assets/azure.svg";
import bitbucket from "../../assets/bitbucket.svg";
import key from "../../assets/key.svg";

import "./Login.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <>
            <div className="login">
                <LoginInfo />
                <div className="login-col-2">
                    <div className="login-box">
                        <div className="login-form">


                            <div className="login-welcome">
                                <div className="login-branding">
                                    <img src={logo} alt="logo" className="sidebar-logo" />
                                    <h1 className="sidebar-title">CodeAnt AI</h1>

                                </div>
                                <h2 className="login-heading">Welcome to CodeAnt AI</h2>
                                <div className="login-toggle">
                                    <button className={` login-btn-toggle  ${toggle && "login-btn-active"}`} onClick={() => setToggle(true)}>SASS</button>
                                    <button className={`login-btn-toggle ${!toggle && "login-btn-active"}`} onClick={() => setToggle(false)}>Self Hosted</button>
                                </div>
                            </div>
                            <div className="login-options">
                             {toggle &&   <>
                                    <Link to="/Home">
                                        <button className="login-button">
                                            <img src={github} alt="github" className="login-button-image" />
                                            <p className="login-button-text">Sign in with Github</p>
                                        </button>
                                    </Link>
                                    <Link to="/Home">
                                        <button className="login-button">
                                            <img src={bitbucket} alt="bitbucket" className="login-button-image" />
                                            <p className="login-button-text">Sign in with Bitbucket</p>
                                        </button>
                                    </Link>
                                    <Link to="/Home">
                                        <button className="login-button">
                                            <img src={azure} alt="azure" className="login-button-image" />
                                            <p className="login-button-text">Sign in with Azure Devops</p>
                                        </button>
                                    </Link>
                                    <Link to="/Home">
                                        <button className="login-button">
                                            <img src={gitlab} alt="gitlab" className="login-button-image" />
                                            <p className="login-button-text">Sign in with GitLab</p>
                                        </button>
                                    </Link>
                                </>
                                }
                                {!toggle && (
                                    <>
                                        <Link to="/Home">
                                            <button className="login-button">
                                                <img src={gitlab} alt="gitlab" className="login-button-image" />
                                                <p className="login-button-text">Self Hosted GitLab</p>
                                            </button>
                                        </Link>
                                        <Link to="/Home">
                                            <button className="login-button">
                                                <img src={key} alt="SSO" className="login-button-image" />
                                                <p className="login-button-text">Sign in with SSO</p>
                                            </button>
                                        </Link>
                                    </>
                                )}


                            </div>
                        </div>
                        <span className="login-terms">By signing up you agree to the <span className="login-privacy">Privacy Policy</span>.</span>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login;