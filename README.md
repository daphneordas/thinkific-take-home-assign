# thinkific-take-home-assign

## To run the tests:

1. Will run all the tests in the tests folder in 3 browsers (headless by default)

- npm run test

2. Will run tests as headed

- npm run test:headed

3. Opens the Playwright UI so that tests can be run there (reminds me of Cypress UI)

- npm run test:ui

4. Will run Playwright debugger

- npm run test:debug

I also added prettier ( https://prettier.io/) so that my formatting would stay consistent and neat without me worrying about it:

- npm run prettier:fix

## GitHub Actions

Jobs are triggered manually from the Actions tab in GitHub, on push/pull-request, and if uncommented out, scheduled every Sunday at midnight PST:

1. test: installs Playwright and runs all the tests in the tests folder
2. deploy-report: deploys the Playwright HTML report to GitHub pages

GitHub Pages Report: https://daphneordas.github.io/thinkific-take-home-assign/

## Assumptions

- When I installed it from scratch I just chose the default settings:

1. Used Typescript
2. Test Folder Name: tests
3. Added default GitHub Actions workflow
4. Installed Playwright browsers

- I did these tests for desktop only, I haven't looked at the mobile site
- I'm using the Chrome browser only (since I'm using a static test user, I didn't want the other tests to fail when I changed values)
- I used a Canadian test user only accessing the site from Canada, with the English language
- I wasn't too sure about the terms used for the site, so I assumed a school is the user's custom site, with courses that are made up of chapters and lessons
- For courses, I mostly deal with checking the Currriculum tab and haven't touched the other tabs
- I'm used to having test accounts that are associated with test cases, but ideally we'd have a setup step where new test accounts are created in the backend, and other test data would be set up as well. In addition, teardown would include resetting any values that were updated, and deleting accounts used temporarily for testing
- I assumed that the test ids used for automation were 'data-qa', so I changed the default 'data-testid' for getByTestId to be 'data-qa' in the config file

## Implementation Approach

- While I waited for sandbox access, first I played around on the site with the access I had, just to see how it worked. Then, I started writing out test flows in an excel doc to gather my thoughts; I started with the main 'Create a course' and noticed there were different ways to do it (through the left side bar 'Courses' and the homepage dashboard button), and the way I thought to 'Update a course' included 'Updating a lesson' or 'Updating a chapter'. There were other scenarios I thought of, so I wrote them down in the sheet just in case. The rows in green in the sheet were the ones I ended up implementing.
- After, I installed Playwright with default settings and started setting up the repo, and tried running it with an example test to determine if my configuration was correct. I also made the file structure and tried to incorporate the page-object-model, by putting selectors and their methods within pages that correspond to the desktop site pages.
- Once I was able to run a test with my baseURL pointing to the correct school URL, I thought it'd be good to set up the GitHub Action. I used the default playwright.yml generated when I installed Playwright. I changed it to include different workflow triggers (manually trigger through the 'Actions' tab in GitHub, and a scheduled cron job that would run every Sunday at midnight PST that I commented out). In the same workflow file, I added another job that deploys the Playwright HTML report to GitHub pages.
- Then, I made the test spec files based on the excel sheet, and started filling out the pages with the selectors and methods that I needed to complete the flow within the test files.

## Technical Decisions

- Used the 'Arrange, Act, Assert' (AAA) pattern to structure the tests, and I also wanted to have 1 test spec to 1 test case flow that would match the excel sheet; at my company's automation framework we would usually have many tests in 1 spec file so I wanted to take this approach to try it out and have it be clearer what flow is being tested.
- While I was searching for selectors to choose I wanted to try and find data-testids to use, but found 'data-qa' instead throughout the code so I used that as the test id name to use. If I couldn't find a data-qa selector I would use 'getByRole' or 'locator'
- I put the selectors and the methods within the same page because the page file is pretty small, but if there comes a time where there's a lot of selectors and methods I would want to separate the file (e.g. homepage.page.elements.ts and homepage.page.methods.ts)
- I want the code to be as readable as possible and don't want to worry about formatting so I installed Prettier to keep it neat
- I put the test user in a users.json file, since that was what I'm used to for putting test users into a file for test data, but ideally there's probably something more secure I should be using
- I put the playwright config in a config folder, along with the prettierrc.json for formatting settings
- For the deploy-report job, I used the gh-pages branch approach, since once that branch is created GitHub will automatically enable GitHub Pages, so I wanted to use that default approach to make it easier for me to implement. Since the test job already uses the upload-artifact action I wanted to keep it simple and use the download-artifact action instead of choosing another action.

## Challenges Faced

- Getting used to the Playwright syntax since I was used to Cypress. It started getting easier the more I used it
- I would keep getting flagged as a bot by Cloudflare and deal with the email verification OTP, but I was able to avoid it by using the Playwright debug mode to step through and enter the OTP when it came to my email. Also, getting sandbox access stopped making the OTP appear
- I wanted to assert that notifications had correct text and would show up after certain actions were taken, but I couldn't seem to get it to work
- I originally had the repository as private, but in order to have the GitHub Pages functionality I had to make it public, and add permission for the bot user to write to pages

## Future Improvements

- Hide test user information
- I kept getting caught by Cloudflare, and also without the sandbox credentials proc-ing the email OTP, so I'd love to learn how to automate that process
- At my other company, Cypress cloud has a github action that has the reporting already on that platform, and to paralellize the tests in the run there's a 'matrix strategy' that can run different copies of the job in parallel. Since I haven't used GitHub Pages before, I think I would have to change the deploy-report job that I added to push the results to combine the results of the split jobs
- There are places where test ids are duplicated (e.g. the save button) so would think about improving how to consolidate duplicate selectors
