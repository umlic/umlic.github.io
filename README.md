# UNIST MLIC research website

Homepage: https://unistmlic.github.io/
FIM project: https://unistmlic.github.io/FIM/

Static GitHub Pages site, published automatically from the root of `main` in `unistmlic/unistmlic.github.io`. No package installation or build step is required. Preserve `.nojekyll`.

## GitHub 웹에서 수정하기

`unistmlic` 계정 또는 이 저장소의 쓰기 권한을 받은 계정으로 수정할 수 있습니다.

1. 수정할 파일을 열고 연필 아이콘(Edit this file)을 누릅니다.
2. 내용을 수정한 뒤 `Commit changes`로 `main`에 저장합니다.
3. `Actions`에서 `pages build and deployment`가 성공하면 홈페이지에 반영됩니다. 브랜치로 작업했다면 `main`에 병합한 뒤 반영됩니다.

| 수정할 내용 | 파일 |
| --- | --- |
| 메인 소개, 연구 분야, 연락처 | `index.html` |
| 메인 논문 목록의 제목·저자·학회·분류·요약·이동 링크 | `data/papers.json` |
| 개별 논문의 상세 소개 | `papers/논문약어/index.html` |
| FIM 프로젝트 소개 | `FIM/index.html` |
| FIM 최종 논문 | `FIM/assets/FIM_paper.pdf` |
| 전체 디자인 / 메인 연구 분야 디자인 | `styles.css` / `lab-home.css` |

## 논문 목록 관리

메인 목록과 분야 필터는 `data/papers.json`을 읽어 자동으로 표시합니다. 표시 순서는 JSON 배열의 순서입니다. 논문 추가 시 기존 항목을 복사하고 `slug`, `name`, `title`, `authors`, `venue`, `category`, `summary`, `paper`를 채웁니다. 항목 사이의 쉼표와 큰따옴표를 유지하세요.

- `page`: 우리 사이트의 상세 페이지 경로입니다. 상세 페이지를 만들지 않았다면 이 필드를 생략하면 됩니다. 이때 목록을 클릭하면 `paper` 주소로 이동합니다.
- `aliases`: 한글 이름 등 추가 검색어 배열입니다.
- `award`: Spotlight 등 확인된 선정 정보입니다.
- `code`, `project`, `source`: 코드, 저자 프로젝트, 출처 주소를 기록합니다. 상세 페이지의 버튼을 바꿀 때는 해당 HTML도 함께 수정합니다.

`index.html`에는 JavaScript나 JSON 요청이 실패해도 읽을 수 있도록 정적 논문 목록도 포함되어 있습니다. 검색엔진과 JavaScript를 끈 환경까지 최신 내용으로 맞출 때는 이 사본도 갱신하세요. 새 상세 페이지를 만들면 `sitemap.xml`에 주소를 추가합니다.

## 수록 범위

공식 MLIC Publications 페이지를 2026-10-21 기준으로 대조했습니다. KAIST 공동연구를 제외한 연구실 논문 12편을 수록합니다: FIM, BGP, MARBO, IBAL, LMAC, SISL, SSE, S2Q, WALL, TAVT, EPQ, FoX. 학술지·워크숍 논문은 공식 목록에서 이 범위에 해당하는 항목이 없습니다. 이 디렉터리는 논문 목록이며 특허는 포함하지 않습니다.

연구 방향은 공식 홈페이지의 네 분야를 따릅니다: LLM-based Decision Making, Physical Intelligence, Core Reinforcement Learning, Applied Reinforcement Learning.

FIM의 `/FIM/` 경로는 논문에 인용된 주소이므로 유지합니다. 구현 코드는 https://github.com/yisak9101/FIM 입니다. 출처와 수록 대조 기록은 `sources.md`를 참고하세요.
