import { useEffect, useState } from "react";
import Component from "../component/Component";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './Home.css';
import { flushSync } from "react-dom";
const Home = () => {

   const [cards, setCard] = useState([]);
   const [select, setSelect] = useState([]);
//    const [acceed, setAcceed] = useState(false);

   

   useEffect(() => {
    fetch('fake.json')
    .then(res => res.json())
    .then(data => setCard(data));
   },[]);

   const selects = (object,isEnrolled) =>{
    if(isEnrolled&&credits<20)
    {
        const selectedCourse = [...select,object];
        setSelect(selectedCourse);
        
    }
        
      
        
        
   }
   let i=1;
   let credits=0;
   let remain=20;
   const handleToast = () =>{
    alert('There is no remaining credit to add!!')
   }
   
   select.map(calculate=>{

    credits += parseInt(calculate.credit.slice(0,1));
    if(credits>20)
    {
        
        credits -= parseInt(calculate.credit.slice(0,1));
        remain += parseInt(calculate.credit.slice(0,1));
    }
    
    remain -= parseInt(calculate.credit.slice(0,1));


   })

    return (
        <div>
            <h1>Course Registration</h1>
            <div className="main-div">
                <div>
            <div className="cards">
            {
                
                cards.map(card => <Component card={card} course={selects} credits={credits}></Component>)
            }
            </div>
            </div>
            <div className="cart">
                
                
                   {<p className="design">Credit Hour remaining {remain} hr</p>  } 
                   {/* {isAcceed&&{handleToast}} */}
                   
                    
                
                
                <hr/>
                <h3>Course Name:</h3>
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