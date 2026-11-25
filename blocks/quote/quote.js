
export default function decorate(block) {

  const [quoteRow, authorRow] = block.children;

  // Wrap the quote text in a <blockquote>

  const quoteCell = quoteRow && quoteRow.firstElementChild;

  if (quoteCell) {

    const blockquote = document.createElement('blockquote');

    blockquote.append(...quoteCell.childNodes);

    quoteCell.replaceChildren(blockquote);

  }

  // Mark the author row so it can be styled

  if (authorRow) authorRow.classList.add('quote-author');

}

export default function decorate(block) {

  const [quoteRow, authorRow] = block.children;

  // Wrap the quote text in a <blockquote>

  const quoteCell = quoteRow && quoteRow.firstElementChild;

  if (quoteCell) {

    const blockquote = document.createElement('blockquote');

    blockquote.append(...quoteCell.childNodes);

    quoteCell.replaceChildren(blockquote);

  }

  // Mark the author row so it can be styled

  if (authorRow) authorRow.classList.add('quote-author');

}
 