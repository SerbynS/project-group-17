import { test, expect } from '@playwright/test';

// Задаём параметры трёх устройств
const devices = [
  { name: 'Mobile', width: 375, height: 667 }, // iPhone 6/7/8
  { name: 'Tablet', width: 768, height: 1024 }, // iPad
  { name: 'Desktop', width: 1280, height: 1080 }, // Full HD Desktop
];


async function getElement(page, selector) {
  return await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(`Element with selector "${selector}" not found`);
    }
    return window.getComputedStyle(element);
  }, selector);
}

devices.forEach(({ name, width, height }) => {
  test.describe(`${name} viewport`, () => {
    test(`should render correctly on ${name}`, async ({ page }) => {
      // Установка размеров экрана
      await page.setViewportSize({ width, height });

      // Переход на страницу
      await page.goto('http://172.17.0.2:5173/'); // Замените URL на нужный

      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);

      });

      // Проверка футера
      const footer = page.locator('.footer');
      await expect(footer).toBeVisible();

      // Проверка, что нет горизонтального скролла
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBe(clientWidth);

      // Специфическая проверка для мобильных устройств
    if (name === 'Mobile') {
      /*
        const footerContainer = await getElement(page, '.footer-container');
        expect(footerContainer.display).toBe('flex');
        expect(footerContainer.flexDirection).toBe('column');

        const footer = await getElement(page, '.footer');
        expect(footer.padding).toBe('40px 0px');
        expect(footer.backgroundColor).toBe('rgb(122, 49, 69)');
  */
      }
    });
  });
});
