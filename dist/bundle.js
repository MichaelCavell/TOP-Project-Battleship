(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* Original styles before media query */\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    padding: 20px; /* Add padding for a more comfortable layout */\n}\n\nh1 {\n    padding-top: 100px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n    gap: 2px;\n    margin-bottom: 20px;\n}\n\n.cell {\n    width: 40px;\n    height: 40px;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n}\n\n/* Media query for mobile styles */\n\n@media only screen and (max-width: 600px) {\n    body {\n        padding: 10px;\n    }\n\n    h1 {\n        padding-top: 50px;\n    }\n\n    .board {\n        grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));\n        grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));\n        gap: 2px;\n        margin-bottom: 10px;\n    }\n\n    .cell {\n        width: 30px;\n        height: 30px;\n        font-size: 10px;\n    }\n}\n",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],d=r.base?c[0]+r.base:c[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var c=r(e,o),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),l=n(565),c=n.n(l),d=n(216),s=n.n(d),u=n(589),m=n.n(u),p=n(28),h={};h.styleTagTransform=m(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;class g{constructor(e,t=0,n=!1){this.length=e,this.hits=t,this.sunk=n}hit(){this.hits<this.length&&(this.hits++,this.isSunk())}isSunk(){return this.length<=this.hits&&(this.sunk=!0,!0)}}class f{constructor(){this.rows=10,this.columns=10,this.board=this.newBoard()}newBoard(){return Array.from({length:this.rows},(()=>Array.from({length:this.columns},(()=>null))))}placeShip(e,t,n){const r=new g(t);let[o,a]=e;if(this.fitCheck(e,t,n)){if("horizontal"===n)for(let e=0;e<t;e++)this.board[o][a]=r,a++;if("vertical"===n)for(let e=0;e<t;e++)this.board[o][a]=r,o++;return r}return"we're gonna need a smaller boat"}fitCheck(e,t,n){let[r,o]=e;if("horizontal"===n){if(t>this.board.length-o)return!1;for(let e=0;e<t;e++){if(this.board[r][o]instanceof g)return!1;o++}return!0}if("vertical"===n){if(t>this.board.length-r)return!1;for(let e=0;e<t;e++){if(this.board[r][o]instanceof g)return!1;r++}return!0}}receiveAttack(e){const[t,n]=e,r=this.board[t][n];return r instanceof g?(r.hit(),this.board[t][n]="hit","hit"):"hit"===r||"miss"===r?"not a valid attack":(this.board[t][n]="miss",this.board[t][n])}allShipsSunk(){for(let e=0;e<this.rows;e++)for(let t=0;t<this.columns;t++){const n=this.board[e][t];if(n instanceof g&&!n.isSunk())return!1}return!0}getBoardState(){return this.board.map((e=>e.slice()))}computerPlaceShip(e){let t,n,r;do{t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),r=Math.random()<.5?"horizontal":"vertical"}while(!this.fitCheck([t,n],e,r));return this.placeShip([t,n],e,r)}}class y{constructor(){this.playerTurn=!0,this.gameboard=new f}switchTurn(){this.playerTurn=!1}attack(e,t,n){n.receiveAttack([e,t]),this.switchTurn(),"hit"===n.board[e][t]&&this.updateRecentHit(e,t)}computerPlayerTurn(e){let t;return t=this.recentHit?this.tryAdjacentSlots(this.recentHit,e.board):this.generateRandomCoordinate(e.board),this.attack(t[0],t[1],e),`attacked${t}`}tryAdjacentSlots(e,t){const[n,r]=e,o=[[n-1,r],[n+1,r],[n,r-1],[n,r+1]];for(const[e,n]of o)if(e>=0&&e<10&&n>=0&&n<10&&"hit"!==t[e][n]&&"miss"!==t[e][n])return[e,n];return this.generateRandomCoordinate(t)}generateRandomCoordinate(e){const t=e.length;let n,r;do{n=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t)}while("hit"===e[n][r]||"miss"===e[n][r]);return[n,r]}updateRecentHit(e,t){this.recentHit=[e,t]}}const b=new class{constructor(){this.playerOne=new y,this.computerPlayer=new y,this.computerCarrier=this.computerPlayer.gameboard.computerPlaceShip(5),this.computerBattleship=this.computerPlayer.gameboard.computerPlaceShip(4),this.computerCruiser=this.computerPlayer.gameboard.computerPlaceShip(3),this.computerSubmarine=this.computerPlayer.gameboard.computerPlaceShip(3),this.computerDestroyer=this.computerPlayer.gameboard.computerPlaceShip(2)}};function v(){const e=b.playerOne.gameboard.getBoardState();document.getElementById("player-heading").innerText="Player Board",function(e,t){e.innerHTML="";for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++){const o=document.createElement("h2");o.classList.add("cell");const a=t[n][r];o.innerText=`${n}, ${r}`,o.setAttribute("data-row",n),o.setAttribute("data-col",r),null===a?o.style.backgroundColor="lightblue":"miss"===a?o.style.backgroundColor="white":"hit"===a?o.style.backgroundColor="red":(o.style.backgroundColor="grey",o.innerText=""),e.appendChild(o)}}(document.getElementById("player-board"),e)}let E=0;function B(){const e=document.getElementById("carrier-row"),t=document.getElementById("carrier-col"),n=document.getElementById("carrier-orientation").value,r=document.getElementById("carrier-div"),o=parseInt(e.value,10),a=parseInt(t.value,10);b.playerOne.gameboard.fitCheck([o,a],5,n)&&(b.playerOne.gameboard.placeShip([o,a],5,n),v(),E++,r.innerHTML="",E>=5&&w())}function I(){const e=document.getElementById("battleship-row"),t=document.getElementById("battleship-col"),n=document.getElementById("battleship-orientation").value,r=document.getElementById("battleship-div"),o=parseInt(e.value,10),a=parseInt(t.value,10);b.playerOne.gameboard.fitCheck([o,a],4,n)&&(b.playerOne.gameboard.placeShip([o,a],4,n),v(),E++,r.innerHTML="",E>=5&&w())}function x(){const e=document.getElementById("cruiser-row"),t=document.getElementById("cruiser-col"),n=document.getElementById("cruiser-orientation").value,r=document.getElementById("cruiser-div"),o=parseInt(e.value,10),a=parseInt(t.value,10);b.playerOne.gameboard.fitCheck([o,a],3,n)&&(b.playerOne.gameboard.placeShip([o,a],3,n),v(),E++,r.innerHTML="",E>=5&&w())}function C(){const e=document.getElementById("submarine-row"),t=document.getElementById("submarine-col"),n=document.getElementById("submarine-orientation").value,r=document.getElementById("submarine-div"),o=parseInt(e.value,10),a=parseInt(t.value,10);b.playerOne.gameboard.fitCheck([o,a],3,n)&&(b.playerOne.gameboard.placeShip([o,a],3,n),v(),E++,r.innerHTML="",E>=5&&w())}function S(){const e=document.getElementById("destroyer-row"),t=document.getElementById("destroyer-col"),n=document.getElementById("destroyer-orientation").value,r=document.getElementById("destroyer-div"),o=parseInt(e.value,10),a=parseInt(t.value,10);b.playerOne.gameboard.fitCheck([o,a],2,n)&&(b.playerOne.gameboard.placeShip([o,a],2,n),v(),E++,r.innerHTML="",E>=5&&w())}function w(){const e=b.playerOne.gameboard.getBoardState(),t=b.computerPlayer.gameboard.getBoardState(),n=document.getElementById("player-board");document.getElementById("player-heading").innerText="Player Board",function(e,t){e.innerHTML="";for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++){const o=document.createElement("h2");o.classList.add("cell");const a=t[n][r];o.setAttribute("data-row",n),o.setAttribute("data-col",r),null===a?o.style.backgroundColor="lightblue":"miss"===a?o.style.backgroundColor="white":"hit"===a?o.style.backgroundColor="red":(o.style.backgroundColor="grey",o.innerText=""),e.appendChild(o)}}(n,e);const r=document.getElementById("computer-board");document.getElementById("computer-heading").innerText="Computer Board",function(e,t){e.innerHTML="";for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++){const o=document.createElement("div");o.classList.add("cell");const a=t[n][r];o.setAttribute("data-row",n),o.setAttribute("data-col",r),o.style.backgroundColor=null===a?"lightblue":"miss"===a?"white":"hit"===a?"red":"lightblue",e.appendChild(o)}}(r,t);const o=document.getElementById("scoreboard"),a=document.getElementById("carrier"),i=document.getElementById("battleship"),l=document.getElementById("cruiser"),c=document.getElementById("submarine"),d=document.getElementById("destroyer"),s=k(),u=function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=b.computerPlayer.gameboard.board[e][t];if(n instanceof g&&4===n.length)return"Battleship"}return"Battleship SUNK"}(),m=function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=b.computerPlayer.gameboard.board[e][t];if(n instanceof g&&3===n.length)return n.id="Cruiser","Cruiser"}return"Cruiser SUNK"}(),p=function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=b.computerPlayer.gameboard.board[e][t];if(n instanceof g&&3===n.length&&"Cruiser"!==n.id)return n.id="Submarine","Submarine"}return"Submarine SUNK"}(),h=function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=b.computerPlayer.gameboard.board[e][t];if(n instanceof g&&2===n.length)return"Destroyer"}return"Destroyer SUNK"}();o.innerText="Computer Ships",a.innerText=`${s}`,i.innerText=`${u}`,l.innerText=`${m}`,c.innerText=`${p}`,d.innerText=`${h}`}function k(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=b.computerPlayer.gameboard.board[e][t];if(n instanceof g&&5===n.length)return"Carrier"}return"Carrier SUNK"}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("carrier-row"),t=document.getElementById("carrier-col"),n=document.getElementById("placeCarrierButton");for(let n=0;n<10;n++){const r=document.createElement("option");r.value=n,r.text=n,e.appendChild(r);const o=document.createElement("option");o.value=n,o.text=n,t.appendChild(o)}n.addEventListener("click",B)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("battleship-row"),t=document.getElementById("battleship-col"),n=document.getElementById("placeBattleshipButton");for(let n=0;n<10;n++){const r=document.createElement("option");r.value=n,r.text=n,e.appendChild(r);const o=document.createElement("option");o.value=n,o.text=n,t.appendChild(o)}n.addEventListener("click",I)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("cruiser-row"),t=document.getElementById("cruiser-col"),n=document.getElementById("placeCruiserButton");for(let n=0;n<10;n++){const r=document.createElement("option");r.value=n,r.text=n,e.appendChild(r);const o=document.createElement("option");o.value=n,o.text=n,t.appendChild(o)}n.addEventListener("click",x)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("submarine-row"),t=document.getElementById("submarine-col"),n=document.getElementById("placeSubmarineButton");for(let n=0;n<10;n++){const r=document.createElement("option");r.value=n,r.text=n,e.appendChild(r);const o=document.createElement("option");o.value=n,o.text=n,t.appendChild(o)}n.addEventListener("click",C)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("destroyer-row"),t=document.getElementById("destroyer-col"),n=document.getElementById("placeDestroyerButton");for(let n=0;n<10;n++){const r=document.createElement("option");r.value=n,r.text=n,e.appendChild(r);const o=document.createElement("option");o.value=n,o.text=n,t.appendChild(o)}n.addEventListener("click",S)})),console.log(k()),document.getElementById("computer-board").addEventListener("click",(function(e){if(b.playerOne.gameboard.allShipsSunk()||b.computerPlayer.gameboard.allShipsSunk())return;const t=e.target,n=t.getAttribute("data-row"),r=t.getAttribute("data-col");"miss"!==b.computerPlayer.gameboard.board[n][r]&&"hit"!==b.computerPlayer.gameboard.board[n][r]&&(b.playerOne.attack(n,r,b.computerPlayer.gameboard),w(),b.computerPlayer.gameboard.allShipsSunk()?alert("GAME OVER!"):(b.computerPlayer.computerPlayerTurn(b.playerOne.gameboard),w(),b.playerOne.gameboard.allShipsSunk()&&alert("GAME OVER!")))})),v()})()})();