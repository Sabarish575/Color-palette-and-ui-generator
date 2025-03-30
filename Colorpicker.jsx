import React,{useCallback, useState} from "react";
import "./Colorpicker.css";
import img1 from "./cube.jpg";
import img2 from "./new.jpg";


function Colorpicker(){

    const[ans,setAns]=useState("#ffffff");

    const call=useCallback((e)=>{
        setAns(e.target.value)
    },[]);

    return(
        <>
        <h1>CSS COLOR PALETTE & UI GENERATOR
           <hr></hr>
        </h1>
            <div className="outer-container">

                <div className="right">
                    <p>{ans}</p>
                    <input
                    type="color"
                    value={ans}
                    onChange={call}
                    />


                </div>

                <div className="left">
                    <div className="card card-1" style={{color:ans}}>
                        <h2>
                            In the world of danks and memes we seek wisdom
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Quam, nostrum nam provident culpa cumque, delectus 
                             itaque minus repellendus et eos libero ullam 
                            illum aperiam enim perspiciatis quas nobis iste. Ipsa!</p>
                    </div>
                    <div className="card card-2" style={
                        {background:ans}}>
                        <img src={img1}/>
                        <h2>We Seek Wisdom</h2>
                    </div>
                    <div className="card card-3">
                        <div className="graph">
                            <div className="bar bar-1" style={{backgroundColor:ans}}></div>
                            <div className="bar bar-2" style={{backgroundColor:ans}}></div>
                            <div className="bar bar-3" style={{backgroundColor:ans}}></div>
                            <div className="bar bar-4" style={{backgroundColor:ans}}></div>
                            <div className="bar bar-5" style={{backgroundColor:ans}}></div>
                        </div>
                    </div>
                    <div 
                        className="card card-4" 
                        style={{
                            backgroundImage: `linear-gradient(to top, ${ans}, rgba(0,0,0,0)), url(${img2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    </div>


                    <div className="card card-5">
                        <button style={{background:ans}}>Active</button>
                        <button style={{background:ans}}>Focused</button>
                        <button style={{background:ans}} disabled>Disabled</button>

                    </div>
                </div>
                
            </div>
        
        </>
    )

}

export default Colorpicker;