// ==UserScript==
// @name            Hypothesis Assistant
// @version         1.0.2-dev
// @author          tim-hub
// @description     This is a plugin to help enable hypothes.is bookmarklet to all websites by default on firefox.
// @description:en  This is a plugin to help enable hypothes.is bookmarklet to all websites by default on firefox.
// @description:zh  在Firefox上使Hypothesis自动启动。
// @namespace       https://greasyfork.org/users/542418
// @homepageURL     https://tim.bai.uno/hello-world/
// @supportURL      https://tim.bai.uno/hello-world/#comment-4

// @grant    				none
// @noframes
// @license         Apache License V2

// @exclude         *://www.google.com/search*
// @exclude         *://*.youtube.com/*
// @exclude         moz-extension://*
// @exclude         http://localhost*
// @exclude         http://127.0.0.1*
// @exclude         http://192.168.*
// @exclude         *://*.*/wp-admin/*
// @exclude         *://tim.bai.uno/*
// @exclude         *://*.*/login/*
// @exclude         *://*.*/signin/*
// @exclude         *://*.*/signup/*
// @exclude         *console.aws.amazon.com/*
// @exclude         *dashboard.heroku.com/*


// @match           *://*/*
// ==/UserScript==

/**
 * Repo: https://github.com/tim-hub/Hypothesis-Assistant
 */
(
  function () {

    window.hypothesisConfig = function () {
      return {
        showHighlights: true,
        appType: 'bookmarklet'
      };
    };

    var appended = false;
    var d = document;
    var s = d.createElement('script');

    s.setAttribute('src', 'https://hypothes.is/embed.js');
    s.setAttribute('id', 'hypothesis-bookmarklet-script');



    window.onkeyup = function (e) {
      if (e.shiftKey && e.key=== 'H') {
        if (!appended) {
          console.log('load hypothesis');
          d.body.appendChild(s);
          appended = true;
        } else {
          console.log('unload hypothesis');
          document.getElementById('hypothesis-bookmarklet-script').remove();
          document.getElementsByTagName("hypothesis-adder")[0].remove();
          document.getElementsByClassName("annotator-frame")[0].remove();
          window.hypothesisConfig = function () {
            return {
              showHighlights: false,
            };
          };
          appended = false;
        }
      }
    };
  }
)();
