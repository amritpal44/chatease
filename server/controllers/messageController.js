const chatModel = require("../model/chatModel")

exports.fetchMessages = async (req, res) => {
    try {
        const messages = await chatModel.find();
        return res.status(200).json({
            success: true,
            data: messages
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Messages cannot be fetched"
        })
    }
}

exports.postMessage = async(req, res) => {
    try {        
        const {user, message} = req.body;

        if(!user || !message){
            return res.status(400).json({
                success: false,
                message: "All details not entered"
            })
        }

        const newMessage = await chatModel.create({
            user: user,
            message: message
        })

        return res.status(201).json({
            success: true,
            message: "new message entry created"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error while creating new message entry"
        })
    }
}