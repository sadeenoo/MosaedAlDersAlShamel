const express = require('express');
const app = express();
const port = 3000;

// تحديد المجلد الذي يحتوي على الملفات العامة (HTML, CSS)
app.use(express.static('public'));

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`الموقع يعمل على http://localhost:${port}`);
});
