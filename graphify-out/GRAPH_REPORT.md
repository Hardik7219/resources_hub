# Graph Report - resources_hub  (2026-10-01)

## Corpus Check
- 18 files · ~2,658 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 97 nodes · 124 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9518b69c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- ResourcesGrid.tsx
- package.json
- layout.tsx
- ResourcesHub.tsx
- devDependencies
- dependencies
- scripts
- README.md
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `ResourcesHub()` - 6 edges
3. `react` - 6 edges
4. `Filters` - 6 edges
5. `scripts` - 5 edges
6. `ResourcesGrid()` - 4 edges
7. `next` - 4 edges
8. `FilterSec()` - 3 edges
9. `Navbar()` - 3 edges
10. `Link()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `ResourcesHub()`  [EXTRACTED]
  app/page.tsx → components/ResourcesHub.tsx
- `SetFilters` --references--> `Filters`  [EXTRACTED]
  components/FilterSec.tsx → types/types.ts
- `GridFilter` --references--> `Filters`  [EXTRACTED]
  components/ResourcesGrid.tsx → types/types.ts
- `ResourcesHub()` --calls--> `ResourcesGrid()`  [EXTRACTED]
  components/ResourcesHub.tsx → components/ResourcesGrid.tsx
- `ResourcesHub()` --calls--> `FilterSec()`  [EXTRACTED]
  components/ResourcesHub.tsx → components/FilterSec.tsx

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 1 - "ResourcesGrid.tsx"
Cohesion: 0.24
Nodes (10): SetFilters, GridFilter, ResourcesGrid(), Card, Link(), react, Data, Filters (+2 more)

### Community 2 - "package.json"
Cohesion: 0.14
Nodes (13): eslintConfig, name, private, version, eslint, eslint-config-next, react-dom, tailwindcss (+5 more)

### Community 3 - "layout.tsx"
Cohesion: 0.22
Nodes (5): geistMono, geistSans, metadata, nextConfig, next

### Community 4 - "ResourcesHub.tsx"
Cohesion: 0.39
Nodes (6): Home(), FilterSec(), Navbar(), SetFilters, ResourcesHub(), lucide-react

### Community 5 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 6 - "dependencies"
Cohesion: 0.40
Nodes (5): dependencies, lucide-react, next, react, react-dom

### Community 7 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 8 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **55 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `SetFilters`, `Card` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 61 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ResourcesGrid.tsx` to `package.json`, `ResourcesHub.tsx`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Why does `next` connect `layout.tsx` to `package.json`, `ResourcesHub.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._