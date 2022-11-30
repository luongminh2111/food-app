import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_signup.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useHistory } from "react-router-dom";


function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goHomePage = () => {
    history.push('/');
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
        <TextField variant="outlined" />
      </Box>
      <Box className="username form-input">
        <Box className="txt-label">
          ユーザー名
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="password form-input">
        <Box className="txt-label">
        パスワード
        </Box>
        <TextField  variant="outlined" />
      </Box>
      <Box className="password-confirm form-input">
        <Box className="txt-label">
        パスワード(確認)
        </Box>
        <TextField  variant="outlined" />
      </Box>
      <Box className="btn-list">
      <Button variant="outlined" className="signup-btn">
        サインアップ
      </Button>
      <Button variant="text" className="signin-btn">
      サインイン
      </Button>
      </Box>
     
    </Box>
  );
}
export default Register;
