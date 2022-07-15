(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3f840e9c"], {
  1148: function (t, e, a) {
    "use strict";
    var s = a("a691"), i = a("1d80");
    t.exports = function (t) {
      var e = String(i(this)), a = "", o = s(t);
      if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (a += e);
      return a
    }
  }, "258f": function (t, e, a) {
  }, "352b": function (t, e, a) {
  }, "408a": function (t, e, a) {
    var s = a("c6b6");
    t.exports = function (t) {
      if ("number" != typeof t && "Number" != s(t)) throw TypeError("Incorrect invocation");
      return +t
    }
  }, 5900: function (t, e, a) {
    "use strict";
    a("e21f")
  }, "59f7": function (t, e, a) {
    "use strict";
    a("352b")
  }, "73e1": function (t, e, a) {
    "use strict";
    a("bb0b")
  }, 9419: function (t, e, a) {
    "use strict";
    var s = function () {
      var t = this, e = t.$createElement, a = t._self._c || e;
      return a("Modal", {
        attrs: {title: "请选择支付结果", closable: !1, "footer-hide": "", "mask-closable": !1},
        model: {
          value: t.isReload, callback: function (e) {
            t.isReload = e
          }, expression: "isReload"
        }
      }, [a("div", {
        staticClass: "schoolType",
        style: {flexDirection: t.commonMethods.isApp() ? "column" : ""}
      }, [t._l(t.constObject.SCHOOL_TYPE, (function (e) {
        return [a("div", {
          key: e,
          staticClass: "schoolItem",
          class: ["schoolItem", {active: t.currentSelect == e ? "active" : ""}],
          style: {
            height: t.commonMethods.isApp() ? "80px" : "150px",
            lineHeight: t.commonMethods.isApp() ? "80px" : "150px",
            width: t.commonMethods.isApp() ? "85%" : "150px"
          },
          on: {
            click: function (a) {
              return t.reloadSuccess(e)
            }
          }
        }, [t._v(" " + t._s(1 == e ? "已完成支付" : "未完成支付") + " ")])]
      }))], 2)])
    }, i = [], o = {
      data: function () {
        return {isReload: !1, currentSelect: 1}
      }, methods: {
        reloadSuccess: function () {
          this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && this.commonMethods.switchScreen.call(this, this.constObject.SCREEN_OPEN_TYPE.CANCEL), this.$emit("on-success", 1 == this.currentSelect ? this.currentSelect : 2), this.isReload = !1
        }, open: function () {
          this.currentSelect = 1, this.isReload = !0
        }
      }
    }, n = o, c = (a("c9d4"), a("2877")), r = Object(c["a"])(n, s, i, !1, null, "4c333d67", null);
    e["a"] = r.exports
  }, b680: function (t, e, a) {
    "use strict";
    var s = a("23e7"), i = a("a691"), o = a("408a"), n = a("1148"), c = a("d039"), r = 1..toFixed, d = Math.floor,
        l = function (t, e, a) {
          return 0 === e ? a : e % 2 === 1 ? l(t, e - 1, a * t) : l(t * t, e / 2, a)
        }, p = function (t) {
          var e = 0, a = t;
          while (a >= 4096) e += 12, a /= 4096;
          while (a >= 2) e += 1, a /= 2;
          return e
        }, m = function (t, e, a) {
          var s = -1, i = a;
          while (++s < 6) i += e * t[s], t[s] = i % 1e7, i = d(i / 1e7)
        }, u = function (t, e) {
          var a = 6, s = 0;
          while (--a >= 0) s += t[a], t[a] = d(s / e), s = s % e * 1e7
        }, h = function (t) {
          var e = 6, a = "";
          while (--e >= 0) if ("" !== a || 0 === e || 0 !== t[e]) {
            var s = String(t[e]);
            a = "" === a ? s : a + n.call("0", 7 - s.length) + s
          }
          return a
        },
        y = r && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !c((function () {
          r.call({})
        }));
    s({target: "Number", proto: !0, forced: y}, {
      toFixed: function (t) {
        var e, a, s, c, r = o(this), d = i(t), y = [0, 0, 0, 0, 0, 0], f = "", v = "0";
        if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
        if (r != r) return "NaN";
        if (r <= -1e21 || r >= 1e21) return String(r);
        if (r < 0 && (f = "-", r = -r), r > 1e-21) if (e = p(r * l(2, 69, 1)) - 69, a = e < 0 ? r * l(2, -e, 1) : r / l(2, e, 1), a *= 4503599627370496, e = 52 - e, e > 0) {
          m(y, 0, a), s = d;
          while (s >= 7) m(y, 1e7, 0), s -= 7;
          m(y, l(10, s, 1), 0), s = e - 1;
          while (s >= 23) u(y, 1 << 23), s -= 23;
          u(y, 1 << s), m(y, 1, 1), u(y, 2), v = h(y)
        } else m(y, 0, a), m(y, 1 << -e, 0), v = h(y) + n.call("0", d);
        return d > 0 ? (c = v.length, v = f + (c <= d ? "0." + n.call("0", d - c) + v : v.slice(0, c - d) + "." + v.slice(c - d))) : v = f + v, v
      }
    })
  }, bb0b: function (t, e, a) {
  }, c9d4: function (t, e, a) {
    "use strict";
    a("258f")
  }, e21f: function (t, e, a) {
  }, f044: function (t, e, a) {
    "use strict";
    var s = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {style: {minHeight: t.publicHeight - 50 + "px"}}, [t.formData.orderCloseTime && t.formData.remainSecond && !t.formData.isTimePay ? a("div", {
            staticClass: "payHint",
            style: {lineHeight: t.commonMethods.isApp() ? "30px" : "52px", paddingTop: t.commonMethods.isApp() ? "10px" : 0}
          }, [t.commonMethods.isPKU() || t.commonMethods.isBUAA() ? [a("div", {staticStyle: {"text-align": "center"}}, [t._v("支付剩余时间:" + t._s(t.remainSecond >= 0 ? t.remainSecond : 0) + "秒")])] : [t._v(" 订单提交后 " + t._s(t.formData.orderCloseTime) + " 分钟内未支付将会自动取消 "), t.remainSecond ? [t._v("， " + t._s(t.remainSecond >= 0 ? t.remainSecond : 0) + "秒后关闭")] : t._e()]], 2) : t._e(), a("Divider", {attrs: {orientation: "left"}}, [a("h5", [t._v(" " + t._s(t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.ORDER_RESERVATION) > -1 ? "预约信息" : "订单信息") + " ")])]), t.commonMethods.isApp() ? t._e() : a("div", {
            staticClass: "payDetailItem",
            staticStyle: {width: "100%"}
          }, [a("div", {staticClass: "payLable priceLable"}, [t._v("应付总额")]), a("div", {staticClass: "payText price"}, [t._v(" "), t.deductionAmount ? [t._v(" " + t._s(t.commonMethods.roundNumber(t.formData.payFee - t.deductionAmount)) + " ")] : [t._v(t._s(t.formData.payFee || 0))]], 2)]), a("div", {staticClass: "payDetail"}, [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("订单号")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.VENUE_FINANCE) > -1 ? t.tradeNo.substring(1, t.tradeNo.length) : t.tradeNo))])]), t.formData.productName ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("订单标题")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.productName))])])] : t._e(), -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.ORDER_RESERVATION) ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("订场信息")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.commonMethods.appendVenueName(t.formData.campusName, t.formData.venueName, t.formData.siteName, " ")) + " " + t._s(t.formData.reservationDate) + " "), t.formData.batchReservationInfo ? [a("div", {domProps: {innerHTML: t._s(t.formData.batchReservationInfo)}})] : t.formData.spaceList && t.formData.spaceList.length ? t._l(t.formData.spaceList, (function (e, s) {
            return a("span", {key: s}, [t._v(" " + t._s(-1 == t.formData.siteName.indexOf(e.spaceName) ? e.spaceName : "") + " "), t.formData.isTimePay ? t._e() : a("span", [t._v(t._s(e.startTime) + "-" + t._s(e.endTime))])])
          })) : t._e()], 2)]), t.formData.isTimePay ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("计时开始时间")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.formData.amtStartTime) + " ")])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("计时结束时间")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.formData.amtEndTime) + " ")])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("时长")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.actionMin) + " (分)")])])] : t._e(), t.formData.userList && t.formData.userList.length ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("场地使用者")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.formData.userList[0].name) + " " + t._s("/" + t.formData.userList[0].uid) + " " + t._s(t.formData.userList[0].roleStr) + " ")])]), t.formData.userList.length > 1 ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("同伴信息")]), a("div", {staticClass: "payText buddyList"}, [t._l(t.formData.userList, (function (e, s) {
            return [0 != s ? a("div", {
              key: s,
              staticStyle: {"margin-right": "5px"}
            }, [t._v(" " + t._s(t.commonMethods.joinArr([e.name, e.uid], "/")) + " " + t._s(e.roleStr) + " ")]) : t._e()]
          }))], 2)]) : t._e()] : t._e(), t.formData.reservationDetail ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("预约详情")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.reservationDetail))])]) : t._e()] : -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.TRAIN) ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("培训地点")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.commonMethods.appendVenueName(t.formData.campusName, t.formData.venueName, t.formData.siteName, "-")))])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("报名用户")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.orderName))])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("联系电话")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.orderPhone || t.formData.trainParentPhone))])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("培训时间")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.commonMethods.joinArr([t.formData.trainStartDate, t.formData.trainStopDate], "-")))])])] : -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.COACH_LESSON) ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("教练名称")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.coachName))])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("场地名称")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.siteName))])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("私教次数")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.totalCount))])]), t.formData.validStartDate && t.formData.validEndDate ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("有效时间")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.validStartDate) + "-" + t._s(t.formData.validEndDate))])]) : t._e()] : -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.VIP_CARD) ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("适用场地")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.siteName || "通用"))])]), t.formData.couponBalance ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("优惠次数")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.couponBalance))])]) : t._e(), t.formData.couponType ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("卡券类型")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.constObject.COUPON_TYPE_TITLE[t.formData.couponType]))])]) : t._e(), t.formData.validUseDateStr ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("有效时间")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.validUseDateStr))])]) : t._e(), t.formData.refundCouponBean ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("适用场地")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.refundCouponBean.siteName || "通用"))])]), t.formData.refundCouponBean.couponBalance ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("优惠次数")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.formData.refundCouponBean.couponBalance))])]) : t._e(), t.formData.refundCouponBean.couponType ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("卡券类型")]), a("div", {staticClass: "payText"}, [t._v(t._s(t.constObject.COUPON_TYPE_TITLE[t.formData.refundCouponBean.couponType]))])]) : t._e(), t.formData.refundCouponBean.couponType ? a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("使用情况")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.formData.refundCouponBean.couponType == t.constObject.COUPON_TYPE.TIME_CARD ? t.formData.refundCouponBean.useBalance + "/" + (t.formData.refundCouponBean.useBalance + t.formData.refundCouponBean.balance) : t.formData.refundCouponBean.useBalance) + " ")])]) : t._e()] : t._e()] : -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.CINEMA_TICKETS) ? [t.commonMethods.isApp() ? a("i-col", {
            staticStyle: {
              "margin-bottom": "10px",
              "font-size": "12px"
            }, attrs: {sm: 24}
          }, [t._v(" 活动场地： "), a("span", {staticStyle: {"margin-right": "10px"}}, [t._v(t._s(t.formData.orderView.cinemaName))]), a("span", [t._v(t._s(t.formData.orderView.cinemaAddress))])]) : t._e(), t.commonMethods.isApp() && t.formData.orderView.actionStartDate && t.formData.orderView.actionEndDate ? a("i-col", {
            staticStyle: {
              "margin-bottom": "10px",
              "font-size": "12px"
            }, attrs: {sm: 24}
          }, [t._v(" 演出时间： "), a("span", {staticStyle: {"margin-right": "10px"}}, [t._v(" " + t._s(t.formData.orderView.actionStartDate) + "-" + t._s(t.formData.orderView.actionEndDate) + " ")])]) : t._e(), a("i-col", {
            staticStyle: {width: "100%"},
            attrs: {sm: 24}
          }, [a("div", {staticClass: "responsiveTable cardSpace"}, [a("div", {staticClass: "ivu-table-wrapper"}, [a("div", {staticClass: "ivu-table ivu-table-border ivu-table-small"}, [a("div", {staticClass: "ivu-table-body"}, [a("table", {
            attrs: {
              border: "0",
              cellpadding: "0",
              cellspacing: "0"
            }
          }, [a("thead", [a("tr", [a("th", {attrs: {width: "width:120px"}}, [a("div", {staticClass: "ivu-table-cell"}, [t._v("姓名")])]), a("th", {staticStyle: {}}, [a("div", {staticClass: "ivu-table-cell text-center nowrap"}, [t._v("座位号")])]), a("th", {attrs: {width: "33%"}}, [a("div", {staticClass: "ivu-table-cell"}, [t._v("价格（元）")])]), a("th", {attrs: {width: "33%"}}, [a("div", {staticClass: "ivu-table-cell"}, [t._v("购票类型")])])])]), a("tbody", {staticClass: "ivu-table-tbody"}, t._l(t.formData.orderZoneList, (function (e, s) {
            return a("tr", {key: s}, [a("td", [a("div", {staticClass: "ivu-table-cell"}, [t._v(t._s(e.orderName))])]), a("td", [a("div", {staticClass: "ivu-table-cell text-center  nowrap"}, [t._v(" " + t._s(e.prefixName) + t._s(e.zoneNo) + t._s(e.suffixName || "号") + " ")])]), a("td", [a("div", {staticClass: "ivu-table-cell"}, [t._v(t._s(e.amountFee))])]), a("td", [a("div", {staticClass: "ivu-table-cell"}, [t._v(" " + t._s(e.orderRoleId ? t.constObject.ROLE_NAME[e.orderRoleId] + "票" : "") + " ")])])])
          })), 0)])])])])])])] : -1 != t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.VENUE_FINANCE) ? [a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("线下收费项目")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.constObject.PAY_ITEM_TITLE[t.formData.payItem]) + " ")])]), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("用户/单位")]), a("div", {staticClass: "payText"}, [t._v(" " + t._s(t.formData.orderRoleId ? t.constObject.ROLE_NAME[t.formData.orderRoleId] : "") + " " + t._s(t.commonMethods.joinArr([t.formData.orderName, t.formData.orderUid], " ")) + " ")])])] : t._e(), a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("下单时间")]), a("div", {staticClass: "payText"}, [t.formData.refundCouponBean ? [t._v(t._s(t.formData.refundCouponBean.gmtCreate))] : [t._v(t._s(t.formData.gmtCreate))]], 2)]), t.commonMethods.hasHanderRule(t.constObject.RULE_COUPON_MINE_VALID) ? [a("Divider", {attrs: {orientation: "left"}}, [a("h5", [t._v(" 优惠方式 ")])]), t.showValidCoupon ? a("ValidCoupon", {
            attrs: {
              loadData: t.validCouponData,
              setOptionCoupon: t.setOptionCoupon
            }
          }) : t._e()] : t._e(), t.optionCoupon.id ? a("div", {staticClass: "payDetailItem"}, [a("div", {
            staticClass: "payLable",
            staticStyle: {width: "10px"}
          }), a("div", {
            staticClass: "payText virtual-usedcont-new",
            staticStyle: {width: "100%"}
          }, [t._v(" 订单总额 "), a("span", {staticClass: "fee-style"}, [t._v("¥" + t._s(t.formData.payFee))]), t._v(" ，金额抵扣 "), a("span", {staticClass: "fee-style"}, [t._v("¥" + t._s(t.deductionAmount))]), t._v(" ，使用" + t._s(t.constObject.COUPON_TYPE_TITLE[t.optionCoupon.couponType]) + " "), a("span", {staticClass: "fee-style"}, [t._v(t._s(t.deductionCount))]), t._v(" 张。 ")])]) : t._e()], 2), t.deductionAmount && !t.showCoupon && t.formData.payFee - t.deductionAmount > 0 || !t.deductionAmount && t.formData.payFee > 0 ? [a("Divider", {attrs: {orientation: "left"}}, [a("h5", [t._v(" 支付方式 "), t.commonMethods.isChingoApp() && t.choosePayModel.payType == t.constObject.PAY_ALL_TYPE.ALIPAY ? a("span", {
            staticStyle: {
              "font-size": "12px",
              color: "red"
            }
          }, [t._v(" (选择支付宝支付请下载最新版App) ")]) : t._e()])]), a("div", {staticClass: "payMent"}, [t.payList && t.payList.length ? [t._l(t.payList, (function (e) {
            return [-1 == t.disablePayList.indexOf(e.payType) ? a("div", {
              key: e.payType,
              class: ["payMentItem", {
                active: t.choosePayModel.payType == e.payType,
                mobliePay: t.commonMethods.isApp()
              }, e.cssClass],
              style: {minWidth: e.payType != t.constObject.PAY_ALL_TYPE.BALANCE || t.commonMethods.isApp() ? "" : "180px"},
              on: {
                click: function (a) {
                  return t.changePayType(e)
                }
              }
            }, [a("div", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: t.choosePayModel.payType == e.payType,
                expression: "choosePayModel.payType == payModel.payType"
              }], staticClass: "selectPay"
            }), a("div", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: t.choosePayModel.payType == e.payType,
                expression: "choosePayModel.payType == payModel.payType"
              }], staticClass: "selectPayed"
            }), e.pngClass ? a("div", {class: e.pngClass}) : t._e(), a("div", {staticClass: "elsePayTitle"}, [t._v(" " + t._s(e.payName) + " "), e.pukdescribe ? [a("span", {
              staticStyle: {
                color: "#999",
                "font-size": "12px"
              }
            }, [t._v(t._s(e.pukdescribe))])] : t._e(), e.payType == t.constObject.PAY_ALL_TYPE.BALANCE ? [a("span", {staticStyle: {color: "#999"}}, [t._v(" " + t._s(t.formData.isWalletSet ? "(可用:￥" + t.userBalance + "元)" : "(未开通)") + " ")])] : t._e()], 2)]) : t._e()]
          }))] : a("div", {staticClass: "noPayTypeTitle text-center"}, [t._v("当前系统未配置支付方式，请联系管理员！")])], 2), !t.commonMethods.isApp() && [t.constObject.PAY_ALL_TYPE.PLAT_FROM, t.constObject.PAY_ALL_TYPE.ALIPAY].indexOf(t.choosePayModel.payType) > -1 ? a("div", {
            staticStyle: {
              "padding-left": "26px",
              color: "red",
              margin: "10px 0"
            }
          }, [t._v(" 请在弹出窗口中进行支付，若未弹出支付页面，请检查浏览器设置，是否拦截。 ")]) : t._e(), t.choosePayModel.isPaySecret && t.choosePayModel.isPayShow ? a("div", {
            staticStyle: {
              width: "100%",
              "margin-bottom": "20px"
            }
          }, [a("div", {staticClass: "payTitle"}, [t._v(" " + t._s(t.choosePayModel.paySecretTitle) + " "), a("i-input", {
            staticStyle: {
              width: "100px",
              margin: "0 10px"
            }, attrs: {type: "password"}, model: {
              value: t.paySecret, callback: function (e) {
                t.paySecret = e
              }, expression: "paySecret"
            }
          }), t.choosePayModel.paySecretHelper ? a("Poptip", {
            attrs: {
              trigger: "click",
              "word-wrap": "",
              width: "200",
              content: t.choosePayModel.paySecretHelper
            }
          }, [a("Icon", {
            attrs: {
              type: "md-help-circle",
              size: "24"
            }
          })], 1) : t._e()], 1)]) : t._e(), t.choosePayModel.isPayRemark ? a("div", {
            staticStyle: {
              "padding-left": "20px",
              "margin-bottom": "10px"
            }
          }, [a("i-input", {
            staticStyle: {width: "40%", margin: "0 10px"},
            attrs: {type: "textarea", placeholder: "订单支付备注", maxlength: 200, autosize: {maxRows: 2}},
            model: {
              value: t.payRemark, callback: function (e) {
                t.payRemark = e
              }, expression: "payRemark"
            }
          })], 1) : t._e()] : t._e(), t.commonMethods.isApp() ? [a("div", {staticClass: "clearFixed"}), t.commonMethods.isApp() ? a("div", {staticClass: "siteHandel"}, [a("div", {staticClass: "siteHandelLeft"}, [a("div", [a("span", {
            staticStyle: {
              "font-size": "13px",
              "font-weight": "4001",
              "margin-right": "2px"
            }
          }, [t._v("¥")]), t.deductionAmount ? [t._v(" " + t._s(t.commonMethods.roundNumber(t.formData.payFee - t.deductionAmount)) + " ")] : [t._v(t._s(t.formData.payFee || 0))]], 2)]), t.commonMethods.hasHanderRule("cancelOrderAll") ? a("div", {
            staticClass: "siteHandelItem",
            staticStyle: {background: "white", color: "#999"},
            on: {click: t.cancelOrder}
          }, [t._v(" 取消订单 ")]) : t._e(), t.commonMethods.hasHanderRule("payOrderAll") ? a("div", {
            staticClass: "siteHandelItem",
            style: {marginRight: 0, background: "#FFAE00"},
            on: {click: t.submitData}
          }, [t._v(" 支付 ")]) : t._e()]) : t._e()] : t._e(), t.isDetail && !t.commonMethods.isApp() ? a("div", {staticClass: "payHandle"}, [t.isAppHandle() ? [a("list-button", {
            attrs: {rule: "cancelOrderAll"},
            on: {"on-click": t.cancelOrder}
          }, [a("Button", {attrs: {type: "default"}}, [t._v("取消订单")])], 1), a("list-button", {
            attrs: {rule: "payOrderAll"},
            on: {"on-click": t.submitDate}
          }, [a("Button", {attrs: {type: "primary"}}, [t._v("支付")])], 1)] : [t.commonMethods.hasHanderRule("cancelOrderAll") ? a("div", {
            class: ["payHandleItem", "cancel"],
            on: {click: t.cancelOrder}
          }, [t._v(" 取消订单 ")]) : t._e(), t.commonMethods.hasHanderRule("payOrderAll") ? a("div", {
            staticClass: "payHandleItem",
            on: {click: t.submitDate}
          }, [t._v(" 支付 ")]) : t._e()], t.spinShow ? a("Spin", {
            attrs: {
              size: "large",
              fix: ""
            }
          }) : t._e()], 2) : t._e(), a("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !1,
              expression: "false"
            }], ref: "alipayWap", domProps: {innerHTML: t._s(t.alipayWap)}
          }), a("PayResult", {ref: "payResult", on: {"on-success": t.toLastStep}}), a("PayCode", {
            ref: "payCode",
            attrs: {skipRoute: t.skipRoute}
          })], 2)
        }, i = [],
        o = (a("c975"), a("d3b7"), a("a434"), a("b680"), a("25f0"), a("b0c0"), a("4160"), a("159b"), a("a15b"), a("9419")),
        n = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {staticClass: "payDetailItem"}, [a("div", {staticClass: "payLable"}, [t._v("卡券")]), a("div", {staticClass: "payText"}, [a("Icon", {
            attrs: {
              size: "26",
              type: "md-card"
            }, on: {
              click: function (e) {
                return t.setShowCoupon(!0)
              }
            }
          }), a("span", {staticStyle: {margin: "0 5px"}}, [t._v("(" + t._s(t.validCouponList && t.validCouponList.length) + ")")])], 1), a("Modal", {
            attrs: {
              transfer: "",
              title: "选择卡券",
              "mask-closable": !1
            }, model: {
              value: t.showCoupon, callback: function (e) {
                t.showCoupon = e
              }, expression: "showCoupon"
            }
          }, [a("div", {
            style: {
              maxHeight: t.commonMethods.isApp() ? "4rem" : "500px",
              overflow: "auto"
            }
          }, [a("Tabs", {
            attrs: {size: "small"},
            on: {"on-click": t.setCurrTab},
            model: {
              value: t.currTab, callback: function (e) {
                t.currTab = e
              }, expression: "currTab"
            }
          }, t._l(t.couponTab, (function (e) {
            return a("TabPane", {key: e, attrs: {label: t.couponTabName[e], name: e}})
          })), 1), t.currTab == t.couponTab.valid ? [0 == t.validCouponList.length ? a("div", {staticClass: "couponEmpty"}, [t._v("没有更多了~")]) : a("div", {staticClass: "couponList"}, t._l(t.validCouponList, (function (e, s) {
            return a("div", {
              key: s,
              class: ["couponItem", {couponOptioned: t.currentCoupon.id == e.id}],
              on: {
                click: function (a) {
                  return t.optionCoupon(e)
                }
              }
            }, [a("div", {staticClass: "couponItemBalance"}, [t._v(" " + t._s(e.useBalance) + "/" + t._s(e.useBalance + e.balance) + " " + t._s(e.msg) + " ")]), a("div", {staticClass: "couponItemContent"}, [a("div", {staticClass: "couponItemSub clearfix"}, [a("Tag", {attrs: {color: t.constObject.COUPON_TYPE.TIME_CARD == e.couponType ? "success" : "warning"}}, [t._v(" " + t._s(t.getDiscountInfo(e)) + t._s(t.constObject.COUPON_TYPE_TITLE[e.couponType]) + " ")]), e.venueSiteIds ? t._e() : a("Tag", {attrs: {color: "error"}}, [t._v(" 不限场地 ")]), e.validEndDateStr ? t._e() : a("Tag", {attrs: {color: "#2ecc71"}}, [t._v("长久有效")])], 1), e.venueSiteIds && e.siteName ? a("div", {
              staticClass: "couponItemSub",
              staticStyle: {color: "#ff7c6f"}
            }, [t._v(" 限" + t._s(e.siteName) + " ")]) : e.balance ? a("div", {
              staticClass: "couponItemSub",
              staticStyle: {color: "#e4393c", "font-weight": "bold"}
            }, [t._v(" 还可用" + t._s(e.balance) + "次 ")]) : t._e(), e.validEndDateStr ? a("div", {staticClass: "couponItemSub"}, [t._v("有效期至" + t._s(e.validEndDateStr))]) : t._e()]), t.loadData.payFee > 0 && e.balance > 0 ? a("div", {staticClass: "couponItemCheck"}, [t.currentCoupon.id == e.id ? a("Icon", {
              attrs: {
                size: "20",
                color: "#f97379",
                type: "ios-checkmark-circle"
              }
            }) : a("Icon", {attrs: {size: "20", type: "ios-radio-button-off"}})], 1) : t._e()])
          })), 0)] : t._e(), t.currTab == t.couponTab.invalid ? [0 == t.invalidCouponList.length ? a("div", {staticClass: "couponEmpty"}, [t._v("没有更多了~")]) : a("div", {staticClass: "couponList"}, t._l(t.invalidCouponList, (function (e, s) {
            return a("div", {
              key: s,
              staticClass: "couponItem"
            }, [a("div", {staticClass: "couponItemBalance unCheck"}, [t._v(t._s(e.useBalance) + "/" + t._s(e.useBalance + e.balance))]), a("div", {staticClass: "couponItemContent"}, [a("div", {staticClass: "couponItemSub clearfix"}, [a("Tag", {attrs: {color: t.constObject.COUPON_TYPE.TIME_CARD == e.couponType ? "success" : "warning"}}, [t._v(" " + t._s(t.getDiscountInfo(e)) + t._s(t.constObject.COUPON_TYPE_TITLE[e.couponType]) + " ")])], 1), e.venueSiteIds && e.siteName ? a("div", {
              staticClass: "couponItemSub",
              staticStyle: {color: "#ff7c6f"}
            }, [t._v(" 限" + t._s(e.siteName) + " ")]) : t._e(), a("div", {
              staticClass: "couponItemSub",
              staticStyle: {color: "#e4393c", "font-weight": "bold"}
            }, [t._v(" " + t._s(e.invalidMsg) + " ")])])])
          })), 0)] : t._e()], 2), a("div", {
            attrs: {slot: "footer"},
            slot: "footer"
          }, [a("list-button", {
            on: {
              "on-click": function (e) {
                return t.setShowCoupon(!1)
              }
            }
          }, [a("Button", {attrs: {type: "success"}}, [t._v("确定")])], 1)], 1)])], 1)
        }, c = [], r = (a("ac1f"), a("1276"), a("e25e"), {
          name: "ValidCoupon", props: {
            loadData: {
              type: Object, default: function () {
                return {}
              }
            }, setOptionCoupon: {
              type: Function, default: function () {
              }
            }
          }, data: function () {
            var t = {valid: "1", invalid: "2"}, e = {};
            return e[t.valid] = "可用卡券", e[t.invalid] = "不可用卡券", {
              validCouponList: [],
              invalidCouponList: [],
              showCoupon: !1,
              currentCoupon: {},
              deductionAmount: 0,
              couponTab: t,
              couponTabName: e,
              currTab: t.valid
            }
          }, methods: {
            changeOption: function (t) {
              this.currentCoupon = t, this.setOptionCoupon(t)
            }, optionCoupon: function (t) {
              this.currentCoupon && this.currentCoupon.id == t.id ? this.changeOption({}) : this.changeOption(t)
            }, checkCoupon: function (t, e, a) {
              if (t.disabled == this.constObject.VENUE_IS.YES) return "停卡中...";
              var s = t.validStartDate ? this.commonMethods.momentFormat(t.validStartDate, this.constObject.COMMON_MOMENT_FORMAT.DAY) : "",
                  i = t.validEndDate ? this.commonMethods.momentFormat(t.validEndDate, this.constObject.COMMON_MOMENT_FORMAT.DAY) : "";
              if (t.validStartDateStr = s, t.validEndDateStr = i, t.validStartDate && t.validStartDate > e) return "限" + s + "后使用";
              if (t.validEndDate && t.validEndDate < e) return "限" + i + "前使用";
              if (t.venueSiteIds && -1 == t.venueSiteIds.split(",").indexOf(String(this.loadData.venueSiteId))) return "限部分场地可用";
              if (this.loadData.reservationDate) {
                var o = String(this.moment(this.loadData.reservationDate).format("E"));
                if (t.validWeekIds && -1 == t.validWeekIds.split(",").indexOf(o)) {
                  for (var n = t.validWeekIds.split(","), c = [], r = 0; r < n.length; r++) {
                    var d = this.constObject.VENUE_VALID_WEEKIDS_TITLE[parseInt(n[r])];
                    d && c.push(d)
                  }
                  return c.length ? "限" + c.join(",") + "可用" : "限一周内部分自然日可用"
                }
              }
              if (this.loadData.spaceList && this.loadData.spaceList.length && (t.validStartTime || t.validEndTime)) for (var l = t.validStartTime ? this.commonMethods.momentTimestamp(a + " " + t.validStartTime) : null, p = t.validEndTime ? this.commonMethods.momentTimestamp(a + " " + t.validEndTime) : null, m = 0; m < this.loadData.spaceList.length; m++) {
                var u = this.loadData.spaceList[m];
                if (u.startTime && u.endTime) {
                  var h = this.commonMethods.momentTimestamp(a + " " + u.startTime),
                      y = this.commonMethods.momentTimestamp(a + " " + u.endTime);
                  if (l && l > h || p && p < y) {
                    var f = "限每天部分时间可用（";
                    return t.validStartTime && t.validEndTime ? f += this.commonMethods.joinArr([t.validStartTime, t.validEndTime], "-") : t.validStartTime ? f += t.validStartTime + "后" : t.validEndTime && (f += t.validEndTime + "前"), f + "）"
                  }
                }
              }
              return null
            }, loadValidCoupon: function () {
              var t = this;
              if (this.commonMethods.hasHanderRule(this.constObject.RULE_COUPON_MINE_VALID)) {
                this.validCouponList = [], this.invalidCouponList = [], this.$store.commit("setLoading", !0);
                var e = Object.assign({}, {userId: this.loadData.userId, roleId: this.loadData.roleId});
                this.commonMethods.emitAjax({
                  path: "/api/coupons/mine/valid", data: e, success: function (e) {
                    if (t.$store.commit("setLoading", !1), e && e.length) {
                      for (var a = t.commonMethods.momentFormat(t.moment(), t.constObject.COMMON_MOMENT_FORMAT.DAY), s = t.commonMethods.momentTimestamp(a), i = [], o = 0; o < e.length; o++) {
                        var n = e[o];
                        if ([t.constObject.COUPON_TYPE.TIME_CARD, t.constObject.COUPON_TYPE.DISCOUNT].indexOf(n.couponType) > -1) {
                          var c = t.checkCoupon(n, s, a);
                          c ? (n.invalidMsg = c, t.invalidCouponList.push(n)) : (i.push(n.id), t.validCouponList.push(n))
                        }
                      }
                      t.currentCoupon.id && -1 == i.indexOf(t.currentCoupon.id) && t.changeOption({})
                    }
                  }, error: function () {
                    t.$store.commit("setLoading", !1)
                  }
                })
              }
            }, setCurrTab: function (t) {
              this.currTab = t
            }, getDiscountInfo: function (t) {
              if (t.couponType == this.constObject.COUPON_TYPE.DISCOUNT && t.discount >= 0) {
                if (t.discountType == this.constObject.DISCOUNT_TYPE.DIS) {
                  var e = t.discount / 10;
                  return 10 == e ? "无折扣" : 0 == e ? "免费" : e + "折"
                }
                if (t.discountType == this.constObject.DISCOUNT_TYPE.TICKET) return t.discount + "元"
              }
              return ""
            }, setShowCoupon: function (t) {
              this.showCoupon = t, t && this.loadValidCoupon()
            }
          }, mounted: function () {
            this.loadValidCoupon()
          }
        }), d = r, l = (a("59f7"), a("2877")), p = Object(l["a"])(d, n, c, !1, null, "622d7232", null), m = p.exports,
        u = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", [a("Modal", {
            attrs: {"mask-closable": !1},
            on: {"on-visible-change": t.setCodeModal},
            model: {
              value: t.codeModal, callback: function (e) {
                t.codeModal = e
              }, expression: "codeModal"
            }
          }, [a("div", {
            staticClass: "order-header",
            attrs: {slot: "header"},
            slot: "header"
          }, [t._v(" 订单支付 "), t.commonMethods.isEmpty(t.payRemainSecond) ? t._e() : a("span", [t._v(" ， "), a("span", {staticClass: "text-error"}, [t._v("支付剩余" + t._s(t.payRemainSecond) + "秒")])])]), a("div", {staticClass: "wrap"}, [a("div", {staticClass: "codeTitle"}, [t._v(" 扫码支付 ")]), a("div", {
            staticClass: "scroll",
            staticStyle: {"max-height": "400px"}
          }, [a("div", {staticClass: "orderCode text-center"}, [a("div", {staticClass: "orderImg"}, [a("img", {
            staticClass: "payImage",
            attrs: {src: "data:image/png;base64," + t.payCode, alt: ""}
          })])])]), t.payType ? a("div", {staticClass: "order-pay-type"}, [t._v(t._s(t.constObject.PAY_ALL_TYPE_TITLE[t.payType]))]) : t._e(), t.config.company || t.config.sysName ? a("div", {staticClass: "order-company"}, [t._v(" " + t._s(t.config.company ? t.config.company : t.config.sysName) + " ")]) : t._e(), a("div", {staticClass: "order-amount"}, [t._v("¥ " + t._s(t.payFee))])]), t.payUrl ? a("div", {staticClass: "payHint"}, [t._v(" 您还可以： "), a("a", {
            attrs: {
              href: t.payUrl,
              target: "_blank"
            }
          }, [t._v("使用电脑支付")])]) : t._e(), a("footer", {
            attrs: {slot: "footer"},
            slot: "footer"
          }, [a("list-button", {on: {"on-click": t.payFinish}}, [a("Button", {attrs: {type: "success"}}, [a("Icon", {attrs: {type: "md-checkmark"}}), t._v("已完成支付")], 1)], 1)], 1)])], 1)
        }, h = [], y = {
          props: {
            skipRoute: {
              type: Function, default: function () {
              }
            }
          }, data: function () {
            return {
              codeModal: !1,
              payCode: "",
              payFee: 0,
              payUrl: "",
              payType: null,
              payTimer: null,
              tradeQueryTimer: null,
              payRemainSecond: null,
              tradeNo: ""
            }
          }, methods: {
            showModal: function (t, e, a, s, i, o) {
              t && (this.tradeNo = t, this.createTradeTimer()), this.payCode = e, this.payFee = a, this.payUrl = s, this.payType = i, !this.commonMethods.isEmpty(o) && o >= 0 && this.initPayTimer(o), this.setCodeModal(!0)
            }, createTradeTimer: function () {
              var t = this;
              this.tradeNo && (this.tradeQueryTimer && clearInterval(this.tradeQueryTimer), this.tradeQueryTimer = window.setInterval((function () {
                t.tradeQuery()
              }), 8e3))
            }, initPayTimer: function (t) {
              var e = this;
              this.payRemainSecond = t, clearTimeout(this.payTimer), this.payTimer = setTimeout((function () {
                e.payRemainSecond > 0 ? (e.payRemainSecond--, e.initPayTimer(e.payRemainSecond)) : (e.setCodeModal(!1), e.skipRoute(e.constObject.FEED_BACK_STATUS.FAIL))
              }), 1e3)
            }, tradeQuery: function (t) {
              var e = this;
              this.tradeNo && (t && this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/venue/finances/order/detail",
                data: {venueTradeNo: this.tradeNo},
                success: function (a) {
                  t && e.$store.commit("setLoading", !1), a.orderStatus == e.constObject.ORDER_STATUS.NORMAL && a.payStatus == e.constObject.PAY_STATUS.CANCEL ? (e.setCodeModal(!1), e.skipRoute(e.constObject.FEED_BACK_STATUS.SUCCESS)) : t && (e.setCodeModal(!1), e.skipRoute(e.constObject.FEED_BACK_STATUS.FAIL))
                },
                error: function () {
                  t && e.$store.commit("setLoading", !1)
                }
              }))
            }, setCodeModal: function (t) {
              this.codeModal = t, t || this.delInterval()
            }, delInterval: function () {
              this.payTimer && clearTimeout(this.payTimer), this.tradeQueryTimer && clearInterval(this.tradeQueryTimer)
            }, payFinish: function () {
              this.tradeQuery(this.constObject.FEED_BACK_STATUS.SUCCESS)
            }
          }, destroyed: function () {
            this.delInterval()
          }
        }, f = y, v = (a("73e1"), Object(l["a"])(f, u, h, !1, null, "abae928a", null)), _ = v.exports, T = {
          name: "detail",
          components: {PayResult: o["a"], ValidCoupon: m, PayCode: _},
          props: {
            oldTradeNo: {type: String, default: null}, stepArr: {
              type: Array, default: function () {
                return []
              }
            }
          },
          data: function () {
            return {
              modalFlag: !1,
              formData: {},
              currentId: -1,
              payList: [],
              disablePayList: [],
              choosePayModel: {},
              currentType: null,
              reservationPayOuttime: null,
              ORDER_CLOSE_MINUTE: null,
              tradeNo: "",
              name: "",
              remainSecond: null,
              timer: null,
              paySecret: "",
              ruleList: [],
              cardNo: "",
              outTradeNo: "",
              spinShow: !1,
              couponList: [],
              showCoupon: !1,
              optionCoupon: {},
              payFee: 0,
              userBalance: 0,
              deductionAmount: 0,
              deductionCount: 0,
              isDetail: null,
              alipayWap: "",
              timerPay: null,
              unitType: null,
              validCouponData: {},
              showValidCoupon: !1,
              payRemark: ""
            }
          },
          computed: {
            publicHeight: function () {
              return this.$store.state.publicHeight
            }
          },
          methods: {
            initPayType: function () {
              if (this.config.payList && this.config.payList.length) {
                this.payList = [];
                for (var t = 0; t < this.config.payList.length; t++) {
                  var e = this.config.payList[t];
                  (e.isOpenRole || e.supportRoleList.indexOf(this.userInfo.role) > -1) && -1 == this.disablePayList.indexOf(e.payType) && this.payList.push(Object.assign(e))
                }
                this.payList.length > 0 && (this.choosePayModel = this.payList[0])
              }
            }, getData: function (t, e) {
              var a = this;
              return new Promise((function (s, i) {
                a.$store.commit("setLoading", !0), a.commonMethods.emitAjax({
                  path: "/api/venue/finances/order/detail", data: {venueTradeNo: a.tradeNo}, success: function (i) {
                    if (a.$store.commit("setLoading", !1), a.isDetail = !0, a.formData = i || {}, a.formData.payFee && (a.payFee = a.commonMethods.roundNumber(a.formData.payFee)), a.formData.isWalletSet && a.formData.balanceMoney && (a.userBalance = a.commonMethods.roundNumber(a.formData.balanceMoney)), a.formData.schoolType == a.constObject.SCHOOL_TYPE.SCHOOL_OUT && a.userInfo.role == a.constObject.ROLE.BUY_TICKET_ADMIN && a.payList && a.payList.length) for (var o = 0; o < a.payList.length; o++) if (a.payList[o].payType == a.constObject.PAY_ALL_TYPE.CARD) {
                      a.payList.splice(o, 1), a.payList && a.payList.length > 0 && (a.choosePayModel = a.payList[0]);
                      break
                    }
                    var n = !1;
                    if (a.payFee && -1 != a.tradeNo.indexOf(a.constObject.PREFIX_ORDER_NO.ORDER_RESERVATION) && (a.formData.couponUseBean && a.formData.couponUseBean.id > 0 ? a.initCoupon(a.formData.couponUseBean) : a.commonMethods.isCanReservation(a.userInfo.role) ? n = !0 : a.commonMethods.isBuyTicketAdmin(a.userInfo.role) && a.formData.payRoleId && a.formData.payUserId && (n = !0, a.validCouponData = {
                      roleId: a.formData.payRoleId,
                      userId: a.formData.payUserId
                    })), n && (a.validCouponData.venueSiteId = a.formData.venueSiteId, a.validCouponData.payFee = a.payFee, a.validCouponData.spaceList = a.formData.spaceList, a.validCouponData.reservationDate = a.formData.reservationDate, a.setShowValidCoupon(n)), a.commonMethods.isCanReservation(a.userInfo.role)) {
                      if (a.formData.payType == a.constObject.PAY_ALL_TYPE.OFFLINE_PAYMENT) {
                        for (var c = 0; c < a.payList.length; c++) if (a.payList[c].payType == a.constObject.PAY_ALL_TYPE.OFFLINE_PAYMENT) {
                          a.payList.splice(c, 1);
                          break
                        }
                        a.payList.length > 0 && (a.choosePayModel = a.payList[0])
                      }
                    } else a.commonMethods.isAdmin(a.userInfo.role) && !a.commonMethods.isBuyTicketAdmin(a.userInfo.role) && a.$set(a.formData, "returnPayFee", a.formData.payFee);
                    a.formData.orderStatus != a.constObject.ORDER_STATUS.CANCEL || t ? (e && (2 == a.formData.orderStatus ? a.skipRoute(2) : 1 == a.formData.orderStatus && 2 == a.formData.payStatus ? a.skipRoute(1) : a.skipRoute(3)), e || 2 != a.formData.payStatus || a.skipRoute(1), a.formData.remainSecond >= 0 && (a.remainSecond = a.formData.remainSecond, a.startTime()), s(i)) : a.toLastStep(!0)
                  }, error: function (t) {
                    a.$store.commit("setLoading", !1), i(t)
                  }
                })
              }))
            }, toLastStep: function (t) {
              !0 === t ? 2 == this.formData.orderStatus ? this.skipRoute(2) : 1 == this.formData.orderStatus && 2 == this.formData.payStatus ? this.skipRoute(1) : this.skipRoute(3) : this.getData("", !0)
            }, payHint: function () {
              this.choosePayModel.payType == this.constObject.PAY_ALL_TYPE.BALANCE && (this.formData.isWalletSet || this.$Message.warning({content: "余额支付需先设置支付密码"}))
            }, submitDate: function () {
              var t = this;
              this.formData.remainSecond && this.remainSecond <= 0 ? this.$Message.warning({content: "当前预约订单已失效！"}) : this.commonMethods.isJYXY() && this.formData.payFee > 0 ? this.$Modal.confirm({
                title: "系统提示",
                content: "因学校疫情防控管理要求，进入校园需有“浙大蓝码”，如您有蓝码，点击确定继续支付，如无蓝码建议不要订场，点击“取消”，以免订场后无法入校使用。",
                onOk: function () {
                  t.submitConfirm()
                },
                onCancel: function () {
                }
              }) : this.submitConfirm()
            }, submitConfirm: function () {
              var t = this;
              if (this.choosePayModel.isPaySecret && this.choosePayModel.isPayShow && this.payFee > 0) if (this.paySecret) ; else if (this.choosePayModel.payType == this.constObject.PAY_ALL_TYPE.BALANCE) {
                if (this.deductionAmount && this.payFee - this.deductionAmount > 0) return void this.$Message.warning({content: "请输入" + this.choosePayModel.paySecretTitle});
                if (!this.deductionAmount && this.payFee) return void this.$Message.warning({content: "请输入" + this.choosePayModel.paySecretTitle})
              } else {
                if (this.deductionAmount && this.payFee - this.deductionAmount > 0) return void this.$Message.warning({content: "请输入" + this.choosePayModel.paySecretTitle});
                if (!this.deductionAmount && this.payFee) return void this.$Message.warning({content: "请输入" + this.choosePayModel.paySecretTitle})
              }
              if ((this.deductionAmount && this.payFee - this.deductionAmount > 0 || !this.deductionAmount && this.payFee) && this.choosePayModel.payType == this.constObject.PAY_ALL_TYPE.CARD && this.commonMethods.isBuyTicketAdmin(this.userInfo.role) && this.formData.offlinePayTradeNo && this.formData.payStatus == this.constObject.PAY_STATUS.NORMAL) {
                this.spinShow = !0;
                var e = 0;
                this.deductionAmount && this.payFee - this.deductionAmount > 0 && (e = (this.payFee - this.deductionAmount).toFixed(2)), this.formData.payStatus == this.constObject.PAY_STATUS.NORMAL && this.commonMethods.readCard.call(this, (function (a) {
                  a ? t.formData.payStatus == t.constObject.PAY_STATUS.NORMAL && t.commonMethods.cardPay.call(t, {
                    orderId: t.formData.offlinePayTradeNo,
                    cardNo: a,
                    amount: e || t.payFee
                  }, (function (e) {
                    200 == e.code && e.data ? (t.cardNo = a, t.outTradeNo = e.data, setTimeout((function () {
                      t.submitData()
                    }), 500)) : (t.spinShow = !1, t.$store.commit("setLoading", !1), t.$Message.warning({content: "扣费失败！"}))
                  })) : (t.spinShow = !1, t.$store.commit("setLoading", !1))
                }))
              } else this.submitData()
            }, submitData: function () {
              var t = this;
              this.$store.commit("setLoading", !0), this.spinShow = !0;
              var e = "";
              this.paySecret && (this.choosePayModel.paySecretEncryptType == this.constObject.ENCRYPT_TYPE.AES ? e = this.commonMethods.keySetPassword(this.paySecret) : this.choosePayModel.paySecretEncryptType == this.constObject.ENCRYPT_TYPE.MD5 && (e = this.commonMethods.MD5(this.commonMethods.MD5(this.paySecret).toString()).toString())), this.commonMethods.emitAjax({
                path: "/api/venue/finances/order/pay",
                type: "POST",
                data: {
                  payType: this.deductionAmount && this.payFee - this.deductionAmount > 0 || !this.deductionAmount && this.payFee ? this.choosePayModel.payType : null,
                  venueTradeNo: this.tradeNo,
                  paySecret: e || null,
                  cardNo: this.cardNo || null,
                  outTradeNo: this.outTradeNo || null,
                  couponId: this.optionCoupon && this.optionCoupon.id || null,
                  amtEndDate: this.formData.amtEndDate || null,
                  isApp: this.commonMethods.isChingoApp() ? 1 : 0,
                  payRemark: this.payRemark || null
                },
                success: function (e) {
                  if (t.$store.commit("setLoading", !1), e && e.schoolPayUrl) if (t.commonMethods.isApp()) t.spinShow = !1, window.open(e.schoolPayUrl, "_self"); else {
                    t.choosePayModel.payType == t.constObject.PAY_ALL_TYPE.PLAT_FROM && t.commonMethods.isBuyTicketAdmin(t.userInfo.role) && t.commonMethods.switchScreen.call(t, t.constObject.SCREEN_OPEN_TYPE.OPEN), t.spinShow = !1;
                    var a = e.payCode;
                    a ? t.$refs.payCode.showModal(t.tradeNo, a, e.payFee, e.schoolPayUrl, t.choosePayModel.payType, t.remainSecond) : (t.$refs.payResult.open(), window.open(e.schoolPayUrl, "_blank"))
                  } else if (e && e.alipayForm) t.alipayWap = e.alipayForm, t.spinShow = !1, t.$nextTick((function () {
                    if (t.commonMethods.isChingoApp()) window.appMethod.payForOrder(t.alipayWap, e.returnUrl), t.$refs.payResult.open(); else {
                      var a = t.$refs.alipayWap.children[0];
                      t.commonMethods.isApp() || (a.setAttribute("target", "_blank"), t.$refs.payResult.open()), a.submit()
                    }
                  })); else if (t.tradeNo.indexOf(t.constObject.PREFIX_ORDER_NO.ORDER_RESERVATION) > -1 && t.choosePayModel.payType == t.constObject.PAY_ALL_TYPE.OFFLINE_PAYMENT && t.commonMethods.isCanReservation(t.userInfo.role)) {
                    t.$emit("set-step", t.stepArr.indexOf(t.constObject.RESERVATION_STEP.FINISH));
                    var s = "您已经成功预约" + t.commonMethods.appendVenueName(t.formData.campusName, t.formData.venueName, t.formData.siteName, "") + "，使用时间为" + t.formData.reservationDetailDate;
                    t.config.isOfflinePay ? s += "，请您按时到场并完成现场支付后验票入场" : s += "，可使用预约码入场", t.$emit("set-title", {
                      type: t.constObject.UNIFY_TYPE.RESERVATION_PAY,
                      id: t.formData.orderId,
                      isCancel: null,
                      status: 1,
                      unit: 2,
                      name: s,
                      notShowCode: !0
                    })
                  } else setTimeout((function () {
                    t.toLastStep(), t.spinShow = !1
                  }), 1e3)
                },
                error: function (e) {
                  t.$store.commit("setLoading", !1), t.spinShow = !1, !e.message && t.$Message.error({content: "支付失败"})
                }
              })
            }, cancelOrder: function () {
              var t = this;
              this.formData.isTimePay ? this.moment(this.formData.amtStartDate).format("YYYY-MM-DD HH:mm:ss") < this.moment().format("YYYY-MM-DD HH:mm:ss") && this.$router.push({name: "Orders"}) : this.formData.isOfflinePay && this.payFee > 0 ? (this.$store.commit("setLoading", !0), this.commonMethods.readCard.call(this, (function (e) {
                if (e != t.formData.payCardNo) return t.$store.commit("setLoading", !1), void t.$Message.warning("请使用原支付校园卡进行退费！");
                t.$store.commit("setLoading", !0), t.commonMethods.cardRefund.call(t, {
                  orderId: t.formData.offlinePayTradeNo,
                  cardNo: e,
                  amount: t.payFee
                }, (function (a) {
                  200 == a.code && a.data ? (t.cardNo = e, t.outTradeNo = a.data, setTimeout((function () {
                    t.cancelSure()
                  }), 500)) : (t.$store.commit("setLoading", !1), t.$Message.warning({content: "退费失败！"}))
                }))
              }))) : this.cancelSure()
            }, cancelSure: function () {
              var t = this;
              this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/venue/finances/order/cancel",
                type: "POST",
                data: {venueTradeNo: this.tradeNo, cardNo: this.cardNo || null, outTradeNo: this.outTradeNo || null},
                success: function () {
                  t.$store.commit("setLoading", !1), t.$Message.success({content: "取消成功"}), t.skipRoute(t.constObject.FEED_BACK_STATUS.SUCCESS, !0)
                },
                error: function (e) {
                  t.$store.commit("setLoading", !1), !e.message && t.$Message.error({content: "取消失败"})
                }
              })
            }, open: function (t, e, a, s) {
              t && (this.tradeNo = t, this.name = e || "", this.unitType = s, this.getData()), this.initDisablePayList(a), this.initPayType(), this.paySecret = ""
            }, initDisablePayList: function (t) {
              this.disablePayList = [], t && t.length > 0 && (this.disablePayList = t)
            }, changePayType: function (t) {
              this.choosePayModel = Object.assign({}, t), this.payHint()
            }, skipRoute: function (t, e) {
              this.spinShow = !1;
              var a = this.formData.spaceList || [], s = [];
              if (a.forEach((function (t) {
                -1 == s.indexOf(t.spaceName) && s.push(t.spaceName)
              })), this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.ORDER_RESERVATION) > -1) {
                var i = "";
                this.formData.isTimePay ? 1 == t ? i = "您已经成功购票" + this.formData.venueName + " " + this.formData.siteName + " " + s.join(",") : 2 == t ? i = "您购票订单已取消" : 3 == t && (i = "您的购票订单未完成") : e ? i = "您已经成功取消" + this.formData.venueName + " " + this.formData.siteName + " " + s.join(" ") + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] : 1 == t ? (i = "您已经成功" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + this.formData.venueName + " " + this.formData.siteName + " " + s.join(","), this.formData.orderType && this.formData.orderType != this.constObject.ORDER_TYPE.ONLINE && this.formData.orderType != this.constObject.ORDER_TYPE.BUY || (i += "，使用时间为" + this.formData.reservationDetailDate + "，可使用校园卡和预约码入场")) : i = 2 == t ? "您的" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + "订单已取消" : "您的" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + "订单未完成", this.$emit("set-title", {
                  type: this.unitType,
                  id: this.commonMethods.isBuyTicketAdmin(this.userInfo.role) || this.commonMethods.isCanReservation(this.userInfo.role) ? this.formData.orderId : null,
                  isCancel: e || null,
                  status: t,
                  isTimePay: this.formData.isTimePay || null,
                  name: i
                }), this.$emit("set-step", this.unitType == this.constObject.UNIFY_TYPE.CONFIRM || this.unitType == this.constObject.UNIFY_TYPE.BATCH || this.unitType == this.constObject.UNIFY_TYPE.LEASE ? 2 : this.stepArr.indexOf(this.constObject.RESERVATION_STEP.FINISH))
              } else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.WALLET_RECHARGE) > -1) this.$emit("set-title", {
                type: this.unitType,
                status: t,
                isCancel: e || null,
                name: e ? this.formData.productName + "取消成功" : 1 == t ? this.formData.productName + "支付成功" : 3 == t ? this.formData.productName + "支付未完成" : this.formData.productName + "订单已取消"
              }), this.$emit("set-step", 2); else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.TRAIN) > -1) this.$emit("set-title", {
                type: this.unitType,
                status: t,
                isCancel: e || null,
                name: e ? this.formData.productName + "培训课程订单取消成功" : 1 == t ? this.formData.productName + "培训课程购买成功" : 3 == t ? this.formData.productName + "培训课程支付未完成" : this.formData.productName + "培训课程订单已取消"
              }), this.$emit("set-step", 2); else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.VENUE_FINANCE) > -1) this.$emit("set-title", {
                type: this.unitType,
                status: t,
                name: 1 == t ? this.formData.productName + "，支付成功" : 3 == t ? this.formData.productName + "，支付未完成" : this.formData.productName + "，支付已取消"
              }); else if ("mobileOrdersPayFor" == this.$route.name || "mobileOrders" == this.$route.name) this.$router.push({name: "mobileOrders"}); else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.COACH_LESSON) > -1) this.$emit("set-title", {
                type: this.unitType,
                status: t,
                isCancel: e || null,
                name: e ? this.formData.productName + "私教课程订单取消成功" : 1 == t ? this.formData.productName + "私教课程购买成功" : 3 == t ? this.formData.productName + "私教课程支付未完成" : this.formData.productName + "私教课程订单已取消"
              }), this.$emit("set-step", 2); else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.VIP_CARD) > -1) this.$emit("set-title", {
                type: this.unitType,
                status: t,
                isCancel: e || null,
                name: e ? this.formData.productName + "套餐订单取消成功" : 1 == t ? this.formData.productName + "套餐购买成功" : 3 == t ? this.formData.productName + "套餐支付未完成" : this.formData.productName + "套餐订单已取消"
              }), this.$emit("set-step", 2); else if (this.tradeNo.indexOf(this.constObject.PREFIX_ORDER_NO.CINEMA_TICKETS) > -1) {
                var o = "";
                o = e ? "您已经成功取消 " + this.formData.subject + " " + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] : 1 == t ? "您已经成功" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + " " + this.formData.subject + " ，使用时间为" + this.formData.orderView.actionStartDate : 2 == t ? "您的" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + "订单已取消" : "您的" + this.constObject.UNIFY_TYPE_SHOW_TITLE[this.unitType] + "订单未完成", this.formData.isTimePay && (1 == t ? o = "您已经成功购票 " + this.formData.subject + " " : 2 == t ? o = "您购票订单已取消" : 3 == t && (o = "您的购票订单未完成")), this.$emit("set-title", {
                  type: this.unitType,
                  id: this.commonMethods.isBuyTicketAdmin(this.userInfo.role) || this.commonMethods.isCanReservation(this.userInfo.role) ? this.formData.orderId : null,
                  isCancel: e || null,
                  status: t,
                  isTimePay: this.formData.isTimePay || null,
                  name: o
                }), this.$emit("set-step", this.unitType == this.constObject.UNIFY_TYPE.CONFIRM || this.unitType == this.constObject.UNIFY_TYPE.BATCH || this.unitType == this.constObject.UNIFY_TYPE.LEASE ? 2 : this.stepArr.indexOf(this.constObject.TICKETSFORCONCERTHALL_STEP.FINISH))
              }
            }, startTime: function () {
              var t = this;
              clearTimeout(this.timer), this.timer = setTimeout((function () {
                t.remainSecond >= 0 ? (t.remainSecond--, t.startTime()) : clearTimeout(t.timer)
              }), 1e3)
            }, isAppHandle: function () {
              return this.commonMethods.isApp() || !this.commonMethods.isPKU() || !this.commonMethods.isBUAA() || "Reservation" == this.$route.name || "ReservationManage" == this.$route.name || "mobileOrders" == this.$route.name || "mobileOrdersPayFor" == this.$route.name || "mobileReservation" == this.$route.name || "MobileRecharge" == this.$route.name || "reservedConfirm" == this.$route.name || "batchAdd" == this.$route.name || "ordersReturnCharge" == this.$route.name
            }, setShowValidCoupon: function (t) {
              this.showValidCoupon = t
            }, initCoupon: function (t) {
              this.optionCoupon = {
                id: t.couponId,
                couponType: t.couponType
              }, this.deductionAmount = t.counteractFee || 0, this.deductionCount = t.useBalance || 0
            }, setOptionCoupon: function (t) {
              if (this.optionCoupon = Object.assign({}, t), this.deductionAmount = 0, this.deductionCount = 0, this.optionCoupon && this.optionCoupon.id) {
                if (t.couponType == this.constObject.COUPON_TYPE.TIME_CARD) {
                  if (this.formData.payFeeList) if (t.balance >= this.formData.payFeeList.length) this.deductionAmount = this.payFee, this.deductionCount = this.formData.payFeeList.length; else for (var e = 0; e < t.balance; e++) this.deductionAmount += this.formData.payFeeList[e], this.deductionCount += 1
                } else t.couponType == this.constObject.COUPON_TYPE.DISCOUNT && (t.discountType == this.constObject.DISCOUNT_TYPE.DIS ? (this.deductionCount = 1, t.discount >= 100 || (t.discount <= 0 ? this.deductionAmount = this.payFee : (this.deductionAmount = this.payFee - this.payFee * t.discount / 100, this.deductionAmount < 0 && (this.deductionAmount = 0)))) : t.discountType == this.constObject.DISCOUNT_TYPE.TICKET && (this.deductionCount = 1, t.discount > this.payFee ? this.deductionAmount = this.payFee : this.deductionAmount = t.discount));
                this.deductionAmount > 0 && (this.deductionAmount = this.commonMethods.roundNumber(this.deductionAmount))
              }
            }
          },
          mounted: function () {
            this.initPayType()
          },
          destroyed: function () {
            clearTimeout(this.timer)
          }
        }, C = T, D = (a("5900"), Object(l["a"])(C, s, i, !1, null, "0f86d334", null));
    e["a"] = D.exports
  }
}]);