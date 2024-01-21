// @ts-check
const { test, expect } = require('@playwright/test');

test('Valid Search Product', async ({ page }) => {
    console.log('Langkah 1: Navigasi ke halaman home');
    await page.goto('https://vcgamers.com/', { timeout: 120000 });

    try {
        // Navigasi ke halaman registrasi


        console.log('Langkah 2: Cari produk dan Enter');

              // Langkah 4: Cari produk setelah login berhasil
              await page.type('input[placeholder="placholder"]', 'Akun Game');

              // Simulasikan menekan tombol "Enter" setelah mengetikkan teks
              await page.keyboard.press('Enter');
              await page.waitForTimeout(10000);


    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
});