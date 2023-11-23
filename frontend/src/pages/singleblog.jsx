import React from "react";
import { Link } from "react-router-dom";

import WebHead from "../components/webhead.component";
import MenuBar from "../components/menubar.component";
// import HeroSlider from "../components/heroslider.component";
import Footer from "../components/footer.component";

import { Card } from "../components/card.component";

class SingleBlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            head_insiders: {
                page_title: "About",
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
        // Move your side effect code here
    }

    render() {
        const { blogs } = this.state;

        return (
            <>
                <WebHead headInsiders={this.state.head_insiders} />

                <div className="hero_area">
                    <MenuBar />

                    <div class="container mx-auto flex flex-wrap py-6">
                        {/* Posts Section  */}
                        <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                            <article className="flex flex-col my-4">
                                {/* Article Image  */}
                                <img src="https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00963/ids/edr/browse/ncam/NLF_0963_0752404984_755ECM_N0470000NCAM00501_01_295J03_1200.jpg" />
                                <div className="bg-white flex flex-col justify-start p-6">
                                    <Link to="/categories/mars" className="text-blue-700 text-sm font-bold uppercase pb-4">Mars</Link>
                                    <Link to="#" className="text-3xl font-bold hover:text-gray-700 pb-4">Here Comes the Sun: Perseverance Readies for Solar Conjunction</Link>
                                    <p className="text-sm pb-3">
                                        By <Link to="#" className="font-semibold hover:text-gray-800">David Grzyb</Link>, Published on April 25th, 2020
                                    </p>
                                    <p className="pb-6 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate molestiae explicabo iste unde aliquam porro laboriosam est. Quos deleniti id beatae, accusamus ipsa unde! Deserunt quis nisi cupiditate eaque, doloremque sint perspiciatis aliquid recusandae veritatis quo. Iure officiis, perferendis ex consectetur exercitationem suscipit laboriosam laborum eum, soluta, sunt quas voluptate voluptatibus odio minus quae qui! Nobis perspiciatis tempore provident mollitia sequi facere alias ratione sit modi cupiditate iusto pariatur labore dolor, perferendis itaque ipsam excepturi rem esse suscipit ex sunt maxime! Harum illo, doloribus, enim quis quas sunt laborum asperiores ipsa nihil totam ab iure! Amet eveniet beatae molestiae a. Voluptate dignissimos, suscipit vero, voluptatibus sed fugit officiis explicabo fuga nihil quas qui ipsa eum. Tempore, culpa sed! Sed incidunt dolor deleniti nihil asperiores. Eaque optio atque mollitia est incidunt beatae dolor, necessitatibus consequuntur similique, maiores id. Assumenda aperiam autem iusto consectetur odit culpa necessitatibus ad delectus, ipsam nemo magnam maiores dolor vitae quam fugit ea minima animi id suscipit sit distinctio deserunt. Possimus incidunt, dolorem nobis corrupti maiores veniam saepe sit similique ducimus dolores laborum? Laboriosam cum tenetur tempora omnis ipsum. Totam vitae dolores at optio similique, culpa repellat obcaecati aspernatur beatae officia recusandae, sunt adipisci laboriosam sequi!
                                    </p>
                                    <p className="pb-6 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam aliquid, sapiente molestiae cum, fugiat quasi itaque ab totam aliquam error temporibus incidunt excepturi assumenda placeat repellat? Voluptas necessitatibus harum nulla animi. Mollitia officiis accusantium autem nisi. Ea, quae atque! Unde ipsa in iste veritatis adipisci quidem saepe autem, ut, nulla, omnis repellendus fugiat ea quaerat eligendi numquam? Ab illum quod deserunt numquam doloremque? Rerum libero officiis inventore dolore et non ratione quidem dolores tempora corporis deserunt provident distinctio vel officia, odit repellat unde modi minima ipsum dolorem doloribus. Vero provident culpa esse reprehenderit sapiente dolor veritatis, alias sit quaerat.
                                    </p>
                                    <p className="pb-6 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti magni reprehenderit adipisci. Numquam, quae consequuntur ad quod accusamus adipisci illum quisquam, voluptatum soluta impedit esse eius placeat vel asperiores vitae natus! Dolore impedit quas, beatae tempore eum cum excepturi adipisci consequatur illo? Iure dignissimos sunt voluptatum illum natus corporis ullam nam maxime unde non, odio ipsa at cumque eligendi ex quam consequatur perspiciatis ea magnam mollitia, ratione soluta cupiditate? Quidem ullam sed beatae corrupti incidunt unde nisi excepturi eveniet perspiciatis, quae eum repudiandae maxime, aspernatur, ab deleniti id ipsa atque doloribus vero ipsum. Ab obcaecati, incidunt iusto nulla distinctio eligendi fugiat iure animi eveniet quis voluptatem ad optio autem quisquam minus nisi dolore rerum, quidem, a blanditiis dolorem nam adipisci temporibus. Dolore repudiandae quam, eveniet fugiat fugit totam! Magnam error tenetur veniam? Alias ducimus aspernatur voluptatum natus magni exercitationem omnis animi labore corporis fuga. Hic officiis nostrum illo tempora. Delectus quod molestiae ipsam. Quod dignissimos at dicta libero odit voluptates quas eum, quos ratione voluptatibus cupiditate dolorem quaerat ducimus quo debitis iste! Eaque quos laudantium sequi illum excepturi eos optio molestiae praesentium quas quo exercitationem deleniti vero odit, at nostrum animi quod nulla. Excepturi, quam quaerat. Consequuntur non dolor dicta aut illum vero est ad unde! Reprehenderit repudiandae itaque ab deserunt est, eum temporibus velit atque delectus? Sit, assumenda eius quas quidem odit, ex explicabo mollitia vel sequi debitis nam, error recusandae architecto necessitatibus officia! Blanditiis inventore dolor corrupti natus accusamus doloremque ipsam qui minima totam, quo aut rem, voluptatem temporibus dicta molestias velit odit? Commodi repudiandae fugiat mollitia velit dolor asperiores omnis. Corrupti laboriosam inventore suscipit quisquam, dolor impedit sint similique ut incidunt numquam quos voluptatem fugiat excepturi, maxime, natus alias et aliquid porro. Consequuntur animi iure tempora fuga molestias cum inventore deleniti exercitationem nam, consequatur, omnis harum.
                                    </p>
                                    <p className="pb-6 text-justify">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aut quasi nostrum amet consectetur repellat. Reiciendis voluptatum suscipit dolorum atque, deserunt accusamus cumque sunt. Error nam sequi, tempora deserunt quasi unde nobis sunt. Nostrum voluptatibus quae, molestiae similique commodi consectetur itaque id vitae, libero doloremque eaque. Itaque explicabo et sequi.
                                    </p>
                                </div>
                            </article>

                            <div className="w-full flex flex-col my-4">
                                <h1 class="font-semibold p-1">What people say!</h1>
                                <div class="flex flex-col gap-5 m-3">

                                    {/* <!-- Comment Container --> */}
                                    <div>
                                        <div class="flex w-full justify-between border rounded-md">

                                            <div class="p-3">
                                                <div class="flex gap-3 items-center">
                                                    <img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                                                    <h3 class="font-bold">
                                                        User 1
                                                        <br />
                                                        <span class="text-sm text-gray-400 font-normal">Level 1</span>
                                                    </h3>
                                                </div>
                                                <p class="text-gray-600 mt-2">
                                                    this is sample commnent
                                                </p>
                                                <button class="text-right text-blue-500">Reply</button>
                                            </div>


                                            <div class="flex flex-col items-end gap-3 pr-3 py-3">
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>




                                        {/* <!-- Reply Container  --> */}
                                        <div class="text-gray-300 font-bold pl-14">|</div>
                                        <div class="flex justify-between border ml-5  rounded-md">

                                            <div class="p-3">
                                                <div class="flex gap-3 items-center">
                                                    <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                                        class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                                                    <h3 class="font-bold">
                                                        User 2
                                                        <br />
                                                        <span class="text-sm text-gray-400 font-normal">Level 1</span>
                                                    </h3>
                                                </div>
                                                <p class="text-gray-600 mt-2">
                                                    this is sample commnent
                                                </p>
                                            </div>


                                            <div class="flex flex-col gap-3 pr-3 py-3">
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!-- END Reply Container  --> */}



                                        {/* <!-- Reply Container  --> */}
                                        <div class="text-gray-300 font-bold pl-14">|</div>
                                        <div class="flex justify-between border ml-5  rounded-md">
                                            <div class="p-3">
                                                <div class="flex gap-3 items-center">
                                                    <img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                                                    <h3 class="font-bold">
                                                        User 3
                                                        <br />
                                                        <span class="text-sm text-gray-400 font-normal">Level 1</span>
                                                    </h3>
                                                </div>
                                                <p class="text-gray-600 mt-2">
                                                    this is sample commnent
                                                </p>
                                            </div>


                                            <div class="flex flex-col gap-3 pr-3 py-3">
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!-- END Reply Container  --> */}

                                    </div>
                                    {/* <!-- END Comment Container  --> */}





                                    <div class="flex w-full justify-between border rounded-md">
                                        <div class="p-3">

                                            <div class="flex gap-3 items-center">
                                                <img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                                                <h3 class="font-bold">
                                                    User 4
                                                    <br />
                                                    <span class="text-sm text-gray-400 font-normal">Level 1</span>
                                                </h3>

                                            </div>
                                            <p class="text-gray-600 mt-2">
                                                this is sample commnent
                                            </p>
                                            <button class="text-right text-blue-500">Reply</button>
                                        </div>

                                        <div class="flex flex-col gap-3 p-3">
                                            <div>
                                                <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke-width="5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div class="w-full px-3 mb-2 mt-6">
                                    <textarea
                                        class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                                        name="body" placeholder="Comment" required></textarea>
                                </div>

                                <div class="w-full flex justify-end px-3 my-3">
                                    <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 text-lg" value='Post Comment' />
                                </div>


                            </div>

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

export default SingleBlogPage;