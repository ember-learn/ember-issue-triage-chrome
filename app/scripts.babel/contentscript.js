'use strict';

console.log("0.0.4");

let lastUpdatedBy = escape('is:issue is:open commenter:acorncom commenter:chadhietala commenter:chancancode commenter:locks commenter:pixelhandler commenter:rwjblue commenter:Serabe commenter:toddjordan commenter:stefanpenner commenter:chancancode commenter:dgeb commenter:ebryn commenter:ef4 commenter:igorT commenter:krisselden commenter:machty commenter:mixonic commenter:mmun commenter:rwjblue commenter:stefanpenner commenter:tomdale commenter:trek commenter:wagenet commenter:wifelette commenter:wycats sort:updated-asc updated:<2016-04-01');
let sortByElement = document.querySelector('#js-issues-toolbar > div.table-list-filters > div.table-list-header-toggle.right > div:nth-child(5) > div > div > div.select-menu-list > div');

let aElement = document.createElement("a");
aElement.href = `issues?q=${lastUpdatedBy}`;
aElement.className = "select-menu-item js-navigation-item js-navigation-open navigation-focus";
aElement.setAttribute("role", "menuitem");
aElement.innerHTML = `
<svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
<div class="select-menu-item-text">Least recently updated <strong>by team</strong></div>
`;
sortByElement.appendChild(aElement);

// <a href="/emberjs/ember.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc" class="select-menu-item js-navigation-item js-navigation-open navigation-focus" role="menuitem">
//   <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
//   <div class="select-menu-item-text">Least recently updated <strong>by team</strong></div>
// </a>
