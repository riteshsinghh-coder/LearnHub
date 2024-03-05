import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import {Card} from "@mui/material";
import {useState} from "react";

function SignIn(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return <div>
    
        <div style={{paddingTop:150, marginBottom:10, display:"flex", justifyContent:"center"}}>
            <Typography variant={"h6"}>
            Welcome back to LearnHub.Sign in below
            </Typography>
        </div>

       
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant={"outlined"} style={{width:400, padding:20}}>
        
        <TextField onChange={(e)=>{
            setEmail(e.target.value);
        }} id={"username"} fullWidth={true}  label="Email" variant="outlined" />
        <br/><br/>
        <TextField onChange={(e)=>{
            setPassword(e.target.value);
        }}  id={"password"} fullWidth={true}  label="Password" variant="outlined" type={"password"}/>
        <br/><br/>
        <Button size={"large"} variant="contained" onClick={()=>{
            function callback2(data){
                localStorage.setItem("token",data.token);
            }
            function callback1(res){
                return res.json().then(callback2);
            }
            fetch("http://localhost:3000/admin/login",{
                method:"POST",
                body:JSON.stringify({
                    username:email,
                    password:password
                }),
                headers:{
                    "Content-type":"application/json"

                }
            }).then(callback1)

            
        }}>SIGNIN</Button>
        </Card>
  
   </div>
    </div>
}
export default SignIn;