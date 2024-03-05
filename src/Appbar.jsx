import {Typography} from "@mui/material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
function AppBar(){
    const navigate=useNavigate();

    useEffect(()=>{
        function callback2(data){
             console.log(data); 
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/me",{
            // method:"GET",
            headers:{
                "Authorization":"Bearer"+ localStorage.getItem("token")
            }
        }).then(callback1)
    },[]);
    return<div style={{display:"flex", justifyContent:"space-between", padding:4}}>
        <div>
        <Typography variant={"h6"}>LearHub</Typography>
        </div>
        <div style={{display:"flex"}}>
            <div style={{marginRight:10}}>
                <Button variant={"contained"} onClick={()=>{
                    navigate("/signup")
                }}>Sign up</Button>
            </div>
            <div>
                <Button variant={"contained"} onClick={()=>{
                    navigate("/login")
                }}>Sign in</Button>
            </div>
        
        </div>
        
    </div>
}
export default AppBar;