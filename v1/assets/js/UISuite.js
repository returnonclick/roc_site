"undefined"==typeof lpTag.taglets&&(lpTag.taglets={}),lpTag.taglets.lpAnimate={_V:"1.1",name:"lpAnimate",elements:{},queue:{},conf:{interval:13,duration:500,easing:"swing"},init:function(a){if(a)for(var b=0;b<a.length;b++)this.conf[a[b].id]=a[b].value},_supported:{opacity:function(){var a=document.createElement("div");a.style.cssText="opacity:.1";var b=/^0.1/.test(a.style.opacity);return b}()},_regExp:{alphaFilter:new RegExp("alpha\\([^)]*\\)","i"),opacityInAlphaFilter:new RegExp("opacity=([^)]*)")},_cssPropHooks:{opacity:{get:function(a){if(this._supported.opacity)return parseFloat(a.style.opacity);var b=this._regExp.opacityInAlphaFilter.test(a.style.filter),c=b?.01*parseFloat(RegExp.$1):null;return c},set:function(a,b){if(this._supported.opacity)a.style.opacity=b;else{var c=a.style.filter||"",d="alpha(opacity="+100*b+")",e=this._regExp.alphaFilter.test(c),f=e?c.replace(this._regExp.alphaFilter,d):c+" "+d;a.style.filter=f}}}},_cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,color:!0},_easing:{linear:function(a,b,c,d,e){return c+d*a},swing:function(a,b,c,d,e){return(-Math.cos(a*Math.PI)/2+.5)*d+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeOutBack:function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInBack:function(a,b,c,d,e,f){return"undefined"==typeof f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c}},animate:function(a,b,c){if("undefined"!=typeof a&&"undefined"!=typeof b&&""!=a.id)if("undefined"==typeof this.elements[a.id]){"undefined"==typeof b.length&&(b=[b]),"number"==typeof c&&(c={duration:c});var d=a.id,e=this;this.elements[d]={id:d,domElement:a,props:b,options:{duration:c&&c.duration?c.duration:e.conf.duration,easing:c&&c.easing?c.easing:e.conf.easing,callback:c&&"function"==typeof c.callback?c.callback:null,context:c.context||window}},this._doAnimate(d)}else{var f={domElement:a,props:b,options:c};this._addToQueue(a.id,f)}},stop:function(a){var b=this.elements[a];"undefined"!=typeof b&&(null!=b.timeout&&clearTimeout(b.timeout),b.timeout=null,delete this.elements[a]),this._removeFromQueue(a)},isNumeric:function(a){return"undefined"!=typeof lpTag.taglets.utils?lpTag.taglets.utils.isNumeric(a):!1},_doAnimate:function(a){var b=this.elements[a];b.startTime=(new Date).getTime(),b.relTime=b.relPos=0,b.timeout=null;for(var c=0;c<b.props.length;c++){var d=b.props[c];d.start=this._getCurrentVal(b.domElement,d.name)||0,d.now=d.start}this._step(b.id)},_step:function(a){var b=this.elements[a],c=(new Date).getTime();if(c>=b.startTime+b.options.duration){b.relPos=b.relTime=1;var d,e;for(d=0;d<b.props.length;d++)e=b.props[d],e.now=e.targetVal,this._update(b.domElement,e.name,e.now);this._complete(b)}else{var f=c-b.startTime;for(b.relTime=f/b.options.duration,b.relPos=this._easing[b.options.easing](b.relTime,f,0,1,b.options.duration),d=0;d<b.props.length;d++)e=b.props[d],e.now=e.start+(e.targetVal-e.start)*b.relPos,this._update(b.domElement,e.name,e.now);var g=this;b.timeout=setTimeout(function(){g._step(a)},g.conf.interval)}},_update:function(a,b,c){"undefined"!=typeof this._cssPropHooks[b]?this._cssPropHooks[b].set.call(this,a,c):a.style&&null!=a.style[b]&&(this.isNumeric(c)&&!this._cssNumber[b]&&(c+="px"),a.style[b]=c)},_getCurrentVal:function(a,b){return"undefined"!=typeof this._cssPropHooks[b]?this._cssPropHooks[b].get.call(this,a):a.style&&null!=a.style[b]?parseFloat(a.style[b]):void 0},_complete:function(a){var b=a.id,c=null;if(null!=a.options.callback&&"function"==typeof a.options.callback&&(c=a.options.callback),null!=a.timeout&&clearTimeout(a.timeout),a.timeout=null,delete this.elements[b],null!=c)try{c.call(a.options.context,b)}catch(d){}if("undefined"!=typeof this.queue[b]&&null!=this.queue[b])if(this.queue[b].length>0){var e=this.queue[b].splice(0,1);this.animate(e[0].domElement,e[0].props,e[0].options)}else this._removeFromQueue(b)},_addToQueue:function(a,b){"undefined"==typeof this.queue[a]&&(this.queue[a]=[]),this.queue[a].push(b)},_removeFromQueue:function(a){"undefined"!=typeof this.queue[a]&&null!=this.queue[a]&&delete this.queue[a]}},"undefined"==typeof lpTag.taglets&&(lpTag.taglets={}),lpTag.taglets.lpJsonToDom=function(){function a(a,b,c,d,e){var f=document.createElement(a);d.isSubContainer="undefined"==typeof d.isSubContainer?!1:d.isSubContainer,c=c||{},e||(e=o(b)),c.id=e;for(var g in c)c.hasOwnProperty(g)&&f.setAttribute(g,c[g]);var h=p(b,d);return""!=h&&(f.className=h),r(f,d.css,b),f}function b(a,b,d){v=d;var e=[];if("undefined"==typeof a||null==a)throw lpTag.log("lpJsonToDom, invalid jsons","ERROR","JSON2DOM"),new Error("invalid data exception");for(var f in a){var g=a[f];if("undefined"==typeof g||null==g)throw lpTag.log("lpJsonToDom, bad value","ERROR","JSON2DOM"),new Error("invalid data exception");"undefined"==typeof g.length&&(g=[g]);for(var h=0;h<g.length;h++){var i=A[f];if("function"!=typeof i)throw lpTag.log("lpJsonToDom, no converter for type "+f,"ERROR","JSON2DOM"),new Error("invalid data exception");var j=g[h],k=i(j,b);c(k,j,b),e.push(k)}}return e}function c(a,b,c){var d=b.events;if("undefined"!=typeof d&&null!=d&&"object"==typeof d)for(var e in d)f(a,e,d[e],c)}function d(a){return a.replace(/\r\n|\r|\n/g,"<br \n/>")}function e(a){var b,c,d=[];if("undefined"==typeof v)return a;if("undefined"==typeof v.length)return a;for(var e=0;e<x.length;e++)b=new RegExp("{{"+x[e]+"\\-\\d+}}","g"),c=a.match(b),null!==c&&(d=d.concat(c));if(null===d)return a;for(var f=0;f<d.length;f++)for(var g=0;g<v.length;g++)d[f].replace("{{","").replace("}}","")===v[g].id&&(a=a.replace(d[f],v[g].value));return a}function f(a,b,c,d){a["on"+b]=function(a){"undefined"!=typeof a&&a.stopPropagation();var b={htmlEvent:a,elemId:this.id,entityId:d};lpTag.events.trigger("LP_OFFERS",c,b)}}function g(a,b){if("undefined"!=typeof a&&null!=a&&"object"==typeof b)for(var c in b)try{var d=b[c];"undefined"!=typeof d&&h(d)&&(m(d)&&!y[c]&&(d+="px"),j(c)&&null!=d&&""!=d&&(d=l(d)),i(a,c,d),a.style[c]=d)}catch(e){lpTag.log("lpJsonToDom, invalid css ["+c+"; e:"+e+"]","ERROR","JSON2DOM")}}function h(a){return m(a)||"string"==typeof a&&-1===a.toLowerCase().indexOf("javascript")&&-1===a.toLowerCase().indexOf("expression")}function i(a,b,c){switch(b){case"borderRadius":a.style.borderRadius=c,a.style.MozBorderRadius=c,a.style.WebkitBorderRadius=c;break;case"borderTopLeftRadius":a.style.MozBorderRadiusTopleft=c,a.style.WebkitBorderTopLeftRadius=c;break;case"borderTopRightRadius":a.style.MozBorderRadiusTopright=c,a.style.WebkitBorderTopRightRadius=c;break;case"borderBottomLeftRadius":a.style.MozBorderRadiusBottomleft=c,a.style.WebkitBorderBottomLeftRadius=c;break;case"borderBottomRightRadius":a.style.MozBorderRadiusBottomright=c,a.style.WebkitBorderBottomRightRadius=c;break;case"transform":a.style.MozTransform=c,a.style.WebkitTransform=c,a.style.msTransform=c;break;default:a.style[b]=c}}function j(a){return"backgroundImage"==a}function k(a){return"undefined"!=typeof lpTag.taglets.utils?lpTag.taglets.utils.extractBgImgUrl(a):a}function l(a){var b=k(a);return b='url("'+s(b)+'")'}function m(a){return"undefined"!=typeof lpTag.taglets.utils?lpTag.taglets.utils.isNumeric(a):!1}function n(a){var b,c="";if("undefined"!=typeof a&&null!=a)for(var d=0;d<a.length;d++)b=a.charCodeAt(d),c+=256>b?"&#x"+b.toString(16)+";":a[d];return c}function o(a){var b="LPM"+a+"-"+q()+"-"+z;return z++,b}function p(a,b){var c="undefined"==typeof b.isSubContainer?!1:b.isSubContainer,d="undefined"==typeof b.engagementType?"":b.engagementType,e="";return c||(e="LPM"+a,""!=d&&(e=e+" "+d)),e}function q(){return(new Date).getTime()}function r(a,b,c){g(a,w.base),g(a,w[c]),g(a,b)}function s(a){return"undefined"!=typeof lpTag.taglets.utils?lpTag.taglets.utils.checkHttps(a):void 0}function t(a){return a.replace(/&#x3c;&#x62;&#x72;&#x20;&#xa;&#x2f;&#x3e;/g,"<br/>")}function u(a){var b,c,d=a.attributes;if(d)for(b=d.length-1;b>=0;b-=1)c=d[b].name,"function"==typeof a[c]&&(a[c]=null);var e=a.childNodes;if(e)for(b=0;b<e.length;b+=1)u(a.childNodes[b])}var v,w={base:{margin:0,padding:0,borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderTopWidth:0,borderRightWidth:0,borderBottomWidth:0,borderLeftWidth:0,outlineStyle:"none",outlineWidth:0,fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",listStylePosition:"outside",listStyleImage:"none",listStyleType:"none",letterSpacing:"normal",lineHeight:"normal",textDecoration:"none",verticalAlign:"baseline",whiteSpace:"normal",wordSpacing:"normal"},container:{backgroundRepeat:"repeat-x",backgroundPosition:"bottom left",borderStyle:"solid"},label:{position:"absolute"},image:{position:"absolute"},button:{position:"absolute",backgroundRepeat:"repeat-x",backgroundPosition:"bottom left",borderStyle:"solid",paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10,cursor:"pointer"},closeButton:{position:"absolute",cursor:"pointer"},peel:{},iframe:{},slideOutPin:{position:"absolute",cursor:"pointer"}},x=["LPMacro","searchkeywords","country","state","city"],y={zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,color:!0},z=0,A={text:function(b,c){var f=a("div",c,null,b,null),g=b.text;g=e(g),g=d(g);var h=n(g);return f.innerHTML=t(h),f},containers:function(b){return a("div","container",null,b,null)},labels:function(a){return A.text(a,"label")},images:function(b,c){if("undefined"==typeof b.imageUrl||null==b.imageUrl||""==b.imageUrl)throw lpTag.log("lpJsonToDom, bad imageUrl :"+b.imageUrl,"ERROR","JSON2DOM"),new Error("invalid data exception");"peel"!==c&&"closeButton"!==c&&"slideOutPin"!==c&&(c="image");var d=s(b.imageUrl),e={src:d};return b.alt&&(e.alt=b.alt),a("img",c,e,b,null)},buttons:function(a){return A.text(a,"button")},closeButtons:function(a,b){var c=A.images(a,"closeButton");return f(c,"click","OFFER_CLOSED",b),c},peels:function(b){var c=a("div","container",null,b,null),d=A.images(b,"peel");return c.appendChild(d),c},iframes:function(b){var c=o(elemType);return a("iframe","iframe",{name:c,frameBorder:0,height:b.css.height,width:b.css.width,scrolling:"no",marginheight:0,marginwidth:0,allowTransparency:!0},b,c)},slideOutPins:function(a){return A.images(a,"slideOutPin")}};return{version:"1.4",name:"lpJsonToDom",init:function(){},convert:b,purge:u}}(),"undefined"==typeof lpTag.taglets&&(lpTag.taglets={}),lpTag.taglets.utils={_V:"1.3",name:"utils",init:function(){},checkHttps:function(a){return"https"==lpTag.protocol&&0!==a.indexOf("https")&&(a="https"+a.substr(4)),a},makeScriptCall:function(a,b){a=this.checkHttps(a);var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("charset",b?b:"UTF-8"),c.setAttribute("src",a);var d=document.getElementsByTagName("head");d&&d.item(0).appendChild(c)},makeImgCall:function(a){a=this.checkHttps(a);var b=new Image;return b.src=a,b},decodeUri:function(a){try{return decodeURIComponent(a)}catch(b){return lpTag.log("err decoding string: "+a+"["+b+"]","ERROR","utils"),a}},isEmptyObj:function(a){for(var b in a)return!1;return!0},arrToObject:function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=a[c];return b},preloadImages:function(a,b){var c,d,e=this.arrToObject(a),f=[],g={},h=!1,i=this;if(lpTag.log("preloading "+a.length+" images","INFO","utils"),this.isEmptyObj(e)){lpTag.log("no images to load. calling callback","INFO","utils");try{b(!0,g)}catch(j){lpTag.log("error in preload callback ["+j+"]","ERROR","utils")}}else for(c in e)-1!==c.toLowerCase().indexOf("javascript")||-1!==c.toLowerCase().indexOf("expression")?b(!1):(f.push(new Image),d=f.length-1,f[d].onload=function(a){return function(){if(delete e[a],this.onload=null,g[a]={width:this.width,height:this.height},i.isEmptyObj(e)&&!h){h=!0,lpTag.log("preloading images complete","INFO","utils");try{b(!0,g)}catch(c){lpTag.log("error in preload callback ["+c+"]","ERROR","utils")}}}}(c),f[d].onerror=function(a){return function(){if(lpTag.log("error preloading image: "+a,"ERROR","utils"),!h){h=!0;try{b(!1)}catch(c){lpTag.log("error in preload callback ["+c+"]","ERROR","utils")}}}}(c),f[d].src=this.checkHttps(c))},stopEventBubble:function(a){var b=a||window.event;b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation()},geObjById:function(a){return document.getElementById?document.getElementById(a):document.all?document.all(a):!1},isIE:function(){var a=navigator.userAgent;a=a.toLowerCase();var b=/(msie) ([\w.]+)/,c=b.exec(a);return null!=c},isIE6:function(){var a=navigator.userAgent;a=a.toLowerCase();var b=/(msie) ([\w.]+)/,c=b.exec(a);if(null!=c){var d=parseInt(c[2],10);if(6==d)return!0}return!1},waitForDocumentBody:function(a,b,c){if(c=c||0,lpTag.log("in waitForDocumentBody......","INFO",this.name),document.body)a.call(b||window);else{var d=this;400>c?setTimeout(function(){c++,lpTag.log("Waiting for document.body. try: ("+c+"), time: ("+(new Date).getTime()+")","DEBUG",this.name),d.waitForDocumentBody(a,b,c)},50):lpTag.log("call callback on waitForDocumentBody failed. document.body not exist ","ERROR",this.name)}},isQuirksMode:function(){return document.documentMode&&5==document.documentMode||"BackCompat"==document.compatMode?(lpTag.log("Quirks Mode == true","DEBUG","utils"),!0):(lpTag.log("Quirks Mode == false","DEBUG","utils"),!1)},getPageDimensions:function(){for(var a={totalHeight:null,totalWidth:null,windowHeight:null,windowWidth:null,verticalScroll:null,horizontalScroll:null},b=["Height","Width"],c=0;c<b.length;c++){var d=b[c];a["total"+d]=Math.max(document.documentElement["client"+d],document.body["scroll"+d],document.documentElement["scroll"+d],document.body["offset"+d],document.documentElement["offset"+d]),a["window"+d]="CSS1Compat"===window.document.compatMode&&window.document.documentElement["client"+d]||window.document.body["client"+d]||window.document.documentElement["client"+d]}return a.verticalScroll=document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop,a.horizontalScroll=document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft,a},appendToPage:function(a,b){return b=b||{},lpTag.log("in appendToPage......","DEBUG","utils"),"object"!=typeof a||"undefined"==typeof a.id?(lpTag.log("appendToPage:element not exist","ERROR","utils"),!1):null!=this.geObjById(a.id)?!1:(b.offerParent=b.offerParent||document.body,b.offerParent?(b.offerParent.appendChild(a),void(b.callback&&b.callback.call(b.context||window,a.id))):(lpTag.log("no parent exists - parent = "+b.offerParent,"DEBUG","utils"),!1))},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},replaceAll:function(a,b,c){return a.replace(new RegExp(b,"g"),c)},extractBgImgUrl:function(a){var b=/^url\(['"]?([^'"]*)['"]?\)$/i,c=b.test(a),d=c?RegExp.$1:a;return d},is_array:function(a){return a&&"object"==typeof a&&a.constructor===Array},cloneObject:function(a){var b={};if(a.constructor===Object)for(var c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&("object"==typeof a[c]&&a[c].constructor!==Array?b[c]==lpTag.taglets.utils.cloneObject(a[c]):a[c].constructor===Array?b[c]=a[c].slice(0)||[]:"function"!=typeof a[c]&&(b[c]=null!==a[c]&&void 0!==a[c]?a[c]:""));else a.constructor===Array?b=a.slice(0)||[]:"function"!=typeof a&&(b=a);return b},extendObj:function(a,b){a=a||{};for(var c in b)a[c]=b[c];return a},setTimeout:function(a,b,c){var d;return c>0&&"function"==typeof a&&(d=setTimeout(function(){a.call(b)},1e3*c)),d},clearTimeout:function(a){a&&clearTimeout(a)},getCdnGallery:function(a){return a=a.replace(/\{galleryBasePath\}/g,lpTag.protocol+"//"+lpTag.csds.getDomain("leCdnDomain")+"/gallery")},createDom:function(a,b){if(b&&"string"==typeof a){for(var c in b)a=a.replace("{{"+c+"}}",b[c]);var d=document.createElement("div");return d.innerHTML=a,d.firstChild}}},lpTag.taglets=lpTag.taglets||{},lpTag.taglets.baseOffer=function(){},function(a){function b(a,b,c){var d={},e=a.engagementWindowId||b.windowId;return d.site=lpTag.site,d.scid=a.contextId,d.cid=a.campaignId,d.eid=a.engagementId,d.ename=a.engagementName,d.target=c.target,d.params=c.params,d.svid=lpTag.taglets.lp_monitoringSDK.getVid(),d.ssid=lpTag.taglets.lp_monitoringSDK.getSid(),d.ssuid=lpTag.taglets.lp_monitoringSDK.getSidPrefix(),d.isPopOut="boolean"==typeof b.isPopOut||"true"===b.isPopOut?!!b.isPopOut:!1,d.env=c.env,d.offlineSurveyId=a.offlineSurveyId,a.authChatConn&&(d.authChatConn=a.authChatConn),b.skillName&&(d.skill=b.skillName),e&&(d.lewid=e),b.language&&(d.lang=b.language),(a.forceOffline===!0||a.state===n.OFFLINE)&&(d.isOffline=!0),d}function c(a,b,c){var d="https://"+c.domain+"/hcp/lewindow/index.html?lpNumber="+lpTag.site+"&site="+lpTag.site+"&domain="+c.domain;return c.env&&(d+="&env="+c.env),d=lpTag.taglets.lp_monitoringSDK.appendCtx(d),d+="&scid="+encodeURIComponent(a.contextId),d+="&cid="+encodeURIComponent(a.campaignId),d+="&eid="+encodeURIComponent(a.engagementId),b.skillName&&(d+="&skill="+encodeURIComponent(b.skillName)),b.windowId&&(d+="&lewid="+encodeURIComponent(b.windowId)),b.language&&(d+="&lang="+encodeURIComponent(b.language)),d}function d(a,b){return b&&a?{type:a,campaign:b.campaignId,engId:b.engagementId,revision:b.engagementRevision,eContext:[{type:"engagementContext",id:b.contextId}]}:null}var e="prototype",f="baseOffer",g={IMPRESSION:"impDisplay",CLOSED:"impClose",TIMEOUT:"impTimeout",CLICK:"impAccept"},h="LP_OFFERS",i={IMPRESSION:"OFFER_IMPRESSION",CLOSED:"OFFER_CLOSED",TIMEOUT:"OFFER_TIMEOUT",CLICK:"OFFER_CLICK",ERROR:"OFFER_ERROR"},j={CHAT:"adminArea",ACCDN:"acCdnDomain",INTERACTIONPLATFORM:"interactionPlatform",LPCDN:"leCdnDomain"},k="height=650,width=330,menubar=no,resizable=no",l="LiveEngageChat_",m=lpTag.taglets.lpUnifiedWindow,n={OFFLINE:2,ONLINE:1};a[e].CHANNELS={CHAT:1,CONTENT:100},a[e].init=function(a,b){this.engData=a,this.conf=b},a[e].onImpression=function(){this.reportSDE(this.engData,g.IMPRESSION),this.trigger(i.IMPRESSION)},a[e].onTimeout=function(){this.reportSDE(this.engData,g.TIMEOUT),this.trigger(i.TIMEOUT)},a[e].onClose=function(){this.reportSDE(this.engData,g.CLOSED)},a[e].onError=function(){this.trigger(i.ERROR)},a[e].onStart=function(){this.openChannel(this.engData,this.conf,this.getChannelProps(),!0)},a[e].onClick=function(){this.trigger(i.CLICK,!0),this.openChannel(this.engData,this.conf,this.getChannelProps())},a[e].getChannelProps=function(){var a={};return this.isChat()?(a.env="",a.domain=lpTag.csds.getDomain(j.CHAT),a.params=k,a.target=(l+lpTag.site).replace(/[^a-z0-9]/gi,"_"),("hc1"===a.domain||"hc1.dev.lprnd.net"===a.domain)&&(a.domain="hc1.dev.lprnd.net",a.env="qa")):a.target=this.activeState.click.target,a},a[e].trigger=function(a,b){lpTag.events.trigger({appName:h,eventName:a,data:this.engData,aSync:b||!1}),this.infoLog("Trigger event: app="+h+", name="+f)},a[e].bind=function(a,b){return lpTag.events.bind({appName:h,eventName:a,func:b,context:this})},a[e].infoLog=function(a){this.log(a,"INFO")},a[e].errorLog=function(a){this.log(a,"ERROR")},a[e].debugLog=function(a){this.log(a,"DEBUG")},a[e].log=function(a,b){lpTag.log(a+". offer: "+this.engData.tglName+". offerId="+this.offerId,b,f)},a[e].openChannel=function(a,b,c,d){this.unifiedWindowSupported(b)?this.openUnifiedWindow(a,b,c,d):this.openLegacy(a,b,c)},a[e].openUnifiedWindow=function(a,c,d,e){e?m.start(b(a,c,d)):(m.clicked(b(a,c,d)),this.reportOfferClick(a))},a[e].openLegacy=function(a,b,d){var e=this.isChat()?c(a,b,d):this.activeState.click.url;switch(d.target){case"_self":this.reportOfferClick(a),setTimeout(function(){window.location.href=e},50);break;case"_parent":case"_top":this.reportOfferClick(a),window.open(e,d.target,d.params);break;default:window.open(e,d.target?d.target:"_blank",d.params),this.reportOfferClick(this.engData)}},a[e].isChat=function(){return this.conf.channel===this.CHANNELS.CHAT},a[e].reportOfferClick=function(a){this.reportSDE(a,g.CLICK)},a[e].reportSDE=function(a,b,c){var e=d(b,a);c?lpTag.sdes.push(e):lpTag.sdes.send(e),this.infoLog("Sent SMT event: "+b+", campaignID: "+a.campaignId+", engagementId: "+a.engagementId)},a[e].unifiedWindowSupported=function(a){return this.isChat()&&m&&"function"==typeof m.clicked}}(lpTag.taglets.baseOffer),lpTag.taglets=lpTag.taglets||{},function(){function a(a,b){a&&b&&this.init(a,b)}function b(){function b(a,b,c,d){return function(e,f){try{e?(a.imgData=f,b.call(d)):(c.call(d),d.errorLog("failed loading images for offer"))}catch(g){d.errorLog("Failed to run callbacks on images load")}}}function c(a){return a.charAt(0).toUpperCase()+a.slice(1)}function d(a){if(a)for(var b=0;b<a.length;b++)null!=a[b]&&lpTag.events.unbind(a[b])}function e(a){var b=[];f(a,b);for(var c in a.elements)for(var d=a.elements[c]||[],e=0;e<d.length;e++)g(d[e],b);return b}function f(a,b){a.background&&a.background.image&&(a.background.image=h(a.background.image,!0),b.push(a.background.image))}function g(a,b){a.css&&a.css.backgroundImage&&(a.css.backgroundImage=h(a.css.backgroundImage,!0),b.push(a.css.backgroundImage)),a.imageUrl&&(a.imageUrl=h(a.imageUrl),b.push(a.imageUrl))}function h(a,b){return a?(a=q.getCdnGallery(a),b?q.extractBgImgUrl(a):a):void 0}function j(a){return a=a||{},a.images=a.images||[],a.labels=a.labels||[],a.buttons=a.buttons||[],a.closeButtons=a.closeButtons||[],a}function k(a,b,c){c.errorLog("Invalid data ["+a+"] for state  ["+b.type+"]"),b._isInvalid=!0}var l=a,m="prototype",n={0:"peeling",1:"overlay",2:"toaster",3:"slider",5:"overlay",6:"overlay"},o={0:!0,1:!0,2:!0,3:!1,5:!1,6:!1},p={HIDE:"HIDE",START:"START",ON_HIDE:"OFFER_HIDE",ON_DISPLAY:"OFFER_DISPLAY",ON_REMOVE:"OFFER_REMOVE"},q=lpTag.taglets.utils,r=107158,s={0:{horizontal:"custom",vertical:"custom"},1:{horizontal:"left",vertical:"top"},2:{horizontal:"center",vertical:"top"},3:{horizontal:"right",vertical:"top"},4:{horizontal:"left",vertical:"middle"},5:{horizontal:"center",vertical:"middle"},6:{horizontal:"right",vertical:"middle"},7:{horizontal:"left",vertical:"bottom"},8:{horizontal:"center",vertical:"bottom"},9:{horizontal:"right",vertical:"bottom"},10:{horizontal:"left",vertical:"top"},11:{horizontal:"left",vertical:"bottom"}};"function"==typeof lpTag.taglets.baseOffer&&l[m].extended!==!0&&(l[m]=new lpTag.taglets.baseOffer,l[m].extended=!0,l[m].constructor=l,l[m].init=function(a,b){this.eventIds=[],this.engData=a,this.engData.engagementName=b.name,this.conf=b,this.states=this.getStates(b.displayInstances),this.activeState=this.getState(this.engData.state,this.states)},l[m].run=function(){this.debugLog("in run......"),this._isInvalid||this.activeState._isInvalid?this.errorLog("Invalid data, exiting _startRunning"):(this.trigger(p.START),q.waitForDocumentBody(this.onBodyLoad,this))},l[m].onBodyLoad=function(){var a=e(this.activeState);l=l||window,q.preloadImages(a,b(this.activeState,this.startRendering,this.onError,this))},l[m].startRendering=function(){this.bindCommonEvents(),this.createOffer()},l[m].createOffer=function(){},l[m].getEngagementTypeName=function(a){return n[a]||""},l[m].convertJsonToDom=function(a){return lpTag.taglets.lpJsonToDom.convert(a,this.offerId,this.engData.macros)},l[m].appendToPage=function(a,b,c){return q.appendToPage(b,{callback:a,context:this,offerParent:c||document.body})},l[m].show=function(){var a=this.getObj(this.containerId);a&&a.style&&(a.style.display="block",this.trigger(p.ON_DISPLAY),this.infoLog("Offer displayed"))},l[m].hide=function(){var a=this.getObj(this.containerId);a&&a.style&&(a.style.display="none",this.trigger(p.ON_HIDE),this.infoLog("Offer hidden"))},l[m].remove=function(a){var b=this.getObj(this.containerId);if(b){try{lpTag.taglets.lpJsonToDom.purge(b),b.parentNode.removeChild(b)}catch(c){this.hide()}a=a||{},a.silent||this.trigger(p.ON_REMOVE)}d(this.activeState.events)},l[m].getObj=function(a){return document.getElementById(a)},l[m].setEngagementConf=function(a){this.debugLog("in setEngagementConf.."),this.conf.zIndex=r,this.offerId=a.id,this.location={},a.position&&(this.location=s[a.position.type]||{}),a.effects&&(this.conf.secondsToCollapseAfter=a.effects.secondsToCollapseAfter)},l[m].getState=function(a,b){for(var c=0;c<b.length;c++)if(b[c].type===a)return b[c];return{_isInvalid:!0}},l[m].getStates=function(a){a=a||[];for(var b=[],c=0;c<a.length;c++)b.push(this.getStateObj(a[c]));return b},l[m].getStateObj=function(a){var b={type:a.displayInstanceType},c=["background","size","border","elements"];if(a.presentation){for(var d=0;d<c.length;d++)a.presentation[c[d]]?b[c[d]]=a.presentation[c[d]]:k([c[d]],b,this);b.elements=j(b.elements)}else k("presentation",b,this);return b.click=a.events&&a.events.click||{enabled:!1},b},l[m].validateConf=function(a,b){for(var c=0;c<b.length;c++)a[b[c]]||this.setInvalid(a[b])},l[m].extractCssProps=function(a,b,d){d=d||{};for(var e,f=0;f<b.length;f++){e=a[b[f]]||{};for(var g in e)e[g]&&(d[b[f]+c(g)]=e[g])}return d.width=a.size.width,d.height=a.size.height,d.cursor=a.click&&a.click.enabled?"pointer":"auto",d},l[m].setInvalid=function(a){this.errorLog("Invalid data ["+a+"]"),this._isInvalid=!0},l[m].bindCommonEvents=function(){if("function"==typeof this.cleanupOffer&&this.conf.channel===this.CHANNELS.CHAT&&!this.parentContainer){var a=this.bind(p.HIDE,this.cleanupOffer);this.eventIds.push(a)}},l[m].cleanupOffer=function(){this.errorLog("cleanupOffer must be implemented")},l[m].extendObj=q.extendObj,l[m].appendJson=function(a,b){if(a&&a.appendChild){var c=this.convertJsonToDom(b)||[];for(i=0;i<c.length;i++)a.appendChild(c[i])}return a},l[m].setClickEvent=function(a,b,c){var d=!!this.engData&&(this.channel===this.CHANNELS.CHAT?!!this.engData.contextId:!0);a&&this.activeState.click.enabled&&d&&(a.onclick=function(){b.call(c)})},l[m].setTimeout=function(a){"undefined"!=typeof this.conf.type&&o[this.conf.type]&&(this.offerTimeoutId=q.setTimeout(a,this,this.conf.secondsToCollapseAfter))},l[m].extended=!0)}lpTag.taglets.baseUIOffer=function(){function c(){}function d(c,d){return b(),new a(c,d)}var e="0.1",f="baseUIOffer";return{v:e,name:f,init:c,createInstance:d}}()}();