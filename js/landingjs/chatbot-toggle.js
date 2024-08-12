function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'flex';
        chatbotContainer.style.animation = 'slideIn 0.3s ease-out';
    } else {
        chatbotContainer.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            chatbotContainer.style.display = 'none';
        }, 300); // Duration matches the slideOut animation
    }
}
