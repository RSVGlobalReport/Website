const resource = [
    /* --- CSS --- */
    '/dashboard/assets/css/style.css',

    /* --- PWA --- */
    '/dashboard/app.js',
    '/dashboard/sw.js',

    /* --- HTML --- */
    '/dashboard/index.html',
    '/dashboard/404.html',

    
        '/dashboard/categories/',
    
        '/dashboard/archives/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/dashboard/assets/img/favicons/android-chrome-192x192.png',
        '/dashboard/assets/img/favicons/android-chrome-512x512.png',
        '/dashboard/assets/img/favicons/apple-touch-icon.png',
        '/dashboard/assets/img/favicons/favicon-16x16.png',
        '/dashboard/assets/img/favicons/favicon-32x32.png',
        '/dashboard/assets/img/favicons/favicon.ico',
        '/dashboard/assets/img/favicons/site.webmanifest',
        '/dashboard/assets/img/favicons/mstile-150x150.png',
        '/dashboard/assets/js/dist/categories.min.js',
        '/dashboard/assets/js/dist/commons.min.js',
        '/dashboard/assets/js/dist/home.min.js',
        '/dashboard/assets/js/dist/misc.min.js',
        '/dashboard/assets/js/dist/page.min.js',
        '/dashboard/assets/js/dist/post.min.js',
        '/dashboard/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'rsvglobalreport.github.io',

    
        'localhost:4000',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

