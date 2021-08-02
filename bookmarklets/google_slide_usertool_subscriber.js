const broadcastChannel = new BroadcastChannel('comment_channel');

const extractComment = (mutationRecords) => {
  const nodes = mutationRecords.filter(record => record.target.className === 'punch-viewer-speaker-questions').map(record => record.addedNodes[0]);
  console.log(nodes);
  const comments = Array.from(nodes).map(node => node.children[1].children[2].innerText);
  console.log(comments);
  return comments;
}

const observeElement = document.querySelector('.punch-viewer-speaker-questions');
const observer = new MutationObserver(function(records) {
  console.log(records);console.log('callback that runs when observer is triggered');
  broadcastChannel.postMessage(extractComment(records));
});

observer.observe(observeElement, {subtree: true, childList: true});
