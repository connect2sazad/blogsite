import React from "react";

import { Card } from "./card.component";

class BlogCardsGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
                {
                    imageURL: "https://www.visiblebody.com/hs-fs/hubfs/adaptive-radiation.jpg?width=515&height=421&name=adaptive-radiation.jpg",
                    categoryName: "Evolution",
                    title: "Darwin's Finches Keep Evolving",
                    content: "In 1835, a young Charles Darwin arrived in the Galapagos Islands as part of the voyage of the HMS Beagle. The Beagle’s mission was to take measurements ",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://www.ready.gov/sites/default/files/2022-04/kids_earthquakes.jpg",
                    categoryName: "Earth",
                    title: "How are Earthquakes Measured",
                    content: "When the Earth trembles, earthquakes spread energy in the form of seismic waves. A seismograph is the primary earthquake measuring instrument. ",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
            ]
        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {
        const { blogs } = this.state;

        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

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
                        />
                    ))}

                    </div>
                </div>
            </section>
        );
    }
}

export default BlogCardsGroup;