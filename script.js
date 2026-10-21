const filters = [...document.querySelectorAll('[data-filter]')];
const rows = [...document.querySelectorAll('.paper-row')];
const search = document.getElementById('project-search');
let category = 'All';
function updateDirectory() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  rows.forEach(row => {
    const visible = (category === 'All' || row.dataset.category === category) && row.dataset.search.includes(query);
    row.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('result-count').textContent = `${count} project${count === 1 ? '' : 's'}`;
  document.getElementById('empty-results').hidden = count > 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  updateDirectory();
}));
search.addEventListener('input', updateDirectory);
