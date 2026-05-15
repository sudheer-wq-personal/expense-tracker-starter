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

This is a React 19 + Vite app. No router or external state library. Components live in `src/`.

**Component tree:**
- `App` — holds `transactions` state, passes it down via props
  - `Summary` (`src/Summary.jsx`) — derives and displays `totalIncome`, `totalExpenses`, `balance` from `transactions`
  - `TransactionForm` (`src/TransactionForm.jsx`) — owns form state (`description`, `amount`, `type`, `category`), calls `onAdd` prop on submit
  - `TransactionList` (`src/TransactionList.jsx`) — owns filter state (`filterType`, `filterCategory`), renders filtered transaction table

**State shape in `App`:**
- `transactions` — array of `{ id, description, amount, type, category, date }`. `amount` is a float.

**Data flow:** `App` owns the transaction list. `TransactionForm` builds and passes new transactions up via `onAdd`. `Summary` and `TransactionList` are read-only consumers.

**Styling:** plain CSS in `src/App.css`, no CSS framework. Key classes: `.income-amount` (green), `.expense-amount` (red), `.balance-amount`, `.summary-card`, `.delete-btn` (styled but not yet wired up).

## Known Issues (intentional, part of the course)

- The transaction table has a `.delete-btn` CSS class defined but no delete functionality implemented.
- UI/UX is intentionally basic.
