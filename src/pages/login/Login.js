import React, { useState } from "react";
import { Button, TextField, Box } from '@mui/material';
import '../../styles/login.scss';

function Login (props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box className="login-form">
      <Box>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
    </Box>
  );
}
export default Login;