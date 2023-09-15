import { useEffect, useState } from "react";
import Component from "../component/Component";

import './Home.css';
const Home = () => {

   const [cards, setCard] = useState([]);
   const [select, setSelect] = useState([]);
   const [selectss, setSelectss] = useState([]);

   

   useEffect(() => {
    fetch('fake.json')
    .then(res => res.json())
    .then(data => setCard(data));
   },[]);

   const selects = (object) =>{
        const selectedCourse = [...select,object];
        setSelect(selectedCourse);
        setSelectss(selectedCourse);
      
        
        
   }
   let i=1;
   let credits=0;
   let remain=20;

   selectss.map(calculate=>{

    credits += parseInt(calculate.credit.slice(0,1));
    remain -= parseInt(calculate.credit.slice(0,1));

   })

    return (
        <div>
            <h1>Course Registration</h1>
            <div className="main-div">
                <div>
            <div className="cards">
            {
                
                cards.map(card => <Component card={card} course={selects}></Component>)
            }
            </div>
            </div>
            <div className="cart">
                
                
                    <p className="design">Credit Hour remaining {remain} hr</p>
                    
                
                
                <hr/>
                <h3>Course Name:{select.length}</h3>
                {
                    select.map(show => <p className="param">{i++}. {show.name}</p>)
                }
                
                <hr/>
                <h4>Total credit hour: {credits}hr</h4>

            </div>
            </div>
            
        </div>
    );
};

export default Home;