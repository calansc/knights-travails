(()=>{"use strict";document.body.appendChild(function(){const t=document.createElement("div");t.innerText="Knights Travails Project";const e=document.createElement("div");return e.innerText="Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.",t.appendChild(e),t}());let t=[[2,1],[1,2],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]],e=[0,1,2,3,4,5,6,7],n=[0,1,2,3,4,5,6,7],l=["A","B","C","D","E","F","G","H"],o={},i={};function r(t,e){let n=null;for(let l in t)(null===n||t[l]<t[n])&&!e.includes(l)&&(n=l);return n}function s(t,e,n){let l={};l[n]="Infinity",l=Object.assign(l,t[e]);let o={endNode:null};for(let n in t[e])o[n]=e;let i=[],s=r(l,i);for(;s;){let n=l[s],u=t[s];for(let t in u)if(String(t)!==String(e)){let e=n+u[t];(!l[t]||l[t]>e)&&(l[t]=e,o[t]=s)}i.push(s),s=r(l,i)}let u=[n],h=o[n];for(;h;)u.push(h),h=o[h];return u.reverse(),{distance:l[n],path:u}}!function(){for(let r=0;r<e.length;r++){let s,u=e[r],h=l[u];for(let e=0;e<n.length;e++){let r=n[e],a=[];for(let e=0;e<t.length;e++){let n=u+t[e][0],c=r+t[e][1];if(n>=0&&7>=n&&c>=0&&7>=c){let t=l[n];a.push(t+c),s=h+r,i={};for(let t=0;t<a.length;t++)i[a[t]]=1,o[s]=i}}}}}(),console.log(s(o,"A0","A1")),console.log(s(o,"A7","H0"))})();