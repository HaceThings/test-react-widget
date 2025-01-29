/*
const Blob = () => {
    return (
        <div className="App">
            <img alt="a pink square with a smiley face on it" title="party blob hangouts blob" loading="lazy" src="https://emojis.slackmojis.com/emojis/images/1643514770/7808/party-blob.gif?1643514770"></img>
        </div>
    )
}
*/

const mountChatWidget = () => {
    const chatDiv = document.createElement("div");
    const blob = document.createElement("img", options={
        alt: "a pink square with a smiley face on it",
        title: "party blob hangouts blob",
        loading: "lazy",
        src: "https://emojis.slackmojis.com/emojis/images/1643514770/7808/party-blob.gif?1643514770"
    });
    chatDiv.appendChild(blob);
    document.body.appendChild(chatDiv);
}

window.mountChatWidget = mountChatWidget;