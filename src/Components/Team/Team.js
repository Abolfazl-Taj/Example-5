import "./Team.css";
import Team1 from '../../Assets/Images/Team1.jpg';
import Team2 from '../../Assets/Images/Team2.jpg';
import Team3 from '../../Assets/Images/Team3.jpg';
import Team4 from '../../Assets/Images/Team4.jpg';
import CardTeam from "./TeamCard";

function Team(){
    let cardsteqam=[
        {aks:Team1 , name:"John Doe" , job:"CEO & Founder", des:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {aks:Team2 , name:"Anja Doe" , job:"Art Director", des:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {aks:Team3 , name:"Mike Ross" , job:"Web Designer", des:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {aks:Team4 , name:"Dan Star" , job:"Designer", des:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."}
    ]
    return(
  <>
         <div className="team-list"  data-aos="fade-right" data-aos-duration="500" >
    {cardsteqam.map(team =>   <CardTeam {...team}></CardTeam> )}
  </div>
  </>
    )
}
export default Team