import React, { useEffect, useState } from 'react'
import tabData from '../Data/tabData/tabData'
import vocaData from '../Data/tabData/vocaData'
import { Link } from 'react-router-dom'
import face from '../assets/img/pink-18.gif'

const RightInfo = () => {
    const [myList, setMyList] = useState([])
    useEffect(() => {
        setMyList(vocaData)
    }, [])

    const [activeTab, setActiveTab] = useState('tab1')
    const TabContent = ({ title, content }) => (
        <div className="diary__tab">
            <Link to={'#'}>
                <div className="tab__box box2">
                    <h4 className="mb20">{title}</h4>
                    <p className="">{content}</p>
                </div>
            </Link>
        </div>
    )
    return (
        <div className="right pt50">
            <div className="main__diary">
                <div className="diary__list">
                    <div className="list__title mb30">
                        <p className="whiteSpaceNo">Recent Diary</p>
                    </div>

                    <div className="tabWrap">
                        <div className="btnWrap pr10">
                            {tabData.map((tab, index) => (
                                <button
                                    className={`tab__btn mr10 ${
                                        activeTab === tab.id ? 'active' : ''
                                    }`}
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        {tabData
                            .filter((tab) => tab.id === activeTab)
                            .map((tab) => (
                                <TabContent
                                    key={tab.id}
                                    title={tab.title}
                                    content={tab.content}
                                />
                            ))}
                    </div>
                </div>

                <div className="voca__list pt6rem">
                    <div className="list__title mb20">
                        <div className="tit">
                            <p className="whiteSpaceNo">vocabulary List</p>
                        </div>
                        <div className="voca__img">
                            <img src={face} alt="" />
                        </div>
                    </div>
                    <div className="all__list">
                        {myList.map((list, key) => (
                            <p className="my__list" key={key}>
                                <span className="list__key pl50">
                                    {list.key}
                                </span>
                                <span className="list__value">
                                    {list.value}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightInfo
