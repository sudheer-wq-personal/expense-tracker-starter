# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Architecture

React 19 + Vite app. No router, no global state library, no backend — data is in-memory only and resets on page reload.

`App` is a thin orchestrator that holds the `transactions` array in state and passes it down:

- **`src/Summary.jsx`** — receives `transactions`, derives and displays `totalIncome`, `totalExpenses`, `balance`
- **`src/TransactionForm.jsx`** — owns form state (`description`, `amount`, `type`, `category`), calls `onAdd` prop with a new transaction object on submit
- **`src/TransactionList.jsx`** — owns filter state (`filterType`, `filterCategory`), renders the filtered transaction table

### Data shape

Each transaction: `{ id, description, amount, type, category, date }`  
- `amount` is a number (parsed via `parseFloat` on form submit)  
- `type`: `"income"` or `"expense"`  
- `category`: `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other`

### Styling

Plain CSS in `src/App.css`, no framework. Key classes: `.income-amount` (green), `.expense-amount` (red), `.balance-amount`, `.delete-btn` (styled but delete not yet implemented).
