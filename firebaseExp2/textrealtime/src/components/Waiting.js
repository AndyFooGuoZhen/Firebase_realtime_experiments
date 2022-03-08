import { AlertDialogContent, VStack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config";
import { off, onValue, ref } from "firebase/database";

function Waiting() {
  const navigate = useNavigate();

  const monitorDataBase = () => {
    return onValue(ref(db, `players`), (snapshot) => {
      if (snapshot.size > 1) {
        navigate("/Game");
        return;
      }
    });
  };

  return (
    <VStack h={"100vh"} justify="center" align={"center"}>
      <Text onLoad={monitorDataBase()}>Please wait for other players</Text>
    </VStack>
  );
}

export default Waiting;
