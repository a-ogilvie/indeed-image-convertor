(this["webpackJsonpindeed-image-convertor"]=this["webpackJsonpindeed-image-convertor"]||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var r,t=n(1),i=n.n(t),l=n(8),d=n.n(l),o=(n(14),n(15),n(4));!function(e){e.Upload="UPLOAD_PIC",e.Converted="CONVERT_DONE"}(r||(r={}));var c=function(e,a){switch(a.type){case r.Upload:return{file:a.payload.file,before:a.payload.before,after:e.after,converting:a.payload.converting};case r.Converted:return{file:e.file,before:e.before,after:a.payload.after,converting:a.payload.converting};default:return e}},p=n(0),s={file:null,before:"",after:"",converting:!1},m=Object(t.createContext)({state:s,dispatch:function(){return null}}),w=function(e){var a=e.children,n=i.a.useReducer(c,s),r=Object(o.a)(n,2),t=r[0],l=r[1];return Object(p.jsx)(m.Provider,{value:{state:t,dispatch:l},children:a})},C=function(){var e=i.a.useContext(m).state.before;return Object(p.jsx)("div",{className:"inputBox",children:e?Object(p.jsx)("img",{alt:"input",src:e}):Object(p.jsx)("div",{children:"Your picture will be shown here."})})},y=function(){var e=i.a.useContext(m).state,a=e.after,n=e.converting;return Object(p.jsx)("div",{className:"outputBox",children:n?Object(p.jsx)("div",{className:"loader"}):a?Object(p.jsx)("img",{alt:"output",src:a}):Object(p.jsx)("div",{children:"Converted picture will be shown here."})})},f=n(2),u=function(e){var a=e.dragging,n=e.file,r=e.onSelectFileClick,t=e.onDrag,i=e.onDragStart,l=e.onDragEnd,d=e.onDragOver,o=e.onDragEnter,c=e.onDragLeave,s=e.onDrop,m="file-uploader";a&&(m+=" file-uploader--dragging");var w=n?n.name:"No File Uploaded!";return Object(p.jsx)("div",{className:m,onDrag:t,onDragStart:i,onDragEnd:l,onDragOver:d,onDragEnter:o,onDragLeave:c,onDrop:s,children:Object(p.jsxs)("div",{className:"file-uploader__contents",children:[Object(p.jsx)("span",{className:"file-uploader__file-name",children:w}),Object(p.jsx)("span",{children:"Drag & Drop File"}),Object(p.jsx)("span",{children:"or"}),Object(p.jsx)("span",{onClick:r,children:"Select File"}),e.children]})})},g=n(7),U=n(9),A=[new Uint8ClampedArray([22,44,91]),new Uint8ClampedArray([26,48,63]),new Uint8ClampedArray([31,50,45]),new Uint8ClampedArray([34,63,125]),new Uint8ClampedArray([40,69,90]),new Uint8ClampedArray([42,32,109]),new Uint8ClampedArray([44,71,64]),new Uint8ClampedArray([45,45,45]),new Uint8ClampedArray([50,86,161]),new Uint8ClampedArray([50,94,120]),new Uint8ClampedArray([57,97,86]),new Uint8ClampedArray([58,44,22]),new Uint8ClampedArray([61,48,149]),new Uint8ClampedArray([64,124,159]),new Uint8ClampedArray([66,40,24]),new Uint8ClampedArray([66,66,66]),new Uint8ClampedArray([73,31,53]),new Uint8ClampedArray([74,128,114]),new Uint8ClampedArray([76,114,204]),new Uint8ClampedArray([81,62,33]),new Uint8ClampedArray([83,69,184]),new Uint8ClampedArray([89,89,89]),new Uint8ClampedArray([90,156,196]),new Uint8ClampedArray([92,57,37]),new Uint8ClampedArray([99,161,144]),new Uint8ClampedArray([107,41,77]),new Uint8ClampedArray([110,84,44]),new Uint8ClampedArray([112,145,233]),new Uint8ClampedArray([113,98,223]),new Uint8ClampedArray([118,118,118]),new Uint8ClampedArray([128,74,39]),new Uint8ClampedArray([136,185,219]),new Uint8ClampedArray([139,190,175]),new Uint8ClampedArray([144,136,231]),new Uint8ClampedArray([145,52,105]),new Uint8ClampedArray([146,112,56]),new Uint8ClampedArray([148,148,148]),new Uint8ClampedArray([159,176,235]),new Uint8ClampedArray([169,100,55]),new Uint8ClampedArray([176,171,239]),new Uint8ClampedArray([180,178,177]),new Uint8ClampedArray([184,76,135]),new Uint8ClampedArray([184,140,71]),new Uint8ClampedArray([188,214,236]),new Uint8ClampedArray([191,217,208]),new Uint8ClampedArray([201,210,243]),new Uint8ClampedArray([209,125,71]),new Uint8ClampedArray([209,206,243]),new Uint8ClampedArray([210,229,247]),new Uint8ClampedArray([210,231,225]),new Uint8ClampedArray([212,210,208]),new Uint8ClampedArray([216,111,166]),new Uint8ClampedArray([216,171,108]),new Uint8ClampedArray([220,226,251]),new Uint8ClampedArray([226,157,190]),new Uint8ClampedArray([226,223,251]),new Uint8ClampedArray([228,226,224]),new Uint8ClampedArray([231,162,127]),new Uint8ClampedArray([233,244,241]),new Uint8ClampedArray([234,243,251]),new Uint8ClampedArray([236,201,216]),new Uint8ClampedArray([238,205,163]),new Uint8ClampedArray([239,241,253]),new Uint8ClampedArray([240,202,187]),new Uint8ClampedArray([242,241,253]),new Uint8ClampedArray([243,242,241]),new Uint8ClampedArray([244,219,231]),new Uint8ClampedArray([244,222,212]),new Uint8ClampedArray([244,223,200]),new Uint8ClampedArray([246,250,254]),new Uint8ClampedArray([246,251,249]),new Uint8ClampedArray([248,249,254]),new Uint8ClampedArray([249,249,254]),new Uint8ClampedArray([250,238,244]),new Uint8ClampedArray([250,239,236]),new Uint8ClampedArray([250,240,231]),new Uint8ClampedArray([250,249,248]),new Uint8ClampedArray([252,248,250]),new Uint8ClampedArray([253,248,244]),new Uint8ClampedArray([253,248,247]),new Uint8ClampedArray([255,255,255])];function v(e){var a,n=1/0,r=new Uint8ClampedArray([0,0,0,255]),t=Object(U.a)(A);try{for(t.s();!(a=t.n()).done;){var i=a.value,l=Math.pow(i[0]-e[0],2)+Math.pow(i[1]-e[1],2)+Math.pow(i[2]-e[2],2);if(l<n&&(n=l,r=i),0===n)return new Uint8ClampedArray([].concat(Object(g.a)(r),[e[3]]))}}catch(d){t.e(d)}finally{t.f()}return new Uint8ClampedArray([].concat(Object(g.a)(r),[e[3]]))}var j=function(e){var a,n,r,t=document.createElement("canvas");t.width=e.width,t.height=e.height,null===(a=t.getContext("2d"))||void 0===a||a.drawImage(e,0,0);var i=null===(n=t.getContext("2d"))||void 0===n?void 0:n.getImageData(0,0,t.width,t.height);if(!i)return"";for(var l=new Map,d=0;d<i.data.length;d+=4){var c=i.data.slice(d,d+4),p=l.get(c.join(","));p||(p=v(c),l.set(c.join(","),p));var s=p,m=Object(o.a)(s,4);i.data[d]=m[0],i.data[d+1]=m[1],i.data[d+2]=m[2],i.data[d+3]=m[3]}return null===(r=t.getContext("2d"))||void 0===r||r.putImageData(i,0,0),t.toDataURL("image/jpg")},b=0,O=function(){var e=i.a.useContext(m).dispatch,a=null,n=i.a.useState({dragging:!1,file:null}),l=Object(o.a)(n,2),d=l[0],c=l[1],s=function(a){var n=new FileReader;n.addEventListener("loadend",(function(n){var t;if(null===(t=n.target)||void 0===t?void 0:t.result){e({type:r.Upload,payload:{file:a,before:n.target.result.toString(),converting:!0}});var i=new Image;i.addEventListener("load",(function(){var a=j(i);e({type:r.Converted,payload:{after:a,converting:!1}})})),i.src=n.target.result.toString()}})),n.readAsDataURL(a)},w=function(e){e.preventDefault(),e.stopPropagation()};return Object(t.useEffect)((function(){return window.addEventListener("dragover",(function(e){w(e)})),window.addEventListener("drop",(function(e){w(e)})),function(){window.removeEventListener("dragover",w),window.removeEventListener("drop",w)}})),Object(p.jsx)(u,{dragging:d.dragging,file:d.file,onSelectFileClick:function(){a&&a.click()},onDrag:w,onDragStart:w,onDragEnd:w,onDragOver:w,onDragEnter:function(e){w(e),b++,(e.dataTransfer.items&&e.dataTransfer.items[0]||e.dataTransfer.types&&"Files"===e.dataTransfer.types[0])&&c(Object(f.a)(Object(f.a)({},d),{},{dragging:!0}))},onDragLeave:function(e){w(e),--b<=0&&c(Object(f.a)(Object(f.a)({},d),{},{dragging:!1}))},onDrop:function(e){w(e),b=0,c(Object(f.a)(Object(f.a)({},d),{},{dragging:!1})),e.dataTransfer.files&&e.dataTransfer.files[0]&&("image"===e.dataTransfer.items[0].type.split("/")[0]?(c(Object(f.a)(Object(f.a)({},d),{},{file:e.dataTransfer.files[0]})),s(e.dataTransfer.files[0])):alert("Please upload an image."))},children:Object(p.jsx)("input",{ref:function(e){return a=e},type:"file",className:"file-uploader__input",onChange:function(e){e.target.files&&e.target.files[0]&&(c(Object(f.a)(Object(f.a)({},d),{},{file:e.target.files[0]})),s(e.target.files[0]))},accept:"image/*"})})};var h=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(w,{children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"pictureBox",children:[Object(p.jsx)(C,{}),Object(p.jsx)(y,{})]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(a){var n=a.getCLS,r=a.getFID,t=a.getFCP,i=a.getLCP,l=a.getTTFB;n(e),r(e),t(e),i(e),l(e)}))};d.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.2919e310.chunk.js.map