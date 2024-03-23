import '../styles/contact.css'
import qr from '../assets/address qr.png'

const Contact = () => {
    return ( 
    <div className="contact-cont">
        <div className="image-header"></div>
        <div className="contact-info">
            <div>
                <h1>Call: 98457-59847</h1>
                <h1>74060-41078 | 0821-2371122</h1>
                <p>
                    Location: 332/4, Sri Acharya Gurukula,<br />
                    Hallididdi road, near MIT College,<br />
                    Kadakola 571-311, Mysuru
                </p>
            </div>
            <div>
                <img src={qr} alt="school address QR bar" />
                <span>Scan for <br />
                address</span>
            </div>
            <div>
                <a href="https://www.google.com/maps/place/SRI+ACHARYA+GURUKULA+SCHOOL/@12.1804913,76.6637174,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf696334064323:0x91c084a13569527c!8m2!3d12.1804861!4d76.6662977!16s%2Fg%2F11fsm844dd?entry=tts">https://maps.app.goo.gl/pTSPKYScAXZTcwAx7</a>
            </div>
        </div>
    </div> );   
}
 
export default Contact;