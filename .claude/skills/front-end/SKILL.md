---
name: front-end
description: >
  Front-end development skills for this React + Vite expense tracker app.
  Covers component structure, styling conventions, and UI patterns.
type: domain
---

This skill covers front-end conventions for this project.

## Stack
- React 19 + Vite
- Plain CSS (no framework)
- Recharts for data visualization

## Component conventions
- Components live in `src/`, one file per component
- All styling in `src/App.css` using plain class names
- No global state library — data flows down via props from `App.jsx`

## Key patterns
- Aggregate data close to the component that needs it (see `Summary.jsx`, `SpendByCategory.jsx`)
- Filter/derive from the `transactions` array — never mutate it
- New components receive `transactions` as a prop from `App.jsx`
