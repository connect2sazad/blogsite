import React from "react";
import { Link } from "react-router-dom";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import Footer from "../components/footer.component";

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Sign Up",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },

        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />

                    <div className="bg-grey-lighter min-h-screen flex flex-col">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign in</h1>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" />

                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password" />


                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none my-1"
                                >Log In</button>

                                
                            </div>

                            <div className="text-grey-dark mt-6">
                                Not registered yet? 
                                <Link className="no-underline border-b border-blue text-blue" to="/signup">
                                    Join us
                                </Link>.
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>


            </>
        );
    }
}

export default SignInPage;