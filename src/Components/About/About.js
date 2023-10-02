import Aboutcard from './About-Card'
import './About.css';
import passion from "../../Assets/Images/Passion.png";
import design from "../../Assets/Images/Design.png";
import responsive from "../../Assets/Images/Responsive.png";
import support from "../../Assets/Images/Support.png";

function About(){
    let cards = [
        {img :passion , header:"Passion" , des:"We Always Put Our 100% In Your Project >3" },
        {img :design , header: "Design" , des:"We Have Best Designer In Our Team And We Are Extendesing It" },
        {img :responsive , header:"Responsive" , des:"Wanna Have Greate Web Site With All Digital Device Thing ? Here We Are!" },
        {img :support , header: "Support" , des:"We Will Love U And Allways Support U With All We Have " }
    ]
    return(
        <>
        <h1 className='about-h'>How We Are ?</h1>
<div className='about-list' data-aos="fade-left" data-aos-duration="500">
    
{cards.map(card => <Aboutcard  {...card}></Aboutcard>   )}

</div>
</>
    
    



)}
export default About;