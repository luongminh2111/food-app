import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_signup.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
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
    history.push("/");
  };

  const handleGoToRegister = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    dispatch(register("minh", "bach12345"));
  };

  return (
    <div className="login-container">
      <Box className="register-form">
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon
            style={{ color: "#21b6ae" }}
            onClick={goHomePage}
          />
          <Box className="head_title">ĐĂNG KÝ</Box>
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
        <Box className="btn-list">
          <Button
            variant="outlined"
            className="signup-btn"
            style={{
              borderRadius: 35,
              border: "none",
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              color: "white",
            }}
            onClick={handleRegister}
          >
            Đăng ký
          </Button>
          <Button
            variant="text"
            className="signin-btn"
            onClick={handleGoToRegister}
            sx={{
              ml: 1,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </div>
  );
}
export default Register;
