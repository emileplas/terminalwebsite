const messages = document.getElementsByTagName('main');

shouldScroll = messages.scrollTop + messages.clientHeight === messages.scrollHeight;

function scrollToBottom() {
    console.log("we are scrolling")
    messages.scrollTop = messages.scrollHeight;
  }

function shouldScroll(){
  if (!shouldScroll) {
    scrollToBottom();
}
}

shouldScroll()
