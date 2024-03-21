import '../styles/home.css'
import vid from '../assets/Render.mp4'

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
    </div> );
}
 
export default Home;