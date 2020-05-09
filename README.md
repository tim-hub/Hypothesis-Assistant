# Hypothesis-Assistant

- [more about the plugin](https://tim.bai.uno/hello-world/)

A plugin for hypothes.is anntation, to enable bookmarklet on all websites on firefox



## Problem to solve

On firefox, there is no Hypothesis add-in, instead Hypothesis offer a bookmarklet, however clicking the bookmarklet everytime is so annoying.
This plugin is help you to enable Hypothesis on every websites by default.

## Road Map
- [ ] Keyboard shortcut to enable or disable hypothesis plugin
- [ ] Build a service for centralising black list not just creasy monkey script

## Blacklist Sample

```javascript
// @exclude         https://www.google.com/search*
// @exclude         https://*.youtube.com/*
// @exclude         moz-extension://*
// @exclude         http://localhost*
// @exclude         http://127.0.0.1*
// @exclude         http://192.168.*
// @exclude         http://*.*/wp-admin/*
```
The blacklist will be updated regularly.



## Inspired

- [Hypothesis web annotation in Firefox](https://medium.com/@delahera/hypothesis-web-annotation-mobile-358db1f9ec46)
- [Hypothesis wordpress](https://wordpress.org/plugins/hypothesis/#description)
