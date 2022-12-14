import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import "../App.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditToBuyDialog({ open, dialogHandler, toBuy, editToBuy }) {
  const [editedText, setEditedText] = React.useState(toBuy.text);
  const [editedQuantity, setEditedQuantity] = React.useState(toBuy.quantity);

  const textHandler = () => {
    editToBuy(toBuy.id, editedText, editedQuantity);
    dialogHandler();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Editing Product"}</DialogTitle>          
      <DialogContent>
      <h4>Item</h4>
        <TextField          
          defaultValue={editedText}
          fullWidth
          onChange={(e) => setEditedText(e.target.value)}
        />
        <h4>Quantity</h4>
        <TextField defaultValue={editedQuantity} onChange={(i) => setEditedQuantity(i.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancel</Button>
        <Button onClick={textHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}