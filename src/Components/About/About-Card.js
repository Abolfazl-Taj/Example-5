import './About.css';
function Aboutcard({img , header , des}){
    return(
        <div className='about-card'>
        <img src={img} />
        <h1 className='about-header'>   {header} </h1>
        <p className='about-des'>  {des} </p>
    </div>
    )
}
export default Aboutcard