# YBN Reload

صفحة هبوط عربية ثابتة لمنصة **YBN Platform / YBN Reload**. لا تتصل هذه الصفحة بأي API أو خدمة خلفية؛ وهي تُوجّه المستخدم إلى البوت الرسمي على Telegram.

## الملفات

```text
.
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    └── images/og-placeholder.svg
```

## النشر على GitHub Pages

1. ارفع التغييرات إلى فرع `main`.
2. من المستودع افتح **Settings → Pages**.
3. اختر **Deploy from a branch**، ثم `main` و`/ (root)`، واضغط **Save**.
4. بعد ظهور رابط النشر النهائي، استبدل `https://alyabany.github.io/YBN-Platform-Website` في الملفات التالية بالرابط الفعلي، مع الإبقاء على الشرطة المائلة الأخيرة: `index.html` (canonical ووسوم Open Graph وTwitter وJSON-LD)، و`robots.txt`، و`sitemap.xml`.
5. استخدم الرابط الذي تعرضه GitHub Pages فعليًا أو نطاقك المخصص؛ لا تفترض عنوانًا قبل تفعيل النشر.

## Google Search Console

1. أضف عنوان الموقع المنشور كـ **URL prefix property** في [Google Search Console](https://search.google.com/search-console/).
2. أثبت ملكية الموقع بالطريقة المتاحة لك.
3. من **Sitemaps** أرسل `https://YOUR-SITE-URL/sitemap.xml` بعد استبدال الرابط.
4. استخدم **URL Inspection** لطلب فهرسة الصفحة الرئيسية عند الحاجة.

## ملاحظات

- رابط Telegram الرسمي: `https://t.me/YBN_Reload_bot`.
- لا يوجد شعار رسمي مرفق؛ لذلك تستخدم الواجهة اسمًا نصيًا بسيطًا، وملف OG الحالي Placeholder ينبغي استبداله بصورة العلامة المعتمدة عند توفرها.
- لا توجد مكتبات أو JavaScript أو أسرار أو بيانات خلفية ضمن الموقع.
