import React from "react";

import { Card } from "./card.component";
import { Column } from "./column.component";

class BlogDoubleColumns extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    categoryName: "Travelling",
                    title: "The Best Gear for Travelers in 2023",
                    content: "I went to Costa Rica on my first trip overseas and I took with me the entire suggested packing list my tour company gave customers. I carried around so much stuff I never used. Years later, when I did my first backpacking trip around the world, I still carried so much, I ended up leaving stuff in hostels as I went.",
                    link: "/blogs",
                    noOfViews: "1.2K",
                    noOfComments: "25",
                    author: 'Smruti Snigdha Mohapatra',
                    authorDesignation: 'Developer',
                    authorImage: 'https://avatars.githubusercontent.com/u/109839434?v=4'
                },
                {
                    categoryName: "Finance",
                    title: "What is Bilt Rent Day? Everything You Need to Know",
                    content: "Rent Day is Bilt’s alternative to a welcome offer. A welcome off is normally a one-time offer of a large number of points given to you in exchange for spending a certain amount of money on your card within a set time frame.",
                    link: "/blogs",
                    noOfViews: "1.2K",
                    noOfComments: "25",
                    author: 'Sazad Ahemad',
                    authorDesignation: 'Full Stack Developer',
                    authorImage: 'https://pbs.twimg.com/profile_images/1630811485663563781/VjXfoY9k_400x400.jpg'
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
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        {blogs.map((blog, index) => (
                            <Column
                                key={index}
                                categoryName={blog.categoryName}
                                title={blog.title}
                                content={blog.content}
                                link={blog.link}
                                noOfViews={blog.noOfViews}
                                noOfComments={blog.noOfComments}
                                author={blog.author}
                                authorDesignation={blog.authorDesignation}
                                authorImage={blog.authorImage}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDoubleColumns;