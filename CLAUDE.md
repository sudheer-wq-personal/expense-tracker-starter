# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Architecture

This is a single-component React app (`src/App.jsx`) built with Vite. All state — transactions list, form fields, and filter state — lives in `App` via `useState`. There is no routing, no global state library, and no backend; data is in-memory only and resets on page reload.

### Data shape

Each transaction has: `{ id, description, amount, type, category, date }`.  
- `type` is `"income"` or `"expense"`  
- `category` is one of: `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other`  
- `amount` is stored as a string (form input value), but arithmetic is performed on it directly — a known bug where string concatenation occurs instead of numeric addition.

### Known issue

`totalIncome` and `totalExpenses` use `.reduce((sum, t) => sum + t.amount, 0)` where `t.amount` is a string, so the reduce concatenates strings instead of summing numbers. Fix by parsing: `sum + parseFloat(t.amount)`.

### Styling

Plain CSS in `src/App.css` with no CSS framework. Key classes: `.income-amount` (green), `.expense-amount` (red), `.balance-amount`. A `.delete-btn` class exists in the CSS but delete functionality is not yet implemented in the component.
