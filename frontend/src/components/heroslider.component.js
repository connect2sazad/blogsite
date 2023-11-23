import React from "react";
import { Link } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

class HeroSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: [
                { 
                    title_1: "Here Comes the Sun",
                    title_2: "Perseverance Readies for Solar Conjunction",
                    description: "Perseverance wrapped up science activities this week as the team focused on getting the rover in position for solar conjunction, a few week period roughly every two Earth years when Earth and Mars are on opposite sides of the Sun.",
                    btn_name: "Read More",
                    btn_link: "/blogs",
                    image: "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00963/ids/edr/browse/ncam/NLF_0963_0752404984_755ECM_N0470000NCAM00501_01_295J03_1200.jpg"
                },
                {
                    title_1: "A Tale of Turquoise Bay",
                    title_2: "Sampling Unique Bedrock at the Margin Unit",
                    description: "The Mars 2020 team has been exploring a new area of the Margin Unit at Jezero Crater, where distinct carbonate signatures have been observed from orbit. Importantly, carbonates that form in rocks can store a record of the climate during formation, and they can also preserve biosignatures (residues of ancient life).",
                    btn_name: "Read More",
                    btn_link: "/blogs",
                    image: "https://mars.nasa.gov/images/mepjpl/sol942_web1.jpg"
                }
            ],
            test: "h"
        }
    }

    componentDidMount() {
        // Move your side effect code here
    }

    render() {
        const { slides } = this.state;

        return (
            <section className="text-gray-600 body-font">
                <Swiper
                    className="mySwiper"
                    loop={true}
                    pagination={{ dynamicBullets: true }}
                    // modules={[Pagination, Navigation]}
                    modules={[Pagination, Navigation, EffectFade]}
                    effect={"fade"}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Slide
                                heading1={slide.title_1}
                                heading2={slide.title_2}
                                description={slide.description}
                                btnName={slide.btn_name}
                                btnLink={slide.btn_link}
                                image={slide.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        );
    }
}

export default HeroSlider;

const Slide = ({ heading1, heading2, description, btnName, btnLink, image }) => {
    return (
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center bg-white">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    {heading1}
                    <br className="hidden lg:inline-block" />{heading2}
                </h1>
                <p className="mb-8 leading-relaxed">{description}</p>
                <div className="flex justify-center">
                    <Link to={btnLink} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        {btnName}
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={image} />
            </div>
        </div>
    );
}
