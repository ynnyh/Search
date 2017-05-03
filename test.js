function initSuggestion(a) {
    "use strict";
    var b = {sugSubmit: !0, sourceFun: a};
    BaiduSuggestion.bind("J_searchKeyword", b, b.sourceFun)
}


var UC = window.UC || {};

!function () {
    var a = {
        init: function (a) {
            var b = this, c = this.options = $.extend({}, {tn: "98050039_pg", areaList: "北京"}, a);
            b.tn = c.tn, b.areaList = c.areaList, b.json = JSON || window.JSON2, b.getCurArea()
        }, getCurArea: function () {
            var a = this, b = a.options, c = Math.floor(899 * Math.random() + 100), d = "https://browser.taobao.com/b3/weather2.do", e = UC.storage.item("curAreaInfo"), f = null, g = null, h = null, i = null, j = null, k = !0, l = null;
            if (b.areaList) {
                if (e)try {
                    f = a.json.parse(e), g = f.data, l = f.requestTime, j = (new Date).getTime(), k = j > l + 6048e5
                } catch (m) {
                    a.errorPush(m, "parse curArea data error(ls): " + e)
                }
                !g || k ? $.ajax({
                        url: d,
                        dataType: "jsonp",
                        scriptCharset: "gbk",
                        jsonpCallback: "callback" + c,
                        data: {callbackNumber: c, areaCode: "", forecastType: "forecast5d"},
                        success: function (b) {
                            if (h = b.data, i = null, !h)return a.errorPush(d + " : response error. ");
                            try {
                                i = a.json.parse(h.common).c, g = {
                                    province: i.c7,
                                    city: i.c5,
                                    district: i.c3
                                }, a.curArea = g, UC.storage.item("curAreaInfo", a.json.stringify({
                                    requestTime: (new Date).getTime(),
                                    data: g
                                }))
                            } catch (c) {
                                a.errorPush(c, "parse curArea data error(ajax): ")
                            }
                            return !a.curArea || !a.isInList(a.curArea, a.areaList) || (a.render(a.tn), !0)
                        },
                        error: function () {
                        }
                    }) : (a.curArea = g, a.curArea && a.isInList(a.curArea, a.areaList) && a.render(a.tn))
            }
        }, errorPush: function (a, b) {
            var c = {name: null};
            c.name || window.JSTracker2.push({msg: b + " error:" + a, url: "http://log.uc123.com"})
        }, isInList: function (a, b) {
            var c = !1;
            return !(!a || !b) && (Object.keys(a).forEach(function (d) {
                    var e = a[d];
                    e && b.indexOf(e) !== -1 && (c = !0)
                }), c)
        }, render: function (a) {
            if ($('.hot-item a[title="百度"]').attr("href", "http://www.baidu.com/?tn=" + a), window.config) {
                var b = window.config.search && window.config.search.baidu;
                for (var c in b)if (b[c].params)for (var d = b[c].params.length, e = 0; e < d; e++)"tn" === b[c].params[e][0] && (b[c].params[e][1] = a);
                var f = $('.search-params input[name="tn"]');
                f && f.length && (f[0].value = a)
            } else window.baiduTn = a
        }
    };
    UC.AreaInfo = a, UC.AreaInfo.init({tn: "98050039_pg", areaList: window.searchAreaList || ""})
}(),

    function () {
    "use strict";
    var a = window.baidu || {version: "1-1-0"};
    a.object = a.object || {}, a.object.extend = function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c])
    }, a.extend = a.object.extend, a.dom = a.dom || {}, a.dom.g = function (a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : null
    }, a.g = a.G = a.dom.g, a.dom.getDocument = function (b) {
        return b = a.dom.g(b), 9 == b.nodeType ? b : b.ownerDocument || b.document
    }, a.dom._styleFixer = a.dom._styleFixer || {}, a.dom._styleFilter = a.dom._styleFilter || [], a.dom._styleFilter.filter = function (b, c, d) {
        for (var e, f = 0, g = a.dom._styleFilter; e = g[f]; f++)(e = e[d]) && (c = e(b, c));
        return c
    }, a.string = a.string || {}, a.string.toCamelCase = function (a) {
        return String(a).replace(/[-_]\D/g, function (a) {
            return a.charAt(1).toUpperCase()
        })
    }, a.dom.getStyle = function (b, c) {
        var d = a.dom;
        b = d.g(b), c = a.string.toCamelCase(c);
        var e = b.style[c];
        if (e)return e;
        var f = d._styleFixer[c], g = b.currentStyle || (a.browser.ie ? b.style : getComputedStyle(b, null));
        return e = "object" == typeof f && f.get ? f.get(b, g) : g[f || c], (f = d._styleFilter) && (e = f.filter(c, e, "get")), e
    }, a.getStyle = a.dom.getStyle, a.browser = a.browser || {}, /msie (\d+\.\d)/i.test(navigator.userAgent) && (a.ie = a.browser.ie = parseFloat(RegExp.$1)), /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (a.browser.opera = parseFloat(RegExp.$1)), a.browser.isWebkit = /webkit/i.test(navigator.userAgent), a.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), a.browser.isStrict = "CSS1Compat" == document.compatMode, a.dom.getPosition = function (c) {
        var d = a.dom.getDocument(c), e = a.browser;
        c = a.dom.g(c);
        var f = e.isGecko > 0 && d.getBoxObjectFor && "absolute" == a.dom.getStyle(c, "position") && ("" === c.style.top || "" === c.style.left), g = {
            left: 0,
            top: 0
        }, h = e.ie && !e.isStrict ? d.body : d.documentElement;
        if (c == h)return g;
        var i, j = null;
        if (c.getBoundingClientRect) i = c.getBoundingClientRect(), g.left = Math.floor(i.left) + Math.max(d.documentElement.scrollLeft, d.body.scrollLeft), g.top = Math.floor(i.top) + Math.max(d.documentElement.scrollTop, d.body.scrollTop), g.left -= d.documentElement.clientLeft, g.top -= d.documentElement.clientTop, e.ie && !e.isStrict && (g.left -= 2, g.top -= 2); else if (d.getBoxObjectFor && !f) {
            i = d.getBoxObjectFor(c);
            var k = d.getBoxObjectFor(h);
            g.left = i.screenX - k.screenX, g.top = i.screenY - k.screenY
        } else {
            j = c;
            do {
                if (g.left += j.offsetLeft, g.top += j.offsetTop, e.isWebkit > 0 && "fixed" == a.dom.getStyle(j, "position")) {
                    g.left += d.body.scrollLeft, g.top += d.body.scrollTop;
                    break
                }
                j = j.offsetParent
            } while (j && j != c);
            for ((e.opera > 0 || e.isWebkit > 0 && "absolute" == a.dom.getStyle(c, "position")) && (g.top -= d.body.offsetTop), j = c.offsetParent; j && j != d.body;)g.left -= j.scrollLeft, b.opera && "TR" == j.tagName || (g.top -= j.scrollTop), j = j.offsetParent
        }
        return g
    }, a.event = a.event || {}, a.event._unload = function () {
        for (var b, c, d = a.event._listeners, e = d.length, f = !!window.removeEventListener; e--;)b = d[e], c = b[0], c.removeEventListener ? c.removeEventListener(b[1], b[3], !1) : c.detachEvent && c.detachEvent("on" + b[1], b[3]);
        f ? window.removeEventListener("unload", a.event._unload, !1) : window.detachEvent("onunload", a.event._unload)
    }, window.attachEvent ? window.attachEvent("onunload", a.event._unload) : window.addEventListener("unload", a.event._unload, !1), a.event._listeners = a.event._listeners || [], a.event.on = function (b, c, d) {
        c = c.replace(/^on/i, ""), "string" == typeof b && (b = a.dom.g(b));
        var e = function (a) {
            d.call(b, a)
        }, f = a.event._listeners;
        return f[f.length] = [b, c, d, e], b.attachEvent ? b.attachEvent("on" + c, e) : b.addEventListener && b.addEventListener(c, e, !1), b
    }, a.on = a.event.on, a.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, a.ui = a.ui || {}, a.suggestion = a.ui.suggestion = a.ui.suggestion || {}, function () {
        var b = {}, c = function (a) {
            var b = {};
            a.listen = function (c, d) {
                b[c] = b[c] || [];
                for (var e = 0; e < b[c].length && b[c][e] != d;)e++;
                return e == b[c].length && b[c].push(d), a
            }, a.call = function (c) {
                if (b[c])for (var d = 0; d < b[c].length; d++)b[c][d].apply(this, Array.prototype.slice.call(arguments, 1));
                return a
            }
        };
        b.extend = function (a) {
            return new c(a), a
        }, b.extend(b), a.suggestion._Central = b
    }(), a.ui.suggestion._Div = function (b, c, d, e, f) {
        function g(a, c) {
            if ("none" == u.style.display)return void b.call("need_data", d.getValue());
            var e = i()[0];
            if (h(), a) {
                if (0 == e)return l(c), void e--;
                e == -1 && (e = o.length), e--
            } else {
                if (e == o.length - 1)return l(c), void(e = -1);
                e++
            }
            k(e), j();
            var g = d.getValue();
            l(e);
            var m = i();
            f.onpick(g, m[0], m[1], m[2])
        }

        function h() {
            for (var a = 0; a < r.length; a++)r[a].className = t + "ml"
        }

        function i() {
            if (r && "none" != u.style.display)for (var a = 0; a < r.length; a++)if (r[a].className == t + "mo")return [a, o[a], p[a]];
            return [-1, ""]
        }

        function j() {
            var a = i();
            f.onhighlight(d.getValue(), a[0], a[1], a[2])
        }

        function k(a) {
            h(), r[a].className = t + "mo"
        }

        function l(a) {
            var c = o && "number" == typeof a && "undefined" != typeof o[a] ? o[a] : a;
            b.call("pick_word", c)
        }

        function m() {
            return "none" == u.style.display ? null : (v.style.display = u.style.display = "none", void f.onhide())
        }

        function n(a) {
            var c = a;
            return function () {
                b.call("confirm_item", d.getValue(), o[c], c, p[c]);
                var a = d.getValue();
                l(o[c]), f.onpick(a, c, o[c], p[c]), f.onconfirm(d.getValue(), c, o[c], p[c]), m()
            }
        }

        var o, p, q, r, s = this, t = f.class_prefix, u = document.createElement("DIV");
        u.id = t + (new Date).getTime(), u.className = t + "wpr", u.style.display = "none";
        var v = document.createElement("IFRAME");
        return v.className = t + "sd", v.style.display = "none", v.style.position = "absolute", v.style.borderWidth = "0px", f.apd_body ? document.body.appendChild(u) : c.parentNode.appendChild(u), b.listen("start", function () {
            a.on(document, "mousedown", function (a) {
                a = a || window.event;
                var b = a.target || a.srcElement;
                if (b != c) {
                    for (; b = b.parentNode;)if (b == u)return;
                    m()
                }
            })
        }), b.listen("key_enter", function () {
            var a = i(), b = a[0] == -1 ? q : a[1];
            f.onconfirm(d.getValue(), a[0], b, a[2], !0), m()
        }), b.listen("key_up", function (a) {
            g(1, a)
        }), b.listen("key_down", function (a) {
            g(0, a)
        }), b.listen("key_tab", m), b.listen("key_esc", m), b.listen("all_clear", m), b.listen("data_ready", function (c, d) {
            q = d, o = [], p = [];
            for (var f = 0, g = d.length; f < g; f++)"undefined" != typeof d[f].input ? (o[f] = d[f].input, p[f] = d[f].selection) : p[f] = o[f] = d[f];
            if (0 != o.length) {
                r = e(u, p, s);
                for (var f = 0, g = r.length; f < g; f++)a.on(r[f], "mouseover", function () {
                    h(), this.className = t + "mo", j()
                }), a.on(r[f], "mouseout", h), a.on(r[f], "mousedown", function (c) {
                    if (b.call("mousedown_item"), !a.ie)return c.stopPropagation(), c.preventDefault(), !1
                }), a.on(r[f], "click", n(f))
            } else m()
        }), {
            element: u, shade: v, pick: l, highlight: k, hide: m, dispose: function () {
                u.parentNode.removeChild(u)
            }
        }
    }, a.ui.suggestion._Data = function (a, b) {
        var c = {};
        return a.listen("response_data", function (b, d) {
            c[b] = d, a.call("data_ready", b, d)
        }), a.listen("need_data", function (d) {
            "undefined" == typeof c[d] ? b(d) : a.call("data_ready", d, c[d])
        }), {}
    }, a.ui.suggestion._InputWatcher = function (b, c, d) {
        var e, f, g = 0, h = "", i = "", j = "", k = !1, l = !1, m = !1;
        return c.setAttribute("autocomplete", "off"), a.on(c, "keydown", function (c) {
            m || (b.call("start"), m = !0), c = c || window.event;
            var d;
            switch (c.keyCode) {
                case 9:
                    d = "tab";
                    break;
                case 27:
                    d = "esc";
                    break;
                case 13:
                    d = "enter";
                    break;
                case 38:
                    d = "up", a.event.preventDefault(c);
                    break;
                case 40:
                    d = "down"
            }
            d && b.call("key_" + d, i)
        }), a.on(c, "mousedown", function () {
            m || (b.call("start"), m = !0)
        }), a.on(c, "beforedeactivate", function () {
            k && (window.event.cancelBubble = !0, window.event.returnValue = !1)
        }), b.listen("start", function () {
            j = c.value, g = setInterval(function () {
                if (!l) {
                    null == a.G(c) && suggestion.dispose();
                    var d = c.value;
                    d == h && "" != d && d != j && d != f ? 0 == e && (e = setTimeout(function () {
                            b.call("need_data", d)
                        }, 100)) : (clearTimeout(e), e = 0, "" == d && "" != h && (f = "", b.call("all_clear")), h = d, d != f && (i = d), j != c.value && (j = ""))
                }
            }, 10)
        }), b.listen("pick_word", function (a) {
            if (k)try {
                c.blur()
            } catch (b) {
            }
            c.value = f = a, k && c.focus()
        }), b.listen("mousedown_item", function (a) {
            k = !0, l = !0, setTimeout(function () {
                l = !1, k = !1
            }, 500)
        }), b.listen("confirm_item", function (a, b, c, d) {
            l = !1, i = h = c
        }), {
            getValue: function () {
                return c.value
            }, dispose: function () {
                clearInterval(g)
            }
        }
    },

        a.ui.suggestion._Suggestion = function (b, c) {
        var d = this;
        a.ui.suggestion._MessageDispatcher;
        if (d.options = {
                onpick: function () {
                },
                onconfirm: function () {
                },
                onhighlight: function () {
                },
                onhide: function () {
                },
                view: null,
                getData: !1,
                prepend_html: "",
                append_html: document.getElementById("J_baiduAd1") && document.getElementById("J_baiduAd1").innerHTML || "",
                class_prefix: "tangram_sug_",
                apd_body: !1
            }, a.extend(d.options, c), !(b = a.G(b)))return null;
        d.inputElement = b, b.id ? d.options._inputId = b.id : b.id = d.options._inputId = d.options.class_prefix + "ipt" + (new Date).getTime(), d._adjustPos = function (c) {
            var e = g.element, f = g.shade, h = document, i = "BackCompat" == h.compatMode ? h.body : h.documentElement, j = i.clientHeight, k = i.clientWidth;
            if ("none" != e.style.display || !c) {
                var l = a.dom.getPosition(b), m = [l.top + b.offsetHeight - 1, l.left, b.offsetWidth];
                m = "function" == typeof d.options.view ? d.options.view(m) : m, e.style.display = f.style.display = "block";
                var n = parseFloat(a.getStyle(e, "marginTop")) || 0, o = parseFloat(a.getStyle(e, "marginLeft")) || 0;
                if (e.style.top = m[0] - n + "px", e.style.left = m[1] - o + "px", a.ie && "BackCompat" == document.compatMode) e.style.width = m[2] + "px"; else {
                    var p = parseFloat(a.getStyle(e, "borderLeftWidth")) || 0, q = parseFloat(a.getStyle(e, "borderRightWidth")) || 0, r = parseFloat(a.getStyle(e, "marginRight")) || 0;
                    e.style.width = m[2] - p - q - o - r + "px"
                }
                f.style.height = e.offsetHeight + "px", j == i.clientHeight && k == i.clientWidth || d._adjustPos()
            }
        }, d._draw = function (a, b) {
            var c = [], e = document.createElement("TABLE");
            e.cellPadding = 2, e.cellSpacing = 0;
            var f = document.createElement("TBODY");
            e.appendChild(f);
            for (var g = 0, h = b.length; g < h; g++) {
                var i = f.insertRow(-1);
                c.push(i);
                var j = i.insertCell(-1);
                j.innerText = b[g]
            }
            var k = document.createElement("DIV");
            k.className = d.options.class_prefix + "pre", k.innerText = d.options.prepend_html;
            var l = document.createElement("DIV");
            l.className = d.options.class_prefix + "app bd-ad", l.innerHTML = d.options.append_html;
            for (var m = a.children.length - 1; m >= 0; m--)a.removeChild(a.children[m]);
            return a.appendChild(k), a.appendChild(e), a.appendChild(l), d._adjustPos(), c
        };
        var e = a.suggestion._Central.extend(d), f = (new a.ui.suggestion._Data(e, d.options.getData), new a.ui.suggestion._InputWatcher(e, b, g)), g = new a.ui.suggestion._Div(e, b, f, d._draw, d.options);
        return e.listen("start", function () {
            setInterval(function () {
                var a = g.element;
                0 != a.offsetWidth && b.offsetWidth != a.offsetWidth && d._adjustPos()
            }, 100), a.on(window, "resize", function () {
                d._adjustPos(!0)
            })
        }), {
            pick: g.pick, hide: g.hide, highlight: g.highlight, getElement: function () {
                return g.element
            }, getData: d.options.getData, giveData: function (a, b) {
                e.call("response_data", a, b)
            }, dispose: function () {
                g.dispose(), f.dispose()
            }
        }
    }, a.ui.suggestion.create = function (b, c) {
        return new a.ui.suggestion._Suggestion(b, c)
    }, window.baidu = a
}();

