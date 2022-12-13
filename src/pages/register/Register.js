import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_signup.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/login/LoginActionCallApi";

function Register(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push('/');
  };

  const handleGoToRegister = () => {
    history.push('/login');
  };

  const handleRegister = () => {
    dispatch(register("bach", "bach12345"));
  };

  return (
    <Box className="register-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={goHomePage} />
        <Box className="head_title">
          サインアップ
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          メールアドレス
        </Box>
        <TextField variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Box className="username form-input">
        <Box className="txt-label">
          ユーザー名
        </Box>
        <TextField variant="outlined" onChange={(e) => setUsername(e.target.value)} />
      </Box>
      <Box className="password form-input">
        <Box className="txt-label">
        パスワード
        </Box>
        <TextField type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Box className="password-confirm form-input">
        <Box className="txt-label">
        パスワード(確認)
        </Box>
        <TextField type="password" variant="outlined" onChange={(e) => setConfirmPassword(e.target.value)}/>
      </Box>
      <Box className="btn-list">
      <Button variant="outlined" className="signup-btn" onClick={handleRegister}>
        サインアップ
      </Button>
      <Button variant="text" className="signin-btn" onClick={handleGoToRegister}>
        サインイン
      </Button>
      </Box>
     
    </Box>
  );
}
export default Register;
