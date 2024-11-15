import { useState } from "react";
import postChat from "../api/eliceChat";

const ChatBot = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      챗임
      <br />
      <input
        type="text"
        onChange={e => {
          setText(e.target.value);
          // console.log(text);
        }}
      />
      <button
        onClick={async e => {
          const response = await postChat(text);
          // console.log(response.data)
          setResult(response.data?.choices[0]?.message?.content)
        }}
      >보내기</button>
      <div>
        <span>{result}</span>
      </div>
    </>
  );
};

export default ChatBot;
