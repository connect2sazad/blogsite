import React from "react";
import { Link } from "react-router-dom";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import Footer from "../components/footer.component";

class SayHelloPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Say Hello",
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

                    <section className="text-gray-600 body-font relative">
                        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Housing Board, Khordha - 12, Khordha, Odisha&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                    <div className="lg:w-1/2 px-6">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                        <p className="mt-1">Housing Board, Khordha - 12, Khordha, Odisha</p>
                                    </div>
                                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                        <Link to="mailto:mail2sazad@gmail.com" className="text-indigo-500 leading-relaxed">mail2sazad@gmail.com</Link>
                                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                        <Link to="tel:8763438208" className="leading-relaxed">876-343-8208</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Say Hello</h2>
                                <p className="leading-relaxed mb-5 text-gray-600">Feel free to fill up the form to say hello to us.S</p>
                                <div className="relative mb-4">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>


            </>
        );
    }
}

export default SayHelloPage;