!function(e,R){"object"==typeof exports&&"object"==typeof module?module.exports=R():"function"==typeof define&&define.amd?define("dscc",[],R):"object"==typeof exports?exports.dscc=R():e.dscc=R()}(window,function(){return t={},n.m=C={"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */function(e,N,R){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var R,C=1,t=arguments.length;C<t;C++)for(var n in R=arguments[C])Object.prototype.hasOwnProperty.call(R,n)&&(e[n]=R[n]);return e}).apply(this,arguments)};Object.defineProperty(N,"__esModule",{value:!0});
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var _=R(/*! ./types */"./src/types.ts");!function(e){for(var R in e)N.hasOwnProperty(R)||(N[R]=e[R])}(R(/*! ./types */"./src/types.ts")),N.getWidth=function(){return document.body.clientWidth},N.getHeight=function(){return document.documentElement.clientHeight},N.getComponentId=function(){var e=new URLSearchParams(window.location.search);if(null!==e.get("dscId"))return e.get("dscId");throw new Error("dscId must be in the query parameters. This is a bug in ds-component, please file a bug: https://github.com/googledatastudio/ds-component/issues/new")};function E(e){return e.type===_.ConfigDataElementType.DIMENSION||e.type===_.ConfigDataElementType.METRIC}function r(e){return e===_.ConfigDataElementType.DIMENSION?-1:1}function a(e){var R=[];e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){R.push(e)})});var C,t=(C=function(e,R){return r(e.type)-r(R.type)},R.map(function(e,R){return{item:e,index:R}}).sort(function(e,R){return C(e.item,R.item)||e.index-R.index}).map(function(e){return e.item})),n=[];return t.forEach(function(e){e.value.forEach(function(){return n.push(e.id)})}),n}function o(R){return function(e){var C,t,n={};return t=R,((C=e).length<t.length?C.map(function(e,R){return[e,t[R]]}):t.map(function(e,R){return[C[R],e]})).forEach(function(e){var R=e[0],C=e[1];void 0===n[C]&&(n[C]=[]),n[C].push(R)},{}),n}}N.fieldsByConfigId=function(e){var R=e.fields.reduce(function(e,R){return e[R.id]=R,e},{}),C={};return e.config.data.forEach(function(e){e.elements.filter(E).forEach(function(e){C[e.id]=e.value.map(function(e){return R[e]})})}),C};function U(e){var R={};return(e.config.style||[]).forEach(function(e){e.elements.forEach(function(e){if(void 0!==R[e.id])throw new Error("styleIds must be unique. Your styleId: '"+e.id+"' is used more than once.");R[e.id]={value:e.value,defaultValue:e.defaultValue}})},{}),R}function Y(e){return e.config.themeStyle}function n(e){switch(e){case _.DSInteractionType.FILTER:return _.InteractionType.FILTER}}function s(e){var R=e.config.interactions;return void 0===R?{}:R.reduce(function(e,R){var C=R.supportedActions.map(n),t={type:n(R.value.type),data:R.value.data};return e[R.id]={value:t,supportedActions:C},e},{})}N.tableTransform=function(e){return{tables:(R=e,t=N.fieldsByConfigId(R),n=a(R),E={},r=n.map(function(e){void 0===E[e]?E[e]=0:E[e]++;var R=E[e],C=t[e][R];return i(i({},C),{configId:e})}),(C={})[_.TableType.DEFAULT]={headers:[],rows:[]},o=C,R.dataResponse.tables.forEach(function(e){o[e.id]={headers:r,rows:e.rows}}),o),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n,E,r,o},N.objectTransform=function(e){return{tables:(t=a(R=e),(C={})[_.TableType.DEFAULT]=[],n=C,R.dataResponse.tables.forEach(function(e){var R=e.rows.map(o(t));e.id===_.TableType.DEFAULT?n[e.id]=R:(void 0===n[e.id]&&(n[e.id]=[]),n[e.id]=n[e.id].concat(R))}),n),fields:N.fieldsByConfigId(e),style:U(e),theme:Y(e),interactions:s(e)};var R,C,t,n};function u(e){var R,C=!1;return e===N.tableTransform||e===N.objectTransform?C=!0:(R=!1,"identity"===e("identity")&&(R=!0,console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.")),R&&(C=!0)),C}N.subscribeToData=function(R,C){if(u(C.transform)){var e=function(e){e.data.type===_.MessageType.RENDER?R(C.transform(e.data)):console.error("MessageType: "+e.data.type+" is not supported by this version of the library.")};window.addEventListener("message",e);var t={componentId:N.getComponentId(),type:_.ToDSMessageType.VIZ_READY};return window.parent.postMessage(t,"*"),function(){return window.removeEventListener("message",e)}}throw new Error("Only the built in transform functions are supported.")},N.sendInteraction=function(e,R,C){var t=N.getComponentId(),n={type:_.ToDSMessageType.INTERACTION,id:e,data:C,componentId:t};window.parent.postMessage(n,"*")},N.clearInteraction=function(e,R){N.sendInteraction(e,R,void 0)}},"./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */function(e,R,C){"use strict";var t,n,E,r,o,N;Object.defineProperty(R,"__esModule",{value:!0}),(t=R.ConceptType||(R.ConceptType={})).METRIC="METRIC",t.DIMENSION="DIMENSION",(R.MessageType||(R.MessageType={})).RENDER="RENDER",(n=R.FieldType||(R.FieldType={})).YEAR="YEAR",n.YEAR_QUARTER="YEAR_QUARTER",n.YEAR_MONTH="YEAR_MONTH",n.YEAR_WEEK="YEAR_WEEK",n.YEAR_MONTH_DAY="YEAR_MONTH_DAY",n.YEAR_MONTH_DAY_HOUR="YEAR_MONTH_DAY_HOUR",n.QUARTER="QUARTER",n.MONTH="MONTH",n.WEEK="WEEK",n.MONTH_DAY="MONTH_DAY",n.DAY_OF_WEEK="DAY_OF_WEEK",n.DAY="DAY",n.HOUR="HOUR",n.MINUTE="MINUTE",n.DURATION="DURATION",n.COUNTRY="COUNTRY",n.COUNTRY_CODE="COUNTRY_CODE",n.CONTINENT="CONTINENT",n.CONTINENT_CODE="CONTINENT_CODE",n.SUB_CONTINENT="SUB_CONTINENT",n.SUB_CONTINENT_CODE="SUB_CONTINENT_CODE",n.REGION="REGION",n.REGION_CODE="REGION_CODE",n.CITY="CITY",n.CITY_CODE="CITY_CODE",n.METRO_CODE="METRO_CODE",n.LATITUDE_LONGITUDE="LATITUDE_LONGITUDE",n.NUMBER="NUMBER",n.PERCENT="PERCENT",n.TEXT="TEXT",n.BOOLEAN="BOOLEAN",n.URL="URL",n.IMAGE="IMAGE",n.CURRENCY_AED="CURRENCY_AED",n.CURRENCY_ALL="CURRENCY_ALL",n.CURRENCY_ARS="CURRENCY_ARS",n.CURRENCY_AUD="CURRENCY_AUD",n.CURRENCY_BDT="CURRENCY_BDT",n.CURRENCY_BGN="CURRENCY_BGN",n.CURRENCY_BOB="CURRENCY_BOB",n.CURRENCY_BRL="CURRENCY_BRL",n.CURRENCY_CAD="CURRENCY_CAD",n.CURRENCY_CDF="CURRENCY_CDF",n.CURRENCY_CHF="CURRENCY_CHF",n.CURRENCY_CLP="CURRENCY_CLP",n.CURRENCY_CNY="CURRENCY_CNY",n.CURRENCY_COP="CURRENCY_COP",n.CURRENCY_CRC="CURRENCY_CRC",n.CURRENCY_CZK="CURRENCY_CZK",n.CURRENCY_DKK="CURRENCY_DKK",n.CURRENCY_DOP="CURRENCY_DOP",n.CURRENCY_EGP="CURRENCY_EGP",n.CURRENCY_ETB="CURRENCY_ETB",n.CURRENCY_EUR="CURRENCY_EUR",n.CURRENCY_GBP="CURRENCY_GBP",n.CURRENCY_HKD="CURRENCY_HKD",n.CURRENCY_HRK="CURRENCY_HRK",n.CURRENCY_HUF="CURRENCY_HUF",n.CURRENCY_IDR="CURRENCY_IDR",n.CURRENCY_ILS="CURRENCY_ILS",n.CURRENCY_INR="CURRENCY_INR",n.CURRENCY_IRR="CURRENCY_IRR",n.CURRENCY_ISK="CURRENCY_ISK",n.CURRENCY_JMD="CURRENCY_JMD",n.CURRENCY_JPY="CURRENCY_JPY",n.CURRENCY_KRW="CURRENCY_KRW",n.CURRENCY_LKR="CURRENCY_LKR",n.CURRENCY_LTL="CURRENCY_LTL",n.CURRENCY_MNT="CURRENCY_MNT",n.CURRENCY_MVR="CURRENCY_MVR",n.CURRENCY_MXN="CURRENCY_MXN",n.CURRENCY_MYR="CURRENCY_MYR",n.CURRENCY_NOK="CURRENCY_NOK",n.CURRENCY_NZD="CURRENCY_NZD",n.CURRENCY_PAB="CURRENCY_PAB",n.CURRENCY_PEN="CURRENCY_PEN",n.CURRENCY_PHP="CURRENCY_PHP",n.CURRENCY_PKR="CURRENCY_PKR",n.CURRENCY_PLN="CURRENCY_PLN",n.CURRENCY_RON="CURRENCY_RON",n.CURRENCY_RSD="CURRENCY_RSD",n.CURRENCY_RUB="CURRENCY_RUB",n.CURRENCY_SAR="CURRENCY_SAR",n.CURRENCY_SEK="CURRENCY_SEK",n.CURRENCY_SGD="CURRENCY_SGD",n.CURRENCY_THB="CURRENCY_THB",n.CURRENCY_TRY="CURRENCY_TRY",n.CURRENCY_TWD="CURRENCY_TWD",n.CURRENCY_TZS="CURRENCY_TZS",n.CURRENCY_UAH="CURRENCY_UAH",n.CURRENCY_USD="CURRENCY_USD",n.CURRENCY_UYU="CURRENCY_UYU",n.CURRENCY_VEF="CURRENCY_VEF",n.CURRENCY_VND="CURRENCY_VND",n.CURRENCY_YER="CURRENCY_YER",n.CURRENCY_ZAR="CURRENCY_ZAR",(E=R.TableType||(R.TableType={})).DEFAULT="DEFAULT",E.COMPARISON="COMPARISON",E.SUMMARY="SUMMARY",(r=R.ConfigDataElementType||(R.ConfigDataElementType={})).METRIC="METRIC",r.DIMENSION="DIMENSION",r.MAX_RESULTS="MAX_RESULTS",(o=R.ConfigStyleElementType||(R.ConfigStyleElementType={})).TEXTINPUT="TEXTINPUT",o.SELECT_SINGLE="SELECT_SINGLE",o.CHECKBOX="CHECKBOX",o.FONT_COLOR="FONT_COLOR",o.FONT_SIZE="FONT_SIZE",o.FONT_FAMILY="FONT_FAMILY",o.FILL_COLOR="FILL_COLOR",o.BORDER_COLOR="BORDER_COLOR",o.AXIS_COLOR="AXIS_COLOR",o.GRID_COLOR="GRID_COLOR",o.OPACITY="OPACITY",o.LINE_WEIGHT="LINE_WEIGHT",o.LINE_STYLE="LINE_STYLE",o.BORDER_RADIUS="BORDER_RADIUS",o.INTERVAL="INTERVAL",o.SELECT_RADIO="SELECT_RADIO",(R.DSInteractionType||(R.DSInteractionType={})).FILTER="FILTER",(N=R.ToDSMessageType||(R.ToDSMessageType={})).VIZ_READY="vizReady",N.INTERACTION="vizAction",(R.InteractionType||(R.InteractionType={})).FILTER="FILTER"}},n.c=t,n.d=function(e,R,C){n.o(e,R)||Object.defineProperty(e,R,{enumerable:!0,get:C})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(R,e){if(1&e&&(R=n(R)),8&e)return R;if(4&e&&"object"==typeof R&&R&&R.__esModule)return R;var C=Object.create(null);if(n.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:R}),2&e&&"string"!=typeof R)for(var t in R)n.d(C,t,function(e){return R[e]}.bind(null,t));return C},n.n=function(e){var R=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(R,"a",R),R},n.o=function(e,R){return Object.prototype.hasOwnProperty.call(e,R)},n.p="",n(n.s="./src/index.ts");function n(e){if(t[e])return t[e].exports;var R=t[e]={i:e,l:!1,exports:{}};return C[e].call(R.exports,R,R.exports,n),R.l=!0,R.exports}var C,t});// Progress Steps Community Visualization (source)
// IMPORTANT: saat deploy, gabungkan file ini dengan dscc.min.js menjadi "viz.js"
// Contoh (Mac/Linux):   cat dscc.min.js viz-source.js > viz.js
// Contoh (Windows CMD): type dscc.min.js viz-source.js > viz.js
// Contoh (PowerShell):  Get-Content dscc.min.js, viz-source.js | Set-Content viz.js

