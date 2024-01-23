import { Link, useMatch } from 'react-router-dom'

const navigation = () => {
    const NavLink = ({ to, data, children }) => {
        const match = useMatch(to)

        return (
            <li>
                <Link
                    to={to}
                    data-first-letter={data}
                    className={match ? 'active' : ''}
                >
                    {children}
                </Link>
            </li>
        )
    }

    const LoginLink = ({ to, data, children }) => {
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
