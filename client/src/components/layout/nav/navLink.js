import { Link, useLocation, useMatch } from 'react-router-dom'

const navigation = () => {
    const NavLink = ({ to, data, children }) => {
        const location = useLocation()
        let isActive

        if (to === '/') {
            isActive = location.pathname === to
        } else {
            isActive = location.pathname.includes(to)
        }

        return (
            <li>
                <Link
                    to={to}
                    data-first-letter={data}
                    className={isActive ? 'active' : ''}
                >
                    {children}
                </Link>
            </li>
        )
    }

    const LoginLink = ({ to, children }) => {
        const match = useMatch(to)

        return (
            <li>
                <Link to={to} className={match ? 'active' : ''}>
                    {children}
                </Link>
            </li>
        )
    }
    return { NavLink, LoginLink }
}

export default navigation
