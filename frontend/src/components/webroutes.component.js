import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import TrendingTopics from '../pages/trending-topics';
import CategoriesPage from "../pages/categories";
import SayHelloPage from "../pages/say-hello";
import MembershipPage from "../pages/membership";
import SingleBlogPage from "../pages/singleblog";
import PostByCategoryPage from "../pages/postsbycategory";
import SignUpPage from "../pages/signup";
import SignInPage from "../pages/signin";

const theRoutes = [
    {
        element: <HomePage/>,
        link: '/'
    },
    {
        element: <AboutPage/>,
        link: '/about'
    },
    {
        element: <TrendingTopics/>,
        link: '/trending-topics'
    },
    {
        element: <CategoriesPage/>,
        link: '/categories'
    },
    {
        element: <PostByCategoryPage/>,
        link: '/categories/:category'
    },
    {
        element: <SayHelloPage/>,
        link: '/say-hello'
    },
    {
        element: <MembershipPage/>,
        link: '/membership'
    },
    {
        element: <SingleBlogPage/>,
        link: '/blogs'
    },
    {
        element: <SignUpPage/>,
        link: '/signup'
    },
    {
        element: <SignInPage/>,
        link: '/signin'
    }
]

const WebRoutes = () => {
    return(
        <Routes>
            {
                theRoutes.map((a_route, index)=>{
                    return (
                        <Route exact key={index} path={a_route.link} element={a_route.element} />
                    );
                })
            }
        </Routes>
    );
}

export default WebRoutes;
