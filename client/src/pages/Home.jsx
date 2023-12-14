import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Home = () => {
    return (
        <div id="wrap">
            <aside id="aside">
                <div className="aside__wrap">
                    <div className="logo mb50rem">
                        <div className="logo__text mb10">
                            <em>kitch</em> candy
                        </div>
                        <div className="logo__img">
                            <Link to={"/"}>
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul className="box">
                            <li>
                                <Link to={"/write"}>Diary</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Voca list</Link>
                            </li>
                            <li>
                                <Link to={"/"}>My page</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user">
                        <img src="" alt="" />
                        <div className="user__info">
                            <em>user</em> 님 환영합니다.
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Home;
