import { Button, VStack, Input } from "@chakra-ui/react";
import { set, ref, get, child } from "firebase/database";
import React, { Component, useState } from "react";
import { db } from "../config";
import { useNavigate } from "react-router-dom";

function CreateUser({ setPlayerNo, setGameState }) {
  const navigate = useNavigate();

  let gameState = {
    state: 0,
  };

  let state = {
    text: " ",
    currentX: 0,
    currentY: 0,
  };

  const handleText = (e) => {
    state.text = e.target.value;
  };

  const handleSubmit = (e) => {
    const dbref = ref(db);
    let playerString = "Player";

    get(child(dbref, `players`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          gameState.state = 1;
          set(ref(db, "gameState"), gameState);
          set(
            ref(db, `players/` + playerString + Number(snapshot.size + 1)),
            state
          );
          setPlayerNo(Number(snapshot.size + 1));

          navigate("/Game");
        } else {
          set(ref(db, `players/` + playerString + 1), state);

          set(ref(db, "gameState"), gameState);
          setPlayerNo(1);
          navigate("/Waiting");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <VStack h={"100vh"} justify="center" align={"center"}>
      <Input w={"50%"} onChange={handleText} placeholder="Enter name" />
      <Button onClick={handleSubmit}>Save</Button>
    </VStack>
  );
}

export default CreateUser;
