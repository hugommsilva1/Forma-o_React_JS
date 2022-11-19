import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../componentes/Form";
import ToBuyItem from "../componentes/ToBuyItem";
import "../App.css";

export default function Home() {
  const [toBuys, setToBuys] = useState([]);
  const addToBuy = (toBuy) => {
    setToBuys([...toBuys, toBuy]);
  };

  const deleteToBuy = (id) => {
    var filtered = toBuys.filter((toBuy) => toBuy.id !== id);
    setToBuys(filtered);
  };

  const editToBuy = (id, editedText, editedQuantity) => {
    var toBuysArray = toBuys;

    for (var i in toBuysArray) {
      if (toBuysArray[i].id == id) {
        toBuysArray[i].text = editedText;
        toBuysArray[i].quantity = editedQuantity;
      }
    }

    // console.log(todosArray);
    // todosArray.splice(todosArray.id, 1, { text: editedText, id: id });
    // console.log(todosArray);
    setToBuys(toBuysArray);
  };


    return (
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form addToBuy={addToBuy} />
        <List sx={{ marginTop: "1em" }}>
          {toBuys.map((toBuy) => (
            <div key={toBuy.id} style={{ marginTop: "1em" }}>
              <ToBuyItem editToBuy={editToBuy} toBuy={toBuy} deleteToBuy={deleteToBuy} />
            </div>
          ))}
        </List>
      </Container>
    );

}