export const getFormattedDate = (input) => {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    if(input instanceof Date){ // 데이트값 전달
        
        let month = months[input.getMonth()] // 월
        let day = input.getDay()
        if (day < 10) {
            day = '0' + day
        }
        return `${month} , ${input.getFullYear()}`

    } else if(typeof input === 'string' && input.includes('-')) { // 문자 전달
        const [year, month, day] = input.split('-');
        const dayWithoutTime = day.split('T')[0];
        return {
            year: year,
            month: months[Number(month) - 1],
            day:dayWithoutTime
        };
    } else if(typeof input === 'object'&& input.year && input.month && input.day) { // 객체 전달
        return `${months[Number(input.month) - 1]} ${input.day}, ${input.year}`;
    }
    
}