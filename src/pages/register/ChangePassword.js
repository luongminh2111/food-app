import React, { useState } from "react";
import { Button, TextField, Box, dividerClasses } from "@mui/material";
import "../../styles/_changePassword.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

function ChangePassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      {" "}
      <Box className="change-password-form">
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon style={{ color: "#3ab19b" }} />
          <Box className="head_title">THAY ĐỔI MẬT KHẨU</Box>
        </Box>
        <Box className="new-password form-input" sx={{ mb: 2 }}>
          <Box className="txt-label">Mật khẩu đã có người sử dụng</Box>
          <TextField placeholder="パスワード" variant="outlined" />
        </Box>
        <Box className="new-password form-input" sx={{ mb: 2 }}>
          <Box className="txt-label">Mật khẩu mới</Box>
          <TextField placeholder="パスワード" variant="outlined" />
        </Box>
        <Box className="new-password form-input">
          <Box className="txt-label">Mật khẩu mới (xác nhận)</Box>
          <TextField placeholder="パスワード" variant="outlined" />
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
