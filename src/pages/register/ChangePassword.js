import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_changePassword.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


function ChangePassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const renderChangePassword = () => {
    <Box className="change-password-form">
    <Box className="head">
      <ArrowCircleLeftOutlinedIcon />
      <Box className="head_title">
        パスワード再発行
      </Box>
    </Box>
    <Box className="new-password form-input" sx={{mb :2 }}>
      <Box className="txt-label">
        新しいパスワード
      </Box>
      <TextField placeholder="パスワード" variant="outlined" />
    </Box>
    <Box className="password form-input">
    <Box className="txt-label">
      新しいパスワード(確認)
      </Box>
      <TextField placeholder="パスワード" variant="outlined" />
    </Box>
    <Box className="btn">
      <Button variant="outlined" className="reset-btn">
        リセット
      </Button>
    </Box>
  </Box>
  };

  return (
    <Box className="change-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon />
        <Box className="head_title">
          パスワード変化
        </Box>
      </Box>
      <Box className="new-password form-input" sx={{mb :2 }}>
        <Box className="txt-label">
          存在のパスワード
        </Box>
        <TextField placeholder="パスワード" variant="outlined" />
      </Box>
      <Box className="new-password form-input" sx={{mb :2 }}>
        <Box className="txt-label">
          新しいパスワード
        </Box>
          <TextField placeholder="パスワード" variant="outlined" />
      </Box>
      <Box className="new-password form-input">
        <Box className="txt-label">
          新しいパスワード(確認)
        </Box>
          <TextField placeholder="パスワード" variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="reset-btn">
          変化
        </Button>
      </Box>
    </Box>
  );
}
export default ChangePassword;
