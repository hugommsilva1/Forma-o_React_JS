import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

export default function Form({ addToBuy }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  let [quantity, setQuantity] = useState(null);

  const toBuyCreate = (text) => {
    const toBuyObj = { text: text, id: id, quantity: quantity };
    setId(id + 1);
    addToBuy(toBuyObj);
    setText("");
    setQuantity("");
  };

  return (
    <Paper style={{ padding: "1em" }}>
          <h3>Shopping List</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          value = {text}          
          label="Item"          
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />        
        <TextField id="outline-basic2" value = {quantity} label= "Qty" onChange={(i) => setQuantity(i.target.value)} />
        <Button variant="text" onClick={() => toBuyCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}