import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_login.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/login/LoginActionCallApi";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [messageMail, setMessageMail] = useState("");
  const [messagePass, setMessagePass] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push("/");
  };

  const handleValidateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return false;
    }
    return true;
  };

  const [showSnackbar, setShowSnackbar] = useState(false);
  const onCloseClickHandler = (event) => {
    setShowSnackbar(false);
  };

  const CustomSnackbar = (props) => (
    <Snackbar
      autoHideDuration={2000}
      open={showSnackbar}
      onClose={onCloseClickHandler}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      children={props.children}
    ></Snackbar>
  );

  const handleGoToRegister = () => {
    history.push("/register");
  };

  const handleChangePass = (value) => {
    if (value.length === 0) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được để trống");
    } else if (value?.length < 8) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được ít hơn 8 kí tự");
    } else {
      setErrorPass(false);
      setMessagePass("");
      setPassword(value);
    }
  };

  const handleChangeEmail = (value) => {
    if (value.length === 0) {
      setErrorEmail(true);
      setMessageMail("Email không được để trống");
    } else if (handleValidateEmail(value)) {
      setErrorEmail(true);
      setMessageMail("Email không đúng định dạng");
    } else {
      setErrorEmail(false);
      setMessageMail("");
    }
    setEmail(value);
  };

  const handleLogin = () => {
    if (email?.length === 0) {
      setErrorEmail(true);
      setMessageMail("Email không được để trống");
    } else if (password?.length === 0) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được để trống");
    } else if (!errorEmail && !errorPass) {
      dispatch(login(email, password, history)).then((json) => {
        if (!json.data) {
          setShowSnackbar(true);
          setShowAlert(true);
        } else {
          history.push("/");
          window.location.reload();
        }
      });
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
            error={errorEmail}
            helperText={messageMail}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />
        </Box>
        <Box className="password form-input">
          <Box className="txt-label">Password</Box>
          <TextField
            type="password"
            error={errorPass}
            helperText={messagePass}
            variant="outlined"
            onChange={(e) => handleChangePass(e.target.value)}
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
      {showAlert ? (
        <CustomSnackbar>
          <Alert severity="error">Đăng nhập thất bại, vui lòng thử lại</Alert>
        </CustomSnackbar>
      ) : null}
    </div>
  );
}
export default Login;
