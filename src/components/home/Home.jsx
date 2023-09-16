import { useEffect, useState } from "react";
import Component from "../component/Component";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './Home.css';

const Home = () => {

   const [cards, setCard] = useState([]);
   const [select, setSelect] = useState([]);
const [xyz, setXyz] = useState([]);

   

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
    if(isEnrolled)
    {
        const selectedCourses = [...select,object];
        setXyz(selectedCourses);

    }
    
        
      
        
        
   }
   let i=1;
   let credits=0;
   let remain=20;
   const handleToast = () =>{
    alert('There is no remaining credit to add!!');
   }
   
   let re=20;
   select.map(calculate=>{
    

    credits += parseInt(calculate.credit.slice(0,1));
    if(credits>20)
    {
        
        credits -= parseInt(calculate.credit.slice(0,1));
        remain += parseInt(calculate.credit.slice(0,1));
    }
    
    remain -= parseInt(calculate.credit.slice(0,1));
    

   });
   xyz.map(data =>{
    re -= parseInt(data.credit.slice(0,1));

   });

    return (
        <div>
            <h1>Course Registration</h1>
            <div className="main-div">
                <div>
            <div className="cards">
            {
                
                cards.map(card => <Component card={card} course={selects} main={re} credits={credits}></Component>)
            }
            </div>
            </div>
            <div className="cart">
                
                   
                   {<p className="design">Credit Hour remaining {remain} hr</p>  } 
                  
                   
                    
                
                
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