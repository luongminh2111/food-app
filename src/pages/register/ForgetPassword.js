import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_forgetPassword.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


function ForgetPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const renderConfirmPassCode = () => {
    return(
      <Box className="forget-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon />
        <Box className="head_title">
          パスワード再発行
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          確認コード
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="forget-btn">
          サインイン
        </Button>
      </Box>
    </Box>
    )
  }

  return (
    <Box className="forget-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon />
        <Box className="head_title">
          パスワード再発行
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          メールアドレス
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="forget-btn">
          サインイン
        </Button>
      </Box>
     
    </Box>
  );
}
export default ForgetPassword;
