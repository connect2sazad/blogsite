import React from "react";
import { Link } from "react-router-dom";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
// import HeroSlider from "../components/heroslider.component";
import Footer from "../components/footer.component";

import { Card } from "../components/card.component";
import withRouter from "../components/withrouter.component";

class PostByCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "",
                keywords: ["Best Site", "Best Site 2", "Best Site 3"],
                description: 'Test Description'
            },
            blogs: [
                {
                    imageURL: "https://spaceandbeyondbox.com/wp-content/uploads/2022/02/pia20645_main.jpg",
                    categoryName: "Solar System",
                    title: "Tour the inner Solar System",
                    content: "Approximately 4.5 billion years ago, a cold cloud of gas and dust buried deep in one of the Milky Way galaxy’s spiral arms started to collapse. ",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://spaceandbeyondbox.com/wp-content/uploads/2021/12/Alan-Shepard-1.jpg",
                    categoryName: "Space",
                    title: "60 years ago, Alan Shepard flew to space",
                    content: "Early on May 5, 1961, the United States came to a standstill. A Philadelphia judge halted all court proceedings, crowds in Times Square sang and danced.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://spaceandbeyondbox.com/wp-content/uploads/2021/11/toilet_1000.jpg",
                    categoryName: "Space",
                    title: "Going to the bathroom in outer space",
                    content: "There are a lot of challenges involved in putting humans in space. Not the least of which is figuring out how they will go to the bathroom.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://www.visiblebody.com/hs-fs/hubfs/My%20project%20(43).jpg?width=515&height=386&name=My%20project%20(43).jpg",
                    categoryName: "Human Life",
                    title: "How Do Humans Speak",
                    content: "During exhalation, air travels from the lungs into the trachea, also known as the windpipe. At the top of the trachea is the larynx.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
            ]
        }
    }

    componentDidMount() {
        
        console.log('Props:', this.props)
        this.setState({
            ...this.state.head_insiders,
            page_title: this.props.params.category
        })
    }

    render() {
        const { blogs } = this.state;

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />

                    <div className="container mx-auto flex flex-wrap py-6">
                        {/* Posts Section  */}
                        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                            <article className="flex flex-col shadow my-4">
                                {/* Article Image  */}
                                <a href="#" className="hover:opacity-75">
                                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
                                </a>
                                <div className="bg-white flex flex-col justify-start p-6">
                                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                    <p href="#" className="text-sm pb-3">
                                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                                    </p>
                                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </article>

                            <article className="flex flex-col shadow my-4">
                                {/* Article Image  */}
                                <a href="#" className="hover:opacity-75">
                                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
                                </a>
                                <div className="bg-white flex flex-col justify-start p-6">
                                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                    <p href="#" className="text-sm pb-3">
                                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                                    </p>
                                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </article>

                            <article className="flex flex-col shadow my-4">
                                {/* Article Image  */}
                                <a href="#" className="hover:opacity-75">
                                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
                                </a>
                                <div className="bg-white flex flex-col justify-start p-6">
                                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                                    <p href="#" className="text-sm pb-3">
                                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                                    </p>
                                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </article>



                        </section>

                        {/* Sidebar Section */}
                        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">



                            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                                <p className="text-xl font-semibold pb-5">Instagram</p>
                                {blogs.map((blog, index) => (
                                    <Card
                                        key={index}
                                        imageURL={blog.imageURL}
                                        categoryName={blog.categoryName}
                                        title={blog.title}
                                        content={blog.content}
                                        link={blog.link}
                                        noOfViews={blog.noOfViews}
                                        noOfComments={blog.noOfComments}
                                        width=""
                                    />
                                ))}
                            </div>

                        </aside>
                    </div>


                    <Footer />
                </div>
                /

            </>
        );
    }
}

export default withRouter(PostByCategoryPage);