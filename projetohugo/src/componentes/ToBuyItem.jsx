import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditToBuyDialog from "./EditToBuyDialog";
import { alignProperty } from "@mui/material/styles/cssUtils";
import "../App.css";


export default function ToBuyItem({ toBuy, deleteToBuy, editToBuy }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <EditToBuyDialog editToBuy={editToBuy} open={openDialog} dialogHandler={dialogHandler} toBuy={toBuy} />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteToBuy(toBuy.id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={toBuy.text} secondary={"Qty: " + toBuy.quantity} onClick={() => setOpenDialog(true) } />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}