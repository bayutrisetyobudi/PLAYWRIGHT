// @ts-check
const { test, expect } = require('@playwright/test');

test('Valid Register', async function ({ page })  {
    // Navigasi ke halaman registrasi
    await page.goto('https://auth.vcgamers.com/login/', { timeout: 100000 } );

  try {

    console.log('Navigataion Ke https://auth.vcgamers.com/login/');



  // Langkah 1: Mengklik tombol "Buat Akun"
  await page.click('strong[data-v-cecc4608]');

  console.log('Click Buat Akun');



  // Langkah 2: Isi formulir pendaftaran
  await page.type('input[placeholder="Masukkan alamat email"][data-v-cecc4608]', 'bayu@gmail.com');
  console.log('Isi Form Email');
  await page.type('input[placeholder="Password Min. 6 Karakter"][data-v-cecc4608]', 'password123');
  console.log('Isi Form Password');
  await page.type('input[placeholder="Ulangi Password"][data-v-cecc4608]', 'password123');
  console.log('Isi Form Ulangi Password');
  await page.type('input[placeholder="Masukkan No. Ponsel/Whatsapp"][data-v-cecc4608]', '081434563878');
  console.log('Isi Form No.HP');


const checkbox1 = await page.$('[data-v-cecc4608] .w-\\[18px\\]');


const checkbox2 = await page.$('[data-v-cecc4608] .min-w-\\[18px\\]');
if (checkbox1 && checkbox2) {
  console.log('Checkbox element found');
  await checkbox1.click();
  console.log('Checklist Checkbox Berlangganan');
  await checkbox2.click();
  console.log('Checklist Checkbox Setuju');
  
} else {
  console.error('Checkbox element not found');
}

await page.getByRole('button', { name: 'Daftar' }).click();
console.log('Click Tombol Daftar');
   await page.waitForTimeout(9000);

// Mendapatkan elemen dengan selector
const activationMessage = await page.$('[data-v-cecc4608] p.text-emerald-700.font-semibold');

// Mendapatkan teks dari elemen
const text = activationMessage ? await activationMessage.innerText() : null;

// Memeriksa apakah teks sesuai dengan harapan
if (text === 'Silahkan cek inbox email aktivasi') {
  console.log('Alert Teks sesuai dengan harapan');
} else {
  console.error('Alert Teks tidak sesuai dengan harapan');
}



  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }

});