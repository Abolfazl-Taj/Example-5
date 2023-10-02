import './Experince.css';
export default function Expcard({header , des}){
    return(
        <div className='exp-items'>
        <h1   className='exp-header' >{header}</h1>
        <p   className='exp-des' >{des}</p>
    </div>

    )
}
