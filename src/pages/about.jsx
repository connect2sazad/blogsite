import React from "react";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
// import HeroSlider from "../components/heroslider.component";
import Footer from "../components/footer.component";

class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "About",
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
                    <Footer />
                </div>

                
            </>
        );
    }
}

export default AboutPage;