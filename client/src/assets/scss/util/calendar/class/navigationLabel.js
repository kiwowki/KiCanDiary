import {getFormattedDate} from '../date/dateFormat.js'
export default function NavigationLabel(date, view) {
    const isSaturday = (date) => date.getDay() === 6;
    const tileClass = (date, view) =>
        view === 'month' && isSaturday(date) ? 'saturday' : null;
    const navigationLabel = ({ date, view }) => {
        return (
            <div className={`my-custom-navigation ${tileClass(date, view)}`}>
                <span>{getFormattedDate(date)}</span>
            </div>
        );
    }

    return { tileClass, navigationLabel}
}

