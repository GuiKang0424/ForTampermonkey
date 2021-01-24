// ==UserScript==
// @name         bilibliControlRate
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var timer = null;
    function rate(){
        if(document.querySelector('video')){
           document.querySelector('video').playbackRate =100;
            clearInterval(timer);
        }
    }
    function createli(elevideo,rate){
        var li = document.createElement("li")
        li.innerHTML = '<li class="bilibili-player-video-btn-speed-menu-list " data-value="'+ rate+'">'+rate+'x</li>';
        li.addEventListener('click', function () { //播放开始执行的函数
            elevideo.playbackRate =rate;
        });
        document.querySelector(".bilibili-player-video-btn-speed-menu").appendChild(li);
    }
    function createLi(){
      if(document.querySelector(".bilibili-player-video-btn-speed-menu")){
          var elevideo = document.querySelector("video");
         createli(elevideo,2.3);
          createli(elevideo,2.5);
          createli(elevideo,2.7);
          createli(elevideo,3.0);
          createli(elevideo,3.3);
          createli(elevideo,3.5);
          createli(elevideo,3.7);
          createli(elevideo,4.0);

          clearInterval(timer);
         }
    }
    window.onload = function(){
        //timer = setInterval(rate,500);
        var elevideo = document.querySelector("video");
    elevideo.addEventListener('play', function () { //播放开始执行的函数
        console.log("开始播放");
        elevideo.playbackRate =2.5;
        console.log("倍速");
    });
     timer = setInterval(createLi,500);
    }


    // Your code here...
})();
