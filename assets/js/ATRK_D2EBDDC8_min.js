// vim:set ts=4 sw=4 et ai:
function ATRK() {
	// The logger function needs to remain on one line and at the top
	// of the ATRK() function so it is found and stripped correctly during the
	// release build
	this.logger = function(l) {
		if (this.debugMode) {
			try {
				console.debug(l);
			} catch (e) {
			}
		}
	};
	this.debugMode = false;
	this.logger('in Constructor');

	// Class variables (that are constant once set)
	this.enabled = true; // By default, this script is enabled.
	this.tagVersion = '1'; // The version of the tag created
	this.currentBranch = 'N/A'; // The SVN Branch Name
	this.currentVersion = '38960.90'; // The SVN Version
	this.beaconDomain = 't.acq.io'; // Where to pull the 1x1 gif from
	this.clientKey = 'D2EBDDC8'; // The client key
	this.novalue = '-';
	this.conversionCodeDefault = '1';
	this.neverExpires = 'Sun, 18 Jan 2038 00:00:00 GMT;'; // When the 'a' cookie expires
	this.visitExpMinutes = 30; // How often(in minutes) to reset the visit expiration
	this.now = new Date(); // Time the script executes (local to the PC & Timezone)
	this.tmNow = this.now.getTime() + ':' + String(parseInt(this.now.getTimezoneOffset(), 10));
	this.ttdAdvertiserId = 'w4x7yll';

	// the derived location and protocol of the page
	this.pageLocation = ''; // document.location or window.location
	this.protocol = ''; // http or https

	// Class variables that control the script operation
	this.pageDepth = 3; // The page depth to pull gif's for. Set to 0 to pull every one

	// Class variables (that get modified)
	this.alreadyExecuted = false; // do not pull gifs again (prevent multiple or file:// inclusions
	this.clientUUID = '-'; // The 'final' UUID from cookie or Flash
	this.clientDomain = ''; // The client domain
	this.referrerDomain = ''; // The referrer domain

	// Conversion Variables that get set by the client either thru javascript ATRK_ variables or function calls
	this.ATRKctp = ''; // Conversion code
	this.ATRKtid = ''; // Conversion id
	this.ATRKcur = ''; // Conversion Currency code
	this.ATRKtot = ''; // Conversion total
	this.ATRKtax = ''; // Conversion tax
	this.ATRKshp = ''; // Conversion shipping
	this.ATRKuts = ''; // Conversion Units Total Shipped
	this.ATRKpgd = ''; // Conversion Page depth
	this.ATRKitems = []; // Conversion Item Array of [ "sku,cost,units","sku,cost,units", ... ]
	this.ATRKcustomParams = []; // Conversion custom parameters.

	// //////////////////////////////////////////////////
	// "Public" methods
	// //////////////////////////////////////////////////
	// Entry point for Tracking
	// gifPull is set "false" by log_ATRK_conversion to disable extra "view" record
	this.pageview = function(gifPull) {
		this.logger('in pageview');

		this.pageLocation = (typeof this._getDocument().location == 'undefined') ? this._getWindow().location : this._getDocument().location;
		this.protocol = (this.pageLocation.protocol.indexOf('https:') == 0 ? 'https://' : 'http://');
		this.logger('  document.location=' + this._getDocument().location);
		this.logger('  window.location=' + this._getWindow().location);
		this.logger('  pageLocation.protocol=' + this.pageLocation.protocol);
		this.logger('  this.protocol=' + this.protocol);

		// get the domains from document.location and document.referrer
		// Needed to set cookies & page depth
		this.clientDomain = this._getClientDomain();
		this.referrerDomain = this._getReferrerDomain();
		this.logger('  this.clientDomain=' + this.clientDomain);
		this.logger('  this.referrerDomain=' + this.referrerDomain);

		var cuuid;

		// Try to extract params from the URL
		// and set cookies as needed
		var atrk_a = this._getParamFromLink('ATRK_a');
		var atrk_y = this._getParamFromLink('ATRK_y');
		var atrk_x = this._getParamFromLink('ATRK_x');
		var atrk_k = this._getParamFromLink('9ckey');
		if (atrk_k !== '-')
			this._setSessionCookie('ATRK_k', atrk_k);
		if (atrk_x !== '-')
			this._setSessionCookie('ATRK_x', atrk_x);

		// check if the test cookies needs to be set
		// ie ?atrktest=on|off on the URL
		this._checkTestCookie();

		// If 'k' cookie is set, modify the CLient Key reported
		atrk_k = this._getCookie('ATRK_k');
		if ((atrk_k != '-') && (atrk_k != this.clientKey)) {
			this.clientKey = atrk_k;
		}

		this.logger('  From Link: atrk_a=' + atrk_a + ',  atrk_y=' + atrk_y + ',  9ckey=' + atrk_k);

		// UUID was on the URL (ie cross domain from linkClick or linkForm)
		// Should be a 'y' cookie on the URL too, if not, set to 1
		// Then set the cookies with the passed values
		if (atrk_a !== '-') {
			cuuid = atrk_a;
			if (atrk_y == '-') {
				atrk_y = 1;
			}
			this._setCookies(cuuid, atrk_y);

		} else {
			// UUID not on URL, check if 'a' cookie exists
			atrk_a = this._getCookie('ATRK_a');
			if (atrk_a !== '-') {
				// Yes, use this value
				cuuid = this._getUUIDFromCookie(atrk_a);
			} else {
				// No, generate a new one
				cuuid = this._generateUUID();
			}
		}

		// needed as a 'global' coming back from Flash (someday)
		this.clientUUID = cuuid;
		this.logger('  Using clientUUID: ' + this.clientUUID);

		this._pageviewStart(gifPull);
		this.logger('pageview() complete');
	};

	// Called by a page for cross domain tracking via onClick.
	// tl is used to get "this link" for the href
	// rv is the return value of the origional client onSubmit function
	this.linkClick = function(tl, rv) {
		this.logger('in linkClick( tl=' + tl + ',  rv=' + rv + ')');

		// bounce out if user's onSubmit function failed
		// or tlink.href not available
		if ((typeof rv == 'undefined') || !rv) {
			return false;
		}
		if (!tl || !tl.href) {
			return false;
		}

		tl.href = this._setQueryOnTarget(this.linkParams(), tl.href);
		this.logger('linkClick() complete');
		return true;
	};

	// Called by a page for cross domain tracking via onSubmit.
	// rv is the return value of the origional client onClick function
	this.linkForm = function(fobj, rv) {
		this.logger('in linkForm( fobj=' + fobj + ',  rv=' + rv + ')');

		// bounce out if user's onSubmit function failed
		// or the form.action is not available
		if ((typeof rv == 'undefined') || !rv) {
			return false;
		}
		if (!fobj || !fobj.action) {
			return false;
		}

		fobj.action = this._setQueryOnTarget(this.linkParams(), fobj.action);
		this.logger('linkForm() complete');
		return true;
	};

	// use this to get the transition parameters for conditions like
	// window.location links
	this.linkParams = function() {
		this.logger('in linkParams()');
		var x = this._getCookie('ATRK_x');
		var atrk_x = (x == '-') ? '' : "&ATRK_x=" + x;
		var p = "ATRK_y=" + this._getCookie('ATRK_y') + "&ATRK_a=" + this._getCookie('ATRK_a') + atrk_x + "&9ckey=" + this.clientKey;
		this.logger("  p=" + p);
		this.logger('linkParams() complete');
		return p;
	};

	// use this to append any embedded client tags on the page
	this.appendExternalJs = function(link) {
		this.logger('in appendExternalJs (link=' + link + ')');
		try {
			this.logger('  create script node (link=' + link + ')');
			var script = this._getDocument().createElement('script');
			script.src = link;
			script.type = "text/javascript";
			script.defer = true;
			this._getDocument().body.appendChild(script);
		} catch (e) {
			this.logger('  failed to add script : ' + e.message + ' (link=' + link + ')');
		}
		this.logger('appendExternalJs() complete');
	};

	// Conversion "set" functions
	this.setPageDepth = function(t) {
		this.pageDepth = t;
	};
	this.setDomain = function(t) {
		this.clientDomain = String(t);
	};
	this.setClientKey = function(t) {
		this.clientKey = String(t);
	};
	this.setConversionCode = function(t) {
		this.ATRKctp = String(t);
	};
	this.setTransId = function(t) {
		this.ATRKtid = String(t);
	};
	this.setCurrency = function(t) {
		this.ATRKcur = String(t);
	};
	this.setTotal = function(t) {
		this.ATRKtot = String(t);
	};
	this.setTax = function(t) {
		this.ATRKtax = String(t);
	};
	this.setShipping = function(t) {
		this.ATRKshp = String(t);
	};
	this.setUnits = function(t) {
		this.ATRKuts = String(t);
	};
	this.addItem = function(t) {
		this.ATRKitems[this.ATRKitems.length] = String(t);
	};
	this.addConversionCustomParameter = function(k,v) {
		if (typeof v === "undefined") {
			v = "";
		}
		this.ATRKcustomParams[this.ATRKcustomParams.length] = String(k) + "=" + String(v);
	};
	this.logConversion = function() {
		this.logger('in logConversion');
		this.pageview(false); // arg set false prevents "view" gif pull
		this.logger('logConversion() complete');
	};

	// General "get" functions for parameters needed for Google Checkout
	this.getTrackingId = function() {
		return this._getCookie('ATRK_a');
	};
	this.getPageDepth = function() {
		return this._getCookie('ATRK_y');
	};
	this.getTimeStamp = function() {
		return this.tmNow;
	};
	this.getClientKey = function() {
		return this.clientKey;
	};
	this.getDomain = function() {
		return this.clientDomain;
	};

	// ////////////////////////////////////////////////////////////////////
	// "Private" Methods
	// ////////////////////////////////////////////////////////////////////
	// Called from pageview if no Flash installed or from the .swf (if it loaded
	// ok)
	// gifPull is set "false" by log_ATRK_conversion to disable extra "view"
	// record
	this._pageviewStart = function(gifPull) {
		this.logger('in _pageviewStart(gifPull=' + gifPull + ')');
		this.logger('  this.clientUUID=' + this.clientUUID);

		// No prior cookie, set it now
		if (this._getCookie('ATRK_a') == '-') {
			this.logger('  Setting new browser cookies.');
			this._setCookies(this.clientUUID + '.1', '0');
		}

		var ca = "-", cy = "-", cyt = '-', ct = "-";
		var doGifPull = true;
		var doCnvPull = true;

		// Do cookies need to get evaluated & updated?
		// Only if the first time thru the script and the page was not loaded
		// from disk
		if (this.alreadyExecuted) {
			doGifPull = false;
			this.logger('  alreadyExecuted = true');
		}
		if (this.pageLocation.protocol == 'file:') {
			doGifPull = false;
			doCnvPull = false;
			this.logger('  location.protocol = file:');
		}

		// Do not do a "view" pull if called from log_conversion
		if ((typeof gifPull != 'undefined') && (gifPull === false)) {
			doGifPull = false;
		}

		this.logger('>>  gifPull=' + gifPull + ',  doGifPull=' + doGifPull + ',  doCnvPull=' + doCnvPull);
		if (doGifPull === true) {
			this.logger('  document.cookie=' + this._getDocument().cookie);

			ca = this._getCookie('ATRK_a');
			ct = this._getCookie('ATRK_t');
			cy = this._getCookie('ATRK_y');

			// Override y cookie value from URL (if set)
			cyt = this._getParamFromLink('ATRK_y');
			if (cyt !== '-') {
				this.logger(' ATRK_y=' + cyt + ' set from URL');
				cy = parseInt(cyt, 10);
				try {
					this._getDocument().cookie = 'ATRK_y=' + cy + '; path=/; expires=' + this._setCookieExpiration() + ';domain=' + this.clientDomain;
				} catch (e) {
					this.logger(' ATRK_y failed to set cookie: ' + e);
				}
			}

			this.logger(' ca=' + ca + ',  cy=' + cy + ',  cyt=' + cyt + ',  ct=' + ct);

			// All cookies are set, update the pageDepth cookie ATRK_y
			// yl is set if we came from a second domain, give it preference
			if ((ca != '-') && (cy != '-') && (ct != '-')) {
				var yv = parseInt(cy, 10);
				this.logger('  yval=' + yv + ', pageDepth=' + this.pageDepth);

				if (this.referrerDomain !== this.clientDomain) {

					// Domains do not match, reset the cookie if not set on the
					// URL
					this.logger('>>>referrerDomain(' + this.referrerDomain + ') != clientDomain(' + this.clientDomain + ')');
					if (cyt == '-') {
						yv = 0;
					}
				} else {

					// if more than pageDepth clicks into the site
					if (this.pageDepth > 0 && yv >= this.pageDepth) {
						doGifPull = false;
					}
				}
				try {
					this._getDocument().cookie = 'ATRK_y=' + (yv + 1) + '; path=/; expires=' + this._setCookieExpiration() + ';domain='
							+ this.clientDomain;
				} catch (e) {
					this.logger(' ATRK_y failed to set cookie: ' + e);
				}
				// At least one of the cookies is not set
			} else {
				// previous session expired, increment visit #
				if (ca !== '-') {
					this._setCookies(this._adjustVisitNumber(ca), '0');
				}
			}
		}

		// do the "view" pull and/or "atrk" pull as needed
		if (doGifPull) {
			this._gifImagePull('view');
			if (this._getCookie('ATRK_x') == 1) {
				var ctext = "AcquisioTracking Universal Tag\n";
				ctext = ctext + "--------------------------------------\n";
				ctext = ctext + "Client Key: " + this.clientKey + "\n";
				ctext = ctext + "ATRK_a: " + ca + "\n\n";
				ctext = ctext + "URL: " + this.pageLocation + "\n\n";
				ctext = ctext + "Referrer: " + this._getDocument().referrer + "\n";

				var durl = this.pageLocation.search.match('9.type=');
				if (durl != null) {
					ctext = ctext + "\nDestination URL param " + durl[0] + " detected.\n";
				}

				try {
					alert(ctext);
				} catch (e) {
					this.logger(' Could not alert: ' + e);
				}
			}
		}
		if (doCnvPull) {
			if (this._detectConversion()) {
				var gifs = this._buildConversion();
				if (gifs.length !== 0) {
					for ( var i = 0; i < gifs.length; i++) {
						if (typeof gifs[i] != 'undefined') {
							this._gifImagePull('atrk', gifs[i]);
						}
					}
					if (this._getCookie('ATRK_x') == 1) {
						var ctext = "AcquisioTracking Conversion Tag\n";
						ctext = ctext + "-----------------------------\n";
						ctext = ctext + "Client Key: " + this.clientKey + "\n";
						ctext = ctext + "Transaction Info\n";
						ctext = ctext + "  Conversion Code: " + this.ATRKctp + "\n";
						ctext = ctext + "  Id: " + this.ATRKtid + "\n";
						ctext = ctext + "  Currency: " + this.ATRKcur + "\n";
						ctext = ctext + "  Total: " + this.ATRKtot + "\n";
						ctext = ctext + "  Tax: " + this.ATRKtax + "\n";
						ctext = ctext + "  Shipping: " + this.ATRKshp + "\n";
						ctext = ctext + "  Units: " + this.ATRKuts + "\n";
						for ( var i = 0; i < this.ATRKitems.length; i++) {
							ctext = ctext + "  Item " + i + ": " + this.ATRKitems[i] + "\n";
						}
						for ( var i = 0; i < this.ATRKcustomParams.length; i++) {
							ctext = ctext + "  CustomParam " + i + ": " + this.ATRKcustomParams[i] + "\n";
						}
						try {
							alert(ctext);
						} catch (e) {
							this.logger(' Could not alert: ' + e);
						}
					}
					// reset the conversion data
					this._clearConversion();
				}
			}
		}

		this.alreadyExecuted = true;
		this.logger('_pageviewStart complete');
	};

	// chcek/set the x cookie
	this._checkTestCookie = function() {
		this.logger('in _checkTestCookie');
		var atrktest = this._getParamFromLink('atrktest');
		this.logger('  atrktest=' + atrktest);
		if (this._getCookie('ATRK_x') == '-') {
			if (atrktest == 'on')
				this._setSessionCookie('ATRK_x', 1);
		} else {
			if (atrktest == 'off')
				this._clearSessionCookie('ATRK_x');
		}
	};

	this._setSessionCookie = function(c, v) {
		this.logger('in _setSessionCookie( ' + c + ',' + v + ')');
		try {
			this._getDocument().cookie = c + '=' + v + ';path=/;domain=.' + this.clientDomain + ';';
		} catch (e) {
			this.logger('set cookie ' + c + ' caught error ' + e);
		}
	};

	this._clearSessionCookie = function(c) {
		this.logger('in _clearSessionCookie(' + c + ')');
		try {
			this._getDocument().cookie = c + '=;path=/;domain=.' + this.clientDomain + ';expires=Thu, 01-Jan-70 00:00:01 GMT;';
		} catch (e) {
			this.logger('clear cookie ' + c + ' caught error ' + e);
		}
	};

	// parser of the _atrkt array is defined, meaning the
	// async version of the tag is being used.
	this._atrktParser = function(queue) {
		var idx;
		this.logger('in _atrktParser()');
		if (queue.length < 1) {
			this.logger("  queue is empty.");
			return true;
		}

		for (idx in queue) {
			this.logger(' queue[' + idx + '][0]=' + queue[idx][0] + ',  [1]=' + queue[idx][1]);
			if (!this._isArray(queue[idx])) {
				this.logger('  queue[' + idx + '] is not an Array!');
			} else {
				// Support the following commands that call the set functions
				switch (queue[idx][0]) {
				case "PageDepth":
					this.setPageDepth(queue[idx][1]);
					break;
				case "Domain":
					this.setDomain(queue[idx][1]);
					break;
				case "ClientKey":
					this.setClientKey(queue[idx][1]);
					break;
				case "ConversionCode":
					this.setConversionCode(queue[idx][1]);
					break;
				case "TransId":
					this.setTransId(queue[idx][1]);
					break;
				case "Currency":
					this.setCurrency(queue[idx][1]);
					break;
				case "Total":
					this.setTotal(queue[idx][1]);
					break;
				case "Tax":
					this.setTax(queue[idx][1]);
					break;
				case "Shipping":
					this.setShipping(queue[idx][1]);
					break;
				case "Units":
					this.setUnits(queue[idx][1]);
					break;
				case "Item":
					this.addItem(queue[idx][1]);
					break;
				case "CustomParam":
					var keyValue = queue[idx][1].split("=");
					if (keyValue.length == 1) {
						keyValue[keyValue.length] = "";
					}
					this.addConversionCustomParameter(keyValue[0], keyValue[1]);
					break;
				case "Conversion":
					this.logConversion();
					break;
				case "Pageview":
					this.pageview();
					break;
				}
			}
		}
	};

	// Get the Client domain from one of three locations
	// It's usually retrieved from the URL of the page, but that
	// can fail for some internationsl domains since there are so many
	// variations like domain.co.uk domain.sch.co.uk, and others
	// for those clients, they can set it manually one of two ways
	// 1) Non Async Tag, use var ATRKDomain= 'x.y.z' in the Universal tag
	// 2) Async Tag, use _atrkt.push( [ 'ATRK_domain', 'x.y.z' ]);
	this._getClientDomain = function() {
		this.logger("in _getClientDomain");
		var d = '';
		var w = '';

		// See if already set from the _atrkt Array parser
		// which runs before the call to pageview();
		if (typeof this.clientDomain != 'undefined' && this.clientDomain != '') {
			d = this.clientDomain;
			w = "_atrkt";
		} else {
			// See if set by variable ATRKdomain in the Universal Tag
			if (typeof ATRKDomain != 'undefined') {
				d = ATRKDomain;
				w = "ATRKDomain";
			} else {
				d = this._getDomainFromHost(this.pageLocation.hostname);
				w = "getDomainFromHost";
			}
		}
		this.logger("  Set from " + w + ": " + d);
		return d;
	};

	// Get the domain from the referrer
	this._getReferrerDomain = function() {
		this.logger('in _getReferrerDomain()');
		this.logger('  referrer:' + this._getDocument().referrer);
		var d = '';

		// find the referrer hostname
		if ((typeof this._getDocument().referrer != 'undefined') && (this._getDocument().referrer !== '')) {
			var a = this._getDocument().referrer.split('/');
			this.logger(' a[2] = ' + a[2]);
			d = this._getDomainFromHost(a[2]);
		}
		return d;
	};

	// Get a the domain from the passed in host string.
	// We have defined the domain as all portions of the host string
	// AFTER the initial '.', to work with hosts like www.abc.uk.co and
	// www.def.uk.co (as examples)
	// The function strips off any leading user:password, but initial testing
	// showed the browser does that.
	this._getDomainFromHost = function(host) {
		this.logger('in _getDomainFromHost(host=' + host + ')');
		var d = this.novalue;
		if ((typeof host != 'undefined') && (host !== '')) {
			// parse domain
			// remove any leading user:password
			var t = host.split('@');

			// ip address check Bug 635
			if (t[t.length - 1].match("^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$")) {
				return host;
			}

			// then split off the host into component parts
			var a = t[t.length - 1].split('.');
			this.logger('  t.length=' + t.length);
			this.logger('  a.length=' + a.length);

			// look for a country code (bug 6597)
			// use a 3 part domain if it is there
			if (a[a.length - 1].length == 2) {
				if (a.length < 3) {
					d = a[a.length - 2] + '.' + a[a.length - 1];
				} else {
					d = a[a.length - 3] + '.' + a[a.length - 2] + '.' + a[a.length - 1];
				}
			} else {
				// use a 2 part domain if no country code
				d = a[a.length - 2] + '.' + a[a.length - 1];
			}
		}
		this.logger('  d=' + d);
		return d;
	};

	// return a the value of a parameter from a link
	this._getParamFromLink = function(name) {
		this.logger('in _getParamFromLink(name=' + name + ')');
		var rc = '-';
		var delim = '&';
		var p = name + '=';
		var s = '';

		if (typeof (decodeURIComponent) == 'function') {
			s = decodeURIComponent(this.pageLocation.search);
		} else {
			s = unescape(this.pageLocation.search);
		}

		if ((typeof s != 'undefined') && (s.length > 0)) {
			s.replace(/^\?/, '');
			var sp = s.split(delim);
			var v = null;
			for ( var i = 0; i < sp.length; i++) {
				this.logger('  sp.length:' + sp.length + ',  i:' + i + ',  name: ' + name + ',  sp: ' + sp[i]);
				if (sp[i].indexOf(p) == 0 || sp[i].indexOf('?' + p) == 0) {
					v = sp[i];
					this.logger('  name:' + name + ' MATCHED');
					break;
				}
			}

			if (v !== null) {
				var vp = v.indexOf('=');
				rc = v.substring(vp + 1);
			}
		}

		this.logger('  getParamFromLink, rc=' + rc);
		return rc;
	};

	// returns an array containing the conversion information
	// Supports only acquisio tracking tags
	// channel intelligence tags has been removed
	this._detectConversion = function() {
		this.logger('in _detectConversion');
		var rc = false;

		// See if the parameters are already set (from flash)
		if ((this.ATRKctp.length > 0) || (this.ATRKtid.length > 0)) {
			this.logger('  this.ATRKctp or this.ATRKtid defined, vars set by function calls');
			rc = true;
		} else {
			rc = false;
			// AcquisioTracking Conversion tag exists if ATRKconv or ATRKconversioncode is
			// defined
			// and take preference over CI Conversion tags
			if (((typeof ATRK_transid != 'undefined') && (ATRK_transid.length > 0))
					|| ((typeof ATRK_conversioncode != 'undefined') && (ATRK_conversioncode.length > 0))
					|| ((typeof ATRK_total != 'undefined') && (ATRK_total.length > 0))) {
				this.logger('  Detected AcquisioTracking Conversion.');
				this._getATRKconversion();
				rc = true;
				/*************************************************************************************************************************************
				 * ** CI Conversion are not supported anymore. }else if ( typeof CI_OrderID != 'undefined'){ this.logger(' Detected Channel
				 * Intelligence Conversion.'); this._getCIconversion(); rc = true;
				 ************************************************************************************************************************************/
			}
		}
		this.logger('  _detectConversion. rc=' + rc);
		return rc;
	};

	this._getATRKconversion = function() {
		this.logger('in _getATRKconversion()');
		// Set the class variables
		this.ATRKctp = (typeof ATRK_conversioncode == 'undefined') ? this.novalue : ATRK_conversioncode;
		this.ATRKtid = (typeof ATRK_transid == 'undefined') ? this.novalue : ATRK_transid;
		this.ATRKcur = (typeof ATRK_currency == 'undefined') ? this.novalue : ATRK_currency;
		this.ATRKtot = (typeof ATRK_total == 'undefined') ? this.novalue : ATRK_total;
		this.ATRKtax = (typeof ATRK_tax == 'undefined') ? this.novalue : ATRK_tax;
		this.ATRKshp = (typeof ATRK_shipping == 'undefined') ? this.novalue : ATRK_shipping;
		this.ATRKuts = (typeof ATRK_units == 'undefined') ? this.novalue : ATRK_units;

		if ((typeof ATRK_items != 'undefined') && (ATRK_items.length > 0)) {
			this.logger('  ATRK_items.length=' + ATRK_items.length);
			this.ATRKitems = ATRK_items;
		}
		if ((typeof ATRK_custom_params != 'undefined') && (ATRK_custom_params.length > 0)) {
			this.logger('  ATRK_custom_params.length=' + ATRK_custom_params.length);
			this.ATRKcustomParams = ATRK_custom_params;
		}
		this.logger(' _getATRKconversion. rc=true');
		return true;
	};
	
	this._appendCustomParameters = function() {
		var customParams = "";
		if ((typeof this.ATRKcustomParams != 'undefined') && this.ATRKcustomParams.length > 0) {
			for ( var customParamIdx = 0; customParamIdx < this.ATRKcustomParams.length; customParamIdx++) {
				var keyValue = this.ATRKcustomParams[customParamIdx].split("=");
				if (keyValue.length == 1) {
					keyValue[keyValue.length] = "";
				}
				customParams += this._appendToQueryString(keyValue[1], keyValue[0]);
			}
		}
		return customParams;
	};

	// Build the array of gif pulls from the class variables defined in
	// _detectConversion
	this._buildConversion = function() {
		this.logger('in _buildConversion');
		var image = [];
		var icnt = 0;
		var dl = ',';

		// Build the totals info
		if ((this.ATRKctp == '') || (this.ATRKctp == this.novalue)) {
			this.ATRKctp = this.conversionCodeDefault;
		}
		image[icnt] = this._appendToQueryString('tx', 'type');
		image[icnt] += this._appendToQueryString(this.ATRKctp, 'ctp');
		image[icnt] += this._appendToQueryString(this.ATRKtid, 'tid');
		image[icnt] += this._appendToQueryString(this.ATRKtot, 'tot');
		image[icnt] += this._appendToQueryString(this.ATRKcur, 'ccur');
		image[icnt] += this._appendToQueryString(this.ATRKtax, 'tax');
		image[icnt] += this._appendToQueryString(this.ATRKshp, 'shp');
		image[icnt] += this._appendToQueryString(this.ATRKuts, 'uts');
		image[icnt] += this._appendCustomParameters();
		icnt++;

		if ((typeof this.ATRKitems != 'undefined') && this.ATRKitems.length > 0) {
			this.logger('  this.ATRKitems.length=' + this.ATRKitems.length);
			this.logger('  this.ATRKitems passed definition test');
			for ( var i = 0; i < this.ATRKitems.length; i++) {
				this.logger('  i=' + i + ',  l=' + this.ATRKitems.length + ' typeof=' + typeof this.ATRKitems[i]);

				// Bug 646 - support ATRK_items[1] being the first array entry
				if (typeof this.ATRKitems[i] != 'undefined') {

					// Bug 748 - detect alternate delimiter
					var di = this.ATRKitems[i].indexOf('|');
					this.logger("  di=" + di + " " + typeof di);
					if (di === -1) {
						dl = ",";
					} else {
						dl = '|';
					}
					;

					var f = this.ATRKitems[i].split(dl);
					this.logger("  i=" + this.ATRKitems[i] + ", dl=" + dl + ", f[0]=" + f[0] + ", f[1]=" + f[1] + ", f[2]=" + f[2]);
					image[icnt] = this._appendToQueryString('it', 'type');
					image[icnt] += this._appendToQueryString(this.ATRKtid, 'tid');
					image[icnt] += this._appendToQueryString(f[0], 'sku');
					image[icnt] += this._appendToQueryString((typeof f[1] == 'undefined') ? this.novalue : f[1], 'upr');
					image[icnt] += this._appendToQueryString((typeof f[2] == 'undefined') ? this.novalue : f[2], 'qnt');
					icnt++;
				}
			}
		}
		this.logger('  _buildConversion, images=' + image.length);
		return image;
	};

	// After a conversion is logged, clear the class variables
	// so it's ready for the "next one"
	this._clearConversion = function() {
		this.logger('in _clearConversion()');
		// Internal variables
		this.ATRKctp = ''; // Transaction conversioncode
		this.ATRKtid = ''; // Transaction id
		this.ATRKcur = ''; // Currency abbreviation
		this.ATRKtot = ''; // Transaction total dollars
		this.ATRKtax = ''; // Transaction tax
		this.ATRKshp = ''; // Transaction shipping
		this.ATRKuts = ''; // Transaction Units Total Shipped
		this.ATRKpgd = ''; // Transaction Page depth
		this.ATRKitems = Array(); // ATRK Transaction Item Array of [ "sku,cost,units","sku,cost,units", ... ]
		this.ATRKcustomParams = Array(); // ATRK custom parameters.

		// Global variables
		ATRK_conversioncode = '';
		ATRK_transid = '';
		ATRK_currency = '';
		ATRK_total = '';
		ATRK_tax = '';
		ATRK_shipping = '';
		ATRK_units = '';
		ATRK_items = '';
		ATRK_custom_params = '';
		this.logger(' _clearConversion complete');
		return true;
	};

	// set all three browser cookies based on current UUID and visit # values
	// Called from: pageview(), ATRKcallback(),
	//
	// Cookies:
	// <cookie>a - never expires, holds UUID.visit
	// <cookie>y - expires every 30 minutes resetting the visit counter
	// holds the # of pages into the site
	// <cookie>t - expires at the end of the session
	//
	this._setCookies = function(aval, yval) {
		this.logger('in setCookies(aval=' + aval + ', yval=' + yval + ')');
		var domain = 'domain=.' + this.clientDomain + ';';
		try {
			this._getDocument().cookie = 'ATRK_a=' + aval + ';path=/;expires=' + this.neverExpires + ';' + domain;
			this._getDocument().cookie = 'ATRK_y=' + yval + ';path=/;expires=' + this._setCookieExpiration() + ';' + domain;
			this._getDocument().cookie = 'ATRK_t=1;path=/;' + domain;
		} catch (err) {
			this.logger('setCookies caught error ' + err);
		}
		this.logger('setCookies complete');
	};

	// Sets a query string variable on a target URL
	// User for cross domain tracking
	this._setQueryOnTarget = function(q, t) {
		this.logger('in setQueryOnTarget(q=' + q + ', t=' + t + ')');

		var queryIndex = t.indexOf("?");
		var fragIndex = t.indexOf("#");
		var newTarget = t;

		// If neither ? (query) nor # (fragment) exist on source, just append
		// our query argument
		if (queryIndex == -1 && fragIndex == -1) {
			newTarget += "?" + q;

			// If just ? exists, append our query with &
		} else if (fragIndex == -1) {
			newTarget += "&" + q;

			// If just # exists, append our cookie between '?' and '#' bits
		} else if (queryIndex == -1) {
			newTarget = t.substring(0, fragIndex) + "?" + q + t.substring(fragIndex);

			// If both ? and # exist, append our cookie between them
		} else {
			newTarget = t.substring(0, fragIndex) + "&" + q + t.substring(fragIndex);
		}
		this.logger('  newTarget=' + newTarget);
		return newTarget;
	};

	this._gifImagePull = function(tag, conversion) {
		this.logger('in gifImagePull(tag=' + tag + ', conversion=' + conversion + ')');
		var rand_num = Math.round(Math.random() * 2147483647);
		var image = this._createImagePixel();

		var path = this.protocol + this.beaconDomain + '/9.gif';
		path += this._appendToQueryString(this.tagVersion, 'v', '?');
		path += this._appendToQueryString(this.clientKey, 'key');
		path += this._appendToQueryString(tag, 'tag');
		path += this._appendToQueryString(this.tmNow, 'tm');

		// for primary domain, use cookie on document
		var tstr = this._getCookie('ATRK_a');
		var tstr2 = tstr.substring(tstr.indexOf('=') + 1, tstr.length);
		path += this._appendToQueryString(tstr2, 'c');
		path += this._appendToQueryString(parseInt(this._getCookie('ATRK_y'), 10), 'pgd');

		if ((typeof conversion != 'undefined') && (conversion != '')) {
			path += conversion;
		}

		path += this._appendToQueryString(this.pageLocation.href, 'u');
		path += this._appendToQueryString(this._getDocument().referrer, 'r');
		path += this._appendToQueryString('099' + rand_num.toString(), 'z');

		if ((typeof this.ttdAdvertiserId != 'undefined') && (this.ttdAdvertiserId != '')) {
			// re-targeting is only relevant for conversions and tracked clicks
			if (tag == 'atrk' || this.pageLocation.href.indexOf('atrkid') != -1) {
				path +=  this._appendToQueryString(this.ttdAdvertiserId, 'ttdAdvertiserId');
				path = 'http://match.adsrvr.org/track/cmf/generic?ttd_pid=acquisio&ttd_tpi=1&ttd_puid='+this._urlEncode(this._urlEncode(path));
			}
		}
		
		
		this.logger('  gifImagePull, path=' + path);
		image.src = path;
		image.onload = function() {
		};
		return image;
	};

	this._createImagePixel = function(width, height) {
		if (typeof width === 'undefined') {
			width = 1;
		}
		if (typeof height === 'undefined') {
			height = 1;
		}
		var image = {
			height : height,
			width : width
		};
		if (this.enabled) {
			image = new Image(width, height);
		}
		return image;
	};

	this._appendToQueryString = function(str, key, sep) {
		// this.logger('in appendToQueryString(str='+str+', key='+key+')' );
		var contents = '-';
		var leadchar = '&';
		var rc = '';

		if (typeof sep != 'undefined') {
			leadchar = sep;
		}
		if ((typeof str != 'undefined') && (str !== '') && (str !== null)) {
			str = this._stripWhitespace(str);
			if (str) {
				contents = this._urlEncode(str);
			}
		}
		rc = leadchar + key + '=' + contents;
		// this.logger(' appendToQueryString, rc= '+rc );
		return rc;
	};

	this._stripWhitespace = function(strIn) {
		// this.logger('in stripWhiteSpace(strIn='+strIn+')' );
		var str = String(strIn);
		if (!str) {
			str = '';
		} else {
			// this.logger(' stripping "'+str+'", length:'+str.length );
			while ((str.charAt(0) == ' ') || (str.charAt(0) == '\n') || (str.charAt(0, 1) == '\r')) {
				str = str.substring(1, str.length);
			}
			while ((str.charAt(str.length - 1) == ' ') || (str.charAt(str.length - 1) == '\n') || (str.charAt(str.length - 1) == '\r')) {
				str = str.substring(0, str.length - 1);
			}
		}
		// this.logger(' stripWhiteSpace, str='+str);
		return str;
	};

	this._urlEncode = function(strIn) {
		// this.logger('in _urlEncode(strIn='+strIn+')' );
		var str = String(strIn);
		var rc;
		if (typeof encodeURIComponent === 'function') {
			rc = encodeURIComponent(str);
		} else {
			rc = escape(str);
		}
		// this.logger(' _urlEncode, rc='+rc );
		return rc;
	};

	this._getUUIDFromCookie = function(cookie) {
		this.logger('in _getUUIDFromCookie(cookie=' + cookie + ')');
		var uuid = '-';
		var j = 0;
		var i = 0;

		i = cookie.indexOf('=') + 1;
		j = cookie.lastIndexOf('.');
		this.logger('  i=' + i + ', j=' + j);
		if ((j > -1)) {
			uuid = cookie.substr(i, (j - i));
		}

		this.logger('  uuid=' + uuid);
		return uuid;
	};

	this._getVisitsFromCookie = function(cookie) {
		this.logger('in _getVisitsFromCookie(cookie=' + cookie + ')');
		var visits = '-';
		var j = 0;

		j = cookie.lastIndexOf('.');
		this.logger('  j=' + j);
		if (j > -1) {
			visits = cookie.substr(j + 1, cookie.length);
		}

		this.logger('  visits=' + visits);
		return visits;
	};

	this._adjustVisitNumber = function(cookie) {
		this.logger('in adjustVisitNum(cookie=' + cookie);
		var uuid = this._getUUIDFromCookie(cookie);
		var visit = parseInt(this._getVisitsFromCookie(cookie), 10);
		var rc = uuid + '.' + (visit + 1);
		this.logger('  adjustVisitNum, rc=' + rc);
		return rc;
	};

	// Get the value of a single cookie
	// a return of - means it was not found
	this._getCookie = function(name) {
		this.logger('in getCookie(name=' + name + ')');
		var rc = '-';
		var delim = ';';

		if (this._getDocument().cookie) {
			var cookies = this._getDocument().cookie.split(delim);
			var cookie = null;
			for ( var i = 0; i < cookies.length; i++) {
				this.logger('  name: ' + name + ',  cookie: ' + cookies[i]);
				if (cookies[i].indexOf(name) >= 0) {
					cookie = cookies[i];
					this.logger('  cookie: ' + cookie + ' MATCHED');
					break;
				}
			}

			if (cookie !== null) {
				var vp = cookie.indexOf('=');
				rc = cookie.substring(vp + 1);
			}
		}

		this.logger('  getCookie, rc=' + rc);
		return rc;
	};

	// return a formatted cookie expiration time of now + m minutes
	// to be used for the "visit" tracking cookie
	this._setCookieExpiration = function() {
		this.logger('in setCookieExpiration()');
		var rc = new Date(this.now.getTime() + (this.visitExpMinutes * 60 * 1000));
		rc = rc.toGMTString();

		this.logger('  setCookieExpiration, rc=' + rc);
		return rc;
	};

	// Generate a UUID for use in the cookie
	this._generateUUID = function() {
		this.logger('in generateUUID');
		var tl = this._randomHexString(8); // time_low
		var tm = this._randomHexString(4); // time_mid
		var thav = '4' + this._randomHexString(3); // time_hi_and_version
		var cshar = this._randomInt(0, 0xFF); // clock_seq_hi_and_reserved
		cshar = ((cshar & ~(1 << 6)) | (1 << 7)).toString(16);
		var csl = this._randomHexString(2); // clock_seq_low
		var n = this._randomHexString(12); // node
		var uuid = tl + tm + thav + cshar + csl + n;

		this.logger('  generateUUID, uuid=' + uuid);
		return uuid;
	};

	// Generate a Random integer between min and max
	this._randomInt = function(min, max) {
		// this.logger('in _randomInt(min='+min+', max='+max);
		if (!isFinite(min)) {
			min = 0;
		}
		if (!isFinite(max)) {
			max = 1;
		}
		var rc = Math.floor((Math.random() % 1) * (max - min + 1) + min);

		// this.logger('_randomInt, rc='+rc);
		return rc;
	};

	// Generate a random string of HEX digits len() characters long
	this._randomHexString = function(len) {
		if ((typeof len == 'undefined')) {
			len = 0;
		}
		// this.logger('in _randomHexString(len='+len+')');
		var random = this._randomInt(0, Math.pow(16, len) - 1);
		var trand = random.toString(16);
		var pad = "";
		var padlen = len - trand.length;
		// this.logger(' Need '+padlen+' zeros to fill ( '+len+' -
		// '+trand.length+')');
		while (pad.length < padlen) {
			pad += "0";
		}
		var rc = pad + trand;

		// this.logger('_randomHexString, rc='+rc);
		return rc;
	};

	// test if the object is an array
	this._isArray = function(obj) {
		return obj.constructor == Array;
	};

	// Returns the window location, to facilitate Unit testing.
	this._getWindow = function() {
		return window;
	};

	// Returns the document location, to facilitate Unit testing.
	this._getDocument = function() {
		return document;
	};
}// End of ATRK object

// This protects from the file being included twice on a page.
try {
	if (typeof ATRKtracker === 'undefined') {
		var ATRKtracker = new ATRK();
		ATRKtracker.logger('Initialize the tracker.');
	} else {
		ATRKtracker.logger('Tracker already initialized.');
	}

	// Set up any conversion or other variables for the async tag
	// if the _atrkt array exists
	if ((typeof _atrkt != 'undefined') && ATRKtracker._isArray(_atrkt)) {
		ATRKtracker._atrktParser(_atrkt);
		ATRKtracker.logger('Setup conversion from the _atrkt array.');
	}

	// Log a page view
	ATRKtracker.logger('Log a page view.');
	ATRKtracker.pageview();

} catch (e) {
	// alert(e);
}
