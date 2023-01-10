import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_signup.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/login/LoginActionCallApi";
import { Mail } from "@mui/icons-material";

function Register(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPass, setIsCheckPass] = useState(false);
  const [alert, setAlert]= useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push("/");
  };

  const handleGoToRegister = () => {
    history.push("/login");
  };

  const handleValidateEmail =  (mail) =>{
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat))
    {
      return (true)
    }
     
      return (false)
  }
  const handleRegister = () => {
    if(password !== confirmPassword){
      setIsCheckPass(true);
      setAlert("Mật khẩu không trùng khớp");
    }
    else{
      if(!handleValidateEmail(email)){
        setIsCheckPass(true);
        setAlert("Email không hợp lệ!");
      }else if(password.length < 8){
        setIsCheckPass(true);
        setAlert("Mật khẩu tối thiểu 8 chữ số");
      } else {
        dispatch(register(email, password, history));
      }
    }

  };

  return (
    <Box className="register-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={goHomePage} />
        <Box className="head_title">Đăng ký</Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">Email</Box>
        <TextField
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box className="username form-input">
        <Box className="txt-label">Tài khoản</Box>
        <TextField
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>
      <Box className="password form-input">
        <Box className="txt-label">Mật khẩu</Box>
        <TextField
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box className="password-confirm form-input">
        <Box className="txt-label">Xác nhận mật khẩu</Box>
        <TextField
          type="password"
          variant="outlined"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>
      { checkPass ?    
       <Box className="txt-label" style={{ color: 'red', marginLeft :' 35px'}}>
        {alert}
        </Box> : null}
      <Box className="btn-list">
        <Button
          variant="outlined"
          className="signup-btn"
          onClick={handleRegister}
        >
          Đăng ký
        </Button>
        <Button
          variant="text"
          className="signin-btn"
          onClick={handleGoToRegister}
        >
          Đăng nhập
        </Button>
      </Box>
    </Box>
  );
}
export default Register;
