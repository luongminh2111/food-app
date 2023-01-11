import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_login.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/login/LoginActionCallApi";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push("/");
  };

  const handleValidateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    }

    return false;
  };
  const handleGoToRegister = () => {
    history.push("/register");
  };

  const handleLogin = () => {
    if (!handleValidateEmail(email)) {
      // setIsCheckPass(true);
      // setAlert("Email không hợp lệ!");
      alert("Email không hợp lệ");
    }
    if (password.length === 0) {
      alert("Sai Email hoặc mật khẩu");
    } else {
      dispatch(login(email, password, history));
    }
  };

  return (
    <div className="login-container">
      <Box className="login-form">
        <Box className="head">
          <ArrowCircleLeftOutlinedIcon
            style={{ color: "#3ab19b" }}
            onClick={goHomePage}
          />
          <Box className="head_title">ĐĂNG NHẬP</Box>
        </Box>
        <Box className="email form-input">
          <Box className="txt-label">Email</Box>
          <TextField
            type="text"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box className="password form-input">
          <Box className="txt-label">Password</Box>
          <TextField
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button
          variant="text"
          className="btn-forget"
          onClick={() => history.push("/forget-password")}
        >
          Quên mật khẩu
        </Button>
        <Box className="btn-list">
          <Button
            variant="outlined"
            className="signin-btn"
            style={{
              borderRadius: 35,
              border: "none",
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              color: "white",
            }}
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
          <Button
            variant="text"
            className="signup-btn"
            onClick={handleGoToRegister}
            sx={{
              ml: 1,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            Đăng ký
          </Button>
        </Box>
      </Box>
    </div>
  );
}
export default Login;
