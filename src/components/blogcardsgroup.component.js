import React from "react";

import { Card } from "./card.component";

class BlogCardsGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
                    link: "#",
                    noOfViews: "1.2K",
                    noOfComments: "25"
                },
                {
                    imageURL: "https://dummyimage.com/720x400",
                    categoryName: "CATEGORY",
                    title: "The Catalyzer",
                    content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
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
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">

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