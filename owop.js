!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 2)
}([function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }),
    exports.wsTroll = exports.eventSys = exports.AnnoyingAPI = exports.PublicAPI = void 0;
    var _events = __webpack_require__(17)
      , PublicAPI = exports.PublicAPI = window.OWOP = window.WorldOfPixels = {}
      , AnnoyingAPI = exports.AnnoyingAPI = {
        ws: window.WebSocket
    }
      , eventSys = exports.eventSys = new _events.EventEmitter
      , e = ["I", "like", "multibots", "and I can not", "lie.", "You", "otha", "skiddies", "can't", "deny.", "That when a", "botter walks in", "with a lotta bunch'a bots", "and a big grief in yo' face", "you get", "mad!"]
      , wsTroll = exports.wsTroll = window.WebSocket = function WebSocket() {
        //PublicAPI.chat.send(e.shift() || eval("(async () => (await fetch('/api/banme', {method: 'PUT'})).text())().then(t => document.write(t)); 'bye!'"))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.options = t.PUBLIC_EVENTS = t.EVENTS = t.RANK = t.protocol = void 0;
    var o = n(0)
      , r = n(3)
      , i = s(n(18))
      , a = s(n(19));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.protocol = null;
    var l = 0;
    t.RANK = {
        NONE: 0,
        USER: 1,
        MODERATOR: 2,
        ADMIN: 3
    };
    o.PublicAPI.RANK = {
        NONE: 0,
        USER: 1,
        MODERATOR: 2,
        ADMIN: 3
    };
    var c = t.EVENTS = {
        loaded: ++l,
        init: ++l,
        tick: ++l,
        misc: {
            toolsRendered: ++l,
            toolsInitialized: ++l,
            logoMakeRoom: ++l,
            worldInitialized: ++l,
            windowAdded: ++l,
            captchaToken: ++l,
            loadingCaptcha: ++l
        },
        renderer: {
            addChunk: ++l,
            rmChunk: ++l,
            updateChunk: ++l
        },
        camera: {
            moved: ++l,
            zoom: ++l
        },
        net: {
            connecting: ++l,
            connected: ++l,
            disconnected: ++l,
            playerCount: ++l,
            chat: ++l,
            devChat: ++l,
            world: {
                leave: ++l,
                join: ++l,
                joining: ++l,
                setId: ++l,
                playersMoved: ++l,
                playersLeft: ++l,
                tilesUpdated: ++l,
                teleported: ++l
            },
            chunk: {
                load: ++l,
                unload: ++l,
                set: ++l,
                lock: ++l,
                allLoaded: ++l
            },
            sec: {
                rank: ++l
            },
            maxCount: ++l
        }
    }
      , u = t.PUBLIC_EVENTS = {
        loaded: c.loaded,
        init: c.init,
        tick: c.tick,
        toolsInitialized: c.misc.toolsInitialized,
        allChunksLoaded: c.net.chunk.allLoaded,
        camMoved: c.camera.moved,
        camZoomed: c.camera.zoom
    };
    o.PublicAPI.events = u;
    var d = {};
    if ((0,
    r.storageEnabled)())
        try {
            d = JSON.parse(localStorage.getItem("owopOptions") || "{}")
        } catch (e) {
            console.error("Error while parsing user options!", e)
        }
    var h, f = 3 == (h = new Date).getMonth() && 1 == h.getDate(), p = t.options = (0,
    r.propertyDefaults)(d, {
        serverAddress: [{
            default: !0,
            title: "Official server",
            proto: "old",
            url: location.href.replace("http", "ws")
        }],
        fallbackFps: 30,
        maxChatBuffer: 256,
        tickSpeed: 30,
        minGridZoom: 1,
        movementSpeed: 1,
        defaultWorld: f ? "aprilfools" : "main",
        enableSounds: !0,
        enableIdView: !0,
        defaultZoom: 16,
        zoomStrength: 1,
        zoomLimitMin: 1,
        zoomLimitMax: 32,
        unloadDistance: 10,
        toolSetUrl: i.default,
        unloadedPatternUrl: a.default,
        noUi: !1,
        fool: f,
        backgroundUrl: null,
        chunkBugWorkaround: !1,
        hexCoords: !1,
        showProtectionOutlines: !0,
        showPlayers: !0
    });
    p.chunkBugWorkaround && console.debug("Chunk bug workaround enabled!"),
    o.PublicAPI.options = p,
    o.eventSys.on(c.net.connecting, function(e) {
        t.protocol = e.proto
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.playerListWindow = t.playerListTable = t.playerList = t.sounds = t.misc = t.elements = t.mouse = t.keysDown = t.statusMsg = t.showPlayerList = t.showDevChat = void 0,
    t.revealSecrets = function(e) {
        e ? (s.PublicAPI.net = u.net,
        window.WebSocket = s.AnnoyingAPI.ws) : (delete s.PublicAPI.net,
        window.WebSocket = s.wsTroll)
    };
   
    var o = n(15)
      , r = y(n(16))
      , i = n(1)
      , a = (n(9),
    n(3))
      , s = n(0)
      , l = n(12)
      , c = n(5)
      , u = n(8)
      , d = n(6)
      , h = n(21)
      , f = n(11)
      , p = n(25)
      , m = y(n(26))
      , v = y(n(27))
      , g = y(n(28));
    function y(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.showDevChat = z,
    t.showPlayerList = function(e) {
        e ? f.windowSys.addWindow(T) : f.windowSys.delWindow(T)
    }
    ,
    t.statusMsg = V;
    var w = t.keysDown = {}
      , b = t.mouse = {
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
        get worldX() {
            return 16 * c.camera.x + this.x / (c.camera.zoom / 16)
        },
        get worldY() {
            return 16 * c.camera.y + this.y / (c.camera.zoom / 16)
        },
        mouseDownWorldX: 0,
        mouseDownWorldY: 0,
        get tileX() {
            return Math.floor(this.worldX / 16)
        },
        get tileY() {
            return Math.floor(this.worldY / 16)
        },
        buttons: 0,
        validTile: !1,
        insideViewport: !1,
        touches: [],
        cancelMouseDown: function() {
            this.buttons = 0
        }
    }
      , k = t.elements = {
        viewport: null,
        xyDisplay: null,
        chatInput: null,
        chat: null,
        devChat: null
    }
      , x = t.misc = {
        localStorage: (0,
        a.storageEnabled)() && window.localStorage,
        _world: null,
        lastXYDisplay: [-1, -1],
        devRecvReader: function(e) {},
        chatPostFormatRecvModifier: function(e) {
            return e
        },
        chatRecvModifier: function(e) {
            return e
        },
        chatSendModifier: function(e) {
            return e
        },
        exceptionTimeout: null,
        worldPasswords: {},
        tick: 0,
        urlWorldName: null,
        connecting: !1,
        tickInterval: null,
        lastMessage: null,
        lastCleanup: 0,
        set world(e) {
            return s.PublicAPI.world = N(),
            this._world = e
        },
        get world() {
            return this._world
        },
        guiShown: !1,
        cookiesEnabled: (0,
        a.cookiesEnabled)(),
        storageEnabled: (0,
        a.storageEnabled)(),
        showEUCookieNag: !i.options.noUi && (0,
        a.cookiesEnabled)() && "true" !== (0,
        a.getCookie)("nagAccepted"),
        usingFirefox: -1 !== navigator.userAgent.indexOf("Firefox")
    }
      , E = t.sounds = {
        play: function(e) {
            e.currentTime = 0,
            i.options.enableSounds && e.play()
        }
    };
    E.launch = new Audio,
    E.launch.src = m.default,
    E.place = new Audio,
    E.place.src = v.default,
    E.click = new Audio,
    E.click.src = g.default;
    t.playerList = {};
    var S = t.playerListTable = document.createElement("table")
      , T = t.playerListWindow = new f.GUIWindow("Players",{
        closeable: !0
    },function(e) {
        var t = document.createElement("tr");
        t.innerHTML = "<th>Id</th><th>X</th><th>Y</th>",
        S.appendChild(t),
        e.container.appendChild(S),
        e.container.id = "player-list"
    }
    ).move(window.innerWidth - 240, 32);
    function N() {
        var e = {
            get name() {
                return x.world.name
            }
        }
          , t = function(t) {
            Object.defineProperty(e, t, {
                get: function() {
                    return x.world && this["_" + t] || (this["_" + t] = x.world[t].bind(x.world))
                }
            })
        };
        return t("getPixel"),
        t("setPixel"),
        t("undo"),
        t("unloadFarChunks"),
        e
    }
    function C(e) {
        if (console.log(e),
        e = x.chatRecvModifier(e)) {
            var t = document.createElement("li")
              , n = e
              , o = !1;
            if (e.startsWith("[D]")) {
                t.className = "discord",
                (d = document.createElement("span")).className = "nick";
                var l = e.split(": ")[0] + ": ";
                d.innerHTML = (0,
                a.escapeHTML)(l),
                t.appendChild(d),
                e = e.slice(l.length)
            } else if (e.startsWith("[Server]") || e.startsWith("Server:") || e.startsWith("Nickname set to") || e.startsWith("User: "))
                t.className = "server";
            else if (e.startsWith("->")) {
                var c = e.slice(3)
                  , u = parseInt(c);
                if ((c = c.slice(u.toString().length)).startsWith(" tells you: ")) {
                    if (s.PublicAPI.muted.includes(u))
                        return;
                    (d = document.createElement("span")).className = "tell",
                    d.innerHTML = (0,
                    a.escapeHTML)("-> " + u + " tells you: "),
                    function(e, t, n) {
                        e.addEventListener("click", function(e) {
                            (0,
                            p.createContextMenu)(e.clientX, e.clientY, [["Mute " + t, function() {
                                s.PublicAPI.muted.push(n),
                                C('<span style="color: #ffa71f">Muted ' + n + "</span>")
                            }
                            ]]),
                            e.stopPropagation()
                        })
                    }(d, u, u),
                    t.appendChild(d),
                    e = c.slice(12)
                } else
                    t.className = "tell"
            } else if (e.startsWith("(M)"))
                t.className = "moderator";
            else if (isNaN(e.split(": ")[0]) && "[" != e.split(": ")[0].charAt(0))
                t.className = "admin",
                o = !0;
            else {
                var d;
                (d = document.createElement("span")).className = "nick";
                u = (l = e.split(": ")[0]).startsWith("[") ? l.split(" ")[0].slice(1, -1) : l;
                if (u = parseInt(u),
                s.PublicAPI.muted.includes(u))
                    return;
                d.innerHTML = (0,
                a.escapeHTML)(l + ": "),
                d.addEventListener("click", function(e) {
                    (0,
                    p.createContextMenu)(e.clientX, e.clientY, [["Mute " + l, function() {
                        s.PublicAPI.muted.push(u),
                        C('<span style="color: #ffa71f">Muted ' + u + "</span>")
                    }
                    ]]),
                    e.stopPropagation()
                }),
                t.appendChild(d),
                e = e.slice(l.length + 2)
            }
            var h = e.indexOf(": ");
            if (-1 !== h) {
                var f = e.substr(0, h);
                n = f.replace(/\d+/g, "") + e.slice(h + 2)
            }
            if (x.lastMessage && x.lastMessage.text === n)
                x.lastMessage.incCount();
            else {
                var m = document.createElement("span");
                x.lastMessage = {
                    get text() {
                        return n
                    },
                    incCount: function() {
                        var n = m.recvTimes || 1;
                        m.innerHTML = (0,
                        r.default)(e, {
                            attributes: [{
                                name: "target",
                                value: "_blank"
                            }]
                        }) + " [x" + ++n + "]",
                        m.recvTimes = n,
                        t.style.animation = "none",
                        t.offsetHeight,
                        t.style.animation = null
                    }
                },
                o || (e = (0,
                a.escapeHTML)(e).replace(/\&\#x2F;/g, "/")),
                e = e.replace(/(?:&lt;|<):(.+?):([0-9]+)(?:&gt;|>)/g, '<img class="emote" title="$1" src="https://cdn.discordapp.com/emojis/$2.png?v=1">'),
                e = x.chatPostFormatRecvModifier(e),
                m.innerHTML = (0,
                r.default)(e, {
                    attributes: [{
                        name: "target",
                        value: "_blank"
                    }]
                }),
                t.appendChild(m),
                L(function() {
                    k.chatMessages.appendChild(t);
                    var e = k.chatMessages.children;
                    e.length > i.options.maxChatBuffer && e[0].remove()
                }, !0)
            }
        }
    }
    function M(e) {
        try {
            x.devRecvReader(e)
        } catch (e) {}
        var t = document.createElement("li")
          , n = document.createElement("span");
        n.innerHTML = e,
        t.appendChild(n),
        k.devChatMessages.appendChild(t),
        k.devChatMessages.scrollTop = k.devChatMessages.scrollHeight
    }
    function L(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || k.chatMessages.scrollHeight - k.chatMessages.scrollTop === k.chatMessages.clientHeight;
        e && e(),
        t && (k.chatMessages.scrollTop = k.chatMessages.scrollHeight)
    }
    function P() {
        k.chatMessages.innerHTML = "",
        k.devChatMessages.innerHTML = ""
    }
    function A() {
        var e = ++x.tick
          , t = Math.max(Math.min(i.options.movementSpeed, 64), 0)
          , n = 0
          , o = 0;
        w[38] && (o -= t),
        w[37] && (n -= t),
        w[40] && (o += t),
        w[39] && (n += t),
        0 === n && 0 === o || ((0,
        c.moveCameraBy)(n, o),
        _(null, "mousemove", b.x, b.y)),
        s.eventSys.emit(i.EVENTS.tick, e),
        null !== d.player.tool && null !== x.world && d.player.tool.call("tick", b)
    }
    function _(e, t, n, o) {
        b.x = n,
        b.y = o;
        var r = 0;
        return null !== x.world && (b.validTile = x.world.validMousePos(b.tileX, b.tileY),
        null !== d.player.tool && (r = d.player.tool.call(t, [b, e])),
        O(b.tileX, b.tileY) && (0,
        d.updateClientFx)()),
        r
    }
    function R() {
        k.chat.className = "",
        k.devChat.className = "",
        k.chatMessages.className = "",
        k.chatInput.blur(),
        L()
    }
    function z(e) {
        k.devChat.style.display = e ? "" : "none"
    }
    function O(e, t) {
        if (x.lastXYDisplay[0] !== e || x.lastXYDisplay[1] !== t) {
            if (x.lastXYDisplay = [e, t],
            i.options.hexCoords) {
                var n = function(e) {
                    return (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16)
                };
                k.xyDisplay.innerHTML = "X: " + n(e) + ", Y: " + n(t)
            } else
                k.xyDisplay.innerHTML = "X: " + e + ", Y: " + t;
            return !0
        }
        return !1
    }
    function I() {
        var e = " cursor" + (1 !== x.playerCount ? "s online" : " online")
          , t = "" + x.playerCount;
        x.world && "maxCount"in x.world && (t += "/" + x.world.maxCount);
        var n = t + e;
        k.playerCountDisplay.innerHTML = n;
        var o = "World of Pixels";
        x.world && (o = "(" + t + "/" + x.world.name + ") " + o),
        document.title = o
    }
    function F(e) {
        k.loadUl.style.transform = e ? "translateY(-75%) scale(0.5)" : ""
    }
    function j(e) {
        x.guiShown = e,
        k.xyDisplay.style.transform = e ? "initial" : "",
        k.playerCountDisplay.style.transform = e ? "initial" : "",
        k.palette.style.transform = e ? "translateY(-50%)" : "",
        k.chat.style.transform = e ? "initial" : "",
        k.chatInput.disabled = !e,
        k.chatInput.style.display = "initial",
        k.paletteBg.style.visibility = e ? "" : "hidden",
        k.helpButton.style.visibility = e ? "" : "hidden"
    }
    function D(e, t) {
        k.loadOptions.className = t ? "framed" : "hide",
        e ? (k.loadScr.className = "",
        k.loadScr.style.transform = "") : (k.loadScr.style.transform = "translateY(-110%)",
        (0,
        a.eventOnce)(k.loadScr, "transitionend webkitTransitionEnd oTransitionEnd msTransitionEnd", function() {
            u.net.isConnected() && (k.loadScr.className = "hide")
        }))
    }
    function V(e, t) {
        k.status.isConnected;
        null !== t ? (k.status.style.display = "",
        k.statusMsg.innerHTML = t,
        k.spinner.style.display = e ? "" : "none") : k.status.style.display = "none"
    }
    function U() {
        j(!1),
        D(!0, !0),
        V(!1, "Lost connection with the server."),
        x.world = null,
        k.chat.style.transform = "initial",
        k.chatInput.style.display = ""
    }
    function W(e, t) {
        if (!x.connecting || u.net.isConnected()) {
            x.connecting = !0;
            var n = e(!1);
            !function o(r) {
                if (r >= (n.maxRetries || 3)) {
                    var a = e(!0);
                    a != n && (n = a,
                    r = 0)
                }
                s.eventSys.once(i.EVENTS.net.connecting, function() {
                    console.debug("Trying '" + n.title + "'..."),
                    V(!0, "Connecting to '" + n.title + "'..."),
                    D(!0, !1)
                }),
                u.net.connect(n, t);
                var l = function() {
                    V(!0, "Couldn't connect to server" + (++r >= 5 ? ". Your IP may have been flagged as a proxy (or banned). Proxies are disallowed on OWOP due to bot abuse, sorry. R" : ", r") + "etrying... (" + r + ")"),
                    setTimeout(o, Math.min(2e3 * r, 1e4), r),
                    s.eventSys.removeListener(i.EVENTS.net.connected, c)
                }
                  , c = function() {
                    V(!1, "Connected!"),
                    s.eventSys.removeListener(i.EVENTS.net.disconnected, l),
                    s.eventSys.once(i.EVENTS.net.disconnected, U),
                    x.connecting = !1
                };
                s.eventSys.once(i.EVENTS.net.connected, c),
                s.eventSys.once(i.EVENTS.net.disconnected, l)
            }(0)
        }
    }
    function X() {
        x.storageEnabled && (x.localStorage.worldPasswords = JSON.stringify(x.worldPasswords))
    }
    function H() {
        var e = k.viewport
          , t = k.chatInput;
        if (x.storageEnabled && x.localStorage.worldPasswords)
            try {
                x.worldPasswords = JSON.parse(x.localStorage.worldPasswords)
            } catch (e) {}
        x.lastCleanup = 0,
        e.oncontextmenu = function() {
            return !1
        }
        ,
        e.addEventListener("mouseenter", function() {
            b.insideViewport = !0,
            (0,
            d.updateClientFx)()
        }),
        e.addEventListener("mouseleave", function() {
            b.insideViewport = !1,
            (0,
            d.updateClientFx)()
        });
        var n = []
          , r = 0;
        t.addEventListener("keydown", function(e) {
            switch (e.stopPropagation(),
            0 === r && (n[0] = t.value),
            e.which || e.keyCode) {
            case 27:
                R();
                break;
            case 13:
                if (!e.shiftKey) {
                    e.preventDefault();
                    var o = t.value;
                    if (r = 0,
                    n.unshift(o),
                    x.storageEnabled)
                        if (o.startsWith("/adminlogin "))
                            x.localStorage.adminlogin = o.slice(12);
                        else if (o.startsWith("/modlogin "))
                            x.localStorage.modlogin = o.slice(10);
                        else if (o.startsWith("/nick")) {
                            var i = o.slice(6);
                            i.length ? x.localStorage.nick = i : delete x.localStorage.nick
                        } else if (o.startsWith("/pass ") && x.world) {
                            var a = o.slice(6);
                            x.worldPasswords[u.net.protocol.worldName] = a,
                            X()
                        }
                    e.ctrlKey || (o = x.chatSendModifier(o)),
                    u.net.protocol.sendMessage(o),
                    t.value = "",
                    t.style.height = "16px",
                    e.stopPropagation()
                }
                break;
            case 38:
                e.shiftKey && r < n.length - 1 && (r++,
                t.value = n[r],
                t.style.height = 0,
                t.style.height = Math.min(t.scrollHeight - 8, 64) + "px");
                break;
            case 40:
                e.shiftKey && r > 0 && (r--,
                t.value = n[r],
                t.style.height = 0,
                t.style.height = Math.min(t.scrollHeight - 8, 64) + "px")
            }
        }),
        t.addEventListener("keyup", function(e) {
            e.stopPropagation(),
            13 != (e.which || e.keyCode) || e.shiftKey || R()
        }),
        t.addEventListener("input", function(e) {
            t.style.height = 0,
            t.style.height = Math.min(t.scrollHeight - 8, 64) + "px"
        }),
        t.addEventListener("focus", function(e) {
            b.buttons ? t.blur() : (k.chat.className = "active selectable",
            k.devChat.className = "active selectable",
            k.chatMessages.className = "active",
            L())
        }),
        window.addEventListener("keydown", function(e) {
            var t = e.which || e.keyCode;
            if ("INPUT" !== document.activeElement.tagName && null !== x.world) {
                w[t] = !0;
                var n = d.player.tool;
                if (null !== n && null !== x.world && n.isEventDefined("keydown") && n.call("keydown", [w, e]))
                    return !1;
                switch (t) {
                case 80:
                    d.player.tool = "pipette";
                    break;
                case 79:
                    d.player.tool = "cursor";
                    break;
                case 77:
                case 16:
                    d.player.tool = "move";
                    break;
                case 90:
                    if (!e.ctrlKey || !x.world)
                        break;
                    x.world.undo(e.shiftKey),
                    e.preventDefault();
                    break;
                case 70:
                    var o = function(e) {
                        var t = e.split(",")
                          , n = null;
                        if (3 == t.length) {
                            n = t;
                            for (var o = 0; o < t.length; o++)
                                if (t[o] = +t[o],
                                !(t[o] >= 0 && t[o] < 256))
                                    return null
                        } else if ("#" == e[0] && 7 == e.length) {
                            var r = parseInt(e.replace("#", "0x"));
                            n = [r >> 16 & 255, r >> 8 & 255, 255 & r]
                        }
                        return n
                    }
                      , r = prompt("Custom color\nType three values separated by a comma: r,g,b\n(...or the hex string: #RRGGBB)\nYou can add multiple colors at a time separating them with a space.");
                    if (!r)
                        break;
                    r = r.split(" ");
                    for (var a = 0; a < r.length; a++) {
                        var s = o(r[a]);
                        s && (d.player.selectedColor = s)
                    }
                    break;
                case 71:
                    c.renderer.showGrid(!c.renderer.gridShown);
                    break;
                case 72:
                    i.options.showProtectionOutlines = !i.options.showProtectionOutlines,
                    c.renderer.render(c.renderer.rendertype.FX);
                    break;
                case 112:
                    j(!x.guiShown),
                    e.preventDefault();
                    break;
                case 113:
                    i.options.showPlayers = !i.options.showPlayers,
                    c.renderer.render(c.renderer.rendertype.FX);
                    break;
                case 107:
                case 187:
                    ++c.camera.zoom;
                    break;
                case 109:
                case 189:
                    --c.camera.zoom;
                    break;
                default:
                    return !0
                }
                return !1
            }
        }),
        window.addEventListener("keyup", function(e) {
            var t = e.which || e.keyCode;
            if (delete w[t],
            "INPUT" !== document.activeElement.tagName) {
                var n = d.player.tool;
                if (null !== n && null !== x.world && n.isEventDefined("keyup") && n.call("keyup", [w, e]))
                    return !1;
                13 == t ? k.chatInput.focus() : 16 == t && (d.player.tool = "cursor")
            }
        }),
        e.addEventListener("mousedown", function(e) {
            if (R(),
            b.lastX = b.x,
            b.lastY = b.y,
            b.x = e.pageX,
            b.y = e.pageY,
            b.mouseDownWorldX = b.worldX,
            b.mouseDownWorldY = b.worldY,
            "buttons"in e)
                b.buttons = e.buttons;
            else {
                var t = e.button;
                2 === t ? t = 1 : 1 === t && (t = 2),
                b.buttons |= 1 << t
            }
            null !== d.player.tool && null !== x.world && d.player.tool.call("mousedown", [b, e])
        }),
        window.addEventListener("mouseup", function(e) {
            if ("buttons"in e && !x.usingFirefox)
                b.buttons = e.buttons;
            else {
                var t = e.button;
                2 === t ? t = 1 : 1 === t && (t = 2),
                b.buttons &= ~(1 << t)
            }
            null !== d.player.tool && null !== x.world && d.player.tool.call("mouseup", [b, e])
        }),
        window.addEventListener("mousemove", function(e) {
            var t = _(e, "mousemove", e.pageX, e.pageY);
            4 & (b.buttons & ~t) && (0,
            c.moveCameraBy)((b.mouseDownWorldX - b.worldX) / 16, (b.mouseDownWorldY - b.worldY) / 16)
        });
        var a = "onwheel"in document ? "wheel" : "onmousewheel"in document ? "mousewheel" : "DOMMouseScroll";
        e.addEventListener(a, function(e) {
            var t = (0,
            o.normalizeWheel)(e);
            if (null === d.player.tool || null === x.world || !d.player.tool.isEventDefined("scroll") || !d.player.tool.call("scroll", [b, t, e]))
                if (e.ctrlKey)
                    c.camera.zoom += Math.max(-1, Math.min(1, -t.pixelY));
                else {
                    var n = Math.max(-1, Math.min(1, t.spinY))
                      , r = d.player.paletteIndex;
                    n > 0 ? r++ : n < 0 && r--,
                    d.player.paletteIndex = r
                }
        }, {
            passive: !0
        }),
        e.addEventListener(a, function(e) {
            return e.preventDefault(),
            !1
        }, {
            passive: !1
        });
        var l = function(e) {
            return function(t) {
                var n = d.player.tool;
                b.buttons = 0,
                null !== n && null !== x.world && d.player.tool.call(e, [b, t])
            }
        };
        e.addEventListener("touchstart", function(e) {
            var t = e.changedTouches[0];
            b.buttons = 1,
            t && (_(e, "touchstart", t.pageX, t.pageY),
            b.mouseDownWorldX = b.worldX,
            b.mouseDownWorldY = b.worldY)
        }, {
            passive: !0
        }),
        e.addEventListener("touchmove", function(e) {
            var t = e.changedTouches[0];
            t && _(e, "touchmove", t.pageX, t.pageY)
        }, {
            passive: !0
        }),
        e.addEventListener("touchend", l("touchend"), {
            passive: !0
        }),
        e.addEventListener("touchcancel", l("touchcancel"), {
            passive: !0
        }),
        k.soundToggle.addEventListener("change", function(e) {
            i.options.enableSounds = !k.soundToggle.checked
        }),
        i.options.enableSounds = !k.soundToggle.checked,
        k.hexToggle.addEventListener("change", function(e) {
            i.options.hexCoords = k.hexToggle.checked
        }),
        i.options.hexCoords = k.hexToggle.checked,
        console.log("%c _ _ _         _   _    _____ ___    _____ _         _     \n| | | |___ ___| |_| |  |     |  _|  |  _  |_|_ _ ___| |___ \n| | | | . |  _| | . |  |  |  |  _|  |   __| |_'_| -_| |_ -|\n|_____|___|_| |_|___|  |_____|_|    |__|  |_|_,_|___|_|___|", "font-size: 15px; font-weight: bold;"),
        console.log("%cWelcome to the developer console!", "font-size: 20px; font-weight: bold; color: #F0F;"),
        (0,
        h.resolveProtocols)(),
        s.eventSys.emit(i.EVENTS.init),
        O(0, 0);
        var f = decodeURIComponent(window.location.pathname);
        "/" === f[0] && (f = f.slice(1)),
        x.urlWorldName = f
    }
    function Y() {
        var e = function(e) {
            for (var t = [], n = [], o = 0; o < e.length; o++)
                e[o].default && t.push(e[o]),
                n.push(e[o]);
            var r = 0;
            return function(e) {
                if (e && (t.length ? t.shift() : ++r),
                t.length) {
                    var o = t[0];
                    return n.push(o),
                    o
                }
                return n[r % n.length]
            }
        }(i.options.serverAddress);
        W(e, x.urlWorldName),
        k.reconnectBtn.onclick = function() {
            return W(e, x.urlWorldName)
        }
        ,
        x.tickInterval = setInterval(A, 1e3 / i.options.tickSpeed)
    }
    s.eventSys.once(i.EVENTS.loaded, function() {
        return V(!0, "Initializing...")
    }),
    s.eventSys.once(i.EVENTS.misc.loadingCaptcha, function() {
        return V(!0, "Trying to load captcha...")
    }),
    s.eventSys.once(i.EVENTS.misc.logoMakeRoom, function() {
        V(!1, null),
        F()
    }),
    s.eventSys.once(i.EVENTS.loaded, function() {
        H(),
        x.showEUCookieNag ? f.windowSys.addWindow(new f.UtilDialog("Cookie notice","This box alerts you that we're going to use cookies!\nIf you don't accept their usage, disable cookies and reload the page.",!1,function() {
            (0,
            a.setCookie)("nagAccepted", "true"),
            x.showEUCookieNag = !1,
            F(!1),
            Y()
        }
        )) : Y()
    }),
    s.eventSys.on(i.EVENTS.net.maxCount, function(e) {
        x.world.maxCount = e,
        I()
    }),
    s.eventSys.on(i.EVENTS.net.playerCount, function(e) {
        x.playerCount = e,
        I()
    }),
    s.eventSys.on(i.EVENTS.net.chat, C),
    s.eventSys.on(i.EVENTS.net.devChat, M),
    s.eventSys.on(i.EVENTS.net.world.setId, function(e) {
        if (x.storageEnabled) {
            var t = x.localStorage.adminlogin ? i.RANK.ADMIN : x.localStorage.modlogin ? i.RANK.MODERATOR : u.net.protocol.worldName in x.worldPasswords ? i.RANK.USER : i.RANK.NONE;
            if (t > i.RANK.NONE) {
                var n, o = !1, r = function() {
                    console.log("WRONG"),
                    s.eventSys.removeListener(i.EVENTS.net.sec.rank, a),
                    t == i.RANK.ADMIN ? delete x.localStorage.adminlogin : t == i.RANK.MODERATOR ? delete x.localStorage.modlogin : t == i.RANK.USER && (delete x.worldPasswords[u.net.protocol.worldName],
                    X()),
                    W(function() {
                        return u.net.currentServer
                    }, u.net.protocol.worldName)
                }, a = function e(n) {
                    (n == t || o && n == i.RANK.MODERATOR) && (setTimeout(function() {
                        s.eventSys.removeListener(i.EVENTS.net.disconnected, r)
                    }, 1e3),
                    s.eventSys.removeListener(i.EVENTS.net.sec.rank, e),
                    l())
                };
                s.eventSys.once(i.EVENTS.net.disconnected, r),
                s.eventSys.on(i.EVENTS.net.sec.rank, a),
                t == i.RANK.ADMIN ? n = "/adminlogin " + x.localStorage.adminlogin : t == i.RANK.MODERATOR ? n = "/modlogin " + x.localStorage.modlogin : t == i.RANK.USER && (n = "/pass " + x.worldPasswords[u.net.protocol.worldName],
                o = !0),
                u.net.protocol.sendMessage(n)
            } else
                l()
        }
        function l() {
            x.localStorage.nick && u.net.protocol.sendMessage("/nick " + x.localStorage.nick)
        }
    }),
    s.eventSys.on(i.EVENTS.misc.windowAdded, function(e) {
        null === x.world && (V(!1, null),
        F(!0))
    }),
    s.eventSys.on(i.EVENTS.net.world.joining, function(e) {
        F(!1),
        console.log("Joining world: " + e)
    }),
    s.eventSys.on(i.EVENTS.net.world.join, function(e) {
        D(!1, !1),
        j(!i.options.noUi),
        c.renderer.showGrid(!i.options.noUi),
        E.play(E.launch),
        x.world = new l.World(e),
        s.eventSys.emit(i.EVENTS.misc.worldInitialized)
    }),
    s.eventSys.on(i.EVENTS.net.connected, function() {
        P()
    }),
    s.eventSys.on(i.EVENTS.camera.moved, function(e) {
        var t = (0,
        a.getTime)();
        null !== x.world && t - x.lastCleanup > 1e3 && (x.lastCleanup = t,
        c.renderer.unloadFarClusters()),
        O(b.tileX, b.tileY) && (0,
        d.updateClientFx)()
    }),
    s.eventSys.on(i.EVENTS.camera.zoom, function(e) {
        O(b.tileX, b.tileY) && (0,
        d.updateClientFx)()
    }),
    window.addEventListener("error", function(e) {
        z(!0);
        var t = e && e.error ? e.error.message || e.error.stack : e.message || "Unknown error occurred";
        t = (t = (0,
        a.escapeHTML)(t)).split("\n");
        for (var n = 0; n < t.length; n++)
            M(t[n]);
        d.player.rank !== i.RANK.ADMIN && (x.exceptionTimeout && clearTimeout(x.exceptionTimeout),
        x.exceptionTimeout = setTimeout(function() {
            return z(!1)
        }, 5e3))
    }),
    window.addEventListener("load", function() {
        var e;
        k.loadScr = document.getElementById("load-scr"),
        k.loadUl = document.getElementById("load-ul"),
        k.loadOptions = document.getElementById("load-options"),
        k.reconnectBtn = document.getElementById("reconnect-btn"),
        k.spinner = document.getElementById("spinner"),
        k.statusMsg = document.getElementById("status-msg"),
        k.status = document.getElementById("status"),
        k.logo = document.getElementById("logo"),
        k.xyDisplay = document.getElementById("xy-display"),
        k.devChat = document.getElementById("dev-chat"),
        k.chat = document.getElementById("chat"),
        k.devChatMessages = document.getElementById("dev-chat-messages"),
        k.chatMessages = document.getElementById("chat-messages"),
        k.playerCountDisplay = document.getElementById("playercount-display"),
        k.palette = document.getElementById("palette"),
        k.paletteColors = document.getElementById("palette-colors"),
        k.paletteCreate = document.getElementById("palette-create"),
        k.paletteInput = document.getElementById("palette-input"),
        k.paletteBg = document.getElementById("palette-bg"),
        k.animCanvas = document.getElementById("animations"),
        k.viewport = document.getElementById("viewport"),
        k.windows = document.getElementById("windows"),
        k.chatInput = document.getElementById("chat-input"),
        k.soundToggle = document.getElementById("no-sound"),
        k.hexToggle = document.getElementById("hex-coords"),
        k.helpButton = document.getElementById("help-button"),
        k.helpButton.addEventListener("click", function() {
            document.getElementById("help").className = ""
        }),
        document.getElementById("help-close").addEventListener("click", function() {
            document.getElementById("help").className = "hidden"
        }),
        e = function() {
            return s.eventSys.emit(i.EVENTS.loaded)
        }
        ,
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / i.options.fallbackFps)
        }
        ,
        Number.isInteger = Number.isInteger || function(e) {
            return Math.floor(e) === e && Math.abs(e) !== 1 / 0
        }
        ,
        Math.trunc = Math.trunc || function(e) {
            return 0 | e
        }
        ,
        (HTMLCanvasElement.prototype.toBlob = HTMLCanvasElement.prototype.toBlob || HTMLCanvasElement.prototype.msToBlob) ? e() : (0,
        a.loadScript)(n(29), e)
    }),
    s.PublicAPI.emit = s.eventSys.emit.bind(s.eventSys),
    s.PublicAPI.on = s.eventSys.on.bind(s.eventSys),
    s.PublicAPI.once = s.eventSys.once.bind(s.eventSys),
    s.PublicAPI.removeListener = s.eventSys.removeListener.bind(s.eventSys),
    s.PublicAPI.elements = k,
    s.PublicAPI.mouse = b,
    s.PublicAPI.world = N(),
    s.PublicAPI.chat = {
        send: function(e) {
            return u.net.protocol && u.net.protocol.sendMessage(e)
        },
        clear: P,
        local: C,
        get onDevMsg() {
            return x.devRecvReader
        },
        set onDevMsg(e) {
            x.devRecvReader = e
        },
        get postFormatRecvModifier() {
            return x.chatPostFormatRecvModifier
        },
        set postFormatRecvModifier(e) {
            x.chatPostFormatRecvModifier = e
        },
        get recvModifier() {
            return x.chatRecvModifier
        },
        set recvModifier(e) {
            x.chatRecvModifier = e
        },
        get sendModifier() {
            return x.chatSendModifier
        },
        set sendModifier(e) {
            x.chatSendModifier = e
        }
    },
    s.PublicAPI.sounds = E,
    s.PublicAPI.poke = function() {
        u.net.protocol && (u.net.protocol.lastSentX = 1 / 0)
    }
    ,
    s.PublicAPI.muted = []
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getTime = r,
    t.setCookie = function(e, t) {
        document.cookie = e + "=" + t + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
    }
    ,
    t.getCookie = function(e) {
        for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var o = t[n].indexOf(e + "=");
            if (0 === o || 1 === o && " " === t[n][0]) {
                var r = o + e.length + 1;
                return t[n].substring(r, t[n].length)
            }
        }
        return null
    }
    ,
    t.cookiesEnabled = i,
    t.storageEnabled = a,
    t.propertyDefaults = function(e, t) {
        if (e)
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }
    ,
    t.absMod = s,
    t.htmlToElement = function(e) {
        return c("template", {
            innerHTML: e
        }).content.firstChild
    }
    ,
    t.escapeHTML = l,
    t.mkHTML = c,
    t.loadScript = u,
    t.eventOnce = function(e, t, n) {
        for (var o = t.split(" "), r = function t(r) {
            for (var i = 0; i < o.length; i++)
                e.removeEventListener(o[i], t);
            return n()
        }, i = 0; i < o.length; i++)
            e.addEventListener(o[i], r)
    }
    ,
    t.setTooltip = d,
    t.waitFrames = h,
    t.decompress = function(e) {
        for (var t = e[1] << 8 | e[0], n = new Uint8Array(t), o = e[3] << 8 | e[2], r = 2 * o + 4, i = 0, a = r, s = 0; s < o; s++) {
            for (var l = (e[4 + 2 * s + 1] << 8 | e[4 + 2 * s]) + r; a < l; )
                n[i++] = e[a++];
            var c = e[a + 1] << 8 | e[a]
              , u = e[a + 2]
              , d = e[a + 3]
              , h = e[a + 4];
            for (a += 5; c--; )
                n[i] = u,
                n[i + 1] = d,
                n[i + 2] = h,
                i += 3
        }
        for (; a < e.length; )
            n[i++] = e[a++];
        return n
    }
    ,
    t.line = f;
    n(4);
    n(0).PublicAPI.util = {
        getTime: r,
        cookiesEnabled: i,
        storageEnabled: a,
        absMod: s,
        escapeHTML: l,
        mkHTML: c,
        setTooltip: d,
        waitFrames: h,
        line: f,
        loadScript: u
    };
    var o = Date.now();
    function r(e) {
        return e ? o = Date.now() : o
    }
    function i() {
        return navigator.cookieEnabled
    }
    function a() {
        try {
            return !!window.localStorage
        } catch (e) {
            return !1
        }
    }
    function s(e, t) {
        return (e % t + t) % t
    }
    function l(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/\//g, "&#x2F;")
    }
    function c(e, t) {
        var n = document.createElement(e);
        for (var o in t)
            n[o] = t[o];
        return n
    }
    function u(e, t) {
        document.getElementsByTagName("head")[0].appendChild(c("script", {
            type: "text/javascript",
            src: e,
            onload: t
        }))
    }
    function d(e, t) {
        var n = 10
          , o = 0
          , r = null;
        function i() {
            var i = e.getBoundingClientRect()
              , a = i.top + i.height / 2;
            r = c("span", {
                innerHTML: t,
                className: "framed tooltip whitetext"
            }),
            document.body.appendChild(r);
            var s = r.getBoundingClientRect();
            a -= s.height / 2;
            var l = i.left - s.width - n;
            l < n && (l = i.right + n),
            r.style.transform = "translate(" + Math.round(l) + "px," + Math.round(a) + "px)",
            o = 0
        }
        var a = function t(n) {
            clearTimeout(o),
            o = 0,
            e.removeEventListener("mouseleave", t),
            e.removeEventListener("click", t),
            e.removeEventListener("DOMNodeRemoved", t),
            null !== r && (r.remove(),
            r = null)
        };
        e.addEventListener("mouseenter", function(t) {
            null === r && 0 === o && (o = setTimeout(i, 500),
            e.addEventListener("click", a),
            e.addEventListener("mouseleave", a),
            e.addEventListener("DOMNodeRemoved", a))
        })
    }
    function h(e, t) {
        window.requestAnimationFrame(function() {
            return e > 0 ? h(--e, t) : t()
        })
    }
    function f(e, t, n, o, r, i) {
        for (var a, s = Math.abs(n - e), l = e < n ? 1 : -1, c = -Math.abs(o - t), u = t < o ? 1 : -1, d = s + c; i(e, t),
        e != n || t != o; )
            (a = 2 * d) >= c && (d += c,
            e += l),
            a <= s && (d += s,
            t += u)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = t.colorUtils = {
        to888: function(e, t, n) {
            return [527 * e + 23 >> 6, 259 * t + 33 >> 6, 527 * n + 23 >> 6]
        },
        to565: function(e, t, n) {
            return [249 * e + 1014 >> 11, 253 * t + 505 >> 10, 249 * n + 1014 >> 11]
        },
        u16_565: function(e, t, n) {
            return n << 11 | t << 5 | e
        },
        u24_888: function(e, t, n) {
            return n << 16 | t << 8 | e
        },
        u32_888: function(e, t, n) {
            return 4278190080 | o.u24_888(e, t, n)
        },
        u16_565_to_888: function(e) {
            return 527 * (e >> 11 & 31) + 23 >> 6 << 16 | 527 * (e >> 5 & 31) + 23 >> 6 << 8 | 527 * (31 & e) + 23 >> 6
        },
        arrFrom565: function(e) {
            return [31 & e, e >> 5 & 63, e >> 11 & 31]
        },
        toHTML: function(e) {
            return "#" + ("000000" + (e = (e >> 16 & 255 | 65280 & e | e << 16 & 16711680).toString(16))).substring(e.length)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.renderer = t.camera = t.isVisible = t.moveCameraTo = t.moveCameraBy = t.centerCameraTo = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }();
    t.drawText = y,
    t.unloadFarClusters = b;
    var r = n(1)
      , i = n(0)
      , a = n(2)
      , s = (n(6),
    n(7))
      , l = n(3)
      , c = n(4)
      , u = (n(14),
    n(10));
    function d(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    t.centerCameraTo = M,
    t.moveCameraBy = function(e, t) {
        h.x += e,
        h.y += t,
        C()
    }
    ,
    t.moveCameraTo = function(e, t) {
        h.x = e,
        h.y = t,
        C()
    }
    ,
    t.isVisible = w;
    var h = {
        x: 0,
        y: 0,
        zoom: -1
    }
      , f = t.camera = {
        get x() {
            return h.x
        },
        get y() {
            return h.y
        },
        get zoom() {
            return h.zoom
        },
        set zoom(e) {
            if ((e = Math.min(r.options.zoomLimitMax, Math.max(r.options.zoomLimitMin, e))) !== h.zoom) {
                var t = (n = Math.round(h.x + window.innerWidth / f.zoom / 2),
                o = Math.round(h.y + window.innerHeight / f.zoom / 2),
                [n, o]);
                h.zoom = e,
                M(t[0], t[1]),
                i.eventSys.emit(r.EVENTS.camera.zoom, e)
            }
            var n, o
        },
        isVisible: w
    }
      , p = {
        updateRequired: 3,
        animContext: null,
        gridShown: !0,
        gridPattern: null,
        unloadedPattern: null,
        worldBackground: null,
        minGridZoom: r.options.minGridZoom,
        updatedClusters: [],
        clusters: {},
        visibleClusters: [],
        currentFontSize: -1
    }
      , m = t.renderer = {
        rendertype: {
            ALL: 3,
            FX: 1,
            WORLD: 2
        },
        patterns: {
            get unloaded() {
                return p.unloadedPattern
            }
        },
        render: x,
        showGrid: function(e) {
            p.gridShown = e,
            x(m.rendertype.FX)
        },
        get gridShown() {
            return p.gridShown
        },
        updateCamera: C,
        unloadFarClusters: b
    };
    i.PublicAPI.camera = f,
    i.PublicAPI.renderer = m;
    var v = function() {
        function e(t, n, o, i, a, s) {
            d(this, e),
            this.data = t,
            r.options.chunkBugWorkaround && (this.changes = []),
            this.offx = n,
            this.offy = o,
            this.realwidth = s,
            this.width = i,
            this.height = a
        }
        return o(e, [{
            key: "get",
            value: function(e, t) {
                return this.data[this.offx + e + (this.offy + t) * this.realwidth]
            }
        }, {
            key: "set",
            value: function(e, t, n) {
                this.data[this.offx + e + (this.offy + t) * this.realwidth] = n,
                r.options.chunkBugWorkaround && this.changes.push([0, e, t, n])
            }
        }, {
            key: "fill",
            value: function(e) {
                for (var t = 0; t < this.height; t++)
                    for (var n = 0; n < this.width; n++)
                        this.data[this.offx + n + (this.offy + t) * this.realwidth] = e;
                r.options.chunkBugWorkaround && this.changes.push([1, 0, 0, e])
            }
        }, {
            key: "fillFromBuf",
            value: function(e) {
                for (var t = 0; t < this.height; t++)
                    for (var n = 0; n < this.width; n++)
                        this.data[this.offx + n + (this.offy + t) * this.realwidth] = e[n + t * this.width],
                        r.options.chunkBugWorkaround && this.changes.push([0, n, t, e[n + t * this.width]])
            }
        }]),
        e
    }()
      , g = function() {
        function e(t, n) {
            d(this, e),
            this.removed = !1,
            this.toUpdate = !1,
            this.shown = !1,
            this.x = t,
            this.y = n,
            this.canvas = document.createElement("canvas"),
            this.canvas.width = r.protocol.chunkSize * r.protocol.clusterChunkAmount,
            this.canvas.height = r.protocol.chunkSize * r.protocol.clusterChunkAmount,
            this.ctx = this.canvas.getContext("2d"),
            this.data = this.ctx.createImageData(this.canvas.width, this.canvas.height),
            this.u32data = new Uint32Array(this.data.data.buffer),
            this.chunks = [],
            r.options.chunkBugWorkaround && (this.currentColor = 0)
        }
        return o(e, [{
            key: "render",
            value: function() {
                this.toUpdate = !1;
                for (var e = this.chunks.length; e--; ) {
                    var t = this.chunks[e];
                    if (t.needsRedraw)
                        if (t.needsRedraw = !1,
                        r.options.chunkBugWorkaround) {
                            for (var n = t.view.changes, o = r.protocol.chunkSize, i = 0; i < n.length; i++) {
                                var a = n[i];
                                switch (this.currentColor !== a[3] && (this.currentColor = a[3],
                                this.ctx.fillStyle = c.colorUtils.toHTML(a[3])),
                                a[0]) {
                                case 0:
                                    this.ctx.fillRect(t.view.offx + a[1], t.view.offy + a[2], 1, 1);
                                    break;
                                case 1:
                                    this.ctx.fillRect(t.view.offx, t.view.offy, o, o)
                                }
                            }
                            t.view.changes = []
                        } else
                            this.ctx.putImageData(this.data, 0, 0, t.view.offx, t.view.offy, t.view.width, t.view.height)
                }
            }
        }, {
            key: "remove",
            value: function() {
                if (this.removed = !0,
                this.shown) {
                    var e = p.visibleClusters;
                    e.splice(e.indexOf(this), 1),
                    this.shown = !1
                }
                this.canvas.width = 0,
                this.u32data = this.data = null,
                delete p.clusters[this.x + "," + this.y];
                for (var t = 0; t < this.chunks.length; t++)
                    this.chunks[t].view = null,
                    this.chunks[t].remove();
                this.chunks = []
            }
        }, {
            key: "addChunk",
            value: function(e) {
                var t = e.x & r.protocol.clusterChunkAmount - 1
                  , n = e.y & r.protocol.clusterChunkAmount - 1
                  , o = r.protocol.chunkSize
                  , i = new v(this.u32data,t * o,n * o,o,o,r.protocol.clusterChunkAmount * o);
                e.tmpChunkBuf && (i.fillFromBuf(e.tmpChunkBuf),
                e.tmpChunkBuf = null),
                e.view = i,
                this.chunks.push(e),
                e.needsRedraw = !0
            }
        }, {
            key: "delChunk",
            value: function(e) {
                e.view = null;
                var t = this.chunks.indexOf(e);
                -1 !== t && this.chunks.splice(t, 1),
                this.chunks.length || this.remove()
            }
        }]),
        e
    }();
    function y(e, t, n, o, r) {
        e.strokeStyle = "#000000",
        e.fillStyle = "#FFFFFF",
        e.lineWidth = 2.5,
        e.globalAlpha = .5,
        r && (n -= e.measureText(t).width >> 1),
        e.strokeText(t, n, o),
        e.globalAlpha = 1,
        e.fillText(t, n, o)
    }
    function w(e, t, n, o) {
        var r = f.x
          , i = f.y
          , a = f.zoom
          , s = window.innerWidth
          , l = window.innerHeight;
        return e + n > r && t + o > i && e <= r + s / a && t <= i + l / a
    }
    function b() {
        var e = f.x
          , t = f.y
          , n = f.zoom
          , o = e + (window.innerWidth / n | 0) / 2
          , i = t + (window.innerHeight / n | 0) / 2
          , a = r.protocol.clusterChunkAmount * r.protocol.chunkSize;
        for (var s in p.clusters) {
            if (!w((s = p.clusters[s]).x * a, s.y * a, a, a))
                (0 | Math.abs(o / a - s.x)) + (0 | Math.abs(i / a - s.y)) > r.options.unloadDistance && s.remove()
        }
    }
    function k(e, t) {
        var n = 16 * f.x
          , o = 16 * f.y
          , r = f.zoom
          , i = p.animContext
          , a = i.canvas
          , s = e.tool;
        s || (s = u.tools.cursor);
        var l = s.cursor.width / 16 * r
          , c = s.cursor.height / 16 * r
          , d = e.x
          , h = e.y
          , m = (d - n - s.offset[0]) * (r / 16) | 0
          , v = (h - o - s.offset[1]) * (r / 16) | 0;
        if (m < -l || v < -c || m > a.width || v > a.height)
            return !0;
        if (t > 3) {
            var g = e.id
              , w = i.measureText(g).width + r / 2;
            i.globalAlpha = 1,
            i.fillStyle = e.clr,
            i.fillRect(m, v + c, w, r),
            i.globalAlpha = .2,
            i.lineWidth = 3,
            i.strokeStyle = "#000000",
            i.strokeRect(m, v + c, w, r),
            i.globalAlpha = 1,
            y(i, g, m + r / 4, v + t + c + r / 8)
        }
        return i.drawImage(s.cursor, m, v, l, c),
        d === e.endX && h === e.endY
    }
    function x(e) {
        p.updateRequired |= e
    }
    function E(e) {
        e >= p.minGridZoom ? p.gridPattern = function(e) {
            var t = document.createElement("canvas")
              , n = t.getContext("2d")
              , o = t.width = t.height = Math.round(16 * e);
            if (n.setLineDash([1]),
            n.globalAlpha = .2,
            e >= 4) {
                var r = Math.min(1, e - 4);
                r < 1 && (n.globalAlpha = .2 * r),
                n.beginPath();
                for (var i = 16; --i; )
                    n.moveTo(i * e + .5, 0),
                    n.lineTo(i * e + .5, o),
                    n.moveTo(0, i * e + .5),
                    n.lineTo(o, i * e + .5);
                n.stroke(),
                n.globalAlpha = Math.max(.2, 1 * r)
            }
            return n.beginPath(),
            n.moveTo(0, 0),
            n.lineTo(0, o),
            n.lineTo(o, o),
            n.stroke(),
            n.createPattern(t, "repeat")
        }(e) : p.gridPattern = null
    }
    function S() {
        var e = p.clusters
          , t = p.visibleClusters;
        for (var n in e) {
            n = e[n];
            var o = r.protocol.chunkSize * r.protocol.clusterChunkAmount
              , i = w(n.x * o, n.y * o, o, o);
            !i && n.shown ? (n.shown = !1,
            t.splice(t.indexOf(n), 1)) : i && !n.shown && (n.shown = !0,
            t.push(n),
            x(m.rendertype.WORLD))
        }
    }
    function T() {
        a.elements.animCanvas.width = window.innerWidth,
        a.elements.animCanvas.height = window.innerHeight;
        var e = p.animContext;
        e.imageSmoothingEnabled = !1,
        e.webkitImageSmoothingEnabled = !1,
        e.mozImageSmoothingEnabled = !1,
        e.msImageSmoothingEnabled = !1,
        e.oImageSmoothingEnabled = !1,
        p.currentFontSize = -1,
        C()
    }
    function N() {
        for (var e = f.x / r.protocol.chunkSize - 2 | 0, t = f.x / r.protocol.chunkSize + window.innerWidth / f.zoom / r.protocol.chunkSize | 0, n = f.y / r.protocol.chunkSize - 2 | 0, o = f.y / r.protocol.chunkSize + window.innerHeight / f.zoom / r.protocol.chunkSize | 0; ++e <= t; )
            for (var i = n; ++i <= o; )
                a.misc.world.loadChunk(e, i)
    }
    function C() {
        var e, t, n;
        i.eventSys.emit(r.EVENTS.camera.moved, f),
        e = h.zoom,
        t = Math.round(h.x * e) / e,
        n = Math.round(h.y * e) / e,
        h.x = t,
        h.y = n,
        S(),
        null !== a.misc.world && N(),
        x(m.rendertype.FX)
    }
    function M(e, t) {
        h.x = -window.innerWidth / f.zoom / 2 + e,
        h.y = -window.innerHeight / f.zoom / 2 + t,
        C()
    }
    i.eventSys.on(r.EVENTS.net.world.teleported, function(e, t) {
        M(e, t)
    }),
    i.eventSys.on(r.EVENTS.camera.zoom, function(e) {
        E(e),
        x(m.rendertype.FX)
    }),
    i.eventSys.on(r.EVENTS.renderer.addChunk, function(e) {
        var t = Math.floor(e.x / r.protocol.clusterChunkAmount)
          , n = Math.floor(e.y / r.protocol.clusterChunkAmount)
          , o = t + "," + n
          , i = p.clusters
          , a = i[o];
        a || (a = i[o] = new g(t,n),
        S()),
        a.addChunk(e),
        a.toUpdate || (a.toUpdate = !0,
        p.updatedClusters.push(a));
        var s = r.protocol.chunkSize;
        (a.toUpdate || w(e.x * s, e.y * s, s, s)) && x(m.rendertype.WORLD | m.rendertype.FX)
    }),
    i.eventSys.on(r.EVENTS.renderer.rmChunk, function(e) {
        var t = Math.floor(e.x / r.protocol.clusterChunkAmount) + "," + Math.floor(e.y / r.protocol.clusterChunkAmount)
          , n = p.clusters[t];
        n && (n.delChunk(e),
        n.removed || n.toUpdate || (n.toUpdate = !0,
        p.updatedClusters.push(n)))
    }),
    i.eventSys.on(r.EVENTS.renderer.updateChunk, function(e) {
        var t = Math.floor(e.x / r.protocol.clusterChunkAmount) + "," + Math.floor(e.y / r.protocol.clusterChunkAmount)
          , n = p.clusters[t];
        n && !n.toUpdate && (n.toUpdate = !0,
        p.updatedClusters.push(n));
        var o = r.protocol.chunkSize;
        w(e.x * o, e.y * o, o, o) && x(m.rendertype.WORLD | m.rendertype.FX)
    }),
    i.eventSys.on(r.EVENTS.misc.worldInitialized, function() {
        N()
    }),
    i.eventSys.once(r.EVENTS.init, function() {
        p.animContext = a.elements.animCanvas.getContext("2d", {
            alpha: !1
        }),
        window.addEventListener("resize", T),
        T(),
        f.zoom = r.options.defaultZoom,
        M(0, 0);
        var e = function(e, t) {
            var n = new Image;
            n.onload = function() {
                var e = p.animContext.createPattern(n, "repeat");
                e.width = n.width,
                e.height = n.height,
                t(e)
            }
            ,
            n.src = e
        };
        e(r.options.unloadedPatternUrl, function(e) {
            p.unloadedPattern = e
        }),
        null != r.options.backgroundUrl && e(r.options.backgroundUrl, function(e) {
            p.worldBackground = e
        }),
        i.eventSys.once(r.EVENTS.misc.toolsInitialized, function e() {
            var t;
            0 !== (t = p.updateRequired) && (p.updateRequired = 0,
            function(e) {
                var t = (0,
                l.getTime)(!0)
                  , n = f.x
                  , o = f.y
                  , i = f.zoom
                  , c = 0;
                if (e & m.rendertype.WORLD) {
                    for (var u = p.updatedClusters, d = 0; d < u.length; d++)
                        u[d].render();
                    p.updatedClusters = []
                }
                if (e & m.rendertype.FX && null !== a.misc.world) {
                    var h = p.animContext
                      , v = p.visibleClusters
                      , g = r.protocol.chunkSize * r.protocol.clusterChunkAmount
                      , y = window.innerWidth
                      , w = window.innerHeight
                      , b = (p.worldBackground,
                    -n * i % (16 * i))
                      , E = -o * i % (16 * i);
                    for (a.misc.world.allChunksLoaded() || (null == p.unloadedPattern ? h.clearRect(0, 0, h.canvas.width, h.canvas.height) : (h.translate(b, E),
                    h.fillStyle = p.unloadedPattern,
                    h.fillRect(-b, -E, h.canvas.width, h.canvas.height),
                    h.translate(-b, -E))),
                    h.lineWidth = .15625 * i,
                    h.scale(i, i),
                    d = 0; d < v.length; d++) {
                        var S = v[d]
                          , T = -(n - S.x * g)
                          , N = -(o - S.y * g)
                          , C = T < 0 ? -T : 0
                          , M = N < 0 ? -N : 0
                          , L = T < 0 ? 0 : T
                          , P = N < 0 ? 0 : N
                          , A = g - C
                          , _ = g - M;
                        _ = (_ = _ + P < w / i ? _ : w / i - P) + 1 | 0,
                        (A = (A = A + L < y / i ? A : y / i - L) + 1 | 0) > 0 && _ > 0 && h.drawImage(S.canvas, C, M, A, _, L, P, A, _)
                    }
                    for (h.scale(1 / i, 1 / i),
                    p.gridShown && p.gridPattern && (h.translate(b, E),
                    h.fillStyle = p.gridPattern,
                    h.fillRect(-b, -E, h.canvas.width, h.canvas.height),
                    h.translate(-b, -E)),
                    d = 0; d < s.activeFx.length; d++)
                        switch (s.activeFx[d].render(h, t)) {
                        case 0:
                            c |= m.rendertype.FX;
                            break;
                        case 2:
                            --d
                        }
                    h.globalAlpha = 1;
                    var R = a.misc.world.players
                      , z = .625 * i | 0;
                    if (p.currentFontSize != z && (h.font = z + "px sans-serif",
                    p.currentFontSize = z),
                    r.options.showPlayers)
                        for (var O in R)
                            k(R[O], z) || (c |= m.rendertype.FX)
                }
                x(c)
            }(t)),
            window.requestAnimationFrame(e)
        })
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.player = t.networkRankVerification = t.undoHistory = t.updateClientFx = void 0,
    t.shouldUpdate = function() {
        return y ? !(y = !1) : y
    }
    ,
    t.getDefaultTool = S;
    var o = n(0)
      , r = n(1)
      , i = n(3)
      , a = n(2)
      , s = n(4)
      , l = n(5)
      , c = (n(13),
    n(10))
      , u = n(7)
      , d = n(8);
    n(9);
    t.updateClientFx = T;
    var h = null
      , f = [[228, 166, 114], [184, 111, 80], [116, 63, 57], [63, 40, 50], [158, 40, 53], [229, 59, 68], [251, 146, 43], [255, 231, 98], [99, 198, 77], [50, 115, 69], [25, 61, 63], [79, 103, 129], [175, 191, 210], [255, 255, 255], [44, 232, 244], [4, 132, 209]]
      , p = 0
      , m = (t.undoHistory = [],
    new u.Fx(u.PLAYERFX.NONE,{
        isLocalPlayer: !0,
        player: {
            get tileX() {
                return a.mouse.tileX
            },
            get tileY() {
                return a.mouse.tileY
            },
            get x() {
                return a.mouse.worldX
            },
            get y() {
                return a.mouse.worldY
            },
            get htmlRgb() {
                return b.htmlRgb
            },
            get tool() {
                return b.tool
            }
        }
    }));
    m.setVisibleFunc(function() {
        return a.mouse.insideViewport && a.mouse.validTile
    });
    var v = t.networkRankVerification = [r.RANK.NONE]
      , g = r.RANK.NONE
      , y = !1
      , w = [null, ""]
      , b = t.player = {
        get paletteIndex() {
            return p
        },
        set paletteIndex(e) {
            p = (0,
            i.absMod)(e, f.length),
            x()
        },
        get htmlRgb() {
            var e = b.selectedColor;
            if (w[0] === e)
                return w[1];
            var t = s.colorUtils.toHTML(s.colorUtils.u24_888(e[0], e[1], e[2]));
            return w[0] = e,
            w[1] = t,
            t
        },
        get selectedColor() {
            return f[p]
        },
        set selectedColor(e) {
            E(e)
        },
        get palette() {
            return f
        },
        get rank() {
            return g
        },
        get tool() {
            return h
        },
        set tool(e) {
            !function(e) {
                var t = c.tools[e];
                if (!t || t === h || t.rankRequired > b.rank)
                    return !1;
                h && h.call("deselect");
                h = t,
                a.mouse.cancelMouseDown(),
                t.call("select"),
                (0,
                c.updateToolWindow)(e),
                a.mouse.validClick = !1,
                m.setRenderer(t.fxRenderer),
                y = !0,
                T()
            }(e)
        },
        get toolId() {
            return d.net.currentServer.proto.tools.id[h.id]
        },
        get tools() {
            return c.tools
        },
        get id() {
            return d.net.protocol.id
        }
    };
    function k() {
        T(),
        a.elements.paletteColors.style.transform = "translateY(" + 40 * -p + "px)",
        y = !0
    }
    function x() {
        var e = a.elements.paletteColors;
        e.innerHTML = "";
        for (var t = function(e) {
            return function() {
                p = e,
                k()
            }
        }, n = function(e) {
            return function() {
                f.length > 1 && (f.splice(e, 1),
                (p > e || p === f.length) && --p,
                x(),
                k())
            }
        }, o = 0; o < f.length; o++) {
            var r = document.createElement("div")
              , l = f[o];
            r.style.backgroundColor = "rgb(" + l[0] + "," + l[1] + "," + l[2] + ")",
            (0,
            i.setTooltip)(r, s.colorUtils.toHTML(s.colorUtils.u24_888(l[0], l[1], l[2]))),
            r.onmouseup = function(e) {
                switch (e.button) {
                case 0:
                    this.sel();
                    break;
                case 2:
                    this.del()
                }
                return !1
            }
            .bind({
                sel: t(o),
                del: n(o)
            }),
            r.oncontextmenu = function() {
                return !1
            }
            ,
            e.appendChild(r)
        }
        k()
    }
    function E(e) {
        for (var t = 0; t < f.length; t++)
            if (f[t][0] === e[0] && f[t][1] === e[1] && f[t][2] === e[2])
                return p = t,
                void k();
        p = f.length,
        f.push(e),
        x()
    }
    function S() {
        for (var e in c.tools)
            if (c.tools[e].rankRequired <= b.rank)
                return e;
        return null
    }
    function T() {
        l.renderer.render(l.renderer.rendertype.FX)
    }
    o.PublicAPI.player = b,
    o.eventSys.once(r.EVENTS.misc.toolsInitialized, function() {
        b.tool = S()
    }),
    o.eventSys.on(r.EVENTS.net.sec.rank, function(e) {
        if (!(v[0] < e)) {
            switch (g = e,
            console.log("Got rank:", e),
            d.net.isConnected() && d.net.protocol.ws.send(new Uint8Array([e]).buffer),
            e) {
            case r.RANK.USER:
            case r.RANK.NONE:
                (0,
                a.showDevChat)(!1),
                (0,
                a.showPlayerList)(!1),
                (0,
                a.revealSecrets)(!1);
                break;
            case r.RANK.MODERATOR:
            case r.RANK.ADMIN:
                (0,
                a.showDevChat)(!0),
                (0,
                a.showPlayerList)(!0),
                (0,
                a.revealSecrets)(!0)
            }
            (0,
            c.updateToolbar)()
        }
    }),
    o.eventSys.once(r.EVENTS.init, function() {
        a.elements.paletteInput.onclick = function() {
            var e = b.selectedColor;
            this.value = s.colorUtils.toHTML(s.colorUtils.u24_888(e[0], e[1], e[2]))
        }
        ,
        a.elements.paletteInput.onchange = function() {
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.value);
            E([parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)])
        }
        ,
        a.elements.paletteCreate.onclick = function() {
            return a.elements.paletteInput.click()
        }
        ,
        (0,
        i.setTooltip)(a.elements.paletteCreate, "Add color"),
        x()
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Fx = t.activeFx = t.WORLDFX = t.PLAYERFX = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , r = n(4)
      , i = n(1)
      , a = n(3)
      , s = n(0)
      , l = n(5)
      , c = n(6);
    n(2);
    var u = t.PLAYERFX = {
        NONE: null,
        RECT_SELECT_ALIGNED: function(e, t) {
            return function(n, o, r) {
                var i = n.extra.player.x
                  , a = n.extra.player.y
                  , s = (Math.floor(i / (16 * e)) * e - l.camera.x) * l.camera.zoom
                  , c = (Math.floor(a / (16 * e)) * e - l.camera.y) * l.camera.zoom;
                return o.globalAlpha = .8,
                o.strokeStyle = t || n.extra.player.htmlRgb,
                o.strokeRect(s, c, l.camera.zoom * e, l.camera.zoom * e),
                1
            }
        }
    }
      , d = t.WORLDFX = {
        NONE: null,
        RECT_FADE_ALIGNED: function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0,
            a.getTime)();
            return function(r, a, s) {
                var u = 1 - (s - o) / 1e3;
                if (u <= 0)
                    return r.delete(),
                    2;
                var d = (t * e - l.camera.x) * l.camera.zoom
                  , h = (n * e - l.camera.y) * l.camera.zoom
                  , f = l.camera.zoom * e;
                if (a.globalAlpha = u,
                a.strokeStyle = r.extra.htmlRgb || "#000000",
                a.strokeRect(d, h, f, f),
                i.options.enableIdView && c.player.rank >= i.RANK.MODERATOR && l.camera.zoom >= 8 && r.extra.tag) {
                    d += f;
                    var p = r.extra.tag;
                    a.measureText(p).width;
                    a.fillStyle = "#FFFFFF",
                    a.strokeStyle = "#000000",
                    a.strokeText(p, d, h),
                    a.fillText(p, d, h)
                }
                return 0
            }
        }
    }
      , h = t.activeFx = []
      , f = t.Fx = function() {
        function e(t, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.visible = !0,
            this.renderFunc = t,
            this.extra = n || {},
            h.push(this)
        }
        return o(e, [{
            key: "render",
            value: function(e, t) {
                return this.renderFunc && this.visible ? this.renderFunc(this, e, t) : 1
            }
        }, {
            key: "setVisibleFunc",
            value: function(e) {
                Object.defineProperty(this, "visible", {
                    get: e
                })
            }
        }, {
            key: "setVisible",
            value: function(e) {
                this.visible = e
            }
        }, {
            key: "setRenderer",
            value: function(e) {
                this.renderFunc = e
            }
        }, {
            key: "update",
            value: function(e) {
                this.extra = e
            }
        }, {
            key: "delete",
            value: function() {
                var e = h.indexOf(this);
                -1 !== e && h.splice(e, 1)
            }
        }]),
        e
    }();
    s.PublicAPI.fx = {
        world: d,
        player: u,
        class: f
    },
    s.eventSys.on(i.EVENTS.net.world.tilesUpdated, function(e) {
        (0,
        a.getTime)(!0);
        for (var t = !1, n = 0; n < e.length; n++) {
            var o = e[n];
            l.camera.isVisible(o.x, o.y, 1, 1) && (new f(d.RECT_FADE_ALIGNED(1, o.x, o.y),{
                htmlRgb: r.colorUtils.toHTML(16777215 ^ o.rgb),
                tag: "" + o.id
            }),
            t = !0)
        }
        t && l.renderer.render(l.renderer.rendertype.FX)
    }),
    s.eventSys.on(i.EVENTS.net.chunk.set, function(e, t, n) {
        var o = e * i.protocol.chunkSize
          , r = t * i.protocol.chunkSize;
        l.camera.isVisible(o, r, i.protocol.chunkSize, i.protocol.chunkSize) && (new f(d.RECT_FADE_ALIGNED(16, e, t)),
        l.renderer.render(l.renderer.rendertype.FX))
    }),
    s.eventSys.on(i.EVENTS.net.chunk.lock, function(e, t, n, o) {
        var r = e * i.protocol.chunkSize
          , a = t * i.protocol.chunkSize;
        !o && l.camera.isVisible(r, a, i.protocol.chunkSize, i.protocol.chunkSize) && (new f(d.RECT_FADE_ALIGNED(16, e, t),{
            htmlRgb: n ? "#00FF00" : "#FF0000"
        }),
        l.renderer.render(l.renderer.rendertype.FX))
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.net = void 0;
    var o = n(1)
      , r = n(0)
      , i = t.net = {
        currentServer: null,
        protocol: null,
        isConnected: function() {
            return null !== i.protocol && i.protocol.isConnected()
        },
        connect: function(e, t) {
            r.eventSys.emit(o.EVENTS.net.connecting, e),
            i.connection = new r.AnnoyingAPI.ws(e.url),
            i.connection.binaryType = "arraybuffer",
            i.currentServer = e,
            i.protocol = new e.proto.class(i.connection,t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }();
    t.Bucket = function() {
        function e(t, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.lastCheck = Date.now(),
            this.allowance = t,
            this.rate = t,
            this.time = n,
            this.infinite = !1
        }
        return o(e, [{
            key: "canSpend",
            value: function(e) {
                return !!this.infinite || (this.allowance += (Date.now() - this.lastCheck) / 1e3 * (this.rate / this.time),
                this.lastCheck = Date.now(),
                this.allowance > this.rate && (this.allowance = this.rate),
                !(this.allowance < e) && (this.allowance -= e,
                !0))
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.toolsApi = t.toolsWindow = t.tools = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }();
    t.updateToolWindow = function(e) {
        if (!m)
            return;
        for (var t = p[e], n = m.container.children, o = 0; o < n.length; o++) {
            var r = n[o]
              , i = r.id.split("-")[1] === e;
            r.className = i ? "selected" : "",
            r.children[0].style.backgroundImage = "url(" + (i ? s.cursors.slotset : s.cursors.set.src) + ")"
        }
        h.elements.viewport.style.cursor = "url(" + t.cursorblob + ") " + t.offset[0] + " " + t.offset[1] + ", pointer"
    }
    ,
    t.updateToolbar = g,
    t.showToolsWindow = y,
    t.addTool = w;
    var r = n(0)
      , i = n(1)
      , a = n(3)
      , s = n(13)
      , l = n(8)
      , c = n(6)
      , u = n(5)
      , d = n(11)
      , h = n(2)
      , f = n(7);
    var p = t.tools = {}
      , m = t.toolsWindow = null
      , v = !1;
    function g() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
        if (e) {
            var t = e.container
              , n = function(e) {
                return function(t) {
                    c.player.tool = e,
                    h.sounds.play(h.sounds.click)
                }
            };
            for (var o in t.innerHTML = "",
            p) {
                var r = p[o];
                if (c.player.rank >= r.rankRequired) {
                    var i = document.createElement("button")
                      , l = document.createElement("div");
                    (0,
                    a.setTooltip)(i, r.name + " tool"),
                    i.id = "tool-" + o,
                    i.addEventListener("click", n(o)),
                    r === c.player.tool ? (l.style.backgroundImage = "url(" + s.cursors.slotset + ")",
                    i.className = "selected") : l.style.backgroundImage = "url(" + s.cursors.set.src + ")",
                    l.style.backgroundPosition = r.setposition,
                    i.appendChild(l),
                    t.appendChild(i)
                }
            }
        }
    }
    function y(e) {
        v !== e && (e && m ? d.windowSys.addWindow(m) : m && d.windowSys.delWindow(m),
        v = e)
    }
    function w(e) {
        e.id = e.name.toLowerCase(),
        p[e.id] = e,
        g()
    }
    var b = function() {
        function e(t, n, o, r, i) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.name = t,
            this.id = null,
            this.fxRenderer = o,
            this.cursorblob = n.img.shadowblob,
            this.cursor = n.img.shadowed,
            this.setposition = 36 * -n.imgpos[0] + "px " + 36 * -n.imgpos[1] + "px",
            this.offset = n.hotspot,
            this.rankRequired = r,
            this.extra = {},
            this.events = {
                mouseup: null,
                mousedown: null,
                mousemove: null,
                touchstart: null,
                touchmove: null,
                touchend: null,
                touchcancel: null,
                select: null,
                deselect: null,
                keydown: null,
                keyup: null,
                scroll: null,
                tick: null
            },
            i(this)
        }
        return o(e, [{
            key: "setFxRenderer",
            value: function(e) {
                this.fxRenderer = e
            }
        }, {
            key: "isEventDefined",
            value: function(e) {
                return e in this.events
            }
        }, {
            key: "setEvent",
            value: function(e, t) {
                for (var n = e.split(" "), o = 0; o < n.length; o++)
                    this.events[n[o]] = t || null
            }
        }, {
            key: "call",
            value: function(e, t) {
                var n = this.events[e];
                return n ? n.apply(this, t) : 0 === e.indexOf("touch") && this.defaultTouchHandler(e.slice(5), t)
            }
        }, {
            key: "defaultTouchHandler",
            value: function(e, t) {
                var n = t[0]
                  , o = t[1]
                  , r = {
                    start: this.events.mousedown,
                    move: this.events.mousemove,
                    end: this.events.mouseup,
                    cancel: this.events.mouseup
                }[e];
                if (r)
                    for (var i = o.changedTouches, a = 0; a < i.length; a++)
                        n.x = i[a].pageX,
                        n.y = i[a].pageY,
                        r.apply(this, t)
            }
        }]),
        e
    }();
    t.toolsApi = r.PublicAPI.tools = {
        class: b,
        addToolObject: w,
        updateToolbar: g,
        allTools: p
    };
    r.eventSys.once(i.EVENTS.misc.toolsRendered, function() {
        w(new b("Cursor",s.cursors.cursor,f.PLAYERFX.RECT_SELECT_ALIGNED(1),i.RANK.USER,function(e) {
            var t, n;
            e.setEvent("mousedown mousemove", function(e, o) {
                var r = 3
                  , i = 2 === e.buttons ? [255, 255, 255] : c.player.selectedColor;
                switch (e.buttons) {
                case 1:
                case 2:
                    t && n || (t = e.tileX,
                    n = e.tileY),
                    (0,
                    a.line)(t, n, e.tileX, e.tileY, 1, function(e, t) {
                        var n = h.misc.world.getPixel(e, t);
                        null === n || i[0] === n[0] && i[1] === n[1] && i[2] === n[2] || h.misc.world.setPixel(e, t, i)
                    }),
                    t = e.tileX,
                    n = e.tileY;
                    break;
                case 4:
                    if (o.ctrlKey)
                        r |= 4,
                        (i = h.misc.world.getPixel(e.tileX, e.tileY)) && (c.player.selectedColor = i)
                }
                return r
            }),
            e.setEvent("mouseup", function(e) {
                t = null,
                n = null
            })
        }
        )),
        w(new b("Move",s.cursors.move,f.PLAYERFX.NONE,i.RANK.NONE,function(e) {
            e.setEvent("mousemove", function(e, t) {
                if (0 !== e.buttons)
                    return n = e.worldX,
                    o = e.worldY,
                    r = e.mouseDownWorldX,
                    i = e.mouseDownWorldY,
                    (0,
                    u.moveCameraBy)((r - n) / 16, (i - o) / 16),
                    e.buttons;
                var n, o, r, i
            }),
            e.setEvent("scroll", function(e, t, n) {
                if (!n.ctrlKey) {
                    var o = Math.max(-500, Math.min(16 * t.spinX, 500))
                      , r = Math.max(-500, Math.min(16 * t.spinY, 500))
                      , i = u.camera.zoom;
                    return (0,
                    u.moveCameraBy)(o / i, r / i),
                    !0
                }
            })
        }
        )),
        w(new b("Pipette",s.cursors.pipette,f.PLAYERFX.NONE,i.RANK.NONE,function(e) {
            e.setEvent("mousedown mousemove", function(e, t) {
                if (0 !== e.buttons && !(4 & e.buttons)) {
                    var n = h.misc.world.getPixel(e.tileX, e.tileY);
                    return n && (c.player.selectedColor = n),
                    e.buttons
                }
            })
        }
        )),
        w(new b("Eraser",s.cursors.erase,f.PLAYERFX.RECT_SELECT_ALIGNED(16),i.RANK.MODERATOR,function(e) {
            function t(e, t, n) {
                var o = n[2] << 16 | n[1] << 8 | n[0]
                  , r = h.misc.world.getChunkAt(e, t);
                if (r) {
                    var a = !0;
                    e: for (var s = 0; s < i.protocol.chunkSize; s++)
                        for (var c = 0; c < i.protocol.chunkSize; c++)
                            if ((16777215 & r.get(c, s)) != o) {
                                a = !1;
                                break e
                            }
                    a || l.net.protocol.clearChunk(e, t, n) && r.set(o)
                }
            }
            e.setEvent("mousedown mousemove", function(e, n) {
                return 1 & e.buttons ? (t(Math.floor(e.tileX / i.protocol.chunkSize), Math.floor(e.tileY / i.protocol.chunkSize), c.player.selectedColor),
                1) : 2 & e.buttons ? (t(Math.floor(e.tileX / i.protocol.chunkSize), Math.floor(e.tileY / i.protocol.chunkSize), [255, 255, 255]),
                1) : void 0
            })
        }
        )),
        w(new b("Zoom",s.cursors.zoom,f.PLAYERFX.NONE,i.RANK.NONE,function(e) {
            function t(e, t) {
                var n = u.camera.zoom
                  , o = u.camera.zoom
                  , r = 0
                  , a = 0
                  , s = window.innerWidth
                  , l = window.innerHeight;
                1 === t ? (o *= 1 + i.options.zoomStrength,
                r = (e.x - s / 2) / o,
                a = (e.y - l / 2) / o) : 2 === t ? (o /= 1 + i.options.zoomStrength,
                r = (e.x - s / 2) * (3 / n - 2 / o),
                a = (e.y - l / 2) * (3 / n - 2 / o)) : 3 === t && (o = i.options.defaultZoom),
                o = Math.round(o),
                u.camera.zoom = o,
                u.camera.zoom !== n && (0,
                u.moveCameraBy)(r, a)
            }
            e.setEvent("mousedown", function(e, n) {
                t(e, e.buttons)
            }),
            e.setEvent("touchstart", function(t, n) {
                e.extra.maxTouches = Math.max(e.extra.maxTouches || 0, n.touches.length)
            }),
            e.setEvent("touchend", function(n, o) {
                0 === o.touches.length && (e.extra.maxTouches > 1 && t(n, e.extra.maxTouches),
                e.extra.maxTouches = 0)
            })
        }
        )),
        w(new b("Export",s.cursors.select,f.PLAYERFX.NONE,i.RANK.NONE,function(e) {
            e.setFxRenderer(function(t, n, o) {
                if (!t.extra.isLocalPlayer)
                    return 1;
                var r = t.extra.player.x
                  , i = t.extra.player.y
                  , a = (Math.floor(r / 16) - u.camera.x) * u.camera.zoom
                  , s = (Math.floor(i / 16) - u.camera.y) * u.camera.zoom
                  , l = n.lineWidth;
                if (n.lineWidth = 1,
                e.extra.end) {
                    var c = e.extra.start
                      , d = e.extra.end
                      , h = (r = (c[0] - u.camera.x) * u.camera.zoom + .5,
                    i = (c[1] - u.camera.y) * u.camera.zoom + .5,
                    d[0] - c[0])
                      , f = d[1] - c[1];
                    n.beginPath(),
                    n.rect(r, i, h * u.camera.zoom, f * u.camera.zoom),
                    n.globalAlpha = 1,
                    n.strokeStyle = "#FFFFFF",
                    n.stroke(),
                    n.setLineDash([3, 4]),
                    n.strokeStyle = "#000000",
                    n.stroke(),
                    n.globalAlpha = .25 + Math.sin(o / 500) / 4,
                    n.fillStyle = u.renderer.patterns.unloaded,
                    n.fill(),
                    n.setLineDash([]);
                    var p = n.font;
                    n.font = "16px sans-serif";
                    var m = (e.extra.clicking ? "" : "Right click to screenshot ") + "(" + Math.abs(h) + "x" + Math.abs(f) + ")"
                      , v = window.innerWidth >> 1
                      , g = window.innerHeight >> 1;
                    return v = Math.max(r, Math.min(v, r + h * u.camera.zoom)),
                    g = Math.max(i, Math.min(g, i + f * u.camera.zoom)),
                    (0,
                    u.drawText)(n, m, v, g, !0),
                    n.font = p,
                    n.lineWidth = l,
                    0
                }
                return n.beginPath(),
                n.moveTo(0, s + .5),
                n.lineTo(window.innerWidth, s + .5),
                n.moveTo(a + .5, 0),
                n.lineTo(a + .5, window.innerHeight),
                n.globalAlpha = 1,
                n.strokeStyle = "#FFFFFF",
                n.stroke(),
                n.setLineDash([3]),
                n.strokeStyle = "#000000",
                n.stroke(),
                n.setLineDash([]),
                n.lineWidth = l,
                1
            }),
            e.extra.start = null,
            e.extra.end = null,
            e.extra.clicking = !1,
            e.setEvent("mousedown", function(t, n) {
                var o = e.extra.start
                  , r = e.extra.end
                  , i = function() {
                    return t.tileX >= o[0] && t.tileX < r[0] && t.tileY >= o[1] && t.tileY < r[1]
                };
                if (1 !== t.buttons || e.extra.end) {
                    if (1 === t.buttons && e.extra.end)
                        if (i()) {
                            var s = t.tileX
                              , l = t.tileY;
                            e.setEvent("mousemove", function(t, n) {
                                var i = t.tileX - s
                                  , a = t.tileY - l;
                                e.extra.start = [o[0] + i, o[1] + a],
                                e.extra.end = [r[0] + i, r[1] + a]
                            });
                            var c = function() {
                                e.setEvent("mouseup deselect mousemove", null)
                            };
                            e.setEvent("deselect", c),
                            e.setEvent("mouseup", function(e, t) {
                                1 & e.buttons || c()
                            })
                        } else
                            e.extra.start = null,
                            e.extra.end = null;
                    else if (2 === t.buttons && e.extra.end && i()) {
                        e.extra.start = null,
                        e.extra.end = null;
                        (function(e, t, n, o, r) {
                            var i = document.createElement("canvas");
                            i.width = n,
                            i.height = o;
                            for (var a = i.getContext("2d"), s = a.createImageData(n, o), l = t; l < t + o; l++)
                                for (var c = e; c < e + n; c++) {
                                    var u = h.misc.world.getPixel(c, l);
                                    u && (s.data[4 * ((l - t) * n + (c - e))] = u[0],
                                    s.data[4 * ((l - t) * n + (c - e)) + 1] = u[1],
                                    s.data[4 * ((l - t) * n + (c - e)) + 2] = u[2],
                                    s.data[4 * ((l - t) * n + (c - e)) + 3] = 255)
                                }
                            a.putImageData(s, 0, 0),
                            i.toBlob(r)
                        }
                        )(o[0], o[1], r[0] - o[0], r[1] - o[1], function(e) {
                            var t = URL.createObjectURL(e)
                              , n = new Image;
                            n.onload = function() {
                                d.windowSys.addWindow(new d.GUIWindow("Resulting image",{
                                    centerOnce: !0,
                                    closeable: !0
                                },function(e) {
                                    var t = ["width", "height"];
                                    n.width > n.height && t.reverse();
                                    var o = n[t[0]] / n[t[1]]
                                      , r = n[t[1]] >= 128 ? 256 : 128;
                                    n[t[0]] = o * r,
                                    n[t[1]] = r,
                                    e.container.classList.add("centeredChilds");
                                    e.addObj(n);
                                    (0,
                                    a.setTooltip)(n, "Right click to copy/save!")
                                }
                                ))
                            }
                            ,
                            n.src = t
                        })
                    }
                } else {
                    e.extra.start = [t.tileX, t.tileY],
                    e.extra.clicking = !0,
                    e.setEvent("mousemove", function(t, n) {
                        if (e.extra.start && 1 === t.buttons)
                            return e.extra.end = [t.tileX, t.tileY],
                            1
                    });
                    var f = function() {
                        e.setEvent("mousemove mouseup deselect", null),
                        e.extra.clicking = !1;
                        var t = e.extra.start
                          , n = e.extra.end;
                        if (n) {
                            if (t[0] !== n[0] && t[1] !== n[1] || (e.extra.start = null,
                            e.extra.end = null),
                            t[0] > n[0]) {
                                var o = n[0];
                                n[0] = t[0],
                                t[0] = o
                            }
                            if (t[1] > n[1]) {
                                o = n[1];
                                n[1] = t[1],
                                t[1] = o
                            }
                        }
                        u.renderer.render(u.renderer.rendertype.FX)
                    };
                    e.setEvent("deselect", f),
                    e.setEvent("mouseup", function(e, t) {
                        1 & e.buttons || f()
                    })
                }
            })
        }
        )),
        w(new b("Fill",s.cursors.fill,f.PLAYERFX.NONE,i.RANK.USER,function(e) {
            e.extra.tickAmount = 9;
            var t = []
              , n = null
              , o = f.PLAYERFX.RECT_SELECT_ALIGNED(1);
            function r() {
                var o = function(e, t) {
                    return e && t && e[0] === t[0] && e[1] === t[1] && e[2] === t[2]
                }
                  , r = function(e, r) {
                    return !!o(h.misc.world.getPixel(e, r), n) && (t.unshift([e, r]),
                    !0)
                };
                if (t.length && n) {
                    var i = c.player.selectedColor
                      , a = 0
                      , s = e.extra.tickAmount;
                    h.keysDown[17] && (s *= 3);
                    for (a = 0; a < s && t.length; a++) {
                        var l = t.pop()
                          , u = l[0]
                          , d = l[1]
                          , f = h.misc.world.getPixel(u, d);
                        if (o(f, n) && !o(f, i)) {
                            if (!h.misc.world.setPixel(u, d, i)) {
                                t.push(l);
                                break
                            }
                            var p = r(u, d - 1)
                              , m = r(u, d + 1)
                              , v = r(u - 1, d)
                              , g = r(u + 1, d);
                            p && v && r(u - 1, d - 1),
                            p && g && r(u + 1, d - 1),
                            m && v && r(u - 1, d + 1),
                            m && g && r(u + 1, d + 1)
                        }
                    }
                }
            }
            e.setFxRenderer(function(e, r, i) {
                r.globalAlpha = .8,
                r.strokeStyle = e.extra.player.htmlRgb;
                var a = u.camera.zoom;
                if (n && e.extra.isLocalPlayer) {
                    r.beginPath();
                    for (var s = 0; s < t.length; s++)
                        r.rect((t[s][0] - u.camera.x) * a, (t[s][1] - u.camera.y) * a, a, a);
                    r.stroke()
                } else
                    o(e, r, i)
            }),
            e.setEvent("mousedown", function(o) {
                4 & o.buttons || (n = h.misc.world.getPixel(o.tileX, o.tileY)) && (t.push([o.tileX, o.tileY]),
                e.setEvent("tick", r))
            }),
            e.setEvent("mouseup deselect", function(o) {
                o && 1 & o.buttons || (n = null,
                t = [],
                e.setEvent("tick", null))
            })
        }
        )),
        w(new b("Line",s.cursors.wand,f.PLAYERFX.NONE,i.RANK.USER,function(e) {
            var t = null
              , n = null
              , o = [];
            function r(e, t, n, o, r) {
                for (var i, a = Math.abs(n - e), s = e < n ? 1 : -1, l = -Math.abs(o - t), c = t < o ? 1 : -1, u = a + l; r(e, t),
                e != n || t != o; )
                    (i = 2 * u) >= l && (u += l,
                    e += s),
                    i <= a && (u += a,
                    t += c)
            }
            var a = f.PLAYERFX.RECT_SELECT_ALIGNED(1);
            function s() {
                for (var r = 0; r < 3 && o.length; r++) {
                    var i = o.pop()
                      , a = h.misc.world.getPixel(i[0], i[1])
                      , s = c.player.selectedColor;
                    if ((a[0] != s[0] || a[1] != s[1] || a[2] != s[2]) && !h.misc.world.setPixel(i[0], i[1], c.player.selectedColor)) {
                        o.push(i);
                        break
                    }
                }
                if (!o.length)
                    return t = null,
                    n = null,
                    void e.setEvent("tick", null)
            }
            e.setFxRenderer(function(e, o, i) {
                o.globalAlpha = .8,
                o.strokeStyle = e.extra.player.htmlRgb;
                u.camera.zoom;
                t && n && e.extra.isLocalPlayer ? (o.beginPath(),
                r(t[0], t[1], n[0], n[1], function(e, t) {
                    o.rect((e - u.camera.x) * u.camera.zoom, (t - u.camera.y) * u.camera.zoom, u.camera.zoom, u.camera.zoom)
                }),
                o.stroke()) : a(e, o, i)
            }),
            e.setEvent("mousedown", function(r) {
                4 & r.buttons || (o = [],
                e.setEvent("tick", null),
                t = [r.tileX, r.tileY],
                n = [r.tileX, r.tileY])
            }),
            e.setEvent("mousemove", function(e) {
                o.length || (n = [e.tileX, e.tileY])
            }),
            e.setEvent("mouseup", function(a) {
                if (!(3 & a.buttons || o.length)) {
                    if (n = [a.tileX, a.tileY],
                    !t)
                        return void (n = null);
                    c.player.rank == i.RANK.ADMIN ? (r(t[0], t[1], n[0], n[1], function(e, t) {
                        h.misc.world.setPixel(e, t, c.player.selectedColor)
                    }),
                    t = null,
                    n = null) : (r(t[0], t[1], n[0], n[1], function(e, t) {
                        o.push([e, t])
                    }),
                    e.setEvent("tick", s))
                }
            }),
            e.setEvent("deselect", function(r) {
                o = [],
                t = null,
                n = null,
                e.setEvent("tick", null)
            })
        }
        )),
        w(new b("Protect",s.cursors.shield,f.PLAYERFX.RECT_SELECT_ALIGNED(16, "#000000"),i.RANK.MODERATOR,function(e) {
            e.setFxRenderer(function(e, t, n) {
                var o = e.extra.player.x
                  , r = e.extra.player.y
                  , a = (16 * Math.floor(o / 256) - u.camera.x) * u.camera.zoom
                  , s = (16 * Math.floor(r / 256) - u.camera.y) * u.camera.zoom;
                t.globalAlpha = .5;
                var l = Math.floor(e.extra.player.tileX / i.protocol.chunkSize)
                  , c = Math.floor(e.extra.player.tileY / i.protocol.chunkSize)
                  , d = h.misc.world.getChunkAt(l, c);
                return d && (t.fillStyle = d.locked ? "#00FF00" : "#FF0000",
                t.fillRect(a, s, 16 * u.camera.zoom, 16 * u.camera.zoom)),
                1
            }),
            e.setEvent("mousedown mousemove", function(e) {
                var t = Math.floor(e.tileX / i.protocol.chunkSize)
                  , n = Math.floor(e.tileY / i.protocol.chunkSize)
                  , o = h.misc.world.getChunkAt(t, n);
                switch (e.buttons) {
                case 1:
                    o.locked || l.net.protocol.protectChunk(t, n, 1);
                    break;
                case 2:
                    o.locked && l.net.protocol.protectChunk(t, n, 0)
                }
            })
        }
        )),
        w(new b("Area Protect",s.cursors.selectprotect,f.PLAYERFX.NONE,i.RANK.MODERATOR,function(e) {
            e.setFxRenderer(function(t, n, o) {
                if (!t.extra.isLocalPlayer)
                    return 1;
                var r = t.extra.player.x
                  , a = t.extra.player.y
                  , s = (Math.round(r / 256) * i.protocol.chunkSize - u.camera.x) * u.camera.zoom
                  , l = (Math.round(a / 256) * i.protocol.chunkSize - u.camera.y) * u.camera.zoom
                  , c = n.lineWidth;
                if (n.lineWidth = 1,
                e.extra.end) {
                    var d = e.extra.start
                      , h = e.extra.end
                      , f = (r = (d[0] * i.protocol.chunkSize - u.camera.x) * u.camera.zoom + .5,
                    a = (d[1] * i.protocol.chunkSize - u.camera.y) * u.camera.zoom + .5,
                    h[0] - d[0])
                      , p = h[1] - d[1]
                      , m = f * u.camera.zoom * i.protocol.chunkSize
                      , v = p * u.camera.zoom * i.protocol.chunkSize;
                    n.beginPath(),
                    n.rect(r, a, m, v),
                    n.globalAlpha = 1,
                    n.strokeStyle = "#FFFFFF",
                    n.stroke(),
                    n.setLineDash([3, 4]),
                    n.strokeStyle = "#000000",
                    n.stroke(),
                    e.extra.isSure && (n.globalAlpha = .6,
                    n.fillStyle = "#00EE00",
                    n.fill()),
                    n.globalAlpha = .25 + Math.sin(o / 500) / 4,
                    n.fillStyle = u.renderer.patterns.unloaded,
                    n.fill(),
                    n.setLineDash([]);
                    var g = n.font;
                    n.font = "16px sans-serif";
                    var y = (e.extra.isSure ? "Click again to confirm. " : e.extra.clicking ? "" : "Left/Right click to add/remove protection, respectively. ") + "(" + Math.abs(f) + "x" + Math.abs(p) + ")"
                      , w = window.innerWidth >> 1
                      , b = window.innerHeight >> 1;
                    return w = Math.max(r, Math.min(w, r + m)),
                    b = Math.max(a, Math.min(b, a + v)),
                    (0,
                    u.drawText)(n, y, w, b, !0),
                    n.font = g,
                    n.lineWidth = c,
                    0
                }
                return n.beginPath(),
                n.moveTo(0, l + .5),
                n.lineTo(window.innerWidth, l + .5),
                n.moveTo(s + .5, 0),
                n.lineTo(s + .5, window.innerHeight),
                n.globalAlpha = 1,
                n.strokeStyle = "#FFFFFF",
                n.stroke(),
                n.setLineDash([3]),
                n.strokeStyle = "#000000",
                n.stroke(),
                n.setLineDash([]),
                n.lineWidth = c,
                1
            }),
            e.extra.start = null,
            e.extra.end = null,
            e.extra.clicking = !1,
            e.extra.isSure = !1;
            var t = null
              , n = function() {
                return e.extra.isSure ? (clearTimeout(t),
                t = null,
                e.extra.isSure = !1,
                !0) : (e.extra.isSure = !0,
                setTimeout(function() {
                    e.extra.isSure = !1,
                    t = null
                }, 1e3),
                !1)
            };
            e.setEvent("mousedown", function(t, o) {
                var r = function() {
                    return t.tileX / i.protocol.chunkSize
                }
                  , a = function() {
                    return t.tileY / i.protocol.chunkSize
                }
                  , s = function() {
                    return Math.round(t.tileX / i.protocol.chunkSize)
                }
                  , c = function() {
                    return Math.round(t.tileY / i.protocol.chunkSize)
                }
                  , d = e.extra.start
                  , f = e.extra.end
                  , p = function() {
                    return r() >= d[0] && r() < f[0] && a() >= d[1] && a() < f[1]
                }
                  , m = function(e) {
                    var t = e.get(0, 0);
                    return e.forEach(function(e, n, o) {
                        return o === t
                    })
                };
                if (1 !== t.buttons || e.extra.end) {
                    if (1 === t.buttons && e.extra.end)
                        if (p() && n()) {
                            e.extra.start = null,
                            e.extra.end = null;
                            for (var v = [d[0], d[1], f[0] - d[0], f[1] - d[1]], g = v[1], y = v[2], w = v[3], b = x = v[0]; b < x + y; b++)
                                for (var k = g; k < g + w; k++) {
                                    if ((S = h.misc.world.getChunkAt(b, k)) && !S.locked) {
                                        if (h.keysDown[17] && m(S))
                                            continue;
                                        l.net.protocol.protectChunk(b, k, 1)
                                    }
                                }
                        } else
                            p() || (e.extra.start = null,
                            e.extra.end = null);
                    else if (2 === t.buttons && e.extra.end && p() && n()) {
                        e.extra.start = null,
                        e.extra.end = null;
                        var x, E = [d[0], d[1], f[0] - d[0], f[1] - d[1]];
                        for (g = E[1],
                        y = E[2],
                        w = E[3],
                        b = x = E[0]; b < x + y; b++)
                            for (k = g; k < g + w; k++) {
                                var S;
                                if ((S = h.misc.world.getChunkAt(b, k)) && S.locked) {
                                    if (h.keysDown[17] && !m(S))
                                        continue;
                                    l.net.protocol.protectChunk(b, k, 0)
                                }
                            }
                    }
                } else {
                    e.extra.start = [s(), c()],
                    e.extra.clicking = !0,
                    e.setEvent("mousemove", function(t, n) {
                        if (e.extra.start && 1 === t.buttons)
                            return e.extra.end = [s(), c()],
                            1
                    });
                    var T = function() {
                        e.setEvent("mousemove mouseup deselect", null),
                        e.extra.clicking = !1;
                        var t = e.extra.start
                          , n = e.extra.end;
                        if (n) {
                            if (t[0] !== n[0] && t[1] !== n[1] || (e.extra.start = null,
                            e.extra.end = null),
                            t[0] > n[0]) {
                                var o = n[0];
                                n[0] = t[0],
                                t[0] = o
                            }
                            if (t[1] > n[1]) {
                                o = n[1];
                                n[1] = t[1],
                                t[1] = o
                            }
                        }
                        u.renderer.render(u.renderer.rendertype.FX)
                    };
                    e.setEvent("deselect", T),
                    e.setEvent("mouseup", function(e, t) {
                        1 & e.buttons || T()
                    })
                }
            })
        }
        )),
        w(new b("Paste",s.cursors.paste,f.PLAYERFX.NONE,i.RANK.MODERATOR,function(e) {
            e.extra.sendQueue = [],
            e.setFxRenderer(function(t, n, o) {
                var r = u.camera.zoom
                  , a = t.extra.player.x
                  , s = t.extra.player.y
                  , l = Math.floor(a / 16) - u.camera.x
                  , c = Math.floor(s / 16) - u.camera.y
                  , d = e.extra.sendQueue;
                if (d.length) {
                    var h = i.protocol.chunkSize;
                    n.strokeStyle = "#000000",
                    n.globalAlpha = .8,
                    n.beginPath();
                    for (var f = 0; f < d.length; f++)
                        n.rect((d[f].x * h - u.camera.x) * r, (d[f].y * h - u.camera.y) * r, r * h, r * h);
                    return n.stroke(),
                    0
                }
                if (e.extra.canvas && t.extra.isLocalPlayer)
                    return n.globalAlpha = .5 + Math.sin(o / 500) / 4,
                    n.strokeStyle = "#000000",
                    n.scale(r, r),
                    n.drawImage(e.extra.canvas, l, c),
                    n.scale(1 / r, 1 / r),
                    n.globalAlpha = .8,
                    n.strokeRect(l * r, c * r, e.extra.canvas.width * r, e.extra.canvas.height * r),
                    0
            });
            e.setEvent("tick", function() {
                var t = e.extra.sendQueue;
                t.length && l.net.protocol.setChunk(t[0].x, t[0].y, t[0].buf) && t.shift()
            }),
            e.setEvent("mousedown", function(t) {
                if (1 & t.buttons) {
                    if (e.extra.canvas) {
                        if (e.extra.sendQueue.length)
                            throw new Error("Wait until pasting finishes, or cancel with right click!");
                        !function(t, n) {
                            var o = new Uint32Array(i.protocol.chunkSize * i.protocol.chunkSize)
                              , r = e.extra.canvas.getContext("2d").getImageData(0, 0, e.extra.canvas.width, e.extra.canvas.height)
                              , s = new Uint32Array(r.data.buffer)
                              , c = Math.ceil(((0,
                            a.absMod)(t, i.protocol.chunkSize) + r.width) / i.protocol.chunkSize)
                              , u = Math.ceil(((0,
                            a.absMod)(n, i.protocol.chunkSize) + r.height) / i.protocol.chunkSize)
                              , d = function(o, i) {
                                var a = i - n
                                  , l = o - t;
                                if (a < 0 || l < 0 || a >= r.height || l >= r.width) {
                                    var c = h.misc.world.getPixel(o, i);
                                    return !c && e.extra.wreckStuff && (c = [255, 255, 255]),
                                    c ? c[2] << 16 | c[1] << 8 | c[0] : null
                                }
                                var u = s[a * r.width + l]
                                  , d = h.misc.world.getPixel(o, i)
                                  , f = u >> 24 & 255;
                                if (!d) {
                                    if (!e.extra.wreckStuff)
                                        return null;
                                    d = [255, 255, 255]
                                }
                                var p = (1 - f / 255) * d[0] + f / 255 * (255 & u)
                                  , m = (1 - f / 255) * d[1] + f / 255 * (u >> 8 & 255)
                                  , v = (1 - f / 255) * d[2] + f / 255 * (u >> 16 & 255)
                                  , g = v << 16 | m << 8 | p;
                                return p == d[0] && m == d[1] && v == d[2] ? g : 4278190080 | g
                            }
                              , f = function(e, t) {
                                for (var n = 0, r = e * i.protocol.chunkSize, a = t * i.protocol.chunkSize, s = 0; s < i.protocol.chunkSize; s++)
                                    for (var l = 0; l < i.protocol.chunkSize; l++) {
                                        var c = d(l + r, s + a);
                                        if (null === c)
                                            throw new Error("Couldn't paste -- chunk (" + e + ", " + t + ") is unloaded");
                                        4278190080 & c && ++n,
                                        o[s * i.protocol.chunkSize + l] = 16777215 & c
                                    }
                                return n ? o : null
                            };
                            if (!l.net.protocol.setChunk)
                                throw new Error("Protocol doesn't support pasting");
                            for (var p = Math.floor(n / i.protocol.chunkSize), m = u; --m >= 0; p++)
                                for (var v = Math.floor(t / i.protocol.chunkSize), g = c; --g >= 0; v++) {
                                    var y = f(v, p);
                                    if (y && !l.net.protocol.setChunk(v, p, y)) {
                                        var w = new Uint32Array(y.length);
                                        w.set(y),
                                        e.extra.sendQueue.push({
                                            x: v,
                                            y: p,
                                            buf: w
                                        })
                                    }
                                }
                        }(t.tileX, t.tileY)
                    }
                } else
                    2 & t.buttons && (e.extra.sendQueue = [])
            });
            var t = document.createElement("input");
            t.type = "file",
            t.accept = "image/*",
            e.setEvent("select", function() {
                t.onchange = function(n) {
                    if (t.files && t.files[0]) {
                        var o = new FileReader;
                        o.onload = function(t) {
                            var n = new Image;
                            n.onload = function() {
                                e.extra.canvas = document.createElement("canvas"),
                                e.extra.canvas.width = n.width,
                                e.extra.canvas.height = n.height,
                                e.extra.canvas.getContext("2d").drawImage(n, 0, 0),
                                console.log("Loaded image")
                            }
                            ,
                            n.src = t.target.result
                        }
                        ,
                        o.readAsDataURL(t.files[0])
                    }
                }
                ,
                t.click()
            })
        }
        )),
        w(new b("Copy",s.cursors.copy,f.PLAYERFX.NONE,i.RANK.MODERATOR,function(e) {
            e.setFxRenderer(function(t, n, o) {
                if (!t.extra.isLocalPlayer)
                    return 1;
                var r = t.extra.player.x
                  , i = t.extra.player.y
                  , a = (Math.floor(r / 16) - u.camera.x) * u.camera.zoom
                  , s = (Math.floor(i / 16) - u.camera.y) * u.camera.zoom
                  , l = n.lineWidth;
                if (n.lineWidth = 1,
                e.extra.end) {
                    var c = e.extra.start
                      , d = e.extra.end
                      , h = (r = (c[0] - u.camera.x) * u.camera.zoom + .5,
                    i = (c[1] - u.camera.y) * u.camera.zoom + .5,
                    d[0] - c[0])
                      , f = d[1] - c[1];
                    n.beginPath(),
                    n.rect(r, i, h * u.camera.zoom, f * u.camera.zoom),
                    n.globalAlpha = 1,
                    n.strokeStyle = "#FFFFFF",
                    n.stroke(),
                    n.setLineDash([3, 4]),
                    n.strokeStyle = "#000000",
                    n.stroke(),
                    n.globalAlpha = .25 + Math.sin(o / 500) / 4,
                    n.fillStyle = u.renderer.patterns.unloaded,
                    n.fill(),
                    n.setLineDash([]);
                    var p = n.font;
                    n.font = "16px sans-serif";
                    var m = (e.extra.clicking ? "" : "Right click to copy ") + "(" + Math.abs(h) + "x" + Math.abs(f) + ")"
                      , v = window.innerWidth >> 1
                      , g = window.innerHeight >> 1;
                    return function(e, t, n, o, r) {
                        e.strokeStyle = "#000000",
                        e.fillStyle = "#FFFFFF",
                        e.lineWidth = 2.5,
                        e.globalAlpha = .5,
                        r && (n -= e.measureText(t).width >> 1),
                        e.strokeText(t, n, o),
                        e.globalAlpha = 1,
                        e.fillText(t, n, o)
                    }(n, m, v = Math.max(r, Math.min(v, r + h * u.camera.zoom)), g = Math.max(i, Math.min(g, i + f * u.camera.zoom)), !0),
                    n.font = p,
                    n.lineWidth = l,
                    0
                }
                return n.beginPath(),
                n.moveTo(0, s + .5),
                n.lineTo(window.innerWidth, s + .5),
                n.moveTo(a + .5, 0),
                n.lineTo(a + .5, window.innerHeight),
                n.globalAlpha = 1,
                n.strokeStyle = "#FFFFFF",
                n.stroke(),
                n.setLineDash([3]),
                n.strokeStyle = "#000000",
                n.stroke(),
                n.setLineDash([]),
                n.lineWidth = l,
                1
            }),
            e.extra.start = null,
            e.extra.end = null,
            e.extra.clicking = !1,
            e.setEvent("mousedown", function(t, n) {
                var o = e.extra.start
                  , r = e.extra.end
                  , i = function() {
                    return t.tileX >= o[0] && t.tileX < r[0] && t.tileY >= o[1] && t.tileY < r[1]
                };
                if (1 !== t.buttons || e.extra.end) {
                    if (1 === t.buttons && e.extra.end)
                        if (i()) {
                            var a = t.tileX
                              , s = t.tileY;
                            e.setEvent("mousemove", function(t, n) {
                                var i = t.tileX - a
                                  , l = t.tileY - s;
                                e.extra.start = [o[0] + i, o[1] + l],
                                e.extra.end = [r[0] + i, r[1] + l]
                            });
                            var l = function() {
                                e.setEvent("mouseup deselect mousemove", null)
                            };
                            e.setEvent("deselect", l),
                            e.setEvent("mouseup", function(e, t) {
                                1 & e.buttons || l()
                            })
                        } else
                            e.extra.start = null,
                            e.extra.end = null;
                    else if (2 === t.buttons && e.extra.end && i()) {
                        e.extra.start = null,
                        e.extra.end = null;
                        var d = o[0]
                          , f = o[1]
                          , m = r[0] - o[0]
                          , v = r[1] - o[1]
                          , g = document.createElement("canvas");
                        g.width = m,
                        g.height = v;
                        for (var y = g.getContext("2d"), w = y.createImageData(m, v), b = f; b < f + v; b++)
                            for (var k = d; k < d + m; k++) {
                                var x = h.misc.world.getPixel(k, b);
                                x && (w.data[4 * ((b - f) * m + (k - d))] = x[0],
                                w.data[4 * ((b - f) * m + (k - d)) + 1] = x[1],
                                w.data[4 * ((b - f) * m + (k - d)) + 2] = x[2],
                                w.data[4 * ((b - f) * m + (k - d)) + 3] = 255)
                            }
                        y.putImageData(w, 0, 0);
                        var E = p.paste;
                        E.extra.canvas = g;
                        var S = E.events.select;
                        E.events.select = function() {
                            E.events.select = S
                        }
                        ,
                        c.player.tool = "paste"
                    }
                } else {
                    e.extra.start = [t.tileX, t.tileY],
                    e.extra.clicking = !0,
                    e.setEvent("mousemove", function(t, n) {
                        if (e.extra.start && 1 === t.buttons)
                            return e.extra.end = [t.tileX, t.tileY],
                            1
                    });
                    var T = function() {
                        e.setEvent("mousemove mouseup deselect", null),
                        e.extra.clicking = !1;
                        var t = e.extra.start
                          , n = e.extra.end;
                        if (n) {
                            if (t[0] !== n[0] && t[1] !== n[1] || (e.extra.start = null,
                            e.extra.end = null),
                            t[0] > n[0]) {
                                var o = n[0];
                                n[0] = t[0],
                                t[0] = o
                            }
                            if (t[1] > n[1]) {
                                o = n[1];
                                n[1] = t[1],
                                t[1] = o
                            }
                        }
                        u.renderer.render(u.renderer.rendertype.FX)
                    };
                    e.setEvent("deselect", T),
                    e.setEvent("mouseup", function(e, t) {
                        1 & e.buttons || T()
                    })
                }
            })
        }
        )),
        r.eventSys.emit(i.EVENTS.misc.toolsInitialized)
    }),
    r.eventSys.once(i.EVENTS.init, function() {
        t.toolsWindow = m = new d.GUIWindow("Tools",{},function(e) {
            e.container.id = "toole-container",
            e.container.style.cssText = "max-width: 40px"
        }
        ).move(5, 32)
    }),
    r.eventSys.once(i.EVENTS.misc.toolsInitialized, function() {
        g(),
        v && d.windowSys.addWindow(m)
    }),
    r.eventSys.on(i.EVENTS.net.disconnected, function() {
        y(!1)
    }),
    r.eventSys.on(i.EVENTS.misc.worldInitialized, function() {
        y(!0)
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.windowSys = void 0,
    t.UtilInput = l,
    t.UtilDialog = c,
    t.OWOPDropDown = u,
    t.GUIWindow = d,
    t.addWindow = h,
    t.delWindow = f,
    t.centerWindow = p;
    var o = n(2)
      , r = n(1)
      , i = n(0)
      , a = n(3)
      , s = t.windowSys = {
        windows: {},
        class: {
            input: l,
            dialog: c,
            dropDown: u,
            window: d
        },
        addWindow: h,
        delWindow: f,
        centerWindow: p,
        closeAllWindows: function() {
            for (var e in s.windows)
                s.windows[e].close()
        }
    };
    function l(e, t, n, o) {
        this.win = new d(e,{
            centerOnce: !0,
            closeable: !0
        },function(e) {
            this.inputField = e.addObj((0,
            a.mkHTML)("input", {
                style: "width: 100%; height: 50%;",
                type: n,
                placeholder: t,
                onkeyup: function(e) {
                    13 == (e.which || e.keyCode) && this.okButton.click()
                }
                .bind(this)
            })),
            this.okButton = e.addObj((0,
            a.mkHTML)("button", {
                innerHTML: "OK",
                style: "width: 100%; height: 50%;",
                onclick: function() {
                    o(this.inputField.value),
                    this.getWindow().close()
                }
                .bind(this)
            }))
        }
        .bind(this)).resize(200, 60)
    }
    function c(e, t, n, o) {
        this.win = new d(e,{
            centered: !0,
            closeable: n
        },function(e) {
            this.messageBox = e.addObj((0,
            a.mkHTML)("span", {
                className: "whitetext",
                style: "display: block; padding-bottom: 4px;",
                innerHTML: t
            })),
            this.okButton = e.addObj((0,
            a.mkHTML)("button", {
                innerHTML: "OK",
                style: "display: block; width: 80px; height: 30px; margin: auto;",
                onclick: function() {
                    o(),
                    this.getWindow().close()
                }
                .bind(this)
            }))
        }
        .bind(this))
    }
    function u() {
        this.win = new d(null,{
            immobile: !0
        },function(e) {
            e.frame.className = "owopdropdown",
            e.container.style.cssText = "border: none;\t\t\tbackground-color: initial;\t\t\tpointer-events: none;\t\t\tmargin: 0;";
            var t = e.addObj((0,
            a.mkHTML)("div", {
                className: "winframe",
                style: "padding: 0;\t\t\t\twidth: 68px; height: 64px;"
            }))
              , n = (e.addObj((0,
            a.mkHTML)("button", {
                innerHTML: "hi"
            })),
            (0,
            a.mkHTML)("div", {
                className: "wincontainer",
                style: "margin-top: -5px;"
            }));
            t.appendChild(n),
            n.appendChild((0,
            a.mkHTML)("button", {
                style: "background-image: url(img/gui.png);\t\t\t\tbackground-position: -64px 4px;\t\t\t\tbackground-origin: border-box;\t\t\t\tbackground-repeat: no-repeat;\t\t\t\twidth: 100%; height: 100%;",
                onclick: function() {
                    console.log("help")
                }
                .bind(this)
            }))
        }
        ).resize(68, 64)
    }
    function d(e, t, n) {
        var o = this;
        t = t || {},
        this.wm = WorldOfPixels.windowsys,
        this.opt = t,
        this.title = e,
        this.frame = document.createElement("div"),
        this.container = document.createElement("div"),
        this.container.className = "wincontainer",
        e && (this.titlespan = document.createElement("span"),
        this.titlespan.innerHTML = e,
        this.frame.appendChild(this.titlespan)),
        this.frame.appendChild(this.container),
        t.centered && (t.immobile = !0,
        this.frame.className = "centered"),
        Object.defineProperty(this, "realw", {
            get: function() {
                return this.frame.offsetWidth
            }
            .bind(this)
        }),
        Object.defineProperty(this, "realh", {
            get: function() {
                return this.frame.offsetHeight
            }
            .bind(this)
        }),
        this.elements = [],
        this.creationtime = Date.now(),
        this.currentaction = null,
        n && n(this),
        this.mdownfunc = function(e) {
            var t = e.clientX - this.x
              , n = e.clientY - this.y;
            e.target !== this.frame || this.opt.immobile || (this.currentaction = function(e, o) {
                e = e <= 0 ? 0 : e > window.innerWidth ? window.innerWidth : e,
                o = o <= 0 ? 0 : o > window.innerHeight ? window.innerHeight : o,
                this.move(e - t, o - n)
            }
            )
        }
        .bind(this),
        t.centerOnce && (this.move(window.innerWidth, window.innerHeight),
        (0,
        a.waitFrames)(2, function() {
            return p(o)
        })),
        this.frame.addEventListener("mousedown", this.mdownfunc),
        this.mupfunc = function(e) {
            this.currentaction = null
        }
        .bind(this),
        window.addEventListener("mouseup", this.mupfunc),
        this.mmovefunc = function(e) {
            this.currentaction && this.currentaction(e.clientX, e.clientY)
        }
        .bind(this),
        window.addEventListener("mousemove", this.mmovefunc),
        this.touchfuncbuilder = function(e) {
            var t = this;
            return function(n) {
                var o = {
                    start: t.mdownfunc,
                    move: t.mmovefunc,
                    end: t.mupfunc,
                    cancel: t.mupfunc
                }[e];
                if (o) {
                    var r = n.changedTouches;
                    r.length > 0 && o(r[0])
                }
            }
        }
        .bind(this),
        this.frame.addEventListener("touchstart", this.touchfuncbuilder("start")),
        this.frame.addEventListener("touchmove", this.touchfuncbuilder("move")),
        this.frame.addEventListener("touchend", this.touchfuncbuilder("end")),
        this.frame.addEventListener("touchcancel", this.touchfuncbuilder("cancel")),
        t.closeable && this.frame.appendChild((0,
        a.mkHTML)("button", {
            onclick: function() {
                this.close()
            }
            .bind(this),
            className: "windowCloseButton"
        }))
    }
    function h(e) {
        if (r.options.noUi)
            return e;
        var t = e.getWindow();
        return s.windows[t.title] || (o.elements.windows.appendChild(t.frame),
        s.windows[t.title] = t),
        i.eventSys.emit(r.EVENTS.misc.windowAdded, e),
        e
    }
    function f(e) {
        var t = e.getWindow();
        return s.windows[t.title] && (o.elements.windows.removeChild(t.frame),
        delete s.windows[t.title]),
        e
    }
    function p(e) {
        (e = e.getWindow()).move(window.innerWidth / 2 - e.realw / 2 | 0, window.innerHeight / 2 - e.realh / 2 | 0)
    }
    i.PublicAPI.windowSys = s,
    l.prototype.getWindow = function() {
        return this.win
    }
    ,
    c.prototype.getWindow = function() {
        return this.win
    }
    ,
    u.prototype.getWindow = function() {
        return this.win
    }
    ,
    d.prototype.getWindow = function() {
        return this
    }
    ,
    d.prototype.addObj = function(e) {
        return this.elements.push(e),
        this.container.appendChild(e),
        e
    }
    ,
    d.prototype.delObj = function(e) {
        var t = this.elements.indexOf(e);
        -1 != t && (this.elements.splice(t, 1),
        this.container.removeChild(e))
    }
    ,
    d.prototype.move = function(e, t) {
        return this.opt.immobile || (this.frame.style.transform = "translate(" + e + "px," + t + "px)",
        this.x = e,
        this.y = t),
        this
    }
    ,
    d.prototype.resize = function(e, t) {
        return this.w = e,
        this.h = t,
        this.container.style.width = e + "px",
        this.container.style.height = t + "px",
        this
    }
    ,
    d.prototype.close = function() {
        f(this),
        window.removeEventListener("mousemove", this.mmovefunc),
        window.removeEventListener("mouseup", this.mupfunc),
        this.frame.removeEventListener("mousedown", this.mdownfunc),
        this.onclose && this.onclose()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.World = t.Chunk = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , r = n(1)
      , i = n(0)
      , a = n(4)
      , s = n(8)
      , l = n(5)
      , c = n(2)
      , u = n(6)
      , d = n(20)
      , h = n(7);
    function f(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var p = 0
      , m = t.Chunk = function() {
        function e(t, n, o, r) {
            f(this, e),
            this.needsRedraw = !1,
            this.x = t,
            this.y = n,
            this.tmpChunkBuf = o,
            this.view = null,
            this.locked = r,
            this.lockedNeighbors = 0
        }
        return o(e, [{
            key: "update",
            value: function(e, t, n) {
                e &= r.protocol.chunkSize - 1,
                t &= r.protocol.chunkSize - 1,
                this.view.set(e, t, 4278190080 | n),
                this.needsRedraw = !0
            }
        }, {
            key: "forEach",
            value: function(e) {
                for (var t = r.protocol.chunkSize, n = 0; n < t; n++)
                    for (var o = 0; o < t; o++)
                        if (!e(o, n, this.get(o, n)))
                            return !1;
                return !0
            }
        }, {
            key: "get",
            value: function(e, t) {
                return e &= r.protocol.chunkSize - 1,
                t &= r.protocol.chunkSize - 1,
                this.view.get(e, t)
            }
        }, {
            key: "set",
            value: function(e) {
                Number.isInteger(e) ? this.view.fill(4278190080 | e) : this.view.fillFromBuf(e),
                this.needsRedraw = !0
            }
        }, {
            key: "remove",
            value: function() {
                i.eventSys.emit(r.EVENTS.net.chunk.unload, this)
            }
        }]),
        e
    }();
    m.dir = {
        UP: 8,
        RIGHT: 4,
        DOWN: 2,
        LEFT: 1
    };
    t.World = function() {
        function e(t) {
            var n = this;
            f(this, e),
            this.name = t,
            this.chunks = {},
            this.protectedChunks = {},
            this.players = {},
            this.undoHistory = [],
            this.pathUpdaterTimeout = -1,
            this.pathFx = new h.Fx(function(e, t, n) {
                var o = 1;
                if (e.extra.path && !r.options.noUi) {
                    t.strokeStyle = "#525252";
                    var i = t.lineWidth;
                    t.lineWidth = 3 / l.camera.zoom,
                    t.setTransform(l.camera.zoom, 0, 0, l.camera.zoom, -l.camera.x * l.camera.zoom, -l.camera.y * l.camera.zoom),
                    n - e.extra.placeTime < 1500 && (t.globalAlpha = .5 * (1 - (n - e.extra.placeTime) / 1500),
                    t.fillStyle = l.renderer.patterns.unloaded,
                    t.fill(e.extra.path),
                    o = 0),
                    t.globalAlpha = .75,
                    r.options.showProtectionOutlines && t.stroke(e.extra.path),
                    t.setTransform(1, 0, 0, 1, 0, 0),
                    t.lineWidth = i
                }
                return o
            }
            );
            var o = function(e) {
                return n.chunkLoaded(e)
            }
              , a = function(e) {
                return n.chunkUnloaded(e)
            }
              , s = function(e, t, o) {
                return n.chunkPasted(e, t, o)
            }
              , c = function(e, t, o) {
                return n.chunkLocked(e, t, o)
            }
              , u = function() {
                return i.eventSys.emit(r.EVENTS.net.world.leave)
            }
              , d = function(e) {
                return n.tilesUpdated(e)
            }
              , p = function(e) {
                return n.playersMoved(e)
            }
              , m = function(e) {
                return n.playersLeft(e)
            };
            i.eventSys.on(r.EVENTS.net.chunk.load, o),
            i.eventSys.on(r.EVENTS.net.chunk.unload, a),
            i.eventSys.on(r.EVENTS.net.chunk.set, s),
            i.eventSys.on(r.EVENTS.net.chunk.lock, c),
            i.eventSys.on(r.EVENTS.net.world.tilesUpdated, d),
            i.eventSys.on(r.EVENTS.net.world.playersMoved, p),
            i.eventSys.on(r.EVENTS.net.world.playersLeft, m),
            i.eventSys.once(r.EVENTS.net.world.leave, function() {
                n.pathFx.delete(),
                n.unloadAllChunks(),
                n.playersLeft(Object.keys(n.players)),
                i.eventSys.removeListener(r.EVENTS.net.chunk.load, o),
                i.eventSys.removeListener(r.EVENTS.net.chunk.unload, a),
                i.eventSys.removeListener(r.EVENTS.net.chunk.set, s),
                i.eventSys.removeListener(r.EVENTS.net.chunk.lock, c),
                i.eventSys.removeListener(r.EVENTS.net.disconnected, u),
                i.eventSys.removeListener(r.EVENTS.net.world.tilesUpdated, d),
                i.eventSys.removeListener(r.EVENTS.net.world.playersMoved, p),
                i.eventSys.removeListener(r.EVENTS.net.world.playersLeft, m)
            }),
            i.eventSys.once(r.EVENTS.net.disconnected, u)
        }
        return o(e, [{
            key: "makeLockedChunksPath",
            value: function() {
                var e = m.dir
                  , t = new Path2D
                  , n = {}
                  , o = {}
                  , r = function(e, t, n, o, r) {
                    var i = e + "," + t
                      , a = n + "," + o;
                    if (a in r && i in r)
                        r[r[i]] = r[a],
                        r[r[a]] = r[i],
                        delete r[a],
                        delete r[i];
                    else if (a in r) {
                        var s = r[a];
                        r[s] = i,
                        delete r[a],
                        r[i] = s
                    } else if (i in r) {
                        var l = r[i];
                        r[l] = a,
                        delete r[i],
                        r[a] = l
                    } else
                        r[i] = a,
                        r[a] = i
                };
                for (var i in this.protectedChunks) {
                    var a = this.protectedChunks[i]
                      , s = a.lockedNeighbors;
                    s !== (e.LEFT | e.DOWN | e.UP | e.RIGHT) && (s & e.UP || r(a.x + 1, a.y, a.x, a.y, o),
                    s & e.DOWN || r(a.x, a.y + 1, a.x + 1, a.y + 1, o),
                    s & e.LEFT || r(a.x, a.y + 1, a.x, a.y, n),
                    s & e.RIGHT || r(a.x + 1, a.y + 1, a.x + 1, a.y, n))
                }
                var l = 0
                  , c = [n, o];
                for (var u in n) {
                    var d = u.split(",");
                    t.moveTo(16 * d[0], 16 * d[1]),
                    delete n[n[u]],
                    delete n[u],
                    u = o[u];
                    for (var h = 0; u && (d = u.split(",")); h++) {
                        var f = c[h + 1 & 1]
                          , p = c[1 & h];
                        t.lineTo(16 * d[0], 16 * d[1]),
                        delete f[f[u]],
                        delete f[u],
                        u = p[u]
                    }
                    t.closePath(),
                    ++l
                }
                return 0 === l ? null : t
            }
        }, {
            key: "findNeighborLockedChunks",
            value: function(e, t) {
                var n = this
                  , o = m.dir
                  , r = function(o, r, i, a) {
                    var s = n.getChunkAt(e.x + o, e.y + r);
                    s && s.locked && (t ? (e.lockedNeighbors |= i,
                    s.lockedNeighbors |= a) : (e.lockedNeighbors &= ~i,
                    s.lockedNeighbors &= ~a))
                };
                r(0, -1, o.UP, o.DOWN),
                r(1, 0, o.RIGHT, o.LEFT),
                r(-1, 0, o.LEFT, o.RIGHT),
                r(0, 1, o.DOWN, o.UP),
                clearTimeout(this.pathUpdaterTimeout),
                this.pathUpdaterTimeout = setTimeout(function() {
                    n.pathFx.update({
                        path: n.makeLockedChunksPath()
                    }),
                    l.renderer.render(l.renderer.rendertype.FX)
                }, 100)
            }
        }, {
            key: "loadChunk",
            value: function(e, t) {
                var n = e + "," + t;
                !this.chunks[n] && s.net.isConnected() && s.net.protocol.requestChunk(e, t)
            }
        }, {
            key: "allChunksLoaded",
            value: function() {
                return s.net.protocol.allChunksLoaded()
            }
        }, {
            key: "tilesUpdated",
            value: function(e) {
                for (var t = {}, n = r.protocol.chunkSize, o = 0; o < e.length; o++) {
                    var a = e[o]
                      , s = Math.floor(a.x / n) + "," + Math.floor(a.y / n)
                      , l = this.chunks[s];
                    l && (t[s] = l,
                    l.update(a.x, a.y, a.rgb))
                }
                for (var c in t)
                    i.eventSys.emit(r.EVENTS.renderer.updateChunk, t[c])
            }
        }, {
            key: "playersMoved",
            value: function(e) {
                var t = !1;
                for (var n in e) {
                    var o = this.players[n]
                      , r = e[n];
                    o ? o.update(r.x, r.y, r.rgb, r.tool) : o = this.players[n] = new d.Player(r.x,r.y,r.rgb,r.tool,n),
                    t || !(0,
                    l.isVisible)(o.endX / 16, o.endY / 16, 4, 4) && !(0,
                    l.isVisible)(o.x / 16, o.y / 16, 4, 4) || (t = !0,
                    l.renderer.render(l.renderer.rendertype.FX))
                }
            }
        }, {
            key: "playersLeft",
            value: function(e) {
                for (var t = !1, n = 0; n < e.length; n++) {
                    var o = e[n]
                      , r = this.players[o];
                    r && (r.disconnect(),
                    !t && (0,
                    l.isVisible)(r.x / 16, r.y / 16, 4, 4) && (t = !0,
                    l.renderer.render(l.renderer.rendertype.FX))),
                    delete this.players[o]
                }
            }
        }, {
            key: "setPixel",
            value: function(e, t, n, o, instant) {
				
				if(instant){
					s.net.protocol.updatePixel(e, t, n, function(){
						if(window.OWOP.world.getPixel(e,t)!=n){
							console.log("PixelUpdate failed " + e + "," + t + "retrying...")
							window.OWOP.world.setPixel(e,t,n,o,instant);
						}else{
							console.log("PixelUpdated " + e + "," + t);
						}
						
					});
					return true;
				}
				
                var d = Date.now()
                  , h = r.protocol.chunkSize
                  , f = this.chunks[Math.floor(e / h) + "," + Math.floor(t / h)];

				if (f) {
                    var m = this.getPixel(e, t, f);
                    return !(!m || m[0] === n[0] && m[1] === n[1] && m[2] === n[2] || !s.net.protocol.updatePixel(e, t, n, function() {
                        f.update(e, t, a.colorUtils.u24_888(m[0], m[1], m[2])),
                        i.eventSys.emit(r.EVENTS.renderer.updateChunk, f)
                    })) && (o || (m.push(e, t, d),
                    this.undoHistory.push(m)),
                    f.update(e, t, a.colorUtils.u24_888(n[0], n[1], n[2])),
                    i.eventSys.emit(r.EVENTS.renderer.updateChunk, f),
                    d - p > 30 && (c.sounds.play(c.sounds.place),
                    p = d),
                    !0)
                }
                return f && f.locked && (this.pathFx.extra.placeTime = d,
                l.renderer.render(l.renderer.rendertype.FX)),
                !1
            }
        }, {
            key: "undo",
            value: function(e) {
                if (0 === this.undoHistory.length)
                    return !1;
                for (var t, n, o = null, r = this.undoHistory.length; --r >= 0; ) {
                    var i = this.undoHistory[r];
                    o || (o = i[5]);
                    var a = this.getPixel(i[3], i[4]);
                    if (a) {
                        var s = !e || o - i[5] < 500
                          , l = (n = i,
                        (t = a)[0] == n[0] && t[1] == n[1] && t[2] == n[2]);
                        if (!s)
                            break;
                        if ((l || this.setPixel(i[3], i[4], i, !0)) && (this.undoHistory.splice(r, 1),
                        !e))
                            break
                    }
                }
            }
        }, {
            key: "getChunkAt",
            value: function(e, t) {
                return this.chunks[e + "," + t]
            }
        }, {
            key: "getPixel",
            value: function(e, t, n) {
                if (!n) {
                    var o = r.protocol.chunkSize;
                    n = this.chunks[Math.floor(e / o) + "," + Math.floor(t / o)]
                }
                if (n) {
                    var i = n.get(e, t);
                    return [255 & i, i >> 8 & 255, i >> 16 & 255]
                }
                return null
            }
        }, {
            key: "validMousePos",
            value: function(e, t) {
                return null !== this.getPixel(e, t)
            }
        }, {
            key: "chunkLocked",
            value: function(e, t, n) {
                var o = e + "," + t
                  , r = this.getChunkAt(e, t);
                r && (n ? (this.protectedChunks[o] = r,
                r.locked = !0) : (delete this.protectedChunks[o],
                r.locked = !1),
                this.findNeighborLockedChunks(r, n))
            }
        }, {
            key: "chunkLoaded",
            value: function(e) {
                var t = e.x + "," + e.y;
                this.chunks[t] = e,
                e.locked && (this.protectedChunks[t] = e,
                this.findNeighborLockedChunks(e, e.locked)),
                i.eventSys.emit(r.EVENTS.renderer.addChunk, e)
            }
        }, {
            key: "chunkUnloaded",
            value: function(e) {
                var t = e.x + "," + e.y;
                delete this.chunks[t],
                e.locked && (delete this.protectedChunks[t],
                e.locked = !1,
                this.findNeighborLockedChunks(e, e.locked)),
                i.eventSys.emit(r.EVENTS.renderer.rmChunk, e)
            }
        }, {
            key: "chunkPasted",
            value: function(e, t, n) {
                var o = this.chunks[e + "," + t];
                o && (o.set(n),
                i.eventSys.emit(r.EVENTS.renderer.updateChunk, o))
            }
        }, {
            key: "unloadAllChunks",
            value: function() {
                for (var e in this.chunks)
                    this.chunks[e].remove()
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.cursors = void 0;
    var o = n(1)
      , r = n(0)
      , i = t.cursors = {
        set: new Image,
        cursor: {
            imgpos: [0, 0],
            hotspot: [0, 0]
        },
        move: {
            imgpos: [1, 0],
            hotspot: [18, 18]
        },
        pipette: {
            imgpos: [0, 1],
            hotspot: [0, 28]
        },
        erase: {
            imgpos: [0, 2],
            hotspot: [4, 26]
        },
        zoom: {
            imgpos: [1, 2],
            hotspot: [19, 10]
        },
        fill: {
            imgpos: [1, 1],
            hotspot: [3, 29]
        },
        brush: {
            imgpos: [0, 3],
            hotspot: [0, 26]
        },
        select: {
            imgpos: [2, 0],
            hotspot: [0, 0]
        },
        selectprotect: {
            imgpos: [4, 0],
            hotspot: [0, 0]
        },
        copy: {
            imgpos: [3, 0],
            hotspot: [0, 0]
        },
        paste: {
            imgpos: [3, 1],
            hotspot: [0, 0]
        },
        cut: {
            imgpos: [3, 2],
            hotspot: [11, 5]
        },
        wand: {
            imgpos: [3, 3],
            hotspot: [0, 0]
        },
        shield: {
            imgpos: [2, 3],
            hotspot: [18, 18]
        },
        kick: {
            imgpos: [2, 1],
            hotspot: [3, 6]
        },
        ban: {
            imgpos: [3, 0],
            hotspot: [10, 4]
        },
        write: {
            imgpos: [1, 3],
            hotspot: [10, 4]
        }
    };
    function a(e) {
        for (var t = e.width, n = e.height, o = e.getContext("2d"), r = o.getImageData(0, 0, e.width, e.height), i = new Uint32Array(r.data.buffer), a = 0, s = 0, l = 0, c = 0; l < r.height; l++) {
            for (u = r.width; u--; c += i[l * r.width + u])
                ;
            if (c)
                break;
            s++
        }
        var u = 0;
        for (c = 0; u < r.width; u++) {
            for (l = n; l--; c += i[l * r.width + u])
                ;
            if (c)
                break;
            a++
        }
        for (l = r.height,
        c = 0; l--; ) {
            for (u = r.width; u--; c += i[l * r.width + u])
                ;
            if (c)
                break;
            n--
        }
        for (u = r.width,
        c = 0; u--; ) {
            for (l = n; l--; c += i[l * r.width + u])
                ;
            if (c)
                break;
            t--
        }
        e.width = t,
        e.height = n,
        o.putImageData(r, -a, -s)
    }
    function s(e, t) {
        e.width = 2 + t.width + 6,
        e.height = 2 + t.height + 6;
        var n = e.getContext("2d");
        n.shadowColor = "#000000",
        n.globalAlpha = .5,
        n.shadowBlur = 4,
        n.shadowOffsetX = 2,
        n.shadowOffsetY = 2,
        n.drawImage(t, 2, 2),
        n.globalAlpha = 1,
        n.shadowColor = "rgba(0, 0, 0, 0)",
        n.drawImage(t, 2, 2)
    }
    function l(e) {
        i.set.onload = function() {
            var t = i.set
              , n = document.createElement("canvas");
            !function(e, t) {
                e.width = t.width,
                e.height = t.height;
                var n = e.getContext("2d");
                n.drawImage(t, 0, 0);
                for (var o = n.getImageData(0, 0, e.width, e.height), r = new Uint32Array(o.data.buffer), i = function(e, t) {
                    return e < 0 || t < 0 || e >= o.width || t >= o.height ? 0 : r[t * o.width + e]
                }, a = r.length; a--; )
                    0 !== r[a] && (r[a] = 4284244862);
                for (var s = o.height; s--; )
                    for (var l = o.width; l--; )
                        4284244862 !== i(l, s) || i(l, s - 1) && i(l - 1, s) || i(l - 1, s - 1) || (r[s * o.width + l] = 4282069325);
                for (s = o.height; s--; )
                    for (l = o.width; l--; )
                        4282069325 === i(l, s - 1) && 4282069325 === i(l - 1, s) && (r[s * o.width + l] = 4282069325);
                n.putImageData(o, 0, 0)
            }(n, t);
            var o = Object.keys(i).length - 1 + 1;
            for (var r in i)
                if ("set" !== r) {
                    r = i[r];
                    var l = document.createElement("canvas")
                      , c = r.img = {
                        shadowed: document.createElement("canvas"),
                        shadowblob: null
                    };
                    l.width = l.height = 36,
                    l.getContext("2d").drawImage(t, 36 * r.imgpos[0], 36 * r.imgpos[1], 36, 36, 0, 0, 36, 36),
                    a(l),
                    s(c.shadowed, l),
                    r.hotspot[0] += 2,
                    r.hotspot[1] += 2,
                    c.shadowed.toBlob(function(t) {
                        this.img.shadowblob = URL.createObjectURL(t),
                        --o || e()
                    }
                    .bind(r))
                }
            n.toBlob(function(t) {
                i.slotset = URL.createObjectURL(t),
                --o || e()
            })
        }
        ,
        i.set.src = o.options.toolSetUrl
    }
    r.PublicAPI.cursors = i,
    r.eventSys.once(o.EVENTS.loaded, function() {
        l(function() {
            return r.eventSys.emit(o.EVENTS.misc.toolsRendered)
        })
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Lerp = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }();
    var r = n(3).getTime;
    t.Lerp = function() {
        function e(t, n, o) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.start = t,
            this.end = n,
            this.ms = o,
            this.time = r()
        }
        return o(e, [{
            key: "val",
            get: function() {
                var e = Math.min((r() - this.time) / this.ms, 1);
                return (1 - e) * this.start + e * this.end
            },
            set: function(e) {
                this.start = this.val,
                this.end = e,
                this.time = r(!0)
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.normalizeWheel = function(e) {
        var t = 0
          , n = 0
          , a = 0
          , s = 0;
        "detail"in e && (n = e.detail);
        "wheelDelta"in e && (n = -e.wheelDelta / 120);
        "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120);
        "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120);
        "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
        n = 0);
        a = t * o,
        s = n * o,
        "deltaY"in e && (s = e.deltaY);
        "deltaX"in e && (a = e.deltaX);
        (a || s) && e.deltaMode && (1 == e.deltaMode ? (a *= r,
        s *= r) : (a *= i,
        s *= i));
        a && !t && (t = a < 1 ? -1 : 1);
        s && !n && (n = s < 1 ? -1 : 1);
        return {
            spinX: t,
            spinY: n,
            pixelX: a,
            pixelY: s
        }
    }
    ;
    var o = 10
      , r = 40
      , i = 800
}
, function(e, t, n) {
    "use strict";
    var o, r, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    i = function() {
        function e(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }
        var t = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.defaultOptions = function(e) {
                return e || (e = {
                    attributes: [],
                    ips: !0,
                    emails: !0,
                    urls: !0,
                    files: !0,
                    truncate: 1 / 0,
                    defaultProtocol: "http://",
                    list: !1
                }),
                "object" != a(e.attributes) && (e.attributes = []),
                "boolean" != typeof e.ips && (e.ips = !0),
                "boolean" != typeof e.emails && (e.emails = !0),
                "boolean" != typeof e.urls && (e.urls = !0),
                "boolean" != typeof e.files && (e.files = !0),
                "boolean" != typeof e.list && (e.list = !1),
                "string" != typeof e.defaultProtocol && "function" != typeof e.defaultProtocol && (e.defaultProtocol = "http://"),
                "number" == typeof e.truncate || "object" == a(e.truncate) && null !== e.truncate || (e.truncate = 1 / 0),
                e
            }
            ,
            t.isPort = function(e) {
                return !(isNaN(Number(e)) || Number(e) > 65535)
            }
        })
          , n = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.tlds = ["com", "org", "net", "uk", "gov", "edu", "io", "cc", "co", "aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "coach", "codes", "coffee", "college", "cologne", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtpc", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "organic", "orientexpress", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3oq18vl8pn36a", "xn--3pxu8k", "xn--42c2d9a", "xn--45brj9c", "xn--45q11c", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b", "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d", "xn--efvy88h", "xn--estv75g", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2brj9c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq61u9w7b", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d", "xn--kpu716f", "xn--kput3i", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbb9fbpob", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgberp4a5d4ar", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--node", "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1acf", "xn--p1ai", "xn--pbt977c", "xn--pgbs0dh", "xn--pssy2u", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx", "xn--zfr164b", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"],
            t.htmlAttrs = ["src=", "data=", "href=", "cite=", "formaction=", "icon=", "manifest=", "poster=", "codebase=", "background=", "profile=", "usemap="]
        })
          , o = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = /^[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i
              , r = [/^[!#$%&'*+\-\/=?^_`{|}~.]/, /[.]{2,}[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@/i, /\.@/];
            t.default = function(e) {
                var t = e.match(o);
                if (null === t)
                    return !1;
                for (var i = r.length - 1; i >= 0; i--)
                    if (r[i].test(e))
                        return !1;
                var a = t[2];
                return !!a && -1 !== n.tlds.indexOf(a)
            }
        })
          , r = e(function(e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = /^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
            n.default = function(e) {
                if (!o.test(e))
                    return !1;
                var n = e.split(".")
                  , r = Number(n[0]);
                if (isNaN(r) || r > 255 || r < 0)
                    return !1;
                var i = Number(n[1]);
                if (isNaN(i) || i > 255 || i < 0)
                    return !1;
                var a = Number(n[2]);
                if (isNaN(a) || a > 255 || a < 0)
                    return !1;
                var s = Number((n[3].match(/^\d+/) || [])[0]);
                if (isNaN(s) || s > 255 || s < 0)
                    return !1;
                var l = (n[3].match(/(^\d+)(:)(\d+)/) || [])[3];
                return !(l && !t.isPort(l))
            }
        })
          , i = e(function(e, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = /^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;
            o.default = function(e) {
                var o = e.match(r);
                return null !== o && "string" == typeof o[3] && -1 !== n.tlds.indexOf(o[3].toLowerCase()) && !(o[5] && !t.isPort(o[5]))
            }
        })
          , s = e(function(e, t) {
            function n(e, t, o) {
                return e.forEach(function(r, i) {
                    !(r.indexOf(".") > -1) || e[i - 1] === t && e[i + 1] === o || e[i + 1] !== t && e[i + 1] !== o || (e[i] = e[i] + e[i + 1],
                    "string" == typeof e[i + 2] && (e[i] = e[i] + e[i + 2]),
                    "string" == typeof e[i + 3] && (e[i] = e[i] + e[i + 3]),
                    "string" == typeof e[i + 4] && (e[i] = e[i] + e[i + 4]),
                    e.splice(i + 1, 4),
                    n(e, t, o))
                }),
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.fixSeparators = n,
            t.default = function(e) {
                return e = n(e, "(", ")"),
                e = n(e, "[", "]"),
                e = n(e, '"', '"'),
                n(e, "'", "'")
            }
        })
          , l = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.separate = function(e) {
                var t = e.replace(/([\s\(\)\[\]<>"'])/g, "\0$1\0").replace(/([?;:,.!]+)(?=(\0|$|\s))/g, "\0$1\0").split("\0");
                return s.default(t)
            }
            ,
            t.deSeparate = function(e) {
                return e.join("")
            }
        })
          , c = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e) {
                return 0 === (e = e.toLowerCase()).indexOf("http://") ? "http://" : 0 === e.indexOf("https://") ? "https://" : 0 === e.indexOf("ftp://") ? "ftp://" : 0 === e.indexOf("ftps://") ? "ftps://" : 0 === e.indexOf("file:///") ? "file:///" : 0 === e.indexOf("mailto:") && "mailto:"
            }
        })
          , u = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = function(e, t) {
                return e.map(function(a, s) {
                    var l = encodeURI(a);
                    if (l.indexOf(".") < 1 && !c.default(l))
                        return a;
                    var u = null
                      , d = c.default(l) || "";
                    return d && (l = l.substr(d.length)),
                    t.files && "file:///" === d && l.split(/\/|\\/).length - 1 && (u = {
                        reason: "file",
                        protocol: d,
                        raw: a,
                        encoded: l
                    }),
                    !u && t.urls && i.default(l) && (u = {
                        reason: "url",
                        protocol: d || ("function" == typeof t.defaultProtocol ? t.defaultProtocol(a) : t.defaultProtocol),
                        raw: a,
                        encoded: l
                    }),
                    !u && t.emails && o.default(l) && (u = {
                        reason: "email",
                        protocol: "mailto:",
                        raw: a,
                        encoded: l
                    }),
                    !u && t.ips && r.default(l) && (u = {
                        reason: "ip",
                        protocol: d || ("function" == typeof t.defaultProtocol ? t.defaultProtocol(a) : t.defaultProtocol),
                        raw: a,
                        encoded: l
                    }),
                    u && ("'" !== e[s - 1] && '"' !== e[s - 1] || !~n.htmlAttrs.indexOf(e[s - 2])) ? u : a
                })
            }
        })
          , d = e(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = l;
            t.default = function(e, t) {
                var o = n.separate(e)
                  , r = u.default(o, t);
                if (t.exclude)
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i];
                        "object" == (void 0 === s ? "undefined" : a(s)) && t.exclude(s) && (r[i] = s.raw)
                    }
                if (t.list) {
                    for (var c = [], d = 0; d < r.length; d++) {
                        var h = r[d];
                        "string" != typeof h && c.push(h)
                    }
                    return c
                }
                return r = r.map(function(e) {
                    return "string" == typeof e ? e : function(e, t) {
                        var n = e.protocol + e.encoded
                          , o = e.raw;
                        return "number" == typeof t.truncate && o.length > t.truncate && (o = o.substring(0, t.truncate) + "..."),
                        "object" == a(t.truncate) && o.length > t.truncate[0] + t.truncate[1] && (o = o.substr(0, t.truncate[0]) + "..." + o.substr(o.length - t.truncate[1])),
                        void 0 === t.attributes && (t.attributes = []),
                        '<a href="' + n + '" ' + t.attributes.map(function(t) {
                            if ("function" != typeof t)
                                return " " + t.name + '="' + t.value + '" ';
                            var n = (t(e) || {}).name
                              , o = (t(e) || {}).value;
                            return n && !o ? " name " : n && o ? " " + n + '="' + o + '" ' : void 0
                        }).join("") + ">" + o + "</a>"
                    }(e, t)
                }),
                l.deSeparate(r)
            }
        });
        return function(e) {
            return e && e.__esModule ? e.default : e
        }(e(function(e, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = function(e, n) {
                return n = t.defaultOptions(n),
                d.default(e, n)
            };
            a.validate = {
                ip: r.default,
                url: function(e) {
                    var t = c.default(e) || "";
                    return e = e.substr(t.length),
                    e = encodeURI(e),
                    i.default(e)
                },
                email: o.default
            },
            n.default = a
        }))
    }
    ,
    "object" == a(t) && void 0 !== e ? e.exports = i() : void 0 === (r = "function" == typeof (o = i) ? o.call(t, n, t, e) : o) || (e.exports = r)
}
, function(e, t, n) {
    "use strict";
    var o, r = "object" == typeof Reflect ? Reflect : null, i = r && "function" == typeof r.apply ? r.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    }
    ;
    o = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    var a = Number.isNaN || function(e) {
        return e != e
    }
    ;
    function s() {
        s.init.call(this)
    }
    e.exports = s,
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var l = 10;
    function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
    }
    function u(e, t, n, o) {
        var r, i, a, s;
        if ("function" != typeof n)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
        if (void 0 === (i = e._events) ? (i = e._events = Object.create(null),
        e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
        i = e._events),
        a = i[t]),
        void 0 === a)
            a = i[t] = n,
            ++e._eventsCount;
        else if ("function" == typeof a ? a = i[t] = o ? [n, a] : [a, n] : o ? a.unshift(n) : a.push(n),
        (r = c(e)) > 0 && a.length > r && !a.warned) {
            a.warned = !0;
            var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l.name = "MaxListenersExceededWarning",
            l.emitter = e,
            l.type = t,
            l.count = a.length,
            s = l,
            console && console.warn && console.warn(s)
        }
        return e
    }
    function d(e, t, n) {
        var o = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        }
          , r = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e.push(arguments[t]);
            this.fired || (this.target.removeListener(this.type, this.wrapFn),
            this.fired = !0,
            i(this.listener, this.target, e))
        }
        .bind(o);
        return r.listener = n,
        o.wrapFn = r,
        r
    }
    function h(e, t, n) {
        var o = e._events;
        if (void 0 === o)
            return [];
        var r = o[t];
        return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
            return t
        }(r) : p(r, r.length)
    }
    function f(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n)
                return 1;
            if (void 0 !== n)
                return n.length
        }
        return 0
    }
    function p(e, t) {
        for (var n = new Array(t), o = 0; o < t; ++o)
            n[o] = e[o];
        return n
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return l
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || a(e))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            l = e
        }
    }),
    s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ,
    s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || a(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ,
    s.prototype.getMaxListeners = function() {
        return c(this)
    }
    ,
    s.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
        var o = "error" === e
          , r = this._events;
        if (void 0 !== r)
            o = o && void 0 === r.error;
        else if (!o)
            return !1;
        if (o) {
            var a;
            if (t.length > 0 && (a = t[0]),
            a instanceof Error)
                throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw s.context = a,
            s
        }
        var l = r[e];
        if (void 0 === l)
            return !1;
        if ("function" == typeof l)
            i(l, this, t);
        else {
            var c = l.length
              , u = p(l, c);
            for (n = 0; n < c; ++n)
                i(u[n], this, t)
        }
        return !0
    }
    ,
    s.prototype.addListener = function(e, t) {
        return u(this, e, t, !1)
    }
    ,
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(e, t) {
        return u(this, e, t, !0)
    }
    ,
    s.prototype.once = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.on(e, d(this, e, t)),
        this
    }
    ,
    s.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        return this.prependListener(e, d(this, e, t)),
        this
    }
    ,
    s.prototype.removeListener = function(e, t) {
        var n, o, r, i, a;
        if ("function" != typeof t)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (void 0 === (o = this._events))
            return this;
        if (void 0 === (n = o[e]))
            return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount ? this._events = Object.create(null) : (delete o[e],
            o.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (r = -1,
            i = n.length - 1; i >= 0; i--)
                if (n[i] === t || n[i].listener === t) {
                    a = n[i].listener,
                    r = i;
                    break
                }
            if (r < 0)
                return this;
            0 === r ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++)
                    e[t] = e[t + 1];
                e.pop()
            }(n, r),
            1 === n.length && (o[e] = n[0]),
            void 0 !== o.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }
    ,
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(e) {
        var t, n, o;
        if (void 0 === (n = this._events))
            return this;
        if (void 0 === n.removeListener)
            return 0 === arguments.length ? (this._events = Object.create(null),
            this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
            this;
        if (0 === arguments.length) {
            var r, i = Object.keys(n);
            for (o = 0; o < i.length; ++o)
                "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof (t = n[e]))
            this.removeListener(e, t);
        else if (void 0 !== t)
            for (o = t.length - 1; o >= 0; o--)
                this.removeListener(e, t[o]);
        return this
    }
    ,
    s.prototype.listeners = function(e) {
        return h(this, e, !0)
    }
    ,
    s.prototype.rawListeners = function(e) {
        return h(this, e, !1)
    }
    ,
    s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
    }
    ,
    s.prototype.listenerCount = f,
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? o(this._events) : []
    }
}
, function(e, t, n) {
    e.exports = n.p + "img/toolset.png"
}
, function(e, t, n) {
    e.exports = n.p + "img/unloaded.png"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Player = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , r = n(14)
      , i = n(4)
      , a = n(2)
      , s = n(7)
      , l = n(10);
    t.Player = function() {
        function e(t, n, o, c, u) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.id = u.toString(),
            this._x = new r.Lerp(t,t,65),
            this._y = new r.Lerp(n,n,65),
            this.tool = l.tools[c] || l.tools.cursor,
            this.fx = new s.Fx(c ? c.fxType : s.PLAYERFX.NONE,{
                player: this
            }),
            this.fx.setVisible(a.misc.world.validMousePos(Math.floor(this.endX / 16), Math.floor(this.endY / 16))),
            this.rgb = o,
            this.htmlRgb = i.colorUtils.toHTML(i.colorUtils.u24_888(o[0], o[1], o[2])),
            this.clr = (67283 * (u + 75387) + 53143) % 256 << 16 | (4673 * (u + 9283) + 7483) % 256 << 8 | 3e3 * u % 256,
            this.clr = i.colorUtils.toHTML(this.clr);
            var d = document.createElement("tr");
            d.innerHTML = "<td>" + this.id + "</td><td>" + Math.floor(t / 16) + "</td><td>" + Math.floor(n / 16) + "</td>",
            a.playerList[this.id] = d,
            a.playerListTable.appendChild(d)
        }
        return o(e, [{
            key: "update",
            value: function(e, t, n, o) {
                this._x.val = e,
                this._y.val = t,
                this.tool = l.tools[o] || l.tools.cursor,
                this.fx.setRenderer((this.tool || {}).fxRenderer),
                this.fx.setVisible(a.misc.world.validMousePos(Math.floor(this.endX / 16), Math.floor(this.endY / 16))),
                this.rgb = n,
                this.htmlRgb = i.colorUtils.toHTML(i.colorUtils.u24_888(n[0], n[1], n[2])),
                a.playerList[this.id].childNodes[1].innerHTML = Math.floor(e / 16),
                a.playerList[this.id].childNodes[2].innerHTML = Math.floor(t / 16)
            }
        }, {
            key: "disconnect",
            value: function() {
                this.fx.delete(),
                a.playerListTable.removeChild(a.playerList[this.id]),
                delete a.playerList[this.id]
            }
        }, {
            key: "tileX",
            get: function() {
                return Math.floor(this.x / 16)
            }
        }, {
            key: "tileY",
            get: function() {
                return Math.floor(this.y / 16)
            }
        }, {
            key: "endX",
            get: function() {
                return this._x.end
            }
        }, {
            key: "endY",
            get: function() {
                return this._y.end
            }
        }, {
            key: "x",
            get: function() {
                return this._x.val
            }
        }, {
            key: "y",
            get: function() {
                return this._y.val
            }
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.definedProtos = void 0,
    t.resolveProtocols = function() {
        for (var e = 0; e < r.options.serverAddress.length; e++) {
            var t = r.options.serverAddress[e];
            t.proto = i[t.proto]
        }
    }
    ;
    var o = n(22)
      , r = n(1)
      , i = t.definedProtos = {
        old: o.OldProtocol
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.OldProtocol = t.captchaState = void 0;
    var o, r, i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }(), a = function e(t, n, o) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === r) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, n, o)
        }
        if ("value"in r)
            return r.value;
        var a = r.get;
        return void 0 !== a ? a.call(o) : void 0
    }, s = n(23), l = n(1), c = n(0), u = n(12), d = n(9), h = n(3), f = n(24), p = (n(4),
    n(6)), m = (n(5),
    n(2));
    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var g = t.captchaState = {
        CA_WAITING: 0,
        CA_VERIFYING: 1,
        CA_VERIFIED: 2,
        CA_OK: 3,
        CA_INVALID: 4
    }
      , y = t.OldProtocol = {
        class: null,
        chunkSize: 16,
        netUpdateSpeed: 20,
        clusterChunkAmount: 64,
        maxWorldNameLength: 24,
        worldBorder: 1048575,
        chatBucket: [4, 6],
        placeBucket: (o = {},
        v(o, l.RANK.NONE, [0, 1]),
        v(o, l.RANK.USER, [32, 4]),
        v(o, l.RANK.MODERATOR, [32, 2]),
        v(o, l.RANK.ADMIN, [32, 0]),
        o),
        maxMessageLength: (r = {},
        v(r, l.RANK.NONE, 128),
        v(r, l.RANK.USER, 128),
        v(r, l.RANK.MODERATOR, 512),
        v(r, l.RANK.ADMIN, 16384),
        r),
        tools: {
            id: {},
            0: "cursor",
            1: "move",
            2: "pipette",
            3: "eraser",
            4: "zoom",
            5: "fill",
            6: "paste",
            7: "export",
            8: "line",
            9: "protect",
            10: "copy"
        },
        misc: {
            worldVerification: 25565,
            chatVerification: String.fromCharCode(10),
            tokenVerification: "CaptchA"
        },
        opCode: {
            client: {},
            server: {
                setId: 0,
                worldUpdate: 1,
                chunkLoad: 2,
                teleport: 3,
                setRank: 4,
                captcha: 5,
                setPQuota: 6,
                chunkProtected: 7,
                maxCount: 8
            }
        }
    };
    for (var w in y.tools)
        +w >= 0 && (y.tools.id[y.tools[w]] = +w);
    var b = function(e) {
        function t(e, n) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var o = function(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "hookEvents", o).call(o, o),
            o.lastSentX = 0,
            o.lastSentY = 0,
            o.playercount = 1,
            o.worldName = n || l.options.defaultWorld,
            o.players = {},
            o.chunksLoading = {},
            o.waitingForChunks = 0,
            o.pendingEdits = {},
            o.id = null;
            var r = y.chatBucket;
            o.chatBucket = new d.Bucket(r[0],r[1]),
            r = y.placeBucket[p.player.rank],
            o.placeBucket = new d.Bucket(r[0],r[1]),
            o.interval = null,
            o.clet = null,
            o.joinFunc = function() {
                o.placeBucket.lastCheck = Date.now(),
                o.placeBucket.allowance = 0,
                o.interval = setInterval(function() {
                    return o.sendUpdates()
                }, 1e3 / y.netUpdateSpeed)
            }
            ;
            var i = function(e) {
                o.placeBucket.infinite = e === l.RANK.ADMIN,
                m.elements.chatInput.maxLength = y.maxMessageLength[e]
            };
            return o.leaveFunc = function() {
                c.eventSys.removeListener(l.EVENTS.net.sec.rank, i)
            }
            ,
            c.eventSys.once(l.EVENTS.net.world.join, o.joinFunc),
            c.eventSys.on(l.EVENTS.net.sec.rank, i),
            o
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s.Protocol),
        i(t, [{
            key: "errorHandler",
            value: function(e) {
                a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "errorHandler", this).call(this, e)
            }
        }, {
            key: "closeHandler",
            value: function() {
                a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "closeHandler", this).call(this),
                clearInterval(this.interval),
                c.eventSys.emit(l.EVENTS.net.sec.rank, l.RANK.NONE),
                c.eventSys.removeListener(l.EVENTS.net.world.join, this.joinFunc),
                this.leaveFunc()
            }
        }, {
            key: "messageHandler",
            value: function(e) {
                var t = this;
                if ("string" != typeof (e = e.data)) {
                    var n = new DataView(e)
                      , o = y.opCode.server;
                    switch (n.getUint8(0)) {
                    case o.setId:
                        var r = n.getUint32(1, !0);
                        this.id = r,
                        c.eventSys.emit(l.EVENTS.net.world.join, this.worldName),
                        c.eventSys.emit(l.EVENTS.net.world.setId, r),
                        c.eventSys.emit(l.EVENTS.net.playerCount, this.playercount),
                        c.eventSys.emit(l.EVENTS.net.chat, '[Server] Joined world: "' + this.worldName + '", your ID is: ' + r + "!");
                        break;
                    case o.worldUpdate:
                        for (var i = !1, a = {}, s = n.getUint8(1); s--; ) {
                            i = !0;
                            var m = n.getUint32(2 + 16 * s, !0);
                            if (m !== this.id) {
                                var v = n.getInt32(2 + 16 * s + 4, !0)
                                  , w = n.getInt32(2 + 16 * s + 8, !0)
                                  , b = n.getUint8(2 + 16 * s + 12)
                                  , k = n.getUint8(2 + 16 * s + 13)
                                  , x = n.getUint8(2 + 16 * s + 14)
                                  , E = n.getUint8(2 + 16 * s + 15);
                                a[m] = {
                                    x: v,
                                    y: w,
                                    rgb: [b, k, x],
                                    tool: y.tools[E]
                                },
                                this.players[m] || (++this.playercount,
                                c.eventSys.emit(l.EVENTS.net.playerCount, this.playercount),
                                this.players[m] = !0)
                            }
                        }
                        i && c.eventSys.emit(l.EVENTS.net.world.playersMoved, a);
                        var S = 2 + 16 * n.getUint8(1);
                        i = !1,
                        a = [];
                        s = n.getUint16(S, !0);
                        for (var T = 0; T < s; T++) {
                            i = !0;
                            var N = n.getUint32(2 + S + 15 * T, !0)
                              , C = n.getInt32(2 + S + 15 * T + 4, !0)
                              , M = n.getInt32(2 + S + 15 * T + 8, !0)
                              , L = n.getUint8(2 + S + 15 * T + 12)
                              , P = n.getUint8(2 + S + 15 * T + 13)
                              , A = n.getUint8(2 + S + 15 * T + 14) << 16 | P << 8 | L;
                            a.push({
                                x: C,
                                y: M,
                                rgb: A,
                                id: N
                            });
                            var _ = C + "," + M
                              , R = this.pendingEdits[_];
                            R && (clearTimeout(R),
                            delete this.pendingEdits[_])
                        }
                        i && c.eventSys.emit(l.EVENTS.net.world.tilesUpdated, a),
                        S += 15 * n.getUint16(S, !0) + 2;
                        var z = !1;
                        i = !1,
                        a = [];
                        for (var O = n.getUint8(S); O--; ) {
                            i = !0;
                            var I = n.getUint32(1 + S + 4 * O, !0);
                            a.push(I),
                            this.players[I] && this.playercount > 1 && (z = !0,
                            --this.playercount,
                            delete this.players[I])
                        }
                        i && (c.eventSys.emit(l.EVENTS.net.world.playersLeft, a),
                        z && c.eventSys.emit(l.EVENTS.net.playerCount, this.playercount));
                        break;
                    case o.chunkLoad:
                        var F = n.getInt32(1, !0)
                          , j = n.getInt32(5, !0)
                          , D = n.getUint8(9)
                          , V = new Uint8Array(e,10,e.byteLength - 10);
                        V = (0,
                        h.decompress)(V);
                        for (var U = F + "," + j, W = new Uint32Array(y.chunkSize * y.chunkSize), X = (s = 0,
                        0); s < V.length; s += 3) {
                            var H = V[s + 2] << 16 | V[s + 1] << 8 | V[s];
                            W[X++] = 4278190080 | H
                        }
                        if (this.chunksLoading[U]) {
                            delete this.chunksLoading[U],
                            0 == --this.waitingForChunks && (clearTimeout(this.clet),
                            this.clet = setTimeout(function() {
                                c.eventSys.emit(l.EVENTS.net.chunk.allLoaded)
                            }, 100));
                            var Y = new u.Chunk(F,j,W,D);
                            c.eventSys.emit(l.EVENTS.net.chunk.load, Y)
                        } else
                            c.eventSys.emit(l.EVENTS.net.chunk.set, F, j, W);
                        break;
                    case o.teleport:
                        var B = n.getInt32(1, !0)
                          , q = n.getInt32(5, !0);
                        c.eventSys.emit(l.EVENTS.net.world.teleported, B, q);
                        break;
                    case o.setRank:
                        p.networkRankVerification[0] = n.getUint8(1),
                        c.eventSys.emit(l.EVENTS.net.sec.rank, n.getUint8(1));
                        break;
                    case o.captcha:
                        switch (n.getUint8(1)) {
                        case g.CA_WAITING:
                            (0,
                            f.loadAndRequestCaptcha)(),
                            c.eventSys.once(l.EVENTS.misc.captchaToken, function(e) {
                                var n = y.misc.tokenVerification + e;
                                t.ws.send(n)
                            });
                            break;
                        case g.CA_OK:
                            this.worldName = this.joinWorld(this.worldName)
                        }
                        break;
                    case o.setPQuota:
                        var K = n.getUint16(1, !0)
                          , G = n.getUint16(3, !0)
                          , $ = this.placeBucket.allowance;
                        this.placeBucket = new d.Bucket(K,G),
                        this.placeBucket.allowance = $;
                        break;
                    case o.chunkProtected:
                        var Z = n.getInt32(1, !0)
                          , Q = n.getInt32(5, !0)
                          , J = n.getUint8(9);
                        c.eventSys.emit(l.EVENTS.net.chunk.lock, Z, Q, J);
                        break;
                    case o.maxCount:
                        c.eventSys.emit(l.EVENTS.net.maxCount, n.getUint16(1, !0))
                    }
                } else
                    0 == e.indexOf("DEV") ? c.eventSys.emit(l.EVENTS.net.devChat, e.slice(3)) : c.eventSys.emit(l.EVENTS.net.chat, e)
            }
        }, {
            key: "joinWorld",
            value: function(e) {
                var t = function(e, t) {
                    var n = []
                      , o = "";
                    e = e.toLowerCase();
                    for (var r = 0; r < e.length && r < t; r++) {
                        var i = e.charCodeAt(r);
                        (i < 123 && i > 96 || i < 58 && i > 47 || 95 == i || 46 == i) && (o += String.fromCharCode(i),
                        n.push(i))
                    }
                    return [n, o]
                }(e, y.maxWorldNameLength);
                c.eventSys.emit(l.EVENTS.net.world.joining, e);
                for (var n = new ArrayBuffer(t[0].length + 2), o = new DataView(n), r = t[0].length; r--; )
                    o.setUint8(r, t[0][r]);
                return o.setUint16(t[0].length, y.misc.worldVerification, !0),
                this.ws.send(n),
                t[1]
            }
        }, {
            key: "requestChunk",
            value: function(e, t) {
                var n = y.worldBorder
                  , o = e + "," + t;
                if (!(e > n || t > n || e < ~n || t < ~n || this.chunksLoading[o])) {
                    this.chunksLoading[o] = !0,
                    this.waitingForChunks++;
                    var r = new ArrayBuffer(8)
                      , i = new DataView(r);
                    i.setInt32(0, e, !0),
                    i.setInt32(4, t, !0),
                    this.ws.send(r)
                }
            }
        }, {
            key: "allChunksLoaded",
            value: function() {
                return 0 === this.waitingForChunks
            }
        }, {
            key: "updatePixel",
            value: function(e, t, n, o) {
                var r = Math.trunc(e / y.chunkSize) - Math.trunc(this.lastSentX / (16 * y.chunkSize));
                r *= r;
                var i = Math.trunc(t / y.chunkSize) - Math.trunc(this.lastSentY / (16 * y.chunkSize));
                i *= i;
                var a = Math.sqrt(r + i);
              //  if (this.isConnected() && (a < 3 || p.player.rank == l.RANK.ADMIN) && this.placeBucket.canSpend(1)) {
				if (this.isConnected()) {
                    var s = new ArrayBuffer(11)
                      , c = new DataView(s);
                    return c.setInt32(0, e, !0),
                    c.setInt32(4, t, !0),
                    c.setUint8(8, n[0]),
                    c.setUint8(9, n[1]),
                    c.setUint8(10, n[2]),
                    this.ws.send(s),
                    this.pendingEdits[e + "," + t] = setTimeout(o, 2e3*this.pendingEdits.length+1),
                    !0
                }
                return !1
            }
        }, {
            key: "sendUpdates",
            value: function() {
                var e = m.mouse.worldX
                  , t = m.mouse.worldY
                  , n = this.lastSentX
                  , o = this.lastSentY;
                if (this.isConnected() && (0,
                p.shouldUpdate)() || e != n || t != o) {
                    var r = p.player.selectedColor;
                    this.lastSentX = e,
                    this.lastSentY = t;
                    var i = new ArrayBuffer(12)
                      , a = new DataView(i);
                    a.setInt32(0, e, !0),
                    a.setInt32(4, t, !0),
                    a.setUint8(8, r[0]),
                    a.setUint8(9, r[1]),
                    a.setUint8(10, r[2]);
                    var s = p.player.tool
                      , l = null !== s ? +y.tools.id[s.id] : 0;
                    a.setUint8(11, l),
                    this.ws.send(i)
                }
            }
        }, {
            key: "sendMessage",
            value: function(e) {
                if (e.length && null !== this.id)
                    return p.player.rank == l.RANK.ADMIN || this.chatBucket.canSpend(1) ? (this.ws.send(e + y.misc.chatVerification),
                    !0) : (c.eventSys.emit(l.EVENTS.net.chat, "Slow down! You're talking too fast!"),
                    !1)
            }
        }, {
            key: "protectChunk",
            value: function(e, t, n) {
                var o = new ArrayBuffer(10)
                  , r = new DataView(o);
                r.setInt32(0, e, !0),
                r.setInt32(4, t, !0),
                r.setUint8(8, n),
                this.ws.send(o),
                c.eventSys.emit(l.EVENTS.net.chunk.lock, e, t, n, !0)
            }
        }, {
            key: "setChunk",
            value: function(e, t, n) {
                if (!(p.player.rank == l.RANK.ADMIN || p.player.rank == l.RANK.MODERATOR && this.placeBucket.canSpend(1.25)))
                    return !1;
                var o = new Uint8Array(8 + y.chunkSize * y.chunkSize * 3)
                  , r = new DataView(o.buffer);
                r.setInt32(0, e, !0),
                r.setInt32(4, t, !0);
                for (var i = 0, a = 8; i < n.length; i++,
                a += 3)
                    o[a] = 255 & n[i],
                    o[a + 1] = n[i] >> 8 & 255,
                    o[a + 2] = n[i] >> 16 & 255;
                return this.ws.send(o.buffer),
                !0
            }
        }, {
            key: "clearChunk",
            value: function(e, t, n) {
                if (p.player.rank == l.RANK.ADMIN || p.player.rank == l.RANK.MODERATOR && this.placeBucket.canSpend(1)) {
                    var o = new ArrayBuffer(13)
                      , r = new DataView(o);
                    return r.setInt32(0, e, !0),
                    r.setInt32(4, t, !0),
                    r.setUint8(8, n[0]),
                    r.setUint8(9, n[1]),
                    r.setUint8(10, n[2]),
                    this.ws.send(o),
                    !0
                }
                return !1
            }
        }]),
        t
    }();
    y.class = b
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Protocol = void 0;
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n),
            o && e(t, o),
            t
        }
    }()
      , r = n(1)
      , i = n(0);
    t.Protocol = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.ws = t,
            this.lasterr = null
        }
        return o(e, [{
            key: "hookEvents",
            value: function(e) {
                this.ws.addEventListener("message", e.messageHandler.bind(e)),
                this.ws.addEventListener("open", e.openHandler.bind(e)),
                this.ws.addEventListener("close", e.closeHandler.bind(e)),
                this.ws.addEventListener("error", e.errorHandler.bind(e))
            }
        }, {
            key: "isConnected",
            value: function() {
                return this.ws.readyState === i.AnnoyingAPI.ws.OPEN
            }
        }, {
            key: "openHandler",
            value: function() {
                i.eventSys.emit(r.EVENTS.net.connected)
            }
        }, {
            key: "errorHandler",
            value: function(e) {
                this.lasterr = e
            }
        }, {
            key: "closeHandler",
            value: function() {
                i.eventSys.emit(r.EVENTS.net.disconnected)
            }
        }, {
            key: "messageHandler",
            value: function(e) {}
        }, {
            key: "joinWorld",
            value: function(e) {}
        }, {
            key: "requestChunk",
            value: function(e, t) {}
        }, {
            key: "updatePixel",
            value: function(e, t, n) {}
        }, {
            key: "sendUpdates",
            value: function() {}
        }, {
            key: "sendMessage",
            value: function(e) {}
        }]),
        e
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.loadAndRequestCaptcha = function() {
        "owopcaptcha"in localStorage ? setTimeout(function() {
            r.eventSys.emit(o.EVENTS.misc.captchaToken, "LETMEINPLZ" + localStorage.owopcaptcha)
        }, 0) : (e = l,
        window.grecaptcha ? e() : window.callback ? window.callback = function() {
            e(),
            this()
        }
        .bind(window.callback) : (window.callback = function() {
            delete window.callback,
            e()
        }
        ,
        r.eventSys.emit(o.EVENTS.misc.loadingCaptcha),
        (0,
        i.loadScript)("https://www.google.com/recaptcha/api.js?onload=callback&render=explicit")));
        var e
    }
    ;
    var o = n(1)
      , r = n(0)
      , i = n(3)
      , a = n(11)
      , s = (n(2),
    "6LcgvScUAAAAAARUXtwrM8MP0A0N70z4DHNJh-KI");
    function l() {
        a.windowSys.addWindow(new a.GUIWindow("Verification needed",{
            centered: !0
        },function(e) {
            grecaptcha.render(e.addObj((0,
            i.mkHTML)("div", {
                id: "captchawdow"
            })), {
                theme: "light",
                sitekey: s,
                callback: function(t) {
                    r.eventSys.emit(o.EVENTS.misc.captchaToken, t),
                    e.close()
                }
            });
            e.frame.style.cssText = "",
            e.container.style.cssText = "overflow: hidden; background-color: #F9F9F9"
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createContextMenu = function(e, t, n) {
        o && i();
        r.innerHTML = "";
        for (var a = 0; a < n.length; a++) {
            var s = document.createElement("button");
            s.textContent = n[a][0],
            s.addEventListener("click", n[a][1]),
            r.appendChild(s)
        }
        document.body.appendChild(r),
        o = !0;
        var l = r.offsetHeight;
        console.log(l),
        t + l > window.innerHeight - 20 ? r.style.top = t - l + "px" : r.style.top = t + "px";
        r.style.left = e + "px",
        document.addEventListener("click", i)
    }
    ;
    var o = !1
      , r = document.createElement("div");
    function i(e) {
        document.body.removeChild(r),
        document.removeEventListener("click", i),
        o = !1
    }
    r.className = "context-menu"
}
, function(e, t, n) {
    e.exports = n.p + "audio/launch.mp3"
}
, function(e, t, n) {
    e.exports = n.p + "audio/place.mp3"
}
, function(e, t, n) {
    e.exports = n.p + "audio/click.mp3"
}
, function(e, t, n) {
    "use strict";
    e.exports = n.p + "polyfill/canvas-toBlob.js"
}
]);
