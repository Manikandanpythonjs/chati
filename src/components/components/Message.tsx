

interface MessageProps {
    text: string,
    sender: string
}

const Message = ({ text, sender }: MessageProps) => {
    const isBot = sender === 'bot';
    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
            <div
                className={`max-w-xs p-3 rounded-lg ${isBot ? 'bg-gray-200 text-gray-900' : 'bg-blue-500 text-white'
                    }`}
            >
                {text}

            </div>
        </div>
    );
};

export default Message;
