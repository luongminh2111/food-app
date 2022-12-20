import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { deleteFoodItem } from '../../../actions/food/FoodActionCallApi';

function ConfirmDeleteModal(props) {

  const {open, setOpen, id} =props;
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () =>{
    dispatch(deleteFoodItem(id)).then(res => {
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
        <DialogTitle id="alert-dialog-title">
        食器を削除
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          この操作ではデータを復元できません。削除してもよろしいですか?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">キャンセル</Button>
          <Button onClick={handleDelete}  variant="contained" color="error" autoFocus>
          デリート
          </Button>
        </DialogActions>
      </Dialog>

  );
}
export default ConfirmDeleteModal;