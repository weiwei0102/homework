require.config({
    baseUrl: "./resource/app/",
    paths: {
        "zepto": "../libs/zepto",
        "swiper": "../libs/swiper-4.3.5.min",
        "bscroll": "../libs/better-scroll"
    }
});
require(['demo'], function(opt) {
    opt.first();
})