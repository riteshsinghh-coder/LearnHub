import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import {Card } from "@mui/material";
import {useState} from "react";
function SignUp(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return <div>
        {/* {email} */}
        <div style={{paddingTop:150, marginBottom:10, display:"flex", justifyContent:"center"}}>
            <Typography variant={"h6"}>
            Welcome to LearnHub.Sign up below
            </Typography>
        </div>

       
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant={"outlined"} style={{width:400, padding:20}}>
        
        <TextField onChange={(e)=>{
            setEmail(e.target.value);
        }}
           
            fullWidth={true} 
            id="username" 
            label="Email" 
            variant="outlined" />
        <br/><br/>
        <TextField onChange={(e)=>{
            setPassword(e.target.value);
        }} fullWidth={true} id="password" label="Password" variant="outlined" type={"password"}/>
        <br/><br/>
        <Button size={"large"} variant="contained" onClick={()=>{
            // let username=document.getElementById("username").value;
            function callback2(data){
                localStorage.setItem("token",data.token);
                window.location = "/"
            }
            function callback1(res){
                return res.json().then(callback2);
            }
            // let password=document.getElementById("password").value;
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body:JSON.stringify({
                    username:email,
                    password:password
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(callback1)
            
        }}
        >Signup</Button>
        </Card>
  
   </div>
    </div>
}
export default SignUp;