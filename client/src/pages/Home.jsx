import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import user from '../assets/img/user.png'
import { Calendar } from 'react-calendar'
import tabData from '../Data/tabData/tabData.js';
import vocaData from '../Data/tabData/vocaData.js'
const Home = () => {
    const [value, onChange] = useState(new Date())
    const [ myList, setMyList ] = useState([]);
    useEffect(() => {
        setMyList(vocaData);
      }, []);




    const [activeTab, setActiveTab] = useState('tab1')
    const TabContent = ({ title, content }) => (
        <div className="diary__tab">
        <Link to={"#"}> 
        
            <div className="tab__box box2">
                <h4 className="mb20">{title}</h4>
                <p className=''>{content}</p>
            </div>
        </Link>
        </div>
      )
    return (
        <div id="wrap">
            <aside id="aside">
                <div className="aside__wrap">
                    <div className="logo mb30rem">
                        <div className="logo__text mb10">
                            <em>kitch</em> candy
                        </div>
                        <div className="logo__img">
                            <Link to={'/'}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul className="box1">
                            <li className="pt10">
                                <Link to={'/'}>Diary</Link>
                                <ul className="aside__diary">
                                    <li>
                                        <Link to={'#'}>list</Link>
                                    </li>
                                    <li className="mb10">
                                        <Link to={'#'}>today</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={'/'}>Voca list</Link>
                            </li>
                            <li>
                                <Link to={'/'}>My page</Link>
                            </li>
                            <li className="">
                                <Link to={'/'}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user">
                        <div className="user__profile mt60">
                            <img src={user} alt="" />
                        </div>

                        <div className="user__info">
                            <span className="user__name">
                                useruser <em>님</em>
                                <br />
                            </span>
                            <span> 환영합니다.</span>
                        </div>
                    </div>
                </div>
            </aside>
            <main id="main" role="main">
                <div className="main__wrap">
                    <div className="left section__border pt70">
                        <div className="date__info">
                            <div className="date__today ml_70 mb70">
                                <span>December 07, 2023</span>
                            </div>
                            <div className="calendar">
                                <Calendar onChange={onChange} value={value} locale="en-US" />
                            </div>
                        </div>
                    </div>
                    <div className="right section__border pt50">
                        <div className="main__diary">
                            <div className="diary__list">
                                <div className="list__title mb20">
                                    <p className="whiteSpaceNo">Recent Diary</p>
                                </div>
                              
                                <div className='tabWrap'>
                                    <div className='btnWrap pr20'>
                                        {tabData.map((tab, index) => (
                                            <button className={`tab__btn mr20 ${activeTab === tab.id ? 'active' : ''}`} key={tab.id} onClick={() => setActiveTab(tab.id)}>
                                            {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                    {tabData
                                        .filter(tab => tab.id === activeTab)
                                        .map(tab => (
                                            <TabContent key={tab.id} title={tab.title} content={tab.content} />
                                        ))}
                                </div>
                                  
                            </div>
                            

                            <div className="voca__list pt100">
                                <div className="list__title mb20">
                                    <p className="whiteSpaceNo">vocabulary List</p>
                                </div>

                                { myList.map((list, key) => (
                                         <p className='my__list' key={key}>
                                            <span className='list__key pl50'>{list.key}</span>
                                            <span className='list__value'>{list.value}</span>
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
