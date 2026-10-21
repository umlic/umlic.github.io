# UNIST MLIC research website

Canonical homepage: https://unistmlic.github.io/
FIM project: https://unistmlic.github.io/FIM/

Static, dependency-free GitHub Pages site. Publish the root of the `main` branch in the public `unistmlic/unistmlic.github.io` repository. `.nojekyll` keeps the files unchanged.

## Contents
- `index.html`, `styles.css`, `script.js`: lab overview and publication directory with accessible filters/search. `lab-home.css` styles the homepage research areas.
- `FIM/`: detailed paper page, original paper figures, and current clean camera-ready PDF.
- `papers/`: individual overview pages for other selected lab publications, with authoritative paper links.
- `data/papers.json`: editable publication metadata used to generate the initial directory.
- `sources.md`: provenance and content notes.

## Research areas and FIM code
The homepage follows the four research directions listed at https://mllab.unist.ac.kr/: LLM-based Decision Making, Physical Intelligence, Core Reinforcement Learning, and Applied Reinforcement Learning. FIM appears as an individual publication in the directory.

The FIM experimental implementation is maintained at https://github.com/yisak9101/FIM and is linked from the project page.

## Updating papers
Edit the page HTML directly, and keep `data/papers.json` synchronized. Keep the `/FIM/` path stable: it is cited in the manuscript. Replace `FIM/assets/FIM_paper.pdf` when the camera-ready changes. The other paper pages link to original public publications and do not redistribute their PDFs.
