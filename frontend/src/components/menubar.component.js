import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import { SiteTitle } from "./constants.component";

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Trending Topics', path: '/trending-topics' },
                { label: 'Categories', path: '/categories' },
                { label: 'Membership', path: '/membership' },
                { label: 'Say hello', path: '/say-hello' },
            ],
        };
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        const { items } = this.state;

        return (
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt={SiteTitle}/>
                        <span className="ml-3 text-xl">{SiteTitle}</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        {items.map(({ label, path }) => (
                            <MenuItem key={label} label={label} path={path} />
                        ))}
                    </nav>
                    <Link to="/signup" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">Join us
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        );
    }
}

export default MenuBar;

const MenuItem = ({ label, path }) => {
    return (
        <Link to={path} className="mr-5 hover:text-gray-900">
            {label}
        </Link>
    );
}