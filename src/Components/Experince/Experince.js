import './Experince.css';
import Expcard from './Exp-Cards'
export default function Exp(){
    let exp =[
        {
            header:'14+' , des:"Partners"
        },
        {
            header:'55+' , des:"Projects Done"
        },
        {
            header:'89+' , des:"Happy Clients"
        },
        {
            header:'150+' , des:"Meetings"
        }
    ]
    return(
        <div className="exp"  data-aos="zoom-out"  data-aos-duration="500">
            {exp.map(expcard=> <Expcard {...expcard} ></Expcard> )}

        </div>
    )
}