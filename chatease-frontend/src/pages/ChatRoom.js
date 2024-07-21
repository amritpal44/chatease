import React, { useEffect, useRef, useState } from 'react'
import { apiConnector } from '../services/apiConnector';
import { messageendpoints } from '../services/apis';
import toast from 'react-hot-toast';

const ChatRoom = () => {

    const[messages, setMessages] = useState([]);
    const[user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Create a ref for the messages container
    const messagesEndRef = useRef(null);


    const fetchMessages = async () => {
        try {
            const response = await apiConnector('GET', messageendpoints.GET_MESSAGE_API);
            setMessages(response.data.data);
        } catch (error) {
            console.error("Error while fetching messages: ", error);
        }
    }

    const postMessages = async () => {
        try {
            setLoading(true);
            const response = await apiConnector('POST', messageendpoints.POST_MESSAGE_API, {
                user,
                message
            })

            setMessage('');

            fetchMessages();

            setLoading(false);

            toast.success("message sent successfully");
            
        } catch (error) {            
            toast.error(error.response.data.message)
            setLoading(false);
            console.error("Error in post message: ", error);
        }
    }

    useEffect( () => {
        fetchMessages();

        //to update messages in interval
        const interval = setInterval( () => {
            fetchMessages();
        } ,2000)

        //when useeffect unmount then this will stop the interval function
        return () => clearInterval(interval);
    }, []);

    useEffect( () => {
        console.log("messages: ", messages);
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className='flex flex-col w-full justify-center items-center pt-5 xl:w-3/4 mx-auto mb-10'>
            <h2 className='text-5xl font-serif'>CHAT ROOM</h2>
            <div className='flex flex-col lg:w-4/5 overflow-y-scroll max-h-[570px] px-3 py-3'>
                {messages.map( (message, index) => {

                    const showUser = index === 0 || message.user !== messages[index - 1].user;

                    return (
                        <div key={message._id} className={`flex flex-col ${ showUser ? 'mt-3' : 'mt-0'}`}>
                            {
                                showUser && (
                                    <div className={`font-bold ${ message.user == user ? 'text-right' : 'text-left'}`}>
                                        {message.user}
                                    </div>
                                )
                            }
                            <div className={`${ message.user == user ? 'text-right mx-2' : 'text-left ml-2'}`}>
                                {message.message}
                            </div>                            
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>

            <div className='flex gap-3 mt-5'>
                <input 
                    type='text' 
                    placeholder='Your Name' 
                    value={user} 
                    onChange={ (e) => setUser(e.target.value)}
                    className='px-3 py-1 rounded-md border text-black' 
                />

                <input 
                    type='text' 
                    placeholder='Type your message...' 
                    value={message} onChange={ (e) => setMessage(e.target.value)}
                    className='px-3 py-1 rounded-md text-black ' 
                    size={50}
                />

                <button disabled={loading} onClick={postMessages} className='px-4 py-1 rounded-md bg-[#3d65ff] text-xl font-bold'>Send</button>
            </div>

        </div>
    )
}

export default ChatRoom