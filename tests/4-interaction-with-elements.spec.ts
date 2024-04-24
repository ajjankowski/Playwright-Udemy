import { test, expect } from '@playwright/test';

//Best practice in Playwright
test('user facing locators', async ({ page }) => {
    page.getByRole('button', { name: "email" })

    page.getByLabel('email')

    page.getByPlaceholder('First Name')

    page.getByText('Welcome')

    page.getByTestId('SignIn')

    page.getByTitle('Main Page')
});

test('locators', async ({ page }) => {
    //by Tag name
    page.locator('tag')

    //by ID
    page.locator('#id')

    //by Class
    page.locator('.class')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by Class full
    page.locator('[class="class full Name"]')

    //by combine selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //by Xpath
    page.locator('//div[@id="inputEmail"]')

    //by partial text match
    page.locator(':text("button")')

    //by exact text match
    page.locator(':text-is("button exact")')
});

test('child locators', async ({ page }) => {
    //each space equals to child element
    page.locator('nb-card nb-radio :text-is("Option1")')
    page.locator('nb-card').locator('nb-radio').locator('text-is("Option1")')
    page.locator('nb-card').getByRole('button', { name: "Sign In" }).first()

    //nth is counting from 0
    page.locator('nb-card').nth(3).getByRole('button')
});

test('parent locators', async ({ page }) => {
    page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" })
    page.locator('nb-card', { has: page.locator('.status-danger') }).getByRole('textbox', { name: "Email" })
    page.locator('bs-card').filter({ hasText: "Basic form" }).getByRole('textbox', { name: "Email" })
    page.locator('bs-card').filter({ has: page.locator('.status-danger') }).getByRole('textbox', { name: "Password" })
});

test('extracting values', async ({ page }) => {
    //single text value
    const buttonText = await page.locator('nb-card').textContent()
    expect(buttonText).toEqual('Submit')

    //all text values
    const allRadioButtons = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtons).toContain('Option1')

    //input value
    const emailField = page.locator('nb-card').getByRole('textbox', { name: 'Email' })
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('tst@test.com')

    const placeholderValue = await emailField.getAttribute('placeholder')
    expect(placeholderValue).toEqual('Email')
});

test('assertions', async ({ page }) => {
    //general assertions
    const value = 5
    expect(value).toEqual(5)

    const text = await page.locator('nb-card').textContent()
    expect(text).toEqual('Submit')

    //locator assertion -> needs await (waits up to 5s in default settings)
    await expect(page.locator('nb-card')).toHaveText('Submit')

    //soft assertion
    await expect.soft(page.locator('nb-card')).toHaveText('Submit')
})

test('auto-waiting', async ({ page }) => {
    await page.waitForLoadState('networkidle')
})

test('timeouts', async ({ page }) => {
    test.setTimeout(10000)
    const successButton = page.locator('.bg-success')
    await successButton.click({timeout: 16000})
})
