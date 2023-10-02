import './Footer.css';
import aks from '../../Assets/Images/Footer.png'
function Footer(){
    return(
        <>
        <div className="footer" data-aos="zoom-out"  data-aos-duration="500">
            <div className="top-foot">
                <div className="socials">
                <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-tiktok"></i>
                </div>
            <img src={aks} alt="aks" />
            <div className="contact">
                <h3 className='contact-card'> <i class="fa-solid fa-phone"></i> <p>09225361236</p></h3>
                <h3 className='contact-card'> <i class="fa-solid fa-envelope"></i> <p>leviackerman@gmail.com</p> </h3>
                <h3 className='contact-card'> <i class="fa-solid fa-location-dot"></i> <p> Iran,Tehran,Pardise</p></h3>
            </div>
                 </div>
            <div className="down-footer">
                Roxin All Right - 2023
            </div>
        </div>
        </>
    )
}
export default Footer