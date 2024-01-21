// @ts-check
const { test, expect } = require('@playwright/test');



test('InValid Login', async ({ page }) => {
    try {
        // Navigasi ke halaman login
        console.log('Langkah 1: Navigasi ke halaman login');

        await page.goto('https://auth.vcgamers.com/login/', { timeout: 100000 });

        console.log('Langkah 2: Isi formulir login');

        // Langkah 2: Isi formulir login
        await page.type('input[placeholder="Email"][data-v-cecc4608]', 'produktify.id@gmail.com');
        await page.type('input[placeholder="Password"][data-v-cecc4608]', '654321'); // Password yang salah.

        // Langkah 3: Mengklik tombol "Login"
        await page.click('button[data-v-cecc4608]', { timeout: 25000 });

        console.log('Langkah 3: Menunggu login');

        // Tunggu hingga 10 detik untuk login (sesuaikan dengan kebutuhan)
        await page.waitForTimeout(10000);

        const alert = await page.waitForSelector('text=Password anda salah.', {  timeout: 10000 });
        expect(alert).toBeTruthy(); // Assert bahwa elemen alert ada
        console.log('Gagal Login');

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }

});


test('Valid Login and Search Product', async ({ page }) => {
    console.log('Langkah 1: Navigasi ke halaman login');

    try {
        // Navigasi ke halaman login
        await page.goto('https://auth.vcgamers.com/login/', { timeout: 100000 });

        console.log('Langkah 2: Isi formulir login');

        // Langkah 2: Isi formulir login
        await page.type('input[placeholder="Email"][data-v-cecc4608]', 'produktify.id@gmail.com');
        await page.type('input[placeholder="Password"][data-v-cecc4608]', '123456');

        // Langkah 3: Mengklik tombol "Login"
        await page.click('button[data-v-cecc4608]', { timeout: 25000 });

        console.log('Langkah 3: Menunggu login');

        // Tunggu hingga 10 detik untuk login (sesuaikan dengan kebutuhan)
        await page.waitForTimeout(10000);

        // Cek apakah login berhasil dengan memeriksa URL atau elemen di halaman yang muncul setelah login
        const urlAfterLogin = page.url();
        if (urlAfterLogin === 'https://www.vcgamers.com/') {
            // Jika login berhasil
            console.log('Login berhasil!');
            console.log('Langkah 4: Cari produk setelah login berhasil');

            // Langkah 4: Cari produk setelah login berhasil
            await page.type('input[placeholder="placholder"]', 'Akun Game');

            // Simulasikan menekan tombol "Enter" setelah mengetikkan teks
            await page.keyboard.press('Enter');
            await page.waitForTimeout(10000);

            // Tunggu hingga 10 detik (sesuaikan dengan kebutuhan)
            console.timeEnd('Durasi Pengujian');
        } else {
            // Jika login gagal, cek apakah ada alert
            const alert = await page.waitForSelector('text=Email atau password anda salah.', { timeout: 100000 });
            expect(alert).toBeTruthy(); // Assert bahwa elemen alert ada
            console.log('Email atau password anda salah.');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
});