(function(){
  // helper: ambil style value atau default
  function sVal(style, key, fallback){
    const obj = style[key] || {};
    return (obj.value !== undefined && obj.value !== null) ? obj.value : (obj.defaultValue ?? fallback);
  }

  function parseColor(c, fallback){
    if(!c) return fallback;
    if(typeof c === 'string') return c;
    if(c.color) return c.color;
    return fallback;
  }

  function norm(s){
    return String(s || '').trim().toLowerCase().replace(/\s+/g,' ');
  }

  function getStepOrder(style){
    const order = sVal(style, 'order', 'Approach,Hanging,Warm,Hot, Follow Up, Win');
    return String(order).split(',').map(x => x.trim()).filter(Boolean);
  }

  function clear(el){
    while(el.firstChild) el.removeChild(el.firstChild);
  }

  function px(n){ return (Number(n)||0) + 'px'; }

  // Buat elemen sekali saja
  const root = document.createElement('div');
  root.style.width = '100%';
  root.style.height = '100%';
  root.style.display = 'flex';
  root.style.alignItems = 'center';
  root.style.justifyContent = 'center';
  document.body.appendChild(root);

  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.padding = '8px';
  container.style.boxSizing = 'border-box';
  root.appendChild(container);

  function draw(data){
    clear(container);

    const table = data.tables.DEFAULT;
    const headers = table.headers || [];
    const rows = table.rows || [];

    // Identifikasi index kolom berdasarkan configId di viz-config.json
    const pbfIdx = headers.findIndex(h => h.configId === 'pbf');
    const statusIdx = headers.findIndex(h => h.configId === 'status');
    const metricIdx = headers.findIndex(h => h.configId === 'metric');

    const style = data.style || {};
    const theme = data.theme || {};
    const steps = getStepOrder(style);

    // Warna & ukuran
    const activeColor = parseColor(sVal(style,'activeColor', theme.accentFillColor), '#2563eb');
    const inactiveColor = parseColor(sVal(style,'inactiveColor', {color:'#e5e7eb'}), '#e5e7eb');
    const lineColor = parseColor(sVal(style,'lineColor', {color:'#cbd5e1'}), '#cbd5e1');
    const textColor = parseColor(sVal(style,'textColor', theme.fontColor), '#111827');
    const labelSize = sVal(style,'labelSize', 12);
    const circleSize = Math.max(24, Math.min(96, Number(sVal(style,'circleSize', 40))));
    const showCounts = !!sVal(style,'showCounts', true);

    // Kumpulkan data
    const statusCounts = new Map(steps.map(s => [norm(s), 0]));
    const pbfSet = new Set();

    rows.forEach(r => {
      const pbf = (pbfIdx >= 0) ? r[pbfIdx] : null;
      const st = (statusIdx >= 0) ? r[statusIdx] : null;
      const val = (metricIdx >= 0 && r[metricIdx] != null) ? Number(r[metricIdx]) : 1;
      if(pbf != null) pbfSet.add(String(pbf));
      const key = norm(st);
      if(statusCounts.has(key)){
        statusCounts.set(key, statusCounts.get(key) + (isNaN(val)? 0 : val));
      } else {
        // status yang tidak ada di urutan default, tambahkan di akhir
        statusCounts.set(key, (isNaN(val)? 0 : val));
      }
    });

    const singleMode = pbfSet.size === 1 && rows.length >= 1;
    const activeStatusRaw = singleMode && rows[0] ? rows[0][statusIdx] : null;
    const activeStatus = norm(activeStatusRaw);

    // Layout wrapper
    const wrap = document.createElement('div');
    wrap.style.width = '100%';
    wrap.style.height = '100%';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.justifyContent = 'center';
    wrap.style.flexDirection = 'column';
    container.appendChild(wrap);

    // Row untuk langkah
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.justifyContent = 'center';
    row.style.gap = px(Math.max(12, Math.round(circleSize*0.6)));
    row.style.flexWrap = 'wrap';
    row.style.width = '100%';
    wrap.appendChild(row);

    const stepIndex = new Map(steps.map((s,i)=>[norm(s), i]));
    const activeIdx = stepIndex.has(activeStatus) ? stepIndex.get(activeStatus) : -1;

    function makeConnector(){
      const c = document.createElement('div');
      c.style.height = '4px';
      c.style.flex = '0 0 ' + px(Math.max(24, Math.round(circleSize*1.5)));
      c.style.background = lineColor;
      c.style.opacity = '1';
      c.style.borderRadius = '9999px';
      return c;
    }

    function makeStep(label, idx){
      const nlabel = norm(label);
      const count = statusCounts.get(nlabel) || 0;
      const isCompleted = singleMode ? (idx <= activeIdx) : (count > 0);
      const isCurrent = singleMode ? (idx === activeIdx) : false;

      const holder = document.createElement('div');
      holder.style.display = 'flex';
      holder.style.flexDirection = 'column';
      holder.style.alignItems = 'center';
      holder.style.justifyContent = 'center';

      // Lingkaran
      const circle = document.createElement('div');
      circle.style.width = px(circleSize);
      circle.style.height = px(circleSize);
      circle.style.borderRadius = '50%';
      circle.style.display = 'flex';
      circle.style.alignItems = 'center';
      circle.style.justifyContent = 'center';
      circle.style.boxShadow = '0 1px 2px rgba(0,0,0,0.08)';
      circle.style.cursor = 'pointer';
      circle.style.userSelect = 'none';
      circle.style.transition = 'transform 120ms ease-out';

      circle.onmouseenter = ()=>{ circle.style.transform = 'scale(1.05)'; };
      circle.onmouseleave = ()=>{ circle.style.transform = 'scale(1)'; };

      circle.style.background = isCompleted ? activeColor : inactiveColor;
      circle.style.color = isCompleted ? '#ffffff' : textColor;
      circle.style.border = '2px solid ' + (isCurrent ? '#11182722' : 'transparent');

      const innerText = document.createElement('div');
      innerText.style.fontSize = px(Math.max(11, Math.round(circleSize*0.35)));
      innerText.style.fontWeight = '600';
      innerText.style.lineHeight = '1';
      if(singleMode){
        innerText.textContent = isCurrent ? '●' : (isCompleted ? '✓' : '');
      } else {
        innerText.textContent = showCounts ? String(count) : '';
      }
      circle.appendChild(innerText);

      // Label
      const lbl = document.createElement('div');
      lbl.textContent = label;
      lbl.style.marginTop = '6px';
      lbl.style.fontSize = px(labelSize);
      lbl.style.color = textColor;
      lbl.style.textAlign = 'center';
      lbl.style.maxWidth = px(Math.max(80, Math.round(circleSize*3)));

      // Klik untuk memfilter berdasarkan status
      circle.addEventListener('click', function(){
        try{
          const statusField = (data.fields && data.fields.status && data.fields.status[0]) ? data.fields.status[0].id : null;
          if(statusField){
            const FILTER = dscc.InteractionType.FILTER;
            const interactionData = {
              concepts: [statusField],
              values: [[label]]
            };
            dscc.sendInteraction('onClick', FILTER, interactionData);
          }
        } catch(e){
          // no-op
        }
      });

      holder.appendChild(circle);
      holder.appendChild(lbl);
      return holder;
    }

    // Build steps + connectors
    steps.forEach((label, idx) => {
      if(idx>0){
        row.appendChild(makeConnector());
      }
      row.appendChild(makeStep(label, idx));
    });

    // Info kecil di bawah
    const note = document.createElement('div');
    note.style.marginTop = '10px';
    note.style.fontSize = '11px';
    note.style.color = '#6b7280';
    note.style.textAlign = 'center';
    if(singleMode){
      note.textContent = 'Mode satu PBF – titik ● = status saat ini, ✓ = langkah yang sudah lewat.';
    } else {
      note.textContent = showCounts ? 'Mode banyak PBF – angka pada lingkaran = jumlah PBF di langkah tersebut.' : 'Mode banyak PBF.';
    }
    wrap.appendChild(note);
  }

  // Subscribe
  dscc.subscribeToData(draw, {transform: dscc.tableTransform});
})();
