"use strict";var header=document.querySelector("#header");$("#hamburger-button").click(function(){header.classList.toggle("active")}),$("#header-locals a").click(function(){header.classList.remove("active")}),$("#date-picker")[0].valueAsDate=new Date;var $root,supportsSmoothScroll=CSS.supports("scroll-behavior","smooth"),isIE=window.document.documentMode;supportsSmoothScroll&&!isIE||($root=$("html, body"),$('a[href^="#"]').click(function(){return $root.animate({scrollTop:$($.attr(this,"href")).offset().top},500),!1}));