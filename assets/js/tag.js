window.lpTag=window.lpTag||{};lpTag.taglets=lpTag.taglets||{};lpTag._tagv="2.18.1";lpTag.cfg={retry:{count:0,max:3,timeout:1e3},scriptPrefix:"_lpTagScriptId_",count:0};lpTag.log=function(a,b,c){lpTag._logcnt=lpTag._logcnt||0;"undefined"!=typeof lpMTagDebug&&"function"==typeof lpMTagDebug.Display&&lpMTagDebug.Display(a,b,c,lpTag._logcnt);if("undefined"!=typeof lpTaglogListeners)for(var d=0;d<lpTaglogListeners.length;d++)try{lpTaglogListeners[d](a,b,c,lpTag._logcnt)}catch(e){"undefined"!=typeof lpMTagDebug&&"function"==typeof lpMTagDebug.Display&&lpMTagDebug.Display("Exception="+e+" msg="+a,b,c,lpTag._logcnt)}lpTag._logcnt++};lpTag.csds=function(){function a(a){for(var b=0;b<a.length;b++)d[a[b].service]=a[b].baseURI}function b(a){var b=d[a],c="ALL";return b?b:d[c]}function c(){return d}var d=[];return{getDomain:b,setDomains:a,getCSDSMap:c}}();lpTag.getDomain=lpTag.csds.getDomain;!function(a,b){"use strict";if("object"==typeof exports)b(a,exports);else{a.Chronos=a.Chronos||{};b(a,a.Chronos)}}("undefined"==typeof window.lpTag?this:window.lpTag,function(a,b){"use strict";function c(a,b,c){var d=[];if(a[b]&&a[b].length)for(var e=0;e<a[b].length;e++)c&&"*"!==a[b][e].appName&&a[b][e].appName!==c||d.push(a[b][e]);if(a["*"])for(var f=0;f<a["*"].length;f++)c&&"*"!==a["*"][f].appName&&a["*"][f].appName!==c||d.push(a["*"][f]);return d}function d(b,c,d){a&&"function"==typeof a.log&&a.log(b,c,d)}function e(a){var b,c=a.unbindObj[a.attrName],e=!1;if(!a.unbindObj){d("CMD listen id not spec for unbind","ERROR",a.loggerName);return null}if("string"==typeof a.unbindObj)return i(a.lstnrs,a.unbindObj);if(!a.unbindObj.func&&!a.unbindObj.context&&!a.unbindObj.appName)return!1;var f=a.lstnrs;if(c){f={};f[c]=a.lstnrs[c]}for(var g in f)if(f.hasOwnProperty(g)&&f[g]&&f[g].length){b=j(f[g],a.unbindObj.func,a.unbindObj.context,a.unbindObj.appName);if(b.length!==f[g].length){a.lstnrs[g]=b;e=!0}}return e}function f(a){var b={};if(a.constructor===Object)for(var c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&("object"==typeof a[c]&&a[c].constructor!==Array?b[c]=f(a[c]):a[c].constructor===Array?b[c]=a[c].slice(0)||[]:"function"!=typeof a[c]&&(b[c]=null!==a[c]&&void 0!==a[c]?a[c]:""));else a.constructor===Array?b=a.slice(0)||[]:"function"!=typeof a&&(b=a);return b}function g(a,b,c){if(("undefined"==typeof c||"*"===c)&&"*"===b)return a;for(var d=[],e=0;e<a.length;e++)(a[e].eventName===c||"*"===c)&&(b&&b===a[e].appName||!a[e].appName||"*"===a[e].appName||"*"===b)&&d.push(a[e]);return d}function h(a){if(0===a.eventBufferLimit||a.triggerData.data&&a.triggerData.data.doNotStore)a=null;else{var b={eventName:a.triggerData[a.attrName],appName:a.triggerData.appName};b.data=a.triggerData.passDataByRef?a.triggerData.data:f(a.triggerData.data);if(a.eventBufferLimit>0){a.index>=a.eventBufferLimit&&(a.index=0);a.fired[a.index]=b;a.index++}else a.fired.push(b);a=null}}function i(a,b){var c=!1;if(!b){d("Ev listen id not spec for unregister","ERROR","Events");return null}for(var e in a)if(a.hasOwnProperty(e))for(var f=0;f<a[e].length;f++)if(a[e][f].id==b){a[e].splice(f,1);d("Ev listen="+b+" and name="+e+" unregister","DEBUG","Events");c=!0;break}c||d("Ev listen not found "+b+" unregister","DEBUG","Events");return c}function j(a,b,c,e){var f=[];if(a&&a.length)for(var g=0;g<a.length;g++)try{var h=!c&&a[g].func===b,i=!b&&c&&a[g].context===c,j=b&&c&&a[g].func===b&&a[g].context===c,k=e&&e===a[g].appName,l="*"===a[g].appName;if(h||i||j){if(k||l)continue;if(i)continue}else if(!b&&!c&&k)continue;f.push(a[g])}catch(m){d("Error in unbind e="+m.message,"ERROR","Events")}return f}b.EventsUtil=b.EventsUtil||{getListeners:c,log:d,unbind:e,hasFired:g,cloneEventData:f,storeEventData:h}});!function(a,b){"use strict";if("object"==typeof exports)b(a,exports,require("util/EventsUtil"));else{a.Chronos=a.Chronos||{};b(a,a.Chronos,a.Chronos.EventsUtil)}}("undefined"==typeof window.lpTag?this:window.lpTag,function(a,b,c){"use strict";function d(a){function b(a){if(a){a.triggerOnce=!0;return d(a)}return null}function d(a,b,e){var f=a;"string"==typeof a&&(f={appName:a,eventName:b,func:e});if(!f.eventName||!f.func||"function"!=typeof f.func&&f.func.constructor!==Array){c.log("Ev listen has invalid params: evName=["+f.eventName+"]","ERROR","Events");return null}if(f.func.constructor===Array){for(var g,h,i=[],j=0;j<f.func.length;j++){g=c.cloneEventData(f);g.func=f.func[j];h=d(g);i.push(h)}return i}var k=q+n++,l={id:k,func:f.func,context:f.context||null,aSync:f.aSync?!0:!1,appName:f.appName||"*",triggerOnce:f.triggerOnce||!1};o[f.eventName]=o[f.eventName]||[];o[f.eventName].push(l);c.log("Ev listen rgstr: evName=["+f.eventName+"] aSync="+l.aSync+" appName="+l.name,"DEBUG","Events");f=null;a=null;return k}function e(a){return c.unbind({unbindObj:a,attrName:m,loggerName:l,lstnrs:o})}function f(a,b){return c.hasFired(p,a,b)}function g(a,b,d){var e=a;"string"==typeof a&&(e={eventName:b,appName:a,data:d});if(!e||"undefined"==typeof e.eventName){c.log("Ev name not spec for publish","ERROR","Events");e=null;return null}e.passDataByRef=e.passDataByRef||!j;i(e);var f=c.getListeners(o,e.eventName,e.appName);if(f.length>0)for(var g=0;g<f.length;g++){var k=e.passDataByRef?e.data:c.cloneEventData(e.data),l={appName:e.appName,eventName:e.eventName},m=f[g];m.aSync||k&&k.aSync?setTimeout(h(m,k,l),0):h(m,k,l)()}e=null;return f.length>0}function h(a,b,d){return function(){try{a.func.call(a.context,b,d);b=null;a.triggerOnce&&e(a);a=null}catch(f){c.log("Error executing "+d.eventName+" eventId: "+a.id+"e="+f.message,"ERROR","Events")}}}function i(a){c.storeEventData({triggerData:a,eventBufferLimit:k,attrName:m,fired:p,index:r})}var j,k,l="Events",m="eventName",n=0,o={},p=[],q="evId_",r=0;j=a&&"boolean"==typeof a.cloneEventData?a.cloneEventData:!1;k=a&&!isNaN(a.eventBufferLimit)?a.eventBufferLimit:-1;this.once=b;this.hasFired=f;this.trigger=g;this.publish=g;this.bind=d;this.register=d;this.unbind=e;this.unregister=e}b.Events=b.Events||d});lpTag.Events=lpTag.Events||lpTag.Chronos.Events;lpTag.eventsFactory=function(){var a=new lpTag.Events,b=a.trigger,c=!1;a.trigger=function(a,d,e){var f=a;"string"==typeof a&&(f={eventName:d,appName:a,data:e});if("LPT"===f.appName&&"DOM_READY"===f.eventName){if(c)return;c=!0}"undefined"!=typeof lpTag._deferExecuted?b(f):lpTag.defer(function(){b(f)},1)};return a};lpTag.events=lpTag.eventsFactory();lpTag.tglMng=function(){function run(a){_createTaglets(a);try{a=_sortIncludes(a)}catch(b){lpTag.log("Exception in _manageIncludes:"+b,"ERROR","LPTAG")}_initTaglets(a);_execDefers();lpTag.events.trigger("LPTAG","ON_READY");_startTaglets(a);lpTag.events.trigger("LPTAG","ON_STARTED")}function _sortIncludes(a){for(var b=[],c={},d=0;d<a.length;d++){var e=lpTag.taglets[a[d].name];"undefined"!=typeof e.includes&&"undefined"==typeof e.includes.length&&(e.includes=[e.includes]);c[a[d].name]=lpTag.taglets[a[d].name].includes}for(var f=0,g=!0;g;){f++;g=!1;for(var h in c){if("undefined"==typeof c[h]||"undefined"!=typeof c[h]&&0===c[h].length){b.push(_getTaglet(a,h));delete c[h];c=_removeFromIncludes(c,h)}g=!0}if(f>a.length+1){var i="";try{for(var j in c){i+="# tgl=["+j+"] missing -> ";for(var k=0;k<c[j].length;k++)i+=" "+c[j][k].name}}catch(l){lpTag.log("Exception in sortInclude:"+l,"ERROR","LPTAG")}lpTag.log("Missing/circular includes:"+i,"ERROR","LPTAG");g=!1}}return b}function _getTaglet(a,b){for(var c=0;c<a.length;c++)if(a[c].name==b)return a[c];return void 0}function _removeFromIncludes(a,b){for(var c in a){var d=a[c];if("undefined"!=typeof d){for(var e=[],f=0;f<d.length;f++)d[f].name!=b&&e.push(d[f]);a[c]=e}}return a}function _createTaglets(taglets){for(var i=0;i<taglets.length;i++)try{lpTag.log("Processing taglet: "+taglets[i].name,"DEBUG","LPTAG");eval(taglets[i].code)}catch(e){lpTag.log("Error creating taglet:"+taglets[i].name+"  e="+e,"ERROR","LPTAG")}}function _initTaglets(a){for(var b=0;b<a.length;b++){var c=lpTag.taglets[a[b].name];try{lpTag.log("Init taglet: "+a[b].name,"DEBUG","LPTAG");c.init(a[b].parameters)}catch(d){lpTag.log("Error init taglet:"+a[b].name+"  e="+d,"ERROR","LPTAG")}}}function _execDefers(){lpTag._deferExecuted=!0;lpTag.defer=function(a){try{a()}catch(b){lpTag.log("Error executing defer fn:"+b,"ERROR","LPTAG")}};_execDeferArr(lpTag._defB);_execDeferArr(lpTag._defT);_execDeferArr(lpTag._defL)}function _execDeferArr(a){if("undefined"!=typeof a){for(var b=0;b<a.length;b++)try{a[b]()}catch(c){lpTag.log("Error executing defer fn:"+c,"ERROR","LPTAG")}a.length=0}}function _startTaglets(a){for(var b=0;b<a.length;b++){var c=lpTag.taglets[a[b].name];try{if("function"==typeof c.start){lpTag.log("Start taglet: "+a[b].name,"DEBUG","LPTAG");c.start()}lpTag.events.trigger("LPTAG","TAGLET_STARTED",{name:a[b].name})}catch(d){lpTag.log("Error start taglet :"+a[b].name+"e= "+d,"ERROR","LPTAG")}}}return{run:run}}();window.lpTag=window.lpTag||{};lpTag.storageMethods=lpTag.storageMethods||function(){"use strict";function a(){return l&&m}function b(){return l}function c(){return m}function d(a,c){if(b()){sessionStorage.setItem(a,c);return!0}}function e(a){return b()?sessionStorage.getItem(a)||"":void 0}function f(a){if(b()&&e(a)){sessionStorage.removeItem(a);return!0}return!1}function g(a,b){if(c()){localStorage.setItem(a,b);return!0}}function h(a){return c()?localStorage.getItem(a)||"":void 0}function i(a){if(c()&&h(a)){localStorage.removeItem(a);return!0}return!1}function j(){l=k(sessionStorage);m=k(localStorage)}function k(a){var b=!1,c="lpTestCase";try{if("undefined"!=typeof Storage){a.setItem(c,"1");a.removeItem(c);b=!0}}catch(d){}return b}var l,m;j();return{isStorageEnabled:a,isSessionStorageEnabled:b,isLocalStorageEnabled:c,setSessionData:d,getSessionData:e,removeSessionData:f,setPersistentData:g,getPersistentData:h,removePersistentData:i}}();window.lpTag=window.lpTag||{};lpTag.cookieMethods=lpTag.cookieMethods||function(){"use strict";function a(a){var b;if("string"!=typeof a)return"";a=encodeURIComponent(a);b=document.cookie.split(a+"=");return 1==b.length?"":decodeURIComponent(b[1].split(";")[0])}function b(a,b,d){d="number"==typeof d?d:2592e3;return c(a,b,d)}function c(a,b,c,d,e){var f,g;if("string"!=typeof a||""===a)return!1;(null===b||"undefined"==typeof b)&&(c=-1);if("number"==typeof c){g=(new Date).getTime();f=new Date(g+1e3*c)}b=b?encodeURIComponent(b):"";document.cookie=[encodeURIComponent(a),"=",b,f?"; expires="+f.toUTCString():"",d?"; path="+d:"",e?"; domain="+e:""].join("");return!0}function d(a,b,d){return c(a,void 0,void 0,b,d)}return{clearCookie:d,writeSessionCookie:c,writePersistentCookie:b,readCookie:a}}();lpTag.device=function(){function a(){return u}function b(){return v}function c(){return l[v]}function d(){return j[u]}function e(){var a=i.desktop;n&&!o?a=i.mobile:!o&&!t||g()?o&&g()&&p&&(a=i.tablet):a=i.tablet;return a}function f(){var a=k.windows;q&&!n?a=k.mac:t?a=k.android:s?a=k.iOS:r&&(a=k.linux);return a}function g(){var a,b=!1,c=document.documentMode;a=/*@cc_on!@*/b;if(!a){try{document.documentMode=""}catch(d){}a="number"==typeof document.documentMode;try{document.documentMode=c}catch(d){}}!a&&navigator&&navigator.userAgent&&(a="Netscape"===navigator.appName&&/Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.test(navigator.userAgent));return a}function h(a){var b={};for(var c in a)b[c]=a[c];return b}var i={desktop:0,tablet:1,mobile:2},j=["Desktop","Tablet","Mobile"],k={windows:0,mac:1,linux:2,iOS:3,android:4},l=["Windows","Mac OSX","Linux","iOS","Android"],m=navigator.userAgent,n=m.match(/(Windows Phone|iPhone|iPod|mobile|Mobile|IEMobile)/g)?!0:!1,o=m.match(/(Tablet PC|iPad|Tablet|tablet)/g)?!0:!1,p=m.match(/(Touch)/g)?!0:!1,q=m.match(/(Mac OS)/g)?!0:!1,r=m.match(/(Linux)/g)?!0:!1,s=m.match(/(iPhone|iPod|iPad)/g)?!0:!1,t=m.match(/(android|Android)/g)?!0:!1,u=e(),v=f();return{os:b,osEnum:h(k),osName:c,family:a,familyEnum:h(i),familyName:d}}();lpTag.start=function(){if(!lpTag.started){lpTag.started=!0;lpTag._reload()}};lpTag._reload=function(){lpTag.load(lpTag.protocol+"//"+(lpTag.ovr&&lpTag.ovr.tagjs?lpTag.ovr.tagjs:"tags.liveperson.net")+"/lptag/api/account/"+lpTag.site+"/configuration/applications/taglets/.jsonp?df="+lpTag.device.family()+(lpTag.section?"&s="+lpTag.section:"")+(lpTag.debug?"&lpDebug="+lpTag.debug:""),"UTF-8",lpTag.cfg.scriptPrefix+lpTag.cfg.count);lpTag.cfg.count++};lpTag.retries=0;lpTag.callback=function(a){function b(a,b){var d=lpTag.cfg.count-1;c(lpTag.cfg.scriptPrefix+d);isNaN(b.maxRetries)||(a.max=parseInt(b.maxRetries,10));isNaN(b.timeout)||(a.timeout=parseInt(b.timeout,10));if(a.count<a.max){lpTag.log("retrying count="+a.count+" max="+a.max,"DEBUG","LPTAG");a.count++;setTimeout(function(){lpTag._reload()},a.timeout)}else lpTag.log("exceeded max retries: "+a.max+", stopping","ERROR","LPTAG")}function c(a){var b=document.getElementById(a);if(b)try{b.parentNode.removeChild(b);for(var c in b)b.hasOwnProperty(c)&&delete b[c]}catch(d){lpTag.log("error removing script: "+a,"ERROR","LPTAG")}}try{var d=lpTag.cfg.retry;if(a.retry)b(d,a.retry);else if(!lpTag.loaded){lpTag.loaded=!0;d.count=0;lpTag.site=a.site||lpTag.site;lpTag.csds.setDomains(a.serviceMap);lpTag.debug?setTimeout(function(){lpTag.tglMng.run(a.taglets)},0):lpTag.tglMng.run(a.taglets)}}catch(e){lpTag.log("callback has failed "+e,"ERROR","LPTAG")}};lpTag.run=function(){if(window.location&&window.location.search){var a=window.location.search.match(/lpDebug=(?=(\d))/);a&&a[1]&&(lpTag.debug=a[1])}if(!lpTag.isDom&&("interactive"===document.readyState||"complete"===document.readyState)){lpTag.isDom=!0;this.events.trigger("LPT","DOM_READY")}"undefined"!=typeof window._lptTagStop||"undefined"!=typeof lpTag.autoStart&&!lpTag.autoStart||lpTag.start()};lpTag.run();