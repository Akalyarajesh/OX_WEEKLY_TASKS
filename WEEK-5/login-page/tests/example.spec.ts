import { test, expect } from "@playwright/test";

test.describe("App page", () => {
  test("Should show Home Page heading", async ({ page }) => {
    await page.goto("http://localhost:5174");
    await expect(page).toHaveTitle("login-page");
    await expect(
      page.getByRole("heading", { name: "Home Page" }),
    ).toBeVisible();
  });
});

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5174");
  });

  test("should render login component", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Welcome Back" }),
    ).toBeVisible();

    await expect(
      page.getByText("Login to your account to continue"),
    ).toBeVisible();
  });

  test("Should input field and button work", async ({ page }) => {
    await expect(page.getByPlaceholder("Email")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
  });

  test("Checking Login page Links", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "Forgot password?" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Sign Up" })).toBeVisible();
  });
});
