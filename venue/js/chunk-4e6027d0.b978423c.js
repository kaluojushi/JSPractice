(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4e6027d0"], {
  "0a06": function (e, t, s) {
    "use strict";
    var i = s("c532"), n = s("30b5"), a = s("f6b49"), r = s("5270"), o = s("4a7b");

    function c(e) {
      this.defaults = e, this.interceptors = {request: new a, response: new a}
    }

    c.prototype.request = function (e) {
      "string" === typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = o(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
      var t = [r, void 0], s = Promise.resolve(e);
      this.interceptors.request.forEach((function (e) {
        t.unshift(e.fulfilled, e.rejected)
      })), this.interceptors.response.forEach((function (e) {
        t.push(e.fulfilled, e.rejected)
      }));
      while (t.length) s = s.then(t.shift(), t.shift());
      return s
    }, c.prototype.getUri = function (e) {
      return e = o(this.defaults, e), n(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, i.forEach(["delete", "get", "head", "options"], (function (e) {
      c.prototype[e] = function (t, s) {
        return this.request(i.merge(s || {}, {method: e, url: t}))
      }
    })), i.forEach(["post", "put", "patch"], (function (e) {
      c.prototype[e] = function (t, s, n) {
        return this.request(i.merge(n || {}, {method: e, url: t, data: s}))
      }
    })), e.exports = c
  }, "0df6": function (e, t, s) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t)
      }
    }
  }, "11d6": function (e, t, s) {
    "use strict";
    s("c503")
  }, "1d2b": function (e, t, s) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
        return e.apply(t, s)
      }
    }
  }, 2444: function (e, t, s) {
    "use strict";
    (function (t) {
      var i = s("c532"), n = s("c8af"), a = {"Content-Type": "application/x-www-form-urlencoded"};

      function r(e, t) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
      }

      function o() {
        var e;
        return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t)) && (e = s("b50d")), e
      }

      var c = {
        adapter: o(),
        transformRequest: [function (e, t) {
          return n(t, "Accept"), n(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
          if ("string" === typeof e) try {
            e = JSON.parse(e)
          } catch (t) {
          }
          return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300
        },
        headers: {common: {Accept: "application/json, text/plain, */*"}}
      };
      i.forEach(["delete", "get", "head"], (function (e) {
        c.headers[e] = {}
      })), i.forEach(["post", "put", "patch"], (function (e) {
        c.headers[e] = i.merge(a)
      })), e.exports = c
    }).call(this, s("4362"))
  }, "25db": function (e, t, s) {
  }, "2d83": function (e, t, s) {
    "use strict";
    var i = s("387f");
    e.exports = function (e, t, s, n, a) {
      var r = new Error(e);
      return i(r, t, s, n, a)
    }
  }, "2e67": function (e, t, s) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__)
    }
  }, "30b5": function (e, t, s) {
    "use strict";
    var i = s("c532");

    function n(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, s) {
      if (!t) return e;
      var a;
      if (s) a = s(t); else if (i.isURLSearchParams(t)) a = t.toString(); else {
        var r = [];
        i.forEach(t, (function (e, t) {
          null !== e && "undefined" !== typeof e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, (function (e) {
            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), r.push(n(t) + "=" + n(e))
          })))
        })), a = r.join("&")
      }
      if (a) {
        var o = e.indexOf("#");
        -1 !== o && (e = e.slice(0, o)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
      }
      return e
    }
  }, "387f": function (e, t, s) {
    "use strict";
    e.exports = function (e, t, s, i, n) {
      return e.config = t, s && (e.code = s), e.request = i, e.response = n, e.isAxiosError = !0, e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        }
      }, e
    }
  }, 3934: function (e, t, s) {
    "use strict";
    var i = s("c532");
    e.exports = i.isStandardBrowserEnv() ? function () {
      var e, t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");

      function n(e) {
        var i = e;
        return t && (s.setAttribute("href", i), i = s.href), s.setAttribute("href", i), {
          href: s.href,
          protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
          host: s.host,
          search: s.search ? s.search.replace(/^\?/, "") : "",
          hash: s.hash ? s.hash.replace(/^#/, "") : "",
          hostname: s.hostname,
          port: s.port,
          pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
        }
      }

      return e = n(window.location.href), function (t) {
        var s = i.isString(t) ? n(t) : t;
        return s.protocol === e.protocol && s.host === e.host
      }
    }() : function () {
      return function () {
        return !0
      }
    }()
  }, 4362: function (e, t, s) {
    t.nextTick = function (e) {
      var t = Array.prototype.slice.call(arguments);
      t.shift(), setTimeout((function () {
        e.apply(null, t)
      }), 0)
    }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function (e) {
      throw new Error("No such module. (Possibly not yet loaded)")
    }, function () {
      var e, i = "/";
      t.cwd = function () {
        return i
      }, t.chdir = function (t) {
        e || (e = s("df7c")), i = e.resolve(t, i)
      }
    }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function () {
    }, t.features = {}
  }, "467f": function (e, t, s) {
    "use strict";
    var i = s("2d83");
    e.exports = function (e, t, s) {
      var n = s.config.validateStatus;
      !n || n(s.status) ? e(s) : t(i("Request failed with status code " + s.status, s.config, null, s.request, s))
    }
  }, "498a": function (e, t, s) {
    "use strict";
    var i = s("23e7"), n = s("58a8").trim, a = s("c8d2");
    i({target: "String", proto: !0, forced: a("trim")}, {
      trim: function () {
        return n(this)
      }
    })
  }, "4a7b": function (e, t, s) {
    "use strict";
    var i = s("c532");
    e.exports = function (e, t) {
      t = t || {};
      var s = {}, n = ["url", "method", "params", "data"], a = ["headers", "auth", "proxy"],
          r = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
      i.forEach(n, (function (e) {
        "undefined" !== typeof t[e] && (s[e] = t[e])
      })), i.forEach(a, (function (n) {
        i.isObject(t[n]) ? s[n] = i.deepMerge(e[n], t[n]) : "undefined" !== typeof t[n] ? s[n] = t[n] : i.isObject(e[n]) ? s[n] = i.deepMerge(e[n]) : "undefined" !== typeof e[n] && (s[n] = e[n])
      })), i.forEach(r, (function (i) {
        "undefined" !== typeof t[i] ? s[i] = t[i] : "undefined" !== typeof e[i] && (s[i] = e[i])
      }));
      var o = n.concat(a).concat(r), c = Object.keys(t).filter((function (e) {
        return -1 === o.indexOf(e)
      }));
      return i.forEach(c, (function (i) {
        "undefined" !== typeof t[i] ? s[i] = t[i] : "undefined" !== typeof e[i] && (s[i] = e[i])
      })), s
    }
  }, "4ce9": function (e, t, s) {
    "use strict";
    var i = function () {
          var e = this, t = e.$createElement, s = e._self._c || t;
          return s("div", {
            staticClass: "reservationStep1",
            style: {marginTop: e.commonMethods.isApp() ? "0.1rem" : ""}
          }, [e.isSite ? s("div", {
            style: {
              background: e.commonMethods.isApp() ? "#fafafa" : "",
              height: "auto"
            }
          }, [e.config.isHasFront ? s("div", {staticClass: "siteDetail"}, [s("div", {staticClass: "siteDetailPic"}, [s("switchRotation", {
            ref: "switchRotation",
            attrs: {bannerList: e.parCurrentSite.sitePhoto ? e.parCurrentSite.sitePhoto.split(",") : []}
          })], 1), s("div", {staticClass: "siteDetailContent"}, [s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("开放时段：")]), e._v(" " + e._s(e.parCurrentSite.openStartDate) + "-" + e._s(e.parCurrentSite.openEndDate) + " ")]), s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("管理模式：")]), e._v(" " + e._s(e.parCurrentSite.isSupportReservation ? "线上预约" : "") + " " + e._s(e.parCurrentSite.isOfflineTicket ? "线下售票" : "") + " ")]), s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("运动项目：")]), e._v(" " + e._s(e.parCurrentSite.sportTypeStr) + " ")]), e.parCurrentSite.siteTelephone ? s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("联系电话：")]), e._v(" " + e._s(e.parCurrentSite.siteTelephone) + " ")]) : e._e(), s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("线下租赁：")]), e._v(" " + e._s(e.parCurrentSite.isSupportRent == e.constObject.COMMON_IS.YES ? "支持" : "不支持") + " ")]), 170 == e.parCurrentSite.sportType ? s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("座位数：")]), e._v(" " + e._s(e.parCurrentSite.seatCount) + " ")]) : e._e(), e.parCurrentSite.reserveUrl && e.parCurrentSite.reserveUrlName ? [s("div", {staticClass: "siteInfo"}, [s("span", {staticClass: "siteInfoLabel"}, [e._v("网站首页：")]), s("a", {
            staticStyle: {color: "#2440B3"},
            attrs: {href: e.parCurrentSite.reserveUrl, target: "_blank"}
          }, [e._v(" " + e._s(e.parCurrentSite.reserveUrlName) + " ")])]), e.parCurrentSite.reserveUrlNote ? s("div", {
            staticClass: "scroll",
            staticStyle: {"font-size": "12px", "max-height": "100px"}
          }, [e._v(" " + e._s(e.parCurrentSite.reserveUrlNote) + " ")]) : e._e()] : e._e()], 2)]) : e._e()]) : e._e(), s("Form", {
            staticStyle: {
              background: "white",
              padding: "10px 0"
            }, attrs: {"label-width": e.isSite ? 0 : e.sportType ? 80 : 60, "label-position": "left"}
          }, [s("FormItem", {
            style: {textAlign: e.isSite ? "center" : "left", marginBottom: "10px"},
            attrs: {label: e.isSite ? "" : "预约日期"}
          }, [s("Button", {
            staticClass: "btnMaring",
            attrs: {type: "primary", disabled: e.noCheck, icon: "ios-arrow-back"},
            nativeOn: {
              click: function (t) {
                return e.preDay(t)
              }
            }
          }), e.commonMethods.isBuyTicketAdmin(e.userInfo.role) || "ReservationManage" != e.$route.name && "MobileReservationManage" != e.$route.name ? s("Date-picker", {
            staticStyle: {width: "110px"},
            attrs: {
              type: "date",
              value: e.search.date,
              options: e.options,
              format: "yyyy-MM-dd",
              placeholder: "选择预约日期",
              disabled: e.noCheck
            },
            on: {
              "on-change": function (t) {
                return e.search.date = t
              }
            }
          }) : s("Date-picker", {
            staticStyle: {width: "110px"},
            attrs: {type: "date", value: e.search.date, format: "yyyy-MM-dd", placeholder: "选择预约日期", disabled: e.noCheck},
            on: {
              "on-change": function (t) {
                return e.search.date = t
              }
            }
          }), s("Button", {
            staticClass: "btnMaring",
            attrs: {type: "primary", disabled: e.noCheck, icon: "ios-arrow-forward"},
            nativeOn: {
              click: function (t) {
                return e.nextDay(t)
              }
            }
          }), s("Button", {
            staticClass: "btnMaring",
            attrs: {type: "primary", icon: "md-refresh"},
            nativeOn: {
              click: function (t) {
                return e.getReserveDate(t)
              }
            }
          })], 1), e.isSite ? e._e() : [e.campusList && e.campusList.length > 1 ? s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"},
            attrs: {label: "校区"}
          }, [s("RadioGroup", {
            attrs: {type: "button"}, model: {
              value: e.search.campus, callback: function (t) {
                e.$set(e.search, "campus", t)
              }, expression: "search.campus"
            }
          }, e._l(e.campusList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.codename) + " ")])
          })), 1)], 1) : e._e(), s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"},
            attrs: {label: "场馆"}
          }, [s("RadioGroup", {
            attrs: {type: "button"},
            on: {"on-change": e.changeVenueId},
            model: {
              value: e.search.venueId, callback: function (t) {
                e.$set(e.search, "venueId", t)
              }, expression: "search.venueId"
            }
          }, e._l(e.venueList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.venueName) + " ")])
          })), 1)], 1), s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"},
            attrs: {label: "场地"}
          }, [s("RadioGroup", {
            attrs: {type: "button"}, model: {
              value: e.search.venueSiteId, callback: function (t) {
                e.$set(e.search, "venueSiteId", t)
              }, expression: "search.venueSiteId"
            }
          }, e._l(e.venueSiteList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.siteName) + " ")])
          })), 1)], 1)]], 2), 0 === e.isTakeUp ? [e.search.venueSiteId ? s("Alert", {attrs: {"show-icon": ""}}, [e.parCurrentSite.isSupportReservation == e.constObject.COMMON_IS.YES || e.parCurrentSite.isOfflineTicket == e.constObject.COMMON_IS.YES || e.currentSite.isSupportReservation == e.constObject.COMMON_IS.YES || e.currentSite.isOfflineTicket == e.constObject.COMMON_IS.YES ? s("div", [s("div", [s("span", [e._v("点击")]), e.commonMethods.isApp() ? e._e() : s("span", [e._v("鼠标")]), s("span", [e._v("选择时间段")]), e.maxCount ? [s("span", [e._v("，当前最多可预约")]), s("span", {staticClass: "text-error"}, [e._v(e._s(e.maxCount))]), s("span", [e._v("片")])] : e._e()], 2), e.commonMethods.isPKU() && 86 === e.search.venueSiteId ? s("div", {staticClass: "text-error bloder"}, [e._v(" 6:50-7:50、22:00-23:00 场次只面向学生开放 ")]) : e._e()]) : s("div", [e._v(" 当前场地不支持预约和购票！ ")])]) : e._e(), e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES ? s("RadioGroup", {
            staticClass: "cardSpace",
            attrs: {type: "button"},
            on: {"on-change": e.getReserveDate},
            model: {
              value: e.reservationType, callback: function (t) {
                e.reservationType = t
              }, expression: "reservationType"
            }
          }, e._l(e.constObject.RESERVATION_TYPE, (function (t) {
            return s("Radio", {
              key: t,
              attrs: {label: t, disabled: e.groupFlag}
            }, [e._v(" " + e._s(e.constObject.RESERVATION_TYPE_TITLE[t]) + " ")])
          })), 1) : e._e(), s("div", {style: {minHeight: e.commonMethods.isApp() ? "400px" : ""}}, [s("div", {staticClass: "tableWrap"}, [s("div", {staticClass: "ivu-table-wrapper reserveTable cardSpace"}, [s("div", {staticClass: "ivu-table ivu-table-border"}, [s("div", {staticClass: "ivu-table-body"}, [e.commonMethods.isApp() && e.tableTimeData.length >= 3 ? s("table", {
            staticClass: "table1",
            attrs: {border: "0", cellpadding: "0", cellspacing: "0"}
          }, [s("thead", [s("tr", [s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "3%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" " + e._s(e.config.ReservationTableReversal ? "场地" : "时间段") + " ")])])])]), s("tbody", {staticClass: "ivu-table-tbody"}, [e.config.ReservationTableReversal ? e._l(e.tableVenueSite, (function (t, i) {
            return s("tr", {key: i}, [s("td", {style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}}, [s("div", {staticClass: "ivu-table-cell text-center nowrap"}, [e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " ")])])])
          })) : e._l(e.tableTimeData, (function (t, i) {
            return s("tr", {key: i}, [s("td", {style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}}, [s("div", {staticClass: "ivu-table-cell text-center nowrap"}, [e._v(e._s(t.beginTime) + "-" + e._s(t.endTime))])])])
          })), e.commonMethods.isApp() ? s("tr", [s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "3%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" " + e._s(e.config.ReservationTableReversal ? "场地" : "时间段") + " ")])])]) : e._e()], 2)]) : e._e(), e.commonMethods.isApp() && e.commonMethods.isPKU() && !e.config.ReservationTableReversal && e.tableVenueSite.length >= 3 ? s("div", {
            ref: "tableMask",
            staticClass: "tableMask"
          }) : e._e(), e.commonMethods.isApp() && e.commonMethods.isPKU() && e.config.ReservationTableReversal && e.tableTimeData.length >= 3 ? s("div", {
            ref: "tableMask",
            staticClass: "tableMask"
          }) : e._e(), e.config.ReservationTableReversal ? s("div", {
            class: {spaceTable: e.commonMethods.isApp() && e.tableTimeData.length >= 3 ? "spaceTable" : ""},
            attrs: {id: "scrollTable"}
          }, [s("div", {
            style: {
              width: e.commonMethods.isApp() && e.tableTimeData.length >= 3 ? "4rem" : "",
              position: "relative"
            }
          }, [s("table", {
            attrs: {
              border: "0",
              cellpadding: "0",
              cellspacing: "0"
            }
          }, [s("thead", [s("tr", [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableTimeData.length < 3 ? s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "5%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v("场地")])]) : e._e(), e.commonMethods.isApp() ? e._l(e.tableTimeData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.tableTimeData && e.tableTimeData.length > 4 ? "0.72rem" : 96 / e.tableTimeData.length + "%"}
            }, [s("div", {
              staticClass: "ivu-table-cell text-center",
              class: ["ivu-table-cell", "text-center", "nowrap", {isTimePayStyle: e.isTimePay && e.search.date && e.moment().format("YYYY-MM-DD") == e.moment(e.search.date).format("YYYY-MM-DD") && e.moment().format("HH:mm") >= t.beginTime && e.moment().format("HH:mm") < t.endTime ? "isTimePayStyle" : ""}]
            }, [e._v(" " + e._s(t.beginTime) + "-" + e._s(t.endTime) + " ")])])
          })) : e._l(e.partialData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.partialData.length >= 5 ? "19%" : 95 / e.partialData.length + "%"}
            }, [s("div", {
              staticClass: "ivu-table-cell text-center",
              class: ["ivu-table-cell", "text-center", "nowrap", {isTimePayStyle: e.isTimePay && e.search.date && e.moment().format("YYYY-MM-DD") == e.moment(e.search.date).format("YYYY-MM-DD") && e.moment().format("HH:mm") >= t.beginTime && e.moment().format("HH:mm") < t.endTime ? "isTimePayStyle" : ""}]
            }, [!e.commonMethods.isApp() && 0 == i && e.tableTimeData.length >= 5 * (e.currentLength - 1) + e.partialData.length && e.tableTimeData.length > 5 && e.currentLength > 1 ? s("span", {
              staticClass: "pull-left",
              staticStyle: {cursor: "pointer"},
              on: {click: e.prev}
            }, [s("Icon", {
              attrs: {
                type: "ios-arrow-back",
                size: "20"
              }
            })], 1) : e._e(), e._v(" " + e._s(t.beginTime) + "-" + e._s(t.endTime) + " "), !e.commonMethods.isApp() && i == e.partialData.length - 1 && 0 != i && e.tableTimeData.length > 5 * (e.currentLength - 1) + e.partialData.length && e.tableTimeData.length > 5 ? s("span", {
              staticClass: "pull-right",
              staticStyle: {cursor: "pointer"},
              on: {click: e.next}
            }, [s("Icon", {attrs: {type: "ios-arrow-forward", size: "20"}})], 1) : e._e()])])
          }))], 2)]), s("tbody", {staticClass: "ivu-table-tbody"}, [e._l(e.tableVenueSite, (function (t, i) {
            return s("tr", {key: i}, [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableTimeData.length < 3 ? s("td", {style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}}, [s("div", {class: ["ivu-table-cell", "text-center", "nowrap"]}, [e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " ")])]) : e._e(), 1 === t.isTakeUp ? [e.partialData.length >= 5 ? e._l(5, (function (i) {
              return s("td", {
                key: i,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [s("div", {staticClass: "reserveBlock disabled else"}, [e._v(e._s(t.takeUpExplain))])])
            })) : e._l(e.partialData.length, (function (i) {
              return s("td", {
                key: i,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [s("div", {staticClass: "reserveBlock disabled else"}, [e._v(e._s(t.takeUpExplain))])])
            }))] : [e.currentSite.isSupportGroup != e.constObject.VENUE_IS.YES || 1 == e.reservationType ? [e._l(e.partialData, (function (i, n) {
              return [s("td", {
                key: n,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"},
                attrs: {colspan: n + 1 == e.partialData.length ? 2 : ""}
              }, [e.reservationTotalNum > 1 ? [t[i.id] ? s("div", {
                staticClass: "reserveBlock else",
                class: [e.constObject.RESERVATION_STATUS_COLOR[t[i.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(t, i) : "", e.commonMethods.isAdmin(e.userInfo.role) && t[i.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && t[i.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {selected: -1 !== e.selected.indexOf(i.id + "_" + t.id + "_" + t.dataId)}],
                on: {
                  click: function (s) {
                    return e.mousedownHandler(t, i)
                  }
                }
              }, [s("div", {
                staticStyle: {width: "100%", "text-align": "center"},
                domProps: {innerHTML: e._s(e.getReservationSpaceText(t, i.id))}
              })]) : e._e()] : [t[i.id] ? s("div", {
                staticClass: "reserveBlock position",
                class: [e.getReservationStyle(t[i.id]), e.commonMethods.isAdmin(e.userInfo.role) && t[i.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && t[i.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {selected: t[i.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? -1 !== e.selected.indexOf(i.id + "_" + t.id + "_" + t.dataId + "_" + t[i.id].orderDetailId) : -1 !== e.selected.indexOf(i.id + "_" + t.id + "_" + t.dataId)}],
                style: {cursor: e.commonMethods.hasHanderRule("OrderCancelBatch") && t[i.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED && 1 == e.reservationTotalNum && t[i.id].orderDetailId && t[i.id].adminRemark && !t[i.id].orderName ? "pointer" : ""},
                on: {
                  click: function (s) {
                    return e.mousedownHandler(t, i)
                  }
                }
              }, [s("div", {
                staticStyle: {
                  width: "100%",
                  "text-align": "center"
                }
              }, [s("span", {domProps: {innerHTML: e._s(e.getReservationSpaceText(t, i.id))}}), e.commonMethods.hasHanderRule(e.constObject.RULE_VENUE_ORDER.GET_ENTRY_DETAIL) && t[i.id] && t[i.id].orderType && [e.constObject.ORDER_TYPE.ONLINE, e.constObject.ORDER_TYPE.BUY].indexOf(t[i.id].orderType) > -1 && t[i.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? s("span", [s("list-button", {
                on: {
                  "on-click": function (s) {
                    return e.getGateInfo(t[i.id])
                  }
                }
              }, [s("Poptip", {attrs: {transfer: "", width: "400"}}, [s("div", {
                staticClass: "bloder text-info pointer",
                staticStyle: {"padding-left": "4px"}
              }, [e._v(" " + e._s(t[i.id].gateInCount ? t[i.id].gateInCount : 0) + "/" + e._s(t[i.id].buddyNum ? t[i.id].buddyNum + 1 : 1) + " ")]), e.isGateEntry ? s("div", {
                staticClass: "ivu-table-wrapper",
                attrs: {slot: "content"},
                slot: "content"
              }, [s("div", {staticClass: "ivu-table ivu-table-border ivu-table-small"}, [s("div", {staticClass: "ivu-table-body"}, [s("table", {
                attrs: {
                  border: "0",
                  cellpadding: "0",
                  cellspacing: "0"
                }
              }, [s("tbody", {staticClass: "ivu-table-tbody"}, [s("tr", [s("th", {staticStyle: {width: "60px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("序号")])]), s("th", {staticStyle: {width: "200px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("预约信息")])]), s("th", {staticStyle: {width: "140px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("到场情况")])])]), s("tr", [s("td", [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" 1 ")])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(" " + e._s(e.recordModel.orderRoleId && "[" + e.constObject.ROLE_NAME[e.recordModel.orderRoleId] + "]") + " " + e._s(e.recordModel.orderUid) + " " + e._s(e.recordModel.orderName) + " ")])]), s("td", [s("div", {
                class: ["ivu-table-cell", "bloder", {
                  "text-success": e.recordModel.isGateIn == e.constObject.COMMON_IS.YES,
                  "text-error": e.recordModel.isGateIn == e.constObject.COMMON_IS.NO
                }]
              }, [e._v(" " + e._s(e.constObject.GATE_ENTRY_TITLE[e.recordModel.isGateIn]) + " ")])])]), e._l(e.orderBuddyList, (function (t, i) {
                return s("tr", {key: i}, [s("td", [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" " + e._s(i + 2) + " ")])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(" " + e._s(t.userRoleId && "[" + e.constObject.ROLE_NAME[t.userRoleId] + "]") + " " + e._s(t.uid) + " " + e._s(t.name) + " ")])]), s("td", [s("div", {
                  class: ["ivu-table-cell", "bloder", {
                    "text-success": t.isGateIn == e.constObject.COMMON_IS.YES,
                    "text-error": t.isGateIn == e.constObject.COMMON_IS.NO
                  }]
                }, [e._v(" " + e._s(e.constObject.GATE_ENTRY_TITLE[t.isGateIn]) + " ")])])])
              }))], 2)])])])]) : e._e()])], 1)], 1) : e._e()])]) : e._e()]], 2)]
            }))] : [e._l(e.partialData, (function (i, n) {
              return [s("td", {
                key: n,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [e.reservationTotalNum > 1 ? [s("div", {class: ["partial", {partialColumn: t.groupOrderType == (e.constObject.GROUP_ORDER_TYPE.EW || null) ? "partialColumn" : ""}]}, e._l(t.spaceInfo, (function (n, a) {
                return s("div", {
                  key: a,
                  style: {
                    height: t.groupOrderType && t.groupOrderType != e.constObject.GROUP_ORDER_TYPE.NS ? "100%" : 100 / t.spaceInfo.length + "%",
                    width: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW ? 100 / t.spaceInfo.length + "%" : "100%"
                  }
                }, [n[i.id] ? s("div", {
                  staticClass: "reserveBlock else",
                  class: [e.constObject.RESERVATION_STATUS_COLOR[n[i.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(n, i) : "", e.commonMethods.isAdmin(e.userInfo.role) && n[i.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && n[i.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {
                    selected: -1 !== e.selected.indexOf(i.id + "_" + n.id + "_" + n.dataId),
                    NS: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.NS && a != t.spaceInfo.length - 1 ? "NS" : "",
                    EW: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW && a != t.spaceInfo.length - 1 ? "EW\t" : ""
                  }],
                  staticStyle: {width: "100%", height: "100%"},
                  on: {
                    click: function (t) {
                      return e.mousedownHandler(n, i)
                    }
                  }
                }, [s("div", {
                  staticStyle: {width: "100%", "text-align": "center"},
                  domProps: {innerHTML: e._s(e.getReservationSpaceText(n, i.id))}
                })]) : e._e()])
              })), 0)] : [s("div", {class: ["partial", {partialColumn: t.groupOrderType == (e.constObject.GROUP_ORDER_TYPE.EW || null) ? "partialColumn" : ""}]}, e._l(t.spaceInfo, (function (n, a) {
                return s("div", {
                  key: a,
                  style: {
                    height: t.groupOrderType && t.groupOrderType != e.constObject.GROUP_ORDER_TYPE.NS ? "100%" : 100 / t.spaceInfo.length + "%",
                    width: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW ? 100 / t.spaceInfo.length + "%" : "100%"
                  }
                }, [n[i.id] ? s("div", {
                  staticClass: "reserveBlock position",
                  class: [e.constObject.RESERVATION_STATUS_COLOR[n[i.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(n, i) : "", e.commonMethods.isAdmin(e.userInfo.role) && n[i.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && n[i.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {
                    selected: n[i.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? -1 !== e.selected.indexOf(i.id + "_" + n.id + "_" + n.dataId + "_" + n[i.id].orderDetailId) : -1 !== e.selected.indexOf(i.id + "_" + n.id + "_" + n.dataId),
                    NS: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.NS && a != t.spaceInfo.length - 1 ? "NS" : "",
                    EW: t.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW && a != t.spaceInfo.length - 1 ? "EW\t" : ""
                  }],
                  staticStyle: {width: "100%", height: "100%"},
                  style: {cursor: e.commonMethods.hasHanderRule("OrderCancelBatch") && n[i.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED && 1 == e.reservationTotalNum && n[i.id].orderDetailId && n[i.id].adminRemark && !n[i.id].orderName ? "pointer" : ""},
                  on: {
                    click: function (t) {
                      return e.mousedownHandler(n, i)
                    }
                  }
                }, [s("div", {
                  staticStyle: {width: "100%", "text-align": "center"},
                  domProps: {innerHTML: e._s(e.getReservationSpaceText(n, i.id))}
                })]) : e._e()])
              })), 0)]], 2)]
            }))]]], 2)
          })), s("tr", [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableTimeData.length < 3 ? s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "5%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v("场地")])]) : e._e(), e.commonMethods.isApp() ? e._l(e.tableTimeData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.tableTimeData && e.tableTimeData.length > 4 ? "0.72rem" : 96 / e.tableTimeData.length + "%"}
            }, [s("div", {
              staticClass: "MobileTime",
              class: ["ivu-table-cell", "text-center", "nowrap", {isTimePayStyle: e.isTimePay && e.search.date && e.moment().format("YYYY-MM-DD") == e.moment(e.search.date).format("YYYY-MM-DD") && e.moment().format("HH:mm") >= t.beginTime && e.moment().format("HH:mm") < t.endTime ? "isTimePayStyle" : ""}]
            }, [e._v(" " + e._s(t.beginTime) + "-" + e._s(t.endTime) + " ")])])
          })) : e._l(e.partialData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.partialData.length >= 5 ? "19%" : 95 / e.partialData.length + "%"}
            }, [s("div", {
              staticClass: "ivu-table-cell text-center",
              class: ["ivu-table-cell", "text-center", "nowrap", {isTimePayStyle: e.isTimePay && e.search.date && e.moment().format("YYYY-MM-DD") == e.moment(e.search.date).format("YYYY-MM-DD") && e.moment().format("HH:mm") >= t.beginTime && e.moment().format("HH:mm") < t.endTime ? "isTimePayStyle" : ""}]
            }, [!e.commonMethods.isApp() && 0 == i && e.tableTimeData.length >= 5 * (e.currentLength - 1) + e.partialData.length && e.tableTimeData.length > 5 && e.currentLength > 1 ? s("span", {
              staticClass: "pull-left",
              staticStyle: {cursor: "pointer"},
              on: {click: e.prev}
            }, [s("Icon", {
              attrs: {
                type: "ios-arrow-back",
                size: "20"
              }
            })], 1) : e._e(), e._v(" " + e._s(t.beginTime) + "-" + e._s(t.endTime) + " "), !e.commonMethods.isApp() && i == e.partialData.length - 1 && 0 != i && e.tableTimeData.length > 5 * (e.currentLength - 1) + e.partialData.length && e.tableTimeData.length > 5 ? s("span", {
              staticClass: "pull-right",
              staticStyle: {cursor: "pointer"},
              on: {click: e.next}
            }, [s("Icon", {attrs: {type: "ios-arrow-forward", size: "20"}})], 1) : e._e()])])
          }))], 2)], 2)])])]) : s("div", {class: {spaceTable: e.commonMethods.isApp() && e.tableVenueSite.length >= 3 ? "spaceTable" : ""}}, [s("div", {
            style: {
              width: e.commonMethods.isApp() && e.tableVenueSite.length >= 3 ? "4rem" : "",
              position: "relative"
            }
          }, [s("table", {
            attrs: {
              border: "0",
              cellpadding: "0",
              cellspacing: "0"
            }
          }, [s("thead", [s("tr", [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableVenueSite.length < 3 ? s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "3%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v("时间段")])]) : e._e(), e.commonMethods.isApp() ? e._l(e.tableVenueSite, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.tableVenueSite && e.tableVenueSite.length > 4 ? "0.72rem" : 96 / e.tableVenueSite.length + "%"}
            }, [s("div", {staticClass: "text-center"}, [e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " ")])])
          })) : e._l(e.partialData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.partialData.length >= 5 ? "19%" : 95 / e.partialData.length + "%"}
            }, [s("div", {staticClass: "ivu-table-cell text-center"}, [!e.commonMethods.isApp() && 0 == i && e.tableVenueSite.length >= 5 * (e.currentLength - 1) + e.partialData.length && e.tableVenueSite.length > 5 && e.currentLength > 1 ? s("span", {
              staticClass: "pull-left",
              staticStyle: {cursor: "pointer"},
              on: {click: e.prev}
            }, [s("Icon", {
              attrs: {
                type: "ios-arrow-back",
                size: "20"
              }
            })], 1) : e._e(), e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " "), !e.commonMethods.isApp() && i == e.partialData.length - 1 && 0 != i && e.tableVenueSite.length > 5 * (e.currentLength - 1) + e.partialData.length && e.tableVenueSite.length > 5 ? s("span", {
              staticClass: "pull-right",
              staticStyle: {cursor: "pointer"},
              on: {click: e.next}
            }, [s("Icon", {attrs: {type: "ios-arrow-forward", size: "20"}})], 1) : e._e()])])
          }))], 2)]), s("tbody", {staticClass: "ivu-table-tbody"}, [e._l(e.tableTimeData, (function (t, i) {
            return s("tr", {key: i}, [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableVenueSite.length < 3 ? s("td", {style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}}, [s("div", {class: ["ivu-table-cell", "text-center", "nowrap", {isTimePayStyle: e.isTimePay && e.search.date && e.moment().format("YYYY-MM-DD") == e.moment(e.search.date).format("YYYY-MM-DD") && e.moment().format("HH:mm") >= t.beginTime && e.moment().format("HH:mm") < t.endTime ? "isTimePayStyle" : ""}]}, [e._v(" " + e._s(t.beginTime) + "-" + e._s(t.endTime) + " ")])]) : e._e(), 1 === t.isTakeUp ? [e.partialData.length >= 5 ? e._l(5, (function (i) {
              return s("td", {
                key: i,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [s("div", {staticClass: "reserveBlock disabled else"}, [e._v(e._s(t.takeUpExplain))])])
            })) : e._l(e.partialData.length, (function (i) {
              return s("td", {
                key: i,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [s("div", {staticClass: "reserveBlock disabled else"}, [e._v(e._s(t.takeUpExplain))])])
            }))] : [e.currentSite.isSupportGroup != e.constObject.VENUE_IS.YES || 1 == e.reservationType ? [e._l(e.partialData, (function (i, n) {
              return [s("td", {
                key: n,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"},
                attrs: {colspan: n + 1 == e.partialData.length ? 2 : ""}
              }, [e.reservationTotalNum > 1 ? [i[t.id] ? s("div", {
                staticClass: "reserveBlock else",
                class: [e.constObject.RESERVATION_STATUS_COLOR[i[t.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(i, t) : "", e.commonMethods.isAdmin(e.userInfo.role) && i[t.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && i[t.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {selected: -1 !== e.selected.indexOf(t.id + "_" + i.id + "_" + i.dataId)}],
                on: {
                  click: function (s) {
                    return e.mousedownHandler(i, t)
                  }
                }
              }, [s("div", {
                staticStyle: {width: "100%", "text-align": "center"},
                domProps: {innerHTML: e._s(e.getReservationSpaceText(i, t.id))}
              })]) : e._e()] : [i[t.id] ? s("div", {
                staticClass: "reserveBlock position",
                class: [e.getReservationStyle(i[t.id]), e.commonMethods.isAdmin(e.userInfo.role) && i[t.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && i[t.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {selected: i[t.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? -1 !== e.selected.indexOf(t.id + "_" + i.id + "_" + i.dataId + "_" + i[t.id].orderDetailId) : -1 !== e.selected.indexOf(t.id + "_" + i.id + "_" + i.dataId)}],
                style: {cursor: e.commonMethods.hasHanderRule("OrderCancelBatch") && i[t.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED && 1 == e.reservationTotalNum && i[t.id].orderDetailId && i[t.id].adminRemark && !i[t.id].orderName ? "pointer" : ""},
                on: {
                  click: function (s) {
                    return e.mousedownHandler(i, t)
                  }
                }
              }, [s("div", {
                staticStyle: {
                  width: "100%",
                  "text-align": "center"
                }
              }, [s("span", {domProps: {innerHTML: e._s(e.getReservationSpaceText(i, t.id))}}), e.commonMethods.hasHanderRule(e.constObject.RULE_VENUE_ORDER.GET_ENTRY_DETAIL) && i[t.id] && i[t.id].orderType && [e.constObject.ORDER_TYPE.ONLINE, e.constObject.ORDER_TYPE.BUY].indexOf(i[t.id].orderType) > -1 && i[t.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? s("span", [s("list-button", {
                on: {
                  "on-click": function (s) {
                    return e.getGateInfo(i[t.id])
                  }
                }
              }, [s("Poptip", {attrs: {transfer: "", width: "400"}}, [s("div", {
                staticClass: "bloder text-info pointer",
                staticStyle: {"padding-left": "4px"}
              }, [e._v(" " + e._s(i[t.id].gateInCount ? i[t.id].gateInCount : 0) + "/" + e._s(i[t.id].buddyNum ? i[t.id].buddyNum + 1 : 1) + " ")]), e.isGateEntry ? s("div", {
                staticClass: "ivu-table-wrapper",
                attrs: {slot: "content"},
                slot: "content"
              }, [s("div", {staticClass: "ivu-table ivu-table-border ivu-table-small"}, [s("div", {staticClass: "ivu-table-body"}, [s("table", {
                attrs: {
                  border: "0",
                  cellpadding: "0",
                  cellspacing: "0"
                }
              }, [s("tbody", {staticClass: "ivu-table-tbody"}, [s("tr", [s("th", {staticStyle: {width: "60px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("序号")])]), s("th", {staticStyle: {width: "200px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("预约信息")])]), s("th", {staticStyle: {width: "140px"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("到场情况")])])]), s("tr", [s("td", [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" 1 ")])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(" " + e._s(e.recordModel.orderRoleId && "[" + e.constObject.ROLE_NAME[e.recordModel.orderRoleId] + "]") + " " + e._s(e.recordModel.orderUid) + " " + e._s(e.recordModel.orderName) + " ")])]), s("td", [s("div", {
                class: ["ivu-table-cell", "bloder", {
                  "text-success": e.recordModel.isGateIn == e.constObject.COMMON_IS.YES,
                  "text-error": e.recordModel.isGateIn == e.constObject.COMMON_IS.NO
                }]
              }, [e._v(" " + e._s(e.constObject.GATE_ENTRY_TITLE[e.recordModel.isGateIn]) + " ")])])]), e._l(e.orderBuddyList, (function (t, i) {
                return s("tr", {key: i}, [s("td", [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" " + e._s(i + 2) + " ")])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(" " + e._s(t.userRoleId && "[" + e.constObject.ROLE_NAME[t.userRoleId] + "]") + " " + e._s(t.uid) + " " + e._s(t.name) + " ")])]), s("td", [s("div", {
                  class: ["ivu-table-cell", "bloder", {
                    "text-success": t.isGateIn == e.constObject.COMMON_IS.YES,
                    "text-error": t.isGateIn == e.constObject.COMMON_IS.NO
                  }]
                }, [e._v(" " + e._s(e.constObject.GATE_ENTRY_TITLE[t.isGateIn]) + " ")])])])
              }))], 2)])])])]) : e._e()])], 1)], 1) : e._e()])]) : e._e()]], 2)]
            }))] : [e._l(e.partialData, (function (i, n) {
              return [s("td", {
                key: n,
                style: {height: e.currentSite.isSupportGroup == e.constObject.VENUE_IS.YES && -1 == e.reservationType ? "80px" : "41px"}
              }, [e.reservationTotalNum > 1 ? [s("div", {class: ["partial", {partialColumn: i.groupOrderType == (e.constObject.GROUP_ORDER_TYPE.EW || null) ? "partialColumn" : ""}]}, e._l(i.spaceInfo, (function (n, a) {
                return s("div", {
                  key: a,
                  style: {
                    height: i.groupOrderType && i.groupOrderType != e.constObject.GROUP_ORDER_TYPE.NS ? "100%" : 100 / i.spaceInfo.length + "%",
                    width: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW ? 100 / i.spaceInfo.length + "%" : "100%"
                  }
                }, [n[t.id] ? s("div", {
                  staticClass: "reserveBlock else",
                  class: [e.constObject.RESERVATION_STATUS_COLOR[n[t.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(n, t) : "", e.commonMethods.isAdmin(e.userInfo.role) && n[t.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && n[t.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {
                    selected: -1 !== e.selected.indexOf(t.id + "_" + n.id + "_" + n.dataId),
                    NS: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.NS && a != i.spaceInfo.length - 1 ? "NS" : "",
                    EW: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW && a != i.spaceInfo.length - 1 ? "EW\t" : ""
                  }],
                  staticStyle: {width: "100%", height: "100%"},
                  on: {
                    click: function (s) {
                      return e.mousedownHandler(n, t)
                    }
                  }
                }, [s("div", {
                  staticStyle: {width: "100%", "text-align": "center"},
                  domProps: {innerHTML: e._s(e.getReservationSpaceText(n, t.id))}
                })]) : e._e()])
              })), 0)] : [s("div", {class: ["partial", {partialColumn: i.groupOrderType == (e.constObject.GROUP_ORDER_TYPE.EW || null) ? "partialColumn" : ""}]}, e._l(i.spaceInfo, (function (n, a) {
                return s("div", {
                  key: a,
                  style: {
                    height: i.groupOrderType && i.groupOrderType != e.constObject.GROUP_ORDER_TYPE.NS ? "100%" : 100 / i.spaceInfo.length + "%",
                    width: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW ? 100 / i.spaceInfo.length + "%" : "100%"
                  }
                }, [n[t.id] ? s("div", {
                  staticClass: "reserveBlock position",
                  class: [e.constObject.RESERVATION_STATUS_COLOR[n[t.id].reservationStatus], e.reservationTotalNum > 1 ? e.computedBg(n, t) : "", e.commonMethods.isAdmin(e.userInfo.role) && n[t.id].reservationStatus == e.constObject.RESERVATION_STATUS_ELSE.DISABLED && n[t.id].adminTake && "adjustOrder" != e.$route.name ? "adminTake" : "", {
                    selected: n[t.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED ? -1 !== e.selected.indexOf(t.id + "_" + n.id + "_" + n.dataId + "_" + n[t.id].orderDetailId) : -1 !== e.selected.indexOf(t.id + "_" + n.id + "_" + n.dataId),
                    NS: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.NS && a != i.spaceInfo.length - 1 ? "NS" : "",
                    EW: i.groupOrderType == e.constObject.GROUP_ORDER_TYPE.EW && a != i.spaceInfo.length - 1 ? "EW\t" : ""
                  }],
                  staticStyle: {width: "100%", height: "100%"},
                  style: {cursor: e.commonMethods.hasHanderRule("OrderCancelBatch") && n[t.id].reservationStatus == e.constObject.RESERVATION_STATUS.RESERVED && 1 == e.reservationTotalNum && n[t.id].orderDetailId && n[t.id].adminRemark && !n[t.id].orderName ? "pointer" : ""},
                  on: {
                    click: function (s) {
                      return e.mousedownHandler(n, t)
                    }
                  }
                }, [s("div", {
                  staticStyle: {width: "100%", "text-align": "center"},
                  domProps: {innerHTML: e._s(e.getReservationSpaceText(n, t.id))}
                })]) : e._e()])
              })), 0)]], 2)]
            }))]]], 2)
          })), s("tr", [!e.commonMethods.isApp() || e.commonMethods.isApp() && e.tableVenueSite.length < 3 ? s("td", {attrs: {width: e.commonMethods.isApp() ? "0.88rem" : "3%"}}, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v("时间段")])]) : e._e(), e.commonMethods.isApp() ? e._l(e.tableVenueSite, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.tableVenueSite && e.tableVenueSite.length > 4 ? "0.72rem" : 96 / e.tableVenueSite.length + "%"}
            }, [s("div", {staticClass: "ivu-table-cell text-center"}, [e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " ")])])
          })) : e._l(e.partialData, (function (t, i) {
            return s("td", {
              key: i,
              attrs: {width: e.partialData.length >= 5 ? "19%" : 95 / e.partialData.length + "%"}
            }, [s("div", {staticClass: "ivu-table-cell text-center"}, [!e.commonMethods.isApp() && 0 == i && e.tableVenueSite.length >= 5 * (e.currentLength - 1) + e.partialData.length && e.tableVenueSite.length > 5 && e.currentLength > 1 ? s("span", {
              staticClass: "pull-left",
              staticStyle: {cursor: "pointer"},
              on: {click: e.prev}
            }, [s("Icon", {
              attrs: {
                type: "ios-arrow-back",
                size: "20"
              }
            })], 1) : e._e(), e._v(" " + e._s(e.isWeekDisplay && t.spaceDate ? t.spaceDate : t.spaceGroupName ? t.spaceGroupName : t.spaceName) + " "), !e.commonMethods.isApp() && i == e.partialData.length - 1 && 0 != i && e.tableVenueSite.length > 5 * (e.currentLength - 1) + e.partialData.length && e.tableVenueSite.length > 5 ? s("span", {
              staticClass: "pull-right",
              staticStyle: {cursor: "pointer"},
              on: {click: e.next}
            }, [s("Icon", {attrs: {type: "ios-arrow-forward", size: "20"}})], 1) : e._e()])])
          }))], 2)], 2)])])])])])])]), s("i-col", {attrs: {sm: 12}}, [s("div", {
            staticStyle: {
              background: "white",
              "border-radius": "3px",
              display: "flex",
              "flex-wrap": "wrap",
              "justify-content": "space-around"
            }, style: {justifyContent: e.commonMethods.isApp() ? "space-around" : "flex-start"}
          }, [e.reservationTotalNum > 1 ? [e._l(e.constObject.RESERVATION_STATUS_ELSE, (function (t, i) {
            return [t != e.constObject.RESERVATION_STATUS_ELSE.DISABLED ? s("div", {
              key: i,
              staticClass: "example reserveBlock text-center",
              class: e.constObject.RESERVATION_STATUS_COLOR[t] + "Text"
            }, [e._v(" " + e._s(e.constObject.RESERVATION_STATUS_ELSE_TITLE[t]) + " ")]) : e._e()]
          }))] : [e._l(e.constObject.RESERVATION_STATUS, (function (t, i) {
            return [t != e.constObject.RESERVATION_STATUS.DISABLED ? s("div", {
              key: i,
              staticClass: "example reserveBlock text-center",
              class: e.constObject.RESERVATION_STATUS_COLOR[t] + "Text"
            }, [e._v(" " + e._s(e.constObject.RESERVATION_STATUS_TITLE[t]) + " ")]) : e._e()]
          }))], s("div", {staticClass: "example reserveBlock text-center selectedText"}, [e._v("已选择")]), s("div", {
            staticClass: "example reserveBlock text-center ",
            class: e.constObject.RESERVATION_STATUS_COLOR[e.constObject.RESERVATION_STATUS.DISABLED] + "Text"
          }, [e._v(" 不开放 ")])], 2)]), this.commonMethods.isAdmin(this.userInfo.role) ? e._e() : s("i-col", {attrs: {sm: 12}}, [s("div", {
            staticStyle: {
              "padding-left": "4px",
              "text-align": "center",
              "margin-bottom": "10px"
            }, style: {textAlign: e.commonMethods.isApp() ? "center" : "right"}, on: {
              click: function () {
                return e.showVenue = !0
              }
            }
          }, [s("Icon", {attrs: {type: "ios-help-circle-outline"}}), s("span", {
            staticClass: "mobileField",
            staticStyle: {"margin-left": "3px", cursor: "pointer"}
          }, [s("u", [e._v("没有找到空闲场地?点击查看其它同类型场地吧。")])])], 1)])], 1)] : s("Alert", {attrs: {type: "warning"}}, [e.search.venueSiteId ? [e._v(e._s(e.takeUpExplain || "未安排场地空间时间段"))] : [e._v("未选择场地")]], 2), !e.commonMethods.hasLogin() || e.commonMethods.isApp() || e.commonMethods.isAdmin(this.userInfo.role) ? e._e() : s("div", {
            staticStyle: {
              "text-align": "center",
              "margin-bottom": "10px"
            }
          }, [s("Checkbox", {
            staticClass: "text-left", model: {
              value: e.nextStep, callback: function (t) {
                e.nextStep = t
              }, expression: "nextStep"
            }
          }, [e._v(" 已阅读并同意 ")]), s("span", {
            staticClass: "protocolsClass",
            staticStyle: {"flex-shrink": "0"},
            on: {
              click: function () {
                return e.isprotocols = !0
              }
            }
          }, [s("u", [e._v(e._s(e.protocols.title))])])], 1), this.commonMethods.isApp() ? e._e() : s("div", {
            staticClass: "checkStep",
            staticStyle: {"margin-bottom": "4px"}
          }, ["ReservationManage" != e.$route.name && "MobileReservationManage" != e.$route.name || e.commonMethods.isBuyTicketAdmin(e.userInfo.role) && 1 == e.currentSite.isOfflineTicket ? ["PkuVenueIntroduceReservation" == e.$route.name || "IndexVenueIntroduceReservation" == e.$route.name ? [s("div", {staticClass: "payHandle"}, [e.commonMethods.isApp() ? [s("Button", {
            attrs: {type: "default"},
            nativeOn: {
              click: function (t) {
                return e.backStep(t)
              }
            }
          }, [e._v(" 上一步 ")]), e.parCurrentSite.isSupportReservation ? s("list-button", {
            attrs: {rule: "ReservationOrderDetail"},
            on: {"on-click": e.submitDate}
          }, [s("Button", {
            attrs: {
              disabled: !e.nextStep,
              type: "primary"
            }
          }, [e._v("我要预约")])], 1) : e._e()] : [s("div", {
            staticClass: "payHandleItem cancel", on: {
              click: function (t) {
                return e.$router.back()
              }
            }
          }, [e._v("返回")]), e.commonMethods.hasHanderRule("ReservationOrderDetail") && e.parCurrentSite.isSupportReservation ? s("div", {
            staticClass: "payHandleItem ",
            style: {background: e.nextStep ? e.config.colorStyle && e.config.colorStyle.appointmentColor || "#eb6a1b" : "#eee"},
            on: {click: e.reservationSpace}
          }, [e._v(" 我要预约 ")]) : e._e()]], 2)] : [e.stepArr.indexOf(e.constObject.RESERVATION_STEP.CHOICE_SITE) > 0 ? s("Button", {
            attrs: {type: "info"},
            nativeOn: {
              click: function (t) {
                return e.backStep(t)
              }
            }
          }, [e._v(" 上一步 ")]) : e._e(), s("list-button", {
            attrs: {rule: "ReservationOrderDetail"},
            on: {"on-click": e.submitDate}
          }, [s("Button", {
            attrs: {
              disabled: !e.nextStep,
              type: "primary"
            }
          }, [e._v("我要预约")])], 1), s("list-button", {
            attrs: {rule: "occupySpace"}, on: {
              "on-click": function (t) {
                return e.occupy(e.constObject.ORDER_TYPE.OCCUPY)
              }
            }
          }, [s("Button", {attrs: {type: "warning"}}, [e._v("占用/取消占用")])], 1)]] : [s("list-button", {
            attrs: {rule: "occupySpace"},
            on: {
              "on-click": function (t) {
                return e.occupy(e.constObject.ORDER_TYPE.OCCUPY)
              }
            }
          }, [s("Button", {attrs: {type: "warning"}}, [e._v("占用/取消占用")])], 1), e.isTimePay ? e._e() : s("list-button", {
            attrs: {rule: e.constObject.RULE_VENUE_ORDER.RESERVED_SITE},
            on: {
              "on-click": function (t) {
                return e.occupy(e.constObject.ORDER_TYPE.RESERVED)
              }
            }
          }, [s("Button", {attrs: {type: "success"}}, [e._v("预留场地")])], 1), 1 != e.reservationTotalNum || e.isTimePay ? e._e() : s("list-button", {
            attrs: {rule: "OrderCancelBatch"},
            on: {"on-click": e.cancelOrderBatch}
          }, [s("Button", {attrs: {type: "info"}}, [e._v("取消订场")])], 1)]], 2), e.commonMethods.hasLogin() && e.commonMethods.isApp() && (e.parCurrentSite.isSupportReservation || e.currentSite.isSupportReservation) ? s("div", {staticClass: "reservation-submit"}, [s("div", {
            staticClass: "siteHandelLeft",
            staticStyle: {flex: "1"}
          }, [s("Checkbox", {
            staticClass: "text-left", model: {
              value: e.nextStep, callback: function (t) {
                e.nextStep = t
              }, expression: "nextStep"
            }
          }, [e._v(" 已阅读并同意 ")]), s("span", {
            staticClass: "protocolsClass mobileProtocolsClass",
            staticStyle: {"flex-shrink": "0"},
            on: {
              click: function () {
                return e.isprotocols = !0
              }
            }
          }, [s("u", [e._v(e._s(e.protocols.title))])])], 1), s("div", {
            staticClass: "siteHandelItem",
            style: {
              marginRight: e.parCurrentSite.isSupportRent || e.currentSite.isSupportRent ? 0 : "20px",
              background: e.nextStep ? e.config.colorStyle && e.config.colorStyle.appointmentColor || "#eb6a1b" : "#eee"
            },
            on: {click: e.reservationSpace}
          }, [e._v(" 我要预约 ")])]) : e._e(), s("Modal", {
            attrs: {"footer-hide": ""},
            model: {
              value: e.showVenue, callback: function (t) {
                e.showVenue = t
              }, expression: "showVenue"
            }
          }, [s("div", {staticClass: "modalTitle"}, [e._v(" 查看同类型场地 ")]), s("Form", [e.campusList && e.campusList.length > 1 ? s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"}
          }, [s("RadioGroup", {
            attrs: {type: "button"}, model: {
              value: e.search.campus, callback: function (t) {
                e.$set(e.search, "campus", t)
              }, expression: "search.campus"
            }
          }, e._l(e.campusList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.codename) + " ")])
          })), 1)], 1) : e._e(), s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"}
          }, [s("RadioGroup", {
            attrs: {type: "button"},
            on: {"on-change": e.changeVenueId},
            model: {
              value: e.search.venueId, callback: function (t) {
                e.$set(e.search, "venueId", t)
              }, expression: "search.venueId"
            }
          }, e._l(e.venueList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.venueName) + " ")])
          })), 1)], 1), s("FormItem", {
            staticClass: "special",
            staticStyle: {"margin-bottom": "10px"}
          }, [s("RadioGroup", {
            attrs: {type: "button"}, model: {
              value: e.search.venueSiteId, callback: function (t) {
                e.$set(e.search, "venueSiteId", t)
              }, expression: "search.venueSiteId"
            }
          }, e._l(e.venueSiteList, (function (t, i) {
            return s("Radio", {key: i, attrs: {disabled: e.groupFlag, label: t.id}}, [e._v(" " + e._s(t.siteName) + " ")])
          })), 1)], 1)], 1)], 1), s("Modal", {
            attrs: {
              title: e.orderType == e.constObject.ORDER_TYPE.OCCUPY ? "填写占用说明" : "填写预留说明",
              "footer-hide": ""
            }, model: {
              value: e.isOccupy, callback: function (t) {
                e.isOccupy = t
              }, expression: "isOccupy"
            }
          }, [s("Form", {
            ref: "form",
            attrs: {model: e.space, "label-position": "left"}
          }, [e.orderType == e.constObject.ORDER_TYPE.RESERVED ? [s("FormItem", {
            attrs: {
              label: "日期",
              rules: {
                required: !0, validator: function () {
                }
              }
            }
          }, [s("DatePicker", {
            attrs: {format: "yyyy-MM-dd", type: "date", placeholder: "开始日期", clearable: !1},
            model: {
              value: e.space.planStartDate, callback: function (t) {
                e.$set(e.space, "planStartDate", t)
              }, expression: "space.planStartDate"
            }
          }), e._v(" - "), s("DatePicker", {
            attrs: {format: "yyyy-MM-dd", type: "date", placeholder: "结束日期"},
            model: {
              value: e.space.planEndDate, callback: function (t) {
                e.$set(e.space, "planEndDate", t)
              }, expression: "space.planEndDate"
            }
          })], 1), s("FormItem", {attrs: {prop: "freeMin"}}, [s("span", {staticClass: "labelCustom ivu-form-item-label"}, [e._v("订单释放/min")]), s("InputNumber", {
            staticStyle: {"margin-bottom": "10px"},
            attrs: {placeholder: "订单开始前多少分钟释放订单", min: 1},
            model: {
              value: e.space.freeMin, callback: function (t) {
                e.$set(e.space, "freeMin", t)
              }, expression: "space.freeMin"
            }
          })], 1)] : e._e(), s("FormItem", {attrs: {prop: "remark"}}, [s("span", {staticClass: "labelCustom ivu-form-item-label"}, [e._v(" " + e._s(e.orderType == e.constObject.ORDER_TYPE.OCCUPY ? "填写占用说明" : "填写预留说明") + " ")]), s("Input", {
            staticStyle: {
              "margin-bottom": "10px",
              width: "200px"
            },
            attrs: {placeholder: e.orderType == e.constObject.ORDER_TYPE.OCCUPY ? "填写占用说明" : "填写预留说明"},
            model: {
              value: e.space.remark, callback: function (t) {
                e.$set(e.space, "remark", t)
              }, expression: "space.remark"
            }
          })], 1)], 2), s("div", {staticClass: "checkStep"}, [s("list-button", {
            on: {
              "on-click": function (t) {
                e.isOccupy = !1
              }
            }
          }, [s("Button", {attrs: {type: "default"}}, [e._v("取消")])], 1), s("list-button", {
            attrs: {rule: "occupySpace"},
            on: {"on-click": e.occupySpace}
          }, [s("Button", {attrs: {type: "primary"}}, [e._v("确定")])], 1)], 1)], 1), s("Modal", {
            attrs: {
              "footer-hide": "",
              "mask-closable": !1,
              closable: !1,
              width: e.commonMethods.isApp() ? 350 : 786
            }, model: {
              value: e.isprotocols, callback: function (t) {
                e.isprotocols = t
              }, expression: "isprotocols"
            }
          }, [s("h3", {
            staticStyle: {
              width: "100%",
              "text-align": "center",
              "margin-bottom": "20px",
              "max-height": "400px"
            }
          }, [e._v(e._s(e.protocols.title))]), s("div", {
            staticStyle: {"overflow-y": "auto"},
            style: {maxHeight: e.commonMethods.isApp() ? "380px" : "600px"}
          }, [s("div", {
            class: {
              proContent: e.commonMethods.isApp() ? "" : "proContent",
              proContentApp: e.commonMethods.isApp() ? "proContentApp" : ""
            }, staticStyle: {"min-height": "350px"}, domProps: {innerHTML: e._s(e.protocols.content)}
          })]), s("div", {
            staticClass: "flexRow",
            staticStyle: {"padding-top": "10px"}
          }, [s("div", [e.sumSecond ? s("span", [e._v(" 弹窗将在 "), s("b", [e._v(e._s(e.sumSecond))]), e._v(" 秒后关闭。 ")]) : e._e()]), e.protocols.noAllowClose ? e._e() : s("Button", {
            attrs: {type: "primary"},
            on: {click: e.closeModal}
          }, [e._v("关闭")])], 1)]), s("Modal", {
            attrs: {"mask-closable": !1, "footer-hide": "", title: "线下支付", width: "768"},
            model: {
              value: e.offlinePayModal, callback: function (t) {
                e.offlinePayModal = t
              }, expression: "offlinePayModal"
            }
          }, [e.commonMethods.hasHanderRule(this.constObject.RULE_ORDER.OFFLINE_PAY) ? s("div", {
            staticStyle: {
              "max-height": "600px",
              "min-height": "400px",
              overflow: "auto"
            }
          }, [s("PayOrder", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.currPayStep == e.OFFLINE_PAY_STEP.PAY,
              expression: "currPayStep == OFFLINE_PAY_STEP.PAY"
            }], ref: "payOrder", on: {"set-title": e.toOfflinePayComplete}
          }), s("Complete", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.currPayStep == e.OFFLINE_PAY_STEP.COMPLETE,
              expression: "currPayStep == OFFLINE_PAY_STEP.COMPLETE"
            }], ref: "complete", attrs: {preRouterPush: e.preRouterPush}
          })], 1) : e._e()])], 2)
        }, n = [],
        a = (s("a9e3"), s("4160"), s("159b"), s("b64b"), s("ac1f"), s("841c"), s("d3b7"), s("c975"), s("e25e"), s("1276"), s("fb6a"), s("4e82"), s("b0c0"), s("a434"), s("d81d"), s("a15b"), s("f044")),
        r = s("3bd1"), o = function () {
          var e = this, t = e.$createElement, s = e._self._c || t;
          return s("div", {
            staticClass: "bannerBox",
            on: {mouseenter: e.enter, mouseleave: e.leave, touchend: e.leave}
          }, [e.isConcat ? s("img", {
            staticClass: "imgStyle",
            attrs: {src: e.commonMethods.attachmentView(e.bannerList[e.currentIndex], !0), alt: ""}
          }) : s("img", {
            staticClass: "imgStyle",
            attrs: {src: e.bannerList[e.currentIndex], alt: ""}
          }), e.bannerList.length > 1 ? s("div", {
            staticClass: "leftBtn",
            on: {click: e.pre}
          }, [s("Icon", {
            attrs: {
              size: "23",
              color: "white",
              type: "ios-arrow-back"
            }
          })], 1) : e._e(), e.bannerList.length > 1 ? s("div", {
            staticClass: "rightBtn",
            on: {click: e.next}
          }, [s("Icon", {
            attrs: {
              color: "white",
              size: "23",
              type: "ios-arrow-forward"
            }
          })], 1) : e._e(), e.bannerList.length > 1 ? s("ul", {staticClass: "indicatorBox"}, e._l(e.bannerList, (function (t, i) {
            return s("li", {
              key: i,
              staticClass: "indicatorItem",
              class: {active: i == e.currentIndex},
              on: {
                click: function (t) {
                  return e.jump(i)
                }
              }
            })
          })), 0) : e._e()])
        }, c = [], d = {
          name: "switch-rotation", props: {
            bannerList: {
              type: Array, default: function () {
                return []
              }
            }, isConcat: {type: Boolean, default: !0}, isLoop: {type: Boolean, default: !0}
          }, data: function () {
            return {currentIndex: 0, timer: null}
          }, mounted: function () {
            var e = this;
            this.$nextTick((function () {
              e.init()
            }))
          }, beforeDestroy: function () {
            this.timer && clearInterval(this.timer)
          }, methods: {
            init: function () {
              var e = this;
              this.isLoop && (this.timer && clearInterval(this.timer), this.timer = setInterval((function () {
                e.bannerList && e.bannerList.length > 1 ? e.next() : e.timer && clearInterval(e.timer)
              }), 3e3))
            }, enter: function () {
              this.timer && clearInterval(this.timer)
            }, leave: function () {
              this.init()
            }, pre: function () {
              0 == this.currentIndex ? this.currentIndex = this.bannerList.length - 1 : this.currentIndex--
            }, next: function () {
              this.currentIndex == this.bannerList.length - 1 ? this.currentIndex = 0 : this.currentIndex++
            }, jump: function (e) {
              this.currentIndex = e
            }
          }
        }, l = d, u = (s("11d6"), s("2877")), h = Object(u["a"])(l, o, c, !1, null, "4ca51d77", null), p = h.exports, m = {
          name: "reservationStepOne",
          components: {PayOrder: a["a"], Complete: r["a"], switchRotation: p},
          props: {
            readonly: {type: Boolean, default: !1},
            isSite: {type: Boolean, default: !1},
            step: {type: Number, default: 1},
            stepArr: {
              type: Array, default: function () {
                return []
              }
            },
            schoolType: {type: Number, default: null},
            venueSiteId: {type: Number, default: 0}
          },
          data: function () {
            var e = this, t = {PAY: 1, COMPLETE: 2};
            return {
              sourceVenueData: {},
              showVenue: !1,
              isprotocols: !1,
              protocols: {},
              nextStep: this.commonMethods.isAdmin(this.userInfo.role),
              sourceVenueSiteData: {},
              search: {campus: 0, venueId: 0, venueSiteId: 0, date: this.moment().format("YYYY-MM-DD")},
              tableVenueSite: [],
              tableTimeData: [],
              selected: [],
              selectFlag: !1,
              isTakeUp: 0,
              orderToken: "",
              isWeekDisplay: !1,
              weekStartDate: "",
              takeUpExplain: "",
              oldMaxCount: 0,
              maxCount: 0,
              advanceReservationDays: 0,
              routeParamId: this.$route.params.id,
              options: {
                disabledDate: function (t) {
                  return t && e.advanceReservationDays && e.moment(t).format("YYYY-MM-DD") > e.moment().add("days", e.advanceReservationDays - 1).format("YYYY-MM-DD")
                }
              },
              currentLength: 1,
              maxIndex: 0,
              partialData: [],
              reservationTotalNum: null,
              space: {},
              isOccupy: !1,
              occupyList: [],
              orderId: null,
              adjustList: [],
              order: {},
              noCheck: !1,
              reservationDateDetail: "",
              reservationType: this.constObject.RESERVATION_TYPE.COMMON,
              isGroupOrder: null,
              groupFlag: !1,
              currentSite: {},
              siteId: null,
              campusId: null,
              venueId: null,
              sportType: null,
              parCurrentSite: {},
              phone: null,
              orderType: this.constObject.ORDER_TYPE.OCCUPY,
              reservationDate: "",
              isHasGroup: !0,
              isPKU: this.commonMethods.isPKU(),
              beginTimeArr: [],
              isAdmin: this.commonMethods.isAdmin(this.userInfo.role),
              isHanderOccupyRule: this.commonMethods.hasHanderRule("occupySpace"),
              reservationDateList: [],
              isTimePay: null,
              reservationSpaceCount: null,
              protocolInfo: {},
              recordModel: {},
              orderBuddyList: [],
              isGateEntry: !1,
              offlinePayModal: !1,
              OFFLINE_PAY_STEP: t,
              currPayStep: t.PAY,
              currInitCampus: 0,
              getCurrSiteId: 0,
              currProtocolCode: "",
              currentIndex: 0,
              timer: null,
              sumSecond: 0
            }
          },
          computed: {
            campusList: function () {
              var e = this, t = [];
              return this.$store.state.campus_list.forEach((function (s) {
                if (Object.keys(e.sourceVenueData).length) for (var i in e.sourceVenueData) s.id == i && t.push(s)
              })), t
            }, venueList: function () {
              return this.sourceVenueData[this.search.campus] || []
            }, venueSiteList: function () {
              return this.sourceVenueSiteData[this.search.venueId] || []
            }
          },
          watch: {
            "search.campus": {
              handler: function () {
                this.setVenue()
              }
            }, "search.venueId": {
              handler: function () {
                this.changeVenueId()
              }
            }, "search.venueSiteId": {
              handler: function () {
                if (this.search.venueSiteId) {
                  this.$set(this, "reservationType", this.constObject.RESERVATION_TYPE.COMMON);
                  var e = this.commonMethods.arrayIndexOf(this.venueSiteList, this.search.venueSiteId, "id");
                  -1 != e && (this.currentSite = this.venueSiteList[e]), this.search.venueSiteId && this.getReserveDate(), this.$store.commit("setCurrentNavName", this.currentSite.siteName), this.$eventBus.$emit("setElseTitle", this.commonMethods.getKeyName(this.venueList, this.search.venueId, "id", "venueName") + " " + this.currentSite.siteName), this.getProtocol(this.currentSite.reservationProtocolCode)
                }
              }
            }, "search.date": {
              handler: function () {
                this.getReserveDate()
              }
            }, step: function () {
              this.initSiteInfo()
            }, selected: function () {
              this.selected && 0 == this.selected.length && (this.reservationDate = "")
            }
          },
          methods: {
            initSiteInfo: function () {
              this.stepArr[this.step] == this.constObject.RESERVATION_STEP.CHOICE_SITE && (this.isSite ? this.getSite() : this.initPage())
            }, reservationSpace: function () {
              this.nextStep ? this.commonMethods.hasLogin() ? this.commonMethods.isAdmin(this.userInfo.role) ? this.$Message.error({content: "请登录学生、教工、校友账号进行预约！"}) : this.userInfo.loginCheckStatus != this.constObject.REGISTER_STATUS.SUCCESS && 6 == this.userInfo.role ? this.$Message.error({content: "您的账号暂未审核通过，无法进行预约"}) : this.submitDate() : (sessionStorage.setItem("loginBeforeLogin", this.$route.path), this.$router.push("/login")) : this.$Message.error("请勾选阅读协议！")
            }, closeModal: function () {
              this.timer && clearInterval(this.timer), this.isprotocols = !1, this.sumSecond = 0, this.nextStep = !0
            }, getProtocol: function (e) {
              var t = this, s = e || this.constObject.PROTOCOL_CODE.RESERVATION_PROTOCOL;
              if (s && (!this.currProtocolCode || this.currProtocolCode != s)) {
                if (this.$set(this, "currProtocolCode", s), !(s in this.protocolInfo)) return new Promise((function (e, i) {
                  var n = "/api/front/website/protocols/code/";
                  t.commonMethods.hasLogin() && (n = "/api/protocols/code/"), n += s, t.commonMethods.emitAjax({
                    path: n,
                    success: function (i) {
                      i && (t.protocolInfo[s] = i, t.protocols = i, i.autoPopup && !t.commonMethods.isAdmin(t.userInfo.role) && (t.isprotocols = !0, t.sumSecond = i.staySec || 0, t.timer && clearInterval(t.timer), i.staySec > 0 && (t.timer = setInterval((function () {
                        t.sumSecond--, t.sumSecond <= 0 && t.closeModal()
                      }), 1e3)))), e(i)
                    },
                    error: function (e) {
                      i(e)
                    }
                  })
                }));
                this.protocols = this.protocolInfo[s]
              }
            }, getVenueInfo: function () {
              var e = this;
              return new Promise((function (t, s) {
                e.$store.commit("setLoading", !0), e.commonMethods.emitAjax({
                  path: "/api/reservation/campus/venue/info",
                  data: {schoolType: e.schoolType ? e.schoolType : null, sportType: e.sportType || null},
                  success: function (s) {
                    e.search.venueSiteId = null, e.tableVenueSite = [], e.partialData = [], e.$store.commit("setLoading", !1), t(s || [])
                  },
                  error: function (t) {
                    e.$store.commit("setLoading", !1), s(t)
                  }
                })
              }))
            }, getReserveDate: function () {
              var e = this;
              document.getElementsByClassName("scroll")[0].scrollTop = 0;
              var t = this.search, s = t.venueSiteId, i = t.date;
              this.tableVenueSite = [], this.tableTimeData = [], (s || this.parCurrentSite.id) && i && (this.beginTimeArr = [], this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/reservation/day/info",
                data: {
                  venueSiteId: s || this.parCurrentSite.id,
                  searchDate: i,
                  reservationType: this.reservationType == this.constObject.RESERVATION_TYPE.CONCAT ? this.reservationType : null,
                  schoolType: this.commonMethods.isBuyTicketAdmin(this.userInfo.role) ? this.schoolType : null
                },
                success: function (t) {
                  e.$store.commit("setLoading", !1), e.siteId = null;
                  var i = t || {}, n = i.spaceTimeInfo, a = void 0 === n ? [] : n, r = i.isTakeUp, o = void 0 === r ? 1 : r,
                      c = i.takeUpExplain, d = void 0 === c ? "" : c, l = i.reservationTotalNum, u = void 0 === l ? 1 : l,
                      h = i.groupInfo, p = void 0 === h ? [] : h, m = i.weekDisplay, f = void 0 === m || m,
                      v = i.reservationDateSpaceInfo, y = void 0 === v ? {} : v, b = i.reservationDateList,
                      g = void 0 === b ? [] : b, S = i.token, T = void 0 === S ? "" : S;
                  e.tableTimeData = a || [], e.isTakeUp = o, e.isWeekDisplay = f, e.takeUpExplain = d, e.orderToken = T, e.reservationTotalNum = u, (t.advanceReservationDays || 0 == t.advanceReservationDays) && (e.advanceReservationDays = t.advanceReservationDays), e.currentLength = 1, e.selected = [], e.tableVenueSite = [], e.weekStartDate = g[0] || "", e.reservationDateList = g || [];
                  var _ = function (t) {
                    var s = y[t];
                    s.forEach((function (s) {
                      var i = g.indexOf(t);
                      e.$set(s, "spaceDate", t), e.$set(s, "dataId", i + 1), e.tableVenueSite.push(s)
                    }))
                  };
                  for (var E in y) _(E);
                  e.isWeekDisplay || e.currentSite.isSupportGroup != e.constObject.VENUE_IS.YES || -1 != e.reservationType || y && Object.keys(y).length && (e.tableVenueSite = p, e.tableVenueSite.forEach((function (t) {
                    var s = [], i = function (i) {
                      var n = y[i];
                      n.forEach((function (n) {
                        if (n.venueSpaceGroupId == t.id) {
                          var a = g.indexOf(i);
                          e.$set(n, "spaceDate", i), e.$set(n, "dataId", a + 1), s.push(n)
                        }
                      }))
                    };
                    for (var n in y) i(n);
                    e.$set(t, "spaceInfo", s)
                  })));
                  var O = 60 * (new Date).getHours() + (new Date).getMinutes(), I = 0;
                  if (e.tableTimeData && e.tableTimeData.length) for (var R = 0; R < e.tableTimeData.length; R++) {
                    var C = 60 * parseInt(e.tableTimeData[R].endTime.split(":")[0]) + parseInt(e.tableTimeData[R].endTime.split(":")[1]),
                        M = 60 * parseInt(e.tableTimeData[R].beginTime.split(":")[0]) + parseInt(e.tableTimeData[R].beginTime.split(":")[1]);
                    O >= M && C > O && (I = R)
                  }
                  e.commonMethods.isApp() ? (e.partialData = e.tableVenueSite || [], e.config.ReservationTableReversal && (e.partialData = e.tableTimeData || [], e.moment().format("YYYY-MM-DD") == e.search.date && e.$nextTick((function () {
                    var e = null, t = document.getElementsByClassName("MobileTime");
                    t.length && (e = t[0].clientWidth), document.getElementById("scrollTable") && (document.getElementById("scrollTable").scrollLeft = e * I)
                  })))) : (e.maxIndex = Math.ceil(e.tableVenueSite.length / 5), e.partialData = e.tableVenueSite.slice(0, 5), e.config.ReservationTableReversal && (e.moment().format("YYYY-MM-DD") == e.search.date && (e.currentLength = Math.ceil((I + 1) / 5)), e.maxIndex = Math.ceil(e.tableTimeData.length / 5), e.partialData = e.tableTimeData.slice(5 * (e.currentLength - 1), 5 * e.currentLength > e.tableTimeData.length ? e.tableTimeData.length : 5 * e.currentLength))), e.tableTimeData.forEach((function (t) {
                    var s = String(t.id);
                    -1 == e.beginTimeArr.indexOf(s) && e.beginTimeArr.push(s)
                  })), e.beginTimeArr.sort(), e.isTimePay = e.commonMethods.getKeyName(e.venueSiteList, s || e.parCurrentSite.id, "id", "isTimePay") || null, e.reservationSpaceCount = e.commonMethods.getKeyName(e.venueSiteList, s || e.parCurrentSite.id, "id", "reservationSpaceCount") || null, e.isTimePay ? e.maxCount = 1 : e.reservationSpaceCount ? e.maxCount = e.reservationSpaceCount : e.maxCount = e.oldMaxCount
                },
                error: function () {
                  e.$store.commit("setLoading", !1)
                }
              }))
            }, setVenue: function () {
              this.venueList.length ? this.search.venueId = this.venueList[0].id : this.search.venueId = 0, this.search.venueSiteId = null
            }, setSite: function () {
              "PkuVenueIntroduceReservation" == this.$route.name || "IndexVenueIntroduceReservation" == this.$route.name ? (this.venueSiteList.length ? (this.currentSite = this.venueSiteList[0], this.search.venueSiteId = this.currentSite.id) : this.search.venueSiteId = null, this.$set(this, "reservationType", -1)) : "adjustOrder" != this.$route.name && (this.search.venueSiteId = null, this.$set(this, "reservationType", -1), this.getReserveDate()), this.reservationDate = ""
            }, changeVenueId: function () {
              this.isSite ? this.search.venueSiteId && (this.getSite(this.search.venueSiteId), this.routeParamId = this.search.venueSiteId) : this.setSite()
            }, preDay: function () {
              this.search.date = this.moment(this.search.date).add("days", -1).format("YYYY-MM-DD")
            }, nextDay: function () {
              "ReservationManage" != this.$route.name && "MobileReservationManage" != this.$route.name || this.commonMethods.isBuyTicketAdmin(this.userInfo.role) ? this.moment(this.search.date).format("YYYY-MM-DD") < this.moment().add("days", this.advanceReservationDays - 1).format("YYYY-MM-DD") && (this.search.date = this.moment(this.search.date).add("days", 1).format("YYYY-MM-DD")) : this.search.date = this.moment(this.search.date).add("days", 1).format("YYYY-MM-DD")
            }, mousedownHandler: function (e, t) {
              this.readonly || (this.selectFlag = !0, this.reserveHandler(e, t, 1))
            }, mouseenterHandler: function (e, t) {
              !this.readonly && this.selectFlag && this.emitHandler(e, t)
            }, emitHandler: function (e, t) {
              switch (this.$route.name) {
                case"Reservation":
                  this.reserveHandler(e, t);
                  break;
                case"ReservationManage":
                  break;
                default:
                  break
              }
            }, reserveHandler: function (e, t) {
              var s = this;
              if (this.commonMethods.hasLogin()) {
                if (!this.isTimePay || !this.search.date || this.moment(this.search.date).format("YYYY-MM-DD") == this.moment().format("YYYY-MM-DD")) {
                  var i = e[t.id];
                  if (i && i.reservationStatus === this.constObject.RESERVATION_STATUS.FREE && i.alreadyNum < this.reservationTotalNum) {
                    this.selected && this.selected.length && 3 != this.selected[0].split("_").length && (this.selected = []);
                    var n = t.id + "_" + e.id + "_" + e.dataId, a = this.selected.indexOf(n);
                    if (a > -1) {
                      if (!this.isHanderOccupyRule && (this.isPKU || this.commonMethods.isBUAA()) && 0 != a && a != this.selected.length - 1) return;
                      return void this.selected.splice(a, 1)
                    }
                    if (this.selected && this.selected.length > 0) {
                      var r = this.selected[0].split("_")[2];
                      if (r != e.dataId) return
                    }
                    if (this.isHanderOccupyRule) this.selected.push(n); else {
                      for (var o = 0; o < this.selected.length; o++) {
                        var c = this.selected[o], d = c.split("_"), l = d[0];
                        if (t.id == l) return void this.selected.splice(o, 1, n)
                      }
                      if (this.selected && this.selected.length && (this.isPKU || this.commonMethods.isBUAA()) && !this.limitSelected(t.id)) return;
                      if (this.isTimePay) {
                        if (this.commonMethods.isBuyTicketAdmin(this.userInfo.role)) for (var u = 0; u < this.tableTimeData.length; u++) {
                          var h = this.tableTimeData[u], p = e[h.id];
                          if (p.reservationStatus == this.constObject.RESERVATION_STATUS.RESERVATION) return;
                          if (p.reservationStatus == this.constObject.RESERVATION_STATUS.FREE) {
                            if (h.id != t.id) return;
                            break
                          }
                        }
                        this.pushSelected(n, t)
                      } else {
                        var m = this.moment().valueOf(), f = this.moment(i.endDate, "YYYY-MM-DD HH:mm").valueOf(),
                            v = f - m;
                        v && v < 36e5 ? this.$Modal.confirm({
                          title: "预约场地",
                          content: "本场还剩下" + Math.ceil(v / 6e4 || 0) + "分钟，您确定预定该场地？",
                          onOk: function () {
                            s.pushSelected(n, t)
                          },
                          onCancel: function () {
                          }
                        }) : this.pushSelected(n, t)
                      }
                    }
                    this.selected.length > 1 && this.selected.sort()
                  } else if (i.reservationStatus === this.constObject.RESERVATION_STATUS.DISABLED && i.adminTake && "adjustOrder" != this.$route.name) this.selected && this.selected.length && 3 != this.selected[0].split("_").length && (this.selected = []), "ReservationManage" == this.$route.name && "MobileReservationManage" != this.$route.name && this.commonMethods.isAdmin(this.userInfo.role) && this.isHanderOccupyRule && (-1 == this.selected.indexOf(t.id + "_" + e.id + "_" + e.dataId) ? this.selected.push(t.id + "_" + e.id + "_" + e.dataId) : this.selected.splice(this.selected.indexOf(t.id + "_" + e.id + "_" + e.dataId), 1)); else if (i.reservationStatus == this.constObject.RESERVATION_STATUS.RESERVED && i.orderType == this.constObject.ORDER_TYPE.BATCH && "ReservationManage" == this.$route.name && 1 == this.reservationTotalNum) {
                    if (this.selected && this.selected.length && 4 != this.selected[0].split("_").length && (this.selected = []), i.orderDetailId) {
                      var y = t.id + "_" + e.id + "_" + e.dataId + "_" + i.orderDetailId;
                      -1 == this.selected.indexOf(y) ? this.selected.push(y) : this.selected.splice(this.selected.indexOf(y), 1)
                    }
                  } else i.reservationStatus === this.constObject.RESERVATION_STATUS.RESERVATION && this.commonMethods.hasHanderRule(this.constObject.RULE_ORDER.OFFLINE_PAY) && i.tradeNo && i.endDate && i.endDate > this.moment().format("YYYY-MM-DD HH:mm") && (this.setOfflinePayModal(!0), this.$refs.payOrder.open(i.tradeNo, "", [], this.constObject.UNIFY_TYPE.RESERVATION_PAY))
                }
              } else this.$Message.error({content: "请登录后再预约场地。"})
            }, pushSelected: function (e, t) {
              if (this.selected && this.selected.length) if (this.selected.length < this.maxCount) this.selected.push(e); else {
                var s = this.beginTimeArr.indexOf(this.selected[0].split("_")[0]),
                    i = this.beginTimeArr.indexOf(String(t.id));
                Math.abs(i - s) > 1 ? this.selected.splice(0, 1, e) : this.selected.splice(this.selected.length - 1, 1, e)
              } else this.maxCount > 0 && this.selected.push(e)
            }, limitSelected: function (e) {
              var t = this.beginTimeArr.indexOf(String(e)), s = this.beginTimeArr.indexOf(this.selected[0].split("_")[0]),
                  i = -1;
              return this.selected.length > 1 && (i = this.beginTimeArr.indexOf(this.selected[this.selected.length - 1].split("_")[0])), Math.abs(t - s) <= 1 || i > -1 && Math.abs(t - i) <= 1
            }, init: function (e, t) {
              var s = this;
              this.$set(this.search, "campus", e && e.id || t || null), 0 != this.currInitCampus && this.currInitCampus == this.search.campus || (this.search.campus && this.$set(this, "currInitCampus", this.search.campus), this.getVenueInfo().then((function (e) {
                s.sourceVenueData = e.venueInfo || {}, s.sourceVenueSiteData = e.venueSiteInfo || {};
                var i = s.search.campus;
                s.parCurrentSite.campusId || t ? s.search.campus = s.parCurrentSite.campusId || t : s.campusList && s.campusList.length > 1 ? s.search.campus = s.campusList[0].id : Object.keys(s.sourceVenueData).forEach((function (e, t) {
                  0 == t && e && (s.search.campus = Number(e || i))
                }));
                var n = s.sourceVenueData[s.search.campus] || [];
                s.parCurrentSite.venueId ? s.search.venueId = s.parCurrentSite.venueId : s.search.venueId = n[0] && n[0].id, s.parCurrentSite.id && (s.search.venueSiteId = s.parCurrentSite.id), s.oldMaxCount = e.reservationNumMax || 0, s.maxCount = e.reservationNumMax || 0, s.advanceReservationDays = e.advanceReservationDays || 0
              })))
            }, submitDate: function () {
              var e = this;
              if (this.selected.length) {
                var t = Number(this.selected[0].split("_")[2]) - 1, s = "";
                if (t >= 0 && (s = this.reservationDateList[t]), !s) return void this.$Message.error("页面错误，预约日期没有获取到");
                var i = {
                  venueSiteId: this.search.venueSiteId || !this.siteId && this.venueSiteId,
                  reservationDate: s,
                  weekStartDate: this.weekStartDate || "",
                  reservationOrderJson: JSON.stringify(this.selected.map((function (t) {
                    var s = t.split("_");
                    return {
                      spaceId: s[1],
                      timeId: s[0],
                      venueSpaceGroupId: -1 != s[1].indexOf(",") && e.commonMethods.getKeyName(e.tableVenueSite, s[1], "id", "venueSpaceGroupId") || null
                    }
                  }))),
                  reservationType: -1 == this.reservationType ? null : this.reservationType
                };
                this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && (i.isOfflineTicket = this.currentSite.isOfflineTicket), i.schoolType = this.schoolType, i.token = this.orderToken, this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                  path: "/api/reservation/order/info",
                  data: i,
                  type: "POST",
                  success: function (t) {
                    e.$store.commit("setLoading", !1), e.$emit("set-step", 1), e.commonMethods.isBuyTicketAdmin(e.userInfo.role) && e.$emit("set-step", 2), t.orderBuddyList = e.order.orderBuddyList || [], t.orderDetailLists = e.order.orderDetailList || [], t.adjustList = e.adjustList || [], t.reservationType = e.reservationType || -1, t.schoolType = e.schoolType, t.weekStartDate = e.weekStartDate, t.date = s, t.isTimePay = e.isTimePay || t.isTimePay || null, t.phone || (t.phone = e.phone || null), t.token = e.orderToken, e.$emit("set-order-data", t)
                  },
                  error: function (t) {
                    e.$store.commit("setLoading", !1), !t && e.$Message.success({content: "提交数据失败"})
                  }
                })
              } else this.$Message.error("至少选择一个空地预约")
            }, cancelSelect: function () {
              this.selectFlag && (this.selectFlag = !1)
            }, computedPercent: function (e, t, s) {
              return (e[t.id][s] && e[t.id][s] / this.reservationTotalNum * 100) + "%" || !1
            }, computedBg: function (e, t) {
              var s = e[t.id].alreadyNum && e[t.id].alreadyNum / this.reservationTotalNum * 100 || 0, i = "";
              return s <= 70 ? i = "free" : s > 70 && s < 90 ? i = "reservation" : s >= 90 && s < 100 ? i = "newReservation" : 100 == s && (i = "reserved"), i
            }, backStep: function () {
              this.$emit("set-step", 0)
            }, prev: function () {
              1 != this.currentLength && (this.tableLoding = !0, this.currentLength--, this.config.ReservationTableReversal ? this.partialData = this.tableTimeData.slice(5 * (this.currentLength - 1), 5 * this.currentLength > this.tableTimeData.length ? this.tableTimeData.length : 5 * this.currentLength) : this.partialData = this.tableVenueSite.slice(5 * (this.currentLength - 1), 5 * this.currentLength > this.tableVenueSite.length ? this.tableVenueSite.length : 5 * this.currentLength))
            }, next: function () {
              if (this.config.ReservationTableReversal) {
                if (5 * this.currentLength >= this.tableTimeData.length) return;
                this.currentLength++, this.partialData = this.tableTimeData.slice(5 * (this.currentLength - 1), 5 * this.currentLength > this.tableTimeData.length ? this.tableTimeData.length : 5 * this.currentLength)
              } else {
                if (5 * this.currentLength >= this.tableVenueSite.length) return;
                this.currentLength++, this.partialData = this.tableVenueSite.slice(5 * (this.currentLength - 1), 5 * this.currentLength > this.tableVenueSite.length ? this.tableVenueSite.length : 5 * this.currentLength)
              }
            }, initPage: function () {
              var e = this;
              if (this.campusList.length) {
                var t = this.campusList[0];
                this.init(t)
              } else {
                var s = "getCodeTypeListByKeyFront";
                this.commonMethods.hasLogin() && (s = "getCodeTypeListByKey"), this.$store.dispatch(s, {
                  parentKey: ["campus"],
                  success: function (t) {
                    var s = t["campus"] && t["campus"][0] || {};
                    e.init(s)
                  }
                })
              }
            }, occupy: function (e) {
              var t = this;
              this.orderType = e;
              var s = !0;
              if (this.selected && this.selected.length && 4 != this.selected[0].split("_").length) {
                var i = [];
                this.selected.forEach((function (n) {
                  var a = n.split("_"), r = {spaceId: a[1], timeId: a[0], dataId: a[2]}, o = [];
                  -1 == t.reservationType && t.currentSite.isSupportGroup == t.constObject.VENUE_IS.YES ? t.tableVenueSite.forEach((function (e) {
                    e.spaceInfo && e.spaceInfo.forEach((function (e) {
                      o.push(e)
                    }))
                  })) : o = t.tableVenueSite || [];
                  var c = t.commonMethods.arrayIndexOf(o, a[1], "id"), d = t.commonMethods.arrayIndexOf(o, a[2], "dataId"),
                      l = o[t.isWeekDisplay ? d : c] || {}, u = l[a[0]] || {};
                  6 == e && 1 != u.reservationStatus && (s = !1), r.reservationStatus = u.reservationStatus, i.push(r)
                })), this.space = {
                  venueSiteId: this.search.venueSiteId,
                  reservationDate: this.isWeekDisplay ? this.commonMethods.getKeyName(this.tableVenueSite, this.selected[0].split("_")[2], "dataId", "spaceDate") : this.search.date,
                  spaceInfo: JSON.stringify(i)
                };
                var n = 0;
                i.forEach((function (e) {
                  var a = -1, r = {};
                  if (-1 == t.reservationType && t.currentSite.isSupportGroup == t.constObject.VENUE_IS.YES) {
                    var o = [];
                    t.tableVenueSite.forEach((function (e) {
                      e.spaceInfo && e.spaceInfo.forEach((function (e) {
                        o.push(e)
                      }))
                    })), a = t.commonMethods.arrayIndexOf(o, e.spaceId, "id"), r = o[a] || {}
                  } else a = t.isWeekDisplay ? t.commonMethods.arrayIndexOf(t.tableVenueSite, e.dataId, "dataId") : t.commonMethods.arrayIndexOf(t.tableVenueSite, e.spaceId, "id"), r = t.tableVenueSite[a] || {};
                  var c = r[e.timeId];
                  if (0 == c.adminTake) {
                    if (t.$set(t.space, "remark", ""), t.space.freeMin = null, t.orderType == t.constObject.ORDER_TYPE.RESERVED) {
                      t.$set(t.space, "remark", "预留"), t.$set(t.space, "freeMin", 120);
                      var d = t.isWeekDisplay ? t.commonMethods.getKeyName(t.tableVenueSite, t.selected[0].split("_")[2], "dataId", "spaceDate") : t.search.date;
                      if (!d) return void t.$Message.error("没有获取到预约开始日期");
                      t.$set(t.space, "planStartDate", d), t.$set(t.space, "planEndDate", d)
                    }
                    (t.orderType == t.constObject.ORDER_TYPE.OCCUPY || t.orderType == t.constObject.ORDER_TYPE.RESERVED && s) && (t.$forceUpdate(), t.isOccupy = !0)
                  } else n++, n == i.length && (t.orderType == t.constObject.ORDER_TYPE.OCCUPY || t.orderType == t.constObject.ORDER_TYPE.RESERVED && s) && t.sureOccupy()
                })), s || this.$Message.error("请选择空地预留")
              } else this.$Message.error("请选择空地占用/取消")
            }, occupySpace: function () {
              var e = this;
              this.$refs.form.validate((function (t) {
                if (t) {
                  if (!e.space.remark) return void e.$Message.warning(e.orderType == e.constObject.ORDER_TYPE.RESERVED ? "请填写预留说明" : "请填写占用说明!");
                  if (e.orderType == e.constObject.ORDER_TYPE.RESERVED && !e.space.freeMin) return void e.$Message.warning("请填写预留时间");
                  e.sureOccupy()
                }
              }))
            }, sureOccupy: function () {
              var e = this;
              this.orderType && (this.space.orderType = this.orderType), this.weekStartDate && (this.space.weekStartDate = this.weekStartDate || ""), this.reservationDate && (this.space.reservationDate = this.reservationDate), 1 == this.reservationType && this.$set(this.space, "reservationType", this.reservationType);
              var t = Object.assign({}, this.space);
              this.space.planStartDate && (t.planStartDate = this.moment(this.space.planStartDate).format("YYYY-MM-DD")), this.space.planEndDate && (t.planEndDate = this.moment(this.space.planEndDate).format("YYYY-MM-DD")), this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/orders/admin/take",
                data: t,
                type: "POST",
                success: function () {
                  e.$store.commit("setLoading", !1), e.$Message.success({content: e.orderType == e.constObject.ORDER_TYPE.RESERVED ? "预留成功" : e.space.remark ? "占用成功!" : "取消占用成功!"}), e.space = {}, e.isOccupy = !1, e.getReserveDate()
                },
                error: function (t) {
                  e.$store.commit("setLoading", !1), !t && e.$Message.success({content: "提交数据失败"})
                }
              })
            }, getOrder: function () {
              var e = this;
              this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/orders/" + this.orderId,
                success: function (t) {
                  e.$store.commit("setLoading", !1), e.getCampusInfo(), e.init({}, t.venueInfoBean.campusId), e.order = t || {}, e.order.orderDetailList.length != e.adjustList.length ? (e.search.date = e.order.orderInfo.reservationDate, e.noCheck = !0) : (e.search.date = e.order.orderInfo.reservationDate, e.noCheck = !1), e.reservationDateDetail = "", e.order.orderDetailList.forEach((function (t) {
                    -1 != e.adjustList.indexOf(t.id) && (e.reservationDateDetail += t.spaceName + " " + t.startDate.substring(t.startDate.length - 5) + "-" + t.endDate.substring(t.endDate.length - 5) + ",")
                  }))
                },
                error: function () {
                  e.$store.commit("setLoading", !1)
                }
              })
            }, setContinueDate: function (e, t, s) {
              this.parCurrentSite.campusId = s.campusId, this.parCurrentSite.venueId = s.venueId, this.parCurrentSite.id = s.venueSiteId, this.reservationType = e, this.search.date = t
            }, getSite: function (e) {
              var t = this;
              if (!this.$route.query.tradeNo) {
                var s = this.$route.params.id;
                e && (s = e), !s || 0 != this.getCurrSiteId && this.getCurrSiteId == s || (this.$set(this, "getCurrSiteId", s), this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                  path: "/api/front/website/venue_sites/" + s,
                  success: function (e) {
                    t.$store.commit("setLoading", !1), t.parCurrentSite = e || {}, t.$store.commit("setCurrentNavName", t.parCurrentSite.siteName), t.$eventBus.$emit("setElseTitle", t.commonMethods.appendVenueName(t.parCurrentSite.campusName, t.parCurrentSite.venueName, t.parCurrentSite.siteName, " ")), t.sportType = t.parCurrentSite.sportType, t.getCampusInfo(), t.init({}, t.parCurrentSite.campusId)
                  },
                  error: function () {
                    t.$store.commit("setLoading", !1)
                  }
                }))
              }
            }, getCampusInfo: function () {
              var e = "getCodeTypeListByKeyFront";
              this.commonMethods.hasLogin() && (e = "getCodeTypeListByKey"), this.$store.dispatch(e, {parentKey: ["campus"]})
            }, handleScroll: function () {
              document.getElementsByClassName("spaceTable") && document.getElementsByClassName("spaceTable").length && 1 == this.step && (.72 * this.tableVenueSite.length * this.rems.remValue - document.getElementsByClassName("spaceTable")[0].scrollLeft < document.getElementsByClassName("spaceTable")[0].getBoundingClientRect().width ? this.$refs.tableMask.style.display = "none" : this.$refs.tableMask && (this.$refs.tableMask.style.display = "block"))
            }, getReservationSpaceText: function (e, t) {
              var s = e[t], i = "";
              if (s.takeUp) i = this.commonMethods.isPKU && this.commonMethods.isCanReservation(this.userInfo.role) ? "" : s.takeUpExplain; else if (s.adminTake) i = this.commonMethods.isPKU && this.commonMethods.isCanReservation(this.userInfo.role) ? "" : s.adminRemark; else if (this.reservationTotalNum > 1) {
                var n = "0";
                s.alreadyNum && (n = String(s.alreadyNum)), i = n + "/" + this.reservationTotalNum, this.currentSite.isSupportGroup == this.constObject.VENUE_IS.YES && -1 == this.reservationType && (i = e.spaceName + " " + i)
              } else if ([this.constObject.RESERVATION_STATUS.FREE, this.constObject.RESERVATION_STATUS.DISABLED].indexOf(s.reservationStatus) > -1) this.currentSite.isSupportGroup == this.constObject.VENUE_IS.YES && -1 == this.reservationType && (i = e.spaceName); else if ([this.constObject.RESERVATION_STATUS.RESERVATION, this.constObject.RESERVATION_STATUS.RESERVED].indexOf(s.reservationStatus) > -1) if (this.isAdmin) if (this.constObject.ORDER_TYPE.BATCH == s.orderType) s.adminRemark && (i = this.commonMethods.joinArr(["[订场]", s.adminRemark], " ")); else if (this.constObject.ORDER_TYPE.LEASE == s.orderType) s.adminRemark && (i = this.commonMethods.joinArr(["[租借]", s.adminRemark], " ")); else {
                var a = "";
                s.orderRoleId ? a = "[" + this.constObject.ROLE_NAME[s.orderRoleId] + "]" : s.orderRoleIdStr && (a = "[" + s.orderRoleIdStr + "]"), i = this.commonMethods.joinArr([a, s.orderName], " "), this.config.isOfflinePay && s.reservationStatus == this.constObject.RESERVATION_STATUS.RESERVATION && s.orderFee && s.endDate && s.endDate > this.moment().format("YYYY-MM-DD HH:mm") && (i += " " + s.orderFee + '元  <span style="color: #f97379; font-weight: bold;">支付</span>')
              } else this.commonMethods.isCanReservation(this.userInfo.role) && s.adminRemark && this.constObject.ORDER_TYPE.BATCH == s.orderType && this.commonMethods.isBUAA() && (i = s.adminRemark);
              return i
            }, cancelOrderBatch: function () {
              var e = this;
              if (!(this.reservationTotalNum > 1)) if (!this.selected || this.selected.length) if (this.selected && this.selected.length && 4 !== this.selected[0].split("_").length) this.$Message.warning({content: "请选择已订场场地进行取消！"}); else {
                var t = [];
                this.selected.forEach((function (e) {
                  t.push(e.split("_")[3])
                })), this.$store.commit("setModal", {
                  show: !0,
                  content: "是否确认取消选中的 " + t.length + "片订场信息？",
                  onOk: function () {
                    e.$store.commit("setLoading", !0), e.commonMethods.emitAjax({
                      path: "/api/orders/cancel/batch_space",
                      type: "POST",
                      data: {orderDetailIds: t.join(",")},
                      success: function (t) {
                        e.$store.commit("setLoading", !1), t && e.$Message.success({content: "您已成功取消" + t + "片订场"}), e.getReserveDate()
                      },
                      error: function () {
                        e.$store.commit("setLoading", !1)
                      }
                    })
                  }
                })
              } else this.$Message.warning({content: "请选择已订场场地进行取消！"})
            }, getGateInfo: function (e) {
              var t = this;
              this.isGateEntry = !1, this.recordModel = Object.assign({}, e), this.orderBuddyList = [], this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/orders/entry_detail/" + e.orderId,
                success: function (e) {
                  t.orderBuddyList = e || [], t.$store.commit("setLoading", !1), t.isGateEntry = !0
                },
                error: function (e) {
                  t.$store.commit("setLoading", !1), !e.message && t.$Message.error({content: "获取订单进场信息失败"})
                }
              })
            }, getReservationStyle: function (e) {
              return this.commonMethods.hasHanderRule(this.constObject.RULE_ORDER.OFFLINE_PAY) && e.reservationStatus == this.constObject.RESERVATION_STATUS.RESERVATION && e.endDate && e.endDate > this.moment().format("YYYY-MM-DD HH:mm") ? "temp-reservation-pay" : this.constObject.RESERVATION_STATUS_COLOR[e.reservationStatus]
            }, toOfflinePayComplete: function (e) {
              this.currPayStep = this.OFFLINE_PAY_STEP.COMPLETE, this.getReserveDate(), this.$refs.complete.open(e)
            }, preRouterPush: function () {
              this.setOfflinePayModal(!1)
            }, setOfflinePayModal: function (e) {
              e && (this.currPayStep = this.OFFLINE_PAY_STEP.PAY), this.offlinePayModal = e
            }
          },
          activated: function () {
            window.addEventListener("mouseup", this.cancelSelect, !0)
          },
          deactivated: function () {
            window.removeEventListener("mouseup", this.cancelSelect, !0), window.removeEventListener("scroll", this.handleScroll, !0)
          },
          mounted: function () {
            var e = this;
            window.addEventListener("scroll", this.handleScroll, !0), this.getProtocol(), this.stepArr[this.step] == this.constObject.RESERVATION_STEP.CHOICE_SITE && this.initSiteInfo(), this.$eventBus.$on("setAdjust", (function (t) {
              e.orderId = t.orderId, e.adjustList = [], e.adjustList = t.adjustList, e.selected = [], e.isGroupOrder = 0 == t.isGroupOrder ? 0 : t.isGroupOrder || null, e.phone = t.phone || "", e.isGroupOrder == e.constObject.IS_GROUP_ORDER.YES ? (e.$set(e, "reservationType", 1), e.groupFlag = !0) : (e.reservationType = -1, e.groupFlag = !0), e.$emit("set-step", 1), t.venueInfo && (e.search.campusId = t.venueInfo.campusId, e.search.venueId = t.venueInfo.venueId, e.setSite(t.venueInfo.venueSiteId)), e.getOrder()
            }))
          },
          created: function () {
            this.getReserveDate(), this.commonMethods.isBuyTicketAdmin(this.userInfo.role) || "ReservationManage" != this.$route.name && "MobileReservationManage" != this.$route.name || this.isSite || this.initPage()
          },
          destroyed: function () {
            window.removeEventListener("scroll", this.handleScroll, !0)
          }
        }, f = m, v = (s("a373"), Object(u["a"])(f, i, n, !1, null, "3857cabd", null));
    t["a"] = v.exports
  }, 5270: function (e, t, s) {
    "use strict";
    var i = s("c532"), n = s("c401"), a = s("2e67"), r = s("2444");

    function o(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
      o(e), e.headers = e.headers || {}, e.data = n(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
        delete e.headers[t]
      }));
      var t = e.adapter || r.adapter;
      return t(e).then((function (t) {
        return o(e), t.data = n(t.data, t.headers, e.transformResponse), t
      }), (function (t) {
        return a(t) || (o(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
      }))
    }
  }, "6d18": function (e, t, s) {
    "use strict";
    s("7d7e")
  }, "7a77": function (e, t, s) {
    "use strict";

    function i(e) {
      this.message = e
    }

    i.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, e.exports = i
  }, "7aac": function (e, t, s) {
    "use strict";
    var i = s("c532");
    e.exports = i.isStandardBrowserEnv() ? function () {
      return {
        write: function (e, t, s, n, a, r) {
          var o = [];
          o.push(e + "=" + encodeURIComponent(t)), i.isNumber(s) && o.push("expires=" + new Date(s).toGMTString()), i.isString(n) && o.push("path=" + n), i.isString(a) && o.push("domain=" + a), !0 === r && o.push("secure"), document.cookie = o.join("; ")
        }, read: function (e) {
          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
          this.write(e, "", Date.now() - 864e5)
        }
      }
    }() : function () {
      return {
        write: function () {
        }, read: function () {
          return null
        }, remove: function () {
        }
      }
    }()
  }, "7d7e": function (e, t, s) {
  }, "83b9": function (e, t, s) {
    "use strict";
    var i = s("d925"), n = s("e683");
    e.exports = function (e, t) {
      return e && !i(t) ? n(e, t) : t
    }
  }, "8d0f": function (e, t, s) {
    "use strict";
    var i = function () {
          var e = this, t = e.$createElement, s = e._self._c || t;
          return s("div", {
            staticClass: "reservation-step-two",
            style: {minHeight: e.commonMethods.isApp() ? e.publicHeight - 50 + "px" : ""}
          }, [s("Form", {
            attrs: {
              "label-position": "left",
              "label-width": 80
            }
          }, [s("Row", {staticClass: "cardSpace"}, [e.commonMethods.isBuyTicketAdmin(e.userInfo.role) ? [e.orderCloseTime && e.orderGmtCreate ? s("Divider", {attrs: {orientation: "left"}}, [s("h5", [e._v(" 下单时间：" + e._s(e.orderGmtCreate) + "，订单保留" + e._s(e.orderCloseTime) + "分钟， "), (e.oldTradeNo || e.tradeNo) && e.remainSecond ? [e._v(" " + e._s(e.remainSecond >= 0 ? e.remainSecond : 0) + "秒后关闭 ")] : e._e()], 2)]) : e._e(), s("Divider", {attrs: {orientation: "left"}}, [s("h5", [e._v("购票用户信息")])]), s("i-col", {attrs: {sm: 24}}, [s("FormItem", {attrs: {label: "购票用户"}}, [s("i-input", {
            staticStyle: {
              width: "200px",
              "margin-right": "5px"
            },
            attrs: {placeholder: e.schoolType == e.constObject.VIP_TYPE.SCHOOL ? "请输入学工号" : "请输入注册手机号"},
            model: {
              value: e.userPhone, callback: function (t) {
                e.userPhone = t
              }, expression: "userPhone"
            }
          }), s("Button", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "primary", size: "small"},
            nativeOn: {
              click: function (t) {
                return e.checkUser(e.userPhone, 1, e.schoolType)
              }
            }
          }, [e._v(" 信息核验 ")]), e.commonMethods.isPKU() && e.schoolType == e.constObject.VIP_TYPE.SCHOOL ? s("Button", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "success", size: "small"},
            nativeOn: {
              click: function (t) {
                return e.getCardInfo("", 1, e.schoolType)
              }
            }
          }, [e._v(" 刷校园卡 ")]) : e._e()], 1)], 1), e.buyInfo ? s("i-col", {attrs: {sm: 24}}, [s("FormItem", [s("Tag", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "border", color: "success"}
          }, [e._v(" " + e._s(e.buyRole ? "【" + e.constObject.ROLE_NAME[e.buyRole] + "】" : "") + e._s(e.commonMethods.joinArr([e.buyName, e.buyInfo], "-")) + " ")])], 1)], 1) : e._e(), e.commonMethods.isShowPhone() ? s("i-col", {attrs: {sm: 12}}, [s("FormItem", {attrs: {label: "手机号"}}, [s("i-input", {
            staticStyle: {width: "200px"},
            attrs: {placeholder: "请输入手机号"},
            model: {
              value: e.phone, callback: function (t) {
                e.phone = t
              }, expression: "phone"
            }
          })], 1)], 1) : e._e(), e.venueBean.buddyNumMax >= 1 ? s("i-col", {attrs: {sm: 24}}, [s("FormItem", {attrs: {label: "同伴"}}, [s("i-input", {
            staticStyle: {
              width: "200px",
              "margin-right": "5px"
            }, attrs: {placeholder: "添加同伴"}, model: {
              value: e.buddyPhone, callback: function (t) {
                e.buddyPhone = t
              }, expression: "buddyPhone"
            }
          }), s("Button", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "primary", size: "small"},
            nativeOn: {
              click: function (t) {
                return e.checkUser(e.buddyPhone, "", e.schoolType)
              }
            }
          }, [e._v(" 信息核验 ")]), e.venueBean.buddyFamilyNumMax && e.buyRole == e.constObject.ROLE.TEACHER && e.commonMethods.hasHanderRule(e.constObject.RULE_BUDDY.ADD_FAMILY) ? s("Button", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "warning", size: "small"},
            nativeOn: {
              click: function (t) {
                return e.setChoiceBuddyModal(!0)
              }
            }
          }, [e._v(" 添加家属 ")]) : e._e(), e.commonMethods.isPKU() && e.schoolType == e.constObject.VIP_TYPE.SCHOOL ? s("Button", {
            staticStyle: {"margin-right": "5px"},
            attrs: {type: "success", size: "small"},
            nativeOn: {
              click: function (t) {
                e.getCardInfo(e.schoolType)
              }
            }
          }, [e._v(" 刷校园卡 ")]) : e._e(), e.venueBean.buddyNumMin ? s("span", [e._v(e._s("最少添加" + e.venueBean.buddyNumMin) + "人")]) : e._e(), e.venueBean.buddyNumMax ? s("span", [e._v(e._s("最多添加" + e.venueBean.buddyNumMax) + "人")]) : e._e(), e.buyRole == e.constObject.ROLE.TEACHER && e.commonMethods.hasHanderRule(e.constObject.RULE_BUDDY.ADD_FAMILY) && e.venueBean.buddyFamilyNumMax ? s("span", [e._v(" " + e._s("家属最多" + e.venueBean.buddyFamilyNumMax) + "人 ")]) : e._e()], 1)], 1) : e._e(), e.venueBean.buddyNumMax >= 1 && (e.buddyInfo && e.buddyInfo.length || e.buddyChildNamesList && e.buddyChildNamesList.length) ? s("i-col", {attrs: {sm: 24}}, [s("FormItem", [e.buddyInfo ? e._l(e.buddyInfo, (function (t, i) {
            return s("Tag", {
              key: t,
              staticStyle: {"margin-right": "5px"},
              attrs: {type: "border", color: "success", closable: ""},
              on: {
                "on-close": function (t) {
                  return e.delBuddy(i)
                }
              }
            }, [e._v(" " + e._s(e.commonMethods.joinArr([e.buddyName[i], t], "-")) + " ")])
          })) : e._e(), e.buddyChildNamesList ? e._l(e.buddyChildNamesList, (function (t, i) {
            return s("Tag", {
              key: i,
              staticStyle: {"margin-right": "5px"},
              attrs: {type: "border", color: "success", closable: ""},
              on: {
                "on-close": function (s) {
                  return e.delChildName(t)
                }
              }
            }, [e._v(" " + e._s(t.userRoleId ? "【" + e.constObject.ROLE_NAME[t.userRoleId] + "】" : "") + " " + e._s(e.commonMethods.joinArr([t.name, t.userPhone], "-")) + " ")])
          })) : e._e()], 2)], 1) : e._e()] : ["adjustOrder" != e.$route.name ? [e.venueBean.buddyNumMax >= 1 ? [s("Divider", {attrs: {orientation: "left"}}, [s("h5", [e._v(" 同伴信息( "), e.venueBean.buddyNumMin ? s("span", [e._v(e._s("最少" + e.venueBean.buddyNumMin) + "人")]) : e._e(), s("span", [e._v(e._s("最多" + e.venueBean.buddyNumMax) + "人")]), e.commonMethods.hasHanderRule(e.constObject.RULE_BUDDY.ADD_FAMILY) ? s("span", [e._v(" " + e._s("其中家属最多" + e.venueBean.buddyFamilyNumMax) + "人 ")]) : e._e(), e._v(" ) ")])]), 0 === e.buddyList.length ? s("Alert", [e._v(" 您暂未设置同伴信息， "), s("router-link", {attrs: {to: {name: e.commonMethods.isApp() ? "mobileVenuesBuddies" : "VenuesBuddies"}}}, [e._v(" 点击这里 ")]), e._v(" 添加同伴 "), e.venueBean.buddyNumMin ? s("span", [e._v(e._s("最少添加" + e.venueBean.buddyNumMin) + "人")]) : e._e(), s("span", [e._v(e._s("最多添加" + e.venueBean.buddyNumMax) + "人")])], 1) : s("FormItem", {attrs: {"label-width": 20}}, [s("CheckboxGroup", {
            on: {"on-change": e.popData},
            model: {
              value: e.buddyIds, callback: function (t) {
                e.buddyIds = t
              }, expression: "buddyIds"
            }
          }, [e._l(e.buddyList, (function (t) {
            return [t.userRoleId != e.constObject.ROLE.FAMILY_MEMBERS || t.userRoleId == e.constObject.ROLE.FAMILY_MEMBERS && e.venueBean.buddyFamilyNumMax ? s("Checkbox", {
              key: t.id,
              attrs: {label: t.id}
            }, [s("span", [e._v(" " + e._s(t.userRoleId == e.constObject.ROLE.FAMILY_MEMBERS ? "【" + e.constObject.ROLE_NAME[t.userRoleId] + "】" : "") + e._s(e.commonMethods.joinArr([t.name, t.phone], "-")) + " ")])]) : e._e()]
          }))], 2), s("router-link", {attrs: {to: {name: e.commonMethods.isApp() ? "mobileVenuesBuddies" : "VenuesBuddies"}}}, [e._v(" 点击这里 ")]), e._v(" 添加同伴 ")], 1)] : e._e()] : [e.venueBean.buddyNumMax >= 1 && e.buddyList && e.buddyList.length ? s("FormItem", {attrs: {label: "同伴"}}, [s("CheckboxGroup", {
            on: {"on-change": e.popData},
            model: {
              value: e.buddyIds, callback: function (t) {
                e.buddyIds = t
              }, expression: "buddyIds"
            }
          }, e._l(e.buddyList, (function (t) {
            return s("Checkbox", {
              key: t.userId,
              attrs: {label: t.userId, disabled: ""}
            }, [e._v(" " + e._s(e.commonMethods.joinArr([t.name, t.userPhone], "-")) + " ")])
          })), 1)], 1) : e._e()], e.commonMethods.isShowPhone() ? [s("Divider", {attrs: {orientation: "left"}}, [s("h5", [e._v("个人信息")])]), s("i-col", {attrs: {sm: 12}}, [s("FormItem", {attrs: {label: "手机号"}}, [s("i-input", {
            attrs: {placeholder: "请输入手机号"},
            model: {
              value: e.phone, callback: function (t) {
                e.phone = t
              }, expression: "phone"
            }
          })], 1)], 1)] : e._e()], s("Divider", {attrs: {orientation: "left"}}, [s("h5", [e._v("预约信息")])]), s("i-col", {
            staticStyle: {
              "font-size": "12px",
              "margin-bottom": "10px"
            }, attrs: {sm: 24}
          }, [e._v(" 场地：" + e._s(e.commonMethods.appendVenueName(e.venueBean.campusName, e.venueBean.venueName, e.venueBean.siteName, " ")) + " ")]), s("i-col", {attrs: {sm: 24}}, [s("div", {staticClass: "responsiveTable cardSpace"}, [s("div", {staticClass: "ivu-table-wrapper"}, [s("div", {staticClass: "ivu-table ivu-table-border ivu-table-small"}, [s("div", {staticClass: "ivu-table-body"}, [s("table", {
            attrs: {
              border: "0",
              cellpadding: "0",
              cellspacing: "0"
            }
          }, [s("thead", [s("tr", [s("th", {staticStyle: {"max-width": "60px"}}, [s("div", {staticClass: "ivu-table-cell text-center nowrap"}, [e._v("序号")])]), s("th", {attrs: {width: "33%"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("场地空间")])]), s("th", {attrs: {width: "33%"}}, [s("div", {staticClass: "ivu-table-cell"}, [e._v("预约时间")])])])]), s("tbody", {staticClass: "ivu-table-tbody"}, e._l(e.dataList, (function (t, i) {
            return s("tr", {key: i}, [s("td", [s("div", {staticClass: "ivu-table-cell text-center  nowrap"}, [e._v(e._s(i + 1))])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(e._s(t.venueSpaceName))])]), s("td", [s("div", {staticClass: "ivu-table-cell"}, [e._v(" " + e._s(t.startDate) + "-" + e._s(t.endDate && e.moment(t.endDate).format("HH:mm")) + " ")])])])
          })), 0)])])])])])])], 2)], 1), e.commonMethods.isApp() ? e._e() : s("div", {staticClass: "checkStep"}, ["PkuVenueIntroduceReservation" == e.$route.name || "IndexVenueIntroduceReservation" == e.$route.name ? [s("div", {staticClass: "payHandle"}, [e.commonMethods.isApp() ? [s("Button", {
            attrs: {type: "default"},
            nativeOn: {
              click: function (t) {
                return e.backStepOne(t)
              }
            }
          }, [e._v(" 取消预约 ")]), s("list-button", {
            attrs: {rule: "ReservationApply"},
            on: {"on-click": e.submitData}
          }, [s("Button", {attrs: {type: "primary"}}, [e._v("提交订单")])], 1)] : [s("div", {
            staticClass: "payHandleItem cancel",
            on: {click: e.backStepOne}
          }, [e._v("取消预约")]), e.commonMethods.hasHanderRule("ReservationApply") ? s("div", {
            staticClass: "payHandleItem ",
            on: {click: e.submitData}
          }, [e._v(" 提交订单 ")]) : e._e()]], 2)] : [s("Button", {
            attrs: {type: "info"}, nativeOn: {
              click: function (t) {
                return e.backStepOne(t)
              }
            }
          }, [e._v(" 取消预约 ")]), s("list-button", {
            attrs: {rule: "ReservationApply"},
            on: {"on-click": e.submitData}
          }, [s("Button", {attrs: {type: "primary"}}, [e._v("提交订单")])], 1)]], 2), e.commonMethods.isApp() ? s("div", {staticClass: "siteHandel"}, [s("div", {
            staticClass: "siteHandelItem",
            staticStyle: {background: "white", color: "#999"},
            on: {click: e.backStepOne}
          }, [e._v(" 取消预约 ")]), s("div", {
            staticClass: "siteHandelItem",
            style: {marginRight: 0, background: e.config.colorStyle && e.config.colorStyle.appointmentColor || "#FFAE00"},
            on: {click: e.submitData}
          }, [e._v(" 提交订单 ")])]) : e._e(), s("Modal", {
            attrs: {
              "mask-closable": !1,
              title: "同伴信息",
              "footer-hide": "",
              width: "768"
            }, model: {
              value: e.modalFlag, callback: function (t) {
                e.modalFlag = t
              }, expression: "modalFlag"
            }
          }, [s("Form", {
            ref: "form",
            attrs: {model: e.formData, rules: e.rules, "label-width": 100}
          }, [e.commonMethods.isApp() ? [s("h5", {staticStyle: {margin: "5px 0"}}, [e._v("添加同伴时需要确保对方已经登录系统并完成注册。")])] : s("Divider", {attrs: {orientation: "left"}}, [e._v("添加同伴时需要确保对方已经登录系统并完成注册。")]), s("FormItem", {
            attrs: {
              label: 6 == e.formData.userRoleId ? "用户名" : "同伴",
              prop: "userUid"
            }
          }, [s("Input", {
            attrs: {placeholder: 6 == e.formData.userRoleId ? "用户名" : "学工号/校友手机号"},
            model: {
              value: e.formData.userUid, callback: function (t) {
                e.$set(e.formData, "userUid", t)
              }, expression: "formData.userUid"
            }
          })], 1), s("FormItem", [s("list-button", {
            attrs: {rule: "VenuesBuddiesAdd"},
            on: {"on-click": e.addBuddyInfo}
          }, [s("Button", {attrs: {type: "primary"}}, [e._v("保存")])], 1), s("Button", {
            nativeOn: {
              click: function (t) {
                e.modalFlag = !1
              }
            }
          }, [e._v("取消")])], 1)], 2)], 1), s("Modal", {
            attrs: {
              title: "选择同伴" + e.commonMethods.joinArr([e.recordModel.name, e.recordModel.userUid], "-"),
              "mask-closable": !1,
              width: "360"
            }, model: {
              value: e.checkBuddyNoModal, callback: function (t) {
                e.checkBuddyNoModal = t
              }, expression: "checkBuddyNoModal"
            }
          }, [s("div", {staticClass: "text-error"}, [e._v("说明：同伴码需要同伴登录系统在同伴管理中获取。")]), s("Form", {
            ref: "checkBuddyNoForm",
            attrs: {model: e.recordModel}
          }, [s("FormItem", {
            attrs: {
              prop: "buddyNo",
              rules: {required: !0, message: "请填写5位数字同伴码", trigger: "blur"}
            }
          }, [s("Input", {
            attrs: {placeholder: "5位数字同伴码"}, model: {
              value: e.recordModel.buddyNo, callback: function (t) {
                e.$set(e.recordModel, "buddyNo", t)
              }, expression: "recordModel.buddyNo"
            }
          })], 1)], 1), s("footer", {
            attrs: {slot: "footer"},
            slot: "footer"
          }, [s("Button", {
            nativeOn: {
              click: function (t) {
                return e.setCheckBuddyNoModal(!1)
              }
            }
          }, [e._v("取消")]), s("Button", {
            attrs: {type: "primary"}, nativeOn: {
              click: function (t) {
                return e.checkBuddyNo(t)
              }
            }
          }, [e._v("确定")])], 1)], 1), s("Modal", {
            attrs: {title: "选择家属", width: "600", "footer-hide": ""},
            model: {
              value: e.choiceBuddyModal, callback: function (t) {
                e.choiceBuddyModal = t
              }, expression: "choiceBuddyModal"
            }
          }, [s("Form", [s("FormItem", [s("CheckboxGroup", {
            on: {
              "on-change": function (t) {
                return e.addBuddy(t, 1)
              }
            }, model: {
              value: e.buddyIds, callback: function (t) {
                e.buddyIds = t
              }, expression: "buddyIds"
            }
          }, [e._l(e.buyBuddyList, (function (t, i) {
            return [t.userRoleId != e.constObject.ROLE.FAMILY_MEMBERS || t.userRoleId == e.constObject.ROLE.FAMILY_MEMBERS && e.venueBean.buddyFamilyNumMax ? s("Checkbox", {
              key: i,
              attrs: {label: t.id}
            }, [s("span", [e._v(" " + e._s(t.userRoleId == e.constObject.ROLE.FAMILY_MEMBERS ? "【" + e.constObject.ROLE_NAME[t.userRoleId] + "】" : "") + " " + e._s(e.commonMethods.joinArr([t.name, t.userPhone], "-")) + " ")])]) : e._e()]
          }))], 2)], 1), s("FormItem", {staticStyle: {"text-align": "center"}}, [s("i-input", {
            staticStyle: {width: "200px"},
            attrs: {placeholder: "家属性名"},
            model: {
              value: e.familyName, callback: function (t) {
                e.familyName = t
              }, expression: "familyName"
            }
          })], 1), e.commonMethods.isShowPhone() ? s("FormItem", {staticStyle: {"text-align": "center"}}, [s("i-input", {
            staticStyle: {width: "200px"},
            attrs: {placeholder: "家属电话"},
            model: {
              value: e.familyPhone, callback: function (t) {
                e.familyPhone = t
              }, expression: "familyPhone"
            }
          })], 1) : e._e(), s("FormItem", {staticStyle: {"text-align": "center"}}, [s("list-button", {on: {"on-click": e.addBuddy}}, [s("Button", {attrs: {type: "primary"}}, [e._v("添加")])], 1)], 1)], 1)], 1), s("Verify", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: e.showVerify,
              expression: "showVerify"
            }],
            ref: "verify",
            attrs: {
              success: e.verifySuccess,
              captchaType: e.constObject.CAPTCHA_TYPE.BLOCK_PUZZLE,
              "img-size": {width: "330px", height: "155px"}
            }
          })], 1)
        }, n = [], a = s("53ca"),
        r = (s("4160"), s("159b"), s("b0c0"), s("c975"), s("a434"), s("e25e"), s("a15b"), s("fb6a"), s("498a"), function () {
          var e = this, t = e.$createElement, s = e._self._c || t;
          return s("div", {
            directives: [{name: "show", rawName: "v-show", value: e.showBox, expression: "showBox"}],
            class: e.mode == e.constObject.CAPTCHA_MODE.POP ? "mask" : ""
          }, [s("div", {
            class: "pop" == e.mode ? "verifybox" : "",
            style: {"max-width": parseInt(e.imgSize.width) + 30 + "px"}
          }, ["pop" == e.mode ? s("div", {staticClass: "verifybox-top"}, [e._v(" 请完成安全验证 "), s("span", {
            staticClass: "verifybox-close",
            on: {click: e.closeBox}
          }, [s("i", {staticClass: "iconfont icon-close"})])]) : e._e(), s("div", {
            staticClass: "verifybox-bottom",
            style: {padding: e.mode == e.constObject.CAPTCHA_MODE.POP ? "15px" : "0"}
          }, [s(e.componentType, {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: (e.showBox || e.clickShow) && e.componentType,
              expression: "(showBox || clickShow) && componentType"
            }],
            ref: "instance",
            tag: "components",
            attrs: {
              "captcha-type": e.captchaType,
              type: e.verifyType,
              figure: e.figure,
              arith: e.arith,
              mode: e.mode,
              "v-space": e.vSpace,
              explain: e.explain,
              "img-size": e.imgSize,
              "block-size": e.blockSize,
              "bar-size": e.barSize,
              "default-img": e.defaultImg,
              success: e.success
            }
          })], 1)])])
        }), o = [], c = (s("a9e3"), s("d3b7"), s("25f0"), function () {
          var e = this, t = e.$createElement, s = e._self._c || t;
          return s("div", {
            staticStyle: {position: "relative"}, on: {
              touchmove: function (e) {
                e.preventDefault()
              }
            }
          }, ["2" === e.type ? s("div", {
            staticClass: "verify-img-out",
            style: {height: parseInt(e.setSize.imgHeight) + e.vSpace + "px"}
          }, [s("div", {
            staticClass: "verify-img-panel",
            style: {width: e.setSize.imgWidth, height: e.setSize.imgHeight}
          }, [s("img", {
            staticStyle: {width: "100%", height: "100%", display: "block"},
            attrs: {src: e.backImgBase ? "data:image/png;base64," + e.backImgBase : e.defaultImg, alt: ""}
          }), s("div", {
            directives: [{name: "show", rawName: "v-show", value: e.showRefresh, expression: "showRefresh"}],
            staticClass: "verify-refresh",
            on: {click: e.refresh}
          }, [s("i", {staticClass: "iconfont icon-refresh"})]), s("transition", {attrs: {name: "tips"}}, [e.tipWords ? s("span", {
            staticClass: "verify-tips",
            class: e.passFlag ? "suc-bg" : "err-bg"
          }, [e._v(e._s(e.tipWords))]) : e._e()])], 1)]) : e._e(), s("div", {
            staticClass: "verify-bar-area",
            style: {width: e.setSize.imgWidth, height: e.barSize.height, "line-height": e.barSize.height}
          }, [s("span", {
            staticClass: "verify-msg",
            domProps: {textContent: e._s(e.text)}
          }), s("div", {
            staticClass: "verify-left-bar",
            style: {
              width: void 0 !== e.leftBarWidth ? e.leftBarWidth : e.barSize.height,
              height: e.barSize.height,
              "border-color": e.leftBarBorderColor,
              transaction: e.transitionWidth
            }
          }, [s("span", {
            staticClass: "verify-msg",
            domProps: {textContent: e._s(e.finishText)}
          }), s("div", {
            staticClass: "verify-move-block",
            style: {
              width: e.barSize.height,
              height: e.barSize.height,
              "background-color": e.moveBlockBackgroundColor,
              left: e.moveBlockLeft,
              transition: e.transitionLeft
            },
            on: {touchstart: e.start, mousedown: e.start}
          }, [s("i", {
            class: ["verify-icon iconfont", e.iconClass],
            style: {color: e.iconColor}
          }), "2" === e.type ? s("div", {
            staticClass: "verify-sub-block",
            style: {
              width: Math.floor(47 * parseInt(e.setSize.imgWidth) / 310) + "px",
              height: e.setSize.imgHeight,
              top: "-" + (parseInt(e.setSize.imgHeight) + e.vSpace) + "px",
              "background-size": e.setSize.imgWidth + " " + e.setSize.imgHeight
            }
          }, [s("img", {
            staticStyle: {width: "100%", height: "100%", display: "block"},
            attrs: {src: "data:image/png;base64," + e.blockBackImgBase, alt: ""}
          })]) : e._e()])])])])
        }), d = [], l = (s("ac1f"), s("5319"), s("b680"), s("3452")), u = s.n(l);

    function h(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "XwKsGlMcdPMEhR1B",
          s = u.a.enc.Utf8.parse(t), i = u.a.enc.Utf8.parse(e),
          n = u.a.AES.encrypt(i, s, {mode: u.a.mode.ECB, padding: u.a.pad.Pkcs7});
      return n.toString()
    }

    function p(e) {
      var t, s, i, n, a = e.$el.parentNode.offsetWidth || window.offsetWidth,
          r = e.$el.parentNode.offsetHeight || window.offsetHeight;
      return t = -1 != e.imgSize.width.indexOf("%") ? parseInt(this.imgSize.width) / 100 * a + "px" : this.imgSize.width, s = -1 != e.imgSize.height.indexOf("%") ? parseInt(this.imgSize.height) / 100 * r + "px" : this.imgSize.height, i = -1 != e.barSize.width.indexOf("%") ? parseInt(this.barSize.width) / 100 * a + "px" : this.barSize.width, n = -1 != e.barSize.height.indexOf("%") ? parseInt(this.barSize.height) / 100 * r + "px" : this.barSize.height, {
        imgWidth: t,
        imgHeight: s,
        barWidth: i,
        barHeight: n
      }
    }

    var m = {
      name: "VerifySlide",
      props: {
        captchaType: {type: String},
        type: {type: String, default: "1"},
        mode: {type: String, default: "fixed"},
        vSpace: {type: Number, default: 5},
        explain: {type: String, default: "向右滑动完成验证"},
        imgSize: {
          type: Object, default: function () {
            return {width: "310px", height: "155px"}
          }
        },
        blockSize: {
          type: Object, default: function () {
            return {width: "50px", height: "50px"}
          }
        },
        barSize: {
          type: Object, default: function () {
            return {width: "310px", height: "40px"}
          }
        },
        defaultImg: {type: String, default: ""},
        success: {
          type: Function, default: function () {
          }
        }
      },
      data: function () {
        return {
          secretKey: "",
          passFlag: "",
          backImgBase: "",
          blockBackImgBase: "",
          backToken: "",
          startMoveTime: "",
          endMovetime: "",
          tipsBackColor: "",
          tipWords: "",
          text: "",
          finishText: "",
          setSize: {imgHeight: 0, imgWidth: 0, barHeight: 0, barWidth: 0},
          top: 0,
          left: 0,
          moveBlockLeft: void 0,
          leftBarWidth: void 0,
          moveBlockBackgroundColor: void 0,
          leftBarBorderColor: "#ddd",
          iconColor: void 0,
          iconClass: "icon-right",
          status: !1,
          isEnd: !1,
          showRefresh: !0,
          transitionLeft: "",
          transitionWidth: ""
        }
      },
      computed: {
        barArea: function () {
          return this.$el.querySelector(".verify-bar-area")
        }, resetSize: function () {
          return p
        }
      },
      watch: {
        type: {
          immediate: !0, handler: function () {
            this.init()
          }
        }
      },
      mounted: function () {
        this.$el.onselectstart = function () {
          return !1
        }
      },
      methods: {
        init: function () {
          var e = this;
          this.text = this.explain, this.getPicture(), this.$nextTick((function () {
            var t = e.resetSize(e);
            for (var s in t) e.$set(e.setSize, s, t[s]);
            e.$parent.$emit("ready", e)
          })), this.commonMethods.isApp() || this.commonMethods.isChingoApp() ? (window.removeEventListener("touchmove", (function (t) {
            e.move(t)
          })), window.removeEventListener("touchend", (function () {
            e.end()
          })), window.addEventListener("touchmove", (function (t) {
            e.move(t)
          })), window.addEventListener("touchend", (function () {
            e.end()
          }))) : (window.removeEventListener("mousemove", (function (t) {
            e.move(t)
          })), window.removeEventListener("mouseup", (function () {
            e.end()
          })), window.addEventListener("mousemove", (function (t) {
            e.move(t)
          })), window.addEventListener("mouseup", (function () {
            e.end()
          })))
        }, start: function (e) {
          e = e || window.event;
          var t = null;
          t = e.touches ? e.touches[0].pageX : e.clientX, this.startLeft = Math.floor(t - this.barArea.getBoundingClientRect().left), this.startMoveTime = +new Date, 0 == this.isEnd && (this.text = "", this.moveBlockBackgroundColor = "#337ab7", this.leftBarBorderColor = "#337AB7", this.iconColor = "#fff", e.stopPropagation(), this.status = !0)
        }, move: function (e) {
          if (e = e || window.event, this.status && 0 == this.isEnd) {
            var t = null;
            t = e.touches ? e.touches[0].pageX : e.clientX;
            var s = this.barArea.getBoundingClientRect().left, i = t - s;
            i >= this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2 && (i = this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2), i <= 0 && (i = parseInt(parseInt(this.blockSize.width) / 2)), this.moveBlockLeft = i - this.startLeft + "px", this.leftBarWidth = i - this.startLeft + "px"
          }
        }, end: function () {
          var e = this;
          this.endMovetime = +new Date;
          var t = this;
          if (this.status && 0 == this.isEnd) {
            var s = parseInt((this.moveBlockLeft || "").replace("px", ""));
            s = 310 * s / parseInt(this.setSize.imgWidth), this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
              path: "/api/captcha/check",
              type: "POST",
              data: {
                pointJson: this.secretKey ? h(JSON.stringify({x: s, y: 5}), this.secretKey) : JSON.stringify({
                  x: s,
                  y: 5
                }), token: this.backToken
              },
              success: function (i) {
                if (e.$store.commit("setLoading", !1), i && i.repCode == e.constObject.CAPTCHA_REQ_CODE.SUCCESS) {
                  e.moveBlockBackgroundColor = "#5cb85c", e.leftBarBorderColor = "#5cb85c", e.iconColor = "#fff", e.iconClass = "icon-check", e.showRefresh = !1, e.isEnd = !0, "pop" == e.mode && setTimeout((function () {
                    e.$parent.clickShow = !1, e.refresh()
                  }), 1500), e.passFlag = !0, e.tipWords = "".concat(((e.endMovetime - e.startMoveTime) / 1e3).toFixed(2), "s验证成功");
                  var n = e.secretKey ? h(e.backToken + "---" + JSON.stringify({
                    x: s,
                    y: 5
                  }), e.secretKey) : e.backToken + "---" + JSON.stringify({x: s, y: 5});
                  setTimeout((function () {
                    e.tipWords = "", e.$parent.closeBox(), e.success(n)
                  }), 500)
                } else e.moveBlockBackgroundColor = "#d9534f", e.leftBarBorderColor = "#d9534f", e.iconColor = "#fff", e.iconClass = "icon-close", e.passFlag = !1, setTimeout((function () {
                  t.refresh()
                }), 1e3), e.$parent.$emit("error", e), e.tipWords = "验证失败", setTimeout((function () {
                  e.tipWords = ""
                }), 1e3)
              },
              error: function (t) {
                e.$store.commit("setLoading", !1), !t.message && e.$Message.error({content: "系统繁忙，请稍后再试"})
              }
            }), this.status = !1
          }
        }, refresh: function () {
          var e = this;
          this.showRefresh = !0, this.finishText = "", this.transitionLeft = "left .3s", this.moveBlockLeft = 0, this.leftBarWidth = void 0, this.transitionWidth = "width .3s", this.leftBarBorderColor = "#ddd", this.moveBlockBackgroundColor = "#fff", this.iconColor = "#000", this.iconClass = "icon-right", this.isEnd = !1, this.getPicture(), setTimeout((function () {
            e.transitionWidth = "", e.transitionLeft = "", e.text = e.explain
          }), 300)
        }, getPicture: function () {
          var e = this;
          this.commonMethods.hasHanderRule("CaptchaBlockGet") && (this.$store.commit("setLoading", !0), this.tipWords = "", this.commonMethods.emitAjax({
            path: "/api/captcha/get",
            data: {captchaType: this.captchaType, clientUid: localStorage.getItem("slider"), ts: Date.now()},
            success: function (t) {
              e.$store.commit("setLoading", !1), t && t.repCode ? t.repCode == e.constObject.CAPTCHA_REQ_CODE.SUCCESS ? (e.backImgBase = t.repData.originalImageBase64, e.blockBackImgBase = t.repData.jigsawImageBase64, e.backToken = t.repData.token, e.secretKey = t.repData.secretKey) : t.repCode == e.constObject.CAPTCHA_REQ_CODE.INVALID ? (e.backImgBase = null, e.blockBackImgBase = null) : e.tipWords = t.repMsg : e.tipWords = "没有获取到验证码图片"
            },
            error: function (t) {
              e.$store.commit("setLoading", !1), !t.message && e.$Message.error({content: "获取验证码图片失败"})
            }
          }))
        }
      }
    }, f = m, v = s("2877"), y = Object(v["a"])(f, c, d, !1, null, null, null), b = y.exports, g = function () {
      var e = this, t = e.$createElement, s = e._self._c || t;
      return s("div", {staticStyle: {position: "relative"}}, [s("div", {staticClass: "verify-img-out"}, [s("div", {
        staticClass: "verify-img-panel",
        style: {
          width: e.setSize.imgWidth,
          height: e.setSize.imgHeight,
          "background-size": e.setSize.imgWidth + " " + e.setSize.imgHeight,
          "margin-bottom": e.vSpace + "px"
        }
      }, [s("div", {
        directives: [{name: "show", rawName: "v-show", value: e.showRefresh, expression: "showRefresh"}],
        staticClass: "verify-refresh",
        staticStyle: {"z-index": "3"},
        on: {click: e.refresh}
      }, [s("i", {staticClass: "iconfont icon-refresh"})]), s("img", {
        ref: "canvas",
        staticStyle: {width: "100%", height: "100%", display: "block"},
        attrs: {src: e.pointBackImgBase ? "data:image/png;base64," + e.pointBackImgBase : e.defaultImg, alt: ""},
        on: {
          click: function (t) {
            e.bindingClick && e.canvasClick(t)
          }
        }
      }), e._l(e.tempPoints, (function (t, i) {
        return s("div", {
          key: i,
          staticClass: "point-area",
          style: {
            "background-color": "#1abd6c",
            color: "#fff",
            "z-index": 9999,
            width: "20px",
            height: "20px",
            "text-align": "center",
            "line-height": "20px",
            "border-radius": "50%",
            position: "absolute",
            top: parseInt(t.y - 10) + "px",
            left: parseInt(t.x - 10) + "px"
          }
        }, [e._v(" " + e._s(i + 1) + " ")])
      }))], 2)]), s("div", {
        staticClass: "verify-bar-area",
        style: {
          width: e.setSize.imgWidth,
          color: this.barAreaColor,
          "border-color": this.barAreaBorderColor,
          "line-height": this.barSize.height
        }
      }, [s("span", {staticClass: "verify-msg"}, [e._v(e._s(e.text))])])])
    }, S = [], T = (s("d81d"), s("bc3a")), _ = s.n(T);
    _.a.defaults.baseURL = Object({NODE_ENV: "production", BASE_URL: "/venue/"}).BASE_API;
    var E = _.a.create({
      timeout: 4e4,
      headers: {"X-Requested-With": "XMLHttpRequest", "Content-Type": "application/json; charset=UTF-8"}
    });
    E.interceptors.request.use((function (e) {
      return e
    }), (function (e) {
      Promise.reject(e)
    })), E.interceptors.response.use((function (e) {
      var t = e.data;
      return t
    }), (function () {
    }));
    var O = E;

    function I(e) {
      e && (O.defaults.baseURL = e)
    }

    function R(e, t) {
      return I(t), O({url: "/captcha/get", method: "post", data: e})
    }

    function C(e, t) {
      return I(t), O({url: "/captcha/check", method: "post", data: e})
    }

    var M = {
      name: "VerifyPoints",
      props: {
        mode: {type: String, default: "fixed"},
        captchaType: {type: String},
        vSpace: {type: Number, default: 5},
        imgSize: {
          type: Object, default: function () {
            return {width: "310px", height: "155px"}
          }
        },
        barSize: {
          type: Object, default: function () {
            return {width: "310px", height: "40px"}
          }
        },
        defaultImg: {type: String, default: ""}
      },
      data: function () {
        return {
          secretKey: "",
          checkNum: 3,
          fontPos: [],
          checkPosArr: [],
          num: 1,
          pointBackImgBase: "",
          poinTextList: [],
          backToken: "",
          setSize: {imgHeight: 0, imgWidth: 0, barHeight: 0, barWidth: 0},
          tempPoints: [],
          text: "",
          barAreaColor: void 0,
          barAreaBorderColor: void 0,
          showRefresh: !0,
          bindingClick: !0
        }
      },
      computed: {
        resetSize: function () {
          return p
        }
      },
      watch: {
        type: {
          immediate: !0, handler: function () {
            this.init()
          }
        }
      },
      mounted: function () {
        this.$el.onselectstart = function () {
          return !1
        }
      },
      methods: {
        init: function () {
          var e = this;
          this.fontPos.splice(0, this.fontPos.length), this.checkPosArr.splice(0, this.checkPosArr.length), this.num = 1, this.getPictrue(), this.$nextTick((function () {
            e.setSize = e.resetSize(e), e.$parent.$emit("ready", e)
          }))
        }, canvasClick: function (e) {
          var t = this;
          this.checkPosArr.push(this.getMousePos(this.$refs.canvas, e)), this.num == this.checkNum && (this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e)), this.checkPosArr = this.pointTransfrom(this.checkPosArr, this.setSize), setTimeout((function () {
            var e = t.secretKey ? h(t.backToken + "---" + JSON.stringify(t.checkPosArr), t.secretKey) : t.backToken + "---" + JSON.stringify(t.checkPosArr),
                s = {
                  captchaType: t.captchaType,
                  pointJson: t.secretKey ? h(JSON.stringify(t.checkPosArr), t.secretKey) : JSON.stringify(t.checkPosArr),
                  token: t.backToken
                };
            C(s, t.config.serverUrl).then((function (s) {
              s && "0000" == s.repCode ? (t.barAreaColor = "#4cae4c", t.barAreaBorderColor = "#5cb85c", t.text = "验证成功", t.bindingClick = !1, "pop" == t.mode && setTimeout((function () {
                t.$parent.clickShow = !1, t.refresh()
              }), 1500), t.$parent.$emit("success", {captchaVerification: e})) : (t.$parent.$emit("error", t), t.barAreaColor = "#d9534f", t.barAreaBorderColor = "#d9534f", t.text = "验证失败", setTimeout((function () {
                t.refresh()
              }), 700))
            }))
          }), 400)), this.num < this.checkNum && (this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e)))
        }, getMousePos: function (e, t) {
          var s = t.offsetX, i = t.offsetY;
          return {x: s, y: i}
        }, createPoint: function (e) {
          return this.tempPoints.push(Object.assign({}, e)), ++this.num
        }, refresh: function () {
          this.tempPoints.splice(0, this.tempPoints.length), this.barAreaColor = "#000", this.barAreaBorderColor = "#ddd", this.bindingClick = !0, this.fontPos.splice(0, this.fontPos.length), this.checkPosArr.splice(0, this.checkPosArr.length), this.num = 1, this.getPictrue(), this.text = "验证失败", this.showRefresh = !0
        }, getPictrue: function () {
          var e = this, t = {captchaType: this.captchaType, clientUid: localStorage.getItem("point"), ts: Date.now()};
          R(t, this.config.serverUrl).then((function (t) {
            "0000" == t.repCode ? (e.pointBackImgBase = t.repData.originalImageBase64, e.backToken = t.repData.token, e.secretKey = t.repData.secretKey, e.poinTextList = t.repData.wordList, e.text = "请依次点击【" + e.poinTextList.join(",") + "】") : e.text = t.repMsg, "6201" == t.repCode && (e.pointBackImgBase = null)
          }))
        }, pointTransfrom: function (e, t) {
          var s = e.map((function (e) {
            var s = Math.round(310 * e.x / parseInt(t.imgWidth)), i = Math.round(155 * e.y / parseInt(t.imgHeight));
            return {x: s, y: i}
          }));
          return s
        }
      }
    }, x = M, k = Object(v["a"])(x, g, S, !1, null, null, null), D = k.exports, N = {
      name: "Vue2Verify",
      components: {VerifySlide: b, VerifyPoints: D},
      props: {
        locale: {
          require: !1, type: String, default: function () {
            var e = null;
            return e = navigator.language ? navigator.language : navigator.browserLanguage, e
          }
        },
        captchaType: {type: String, required: !0},
        figure: {type: Number},
        arith: {type: Number},
        mode: {type: String, default: "pop"},
        vSpace: {type: Number},
        explain: {type: String},
        imgSize: {
          type: Object, default: function () {
            return {width: "310px", height: "155px"}
          }
        },
        blockSize: {type: Object},
        barSize: {type: Object},
        success: {
          type: Function, default: function () {
          }
        }
      },
      data: function () {
        return {clickShow: !1, verifyType: void 0, componentType: void 0, defaultImg: s("aa72")}
      },
      computed: {
        instance: function () {
          return this.$refs.instance || {}
        }, showBox: function () {
          return this.mode != this.constObject.CAPTCHA_MODE.POP || this.clickShow
        }
      },
      watch: {
        captchaType: {
          immediate: !0, handler: function (e) {
            switch (e.toString()) {
              case this.constObject.CAPTCHA_TYPE.BLOCK_PUZZLE:
                this.verifyType = "2", this.componentType = "VerifySlide";
                break;
              case this.constObject.CAPTCHA_TYPE.CLICK_WORD:
                this.verifyType = "", this.componentType = "VerifyPoints";
                break
            }
          }
        }
      },
      mounted: function () {
        this.uuid()
      },
      methods: {
        uuid: function () {
          for (var e = [], t = "0123456789abcdef", s = 0; s < 36; s++) e[s] = t.substr(Math.floor(16 * Math.random()), 1);
          e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
          var i = "slider-" + e.join(""), n = "point-" + e.join("");
          localStorage.getItem("slider") || localStorage.setItem("slider", i), localStorage.getItem("point") || localStorage.setItem("point", n)
        }, i18n: function (e) {
          if (this.$t) return this.$t(e);
          var t = this.$options.i18n.messages[this.locale] || this.$options.i18n.messages["en-US"];
          return t[e]
        }, refresh: function () {
          this.instance.refresh && this.instance.refresh()
        }, closeBox: function () {
          this.clickShow = !1, this.refresh()
        }, show: function () {
          this.mode == this.constObject.CAPTCHA_MODE.POP && (this.clickShow = !0)
        }
      }
    }, A = N, L = (s("c2fb"), Object(v["a"])(A, r, o, !1, null, null, null)), w = L.exports, P = {
      name: "reservationStepTwo",
      components: {Verify: w},
      props: {
        oldTradeNo: {type: String, default: null}, stepArr: {
          type: Array, default: function () {
            return []
          }
        }
      },
      data: function () {
        return {
          venueBean: {},
          dataList: [],
          buddyList: [],
          buddyIds: [],
          buddyNos: {},
          searchDate: "",
          orderDetailLists: [],
          adjustList: [],
          phone: "",
          orderToken: "",
          reservationType: -1,
          buddyChildNames: "",
          buddyChildNamesList: [],
          isOfflineTicket: 1,
          tradeNo: "",
          schoolType: 1,
          buddyInfo: [],
          buyInfo: "",
          userPhone: "",
          buddyPhone: "",
          familyName: "",
          familyPhone: "",
          choiceBuddyIds: [],
          orderCloseTime: "",
          orderGmtCreate: "",
          buddyName: [],
          buyName: "",
          buyRole: null,
          isFamilyBuddy: !1,
          remainSecond: 0,
          timer: null,
          adjustObj: {},
          weekStartDate: null,
          modalFlag: !1,
          formData: {},
          rules: {username: {required: !0, type: "string", message: "请选择学工号/用户名", trigger: "blur"}},
          isTimePay: null,
          checkBuddyNoModal: !1,
          recordModel: {},
          buyBuddyList: [],
          choiceBuddyModal: !1,
          showVerify: !1,
          captchaVerification: null,
          isCaptchaCheck: this.constObject.VENUE_IS.NO
        }
      },
      computed: {
        publicHeight: function () {
          return this.$store.state.publicHeight
        }
      },
      methods: {
        setData: function (e) {
          var t = this, s = e.orderDetailList, i = e.venueInfoBean, n = e.buddyList, a = e.date, r = e.orderBuddyList,
              o = e.orderDetailLists, c = e.adjustList, d = e.phone, l = e.reservationType, u = e.schoolType,
              h = e.tradeNo, p = e.orderCloseTime, m = e.orderGmtCreate, f = e.remainSecond, v = e.weekStartDate,
              y = e.isTimePay, b = e.token, g = e.isCaptchaCheck;
          s && s.forEach((function (e) {
            e.checked = !0
          })), this.dataList = s || [], this.orderDetailLists = o || [], this.venueBean = i || {}, this.adjustList = c || [], this.reservationType = l || -1, this.phone = d || "", this.schoolType = u, this.tradeNo = h, this.orderToken = b, this.isCaptchaCheck = g, this.orderCloseTime = p || "", this.orderGmtCreate = m || "", this.remainSecond = f || null, this.weekStartDate = v || null, this.isTimePay = y || null, this.remainSecond && this.startTime(), "adjustOrder" == this.$route.name ? (this.buddyIds = [], this.buddyList = r || [], this.buddyList.forEach((function (e) {
            t.buddyIds.push(e.userId)
          }))) : this.buddyList = n || [], this.searchDate = a, this.buddyInfo = [], this.buyInfo = "", this.buddyName = [], this.buddyPhone = "", this.userPhone = "", this.buyName = "", document.getElementsByClassName("scroll")[0].scrollTop = 0
        }, backStepOne: function () {
          var e = this;
          this.oldTradeNo || this.tradeNo ? this.commonMethods.anewReservation.call(this, this.oldTradeNo || this.tradeNo, (function () {
            e.$emit("set-current", e.reservationType, e.searchDate ? e.searchDate : e.dataList && e.dataList[0].startDate && e.moment(e.dataList[0].startDate).format("YYYY-MM-DD"), e.venueBean, e.schoolType), e.$emit("set-step", 0, e.schoolType)
          })) : this.$emit("set-step", 0)
        }, popData: function () {
          var e = this;
          if (this.buddyIds.length + this.buddyChildNamesList.length > this.venueBean.buddyNumMax) this.buddyIds.pop(); else {
            var t = [], s = [];
            if (this.buddyIds && this.buddyIds.length) {
              for (var i = [], n = 0; n < this.buddyList.length; n++) this.buddyList[n].userRoleId == this.constObject.ROLE.FAMILY_MEMBERS && i.push(this.buddyList[n].id);
              for (var r = 0; r < this.buddyIds.length; r++) i.indexOf(this.buddyIds[r]) > -1 ? s.push(this.buddyIds[r]) : t.push(this.buddyIds[r])
            }
            if (s && s.length > this.venueBean.buddyFamilyNumMax) this.$nextTick((function () {
              e.buddyIds.splice(e.buddyIds.indexOf(s[s.length - 1]), 1)
            })); else if (this.commonMethods.hasHanderRule(this.constObject.RULE_VIP.CHECK_BUDDY_NO) && t.length > 0) {
              var o = function () {
                var s, i = {};
                for (var n in e.buddyNos) e.buddyIds.indexOf(parseInt(n)) > -1 && (i[n] = e.buddyNos[n]);
                e.buddyNos = Object.assign({}, i);
                for (var a = 0; a < t.length; a++) if (!(t[a] in e.buddyNos)) {
                  s = t[a];
                  break
                }
                if (s) for (var r = 0; r < e.buddyList.length; r++) if (s == e.buddyList[r].id) return e.recordModel = Object.assign({}, e.buddyList[r]), e.$nextTick((function () {
                  e.buddyIds.splice(e.buddyIds.indexOf(s), 1)
                })), e.setCheckBuddyNoModal(!0), {v: void 0}
              }();
              if ("object" === Object(a["a"])(o)) return o.v
            }
          }
        }, setCheckBuddyNoModal: function (e) {
          this.checkBuddyNoModal = e
        }, submitData: function () {
          var e = this;
          if (this.buyInfo || !this.commonMethods.isBuyTicketAdmin(this.userInfo.role)) if (!this.commonMethods.isShowPhone() || this.phone && this.commonMethods.isPhone(this.phone) || this.commonMethods.isBuyTicketAdmin(this.userInfo.role)) if ((this.oldTradeNo || this.tradeNo) && this.remainSecond && this.remainSecond <= 0) this.$Message.warning({content: "当前预约订单已失效！"}); else {
            var t = [];
            if (this.dataList.forEach((function (s) {
              s.checked && t.push({
                spaceId: s.venueSpaceId,
                timeId: s.timeId,
                venueSpaceGroupId: -1 != e.reservationType ? s.venueSpaceGroupId : null
              })
            })), t.length) {
              if (!this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && (this.buddyIds.length + this.buddyChildNamesList.length > this.venueBean.buddyNumMax || this.buddyIds.length + this.buddyChildNamesList.length < this.venueBean.buddyNumMin)) return void this.$Message.warning({content: "所选同伴人数不符合同伴限制规则！"});
              if (this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && (this.buddyInfo.length > this.venueBean.buddyNumMax || this.buddyInfo.length < this.venueBean.buddyNumMin)) return void this.$Message.warning({content: "同伴人数不符合同伴限制规则！"});
              var s = [];
              if (this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && (this.buddyIds = [], this.buddyChildNamesList && this.buddyChildNamesList.length)) for (var i = 0; i < this.buddyChildNamesList.length; i++) {
                var n = this.buddyChildNamesList[i];
                n.id && n.id > 0 ? this.buddyIds.push(n.id) : s.push(n)
              }
              var a = {
                venueSiteId: this.venueBean.venueSiteId,
                reservationDate: this.searchDate,
                reservationOrderJson: JSON.stringify(t),
                phone: this.phone || null,
                buddyIds: this.buddyIds.length ? this.buddyIds.join(",") : null,
                weekStartDate: this.weekStartDate || null
              };
              if (this.isCaptchaCheck == this.constObject.VENUE_IS.YES && !this.captchaVerification) return void this.doVerify(!0);
              if (this.captchaVerification && (a.captchaVerification = this.captchaVerification, this.$set(this, "captchaVerification", null)), s.length && (a.buddyNames = JSON.stringify(s)), this.commonMethods.hasHanderRule(this.constObject.RULE_VIP.CHECK_BUDDY_NO)) {
                for (var r = [], o = 0; o < this.buddyIds.length; o++) this.buddyIds[o] in this.buddyNos && r.push(this.buddyNos[this.buddyIds[o]]);
                r.length && (a.buddyNo = r.join(","))
              }
              var c = [];
              "adjustOrder" == this.$route.name && (this.orderDetailLists.forEach((function (t) {
                -1 != e.adjustList.indexOf(t.id) && c.push(t.id)
              })), a.cancelOrderDetailIds = c.join(",")), -1 == this.reservationType ? a.reservationType = null : a.reservationType = this.reservationType, this.buyInfo && (a.buyInfo = this.buyInfo), this.buddyInfo && this.buddyInfo.length && (a.buddyInfo = this.buddyInfo.join(",")), a.isOfflineTicket = this.isOfflineTicket || null, a.schoolType = this.schoolType || null, a.tradeNo = this.tradeNo || null, a.token = this.orderToken || "", this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/reservation/order/submit", data: a, type: "POST", success: function (t) {
                  if (e.$Message.success({content: "提交预约成功"}), e.$store.commit("setLoading", !1), "adjustOrder" == e.$route.name) e.$router.push({name: "Orders"}); else if (e.isTimePay) {
                    var s = "";
                    e.dataList.forEach((function (e) {
                      -1 == s.indexOf(e.venueSpaceName) && (s += e.venueSpaceName)
                    })), e.$emit("set-step", e.stepArr.indexOf(e.constObject.RESERVATION_STEP.FINISH)), e.$emit("set-title", {
                      type: e.constObject.UNIFY_TYPE.RESERVATION_PAY,
                      id: e.formData.orderId,
                      isCancel: null,
                      status: 1,
                      unit: 2,
                      name: "您已经成功购票" + e.venueBean.venueName + e.venueBean.siteName + s,
                      isTimePay: e.isTimePay
                    })
                  } else if (e.commonMethods.isNWPU() || e.config.isOfflinePay && e.commonMethods.isCanReservation(e.userInfo.role)) {
                    var i = "";
                    e.dataList.forEach((function (e) {
                      -1 == i.indexOf(e.venueSpaceName) && (i += e.venueSpaceName)
                    })), e.$emit("set-step", e.stepArr.indexOf(e.constObject.RESERVATION_STEP.FINISH));
                    var n = "您已经成功预约" + e.commonMethods.appendVenueName(e.venueBean.campusName, e.venueBean.venueName, e.venueBean.siteName, "");
                    t && t.orderInfo && (n += "，使用时间为" + e.commonMethods.joinArr([e.moment(t.orderInfo.reservationStartDate).format("YYYY-MM-DD HH:mm"), e.moment(t.orderInfo.reservationEndDate).format("HH:mm")], "-")), e.config.isOfflinePay && e.commonMethods.isCanReservation(e.userInfo.role) ? n += "，请您按时到场并完成现场支付后验票入场" : n += "，可使用预约码入场", e.$emit("set-title", {
                      type: e.constObject.UNIFY_TYPE.RESERVATION_PAY,
                      id: t.orderInfo && t.orderInfo.id,
                      isCancel: null,
                      status: 1,
                      unit: 2,
                      name: n
                    })
                  } else e.$emit("set-step", e.stepArr.indexOf(e.constObject.RESERVATION_STEP.PAY)), e.commonMethods.isBuyTicketAdmin(e.userInfo.role) ? e.$emit("set-pay-data", e.tradeNo || t.orderInfo.tradeNo) : e.$emit("set-pay-data", t.orderInfo.tradeNo)
                }, error: function (t) {
                  e.$store.commit("setLoading", !1), t && t.code == e.constObject.HTTP_STATUS.NETWORK_AUTH ? e.doVerify(!0) : !t && e.$Message.success({content: "系统繁忙，请稍后再试！！！"})
                }
              })
            } else this.$Message.error("至少选择一个预约订单")
          } else this.$Message.warning({content: "请填写正确的手机号！"}); else this.$Message.warning({content: "请填写购票用户信息！"})
        }, addBuddy: function (e, t) {
          var s = {}, i = 0;
          if (1 == t) {
            for (var n = !1, a = 0; a < this.buddyChildNamesList.length; a++) {
              var r = this.buddyChildNamesList[a];
              r.id && r.id > 0 ? -1 == this.buddyIds.indexOf(r.id) && (this.buddyChildNamesList.splice(a, 1), n = !0) : i += 1
            }
            if (n) return;
            if (!(this.buddyIds.length > 0)) return;
            for (var o = this.buddyIds.slice(-1), c = 0; c < this.buyBuddyList.length; c++) {
              var d = this.buyBuddyList[c];
              if (o == d.id) {
                s = {id: d.id, name: d.name, userPhone: d.userPhone, userRoleId: d.userRoleId};
                break
              }
            }
          } else {
            var l = this.commonMethods.trim(this.familyName), u = this.commonMethods.trim(this.familyPhone);
            if (!l) return void this.$Message.warning({content: "请填写家属姓名"});
            if (u && !this.commonMethods.isPhone(u)) return void this.$Message.warning({content: "手机号格式错误"});
            for (var h = !1, p = 0; p < this.buddyChildNamesList.length; p++) if (this.buddyChildNamesList[p].name == l) {
              this.$Message.warning({content: "不能重复添加同伴"}), h = !0;
              break
            }
            if (h) return;
            s.name = l, s.userPhone = u, s.userRoleId = this.constObject.ROLE.FAMILY_MEMBERS
          }
          var m = this.venueBean.buddyFamilyNumMax ? this.venueBean.buddyFamilyNumMax : this.venueBean.buddyNumMax;
          if (this.buddyChildNamesList.length >= m) return s.id && this.buddyIds.length + i > m && this.buddyIds.pop(), void this.$Message.warning({content: "家属人数不能超过限制人数"});
          this.buddyChildNamesList.push(s), t || (this.$Message.success({content: "添加家属成功"}), this.familyName = "", this.familyPhone = "")
        }, delChildName: function (e) {
          for (var t = 0; t < this.buddyChildNamesList.length; t++) {
            var s = this.buddyChildNamesList[t];
            if (e.id && e.id > 0) {
              if (s.id == e.id) {
                this.buddyChildNamesList.splice(t, 1);
                var i = this.buddyIds.indexOf(e.id);
                i > -1 && this.buddyIds.splice(i, 1);
                break
              }
            } else if (e.name == s.name) {
              this.buddyChildNamesList.splice(t, 1);
              break
            }
          }
        }, getCardInfo: function (e, t) {
          var s = this;
          this.commonMethods.readCard.call(this, (function (e) {
            s.checkUser(e, t, 1, 2)
          }))
        }, checkUser: function (e, t, s, i) {
          var n = this;
          if (1 == t && (this.buyBuddyList = []), e) {
            this.$store.commit("setLoading", !0);
            var a = {};
            s == this.constObject.VIP_TYPE.SCHOOL ? (a.uid = e, a.queryType = i ? 2 : 1) : a.phone = e, this.commonMethods.emitAjax({
              path: s == this.constObject.VIP_TYPE.SCHOOL ? "/api/users/check_uid" : "/api/users/check_reg_phone",
              data: a,
              success: function (e) {
                n.$store.commit("setLoading", !1), e ? s == n.constObject.VIP_TYPE.SCHOOL ? e && (1 == t ? -1 == n.buddyInfo.indexOf(e.username) ? (n.$Message.success({content: "信息核验通过"}), n.buyInfo = e.username, n.buyRole = e.role, n.phone = e.phone, n.buyName = e.name, n.buyBuddyList = e.buddyViewList || []) : n.$Message.warning({content: "用户信息不可重复"}) : n.buddyInfo.length < n.venueBean.buddyNumMax && -1 == n.buddyInfo.indexOf(e.username) && e.username != n.buyInfo ? (n.$Message.success({content: "信息核验通过"}), n.buddyInfo.push(e.username), n.buddyName.push(e.name), n.buddyPhone = "") : n.$Message.warning({content: "同伴添加不能超过最大同伴数且不可重复"})) : e && 1 == e.loginCheckStatus ? 1 == t ? (n.$Message.success({content: "信息核验通过"}), n.buyInfo = e.phone, n.buyRole = e.role, n.phone = e.phone, n.buddyPhone = "", n.buyName = e.name) : n.buddyInfo.length < n.venueBean.buddyNumMax && -1 == n.buddyInfo.indexOf(e.username) ? (n.$Message.success({content: "信息核验通过"}), n.buddyInfo.push(e.phone), n.buddyName.push(e.name), n.buddyPhone = "") : n.$Message.warning({content: "同伴添加不能超过最大同伴数且不可重复"}) : n.$Message.warning({content: "信息核验不通过"}) : n.$Message.warning({content: "信息核验失败,该用户不存在！"})
              },
              error: function (e) {
                n.$store.commit("setLoading", !1), !e && n.$Message.success({content: "校验失败"})
              }
            })
          } else this.$Message.warning({content: "请输入有效手机号/学工号！"})
        }, delBuddy: function (e) {
          this.buddyInfo.splice(e, 1), this.buddyName.splice(e, 1)
        }, startTime: function () {
          var e = this;
          clearTimeout(this.timer), this.timer = setTimeout((function () {
            e.remainSecond >= 0 ? (e.remainSecond--, e.startTime()) : clearTimeout(e.timer)
          }), 1e3)
        }, clickBuddy: function () {
          this.modalFlag = !0, this.formData = {}
        }, addBuddyInfo: function () {
          var e = this;
          if (this.buddyIds && this.buddyIds.length && this.buddyIds.length >= this.buddyNumMax && -1 != this.commonMethods.arrayIndexOf(this.buddyList, this.formData.userUid, "userId")) this.$Message.warning({content: "同伴添加不能超过最大同伴数且不可重复"}); else {
            var t = Object.assign({}, this.formData);
            this.modalFlag = !1, this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
              path: "/api/buddies",
              type: "POST",
              data: t,
              success: function () {
                e.$store.commit("setLoading", !1), e.$Message.success({content: "保存成功"}), e.$store.dispatch("getBuddyList"), e.buddyIds.push(e.formData.userUid), e.buddyList.push()
              },
              error: function (t) {
                e.$store.commit("setLoading", !1), !t.message && e.$Message.error({content: "保存失败"})
              }
            })
          }
        }, checkBuddyNo: function () {
          var e = this;
          this.$refs.checkBuddyNoForm.validate((function (t) {
            if (t) {
              if (5 != e.recordModel.buddyNo.length) return void e.$Message.error({content: "请填写5位数字同伴码"});
              e.$store.commit("setLoading", !0), e.commonMethods.emitAjax({
                path: "/api/vip/check/buddy_no",
                type: "POST",
                data: {
                  buddyUserId: e.recordModel.userId,
                  buddyRoleId: e.recordModel.userRoleId,
                  buddyNo: e.recordModel.buddyNo
                },
                success: function (t) {
                  t.checkResult ? (e.$Message.success({content: "同伴码正确"}), -1 == e.buddyIds.indexOf(e.recordModel.id) && e.buddyIds.push(e.recordModel.id), e.buddyNos[e.recordModel.id] = e.recordModel.buddyNo, e.setCheckBuddyNoModal(!1)) : e.$Message.error({content: "同伴码错误"}), e.$store.commit("setLoading", !1)
                },
                error: function (t) {
                  e.$store.commit("setLoading", !1), !t.message && e.$Message.error({content: "校验同伴码失败"})
                }
              })
            }
          }))
        }, setChoiceBuddyModal: function (e) {
          this.choiceBuddyModal = e
        }, verifySuccess: function (e) {
          this.captchaVerification = e, this.submitData()
        }, doVerify: function (e) {
          this.$set(this, "showVerify", e), e && (console.log(this.$refs.verify), this.$refs.verify.show())
        }
      },
      destroyed: function () {
        clearTimeout(this.timer)
      }
    }, B = P, j = (s("6d18"), Object(v["a"])(B, i, n, !1, null, "6c346c1c", null));
    t["a"] = j.exports
  }, "8df4b": function (e, t, s) {
    "use strict";
    var i = s("7a77");

    function n(e) {
      if ("function" !== typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise((function (e) {
        t = e
      }));
      var s = this;
      e((function (e) {
        s.reason || (s.reason = new i(e), t(s.reason))
      }))
    }

    n.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }, n.source = function () {
      var e, t = new n((function (t) {
        e = t
      }));
      return {token: t, cancel: e}
    }, e.exports = n
  }, a373: function (e, t, s) {
    "use strict";
    s("fcf5")
  }, aa72: function (e, t, s) {
    e.exports = s.p + "img/default.eb2d1981.png"
  }, b50d: function (e, t, s) {
    "use strict";
    var i = s("c532"), n = s("467f"), a = s("30b5"), r = s("83b9"), o = s("c345"), c = s("3934"), d = s("2d83");
    e.exports = function (e) {
      return new Promise((function (t, l) {
        var u = e.data, h = e.headers;
        i.isFormData(u) && delete h["Content-Type"];
        var p = new XMLHttpRequest;
        if (e.auth) {
          var m = e.auth.username || "", f = e.auth.password || "";
          h.Authorization = "Basic " + btoa(m + ":" + f)
        }
        var v = r(e.baseURL, e.url);
        if (p.open(e.method.toUpperCase(), a(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
          if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
            var s = "getAllResponseHeaders" in p ? o(p.getAllResponseHeaders()) : null,
                i = e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                a = {data: i, status: p.status, statusText: p.statusText, headers: s, config: e, request: p};
            n(t, l, a), p = null
          }
        }, p.onabort = function () {
          p && (l(d("Request aborted", e, "ECONNABORTED", p)), p = null)
        }, p.onerror = function () {
          l(d("Network Error", e, null, p)), p = null
        }, p.ontimeout = function () {
          var t = "timeout of " + e.timeout + "ms exceeded";
          e.timeoutErrorMessage && (t = e.timeoutErrorMessage), l(d(t, e, "ECONNABORTED", p)), p = null
        }, i.isStandardBrowserEnv()) {
          var y = s("7aac"), b = (e.withCredentials || c(v)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
          b && (h[e.xsrfHeaderName] = b)
        }
        if ("setRequestHeader" in p && i.forEach(h, (function (e, t) {
          "undefined" === typeof u && "content-type" === t.toLowerCase() ? delete h[t] : p.setRequestHeader(t, e)
        })), i.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
          p.responseType = e.responseType
        } catch (g) {
          if ("json" !== e.responseType) throw g
        }
        "function" === typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) {
          p && (p.abort(), l(e), p = null)
        })), void 0 === u && (u = null), p.send(u)
      }))
    }
  }, bc3a: function (e, t, s) {
    e.exports = s("cee4")
  }, c2fb: function (e, t, s) {
    "use strict";
    s("25db")
  }, c345: function (e, t, s) {
    "use strict";
    var i = s("c532"),
        n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
      var t, s, a, r = {};
      return e ? (i.forEach(e.split("\n"), (function (e) {
        if (a = e.indexOf(":"), t = i.trim(e.substr(0, a)).toLowerCase(), s = i.trim(e.substr(a + 1)), t) {
          if (r[t] && n.indexOf(t) >= 0) return;
          r[t] = "set-cookie" === t ? (r[t] ? r[t] : []).concat([s]) : r[t] ? r[t] + ", " + s : s
        }
      })), r) : r
    }
  }, c401: function (e, t, s) {
    "use strict";
    var i = s("c532");
    e.exports = function (e, t, s) {
      return i.forEach(s, (function (s) {
        e = s(e, t)
      })), e
    }
  }, c503: function (e, t, s) {
  }, c532: function (e, t, s) {
    "use strict";
    var i = s("1d2b"), n = Object.prototype.toString;

    function a(e) {
      return "[object Array]" === n.call(e)
    }

    function r(e) {
      return "undefined" === typeof e
    }

    function o(e) {
      return null !== e && !r(e) && null !== e.constructor && !r(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function c(e) {
      return "[object ArrayBuffer]" === n.call(e)
    }

    function d(e) {
      return "undefined" !== typeof FormData && e instanceof FormData
    }

    function l(e) {
      var t;
      return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer, t
    }

    function u(e) {
      return "string" === typeof e
    }

    function h(e) {
      return "number" === typeof e
    }

    function p(e) {
      return null !== e && "object" === typeof e
    }

    function m(e) {
      return "[object Date]" === n.call(e)
    }

    function f(e) {
      return "[object File]" === n.call(e)
    }

    function v(e) {
      return "[object Blob]" === n.call(e)
    }

    function y(e) {
      return "[object Function]" === n.call(e)
    }

    function b(e) {
      return p(e) && y(e.pipe)
    }

    function g(e) {
      return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
    }

    function S(e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function T() {
      return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
    }

    function _(e, t) {
      if (null !== e && "undefined" !== typeof e) if ("object" !== typeof e && (e = [e]), a(e)) for (var s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e); else for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
    }

    function E() {
      var e = {};

      function t(t, s) {
        "object" === typeof e[s] && "object" === typeof t ? e[s] = E(e[s], t) : e[s] = t
      }

      for (var s = 0, i = arguments.length; s < i; s++) _(arguments[s], t);
      return e
    }

    function O() {
      var e = {};

      function t(t, s) {
        "object" === typeof e[s] && "object" === typeof t ? e[s] = O(e[s], t) : e[s] = "object" === typeof t ? O({}, t) : t
      }

      for (var s = 0, i = arguments.length; s < i; s++) _(arguments[s], t);
      return e
    }

    function I(e, t, s) {
      return _(t, (function (t, n) {
        e[n] = s && "function" === typeof t ? i(t, s) : t
      })), e
    }

    e.exports = {
      isArray: a,
      isArrayBuffer: c,
      isBuffer: o,
      isFormData: d,
      isArrayBufferView: l,
      isString: u,
      isNumber: h,
      isObject: p,
      isUndefined: r,
      isDate: m,
      isFile: f,
      isBlob: v,
      isFunction: y,
      isStream: b,
      isURLSearchParams: g,
      isStandardBrowserEnv: T,
      forEach: _,
      merge: E,
      deepMerge: O,
      extend: I,
      trim: S
    }
  }, c8af: function (e, t, s) {
    "use strict";
    var i = s("c532");
    e.exports = function (e, t) {
      i.forEach(e, (function (s, i) {
        i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = s, delete e[i])
      }))
    }
  }, c8d2: function (e, t, s) {
    var i = s("d039"), n = s("5899"), a = "​᠎";
    e.exports = function (e) {
      return i((function () {
        return !!n[e]() || a[e]() != a || n[e].name !== e
      }))
    }
  }, cee4: function (e, t, s) {
    "use strict";
    var i = s("c532"), n = s("1d2b"), a = s("0a06"), r = s("4a7b"), o = s("2444");

    function c(e) {
      var t = new a(e), s = n(a.prototype.request, t);
      return i.extend(s, a.prototype, t), i.extend(s, t), s
    }

    var d = c(o);
    d.Axios = a, d.create = function (e) {
      return c(r(d.defaults, e))
    }, d.Cancel = s("7a77"), d.CancelToken = s("8df4b"), d.isCancel = s("2e67"), d.all = function (e) {
      return Promise.all(e)
    }, d.spread = s("0df6"), e.exports = d, e.exports.default = d
  }, d925: function (e, t, s) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  }, df7c: function (e, t, s) {
    (function (e) {
      function s(e, t) {
        for (var s = 0, i = e.length - 1; i >= 0; i--) {
          var n = e[i];
          "." === n ? e.splice(i, 1) : ".." === n ? (e.splice(i, 1), s++) : s && (e.splice(i, 1), s--)
        }
        if (t) for (; s--; s) e.unshift("..");
        return e
      }

      function i(e) {
        "string" !== typeof e && (e += "");
        var t, s = 0, i = -1, n = !0;
        for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
          if (!n) {
            s = t + 1;
            break
          }
        } else -1 === i && (n = !1, i = t + 1);
        return -1 === i ? "" : e.slice(s, i)
      }

      function n(e, t) {
        if (e.filter) return e.filter(t);
        for (var s = [], i = 0; i < e.length; i++) t(e[i], i, e) && s.push(e[i]);
        return s
      }

      t.resolve = function () {
        for (var t = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
          var r = a >= 0 ? arguments[a] : e.cwd();
          if ("string" !== typeof r) throw new TypeError("Arguments to path.resolve must be strings");
          r && (t = r + "/" + t, i = "/" === r.charAt(0))
        }
        return t = s(n(t.split("/"), (function (e) {
          return !!e
        })), !i).join("/"), (i ? "/" : "") + t || "."
      }, t.normalize = function (e) {
        var i = t.isAbsolute(e), r = "/" === a(e, -1);
        return e = s(n(e.split("/"), (function (e) {
          return !!e
        })), !i).join("/"), e || i || (e = "."), e && r && (e += "/"), (i ? "/" : "") + e
      }, t.isAbsolute = function (e) {
        return "/" === e.charAt(0)
      }, t.join = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return t.normalize(n(e, (function (e, t) {
          if ("string" !== typeof e) throw new TypeError("Arguments to path.join must be strings");
          return e
        })).join("/"))
      }, t.relative = function (e, s) {
        function i(e) {
          for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
          for (var s = e.length - 1; s >= 0; s--) if ("" !== e[s]) break;
          return t > s ? [] : e.slice(t, s - t + 1)
        }

        e = t.resolve(e).substr(1), s = t.resolve(s).substr(1);
        for (var n = i(e.split("/")), a = i(s.split("/")), r = Math.min(n.length, a.length), o = r, c = 0; c < r; c++) if (n[c] !== a[c]) {
          o = c;
          break
        }
        var d = [];
        for (c = o; c < n.length; c++) d.push("..");
        return d = d.concat(a.slice(o)), d.join("/")
      }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) {
        if ("string" !== typeof e && (e += ""), 0 === e.length) return ".";
        for (var t = e.charCodeAt(0), s = 47 === t, i = -1, n = !0, a = e.length - 1; a >= 1; --a) if (t = e.charCodeAt(a), 47 === t) {
          if (!n) {
            i = a;
            break
          }
        } else n = !1;
        return -1 === i ? s ? "/" : "." : s && 1 === i ? "/" : e.slice(0, i)
      }, t.basename = function (e, t) {
        var s = i(e);
        return t && s.substr(-1 * t.length) === t && (s = s.substr(0, s.length - t.length)), s
      }, t.extname = function (e) {
        "string" !== typeof e && (e += "");
        for (var t = -1, s = 0, i = -1, n = !0, a = 0, r = e.length - 1; r >= 0; --r) {
          var o = e.charCodeAt(r);
          if (47 !== o) -1 === i && (n = !1, i = r + 1), 46 === o ? -1 === t ? t = r : 1 !== a && (a = 1) : -1 !== t && (a = -1); else if (!n) {
            s = r + 1;
            break
          }
        }
        return -1 === t || -1 === i || 0 === a || 1 === a && t === i - 1 && t === s + 1 ? "" : e.slice(t, i)
      };
      var a = "b" === "ab".substr(-1) ? function (e, t, s) {
        return e.substr(t, s)
      } : function (e, t, s) {
        return t < 0 && (t = e.length + t), e.substr(t, s)
      }
    }).call(this, s("4362"))
  }, e683: function (e, t, s) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
  }, f6b49: function (e, t, s) {
    "use strict";
    var i = s("c532");

    function n() {
      this.handlers = []
    }

    n.prototype.use = function (e, t) {
      return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, n.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null)
    }, n.prototype.forEach = function (e) {
      i.forEach(this.handlers, (function (t) {
        null !== t && e(t)
      }))
    }, e.exports = n
  }, fcf5: function (e, t, s) {
  }
}]);