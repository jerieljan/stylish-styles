// ==UserScript==
// @name         4chan Smooth Scrolling
// @namespace    http://www.jerieljan.com
// @version      0.1
// @description  Smoothly scrolls whenever a # url is called, and when jquery is available.
// @author       You
// @match        http://*.4chan.org/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

/**
 * JS Smooth Scrolling - CSS-Tricks (http://css-tricks.com/snippets/jquery/smooth-scrolling/)
 * Minor edits: Adjusted offset due to the navbar (-80) and speed (1000 -> 650)
 */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 550);
                return false;
            }
        }
    });
});
