/Deploy the app to staging by running these steps in order. Stop and report the error if any step fails — do not proceed to the next step.

## Steps

### 1. Run lint (quality check)
```bash
npm run lint
```
If lint fails, report the errors and stop. Do not build or deploy.

### 2. Build production bundle
```bash
npm run build
```
If the build fails, report the errors and stop. Do not deploy.

### 3. Push to staging
```bash
git push origin HEAD:staging
```
This pushes the current branch to the `staging` branch on the remote.

## After completion
Report a summary:
- Lint: passed / failed
- Build: passed / failed (include bundle size if available)
- Staging push: pushed / failed
- Staging branch URL: https://github.com/sudheer-wq-personal/new_expense_tracker/tree/staging
