/**
 * Author:
 *   T. Jameson Little <t.jameson.little@gmail.com>
 *
 * Source:
 *   https://github.com/beatgammit/base64-js/blob/v1.2.0/base64js.min.js
 *
 * License:
 *   The MIT License (MIT)
 *
 *   Copyright (c) 2014
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */

(function(r){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=r()}else if(typeof define==="function"&&define.amd){define([],r)}else{var e;if(typeof window!=="undefined"){e=window}else if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{e=this}e.base64js=r()}})(function(){var r,e,t;return function n(r,e,t){function o(i,a){if(!e[i]){if(!r[i]){var u=typeof require=="function"&&require;if(!a&&u)return u(i,!0);if(f)return f(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var c=e[i]={exports:{}};r[i][0].call(c.exports,function(e){var t=r[i][1][e];return o(t?t:e)},c,c.exports,n,r,e,t)}return e[i].exports}var f=typeof require=="function"&&require;for(var i=0;i<t.length;i++)o(t[i]);return o}({"/":[function(r,e,t){"use strict";t.toByteArray=a;t.fromByteArray=c;var n=[];var o=[];var f=typeof Uint8Array!=="undefined"?Uint8Array:Array;function i(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var e=0,t=r.length;e<t;++e){n[e]=r[e];o[r.charCodeAt(e)]=e}o["-".charCodeAt(0)]=62;o["_".charCodeAt(0)]=63}i();function a(r){var e,t,n,i,a,u;var d=r.length;if(d%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}a=r[d-2]==="="?2:r[d-1]==="="?1:0;u=new f(d*3/4-a);n=a>0?d-4:d;var c=0;for(e=0,t=0;e<n;e+=4,t+=3){i=o[r.charCodeAt(e)]<<18|o[r.charCodeAt(e+1)]<<12|o[r.charCodeAt(e+2)]<<6|o[r.charCodeAt(e+3)];u[c++]=i>>16&255;u[c++]=i>>8&255;u[c++]=i&255}if(a===2){i=o[r.charCodeAt(e)]<<2|o[r.charCodeAt(e+1)]>>4;u[c++]=i&255}else if(a===1){i=o[r.charCodeAt(e)]<<10|o[r.charCodeAt(e+1)]<<4|o[r.charCodeAt(e+2)]>>2;u[c++]=i>>8&255;u[c++]=i&255}return u}function u(r){return n[r>>18&63]+n[r>>12&63]+n[r>>6&63]+n[r&63]}function d(r,e,t){var n;var o=[];for(var f=e;f<t;f+=3){n=(r[f]<<16)+(r[f+1]<<8)+r[f+2];o.push(u(n))}return o.join("")}function c(r){var e;var t=r.length;var o=t%3;var f="";var i=[];var a=16383;for(var u=0,c=t-o;u<c;u+=a){i.push(d(r,u,u+a>c?c:u+a))}if(o===1){e=r[t-1];f+=n[e>>2];f+=n[e<<4&63];f+="=="}else if(o===2){e=(r[t-2]<<8)+r[t-1];f+=n[e>>10];f+=n[e>>4&63];f+=n[e<<2&63];f+="="}i.push(f);return i.join("")}},{}]},{},[])("/")});
