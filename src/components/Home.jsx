import '../styles/home.css'
import vid from '../assets/Render.mp4'
import playground from '../assets/playground.JPG'
import ch1 from '../assets/ch1.jpeg'
import ch2 from '../assets/ch2.jpeg'
import lab from '../assets/lab.png'
import activity from '../assets/activity.png'
import mental from '../assets/mental.png'




const Home = () => {
    return ( 
    <div className="home-cont">
        <div className="hero">
            <div className="video-cont">
                <video src={vid} autoPlay muted></video>
            </div>
        </div>
        <div className="about-section">
            <div className="abs1">
                <h2>ABOUT US</h2>
                <div>
                    <h1>ACHARYA INTERNATIONAL SCHOOL</h1>
                    <h2>KADAKOLA</h2>
                </div>
                <h2>EMPOWERING MINDS,<br />
                BUILDING FUTURES</h2>
            </div>
            <hr />
            <div className="abs2">
                <p>At Acharya International ICSE School, we believe in providing a learning
                    environment that fosters intellectual curiosity, critical thinking, and a passion for
                    lifelong learning. Our curriculum, aligned with the Indian Certificate of Secondary
                    Education (ICSE) board, ensures a comprehensive educational experience that
                    prepares students for the challenges of the modern world.</p>
                    <button>Read more</button>
            </div>
        </div>
        <div className="image-cont">
            <div id="playground"></div>
            <div id="ch1"></div>
            <div id="ch2"></div>
        </div>
        <div className="flashnews-cont">
            <div className="s1">
                <div>
                    <img src={lab} alt="" />
                </div>
                <div>
                    <h1>
                        <span>APPLY FOR</span>
                        <span>ADMISSIONS</span>
                        <span>ADMISSIONS OPEN</span>
                        <span>FOR 2024-25</span>
                    </h1>
                    <p>Admissions at Acharya International ICSE School are
                        conducted with a focus on selecting students who
                        demonstrate academic potential, character, and a
                        commitment to the school's values. Here's an
                        overview of our admissions process:</p>
                    <button>ENQUIRE</button>
                </div>
            </div>
            <div className="s2">
                <div>
                    <div>
                        <h1>
                            <span>LATEST</span>
                            <span>ANNOUNCEMENTS</span>
                        </h1>
                        <button>VIEW MORE</button>   
                    </div>
                </div>
                <div>
                    <img src={activity} alt="" />
                </div>
            </div>
            <div className="s3">
                <div>
                    <img src={mental} alt="" />
                </div>
                <div>
                    <div>
                        <h1>
                            <span>MENTAL</span>
                            <span>HEALTH</span>
                        </h1>
                        <button>VIEW MORE</button>   
                    </div>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Home;