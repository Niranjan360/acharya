import p1 from '../assets/picture 1.jpeg'
import p2 from '../assets/picture 2.jpeg'
import p3 from '../assets/picture 3.png'
import p4 from '../assets/picture 4.png'
import p5 from '../assets/picture 5.png'
import p6 from '../assets/picture 6.png'
import p7 from '../assets/picture 7.jpeg'
import p8 from '../assets/picture 8.jpeg'
import p9 from '../assets/picture 9.jpeg'
import p10 from '../assets/picture 10.jpeg'
import p11 from '../assets/picture 11.jpg'
import p12 from '../assets/picture 12.jpg'
import '../styles/gallery.css'

const Gallery = () => {

    let images = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12]

    return ( 
    <div className="gallery-cont">
        <div className="gallery-image"></div>
        <div className="images">
        {
            images.map((v)=>{return(<img src={v} alt='v' key={v}/>)})
        }
        </div>
    </div> );
}
 
export default Gallery;