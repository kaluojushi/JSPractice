(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0daf06"], {
  "6e78": function (t, a, e) {
    "use strict";
    e.r(a);
    var n = function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("Layout", {staticClass: "rightContent"}, [e("Content", [e("Card", {attrs: {"dis-hover": ""}}, [e("h2", {staticClass: "text-center"}, [t._v("欢迎使用" + t._s(t.config.sysName))])])], 1)], 1)
    }, o = [], s = {
      name: "welcome", data: function () {
        return {tableLoading: !1, dataList: []}
      }, methods: {
        getData: function () {
          var t = this;
          this.tableLoading = !0, this.commonMethods.emitAjax({
            path: "/api/protocols",
            data: {page: -1, size: -1},
            success: function (a) {
              t.tableLoading = !1, t.dataList = a.content || []
            },
            error: function () {
              t.tableLoading = !1
            }
          })
        }
      }, created: function () {
      }
    }, i = s, c = e("2877"), r = Object(c["a"])(i, n, o, !1, null, null, null);
    a["default"] = r.exports
  }
}]);