import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../styles/_forgetPassword.scss";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useHistory } from "react-router-dom";


function ForgetPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChangeForm, setIsChangeForm] = useState(0);
  const history = useHistory();

  const handleChangeForm = (idForm) => {
    setIsChangeForm(idForm);
  };


  const renderConfirmPassCode = () => {
    return(
      <Box className="forget-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={() => handleChangeForm(0)}/>
        <Box className="head_title">
          Cấp lại mật khẩu
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          Mã xác nhận
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="forget-btn" onClick={() => handleChangeForm(2)}>
          Tiếp
        </Button>
      </Box>
    </Box>
    )
  }

  const renderGetPassCode = () => {
    return (
      <Box className="forget-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={() => history.push('/login')}/>
        <Box className="head_title">
          Cấp lại mật khẩu
        </Box>
      </Box>
      <Box className="email form-input">
        <Box className="txt-label">
          Email
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="forget-btn" onClick={() => handleChangeForm(1)}>
          Tiếp
        </Button>
      </Box>
    </Box>
    )
  };

  const renderChangePassword = () => {
    return (
      <Box className="change-password-form">
      <Box className="head">
        <ArrowCircleLeftOutlinedIcon onClick={() => handleChangeForm(1)} />
        <Box className="head_title">
          Cấp lại mật khẩu
        </Box>
      </Box>
      <Box className="new-password form-input" sx={{mb :2 }}>
        <Box className="txt-label">
          Mật khẩu mới
        </Box>
        <TextField variant="outlined" />
      </Box>
      <Box className="password form-input">
      <Box className="txt-label">
        Xác nhận mật khẩu mới
        </Box>
        <TextField  variant="outlined" />
      </Box>
      <Box className="btn">
        <Button variant="outlined" className="reset-btn" onClick={() => history.push('/login')}>
          Xác nhận
        </Button>
      </Box>
    </Box>
    )
  
  };
  return (
    isChangeForm === 0 ? renderGetPassCode() : isChangeForm === 1 ? renderConfirmPassCode() : renderChangePassword()
  );
}
export default ForgetPassword;
