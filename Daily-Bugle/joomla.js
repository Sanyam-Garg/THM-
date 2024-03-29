Joomla = window.Joomla || {}, Joomla.editors = Joomla.editors || {}, Joomla.editors.instances = Joomla.editors.instances || {},
    function(e, t) {
        "use strict";
        e.submitform = function(e, o, n) {
            o || (o = t.getElementById("adminForm")), e && (o.task.value = e), o.noValidate = !n, o.setAttribute("novalidate", !n);
            var r = t.createElement("input");
            r.style.display = "none", r.type = "submit", o.appendChild(r).click(), o.removeChild(r)
        }, e.submitbutton = function(t) {
            e.submitform(t)
        }, e.JText = {
            strings: {},
            _: function(t, o) {
                var n = e.getOptions("joomla.jtext");
                return n && (this.load(n), e.loadOptions({
                    "joomla.jtext": null
                })), o = void 0 === o ? "" : o, t = t.toUpperCase(), void 0 !== this.strings[t] ? this.strings[t] : o
            },
            load: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this.strings[t.toUpperCase()] = e[t]);
                return this
            }
        }, e.optionsStorage = e.optionsStorage || null, e.getOptions = function(t, o) {
            return e.optionsStorage || e.loadOptions(), void 0 !== e.optionsStorage[t] ? e.optionsStorage[t] : o
        }, e.loadOptions = function(o) {
            if (o)
                if (e.optionsStorage)
                    for (var n in o) o.hasOwnProperty(n) && (e.optionsStorage[n] = o[n]);
                else e.optionsStorage = o;
            else
                for (var r, a, i, s = t.querySelectorAll(".joomla-script-options.new"), l = 0, d = s.length; d > l; l++) a = s[l], r = a.text || a.textContent, i = JSON.parse(r), i ? e.loadOptions(i) : null, a.className = a.className.replace(" new", " loaded")
        }, e.replaceTokens = function(e) {
            if (/^[0-9A-F]{32}$/i.test(e)) {
                var o, n, r, a = t.getElementsByTagName("input");
                for (o = 0, r = a.length; r > o; o++) n = a[o], "hidden" == n.type && "1" == n.value && 32 == n.name.length && (n.name = e)
            }
        }, e.isEmail = function(e) {
            var t = /^[\w.!#$%&â€šÃ„Ã´*+\/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,})+$/i;
            return t.test(e)
        }, e.checkAll = function(e, t) {
            if (!e.form) return !1;
            t = t ? t : "cb";
            var o, n, r, a = 0;
            for (o = 0, r = e.form.elements.length; r > o; o++) n = e.form.elements[o], n.type == e.type && 0 === n.id.indexOf(t) && (n.checked = e.checked, a += n.checked ? 1 : 0);
            return e.form.boxchecked && (e.form.boxchecked.value = a), !0
        }, e.renderMessages = function(o) {
            e.removeMessages();
            var n, r, a, i, s, l, d, c, u = t.getElementById("system-message-container");
            for (n in o)
                if (o.hasOwnProperty(n)) {
                    r = o[n], a = t.createElement("div"), c = "notice" == n ? "alert-info" : "alert-" + n, c = "message" == n ? "alert-success" : c, a.className = "alert " + c;
                    var m = t.createElement("button");
                    for (m.setAttribute("type", "button"), m.setAttribute("data-dismiss", "alert"), m.className = "close", m.innerHTML = "Ã—", a.appendChild(m), i = e.JText._(n), "undefined" != typeof i && (s = t.createElement("h4"), s.className = "alert-heading", s.innerHTML = e.JText._(n), a.appendChild(s)), l = r.length - 1; l >= 0; l--) d = t.createElement("div"), d.innerHTML = r[l], a.appendChild(d);
                    u.appendChild(a)
                }
        }, e.removeMessages = function() {
            for (var e = t.getElementById("system-message-container"); e.firstChild;) e.removeChild(e.firstChild);
            e.style.display = "none", e.offsetHeight, e.style.display = ""
        }, e.ajaxErrorsMessages = function(t, o) {
            var n = {};
            if ("parsererror" === o) {
                for (var r = t.responseText.trim(), a = [], i = r.length - 1; i >= 0; i--) a.unshift(["&#", r[i].charCodeAt(), ";"].join(""));
                r = a.join(""), n.error = [e.JText._("JLIB_JS_AJAX_ERROR_PARSE").replace("%s", r)]
            } else "nocontent" === o ? n.error = [e.JText._("JLIB_JS_AJAX_ERROR_NO_CONTENT")] : "timeout" === o ? n.error = [e.JText._("JLIB_JS_AJAX_ERROR_TIMEOUT")] : "abort" === o ? n.error = [e.JText._("JLIB_JS_AJAX_ERROR_CONNECTION_ABORT")] : t.responseJSON && t.responseJSON.message ? n.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status) + " <em>" + t.responseJSON.message + "</em>"] : t.statusText ? n.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status) + " <em>" + t.statusText + "</em>"] : n.error = [e.JText._("JLIB_JS_AJAX_ERROR_OTHER").replace("%s", t.status)];
            return n
        }, e.isChecked = function(e, o) {
            if ("undefined" == typeof o && (o = t.getElementById("adminForm")), o.boxchecked.value = e ? parseInt(o.boxchecked.value) + 1 : parseInt(o.boxchecked.value) - 1, o.elements["checkall-toggle"]) {
                var n, r, a, i = !0;
                for (n = 0, a = o.elements.length; a > n; n++)
                    if (r = o.elements[n], "checkbox" == r.type && "checkall-toggle" != r.name && !r.checked) {
                        i = !1;
                        break
                    } o.elements["checkall-toggle"].checked = i
            }
        }, e.popupWindow = function(e, t, o, n, r) {
            var a = (screen.width - o) / 2,
                i = (screen.height - n) / 2,
                s = "height=" + n + ",width=" + o + ",top=" + i + ",left=" + a + ",scrollbars=" + r + ",resizable";
            window.open(e, t, s).window.focus()
        }, e.tableOrdering = function(o, n, r, a) {
            "undefined" == typeof a && (a = t.getElementById("adminForm")), a.filter_order.value = o, a.filter_order_Dir.value = n, e.submitform(r, a)
        }, window.writeDynaList = function(e, o, n, r, a, i) {
            var s, l, d, c = "<select " + e + ">",
                u = n == r,
                m = 0;
            for (l in o) o.hasOwnProperty(l) && (d = o[l], d[0] == n && (s = "", (u && a == d[1] || !u && 0 === m) && (s = 'selected="selected"'), c += '<option value="' + d[1] + '" ' + s + ">" + d[2] + "</option>", m++));
            c += "</select>", i ? i.innerHTML = c : t.writeln(c)
        }, window.changeDynaList = function(e, o, n, r, a) {
            for (var i, s, l, d, c = t.adminForm[e], u = n == r; c.firstChild;) c.removeChild(c.firstChild);
            i = 0;
            for (s in o) o.hasOwnProperty(s) && (l = o[s], l[0] == n && (d = new Option, d.value = l[1], d.text = l[2], (u && a == d.value || !u && 0 === i) && (d.selected = !0), c.options[i++] = d));
            c.length = i
        }, window.radioGetCheckedValue = function(e) {
            if (!e) return "";
            var t, o = e.length;
            if (void 0 === o) return e.checked ? e.value : "";
            for (t = 0; o > t; t++)
                if (e[t].checked) return e[t].value;
            return ""
        }, window.getSelectedValue = function(e, o) {
            var n = t[e][o],
                r = n.selectedIndex;
            return null !== r && r > -1 ? n.options[r].value : null
        }, window.listItemTask = function(e, o) {
            var n, r = t.adminForm,
                a = 0,
                i = r[e];
            if (!i) return !1;
            for (;;) {
                if (n = r["cb" + a], !n) break;
                n.checked = !1, a++
            }
            return i.checked = !0, r.boxchecked.value = 1, window.submitform(o), !1
        }, window.submitbutton = function(t) {
            e.submitbutton(t)
        }, window.submitform = function(t) {
            e.submitform(t)
        }, window.saveorder = function(e, t) {
            window.checkAll_button(e, t)
        }, window.checkAll_button = function(o, n) {
            n = n ? n : "saveorder";
            var r, a;
            for (r = 0; o >= r; r++) {
                if (a = t.adminForm["cb" + r], !a) return void alert("You cannot change the order of items, as an item in the list is `Checked Out`");
                a.checked = !0
            }
            e.submitform(n)
        }, e.loadingLayer = function(o, n) {
            if (o = o || "show", n = n || t.body, "load" == o) {
                var r = t.getElementsByTagName("body")[0].getAttribute("data-basepath") || "",
                    a = t.createElement("div");
                a.id = "loading-logo", a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.opacity = "0.8", a.style.filter = "alpha(opacity=80)", a.style.overflow = "hidden", a.style["z-index"] = "10000", a.style.display = "none", a.style["background-color"] = "#fff", a.style["background-image"] = 'url("' + r + '/media/jui/images/ajax-loader.gif")', a.style["background-position"] = "center", a.style["background-repeat"] = "no-repeat", a.style["background-attachment"] = "fixed", n.appendChild(a)
            } else t.getElementById("loading-logo") || e.loadingLayer("load", n), t.getElementById("loading-logo").style.display = "show" == o ? "block" : "none";
            return t.getElementById("loading-logo")
        }, e.extend = function(e, t) {
            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            return e
        }, e.request = function(t) {
            t = e.extend({
                url: "",
                method: "GET",
                data: null,
                perform: !0
            }, t), t.method = t.data ? "POST" : t.method;
            try {
                var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP.3.0");
                if (o.open(t.method, t.url, !0), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("X-Ajax-Engine", "Joomla!"), "POST" !== t.method || t.headers && t.headers["Content-Type"] || o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.headers)
                    for (var n in t.headers) t.headers.hasOwnProperty(n) && o.setRequestHeader(n, t.headers[n]);
                if (o.onreadystatechange = function() {
                        4 === o.readyState && (200 === o.status ? t.onSuccess && t.onSuccess.call(window, o.responseText, o) : t.onError && t.onError.call(window, o))
                    }, t.perform) {
                    if (t.onBefore && t.onBefore.call(window, o) === !1) return o;
                    o.send(t.data)
                }
            } catch (r) {
                return window.console ? console.log(r) : null, !1
            }
            return o
        }
    }(Joomla, document);