import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_login.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/login/LoginActionCallApi";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push('/');
  };
  
  const handleGoToRegister = () => {
    history.push('/register');
  };

  const handleLogin = () => {
    dispatch(login('bach', 'bach12345'));
  };

  return (
    <Box className="login-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={goHomePage}/>
        <Box className="head_title">
          Đăng nhập
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          Email
        </Box>
        <TextField type="text" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Box className="password form-input">
      <Box className="txt-label">
        Password
        </Box>
        <TextField type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
      </Box>
      <Button variant="text" className="btn-forget" onClick={() => history.push('/forget-password')}>
        Quên mật khẩu
      </Button>
      <Box className="btn-list">
      <Button variant="outlined" className="signin-btn" onClick={handleLogin}>
        Đăng nhập
      </Button>
      <Button variant="text" className="signup-btn" onClick={handleGoToRegister} >
        Đăng ký
      </Button>
      </Box>
     
    </Box>
  );
}
export default Login;
