import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    // First cell: the question

    const label = row.children[0];

    const summary = document.createElement('summary');

    summary.className = 'accordion-item-label';

    moveInstrumentation(label, summary);

    summary.append(...label.childNodes);

    // Second cell: the answer

    const body = row.children[1];

    body.className = 'accordion-item-body';

    // Wrap both in <details>, the browser's built-in expand/collapse

    const details = document.createElement('details');

    moveInstrumentation(row, details);

    details.className = 'accordion-item';

    details.append(summary, body);

    row.replaceWith(details);
  });
}
