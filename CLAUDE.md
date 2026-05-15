# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run lint     # run ESLint
npm run preview  # preview production build locally
```

## Architecture

This is a React 19 + Vite app with a single-component architecture. All state and UI live in `src/App.jsx` — there are no sub-components, routers, or external state libraries.

**State shape in `App`:**
- `transactions` — array of `{ id, description, amount, type, category, date }`. `amount` is stored as a string (not a number), which causes incorrect totals — a known intentional bug in the starter.
- `description`, `amount`, `type`, `category` — controlled form inputs for adding a new transaction.
- `filterType`, `filterCategory` — filter selectors that narrow the displayed transaction list.

**Data flow:** all logic is inline in `App`. Filtering is computed inline (no memoization). Totals (`totalIncome`, `totalExpenses`, `balance`) are derived via `.reduce()` directly in the render body.

**Styling:** plain CSS in `src/App.css`, no CSS framework. Key classes: `.income-amount` (green), `.expense-amount` (red), `.balance-amount`, `.summary-card`, `.delete-btn` (styled but not yet wired up).

## Known Issues (intentional, part of the course)

- `amount` is stored as a string, so `reduce` concatenates instead of summing — totals are wrong.
- The transaction table has a `.delete-btn` CSS class defined but no delete functionality implemented.
- UI/UX is intentionally basic.
