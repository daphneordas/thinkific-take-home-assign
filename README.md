# thinkific-take-home-assign

This is my first time using Playwright, so when I installed it from scratch I just chose the default settings

1. Used Typescript
2. Test Folder Name: tests
3. Added default GitHub Actions workflow
4. Installed Playwright browsers

To run the tests:
npm run test

- will run all the tests in the tests folder in 3 browsers (headless by default)

OR

npm run test:headed

- will run tests as headed

OR

npm run test:ui

- opens the Playwright UI so that tests can be run there (reminds me of Cypress UI)


I also added prettier ( https://prettier.io/) so that my forrmatting would stay consistent and neat without me worrying about it:
npm run prettier:fix

---

GitHub Actions:
I used the default playwright.yml generated when I installed Playwright. I changed it to include different workflow triggers (manually trigger through the 'Actions' tab in GitHub, and a scheduled cron job that would run every Sunday at midnight PST that I commented out). In the same workflow file, I added another job that deploys the Playwright HTML report to GitHub pages.

GitHub Pages Report: https://daphneordas.github.io/thinkific-take-home-assign/