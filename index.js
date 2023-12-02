function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    if (message.trim() !== "") {
        appendMessage("You", message);
        messageInput.value = "";
        simulateReceivedMessage(); // Simulating a received message for demonstration purposes
    }
}

function simulateReceivedMessage() {
    // Simulating a received message after a short delay
    setTimeout(() => {
        appendMessage("Friend", "Hello! How are you?");
    }, 1000);
}