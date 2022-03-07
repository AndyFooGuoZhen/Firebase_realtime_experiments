import React, { useRef, useEffect, useState } from "react";
import { Button, VStack, Text } from "@chakra-ui/react";

function Canvas() {
  const canvasRef = useRef(null);

  const [currentX, setCurentX] = useState(0);
  const [currentY, setCurrentY] = useState(600);

  const draw = (ctx) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.clearRect(0, 0, 1200, 600);
    ctx.rect(currentX, currentY, 50, -50);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //Our draw come here
    draw(context);
  }, [draw]);

  function updatePosition() {
    setCurrentY(currentY - 50);
    draw();
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

export default Canvas;
