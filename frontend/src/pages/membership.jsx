import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import BlogCardsGroup from "../components/blogcardsgroup.component";
import Footer from "../components/footer.component";

class MembershipPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Membership",
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
                    <section className="text-gray-600 body-font relative flex justify-center items-center min-h-screen">
                        <div className="container px-5 py-18 mx-auto flex sm:flex-nowrap flex-wrap items-center">
                            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:m-auto w-full mt-8 md:mt-0">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Join as a Member</h2>
                                <p className="leading-relaxed mb-5 text-gray-600">Fill this up to join us with membership.</p>
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
                                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Join</button>
                                {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>


            </>
        );
    }
}

export default MembershipPage;