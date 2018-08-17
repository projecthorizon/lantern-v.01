function toggleContainer(containerId) {
  const containers = document.querySelectorAll('.sub-container');
  const subNavLinks = document.querySelectorAll('.sub-nav a');
  // toggle divs
  for (let div of containers) {
    if (containerId === div.id) div.style.display = 'block';
    else div.style.display = 'none';
  }
  // toggle active link
  for (let a of subNavLinks) {
    if (containerId === a.dataset.ref) a.style.color = 'rgb(56, 74, 95)';
    else a.style.color = 'white';
  }
}
