import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./style/modal.scss";

function RecipeModal(props) {
  const { open, setOpen, label } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        className="dialog-wrapper"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle className="dialog-title">
          <Box className="title-content">
            <Box className="food-name">料理名</Box>
            <Box className="food-calories">カロリー</Box>
          </Box>

          <Box className="close-btn">
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <img src="https://www.google.com/url?sa=i&url=htt" loading="lazy" />
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Save changes
          </Button>
          <Button
            autoFocus
            variant="outlined"
            onClick={handleClose}
            sx={{
              marginBottom: "40px",
              marginLeft: "0px !important",
              marginTop: "15px",
            }}
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default RecipeModal;
