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
  const [checkPass, setIsCheckPass] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const goHomePage = () => {
    history.push("/");
  };

  const handleGoToRegister = () => {
    history.push("/login");
  };

  const handleRegister = () => {
<<<<<<< HEAD
    if(password !== confirmPassword){
      setIsCheckPass(true);
    }
    else{
      if(email.length === 0 || password.length === 0){
        alert("Email or password is wrong");
      } else {
        dispatch(register(email, password, history));
      }
    }
  
    
=======
    dispatch(register("minh", "bach12345"));
>>>>>>> 166b2a8d622f433415a3afe4c228efdd3ec41668
  };

  return (
    <Box className="register-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={goHomePage} />
        <Box className="head_title">Đăng ký</Box>
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
      { checkPass ?    
       <Box className="txt-label" style={{ color: 'red', marginLeft :' 35px'}}>
        Mật khẩu không trùng khớp
        </Box> : null}
      <Box className="btn-list">
        <Button
          variant="outlined"
          className="signup-btn"
          onClick={handleRegister}
        >
          Đăng ký
        </Button>
        <Button
          variant="text"
          className="signin-btn"
          onClick={handleGoToRegister}
        >
          Đăng nhập
        </Button>
      </Box>
    </Box>
  );
}
export default Register;
