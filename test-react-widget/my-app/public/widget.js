import React from 'react';
import { createRoot } from "react-dom/client";

const Blob = () => {
    return (
        <div className="App">
        <img alt="a pink square with a smiley face on it" title="party blob hangouts blob" loading="lazy" src="https://emojis.slackmojis.com/emojis/images/1643514770/7808/party-blob.gif?1643514770"></img>
      </div>
    )
}

const mountChatWidget = () => {
    const chatDiv = document.createElement("div");
    document.body.appendChild(chatDiv);
    const root = createRoot(chatDiv);
    root.render(<Blob />);
}

window.mountChatWidget = mountChatWidget;