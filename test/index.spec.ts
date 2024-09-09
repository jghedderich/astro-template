import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4321');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle('Astro Template');
});

test('use the form', async ({ page }) => {
  await page.getByLabel('Username').fill('testing-username');
  await page.getByLabel('Email').fill('testing@gmail.com');
  await page.getByLabel('Password').fill('testing-password');

  await page.getByRole('button', { name: 'Submit' }).click();
});
