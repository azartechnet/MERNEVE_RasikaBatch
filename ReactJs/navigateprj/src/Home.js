import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate = useNavigate();
    const goToAbout=()=>{
        navigate("/about");
    }
    const goToContact=()=>{
        navigate("/contact");
        }
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={goToAbout}>About</button>
                <button onClick={goToContact}>Contact</button>
            </div>
            );
}
export default Home;