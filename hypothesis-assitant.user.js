// ==UserScript==
// @name            Hypothesis Bookmarklet Assistance
// @version         1.0.0-dev
// @author          tim-hub
// @description     This is a plugin to help enable hypothes.is bookmarklet to all websites by default on firefox .

// @grant    				none
// @noframes

// @exclude         https://www.google.com/search*
// @exclude         https://*.youtube.com/*
// @exclude         moz-extension://*
// @exclude         http://localhost*
// @exclude         http://127.0.0.1*
// @exclude         http://192.168.*
// @exclude         http://*.*/wp-admin/*
// ==/UserScript==

(
  function(){
    window.hypothesisConfig=function(){
      return{showHighlights:true,appType:'bookmarklet'};
    };
    const d=document;
    const s=d.createElement('script');
    s.setAttribute('src','https://hypothes.is/embed.js');
    d.body.appendChild(s);
  }
)();
