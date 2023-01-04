import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteFoodItem } from "../../../actions/food/FoodActionCallApi";

function ConfirmDeleteModal(props) {
  const { open, setOpen, id } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteFoodItem(id)).then((res) => {
      setOpen(false);
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">loại bỏ các món ăn</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Thao tác này không thể khôi phục dữ liệu. Bạn có chắc chắn muốn xóa ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          hủy
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          autoFocus
        >
          xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ConfirmDeleteModal;
