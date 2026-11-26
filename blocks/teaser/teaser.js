function addZoomOnHover(block) {
  const button = block.querySelector('a');

  const image = block.querySelector('.image');

  if (!button || !image) return;

  button.addEventListener('mouseover', () => image.classList.add('zoom'));

  button.addEventListener('mouseout', () => image.classList.remove('zoom'));
}

export default function decorate(block) {
  // Label the two rows so CSS can target them by name

  const [imageRow, contentRow] = block.children;

  if (imageRow) imageRow.classList.add('image-wrapper');

  if (contentRow) contentRow.classList.add('content');

  // Label the image and the first heading

  const img = block.querySelector('img');

  if (img) img.classList.add('image');

  const title = block.querySelector('h1, h2, h3, h4, h5, h6');

  if (title) title.classList.add('title');

  addZoomOnHover(block);
}
