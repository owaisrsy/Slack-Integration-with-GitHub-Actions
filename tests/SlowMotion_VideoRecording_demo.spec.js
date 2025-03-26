import {test, expect} from '@playwright/test'

test('Slow motion and video recording demo', async() =>{
    // Launch browser
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    // Create a new incognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });
    // Create a new page inside context.
    const page = await context.newPage();
    await page.goto('https://admin-demo.nopcommerce.com/login');
    
    const emailField = page.locator('input[name="Email"]');
    await emailField.click();
    await emailField.press('Control+A');
    await emailField.fill('admin@yourstore.com');

    const passwordField = page.locator('input[name="Password"]');
    await passwordField.click();
    await passwordField.press('Control+A');
    await passwordField.fill('admin');

    await page.locator('text=Log in').click();
    // Dispose context once it's no longer needed.
    await context.close();
})