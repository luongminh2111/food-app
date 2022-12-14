import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_login.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useHistory } from "react-router-dom";


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goHomePage = () => {
    history.push('/');
  };
  
  const handleGoToRegister = () => {
    history.push('/register');
  };

  return (
    <Box className="login-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={goHomePage}/>
        <Box className="head_title">
          サインイン
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          メールアドレス
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="password form-input">
      <Box className="txt-label">
        パスワード
        </Box>
        <TextField  variant="outlined" />
      </Box>
      <Button variant="text" className="btn-forget">
        パスワードをお忘れました。
      </Button>
      <Box className="btn-list">
      <Button variant="outlined" className="signin-btn">
        サインイン
      </Button>
      <Button variant="text" className="signup-btn" onClick={handleGoToRegister} >
        サインアップ
      </Button>
      </Box>
     
    </Box>
  );
}
export default Login;
