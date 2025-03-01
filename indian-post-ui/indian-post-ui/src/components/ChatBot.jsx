import { useState } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';
import { FaEnvelope, FaUser, FaRobot } from "react-icons/fa";

const LYZER_API_URL = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/';
const API_KEY = 'sk-default-6vK1uJ1PRWGM5TBPKdfl2lZmGTdKHVuL';

const ChatMessage = ({ message, isLoading }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`mb-6 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1f2937] to-[#2d3748] flex items-center justify-center">
            <FaRobot className="text-white text-sm" />
          </div>
        </div>
      )}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
          isUser 
            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white rounded-br-sm' 
            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-md'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">
          {isUser ? 'You' : 'Bharat Post Bot'}
        </span>
      </div>
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
            <FaUser className="text-white text-sm" />
          </div>
        </div>
      )}
    </div>
  );
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = async (message) => {
    try {
      setIsLoading(true);
      // Add user message to chat
      const newUserMessage = { text: message, sender: 'user' };
      setMessages(prev => [...prev, newUserMessage]);

      // Prepare the API request
      const response = await fetch(LYZER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({
          user_id: 'parrusain@gmail.com',
          agent_id: '67c20d940606a0f2404811fb',
          session_id: '67c20d940606a0f2404811fb',
          message: message,
        }),
      });

      const data = await response.json();
      
      // Add bot response to chat
      const botMessage = { text: data.response || 'Sorry, I could not process that.', sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Sorry, there was an error processing your message.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isChatOpen ? (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col animate-fade-in-up border border-gray-200">
          <div className="bg-gradient-to-r from-[#1f2937] to-[#2d3748] text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xl text-red-500" />
              <h2 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bharat Postal Bot
              </h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-4">
                <FaRobot className="mx-auto text-4xl mb-2 text-gray-400" />
                <p className="text-sm">Hi! I'm your Bharat Post assistant.</p>
                <p className="text-xs mt-1">How can I help you today?</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-gray-500 mt-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1f2937] to-[#2d3748] flex items-center justify-center">
                  <FaRobot className="text-white text-sm animate-pulse" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 