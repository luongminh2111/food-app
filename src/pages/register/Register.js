import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_signup.scss";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/login/LoginActionCallApi";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function Register(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);
  const [messageConfirmPass, setMessageConfirmPass] = useState('');
  const [messagePass, setMessagePass] = useState('');
  const [messageMail, setMessageMail] = useState('');
  const [errorMail, setErrorMail] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const onCloseClickHandler = (event) => {
      setShowSnackbar(false);
  };

  const CustomSnackbar = (props) => (
    <Snackbar
        autoHideDuration={2000}
        open={showSnackbar}
        onClose={onCloseClickHandler}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        children={props.children}
    >
    </Snackbar>
  );

  const goHomePage = () => {
    history.push("/");
  };

  const handleGoToLogin = () => {
    history.push("/login");
  };

  const handleChangeMail = (value) => {
    if(handleValidateEmail(value)){
      setErrorMail(true);
      setMessageMail("Email không đúng định dạng");
    } else{
      setErrorMail(false);
      setMessageMail('');
    }
    setEmail(value);
  }

  const handleChangePass = (value) => {
    if(value?.length < 8) {
      setErrorPass(true);
      setMessagePass("Mật khẩu không được ít hơn 8 kí tự");
    }else {
      setErrorPass(false);
      setMessagePass('');
      setPassword(value);
    }
  }

  const handleChangeConfirmPass = (value) => {
    if(value !== password) {
      setErrorConfirmPass(true);
      setMessageConfirmPass("Mật khẩu không trùng khớp");
    }else{
      setErrorConfirmPass(false);
      setMessageConfirmPass('');
    }
  }

  const handleValidateEmail = (mail) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return false;
    }
    return true;
  };
  const handleRegister = () => {
    if(email?.length === 0){
      setErrorMail(true);
      setMessageMail("Email không được để trống");
    } else
    if(password?.length === 0){
      setErrorPass(true);
      setMessagePass("Mật khẩu không được để trống");
    } else
    if( !errorConfirmPass && !errorMail && !errorPass){
      dispatch(register(email, password, history)).then(json =>
        {
          if(json.data?.code === 200){
            setShowSnackbar(true);
            setShowAlert(true);
            setTimeout(() => {
              history.push('/login');
            }, [2000])
          } else if(json?.data?.code === 500){
            setShowSnackbar(true);
            setShowAlert(true);
            setDuplicate(true);
          }

        });
    }
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
            error={errorMail}
            helperText={messageMail}
            onChange={(e) => handleChangeMail(e.target.value)}
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
            error={errorPass}
            helperText={messagePass}
            variant="outlined"
            onChange={(e) => handleChangePass(e.target.value)}
          />
        </Box>
        <Box className="password-confirm form-input">
          <Box className="txt-label">Xác nhận mật khẩu</Box>
          <TextField
            type="password"
            error={errorConfirmPass}
            helperText={messageConfirmPass}
            variant="outlined"
            onChange={(e) => handleChangeConfirmPass(e.target.value)}
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
            onClick={handleGoToLogin}
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
      {showAlert ?  duplicate ? 
      <CustomSnackbar>
        <Alert severity="error">
            Đăng kí thất bại, Email đã được đăng kí.
        </Alert>
      </CustomSnackbar> : <CustomSnackbar>
        <Alert severity="success">
            Đăng kí tài khoản thành công
        </Alert>
      </CustomSnackbar> : null}
    </div>
  );
}
export default Register;
