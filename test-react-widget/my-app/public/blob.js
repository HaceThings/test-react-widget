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
    const blob = document.createElement("img");
    blob.alt = "a pink square with a smiley face on it";
    blob.title = "party blob hangouts blob";
    blob.loading = "lazy";
    blob.src = "https://emojis.slackmojis.com/emojis/images/1643514770/7808/party-blob.gif?1643514770";
    chatDiv.appendChild(blob);
    const documentBlob = document.body.getElementsByClassName("blob");
    documentBlob.appendChild(chatDiv);
    console.log("Appended child to body");
}

window.mountChatWidget = mountChatWidget;