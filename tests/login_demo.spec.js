import { test, expect } from '@playwright/test';

test.only('Login demo test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause();
    
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    
    await expect(page.locator('text=ACME')).toBeVisible();
});

test('Login demo test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.pause();

    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();

    await page.locator('p:has-text("Paul Collings")').click();
    await page.locator('text=Logout').click();

    await expect(page.locator('button:has-text("Login")')).toBeVisible();
});

test('Login demo test 3', async ({ page }) => {
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
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();

    await page.waitForURL('https://admin-demo.nopcommerce.com/login');
});
