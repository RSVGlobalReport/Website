const resource = [
    /* --- CSS --- */
    '/Website/assets/css/style.css',

    /* --- PWA --- */
    '/Website/app.js',
    '/Website/sw.js',

    /* --- HTML --- */
    '/Website/index.html',
    '/Website/404.html',

    
        '/Website/categories/',
    
        '/Website/archives/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/Website/assets/img/favicons/android-chrome-192x192.png',
        '/Website/assets/img/favicons/android-chrome-512x512.png',
        '/Website/assets/img/favicons/apple-touch-icon.png',
        '/Website/assets/img/favicons/favicon-16x16.png',
        '/Website/assets/img/favicons/favicon-32x32.png',
        '/Website/assets/img/favicons/favicon.ico',
        '/Website/assets/img/favicons/site.webmanifest',
        '/Website/assets/img/favicons/mstile-150x150.png',
        '/Website/assets/js/dist/categories.min.js',
        '/Website/assets/js/dist/commons.min.js',
        '/Website/assets/js/dist/home.min.js',
        '/Website/assets/js/dist/misc.min.js',
        '/Website/assets/js/dist/page.min.js',
        '/Website/assets/js/dist/post.min.js',
        '/Website/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'rsvglobalreport.github.io/',

    
        'localhost:4000',
    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

