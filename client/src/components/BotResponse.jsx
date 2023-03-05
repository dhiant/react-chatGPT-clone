import React, { useEffect } from "react";
import { useState } from "react";

const BotResponse = ({ response, chatLogRef }) => {
  const [botResoponse, setBotResponse] = useState("");
  const [isPrinting, setIsPrinting] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    let index = 1;
    let msg = setInterval(() => {
      if (response !== " - The Ultimate AI Assistant") {
        setIsButtonVisible(true);
      }
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

      // scroll to the bottom of the page whenever the messages array is updated
      if (chatLogRef !== undefined) {
        chatLogRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 50);
    return () => clearInterval(msg); // clear interval on component unmount
  }, [chatLogRef, response, isPrinting]);

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
