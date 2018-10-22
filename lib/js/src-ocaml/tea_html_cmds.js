// Generated by BUCKLESCRIPT VERSION 4.0.1, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");

function focus(id) {
  return /* EnqueueCall */Block.__(2, [(function () {
                var match = document.getElementById(id);
                if (match == null) {
                  console.log(/* tuple */[
                        "Attempted to focus a non-existant element of: ",
                        id
                      ]);
                  return /* () */0;
                } else {
                  var ecb = function () {
                    return match.focus();
                  };
                  var cb = function () {
                    window.requestAnimationFrame(ecb);
                    return /* () */0;
                  };
                  window.requestAnimationFrame(cb);
                  return /* () */0;
                }
              })]);
}

exports.focus = focus;
/* No side effect */