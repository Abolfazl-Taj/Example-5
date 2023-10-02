import './Price.css';
function Price(){
    return(
        <div className="price" data-aos="fade-right" data-aos-duration="500" >
            <h1 className="price-header">
            PRICING
            </h1>
            <p className="price-des">
            Choose a pricing plan that fits your needs.
            </p>
            <div className="price-list">
               <div className="price-card">
                 <ul className="range">
                    <li className="range-list bigone">Basic</li>
                    <li className="range-list">10GB Storage</li>
                    <li className="range-list">10 Emails</li>
                    <li className="range-list">10 Domains</li>
                    <li className="range-list">Endless Support</li>
                    <li className="range-list"> <p>$ 10</p>
                    per month
</li>
                    <li className="range-list">
                        <button>Sing Up</button>
                    </li>
                 </ul>
               </div>
               <div className="price-card midle">
                 <ul className="range ">
                    <li className="range-list bigone">Pro</li>
                    <li className="range-list">25GB Storage</li>
                    <li className="range-list">25 Emails</li>
                    <li className="range-list">25 Domains</li>
                    <li className="range-list">Endless Support</li>
                    <li className="range-list"> <p>$ 25</p>
                    per month
</li>
                    <li className="range-list">
                        <button>Sing Up</button>
                    </li>
                 </ul>
               </div>
               <div className="price-card end">
                 <ul className="range">
                    <li className="range-list bigone">Premium</li>
                    <li className="range-list">50GB Storage</li>
                    <li className="range-list">50 Emails</li>
                    <li className="range-list">50 Domains</li>
                    <li className="range-list">Endless Support</li>
                    <li className="range-list"> <p>$ 50</p>
                    per month
</li>
                    <li className="range-list">
                        <button>Sing Up</button>
                    </li>
                 </ul>
               </div>
            </div>
        </div>
    )
}
export default Price