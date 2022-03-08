import React, { useRef, useEffect, useState } from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import { db } from "../config";
import { set, ref, get, child, onValue } from "firebase/database";

function Game({ playerNo }) {
  const canvasRef = useRef(null);
  const [globalCtx, setCtx] = useState("");

  function drawOthers() {
    onValue(ref(db, `players`), (snapshot) => {
      snapshot.forEach((element) => {
        console.log(element.val().currentX);
        console.log(element.val().currentY);
        let otherPlayerX = element.val().currentX;
        let otherPlayerY = element.val().currentY;
        draw(globalCtx, otherPlayerX, otherPlayerY);
      });
    });
  }

  let state = {
    text: " ",
    currentX: 0,
    currentY: 0,
  };

  const [currentX, setCurentX] = useState(playerNo * 100);
  const [currentY, setCurentY] = useState(600);

  const draw = (ctx, X, Y) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.clearRect(X, Y + 50, 50, -50);
    ctx.rect(X, Y, 50, -50);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
    state.currentX = currentX;
    state.currentY = currentY;
    set(ref(db, `players/Player` + playerNo), state);
    //Our draw come here
    draw(context, currentX, currentY);
    drawOthers();
  }, [draw]);

  function updatePosition() {
    setCurentY(currentY - 50);
    state.currentX = currentX;
    state.currentY = currentY;
    set(ref(db, `players/Player` + playerNo), state);
    draw(globalCtx, currentX, currentY);
    drawOthers();
  }

  return (
    <div>
      <VStack minH={"100vh"} justify={"center"} align="center">
        <canvas
          ref={canvasRef}
          id="canvasId"
          width="1200"
          height="600"
          style={{ border: "1px solid #000000" }}
        ></canvas>

        <Button onClick={updatePosition}> UP</Button>
      </VStack>
    </div>
  );
}

export default Game;
