import React, { useEffect } from "react";
import { useState } from "react";

const BotResponse = ({ response }) => {
  const [botResoponse, setBotResponse] = useState("");
  const [isPrinting, setIsPrinting] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    let index = 1;
    let msg = setInterval(() => {
      if (!isPrinting) {
        // if isPrinting is false, clear interval and return
        clearInterval(msg);
        return;
      }
      setBotResponse(response.slice(0, index));
      if (index >= response.length) {
        clearInterval(msg);
        setIsButtonVisible(false);
      }
      index++;
    }, 100);
    return () => clearInterval(msg); // clear interval on component unmount
  }, [response, isPrinting]);

  const stopPrinting = () => setIsPrinting(!isPrinting);

  return (
    <>
      <pre>
        {botResoponse}
        {botResoponse === response ? "" : "|"}
      </pre>
      {isButtonVisible && (
        <button className="stop-messgage" onClick={stopPrinting}>
          {isPrinting ? "Stop Message" : "Regenerate Message"}
        </button>
      )}
    </>
  );
};

export default BotResponse;
