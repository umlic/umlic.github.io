# GitHub Pages configuration

- Repository: `unistmlic/unistmlic.github.io`
- Homepage: https://unistmlic.github.io/
- FIM project: https://unistmlic.github.io/FIM/
- Publishing source: `main`, `/ (root)`

The site uses static HTML, CSS and JavaScript. No package installation or build step is required. Keep `.nojekyll` at the repository root and commit the site files directly at the root, without an enclosing archive folder.

The homepage links to FIM and eight other publication overview pages. Update the project cards and `data/papers.json` together when adding research, and include new routes in `sitemap.xml`.

The FIM paper includes the full manuscript and appendix. Its hosted PDF is optimized for web delivery, retaining all 39 pages, text, links and page geometry. The experimental implementation is awaiting release; update the project page only after its repository is available.

After changing `main`, check the `pages build and deployment` workflow, then verify the homepage, `/FIM/`, the paper download and publication links.

Validation before this publication: all local HTML resource links resolve, both JavaScript files pass syntax checks, and the optimized PDF preserves the text and page geometry of the original.
