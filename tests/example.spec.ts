import { test, expect } from '@playwright/test';

test('runs blur', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel("test").click();
  await page.keyboard.press("Tab");

  await expect(page.getByText("Input was blurred")).toBeVisible();
});

