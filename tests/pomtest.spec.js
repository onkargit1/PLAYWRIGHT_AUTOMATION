import { test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('test login', async ({ page }) =>{

    // Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');

    await page.waitForTimeout(5000);

 })

    // Home

    // Cart