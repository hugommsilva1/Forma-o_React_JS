import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addToBuy }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const toBuyCreate = (text) => {
    const toBuyObj = { text: text, id: id };
    setId(id + 1);
    addToBuy(toBuyObj);
    document.getElementById("outlined-basic").value = null;
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Shopping List"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="text" onClick={() => toBuyCreate(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}