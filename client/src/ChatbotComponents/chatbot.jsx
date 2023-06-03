import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BiBot, BiUser } from "react-icons/bi";
import Header from "../organization/Header";
import Footer from "../organization/Footer";

function ChatBot({ setDisplay }) {
  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  let arr = [];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "Hrushi";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };
    console.log("Hrushi  at submit");
    if (inputMessage !== "") {
      setChat((chat) => [...chat, request_temp]);
      setBotTyping(true);
      setInputMessage("");
    } else {
      window.alert("Please enter a valid message");
    }
  };

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    // apiKey: "sk-rZK41ggFxZjrZGKaAIOmT3BlbkFJkOIYwTIlIP4SxqotQsl",
  });
  const openai = new OpenAIApi(configuration);
  const getOpenAIResponse = () => {
    arr.push("USER:" + inputMessage);
    console.log("Hrushi login array" + arr.join());
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: arr.join() + "\n JAX:",
        max_tokens: 100,
        temperature: 0.7,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["USER:"],
      })
      .then((response) => {
        console.log("Hrushi2", response);
        if (response.data.choices) {
          response.data.choices.map((item) => {
            const response_temp = {
              sender: "bot",
              recipient_id: 1,
              msg: item.text,
            };
            setBotTyping(false);

            setChat((chat) => [...chat, response_temp]);
            return <></>;
          });
        }
      });
  };

  return (
    <div className="mx-auto">
      <Header setDisplay={setDisplay} />
      <div className="flex justify-center mt-5 mb-60">
        <div className="w-full max-w-md rounded-lg shadow-lg ">
          <div className="bg-blue-600 rounded-t-lg px-4 py-3">
            <h1 className="text-white font-bold text-lg">Smart Hire Chat-Bot</h1>
            <h1 className="text-white font-bold text-lg">
              Find Answers to all your questions...
            </h1>
            {botTyping && <h6>Bot Typing....</h6>}
          </div>
          <div className="px-4 py-2 bg-gray-100 h-96">
            {chat.map((user, key) => {
              const isBot = user.sender === "bot";
              return (
                <div
                  key={key}
                  className={`p-6 ${
                    isBot ? "flex items-start" : "flex items-end justify-end"
                  }`}
                >
                  {isBot ? (
                    <>
                      <BiBot className="text-blue-600 mr-2 mt-1" />
                      <h5 className="bg-white rounded-lg px-3 py-2">{user.msg}</h5>
                    </>
                  ) : (
                    <>
                      <h5 className="bg-blue-600 text-white rounded-lg px-3 py-2">{user.msg}</h5>
                      <BiUser className="text-gray-600 ml-2 mt-1" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="bg-gray-200 rounded-b-lg px-4 py-2">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Have a doubt? Enter here..."
                value={inputMessage}
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 mr-2"
              />
              <button
                type="submit"
                onClick={getOpenAIResponse}
                className="flex-shrink-0 bg-blue-600 text-white py-2 px-3 rounded-lg"
              >
                <IoMdSend className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChatBot;
