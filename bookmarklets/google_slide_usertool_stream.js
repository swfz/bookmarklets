const broadcastChannel = new BroadcastChannel('comment_channel');

const addComment = (comment) => {
  console.log(comment);

  const element = document.createElement("p");
  element.innerText = comment;

  const boxElement = document.querySelector('.punch-present-iframe').contentWindow.document.querySelector('.punch-viewer-content');
  boxElement.appendChild(element);

  const elementTop = (boxElement.clientHeight - element.clientHeight) * Math.random();
  console.log(elementTop);

  const moveUnit = 5;
  const windowWidth = document.body.clientWidth;
  element.style.transform = `translateX(${windowWidth}px)`;
  element.style['font-size'] = '4em';
  element.style.position = 'absolute';
  element.style.top = `${elementTop}px`;
  let moveX = windowWidth;

  const elementWidth = element.clientWidth;

  const moveAnimation = () => {
    if (moveX >= -elementWidth) {
      moveX = moveX - moveUnit;
      element.style.transform = `translateX(${moveX}px)`;
      requestAnimationFrame(moveAnimation);
    }
  };
  moveAnimation();
}

const handleEvent = (event) => {
  event.data.forEach(comment => addComment(comment));
}

broadcastChannel.onmessage = handleEvent;
