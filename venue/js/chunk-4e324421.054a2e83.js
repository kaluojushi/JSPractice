(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4e324421"], {
  "4aa4": function (t, e, s) {
  }, "567f": function (t, e, s) {
    "use strict";
    var o = function () {
          var t = this, e = t.$createElement, s = t._self._c || e;
          return s("div", {
            class: ["reservationWrap", "customBar", {reservationApp: t.commonMethods.isApp() ? "reservationApp" : ""}],
            style: {background: t.commonMethods.isApp() ? "" : "#fff"}
          }, [t.commonMethods.isApp() ? [t.step === t.stepArr.indexOf(t.constObject.RESERVATION_STEP.READ_PROTOCOL) ? s("protocols", {on: {"set-step": t.setStep}}) : t._e()] : s("Steps", {
            staticClass: "stepBar",
            attrs: {current: t.step}
          }, [t._l(t.stepArr, (function (e) {
            return [s("Step", {
              key: e,
              style: {width: e != t.constObject.RESERVATION_STEP.FINISH || t.commonMethods.isApp() ? "20%" : "auto"},
              attrs: {title: t.constObject.RESERVATION_STEP_TITLE[e]}
            })]
          }))], 2), t.step === t.stepArr.indexOf(t.constObject.RESERVATION_STEP.CHOICE_SITE) ? s("step-one", {
            ref: "stepOne",
            attrs: {
              readonly: t.readonly,
              step: t.step,
              stepArr: t.stepArr,
              isSite: t.isSite,
              venueSiteId: Number(t.venueSiteId || 0)
            },
            on: {"set-step": t.setStep, "set-order-data": t.setOrderData}
          }) : t._e(), s("step-two", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.step === t.stepArr.indexOf(t.constObject.RESERVATION_STEP.SUBMIT_RESERVATION),
              expression: "step === stepArr.indexOf(constObject.RESERVATION_STEP.SUBMIT_RESERVATION)"
            }],
            ref: "stepTwo",
            attrs: {
              oldTradeNo: !t.oldOrder || t.oldOrder.orderUserId && t.oldOrder.orderRoleIdoldTradeNo ? "" : t.oldTradeNo,
              stepArr: t.stepArr
            },
            on: {"set-step": t.setStep, "set-pay-data": t.setPayData, "set-current": t.setCurrent, "set-title": t.setTitle}
          }), t.commonMethods.isNWPU() ? t._e() : s("pay-for", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.step === t.stepArr.indexOf(t.constObject.RESERVATION_STEP.PAY),
              expression: "step === stepArr.indexOf(constObject.RESERVATION_STEP.PAY)"
            }],
            ref: "PayFor",
            attrs: {
              oldTradeNo: t.oldOrder && t.oldOrder.orderUserId && t.oldOrder.orderRoleIdoldTradeNo ? t.oldTradeNo : "",
              stepArr: t.stepArr
            },
            on: {"set-step": t.setStep, "set-title": t.setTitle}
          }), s("Complete", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.step === t.stepArr.indexOf(t.constObject.RESERVATION_STEP.FINISH),
              expression: "step === stepArr.indexOf(constObject.RESERVATION_STEP.FINISH)"
            }], ref: "complete", on: {"set-step": t.setStep}
          })], 2)
        }, r = [], n = (s("a9e3"), s("c975"), s("b0c0"), s("4160"), s("159b"), s("a434"), function () {
          var t = this, e = t.$createElement, s = t._self._c || e;
          return s("div", {
            staticClass: "reservationStep",
            style: {marginTop: t.commonMethods.isApp() ? "0.16rem" : ""}
          }, [t.commonMethods.isApp() ? t._e() : s("h4", {
            staticStyle: {
              width: "100%",
              "text-align": "center",
              "margin-bottom": "20px"
            }
          }, [t._v(t._s(t.protocols.title))]), s("div", {
            class: {
              proContent: t.commonMethods.isApp() ? "" : "proContent",
              proContentApp: t.commonMethods.isApp() ? "proContentApp" : ""
            }, domProps: {innerHTML: t._s(t.protocols.content)}
          }), s("Checkbox", {
            staticClass: "text-center",
            staticStyle: {width: "100%"},
            model: {
              value: t.nextStep, callback: function (e) {
                t.nextStep = e
              }, expression: "nextStep"
            }
          }, [t._v("我已阅读" + t._s(t.protocols.title))]), s("list-button", {
            staticStyle: {width: "100%", margin: "10px 0"},
            attrs: {usable: t.nextStep},
            on: {"on-click": t.next}
          }, [s("div", {staticClass: "text-center"}, [s("Button", {
            staticStyle: {width: "220px"},
            attrs: {type: "primary", disabled: !t.nextStep}
          }, [t._v("下一步")])], 1)])], 1)
        }), i = [], a = (s("d3b7"), {
          data: function () {
            return {protocols: {}, nextStep: !1}
          }, computed: {
            venueSitesList: function () {
              return this.$store.state.venueSitesList
            }
          }, methods: {
            getProtocol: function () {
              var t = this;
              return new Promise((function (e, s) {
                var o = "/api/front/website/protocols/code/";
                t.commonMethods.hasLogin() && (o = "/api/protocols/code/"), o += t.constObject.PROTOCOL_CODE.RESERVATION_PROTOCOL, t.commonMethods.emitAjax({
                  path: o,
                  success: function (s) {
                    t.protocols = s || {}, t.$eventBus.$emit("setElseTitle", t.commonMethods.getKeyName(t.venueSitesList, t.$route.params.id, "id", "venueName") + " " + t.commonMethods.getKeyName(t.venueSitesList, t.$route.params.id, "id", "siteName")), e(s)
                  },
                  error: function (t) {
                    s(t)
                  }
                })
              }))
            }, next: function () {
              this.$emit("set-step", this.constObject.RESERVATION_STEP.CHOICE_SITE), this.nextStep = !1
            }
          }, mounted: function () {
            document.getElementsByClassName("scroll")[0].scrollTop = 0
          }, created: function () {
            this.getProtocol()
          }
        }), c = a, d = s("2877"), p = Object(d["a"])(c, n, i, !1, null, "451e9acc", null), u = p.exports, l = s("4ce9"),
        h = s("8d0f"), O = s("f044"), m = s("3bd1"), E = {
          name: "reservationComponent",
          components: {StepOne: l["a"], StepTwo: h["a"], Protocols: u, PayFor: O["a"], Complete: m["a"]},
          props: {
            readonly: {type: Boolean, default: !1},
            venueSiteId: {type: Number, default: 0},
            isSite: {type: Boolean, default: !1}
          },
          data: function () {
            var t = [this.constObject.RESERVATION_STEP.READ_PROTOCOL];
            this.commonMethods.isNWPU() && t.push(this.constObject.RESERVATION_STEP.PAY);
            var e = [];
            for (var s in this.constObject.RESERVATION_STEP) {
              var o = this.constObject.RESERVATION_STEP[s];
              -1 == t.indexOf(o) && e.push(o)
            }
            return {
              stepArr: e,
              step: 0,
              flag: !1,
              oldOrder: {},
              oldTradeNo: "",
              isGroupOrder: 1,
              currentBuddy: {},
              selectSite: {},
              phone: null,
              orderDetailList: [],
              adjustList: [],
              orderId: null,
              buddyList: []
            }
          },
          watch: {
            step: function () {
              this.commonMethods.isApp() && this.$store.commit("setCurrentNavName", this.step == this.constObject.RESERVATION_STEP.CHOICE_SITE ? "场地选择" : this.step == this.constObject.RESERVATION_STEP.SUBMIT_RESERVATION ? "提交订单" : this.step == this.constObject.RESERVATION_STEP.PAY ? "支付订单" : "")
            }
          },
          computed: {
            reservationChangeAdvanceTime: function () {
              return this.$store.state.reservationChangeAdvanceTime
            }
          },
          methods: {
            setStep: function (t) {
              "PkuVenueIntroduceReservation" != this.$route.name && "IndexVenueIntroduceReservation" != this.$route.name || this.commonMethods.isCanReservation(this.userInfo.role) ? this.step = t : this.$router.push({name: "ReservationManage"})
            }, setOrderData: function (t) {
              this.$refs.stepTwo.setData(t)
            }, setPayData: function (t) {
              this.$refs.PayFor.open(t, "", "", this.constObject.UNIFY_TYPE.RESERVATION_PAY)
            }, setTitle: function (t) {
              this.$refs.complete.open(t)
            }, getWaitOrder: function () {
              var t = this;
              this.commonMethods.emitAjax({
                path: "/api/orders/wait_order", success: function (e) {
                  t.oldOrder = e || {}, t.oldOrder && t.oldOrder.tradeNo && (t.flag = !0)
                }, error: function () {
                }
              })
            }, checkWait: function (t) {
              var e = this;
              1 == t ? (this.flag = !1, this.oldOrder.orderUserId && this.oldOrder.orderRoleId ? this.setStep(this.constObject.RESERVATION_STEP.PAY) : this.setStep(this.constObject.RESERVATION_STEP.CHOICE_SITE), this.oldTradeNo = this.oldOrder.tradeNo) : this.commonMethods.anewReservation.call(this, this.oldOrder.tradeNo, (function () {
                e.flag = !1
              }))
            }, getData: function () {
              var t = this;
              this.$store.commit("setLoading", !0), this.commonMethods.emitAjax({
                path: "/api/orders/" + this.$route.params.id,
                success: function (e) {
                  t.$store.commit("setLoading", !1), t.selectSite = e || {}, t.orderDetailList = e.orderDetailList || [], t.orderDetailList.forEach((function (e) {
                    t.$set(e, "checked", !1)
                  })), t.orderId = t.$route.params.id, t.buddyList = [], t.selectSite.orderBuddyList && t.selectSite.orderBuddyList.forEach((function (e) {
                    t.buddyList.push(e.name)
                  })), t.adjustList = [], t.phone = e.orderInfo.phone || null, t.isGroupOrder = 0 == e.orderInfo.isGroupOrder ? 0 : e.orderInfo.isGroupOrder || null, t.step = 0
                },
                error: function () {
                  t.$store.commit("setLoading", !1)
                }
              })
            }, adjustReservation: function () {
              !this.adjustList || this.adjustList.length ? (this.$eventBus.$emit("setAdjust", {
                orderId: this.orderId,
                adjustList: this.adjustList,
                isGroupOrder: 0 == this.isGroupOrder ? 0 : this.isGroupOrder || null,
                venueInfo: this.selectSite.venueInfo || this.selectSite.venueInfoBean,
                phone: this.phone || null
              }), this.step = this.constObject.RESERVATION_STEP.CHOICE_SITE) : this.$Message.warning({content: "请选择要更换的场地空间!"})
            }, setCurrent: function (t, e, s) {
              this.$refs.stepOne.setContinueDate(t, e, s)
            }, selectAdjust: function (t) {
              var e = this.adjustList.indexOf(t.id);
              -1 == e ? this.adjustList.push(t.id) : this.adjustList.splice(e, 1)
            }
          },
          mounted: function () {
            this.$route.query.tradeNo && (this.step = this.stepArr.indexOf(this.constObject.RESERVATION_STEP.PAY), this.$refs.PayFor.open(this.$route.query.tradeNo, "", "", this.constObject.UNIFY_TYPE.RESERVATION_PAY)), this.step == this.stepArr.indexOf(this.constObject.RESERVATION_STEP.READ_PROTOCOL) && this.$store.commit("setCurrentNavName", "阅读协议")
          }
        }, S = E, f = (s("a6dc"), Object(d["a"])(S, o, r, !1, null, "66d1ea02", null));
    e["a"] = f.exports
  }, "5fec": function (t, e, s) {
    "use strict";
    s.r(e);
    var o = function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("Layout", {staticClass: "rightContent"}, [s("Content", [s("list-header", {
        attrs: {
          hasSearch: !1,
          icon: "ios-alarm"
        }
      }), s("Card", {attrs: {"dis-hover": ""}}, [s("reservation")], 1)], 1)], 1)
    }, r = [], n = s("567f"), i = {
      name: "reservationComponent", components: {Reservation: n["a"]}, data: function () {
        return {}
      }
    }, a = i, c = s("2877"), d = Object(c["a"])(a, o, r, !1, null, null, null);
    e["default"] = d.exports
  }, a6dc: function (t, e, s) {
    "use strict";
    s("4aa4")
  }
}]);