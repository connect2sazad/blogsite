import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
import BlogCardsGroup from "../components/blogcardsgroup.component";
import Footer from "../components/footer.component";

class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "Categories",
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

                    <BlogCardsGroup/>

                    <Footer />
                </div>

                
            </>
        );
    }
}

export default CategoriesPage;