import { useEffect, useState } from "react";
import Component from "../component/Component";

import './Home.css';
const Home = () => {

   const [cards, setCard] = useState([]);
   const [select, setSelect] = useState([]);
   const [intselect, setSelectInt] = useState([]);

   useEffect(() => {
    fetch('fake.json')
    .then(res => res.json())
    .then(data => setCard(data));
   },[]);

   const selects = (object) =>{
        const selectedCourse = [...select,object];
        setSelect(selectedCourse);
      
        
        
   }
   let i=1;
   let credits=0;

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
                <p className="design">Credit Hour remaining 7 hr</p>
                <hr/>
                <h3>Course Name:{select.length}</h3>
                {
                    

                    
                    (select.length>=0&&select.length<=20&&
                    
                intselect.map(show =>{ {credits += parseInt(show.credit.slice(0,1))}  <p className="param">{i++}. {show.name}</p>})
                    )
                }
                <hr/>
                <h4>Total credit hour: {credits}hr</h4>

            </div>
            </div>
            
        </div>
    );
};

export default Home;