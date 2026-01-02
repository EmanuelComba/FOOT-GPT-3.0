! function() {
    var e = "v4";
    try {
        var t = new URLSearchParams(window.location.search),
            i = t.get("playerVersion");
        i && (e = i)
    } catch (n) {
        console.error("Error getting version from search params", n)
    }
    if (!document.getElementById("vturb-smartplayer-js")) {
        var a = document.createElement("script"),
            o = "https://scripts.converteai.net/lib/js/smartplayer-wc/" + e;
        try {
            var I = t.get("playerHost");
            I && (o = decodeURIComponent(I))
        } catch (n) {
            console.error("error getting playerHost from search params", n)
        }
        a.src = o + "/smartplayer.js", a.id = "vturb-smartplayer-js", a.fetchPriority = "high", document.head.appendChild(a)
    }
}(),
function() {
    var e = document.getElementById("vid-69517834ba8707e946bd763c"),
        t = function(e) {
            e.id = "vid-69517834ba8707e946bd763c"
        };
    e ? 0 === e.children.length && t(e) : (t(e = document.createElement("vturb-smartplayer")), "head" === document.currentScript.parentNode.tagName.toLowerCase() ? document.body.insertBefore(e, document.body.firstChild) : document.currentScript.parentNode.insertBefore(e, document.currentScript))
}(),
function(e, t) {
    e._plt = e._plt || (t && t.timeOrigin ? t.timeOrigin + t.now() : Date.now() - 60)
}(window, performance),
function() {
    var e = document.getElementById("vid-69517834ba8707e946bd763c");
    e.start = function(t) {
        e.setup ? e.setup(t) : this._setup = t
    };
    var t = {
            "callActions": {
                "active": !0,
                "version": 3,
                "items": [{
                    "active": !0,
                    "as_html": !1,
                    "name": null,
                    "content": "Garantir Acesso",
                    "id": "69517b5aed1852c895e0c780_b88cb821",
                    "persist_on_video_end": !0,
                    "show_to_returning_viewer": !1,
                    "range": {
                        "start": 335,
                        "finish": 366
                    },
                    "type": "outside_video",
                    "delay": !1,
                    "delay_options": {
                        "query": "",
                        "query_type": "class"
                    },
                    "image_as_button": !1,
                    "image_url": "",
                    "image_styles": {
                        "height": 100,
                        "width": 100,
                        "opacity": 100
                    },
                    "rich_element": null,
                    "typography": {
                        "family": "Inter",
                        "letter_spacing": 1,
                        "line_height": 150,
                        "size": 31,
                        "weight": 500,
                        "embedLink": "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    },
                    "styles": {
                        "background_color": "#1890ff",
                        "background_hover_color": "#1890ff",
                        "text_color": "#FFFFFF",
                        "text_hover_color": "#FFFFFF",
                        "border_radius": 16,
                        "shadow_enabled": !1,
                        "shadow": {
                            "blur": 8,
                            "color": "#1e8fffbf",
                            "horizontal": 0,
                            "vertical": 4,
                            "spread": 1
                        },
                        "padding": {
                            "binding": !1,
                            "values": [12, 24, 12, 24]
                        }
                    },
                    "animation": null,
                    "html": null,
                    "url": "https://checkout-foot-gpt.vercel.app/",
                    "open_in_new_tab": !0,
                    "scroll_enabled": !1,
                    "scroll_type": "auto",
                    "scroll_offset": 0
                }]
            },
            "cdn": "cdn.converteai.net",
            "conversion": [],
            "fakeBar": {
                "active": !0,
                "alpha": 2,
                "height": 10,
                "color": "#674EA7"
            },
            "headlines": {
                "active": !1,
                "items": []
            },
            "id": "69517834ba8707e946bd763c",
            "language": null,
            "minihooks": {
                "active": !1,
                "items": []
            },
            "oid": "a9c14488-77ae-4ddb-a323-4b4ea337d573",
            "pitchTime": 335,
            "pixels": {
                "active": !1,
                "items": []
            },
            "playback": {
                "active": !1,
                "actionAfterFinish": null,
                "scrollToActionIn": null
            },
            "playerInit": {
                "aspectRatio": 56.25,
                "thumbnailKey": "a9c14488-77ae-4ddb-a323-4b4ea337d573/players/69517834ba8707e946bd763c/thumbnail.jpg",
                "verticalVideo": !1,
                "customId": null
            },
            "resume": {
                "active": !0,
                "model": "default",
                "backgroundColor": "#674EA7",
                "disablePause": !1,
                "foregroundColor": "#FFFFFF",
                "play": "Continuar assistindo?",
                "replay": "Assistir do in\xedcio?",
                "title": "Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo"
            },
            "secure": !1,
            "smartAutoPlay": {
                "active": !0,
                "items": [{
                    "id": "smart_autoplay_69517834ba8707e946bd763c_1_f42ebde3",
                    "name": "Smart Autoplay",
                    "number": 1,
                    "version": "2",
                    "startAt": null,
                    "endAt": null,
                    "elements": [{
                        "height": 320,
                        "id": "69577dc44bac1bead9162a3d",
                        "opacity": 1,
                        "order": 1,
                        "rotation": 0,
                        "type": "box",
                        "width": 576,
                        "x": 352,
                        "y": 200,
                        "transformOrigin": null,
                        "properties": {
                            "border": {
                                "color": "#FFFFFF",
                                "size": 2.6666666666666665,
                                "type": "solid"
                            },
                            "color": "rgba(8, 93, 138, 0.88)",
                            "radius": 10.666666666666666
                        }
                    }, {
                        "height": 53.33333333333333,
                        "id": "69577dc44bac1bead9162a3e",
                        "opacity": 1,
                        "order": 2,
                        "rotation": 0,
                        "type": "text",
                        "width": 576,
                        "x": 352,
                        "y": 228.44444444444446,
                        "transformOrigin": null,
                        "properties": {
                            "align": "center",
                            "color": "#FFFFFF",
                            "size": 35.55555555555556,
                            "value": "Seu v\xeddeo j\xe1 come\xe7ou",
                            "weight": "700"
                        }
                    }, {
                        "height": 53.33333333333333,
                        "id": "69577dc44bac1bead9162a3f",
                        "opacity": 1,
                        "order": 3,
                        "rotation": 0,
                        "type": "text",
                        "width": 576,
                        "x": 352,
                        "y": 438.22222222222223,
                        "transformOrigin": null,
                        "properties": {
                            "align": "center",
                            "color": "#FFFFFF",
                            "size": 35.55555555555556,
                            "value": "Clique para ouvir",
                            "weight": "700"
                        }
                    }, {
                        "height": 128,
                        "id": "69577dc44bac1bead9162a40",
                        "opacity": 1,
                        "order": 4,
                        "rotation": 0,
                        "type": "image",
                        "width": 181.33333333333331,
                        "x": 549.3333333333334,
                        "y": 296,
                        "transformOrigin": null,
                        "properties": {
                            "alt": "Seu v\xeddeo j\xe1 come\xe7ou",
                            "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHZlcnNpb249IjEuMSIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ2Ljc1cHgiIGhlaWdodD0iMzIuNTYzcHgiIHZpZXdCb3g9IjcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIKICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgID4KICAgICAgPHN0eWxlPgogICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAgIDMzJSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfQogICAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICB9CgogICAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18yIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC4zczsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18zIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuNnM7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyAhaW1wb3J0YW50OwogICAgICAgIH0KCiAgICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICcjRkZGRkZGJzsKICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iYWRqdXN0YWJsZSBmZyBhbmltYXRpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNTMuMjQ5LDM5LjYxNmMtMC4xODYsMC0wLjM3MS0wLjA1MS0wLjUzNy0wLjE1N2wtNDMuNS0yNy43NWMtMC40NjYtMC4yOTctMC42MDMtMC45MTYtMC4zMDYtMS4zODFjMC4yOTgtMC40NjYsMC45MTctMC42MDEsMS4zODEtMC4zMDZsNDMuNSwyNy43NWMwLjQ2NywwLjI5NywwLjYwNCwwLjkxNiwwLjMwNywxLjM4MUM1My45MDEsMzkuNDUzLDUzLjU3OSwzOS42MTYsNTMuMjQ5LDM5LjYxNnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18zIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Ni45MjYsMzYuOTU2Yy0wLjYxMiwwLjg2My0xLjI4NiwxLjY5NS0yLjA1OSwyLjQ2OWMtMC4zOTIsMC4zOTEtMC4zOTIsMS4wMjMsMCwxLjQxNGMwLjE5NCwwLjE5NSwwLjQ1LDAuMjkzLDAuNzA3LDAuMjkzYzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDYtMC4yOTNjMC44NzgtMC44NzgsMS42NDItMS44MjQsMi4zMzMtMi44MDdMNDYuOTI2LDM2Ljk1NnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMiBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDIuNTQzLDI5LjQxNWwxLjc3NywxLjEzNWMxLjU0NS01LjMxNSwwLjIyOS0xMS4yOTMtMy45NTMtMTUuNDc2Yy0wLjM5Mi0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwYy0wLjM5MiwwLjM5MS0wLjM5MiwxLjAyMywwLDEuNDE0QzQyLjQ1NCwxOS45ODcsNDMuNjM5LDI0LjkyNSw0Mi41NDMsMjkuNDE1eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS43NzEsMjUuMDk0bDIuMDAzLDEuMjc3YzAuMDEyLTAuMjAzLDAuMDI5LTAuNDA0LDAuMDI5LTAuNjA5YzAtMy4wNzktMS4yLTUuOTc0LTMuMzgxLTguMTUzYy0wLjM5MS0wLjM5MS0xLjAyMi0wLjM5MS0xLjQxNCwwYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzM0LjY1MiwyMC42NjYsMzUuNjEzLDIyLjgwMiwzNS43NzEsMjUuMDk0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS4wODQsMjkuNDAxYy0wLjQ3NCwxLjE0NS0xLjE3MiwyLjE5Ny0yLjA3NiwzLjFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNjMC4yNTcsMCwwLjUxMy0wLjA5OCwwLjcwNy0wLjI5M2MxLjAwOC0xLjAwNiwxLjc5NS0yLjE3LDIuMzYxLTMuNDNMMzUuMDg0LDI5LjQwMXoiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTIwLjkyMSwyMC4zNjZoLTYuNDIzYy0wLjU1MywwLTEsMC41MDgtMSwxLjEzNXY4LjIyOWMwLDAuNjI3LDAuNDQ3LDEuMTM1LDEsMS4xMzVoNy4zNzVsNi4yNSw1Ljg3NVYyNC45NkwyMC45MjEsMjAuMzY2eiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L3N2Zz4KICA="
                        }
                    }]
                }]
            },
            "style": {
                "background": "#E77E11",
                "bigPlay": !1,
                "captions": !1,
                "foreground": "#FFFFFF",
                "forward": !1,
                "fullscreen": !1,
                "progressBar": !1,
                "rewind": !1,
                "smallPlay": !1,
                "speed": !1,
                "videoTime": !1,
                "volume": !1
            },
            "subtitles": {
                "active": !1
            },
            "thumbsniper": {
                "active": !1,
                "items": []
            },
            "turbo": {
                "active": !1
            },
            "video": {
                "id": "69517611ed1852c895e0c203",
                "aspectRatio": .5625,
                "height": 720,
                "poster": "https://cdn.converteai.net/a9c14488-77ae-4ddb-a323-4b4ea337d573/69517611ed1852c895e0c203/poster.jpg",
                "width": 1280,
                "drm": !1
            }
        },
        i = null,
        a = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
        o = (a = a && a[0]) && i || t;
    e.id !== "vid-" + o.id && (e.id = "vid-" + o.id, e.innerHTML = ""), e.style.display = "block", e.style.margin = "0 auto", e.style.width = "100%", 0 === e.children.length && ("69517834ba8707e946bd763c" === o.id ? (e.innerHTML = "<div slot=\"preload\" class=\"preload preload--netflix\" style=\" position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0;\"> <div id=\"loading_69517834ba8707e946bd763c\" class=\"vt-loading-wrapper\"> <div class=\"vt-loading-android-spinner\"></div> <div class=\"vt-loading-percentage\">50%</div> </div> </div> <style>\n  [class^=\"vt-loading\"]{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none}.vt-loading-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:#000;color:#fff;display:flex!important;justify-content:center;align-items:center}.vt-loading-percentage{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:600}#smartplayer .vt-loading-percentage{content:\"99%\"}.vt-loading-android-spinner{width:80px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#E50914 94%,#0000) top/8px 8px no-repeat,conic-gradient(#0000 30%,#E50914);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);animation:vt-loading-android-spinner-animation .75s infinite linear}@keyframes vt-loading-android-spinner-animation{100%{transform:rotate(1turn)}}\n</style>", function() {
        var e = document.querySelector(".vt-loading-percentage");
        if (e) var t = 50,
            i = setInterval(function() {
                t++, e.textContent = t + "%", t >= 99 && clearInterval(i)
            }, 30)
    }()) : e.innerHTML = "<div class=\"thumbnail\" style=\" position: relative; width: 100%; padding: " + o.playerInit.aspectRatio + "% 0 0; z-index: 0;\"><img class=\"thumbnail-image\" src=\"https://images.converteai.net/" + o.playerInit.thumbnailKey + "\" style=\" position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;  \" /></div>"), e.start(o)
}();