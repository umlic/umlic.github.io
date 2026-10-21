# UNIST MLIC research website

Canonical homepage: https://unistmlic.github.io/
FIM project: https://unistmlic.github.io/FIM/

Static, dependency-free GitHub Pages site. Publish the root of the `main` branch in the public `unistmlic/unistmlic.github.io` repository. `.nojekyll` keeps the files unchanged.

## Contents
- `index.html`, `styles.css`, `script.js`: lab research directory with accessible filters/search.
- `FIM/`: detailed paper page, original paper figures, and current clean camera-ready PDF.
- `papers/`: individual overview pages for other selected lab publications, with authoritative paper links.
- `data/papers.json`: editable publication metadata used to generate the initial directory.
- `sources.md`: provenance and content notes.

## FIM implementation release
No algorithm implementation has been supplied. The page truthfully labels it as being prepared. When the code is available, add the verified repository link to the two implementation locations in `FIM/index.html`; do not confuse this website source with experimental code.

## Updating papers
Edit the page HTML directly, and keep `data/papers.json` synchronized. Keep the `/FIM/` path stable: it is cited in the manuscript. Replace `FIM/assets/FIM_paper.pdf` when the camera-ready changes. The other paper pages link to original public publications and do not redistribute their PDFs.
