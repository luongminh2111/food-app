import React, { useState } from "react";
import { Button, TextField, Box, dividerClasses } from "@mui/material";
import "../../styles/_changePassword.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useHistory } from "react-router-dom";

function ChangePassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div className="login-container">
      {" "}
      <Box className="change-password-form">
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon style={{ color: "#3ab19b" }} onClick={() => history.push("/")} />
          <Box className="head_title">THAY ĐỔI MẬT KHẨU</Box>
        </Box>
        <Box className="new-password form-input" sx={{ mb: 2 }}>
          <Box className="txt-label">Mật khẩu cũ</Box>
          <TextField  variant="outlined" />
        </Box>
        <Box className="new-password form-input" sx={{ mb: 2 }}>
          <Box className="txt-label">Mật khẩu mới</Box>
          <TextField  variant="outlined" />
        </Box>
        <Box className="new-password form-input">
          <Box className="txt-label">Mật khẩu mới (xác nhận)</Box>
          <TextField  variant="outlined" />
        </Box>
        <Box className="btn">
          <Button
            variant="outlined"
            style={{
              borderRadius: 35,
              border: "none",
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              color: "white",
            }}
            className="reset-btn"
          >
            Xác nhận
          </Button>
        </Box>
      </Box>
    </div>
  );
}
export default ChangePassword;
