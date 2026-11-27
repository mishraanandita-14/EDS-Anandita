const CELLS = ['image', 'name', 'engine', 'power', 'price', 'cta'];
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('bike-card');
    [...row.children].forEach((cell, i) => {
      if (CELLS[i]) cell.classList.add(`bike-card-${CELLS[i]}`);
    });
  });
}
