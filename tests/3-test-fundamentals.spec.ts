//Install Playwright: install node.js, install VS Code, terminal (Ctrl+`): npm init playwright@latest
//Choose in terminal: TS, tests, false, true
//npm install -> instaluje pakiety, któe są w package.json
//*.spec.ts -> file with tests
//npm (Node Pangace Mangaer)
//npx (Node Package Execute)
//Run tests from CLI: npx playwright test
//Run tests in UI mode: npx playwright test --ui
//Run tests from browser: npx playwright test --project=chromiom
//Run tests in headed/visible mode: npx playwright test --headed
//Run one test file: npx playwright test 0-example-test.spec.ts --headed
//Run one test by name: npx playwright test -g 'has title'
//Skip test: test.skip(..
//Check report from CLI: npx playwright show-report
//Trace results in report: npx playwright test --trace on
//Run tests on debug mode: npx playwright test --debug

import { test, expect } from '@playwright/test'; 

//Minimal test structure
test('first test', async ({page}) => {
  //
});

//Test suite
test.describe('test suite 1', () => {
  test('second test', () => {
    //
  })
  test('third test', () => {
    //
  })
});

//Test hooks
//Hooks inside test.describe(.. will be available only for the suit)

//beforeAll
console.log('Before All Hook');

//beforeEach
test.beforeEach(async({page}) => {
  await page.goto('https://playwright.dev/');
});

//afterAll
console.log('After All Hook');
//afterEach
console.log('After Each Hook');

test('has title', async ({ page }) => {

  //Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('has title, skipped', async ({ page }) => {

  //Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {

  //Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  //Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
