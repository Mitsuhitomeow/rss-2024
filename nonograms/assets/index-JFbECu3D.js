(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();class g{constructor(){this.second=0,this.minute=0,this.running=!1,this.intervalId=null,this.span=null,this.time="00:00"}start(){this.time=`${g.formatTime(this.minute)}:${g.formatTime(this.second)}`,this.running=!0,this.intervalId=setInterval(()=>{this.tick(),this.span.innerHTML="",this.span.innerHTML=this.time},1e3)}pause(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null,this.running=!1)}restart(){this.second=0,this.minute=0,this.time="00:00",this.span.innerHTML=this.time}tick(){this.second+=1,this.second===60&&(this.second=0,this.minute+=1),this.time=`${g.formatTime(this.minute)}:${g.formatTime(this.second)}`}static formatTime(e){return e<10?`0${e}`:e}getTime(){return this.time}isRunning(){return this.running}}class N{constructor(e,t){this.ground=document.createElement("section"),this.columns=[],this.matrix=[],this.time=t,this.initPlayground(e),this.addClick()}updatePlayground(e){this.initPlayground(e),this.addClick()}initPlayground(e){this.ground.innerHTML="",this.ground.className="main__section-playground";for(let t=0;t<e+1;t+=1){const s=document.createElement("div");this.ground.append(s),s.className="row",t===0&&(s.className="first__row");for(let n=0;n<e+1;n+=1){const i=document.createElement("div");if(s.append(i),i.className="column",t===0&&(i.className="hint hint__top hint__background"),n===0&&(i.className="hint hint__left hint__background"),t===0&&n===0){const o=document.createElement("span");this.time.span=o,o.innerHTML=this.time.time,i.append(o),o.className="section__time",i.className="zero hint__background"}this.columns.push(i)}}}addClick(){this.columns.forEach(e=>{const t=e;e.classList.contains("column")&&(t.addEventListener("click",()=>{this.time.isRunning()||this.time.start(),e.innerHTML===""&&!e.classList.contains("cross")?e.classList.toggle("black"):e.classList.remove("black")}),t.addEventListener("contextmenu",s=>{s.preventDefault(),this.time.isRunning()||this.time.start(),e.innerHTML===""&&!e.classList.contains("black")?(t.classList.toggle("cross"),t.innerHTML=`
              <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                  <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                    <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                    </path>
                  </g>
                </g>
              </svg>
            `):(t.classList.remove("cross"),t.innerHTML="")}))})}getElement(){return this.ground}}const P={5:[{name:"Dinosaur",pixels:[[0,0,0,1,1],[0,0,1,1,0],[0,1,1,1,1],[1,1,1,1,0],[0,1,0,1,0]]},{name:"Smile Face",pixels:[[0,1,1,1,0],[1,0,1,0,1],[1,1,1,1,1],[1,0,0,0,1],[0,1,1,1,0]]},{name:"Anchor",pixels:[[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[1,0,1,0,1],[0,1,1,1,0]]},{name:"Alien",pixels:[[1,1,0,1,1],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0]]},{name:"Smile Face",pixels:[[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,1,1,1,1]]}],10:[{name:"Creeper Face",pixels:[[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,0,0,1,1,0,0,0,1],[1,0,0,1,1,1,1,0,0,1],[1,0,0,1,1,1,1,0,0,1],[1,0,0,1,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]]},{name:"Vampyre",pixels:[[0,0,1,1,1,1,1,1,0,0],[0,1,0,0,0,0,0,0,1,0],[0,1,0,1,0,0,1,0,1,0],[0,1,0,0,0,0,0,0,1,0],[0,1,1,0,1,1,0,1,1,0],[0,0,0,1,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,0,1,0,0],[0,0,1,1,0,0,1,1,0,0],[0,0,0,1,1,1,1,0,0,0]]},{name:"Question mark",pixels:[[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,1,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0]]},{name:"Snail",pixels:[[0,0,1,1,1,1,0,0,0,0],[0,1,1,0,1,1,1,0,0,0],[1,1,1,1,0,1,1,1,0,0],[1,0,1,1,1,0,1,1,0,0],[1,1,1,1,1,0,1,1,0,0],[1,1,1,1,0,1,1,0,0,0],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,1,1,0,0,0,1],[0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0]]},{name:"Leaf",pixels:[[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,1,1,0,1,0,1],[0,0,1,1,0,1,0,1,1,1],[0,1,0,1,0,1,1,0,0,1],[0,1,0,1,0,1,1,1,1,1],[0,1,0,1,1,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,0],[0,0,1,0,0,0,0,1,0,0],[0,1,0,1,1,1,1,0,0,0],[1,1,0,0,0,0,0,0,0,0]]}],15:[{name:"Smile Face",pixels:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,0,1,0,0,0,0,0,1,0,1,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,0,1,0,1,1,0,1,0,1,1,0,1,0],[0,1,0,1,1,1,1,0,1,0,1,1,0,1,0],[0,1,0,0,1,1,0,0,0,1,1,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,1,1,1,1,0,0,1,0,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Mouse",pixels:[[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,0,1],[0,0,0,1,1,1,0,0,1,0,0,1,0,1,0],[1,1,1,0,1,0,0,1,1,0,0,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,0,1,1,0,0],[0,1,1,1,1,0,0,1,1,0,0,0,1,1,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,0,1,1,1,0,0,1],[0,0,0,0,0,1,1,0,0,0,0,1,1,0,1],[0,0,0,1,1,1,1,0,0,0,0,0,1,1,1],[0,0,0,1,0,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,1,1,1,1,1,0,0,0,1,0],[0,0,0,1,1,1,0,1,1,0,1,1,1,0,0]]},{name:"Treble clef",pixels:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,0,1,1,1,1,1,1,1,1,1],[0,0,1,0,1,0,1,0,0,0,0,0,0,0,0],[1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],[0,1,1,0,0,1,1,0,0,0,0,0,0,0,0],[1,1,0,0,1,1,1,1,1,1,0,1,1,0,1],[1,0,1,0,0,1,1,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,1,1,1,1,0,1,0,1,1],[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0],[1,1,0,0,0,1,1,1,1,0,1,1,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{name:"Alarm clock",pixels:[[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],[0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],[1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1,1,1,0,1,1,0,1],[0,0,1,1,1,1,1,1,1,0,1,1,1,0,0],[0,1,1,1,1,1,1,1,0,1,1,1,1,1,0],[0,1,0,0,1,0,0,0,1,1,1,0,0,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,0,1,1,1,1,1,0,0],[0,0,0,1,1,1,1,0,1,1,1,1,0,0,0],[0,0,1,0,0,1,1,1,1,1,0,0,1,0,0],[0,1,0,0,1,0,1,1,1,0,1,0,0,1,0],[0,0,1,1,0,0,0,0,0,0,0,1,1,0,0]]},{name:"Sun",pixels:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,0,1,0,0,1,1,1,1],[1,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[1,1,1,1,0,1,0,0,0,1,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,0,1,1,1,1,0,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]},S={images:P};function T(a,e){const t=document.querySelectorAll(".hint__left"),s=document.querySelectorAll(".hint__top"),n=(i,o)=>{i.forEach((c,l)=>{const r=o[l];r.forEach((d,m)=>{const h=document.createElement("span");h.textContent=r[m],c.append(h)})})};n(t,a),n(s,e)}function k(a){const e=a.length,t=a[0].length,s=a.map(i=>i.reduce((o,c)=>(c===1?o[o.length-1]+=1:o[o.length-1]!==0&&o.push(0),o),[0]).filter(o=>o!==0));s.forEach(i=>{i.length===0&&i.push(0)});const n=Array.from({length:t},()=>[]);for(let i=0;i<t;i+=1){let o=0;for(let c=0;c<e;c+=1)a[c][i]===1?o+=1:o!==0&&(n[i].push(o),o=0);o!==0&&n[i].push(o),n[i].length===0&&n[i].push(0)}T(s,n)}const v=document.createElement("div"),f=document.createElement("div"),C=document.createElement("span");v.classList.add("modal");f.classList.add("modal-content");C.classList.add("close");C.innerHTML=`
<svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
      <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
      </path>
    </g>
  </g>
</svg>
`;document.body.appendChild(v);v.appendChild(f);f.appendChild(C);function H(){const a=JSON.parse(localStorage.getItem("results")),e=a!==null?a:[],t=document.createElement("div");if(f.innerHTML="",f.appendChild(C),f.append(t),a!==null)e.forEach((s,n)=>{console.log(s);const i=s;let o=n;const[c,l,r,d]=[document.createElement("div"),document.createElement("span"),document.createElement("span"),document.createElement("span")];t.appendChild(c),c.appendChild(l),c.appendChild(r),c.appendChild(d),l.textContent=`${o+=1}. Name of the puzzle: ${i.name}`,r.textContent=`Difficulty: ${i.size}`,d.textContent=`Passage time: ${i.time}`});else{const s=document.createElement("span");t.append(s),s.textContent="No Data.."}v.style.display="flex"}function M(){v.style.display="none"}function I(a){a.target===v&&M()}document.addEventListener("click",I);C.addEventListener("click",M);function z(a){let t=JSON.parse(localStorage.getItem("results"))!==null?JSON.parse(localStorage.getItem("results")):[];t.push(a),t=t.sort((n,i)=>{const o=new Date(`1970-01-01T${n.time}`),c=new Date(`1970-01-01T${i.time}`);return o-c});const s=t.slice(0,5);localStorage.setItem("results",JSON.stringify(s))}function q(){H()}let y,E,u;function _(a){E=a}function A(a){u=a}function B(a,e){const t=document.querySelectorAll(".column"),s=a;u=y,(!u||u.length!==t.length)&&(u=Array.from({length:t.length},()=>0));const n=(i,o)=>{if(console.log("assd",E),y=u,i.classList.contains("cross"))return;if(u[o]===0?u[o]=1:u[o]=0,u.every((l,r)=>l===E.flat()[r])){const l=e.getTime();e.pause();const r=document.querySelector(".main__options-select"),d=document.querySelector(".image__section"),m=r.value,h=Array.from(r.options).find(p=>p.value===m),L={size:h?h.textContent:"",name:d.value,time:l,sec:e.second};z(L),u=Array.from({length:t.length},()=>0),alert(`Массивы идентичны!, Время: ${l}`)}console.log(u)};t.forEach((i,o)=>{i.removeEventListener("click",()=>n(i,o)),i.addEventListener("click",()=>n(i,o))}),k(s)}function b(a){const e=document.querySelectorAll(".column");u=Array.from({length:e.length},()=>0),y=u,e.forEach(t=>{const s=t;s.classList.remove("black","cross","cross_solution"),s.innerHTML=""}),a.pause(),a.restart()}function G(a){const e=[],[t,s,n,i]=[document.querySelector(".continue__btn"),document.querySelector(".main__options-select"),document.querySelector(".image__section"),document.querySelectorAll(".column")];i.forEach(r=>{r.classList.contains("cross")?e.push(1):e.push(0)});const o=s.value,c=n.value,l={resultImage:E,imageMatrix:u,crosses:e,sizeSelect:o,imageSelect:c,time:a};t.disabled=!1,localStorage.setItem("saveGame",JSON.stringify(l)),localStorage.setItem("continue",JSON.stringify(!1))}function x(){const[a,e]=[document.querySelectorAll(".hint__top"),document.querySelectorAll(".hint__left")];a.forEach(t=>{const s=t;s.innerHTML=""}),e.forEach(t=>{const s=t;s.innerHTML=""})}function O(){return new Promise(a=>{setTimeout(()=>{a()})})}const w=new Event("change");async function R(a){const e=JSON.parse(localStorage.getItem("saveGame"));function t(s){const n=a;n.time=s.time,n.second=s.second,n.minute=s.minute,n.hour=s.hour,n.span.innerHTML=s.time}try{const{time:s,sizeSelect:n,imageSelect:i,crosses:o}=e,c=document.querySelector(".main__options-select");c.value=n,c.dispatchEvent(w),await O(),x();const l=document.querySelector(".image__section"),r=document.querySelectorAll(".column"),{imageMatrix:d}=e;l.value=i,l.dispatchEvent(w);let m=20;r.forEach((h,L)=>{const p=h;p.innerHTML="",p.classList.remove("black","cross","cross_solution"),setTimeout(()=>{d[L]===0&&p.classList.remove("black","cross","cross_solution"),d[L]===1&&(p.classList.remove("black","cross","cross_solution"),p.classList.add("black")),o[L]===1&&(p.classList.remove("black","cross","cross_solution"),p.classList.add("cross"),p.innerHTML=`
            <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
                  <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
                  </path>
                </g>
              </g>
            </svg>
          `)},m),m+=20}),A(d),t(s)}catch(s){throw console.error(s),new Error("ERROR CREATE CONTINUE: ",s)}}function F(a){const e=document.querySelector(".main__options-select"),t=document.querySelector(".image__section"),s=document.querySelectorAll(".column"),n=t.value,i=e.value,c=S.images[i].find(r=>r.name===n).pixels.flat();let l=0;s.forEach((r,d)=>{const m=r;a.pause(),m.innerHTML="",m.classList.remove("black","cross","cross_solution"),setTimeout(()=>{c[d]===0?(m.classList.remove("black","cross","cross_solution"),m.classList.add("cross_solution"),m.innerHTML=`
        <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
              <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">
              </path>
            </g>
          </g>
        </svg>
      `):c[d]===1&&(m.classList.remove("black","cross","cross_solution"),m.classList.add("black"))},l),l+=20})}function V(a,e){const t=a,[s,n,i,o,c,l,r]=[document.createElement("div"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button"),document.createElement("button")];[n,i,o,c,l,r].forEach(h=>{h.classList.add("btn"),s.appendChild(h)}),n.addEventListener("click",()=>b(e)),i.addEventListener("click",()=>G(e)),o.addEventListener("click",()=>R(e)),c.addEventListener("click",q),l.addEventListener("click",()=>F(e)),a.appendChild(s),t.className="main__section-buttons",s.className="main__block-buttons",n.classList.add("reset__btn"),o.classList.add("continue__btn"),n.textContent="Reset",i.textContent="Save",o.textContent="Continue",c.textContent="Results",l.textContent="Solution",r.textContent="Random Game";const m=JSON.parse(localStorage.getItem("saveGame"));o.disabled=m===null,r.disabled=!0}class ${constructor(e,t=5){this.time=e,console.log(t),this.ground=new N(t,e),this.value=5,this.size=this.value,this.arrayPictures=S.images,this.matrixPicture=this.arrayPictures[this.size][0].pixels,[this.section,this.sectionButton,this.sizeControl,this.imageSection,this.container]=[document.createElement("section"),document.createElement("section"),document.createElement("select"),document.createElement("select"),document.createElement("div")],this.initGroundSize(),this.initButtonsSection(this.time),this.initImageSelection(this.value),this.initGameOnStartAsync()}initGroundSize(){const[e,t,s]=[document.createElement("option"),document.createElement("option"),document.createElement("option")];this.section.appendChild(this.container),this.container.appendChild(this.sizeControl),this.sizeControl.appendChild(e),this.sizeControl.appendChild(t),this.sizeControl.appendChild(s),this.sizeControl.className="main__options-select",this.container.className="options__container",e.setAttribute("value","5"),t.setAttribute("value","10"),s.setAttribute("value","15"),e.textContent="5x5",t.textContent="10x10",s.textContent="15x15",this.sizeControl.value=this.value,this.sizeControl.addEventListener("change",()=>{this.size=+this.sizeControl.value,this.initImageSelection(this.size),this.ground.updatePlayground(this.size),this.initGameOnStartAsync(),this.handleChanged(),x()})}initImageSelection(e){this.arrayPictures=S.images[e],this.imageSection.innerHTML="",this.imageSection.className="image__section",this.container.appendChild(this.imageSection);const t=this.imageSection.cloneNode(!0);this.container.replaceChild(t,this.imageSection),this.imageSection=t,this.imageSection.removeEventListener("change",()=>this.handleChanged()),this.imageSection.addEventListener("change",()=>this.handleChanged()),this.arrayPictures.forEach(s=>{const n=document.createElement("option");this.imageSection.appendChild(n),n.textContent=s.name,n.setAttribute("value",`${s.name}`)})}initGameOnStartAsync(){(async()=>{try{await this.section.appendChild(this.ground.getElement()),_(this.matrixPicture),this.initGameOnStart()}catch(t){throw new Error(`Ошибка в АСИНХРОННОМ генерировании подсказок(${t})`)}})()}handleChanged(){const{value:e}=this.imageSection,s=this.arrayPictures.find(n=>n.name===e).pixels;this.matrixPicture=s,console.log(this.matrixPicture),_(this.matrixPicture),b(this.time),x(),k(this.matrixPicture)}initGameOnStart(){const e=this.arrayPictures[0].pixels;B(e,this.time)}initButtonsSection(e){V(this.sectionButton,e)}getElementsButton(){return this.sectionButton}getMatrixPicture(){return this.matrixPicture}getElement(){return this.section}getValue(){return this.value}}class D{constructor(){this.header=null,this.footer=null,this.main=null,this.components=[],this.initHeader(),this.initMain(),this.initFooter()}initHeader(){this.header=document.createElement("header");const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Nonograms",this.header.className="header",e.className="header__container container",t.className="header__title title",this.header.append(e),e.append(t),this.components.push(this.header)}initMain(){this.main=document.createElement("main");const[e,t]=[document.createElement("div"),document.createElement("div")],s=new g,n=new $(s);this.main.className="main",e.className="main__container container",this.main.append(e),e.append(n.getElementsButton()),e.append(n.getElement()),e.append(t),this.components.push(this.main)}initFooter(){this.footer=document.createElement("footer");const e=document.createElement("div"),t=document.createElement("h1");t.textContent="© RS School Production 2024",this.footer.className="footer",e.className="footer__container container",t.className="footer__title title",this.footer.append(e),e.append(t),this.components.push(this.footer)}getElement(){return this.components.forEach(e=>{document.body.append(e)})}}const J=new D;J.getElement();
//# sourceMappingURL=index-JFbECu3D.js.map
