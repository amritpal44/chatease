const BASE_URL =  process.env.REACT_APP_BASE_URL

export const messageendpoints = {
    GET_MESSAGE_API: BASE_URL + "/getMessages",
    POST_MESSAGE_API: BASE_URL + "/postMessage  "
}