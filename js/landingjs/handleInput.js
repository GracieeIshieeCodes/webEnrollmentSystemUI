function handleInput() {
    const input = document.getElementById('chatInput');
    const button = document.getElementById('sendButton');

    if (input.value.trim() !== "") {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}