var BaiduSuggestion = function () {
    function a(a) {
        return document.createElement(a)
    }

    function b(a, b, i, j) {
        if (a) {
            if (("string" == typeof a || a instanceof String) && (a = baidu.G(a)), a.sugId || (a.sugId = (new Date).getTime()), g["sug" + a.sugId])return !1;
            if (null == b)var b = []; else j = b.sugSubmit;
            if ("relative" == e(document.body, "position") || "absolute" == e(document.body, "position")) {
                var k = d(document.body);
                b.XOffset = (b.XOffset ? parseInt(b.XOffset) : 0) + k.x, b.YOffset = (b.YOffset ? parseInt(b.YOffset) : 0) + k.y
            }
            g["sug" + a.sugId] = baidu.suggestion.create(a, h.createSugOptions(a.sugId, b, i, j ? c(a) : null)), f["give" + a.sugId] = h.createSugCallback(a.sugId)
        }
    }

    function c(a) {
        for (var b = a; b != document.body && "FORM" != b.tagName;)b = b.parentNode;
        return "FORM" == b.tagName ? b : null
    }

    function d(a) {
        var b = document, c = 0, d = 0;
        if (a.getBoundingClientRect) {
            var e = a.getBoundingClientRect();
            c = e.left + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft), d = e.top + Math.max(b.documentElement.scrollTop, b.body.scrollTop), c -= b.documentElement.clientLeft, d -= b.documentElement.clientTop
        } else for (; a = a.offsetParent;)c += a.offsetLeft, d += a.offsetTop;
        return {x: c, y: d}
    }

    function e(a, b, c) {
        if (a)if (void 0 != c) a.style[b] = c; else {
            if (a.style[b])return a.style[b];
            if (a.currentStyle)return a.currentStyle[b];
            if (document.defaultView && document.defaultView.getComputedStyle) {
                b = b.replace(/([A-Z])/g, "-$1").toLowerCase();
                var d = document.defaultView.getComputedStyle(a, "");
                return d && d.getPropertyValue(b) || ""
            }
        }
    }

    for (var f = {}, g = {}, h = {
        createSugOptions: function (b, c, d, e) {
            return {
                class_prefix: "bdSug_", onconfirm: function (a, b, c, f, g) {
                    if (d && b > -1)try {
                        d.apply(window, [c])
                    } catch (h) {
                    }
                    e && !g && ($ ? $(e).submit() : e.submit())
                }, view: function (a) {
                    return c && c.width && (a[2] = parseInt(c.width)), c && c.XOffset && c.YOffset ? [a[0] - c.YOffset, a[1] - c.XOffset, a[2]] : [a[0] + 4, a[1], a[2] + 2]
                }, getData: function (c) {
                    var d = (new Date).getTime(), e = baidu.G("bdSug_script");
                    e && document.body.removeChild(e);
                    var f = a("script");
                    f.setAttribute("charset", "gbk"), f.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + encodeURIComponent(c) + "&p=3&cb=BaiduSuggestion.callbacks.give" + b + "&t=" + d, f.id = "bdSug_script", document.body.appendChild(f)
                }, apd_body: !0
            }
        }, createSugCallback: function (a) {
            return function (b) {
                if (b) {
                    for (var c = [], d = 0; d < b.s.length; d++) {
                        var e = {};
                        e.input = b.s[d], e.selection = b.s[d], c.push(e)
                    }
                    g["sug" + a].giveData(b.q, c)
                }
            }
        }
    },
             i = document.body.getElementsByTagName("INPUT"), j = 0, k = i.length; j < k; j++) {
        var l = i[j];
        if (l && "text" == l.type && (1 == l.getAttribute("baiduSug") || 2 == l.getAttribute("baiduSug"))) {
            l.sugId = j;
            var m = 1 == l.getAttribute("baiduSug");
            b(l, null, null, m)
        }
    }
    return {bind: b, callbacks: f}
}(),

    UC = window.UC || {}, searchPidRandom = function () {
    var a = window.searchPid.baidu, b = Math.random(), c = [];
    if (!a)return "98050039_pg";
    for (var d = 0, e = a.length; d < e; d++)if (c[d] = {}, c[d].prop = c[d - 1] ? a[d].prop + c[d - 1].prop : a[d].prop, c[d].pid = a[d].pid, b < c[d].prop)return c[d].pid;
    return "98050039_pg"
},

    baiduTn = window.baiduTn || searchPidRandom(), sogouTn = "", config = {
    search: {
        sogou: {
            name: "搜狗搜索",
            news: {
                site: "news",
                word: "query",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://news.sogou.com/news"
            },
            web: {
                site: "web",
                word: "query",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "https://www.sogou.com/sogou"
            },
            zhidao: {
                site: "zhidao",
                word: "sp",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://wenwen.soso.com/z/Search.e"
            },
            music: {
                site: "music",
                word: "query",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://mp3.sogou.com/music.so"
            },
            pic: {
                site: "pic",
                word: "query",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://pic.sogou.com/pics"
            },
            video: {
                site: "video",
                word: "query",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://v.sogou.com/v"
            },
            maps: {
                site: "maps",
                word: "what",
                params: [["pid", sogouTn], ["ie", "utf-8"]],
                action: "http://map.sogou.com/"
            }
        },
        google: {
            name: "谷歌搜索",
            news: {site: "news", word: "q", params: [["ie", "utf-8"]], action: "https://news.google.com.hk/nwshp"},
            web: {site: "web", word: "q", params: [["ie", "utf-8"]], action: "https://www.google.com.hk/search"},
            maps: {site: "maps", word: "q", params: [["ie", "utf-8"]], action: "http://ditu.google.cn/maps"},
            pic: {
                site: "pic",
                word: "q",
                params: [["ie", "utf-8"], ["tbm", "isch"]],
                action: "https://www.google.com/search"
            }
        },
        bing: {
            name: "必应搜索",
            news: {site: "news", word: "q", params: [["ie", "utf-8"]], action: "http://cn.bing.com/news/search"},
            web: {site: "web", word: "q", params: [["ie", "utf-8"]], action: "http://cn.bing.com/search"},
            pic: {site: "pic", word: "q", params: [["ie", "utf-8"]], action: "http://cn.bing.com/images/search"},
            video: {site: "video", word: "q", params: [["ie", "utf-8"]], action: "http://cn.bing.com/videos/search"},
            maps: {site: "maps", word: "q", params: [["ie", "utf-8"]], action: "http://cn.bing.com/ditu/default.aspx"}
        },
        taobao: {
            name: "淘宝搜索",
            news: {site: "news", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            web: {site: "web", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            tieba: {site: "tieba", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            zhidao: {site: "zhidao", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            music: {site: "music", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            pic: {site: "pic", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            video: {site: "video", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"},
            maps: {site: "maps", word: "query", params: [["ie", "utf-8"]], action: "http://ditu.amap.com/search"},
            wenku: {site: "wenku", word: "q", params: [["ie", "utf-8"]], action: "http://s.taobao.com/search"}
        },
        aitaobao: {
            name: "淘宝搜索",
            news: {
                site: "news",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            web: {
                site: "web",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            tieba: {
                site: "tieba",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            zhidao: {
                site: "zhidao",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            music: {
                site: "music",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            pic: {
                site: "pic",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            video: {
                site: "video",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            },
            maps: {site: "maps", word: "query", params: [["ie", "utf-8"]], action: "http://ditu.amap.com/search"},
            wenku: {
                site: "wenku",
                word: "key",
                params: [["pid", "mm_50814843_6614255_31860255"], ["unid", ""], ["ie", "utf-8"]],
                action: "http://ai.taobao.com/search/index.htm"
            }
        },
        youku: {
            name: "优酷搜索",
            news: {site: "news", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            web: {site: "web", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            tieba: {site: "tieba", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            zhidao: {site: "zhidao", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            music: {site: "music", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            pic: {site: "pic", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            video: {site: "video", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"},
            maps: {site: "maps", word: "query", params: [["ie", "utf-8"]], action: "http://ditu.amap.com/search"},
            wenku: {site: "wenku", word: "keyword", params: [["ie", "utf-8"]], action: "http://www.soku.com/v"}
        },
        baidu: {
            name: "百度一下",
            news: {
                site: "news",
                word: "word",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://news.baidu.com/ns"
            },
            web: {
                site: "web",
                word: "wd",
                params: [["ie", "utf-8"], ["tn", baiduTn], ["ssl_s", "0"], ["ssl_c", "ssl6_"]],
                action: "https://www.baidu.com/s"
            },
            tieba: {
                site: "tieba",
                word: "kw",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://tieba.baidu.com/f"
            },
            zhidao: {
                site: "zhidao",
                word: "word",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://zhidao.baidu.com/search"
            },
            music: {site: "music", word: "key", params: [["tn", baiduTn]], action: "http://music.baidu.com/search"},
            pic: {
                site: "pic",
                word: "word",
                params: [["ie", "utf-8"], ["tn", "baiduimage"]],
                action: "http://image.baidu.com/search/index"
            },
            video: {
                site: "video",
                word: "word",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://v.baidu.com/v"
            },
            maps: {
                site: "maps",
                word: "word",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://map.baidu.com/m"
            },
            wenku: {
                site: "wenku",
                word: "word",
                params: [["ie", "utf-8"], ["tn", baiduTn]],
                action: "http://wenku.baidu.com/search"
            }
        },
        isearch: {
            name: "多重搜索",
            news: {site: "news", word: "q", params: [["type", "news"], ["ie", "utf-8"]], action: "http://s.uc.cn/"},
            web: {site: "web", word: "q", params: [["type", "web"], ["ie", "utf-8"]], action: "http://s.uc.cn/"},
            music: {site: "music", word: "q", params: [["type", "music"], ["ie", "utf-8"]], action: "http://s.uc.cn/"},
            pic: {site: "pic", word: "q", params: [["type", "image"], ["ie", "utf-8"]], action: "http://s.uc.cn/"},
            video: {site: "video", word: "q", params: [["type", "video"], ["ie", "utf-8"]], action: "http://s.uc.cn/"},
            maps: {site: "maps", word: "query", params: [["ie", "utf-8"]], action: "http://ditu.amap.com/search"},
            wenku: {site: "wenku", word: "q", params: [["type", "docs"], ["ie", "utf-8"]], action: "http://s.uc.cn/"}
        },
        amap: {
            name: "高德搜索",
            web: {
                site: "web",
                word: "query",
                params: [["type", "web"], ["ie", "utf-8"]],
                action: "http://ditu.amap.com/search"
            },
            maps: {site: "maps", word: "query", params: [["ie", "utf-8"]], action: "http://ditu.amap.com/search"}
        }
    }
},
    searchEngine = {
    suffix: "搜索",
    names: {
        sogou: "搜狗",
        google: "谷歌",
        bing: "bing",
        taobao: "淘宝",
        aitaobao: "爱淘宝",
        youku: "优酷",
        baidu: "百度",
        isearch: "多重",
        amap: "高德"
    },
    type: {
        news: "新闻",
        web: "网页",
        tieba: "贴吧",
        zhidao: "知道",
        music: "音乐",
        pic: "图片",
        video: "视频",
        maps: "地图",
        wenku: "文库"
    }
};

!function () {
    "use strict";

    function a() {
        var a = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "", b = new RegExp(/msie 6/i), c = b.test(a);
        return !c
    }

    function b() {
        e({url: "https://www.baidu.com/con", tn: "UCBrowser_UC123"})
    }

    function c(a) {
        g._option.protocol = a, g._option.checked = !0
    }

    function d() {
        return (new Date).getTime().toString(16)
    }

    function e(a) {
        var b = a.url ? a.url : "https://www.baidu.com/con", d = document.createElement("script");
        d.onload = function () {
        }, d.onerror = function () {
            c("http")
        }, d.src = b + "?from=" + a.tn, document.body.appendChild(d)
    }

    function f() {
        g._option.timeChecked = !0, g._option.timeout = !0
    }

    var g = window.BaiduHttps = {_option: {}},
        h = function () {
        a() ? b() : c("http")
    };

    g.callbacks = function (a) {
        "object" == typeof a && c(0 === a.s ? "https" : "http")
    };
    var i;

    g.useHttps = function () {
        return this._option.timeout === !0 && (h(), this._option.timeout = !1, this._option.timeChecked = !1, i = setTimeout(f, 12e4)), this._option.timeChecked || (i = setTimeout(f, 12e4)), this._option.checked && "https" === this._option.protocol ? {
                s: 1,
                ssl_code: "ssl6_" + d()
            } : {s: 0, ssl_code: "ssl6_" + d()}
    },
        h()
}(),

    $(function () {
    "use strict";


    UC.Search = {
        init: function () {
            var a = null;
            this.$searchKeyword = $("#J_searchKeyword"), this.$tabs = $(".search-tabList li"), this.$formWapper = $(".search-form"), this.$form = $("#J_searchForm"), this.$submit = $("#J_searchSubmit"), this.$inputWrapper = this.$form.find(".search-input"), this.$logoList = $("#J_searchLogoList"), this.$searchLogo = $("#J_searchLogo"), this.$searchBox = $("#J_searchBox"), this.searchType = UC.storage.item("searchType"), this.logWriteForm.init(), this.eventBind(), this.searchType = this.searchType || "baidu", a = this.$logoList.find('[data-name="' + this.searchType + '"]'), a = a || this.$logoList.find('[data-name="baidu"]'), a.trigger("click"), this.$searchLogo.show(), this.$submit.show();
            try {
                window.initSuggestion($.proxy(this.logWriteForm.trigger, this));
                var b = $(".bdSug_wpr");
                if (b && b.length) {
                    var c = $("#J_baiduAd1").clone();
                    c[0].id = "J_baiduAd3", c.prependTo(b).removeClass("hidden_element")
                }
                if (!window.normalWeb) {
                    var d = $("#J_baiduAd0").clone();
                    d[0].id = "J_baiduAd4", d.appendTo($("#J_siteSearchBox")).removeClass("hidden_element"), $("#J_mainConBody").css({paddingTop: "144px"}), $("#J_siteSearchBox").css({height: "125px"})
                }
            } catch (e) {
            }
        },

        logWriteForm: {
            id: "J_logWriteForm" + (new Date).getTime(), element: $("<a>"), init: function () {
                var a = this.element.attr({id: this.id, href: "#"}), b = this;
                $(document.body).append(a), $(document.body).on("click", "#" + b.id, function () {
                    var a = UC.Search.$searchKeyword.val(), b = null, c = null, d = null, e = null, f = null;
                    "" !== a && (b = UC.Search.$tabs.eq(0).attr("data-search"), c = UC.Search.$tabs.filter(".current").attr("data-val"), d = searchEngine.suffix, e = searchEngine.names[b], f = e + searchEngine.type[c], UC.logWrite.write("click", {
                        ck_rg: "首页搜索-搜索词",
                        ck_name: encodeURI(a)
                    }), UC.logWrite.write("click", {
                        ck_rg: "首页搜索-搜索统计",
                        ck_po: encodeURI(e + d),
                        ck_name: encodeURI(f)
                    }))
                }), a.hide()
            }, trigger: function () {
                UC.Search.logWriteForm.element.trigger("click")
            }
        },

        createSearchParams: function (a, b) {
            var c = a.params || [], d = c.length, e = 0, f = null, g = null, h = null;
            for (b.find(".search-params").empty(); e < d; e++)g = c[e][0], h = c[e][1], f = $('<input type="hidden" name="' + g + '" value="' + h + '">'), b.children(".search-params").append(f)
        },

        bdHttps: function (a) {
            var b = this.$form.attr("action"), c = b.indexOf("www.baidu.com") !== -1 ? 1 : 0, d = null, e = null, f = 0, g = null, h = "";
            if (c) {
                for (h = UC.storage.getLS("bdHttps"), h ? d = h : (d = window.BaiduHttps.useHttps(), UC.storage.setLS("bdHttps", d)), e = [["ssl_s", d.s], ["ssl_c", d.ssl_code]], g = e.length; f < g; f++)$("input[name = " + e[f][0] + "]").attr("value", e[f][1]);
                if (0 === d.s ? this.$form.attr("action", "http://www.baidu.com/s") : this.$form.attr("action", "https://www.baidu.com/s"), !a) {
                    var i = $('.search-params input[name="tn"]'), j = i[0].value;
                    UC.logWrite.write("click", {ck_name: j, ck_rg: "百度搜索串"})
                }
            }
        },

        bdWithoutReferrer: function () {
            var a = this.$form.attr("action"), b = a.indexOf("baidu.com") !== -1 ? 1 : 0, c = [], d = null;
            return !b || (c = $("#J_baiduWithoutReferrer"), d = c[0].contentWindow.document, d.body.innerHTML = this.$form.prop("outerHTML"), d.getElementById("J_searchForm").removeAttribute("onsubmit"), d.getElementById("J_searchKeyword").value = this.$searchKeyword.val(), $("base").removeAttr("target"), c[0].src = 'javascript:document.getElementById("J_searchForm").submit();', $("base").attr("target", "_blank"), !1)
        },


        eventBind: function () {
            var a = this;
            this.$logoList.delegate("li", "click", function () {
                var b = $(this).attr("data-name"), c = a.$tabs.filter(".current");
                a.$tabs.each(function () {
                    var a = $(this).attr("data-val");
                    "undefined" != typeof config.search[b][a] ? ($(this).attr("data-search", b), $(this).attr("data-action", config.search[b][a].action)) : ($(this).attr("data-search", "baidu"), $(this).attr("data-action", config.search.baidu[a].action))
                }), $("#J_changeSearchLogo").removeClass().addClass("search-" + b + "-logo"), a.$form.attr({action: c.attr("data-action")}), a.$searchKeyword.attr("name", config.search[c.attr("data-search")][c.attr("data-val")].word), a.createSearchParams(config.search[c.attr("data-search")][c.attr("data-val")], a.$form), a.$submit.attr("value", config.search[b].name), a.$searchBox.hide(), a.$formWapper.removeClass().addClass("search-form " + b), UC.storage.item("searchType", b)
            }), this.$logoList.delegate("li", "mouseover", function () {
                $(this).addClass("current").siblings().removeClass("current")
            }), this.$submit.on("click", function () {
            }), this.$searchLogo.click(function (b) {
                var c = b || window.event;
                c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0, a.$searchBox.is(":hidden") ? a.$searchBox.show() : a.$searchBox.hide()
            }), this.$tabs.click(function (b) {
                var c = $(this).attr("data-action"), d = $(this).attr("data-search"), e = $(this).attr("data-val");
                $(this).addClass("current").siblings().removeClass("current"), a.$form.attr({action: c}), a.$searchKeyword.attr("name", config.search[d][e].word), a.createSearchParams(config.search[d][e], a.$form), b.stopPropagation()
            }), $(document).click(function () {
                a.$searchBox.hide()
            }), this.$inputWrapper.on("mouseover", function () {
                $(this).addClass("input-hover")
            }).on("mouseout", function () {
                $(this).removeClass("input-hover")
            }), this.$searchKeyword.on("focus", function () {
                var b = !0;
                a.$inputWrapper.addClass("input-focus"),

                    a.bdHttps(b)
            }).on("blur", function () {
                a.$inputWrapper.removeClass("input-focus")
            }), setTimeout(function () {
                a.$searchKeyword.focus()
            }, 800)
        }
    },
        UC.Search.init()
}());





var UC = window.UC || {};
!function (a) {
    a.partnerEmail = {
        config: {
            "@yeah.net": {
                action: "https://reg.163.com/logins.jsp",
                params: {
                    domain: "yeah.net",
                    password: "#{p}",
                    url: "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1",
                    username: "#{u}@yeah.net"
                }
            },
            "@sina.com": {
                action: "http://mail.sina.com.cn/cgi-bin/login.cgi",
                params: {psw: "#{p}", u: "#{u}@sina.com"}
            },
            "@139.com": {
                action: "https://mail.10086.cn/Login/Login.ashx?clientid=5025",
                params: {ClientId: "5025", Password: "#{p}", UserName: "#{u}"}
            }
        }, init: function () {
            var b = this;
            this.container = $("#J_mail"), this.form = this.container.find(".form-mail"), this.mailDropdown = this.container.find(".form-item-mail"), this.mailList = this.container.find(".mail-list"), this.mailItem = this.container.find(".mail-item-link"), this.mailSuffix = this.form.find(".mail-suffix"), this.accountLabel = this.form.find(".form-item-account .form-label"), this.accountInput = $("#J_mailAccount"), this.accountInputPwd = $("#J_mailPassword"), this.passwordLabel = this.form.find(".form-item-password .form-label"), this.passwordInput = this.form.find('input[type="password"]'), this.submit = this.form.find('input[type="submit"]'), this.clickTarget = this.mailItem.eq(0), this.suffix = "@sina.com", this.container.on("click", $.proxy(this.showForm, this)), this.mailDropdown.on("click", $.proxy(this.toggleMailList, this)), this.mailItem.on("click", $.proxy(this.mailItemClick, this)), a.browser.ie && a.browser.ie < 10 && (this.accountLabel.show(), this.passwordLabel.show(), this.setTip(this.accountInput, this.accountLabel), this.setTip(this.passwordInput, this.passwordLabel)), this.focus(), this.form.on("submit", function (c) {
                b.hideMailList(), b.hideForm();
                var d = b.accountInput.val(), e = b.config[b.suffix];
                b.accountInput.val(d), b.addParams(e), b.clickTarget && a.logWrite.write("click", {
                    ck_rg: "工具-邮箱-直接登录",
                    ck_name: b.clickTarget.text()
                })
            }), $(document).on("click", $.proxy(this.docClick, this))
        }, focus: function () {
            this.form.on("focus", ".form-input", function () {
                $(this).closest(".form-item").addClass("input-focus")
            }).on("blur", ".form-input", function () {
                $(this).closest(".form-item").removeClass("input-focus")
            })
        }, setTip: function (a, b) {
            a.focus(function () {
                b.hide()
            }).blur(function () {
                "" == a.val() && b.show()
            })
        }, docClick: function (a) {
            var b = $(a.target);
            b.closest(this.container).length || this.hideForm()
        }, mailItemClick: function (b) {
            var c = $(b.target);
            if (c.closest(".mail-item-clicked").length) {
                b.preventDefault();
                c.attr("href");
                this.clickTarget = c, this.setSuffixText(c.text());
                var d = this.config[c.text()];
                this.addParams(d)
            } else b.stopPropagation(), this.hideForm();
            a.logWrite.write("click", {ck_rg: "工具-邮箱-选择", ck_name: c.text()})
        }, addParams: function (a) {
            var b = a.action, c = a.params, d = "";
            this.form.attr("action", b);
            for (var e in c) {
                var f = this.accountInput.val(), g = f.indexOf("@"), h = f.substring(0, g != -1 ? g : f.length), i = this.form.find("input[name=" + e + "]"), j = c[e], k = /#{u}/gi, l = /#{p}/gi;
                i.length > 0 && i.remove(), k.test(j) && (j = h + j.replace(k, "")), l.test(j) && (j = this.accountInputPwd.val() + j.replace(l, "")), d += '<input type="hidden" name="' + e + '" value="' + j + '" />'
            }
            $("#J_mailHidden").html(d);
            var m = this;
            setTimeout(function () {
                m.accountInput.val(""), m.accountInputPwd.val("")
            }, 300)
        }, setSuffixText: function (a) {
            this.suffix = a, this.mailSuffix.text(a)
        }, toggleMailList: function () {
            this.mailList.hasClass("hidden_element") ? this.showMailList() : this.hideMailList()
        }, showMailList: function () {
            this.mailList.removeClass("hidden_element")
        }, hideMailList: function () {
            this.mailList.addClass("hidden_element")
        }, showForm: function () {
            this.form.hasClass("hidden-part") && (this.form.removeClass("hidden-part"), this.accountInput.val().length && (this.accountInput.focus().blur(), this.accountInputPwd.focus().blur()))
        }, hideForm: function () {
            var a = this;
            this.form.addClass("hidden-part"),
                this.mailList.addClass("hidden_element"), setTimeout(function () {
                a.accountInput.val(""), a.accountInputPwd.val("")
            }, 300)
        }
    }, a.partnerEmail.init()
}(UC || (UC = {}));