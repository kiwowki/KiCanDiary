import { useState } from 'react'

const useMonthNav = (initialDate) => {
    const [currentDate, setCurrentDate] = useState(initialDate || new Date())
    const [monthAnima, setMonthAnima] = useState(false)
    const [prevDate, setPrevDate] = useState(null)

    const handleNextMonth = () => {
        setMonthAnima(true)
        setPrevDate(currentDate)
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate)
            newDate.setMonth(newDate.getMonth() + 1)
            return newDate
        })
    }
    const handlePrevMonth = () => {
        setMonthAnima(true)
        setPrevDate(currentDate)
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate)
            newDate.setMonth(newDate.getMonth() - 1)

            return newDate
        })
    } // 보고 있는 다이어리 리스트들을 월 단위로 정리해두는데, 해당 월을 가르킴
    // 버튼 값에 따라 월이 변함

    return {
        currentDate,
        handleNextMonth,
        handlePrevMonth,
        monthAnima,
        setMonthAnima,
        prevDate,
    }
}
export default useMonthNav