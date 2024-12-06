import { useState } from 'react';
import Message from './Message';
import { Box } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';

const ChatArea = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! How can I assist you today?', sender: 'bot' },
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full">

            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                {messages.map((msg) => (
                    <Message key={msg.id} text={msg.text} sender={msg.sender} />
                ))}
            </div>


            <div className="flex items-center p-4 bg-white border-t">
                <Box className='w-full flex flex-row justify-between items-center gap-5'>

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="shadow-md rounded-lg bg-transparent w-full h-20 flex-grow p-2 border-b-4 border-b-blue-500  focus:outline-none block focus:ring-2 focus:ring-blue- text-gray-600"
                    />
                    <div>

                        <IoSendSharp
                            className="cursor-pointer ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={sendMessage} color='white' size={50} />
                    </div>

                </Box>


            </div>
        </div>
    );
};

export default ChatArea;
