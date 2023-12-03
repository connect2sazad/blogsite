import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import Footer from "../components/footer.component";
import { server } from "../components/constants.component";

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Sign Up",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
            formData: {
                fullname: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    }

    handleSubmit = async () => {
        try {
            // Send the form data to your API using Axios
            const response = await axios.post(server + 'signup', this.state.formData);
            console.log('API Response:', response.data);

            // Handle success or perform additional actions
        } catch (error) {
            // Handle errors
            console.error('API Error:', error);
        }
    }


    render() {

        const { fullname, email, password, confirm_password } = this.state.formData;

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />

                    <div className="bg-grey-lighter min-h-screen flex flex-col">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={fullname}
                                    onChange={this.handleInputChange}
                                />

                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={this.handleInputChange}
                                />

                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.handleInputChange}
                                />
                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    value={confirm_password}
                                    onChange={this.handleInputChange}
                                />

                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none my-1"
                                    onClick={this.handleSubmit}
                                >Create Account</button>


                            </div>

                            <div className="text-grey-dark mt-6">
                                Already have an account?
                                <Link className="no-underline border-b border-blue text-blue" to="/signin">
                                    Log in
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

export default SignUpPage;