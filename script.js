const directory = document.getElementById('paper-list');
const filterGroup = document.querySelector('.filters');
const search = document.getElementById('project-search');
let category = 'All';
function updateDirectory() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  directory.querySelectorAll('.paper-row').forEach(row => {
    const visible = (category === 'All' || row.dataset.category === category) && row.dataset.search.includes(query);
    row.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('result-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
  document.getElementById('empty-results').hidden = count > 0;
}
filterGroup.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  category = button.dataset.filter;
  filterGroup.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  updateDirectory();
});
search.addEventListener('input', updateDirectory);

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function publicationRow(paper) {
  const row = element('article', 'paper-row');
  row.dataset.category = paper.category;
  row.dataset.search = [paper.slug, paper.name, paper.title, paper.authors, paper.venue, paper.award || '', paper.category, paper.summary, ...(paper.aliases || [])].join(' ').toLocaleLowerCase();
  const meta = element('div', 'paper-meta');
  meta.append(element('span', 'venue', paper.venue), element('span', 'category', paper.category));
  if (paper.award) meta.append(element('span', 'paper-award', paper.award));
  const main = element('div', 'paper-main');
  const title = element('a', 'paper-title', paper.title);
  title.href = paper.page || paper.paper;
  const arrow = element('span', 'row-arrow', '↗');
  arrow.setAttribute('aria-hidden', 'true');
  title.append(arrow);
  main.append(title, element('p', 'paper-authors', paper.authors), element('p', 'paper-description', paper.summary));
  const acronym = element('a', 'paper-acronym', paper.name);
  acronym.href = paper.page || paper.paper;
  acronym.setAttribute('aria-label', `Explore ${paper.name}`);
  row.append(meta, main, acronym);
  return row;
}

// Keep the static directory available if JavaScript or the data request fails.
// Editing this JSON on GitHub updates the live directory without editing HTML.
fetch('data/papers.json', { cache: 'no-cache' })
  .then(response => {
    if (!response.ok) throw new Error('Publication data could not be loaded.');
    return response.json();
  })
  .then(papers => {
    const required = ['slug', 'name', 'title', 'authors', 'venue', 'category', 'summary', 'paper'];
    if (!Array.isArray(papers) || !papers.length || !papers.every(paper => required.every(key => typeof paper[key] === 'string' && paper[key].trim()))) {
      throw new Error('Publication data is incomplete.');
    }
    const categories = ['All', ...new Set(papers.map(paper => paper.category))];
    if (!categories.includes(category)) category = 'All';
    const buttons = categories.map(name => {
      const button = element('button', '', name);
      button.type = 'button';
      button.dataset.filter = name;
      button.setAttribute('aria-pressed', String(category === name));
      return button;
    });
    const rows = papers.map(publicationRow);
    directory.replaceChildren(...rows);
    filterGroup.replaceChildren(...buttons);
    updateDirectory();
  })
  .catch(error => console.warn(error.message));
