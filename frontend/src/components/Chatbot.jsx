import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://shahnaz999aqsa.pythonanywhere.com/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply = data.reply || data.error || "Error getting reply";

      setMessages([...newMessages, { sender: "bot", text: botReply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Server error. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden z-50">
          <div className="bg-indigo-600 text-white p-3 font-semibold">
            Aqsa’s Chatbot 🤖
          </div>
          <div className="h-80 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-indigo-100 self-end ml-auto text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm italic">Typing...</div>
            )}
          </div>

          <div className="flex border-t">
            <input
              type="text"
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 text-sm hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
