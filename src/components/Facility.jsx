import '../styles/facility.css'
import fc1 from '../assets/fc1.png'
import fc2 from '../assets/fc2.png'
import fc3 from '../assets/fc3.png'
import fc4 from '../assets/fc4.png'
import fc5 from '../assets/fc5.png'
import fc6 from '../assets/fc6.png'



const Facility = () => {
    return ( 
    <div className="facility-cont">
        <div className="header-text">
            <div></div>
        </div>
        <div className="facility-images">
            <img src={fc1} alt="school facility 1" />
            <img src={fc2} alt="school facility 2" />
            <img src={fc3} alt="school facility 3" />
            <img src={fc4} alt="school facility 4" />
            <img src={fc5} alt="school facility 5" />
            <img src={fc6} alt="school facility 6" />
        </div>
        <div className="facility-info">
            <div className="basic-info">
                <span><b>Modern Classrooms:</b> Equipped with the latest technology to enhance the learning experience.</span>
                <span><b>Library:</b> A well-stocked library with a vast collection of books, journals, and digital resources.</span>
                <span><b>Science Labs:</b> State-of-the-art laboratories for Physics, Chemistry, and Biology to encourage practical learning.</span>
                <span><b>Computer Lab</b>: Fully equipped computer lab to ensure students are adept with technology.</span>
                <span><b>Audio-Visual Room:</b> For interactive learning sessions and presentations.</span>
                <span><b>Sports Facilities:</b> A sprawling playground and facilities for various sports like football, basketball, cricket, and athletics.</span>
                <span><b>Cafeteria:</b> A hygienic and spacious cafeteria offering nutritious meals and snacks.</span>
            </div>

            <div className="safety-info">
                <h1>Safety and Security</h1>
                <span><b>CCTV Surveillance:</b> 24x7 CCTV surveillance to ensure the safety of students and staff.</span>
                <span><b>Security Personnel:</b> Trained security personnel stationed at key points across the campus</span>
            </div>

            <div className="extracurricular-info">
                <h1>Extracurricular Activities</h1>
                <span><b>Music and Dance Studio: </b> Facilities for music and dance classes to nurture talents beyond academics.</span>
                <span><b>Art and Craft Room: </b> A dedicated space for students to explore their creativity.</span>
                <span><b>Clubs and Societies: </b> Various clubs and societies to cater to diverse interests, promoting holistic development.</span>
            </div>

            <div className="health">
                <h1>Health and Wellness</h1>
                <span><b>Infirmary:</b> A well-equipped infirmary with trained medical staff to attend to any health emergencies.</span>
                <span><b>Counselling Services:</b> Guidance and counselling services to support students' mental health and well-being.</span>
            </div>

            <div>
                <h1>Transport</h1>
                <span><b>Bus Services:</b> Safe and reliable transportation facilities for students residing in different parts of the city.</span>
            </div>

            <div className="parental">
                <h1>Parental Engagement</h1>
                <span><b>Parent-Teacher Meetings:</b> Regular meetings to keep parents informed about their child's progress.</span>
                <span><b>Parental Workshops:</b> Workshops and seminars for parents to enhance their involvement in their child's education.
                    At Acharya International School, we are committed to providing a holistic educational experience that fosters academic excellence, personal growth, and social responsibility</span>
            </div>

        </div>
    </div> );
}
 
export default Facility;