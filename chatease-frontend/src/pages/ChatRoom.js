import React, { useEffect, useState } from 'react'
import { apiConnector } from '../services/apiConnector';
import { messageendpoints } from '../services/apis';

const ChatRoom = () => {

    const[messages, setMessages] = useState([]);
    const[user, setUser] = useState('');
    const [message, setMessage] = useState('');


    const fetchMessages = async () => {
        try {
            const response = await apiConnector('GET', messageendpoints.GET_MESSAGE_API);
            console.log("input messages: ", response.data.data);
        } catch (error) {
            console.error("Error while fetching messages: ", error);
        }
    }

    useEffect( () => {
        fetchMessages();
    }, []);


    return (
        <div>
            Message page
        </div>
    )
}

export default ChatRoom