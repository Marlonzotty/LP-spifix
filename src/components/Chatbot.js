import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const key = process.env.REACT_APP_OPENAI_API_KEY;
    if (key) {
      setApiKey(key);
    } else {
      console.error('API key not found');
    }
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      console.log('Sending message to API...');
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: generatePrompt([...messages, userMessage]),
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.9,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Received response from API:', response.data);
      const botMessage = { sender: 'bot', text: response.data.choices[0].text.trim() };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
  };

  const generatePrompt = (messages) => {
    const conversation = messages.map((message) => `${message.sender === 'user' ? 'User' : 'Bot'}: ${message.text}`).join('\n');
    return `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n${conversation}\nBot:`;
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-[#202020] text-white rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Converse com nossa I.A e veja como nosso APP pode Melhorar sua empresa</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 rounded-l-lg border-none bg-gray-800 text-white focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-[#F46A35] text-white p-2 rounded-r-lg hover:bg-[#ff7b50] transition duration-300">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
