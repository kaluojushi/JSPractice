(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2c176705"], {
  "0cc9": function (t, e, s) {
    "use strict";
    s("9d36")
  }, "3bd1": function (t, e, s) {
    "use strict";
    var i = function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "promopt"}, [s("div", {
        staticClass: "promoptContent",
        class: {
          success: t.commonMethods.isApp() ? "" : t.feedBackStatus == t.constObject.FEED_BACK_STATUS.SUCCESS ? "success" : "",
          checked: t.commonMethods.isApp() ? "" : t.feedBackStatus == t.constObject.FEED_BACK_STATUS.CHECKED ? "checked" : "",
          fail: t.commonMethods.isApp() ? "" : t.feedBackStatus == t.constObject.FEED_BACK_STATUS.FAIL ? "fail" : ""
        }
      }, [s("div", {
        staticClass: "promoptImg",
        class: {
          isMobileMargin: t.commonMethods.isApp(),
          successImg: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.SUCCESS ? "successImg" : "",
          checkedImg: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.CHECKED ? "checkedImg" : "",
          failImg: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.FAIL ? "failImg" : ""
        }
      }), t.commonMethods.isApp() || -1 != t.appRoute.indexOf(t.$route.name) ? s("div", {
        staticClass: "promoptTitle",
        class: {
          successColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.SUCCESS ? "successColor" : "",
          checkedColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.CHECKED ? "checkedColor" : "",
          failColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.FAIL ? "failColor" : ""
        },
        style: {fontSize: "26px"}
      }, [t._v(" " + t._s(t.getPromoptTitle()) + " ")]) : t._e(), s("div", {staticClass: "promoptCon"}, [t.commonMethods.isApp() || -1 != t.appRoute.indexOf(t.$route.name) ? t._e() : s("div", {
        staticClass: "promoptTitle",
        class: {
          successColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.SUCCESS ? "successColor" : "",
          checkedColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.CHECKED ? "checkedColor" : "",
          failColor: t.feedBackStatus == t.constObject.FEED_BACK_STATUS.FAIL ? "failColor" : ""
        },
        style: {fontSize: t.commonMethods.isPKU() && "Reservation" != t.$route.name && "ReservationManage" != t.$route.name ? "28px" : "26px"}
      }, [t._v(" " + t._s(t.getPromoptTitle()) + " ")]), t.commonMethods.isPKU() ? t._e() : s("div", {
        staticClass: "promoptFont",
        style: {fontSize: t.commonMethods.isApp() ? "0.16rem" : t.commonMethods.isPKU() && "Reservation" != t.$route.name && "ReservationManage" != t.$route.name ? "20px" : -1 == t.appRoute.indexOf(t.$route.name) ? "18px" : "16px"}
      }, [(t.feedBackStatus, t.constObject.FEED_BACK_STATUS.SUCCESS, [t._v(" " + t._s(t.getPromoptFont()) + " ")])], 2), t.commonMethods.isApp() && t.type == t.constObject.UNIFY_TYPE.RESERVATION_PAY ? s("div", {staticClass: "orderWrap"}, [s("div", {
        staticClass: "checkOrder",
        on: {click: t.checkOrder}
      }, [t._v("查看订单")])]) : t._e(), -1 == [t.constObject.UNIFY_TYPE.CHECK_USER, t.constObject.UNIFY_TYPE.LOGIN, t.constObject.UNIFY_TYPE.VENUE_FINANCE].indexOf(t.type) ? s("div", {
        staticClass: "promoptHandle",
        style: {fontSize: t.commonMethods.isPKU() && "Reservation" != t.$route.name && "ReservationManage" != t.$route.name ? "16px" : "14px"}
      }, [s("div", {
        staticClass: "handle",
        class: {appHandle: t.commonMethods.isApp() ? "appHandle" : ""}
      }, [t._v("您还可以：")]), t.config.isHasFront && t.commonMethods.isCanReservation(t.userInfo.role) ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: t.config.frontIndex})
          }
        }
      }, [t._v(" 门户网站 ")]), t.commonMethods.isApp() ? [t.commonMethods.isAdmin(t.userInfo.role) ? t._e() : s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "mobileIndex"})
          }
        }
      }, [t._v(" 会员中心 ")])] : [t.commonMethods.isAdmin(t.userInfo.role) ? t._e() : s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push("/")
          }
        }
      }, [t._v(" 会员中心 ")])]] : t._e(), t.type == t.constObject.UNIFY_TYPE.SUGGEST ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "suggestManage"})
          }
        }
      }, [t._v(" 我的投诉建议 ")])] : t.type == t.constObject.UNIFY_TYPE.COACH_PAY ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.$router.push({name: t.commonMethods.isPKU() ? "Coach" : "IndexCoach"})
          }
        }
      }, [t._v(" 私教服务 ")]), s("div", {
        staticClass: "handle else", on: {
          click: function (e) {
            return t.$router.push({name: "coachOrdersManage"})
          }
        }
      }, [t._v(" 私教订单 ")])] : t.type == t.constObject.UNIFY_TYPE.TRAIN_PAY ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.toRouterPush(t.commonMethods.isPKU() ? "VenuesTrains" : "IndexTrainingCourse")
          }
        }
      }, [t._v(" 培训课程 ")]), s("div", {
        staticClass: "handle else", on: {
          click: function (e) {
            return t.toRouterPush("VenuesTrainsUsers")
          }
        }
      }, [t._v(" 课程订单 ")])] : t.type == t.constObject.UNIFY_TYPE.CONFIRM || "ordersReturnCharge" == t.$route.name ? [t.$route.params.id && String(t.$route.params.id).indexOf(t.constObject.PREFIX_ORDER_NO.RENT_ORDER) > -1 ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "RentOrders"})
          }
        }
      }, [t._v(" 设备租赁预约订单 ")])] : [s("div", {
        staticClass: "handle else", on: {
          click: function (e) {
            t.$router.push({name: t.commonMethods.isApp() ? "mobileOrders" : "Orders"})
          }
        }
      }, [t._v(" 预约记录 ")]), "ordersReturnCharge" == t.$route.name && t.commonMethods.isPKU() ? s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.$router.push({name: this.commonMethods.isPKU() ? "PkuVenueIntroduce" : "IndexVenueIntroduce"})
          }
        }
      }, [t._v(" 场馆租借 ")]) : t._e()]] : t.type == t.constObject.UNIFY_TYPE.BATCH || t.type == t.constObject.UNIFY_TYPE.LEASE ? [5 == t.$route.params.type ? s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "batchBooking"})
          }
        }
      }, [t._v(" 批量订场 ")]) : t._e(), 7 == t.$route.params.type ? s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "batchLease"})
          }
        }
      }, [t._v(" 场地租借 ")]) : t._e()] : t.type == t.constObject.UNIFY_TYPE.RESERVATION_PAY ? ["TicketsForConcertAll" == t.$route.name || "TicketPurchase" == t.$route.name ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.$router.push({name: t.commonMethods.isApp() ? "mobileCinemaOrders" : "VenuesCinemaTicketRecord"})
          }
        }
      }, [t._v(" 购票记录 ")])] : [s("div", {
        staticClass: "handle else", on: {
          click: function (e) {
            t.$router.push({name: t.commonMethods.isApp() ? "mobileOrders" : "Orders"})
          }
        }
      }, [t._v(" 预约记录 ")]), "ReservationManage" != t.$route.name && t.commonMethods.isPKU() ? s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.$router.push({name: this.commonMethods.isPKU() ? "PkuVenueIntroduce" : "IndexVenueIntroduce"})
          }
        }
      }, [t._v(" 场馆租借 ")]) : t._e(), !t.commonMethods.hasHanderRule(t.constObject.RULE_VENUE_ORDER.PRINT_CODE) || t.isTimePay || "ReservationManage" != t.$route.name || t.isCancel || 1 != t.feedBackStatus ? t._e() : s("div", {
        staticClass: "handle else",
        on: {click: t.print}
      }, [t._v(" 打印入场凭证 ")]), t.notShowCode || !t.commonMethods.isCanReservation(t.userInfo.role) || t.isCancel || 1 != t.feedBackStatus || t.config.isOfflinePay ? t._e() : s("div", {
        staticClass: "handle else",
        on: {click: t.showCode}
      }, [t._v(" " + t._s(t.commonMethods.isPKU() ? "入场凭证" : "预约码") + " ")])]] : t.type == t.constObject.UNIFY_TYPE.DISCOUNT_PAY ? ["VenuesDiscountUserAdd" == t.$route.name ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            return t.$router.push({name: "VenuesDiscountUser"})
          }
        }
      }, [t._v(" 套餐办理 ")])] : [t.commonMethods.isCanReservation(t.userInfo.role) ? s("div", {
        staticClass: "handle else",
        on: {click: t.jumpDetail}
      }, [t._v(" 优惠资讯 ")]) : t._e(), s("div", {
        staticClass: "handle else",
        on: {click: t.jumpList}
      }, [t._v(" 优惠订单 ")])]] : t.type == t.constObject.UNIFY_TYPE.WALLTE && t.commonMethods.isCanReservation(t.userInfo.role) ? [s("div", {
        staticClass: "handle else",
        on: {
          click: function (e) {
            t.$router.push({name: t.commonMethods.isApp() ? "MobileBalance" : "Balance"})
          }
        }
      }, [t._v(" 余额 ")])] : t._e()], 2) : t._e()])]), s("Print", {ref: "print"}), s("ReservationCode", {ref: "reservationOrder"})], 1)
    }, o = [], n = (s("b0c0"), s("c975"), s("995a")), r = s("5b85"), a = {
      name: "UnifyPromopt", props: {
        preRouterPush: {
          type: Function, default: function () {
          }
        }
      }, components: {Print: n["a"], ReservationCode: r["a"]}, data: function () {
        return {
          type: null,
          feedBackStatus: null,
          name: "",
          isCancel: null,
          reservationId: null,
          isTimePay: null,
          appRoute: ["MobileRecharge", "mobileOrders", "mobileOrdersPayFor", "mobileReservation"],
          notShowCode: !1
        }
      }, methods: {
        open: function (t) {
          this.$store.commit("setLoading", !0), this.type = t.type || null, this.feedBackStatus = t.status || null, this.name = t.name || null, this.isCancel = t.isCancel || null, this.reservationId = t.id || null, this.isTimePay = t.isTimePay || null, t.notShowCode && (this.notShowCode = t.notShowCode), this.commonMethods.hasHanderRule(this.constObject.RULE_VENUE_ORDER.PRINT_CODE) && "ReservationManage" == this.$route.name && !this.isTimePay && this.reservationId && !this.isCancel && 1 == this.feedBackStatus && this.print(), this.$store.commit("setLoading", !1)
        }, continuePay: function () {
          "ReservationManage" == this.$route.name || "Reservation" == this.$route.name || "PkuVenueIntroduceReservation" == this.$route.name || "IndexVenueIntroduceReservation" == this.$route.name ? this.$emit("set-step", 3) : this.$emit("set-step", 1)
        }, print: function (t) {
          this.$refs.print.print(this.reservationId || this.$route.params.id, t)
        }, showCode: function () {
          var t = {id: this.reservationId || this.$route.params.id};
          this.$refs.reservationOrder.getCode(t)
        }, checkOrder: function () {
          this.type == this.constObject.UNIFY_TYPE.RESERVATION_PAY && ("TicketsForConcertAll" == this.$route.name ? this.$router.push({name: "mobileCinemaOrders"}) : this.$router.push({name: "mobileOrders"}))
        }, jumpDetail: function () {
          this.$router.push({name: "IndexDiscount"})
        }, jumpList: function () {
          var t = "MobileDiscountUser";
          this.commonMethods.isApp() ? (t = "MobileDiscountUser", this.commonMethods.hasHanderRule("zjuSpecialChange") && (t = "MobileDiscountUser")) : t = "VenuesDiscountUser", this.$router.push({name: t})
        }, getPromoptTitle: function () {
          var t = "",
              e = [this.constObject.UNIFY_TYPE.LEASE, this.constObject.UNIFY_TYPE.BATCH, this.constObject.UNIFY_TYPE.SUGGEST, this.constObject.UNIFY_TYPE.LOGIN, this.constObject.UNIFY_TYPE.RESERVATION_PAY, this.constObject.UNIFY_TYPE.CONFIRM];
          return this.name && this.type == this.constObject.UNIFY_TYPE.VENUE_FINANCE ? this.name : (t = this.isCancel ? "取消" : this.$route.query && this.$route.query.isTimePay ? "支付" : -1 != e.indexOf(this.type) ? this.constObject.UNIFY_TYPE_SHOW_TITLE[this.type] : this.feedBackStatus == this.constObject.FEED_BACK_STATUS.CHECKED ? "订单" : "支付", t ? "预约" == t && this.feedBackStatus == this.constObject.FEED_BACK_STATUS.SUCCESS ? t + (this.constObject.FEED_BACK_STATUS_TITLE[this.feedBackStatus] + "，请准时入场。") : t + this.constObject.FEED_BACK_STATUS_TITLE[this.feedBackStatus] : void 0)
        }, getPromoptFont: function () {
          var t = "",
              e = [this.constObject.UNIFY_TYPE.COACH_PAY, this.constObject.UNIFY_TYPE.TRAIN_PAY, this.constObject.UNIFY_TYPE.RESERVATION_PAY, this.constObject.UNIFY_TYPE.DISCOUNT_PAY, this.constObject.UNIFY_TYPE.WALLTE, this.constObject.UNIFY_TYPE.LEASE, this.constObject.UNIFY_TYPE.BATCH, this.constObject.UNIFY_TYPE.CONFIRM];
          if (t = this.type == this.constObject.UNIFY_TYPE.CHECK_USER || this.type == this.constObject.UNIFY_TYPE.LOGIN ? "你的账户注册申请已提交，请等待管理员审核。" : this.type == this.constObject.UNIFY_TYPE.SUGGEST ? this.feedBackStatus == this.constObject.FEED_BACK_STATUS.SUCCESS ? "成功添加投诉建议。" : "添加投诉建议失败。" : -1 != e.indexOf(this.type) || "ordersReturnCharge" == this.$route.name || "ReservationManage" == this.$route.name ? this.name + "。" : this.feedBackStatus == this.constObject.FEED_BACK_STATUS.SUCCESS ? "您已成功支付。" : "支付失败。", t) return t
        }, toRouterPush: function (t) {
          this.preRouterPush(), this.$router.push({name: t})
        }
      }, created: function () {
      }
    }, c = a, d = (s("b9ae"), s("2877")), l = Object(d["a"])(c, i, o, !1, null, "58021da8", null);
    e["a"] = l.exports
  }, "5b85": function (t, e, s) {
    "use strict";
    var i = function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", [s("Modal", {
        attrs: {
          title: t.currentItem.venueName + "- " + t.currentItem.siteName + "预约码",
          "footer-hide": ""
        }, model: {
          value: t.showCode, callback: function (e) {
            t.showCode = e
          }, expression: "showCode"
        }
      }, [s("div", {staticClass: "wrap"}, [s("div", {staticClass: "orderUserList"}, [t._l(t.orderCode, (function (e, i) {
        return [s("div", {
          key: i,
          class: ["orderUser", {active: e.name == t.selectUser ? "active" : ""}],
          on: {
            click: function (s) {
              return t.getItemCode(e)
            }
          }
        }, [t._v(" " + t._s(e.name) + " ")])]
      }))], 2), s("div", {
        staticClass: "scroll",
        staticStyle: {"min-height": "400px"}
      }, [s("div", {staticClass: "orderCode text-center"}, [s("div", {staticClass: "orderImg"}, [s("img", {
        staticClass: "orderImage",
        attrs: {src: "data:image/png;base64," + t.orderNoCode, alt: ""}
      })]), s("div", {staticClass: "orderHint"}, [t._v(" 二维码过期时间：" + t._s(t.dueTime) + " "), s("Icon", {
        staticStyle: {"margin-left": "5px"},
        attrs: {type: "ios-refresh-circle-outline", color: "#2d6dd2", size: "24"},
        on: {
          click: function (e) {
            return t.getItemCode(t.currentBuddy, !0)
          }
        }
      })], 1), s("div", {staticClass: "orderHint fontColor"}, [t._v(" " + t._s(t.commonMethods.appendVenueName(t.currentItem.campusName, t.currentItem.venueName, t.currentItem.siteName)) + " ")]), t._l(t.timeList, (function (e, i) {
        return s("div", {
          key: i,
          staticClass: "orderHint fontColor"
        }, [t._v(" " + t._s(e.venueSpaceName && e.venueSpaceName + "：") + " " + t._s(e.startDate) + "-" + t._s(e.endDate.substring(e.endDate.length - 5)) + " ")])
      })), s("div", {staticClass: "orderHint"}, [t._v(" 最多提前" + t._s(t.advanceTime) + "分钟 "), t.currentItem.inReservationEntry == t.constObject.VENUE_IS.YES ? s("span", [t._v("，可在预约使用结束时间前入场。")]) : t._e()])], 2)])])])], 1)
    }, o = [], n = (s("b0c0"), {
      data: function () {
        return {
          nowTime: "",
          showCode: !1,
          orderCode: [],
          currentItem: {},
          currentOrderId: 0,
          isAdjust: !1,
          orderDetailList: [],
          adjustList: [],
          orderId: null,
          orderCodeList: [],
          orderNoCode: "",
          dueTime: "",
          advanceTime: "",
          lastTime: "",
          selectUser: null,
          timeList: []
        }
      }, methods: {
        getCode: function (t) {
          var e = this;
          this.currentItem.id = t.id || {}, this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
            path: "/api/orders/code/" + t.id,
            success: function (t) {
              e.$store.commit("setLoading", !1), e.orderNoCode = t.orderNoCode || "", e.orderCode = t.orderUserList || [], e.advanceTime = t.advanceTime, e.lastTime = t.lastTime, e.dueTime = t.dueTime, t.orderUserList && t.orderUserList.length && (e.selectUser = t.orderUserList[0].name, e.currentBuddy = t.orderUserList[0] || {}), e.timeList = t.orderDetailList || [], e.currentItem.siteName = t.siteName, e.currentItem.venueName = t.venueName, e.currentItem.campusName = t.campusName, e.currentItem.inReservationEntry = t.inReservationEntry, e.showCode = !0
            },
            error: function () {
              e.$store.commit("setLoading", !1)
            }
          })
        }, getItemCode: function (t, e) {
          var s = this;
          this.currentBuddy = t || {}, t.name && (this.selectUser = t.name), this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
            path: "/api/orders/order_no_code",
            data: {orderId: this.currentItem.id, orderBuddyId: t.buddyId || null},
            success: function (t) {
              s.$store.commit("setLoading", !1), s.orderNoCode = t.orderNoCode, s.dueTime = t.dueTime, e && s.$Message.success({content: "刷新成功!"})
            },
            error: function () {
              s.$store.commit("setLoading", !1)
            }
          })
        }
      }
    }), r = n, a = (s("0cc9"), s("2877")), c = Object(a["a"])(r, i, o, !1, null, "4b621302", null);
    e["a"] = c.exports
  }, "65dbc": function (t, e, s) {
  }, "8eed": function (t, e, s) {
    "use strict";
    s("bb06")
  }, "995a": function (t, e, s) {
    "use strict";
    var i = function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", [s("Modal", {
        model: {
          value: t.isPrint, callback: function (e) {
            t.isPrint = e
          }, expression: "isPrint"
        }
      }, [s("div", {staticClass: "ticket scroll"}, t._l(t.currentOrder.orderNameList, (function (e, i) {
        return s("div", {
          key: i,
          staticStyle: {"margin-bottom": "20px"}
        }, [s("list-button", {
          staticStyle: {margin: "20px"},
          attrs: {rule: "orderPrintCode"},
          on: {
            "on-click": function (e) {
              return t.submitFigure(i)
            }
          }
        }, [t._v(" 打印" + t._s(e) + "预约码 ")]), s("div", {staticClass: "ticketDetail"}, [s("div", {staticClass: "commonDetail"}, [s("div", {staticClass: "codeImg"}, [s("img", {
          staticStyle: {
            display: "inline-block",
            width: "100%"
          }, attrs: {src: "data:image/png;base64," + t.currentOrder.qrCodeList[i], alt: ""}
        })]), s("div", {staticClass: "comonInfo"}, [s("div", {staticClass: "commonTitle"}, [t._v(" 北京大学智慧场馆服务系统 ")]), s("div", {staticClass: "intoTitle"}, [t._v("入场凭证")])])]), s("div", {staticClass: "notice"}, [t._v(" 欢迎使用北京大学体育场馆，入场时请您出示此凭证 ")]), s("div", {
          staticStyle: {
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {staticClass: "orderDetail"}, [s("div", {
          staticClass: "orderInfo",
          staticStyle: {width: "100%"}
        }, [t._v(" 订单号：" + t._s(t.currentOrder.tradeNo) + " "), s("span", {staticStyle: {visibility: "hidden"}}, [t._v("占用空间")]), t._v(" " + t._s(t.currentOrder.orderDate) + " ")]), s("div", {staticClass: "orderInfo"}, [t._v("售票点：" + t._s(t.currentOrder.venueName))]), s("div", {staticClass: "orderInfo"}, [t._v("售票员：" + t._s(t.currentOrder.sellerName))]), s("div", {
          staticClass: "orderInfo",
          staticStyle: {width: "100%"}
        }, [t._v(" 购票人：" + t._s(t.currentOrder.orderUid) + " " + t._s(t.currentOrder.orderName) + " " + t._s(t.currentOrder.orderRole) + " ")])]), s("div", {
          staticClass: "notice",
          staticStyle: {"font-size": "16px"}
        }, [t._v("预定信息")]), s("div", {
          staticStyle: {
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {staticClass: "orderDetail"}, [s("div", {
          staticClass: "orderInfo",
          staticStyle: {width: "100%"}
        }, [t._v(" 预定场地：" + t._s(t.currentOrder.venueName) + " " + t._s(t.currentOrder.siteName) + " ")]), t._l(t.currentOrder.orderDetailList, (function (e, i) {
          return s("div", {
            key: i,
            staticClass: "orderInfo",
            staticStyle: {width: "100%"}
          }, [t._v(" " + t._s(e.venueSpaceName && e.venueSpaceName + "：") + " " + t._s(e.startDate) + " -" + t._s(e.endDate.substring(e.endDate.length - 5)) + " ")])
        }))], 2), s("div", {
          staticStyle: {
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {staticClass: "payInfo"}, [s("span", [t._v("费用：" + t._s(t.currentOrder.payFee || 0) + " 元")]), s("span", {staticStyle: {"margin-right": "15px"}}, [t._v(t._s(t.constObject.PAY_ALL_TYPE_TITLE[t.currentOrder.payType]))])]), s("div", {staticClass: "noticeTitle"}, [t._v(" 请您仔细核对小票，于使用开始时间前15分钟入场。如需要帮助请联系现场售票处，联系电话;010-88888888 ")]), s("div", {staticClass: "noticeTitle"}, [t._v("第" + t._s(i + 1) + "联：" + t._s(e))])])], 1)
      })), 0), s("footer", {
        staticClass: "text-center",
        attrs: {slot: "footer"},
        slot: "footer"
      }, [s("Button", {
        nativeOn: {
          click: function (e) {
            t.isPrint = !1
          }
        }
      }, [t._v("关闭")]), s("list-button", {
        attrs: {rule: "orderPrintCode"},
        on: {"on-click": t.printAll}
      }, [s("Button", {attrs: {type: "primary"}}, [t._v("打印全部预约码")])], 1)], 1)]), s("div", {
        staticClass: "ticketDetail",
        staticStyle: {width: "280px"},
        attrs: {id: "order-template"}
      }, t._l(t.currentOrder.orderNameList, (function (e, i) {
        return s("div", {
          key: i,
          staticClass: "orderItem",
          staticStyle: {"margin-bottom": "20px"}
        }, [s("div", {
          staticStyle: {
            width: "280px",
            display: "flex",
            "margin-bottom": "10px"
          }
        }, [s("div", {
          staticStyle: {
            width: "100px",
            height: "100px",
            "margin-right": "5px"
          }
        }, [s("img", {
          staticStyle: {display: "inline-block", width: "100%"},
          attrs: {src: "data:image/png;base64," + t.currentOrder.qrCodeList[i], alt: ""}
        })]), t._m(0, !0)]), s("div", {
          staticStyle: {
            width: "280px",
            "text-align": "left",
            "font-size": "10px"
          }
        }, [t._v(" 欢迎使用北京大学体育场馆，入场时请您出示此凭证。 ")]), s("div", {
          staticStyle: {
            width: "235px",
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {
          staticStyle: {
            display: "flex",
            "justify-content": "flex-start",
            "flex-wrap": "wrap"
          }
        }, [s("div", {
          staticStyle: {
            width: "100%",
            "margin-bottom": "5px",
            "font-size": "10px"
          }
        }, [t._v(" 订单号：" + t._s(t.currentOrder.tradeNo) + " "), s("span", {staticStyle: {visibility: "hidden"}}, [t._v("占")]), t._v(" " + t._s(t.currentOrder.orderDate) + " ")]), s("div", {
          staticStyle: {
            width: "50%",
            "margin-bottom": "5px",
            "font-size": "10px"
          }
        }, [t._v("售票点：" + t._s(t.currentOrder.venueName))]), s("div", {
          staticStyle: {
            width: "50%",
            "margin-bottom": "5px",
            "font-size": "10px"
          }
        }, [t._v("售票员：" + t._s(t.currentOrder.sellerName))]), s("div", {
          staticStyle: {
            width: "100%",
            "margin-bottom": "5px",
            "font-size": "10px"
          }
        }, [t._v(" 购票人：" + t._s(t.currentOrder.orderUid) + " "), s("span", {staticStyle: {visibility: "hidden"}}, [t._v("占空")]), t._v(" " + t._s(t.currentOrder.orderName) + " "), s("span", {staticStyle: {visibility: "hidden"}}, [t._v("占空")]), t._v(" " + t._s(t.currentOrder.orderRole) + " ")])]), s("div", {
          staticStyle: {
            width: "100%",
            "text-align": "center",
            "font-size": "12px",
            "font-weight": "900"
          }
        }, [t._v(" 预定信息 ")]), s("div", {
          staticStyle: {
            width: "235px",
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {
          staticStyle: {
            width: "270px",
            display: "flex",
            "justify-content": "flex-start",
            "flex-wrap": "wrap"
          }
        }, [s("div", {
          staticStyle: {
            width: "100%",
            "margin-bottom": "5px",
            "font-size": "10px"
          }
        }, [t._v(" 预定场地：" + t._s(t.currentOrder.venueName) + " "), s("span", {staticStyle: {visibility: "hidden"}}, [t._v("占")]), t._v(" " + t._s(t.currentOrder.siteName) + " ")]), t._l(t.currentOrder.orderDetailList, (function (e, i) {
          return s("div", {
            key: i,
            staticStyle: {width: "100%", "margin-bottom": "5px", "font-size": "10px"}
          }, [t._v(" " + t._s(e.venueSpaceName && e.venueSpaceName + "：") + t._s(e.startDate) + " -" + t._s(e.endDate.substring(e.endDate.length - 5)) + " ")])
        }))], 2), s("div", {
          staticStyle: {
            width: "235px",
            "border-bottom": "1px solid #000",
            margin: "10px 0",
            height: "0"
          }
        }), s("div", {
          staticStyle: {
            width: "235px",
            "font-size": "10px",
            height: "20px",
            "line-height": "20px",
            display: "flex",
            "justify-content": "space-between"
          }
        }, [s("span", [t._v("费用：" + t._s(t.currentOrder.payFee || 0) + " 元")]), s("span", {staticStyle: {"margin-right": "15px"}}, [t._v(t._s(t.constObject.PAY_ALL_TYPE_TITLE[t.currentOrder.payType]))])]), s("div", {
          staticStyle: {
            width: "235px",
            margin: "5px 0",
            "font-size": "10px",
            "line-height": "14px"
          }
        }, [t._v(" 请您仔细核对小票，于使用开始时间前15分钟入场。如需要帮助请联系现场售票处，联系电话;010-88888888 ")]), s("div", {
          staticStyle: {
            width: "240px",
            "font-size": "10px",
            display: "flex",
            "justify-content": "space-between"
          }
        }, [s("span", [t._v("第" + t._s(i + 1) + "联：" + t._s(e))]), t._v(" 打印时间：" + t._s(t.moment().format("YYYY-MM-DD HH:mm:ss")) + " "), s("span")])])
      })), 0)], 1)
    }, o = [function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {
        staticStyle: {
          width: "160px",
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-between"
        }
      }, [s("div", {
        staticStyle: {
          width: "100%",
          "font-size": "12px",
          color: "#000",
          "font-weight": "600",
          "margin-top": "5px"
        }
      }, [t._v(" 北京大学智慧场馆服务系统 ")]), s("div", {
        staticStyle: {
          width: "100%",
          "font-size": "24px",
          "margin-bottom": "10px",
          display: "flex",
          "letter-spacing": "12px",
          color: "#000",
          "font-weight": "bold"
        }
      }, [t._v(" 入场凭证 ")])])
    }], n = (s("4160"), s("159b"), s("a15b"), {
      data: function () {
        return {currentOrder: {}, isPrint: !1}
      }, methods: {
        print: function (t, e) {
          var s = this;
          this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
            path: "/api/orders/print/detail",
            data: {orderId: t},
            success: function (i) {
              s.$store.commit("setLoading", !1), s.currentOrder = i || {}, s.currentOrder.orderId = t, s.currentOrder.orderNameList && s.currentOrder.qrCodeList && e && (s.isPrint = !0), e || s.printAll()
            },
            error: function () {
              s.$store.commit("setLoading", !1)
            }
          })
        }, printAll: function () {
          var t = this;
          this.currentOrder.orderNameList.forEach((function (e, s) {
            setTimeout((function () {
              t.submitFigure(s, 1)
            }), 1e3)
          }))
        }, submitFigure: function (t, e) {
          var s = this;
          if (this.getLodop) {
            var i = this.getLodop();
            this.LODOP = i, i.SET_LICENSES("", this.config.printPassword, this.config.printPassword2, ""), i.PRINT_INIT("入场凭证打印");
            var o = "入场凭证打印机", n = [], r = "";
            (0 == t || t) && (r = document.getElementsByClassName("orderItem")[t].innerHTML, n.push(this.currentOrder.orderNameList[t] || "")), e && t == this.currentOrder.orderNameList.length - 1 && this.currentOrder.orderNameList.forEach((function (t) {
              n.push(t)
            })), i.SET_PRINTER_INDEX(o) ? (i.SET_PRINT_PAGESIZE(3, 800, 100, "order"), i.ADD_PRINT_HTM(0, "5mm", "RightMargin:5mm", "BottomMargin:0", r), i.PRINT(), i.On_Return = function (i, o) {
              o && (!e || e && t == s.currentOrder.orderNameList.length - 1) && (s.printSuccess(n), s.$Message.success({content: "打印完成"}))
            }) : (this.$store.commit("setLoading", !1), 0 == t && this.$Message.error({content: "请查看是否有名为《" + o + "》的打印机"}))
          } else this.timer && clearTimeout(this.timer), this.timer = setTimeout((function () {
            s.printHandler()
          }), 1e3)
        }, printSuccess: function (t) {
          var e = this;
          this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
            path: "/api/venue/prints",
            type: "POST",
            data: {
              sourceType: this.constObject.SOURCE_TYPE.RESERVATION,
              sourceId: this.currentOrder.orderId,
              printName: t.join(",")
            },
            success: function () {
              e.$store.commit("setLoading", !1)
            },
            error: function () {
              e.$store.commit("setLoading", !1)
            }
          }), this.$store.commit("setLoading", !1)
        }
      }, created: function () {
      }
    }), r = n, a = (s("8eed"), s("2877")), c = Object(a["a"])(r, i, o, !1, null, "12ecb74e", null);
    e["a"] = c.exports
  }, "9d36": function (t, e, s) {
  }, b9ae: function (t, e, s) {
    "use strict";
    s("65dbc")
  }, bb06: function (t, e, s) {
  }
}]);