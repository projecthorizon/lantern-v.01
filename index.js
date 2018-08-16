function toggleContainer(containerId) {
  const containers = document.querySelectorAll('.sub-container');
  containers.forEach(function(div) {
    console.log(div.id);
    if (containerId === div.id) {
      console.log('match');
      div.style.display = 'block';
    } else div.style.display = 'none';
  });
}
