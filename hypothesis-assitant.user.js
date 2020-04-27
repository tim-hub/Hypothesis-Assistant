// ==UserScript==
// @name            Hypothesis Assistant
// @version         1.0.0-dev
// @author          tim-hub
// @description     This is a plugin to help enable hypothes.is bookmarklet to all websites by default on firefox.
// @description:zh  在Firefox上使Hypothesis自动启动。
// @namespace
// @homepageURL     https://github.com/tim-hub/Hypothesis-Assistant
// @supportURL      https://github.com/tim-hub/Hypothesis-Assistant/issues/

// @grant    				none
// @noframes
// @license         Apache License V2

// @exclude         https://www.google.com/search*
// @exclude         https://*.youtube.com/*
// @exclude         moz-extension://*
// @exclude         http://localhost*
// @exclude         http://127.0.0.1*
// @exclude         http://192.168.*
// @exclude         http://*.*/wp-admin/*
// ==/UserScript==

/**
 * Repo: https://github.com/tim-hub/Hypothesis-Assistant
 */
(
  function(){
    window.hypothesisConfig=function(){
      return{showHighlights:true,appType:'bookmarklet'};
    };
    var d=document;
    var s=d.createElement('script');
    s.setAttribute('src','https://hypothes.is/embed.js');
    d.body.appendChild(s);
  }
)();
