import { useEffect, useMemo } from 'react'
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom'

const navigation = () => {
    const NavLink = ({ to, data, children }) => {
       
        const location = useLocation()   
        const isActive = useMemo(() => {
            if (to === '/') {
                return location.pathname === to;
            } else {
                return location.pathname.includes(to);
            }
        },[location.pathname, to])

        useEffect(() => {
            if (isActive) {
                console.log(location.pathname);
            }
        }, [location.pathname, isActive]);

        return (
            <li>
                <Link
                    to={{
                        pathname: to,
                        state: {prev: location.pathname}
                    }}
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
