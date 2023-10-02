import "./Team.css";
function CardTeam({aks , name , job, des}){
    return(
 
        <div className="team-card">
        <img src={aks} />
            <h1 className="team-head">
            {name}
            </h1>
            <h5 className="job">
            {job}
            </h5>
            <p className="team-des">
                {des}
            </p>
        <button className="team-btn">Contact</button>
        </div>

    )
}
export default CardTeam