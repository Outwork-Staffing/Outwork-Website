import { Link, createInertiaApp } from "@inertiajs/vue3";
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useSSRContext, resolveComponent, mergeProps, createVNode, resolveDynamicComponent, withCtx, renderSlot, ref, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, computed, withDirectives, vShow, onMounted, defineComponent, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderVNode, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { CheckCircleIcon, PlusSmallIcon, MinusSmallIcon, CheckBadgeIcon, DocumentCheckIcon, CurrencyDollarIcon, HeartIcon } from "@heroicons/vue/24/solid";
import RichTextRenderer from "contentful-rich-text-vue-renderer";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$B = {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        return ["primary", "secondary", "text", "white"].indexOf(value) !== -1;
      }
    },
    link: {
      type: String,
      default: null
    },
    newTab: {
      type: Boolean,
      default: false
    },
    InertiaLink: {
      type: String,
      default: false
    }
  },
  components: {
    Link,
    ChevronRightIcon
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  if ($props.InertiaLink) {
    _push(`<div${ssrRenderAttrs(_attrs)}><a${ssrRenderAttr("href", $props.InertiaLink)}${ssrRenderAttr("target", $props.newTab ? "_blank" : "")} class="${ssrRenderClass(`btn btn-${$props.type}`)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    if ($props.type === "text") {
      _push(ssrRenderComponent(_component_ChevronRightIcon, { class: "text-link-arrow" }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</a></div>`);
  } else {
    _push(`<a${ssrRenderAttrs(mergeProps({
      href: $props.link,
      target: $props.newTab ? "_blank" : "",
      class: `btn btn-${$props.type}`
    }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    if ($props.type === "text") {
      _push(ssrRenderComponent(_component_ChevronRightIcon, { class: "text-link-arrow" }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</a>`);
  }
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Button.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __unplugin_components_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$A = {
  props: {
    size: {
      type: String,
      default: "m",
      validator: function(value) {
        return ["s", "m", "lg", "xl"].includes(value);
      }
    },
    tag: {
      type: String,
      default: "h1",
      validator: function(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      }
    }
  },
  computed: {
    sizeClass: function() {
      switch (this.size) {
        case "span":
          return "text-lg font-bold uppercase text-primary";
        case "m":
          return "text-xl text-heading font-bold";
        case "lg":
          return "text-2xl text-heading font-bold";
        case "xl":
          return "text-3xl md:text-5xl text-heading font-bold";
        case "2xl":
          return "text-4xl text-heading md:text-6xl font-bold";
        default:
          return "text-xl";
      }
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.tag === "h1") {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($props.tag), mergeProps(_ctx.$attrs, {
      class: [$options.sizeClass] + " mb-6",
      enter: { opacity: 1, y: 0, scale: 1 },
      variants: { custom: { scale: 2 } },
      delay: 200
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent($props.tag), mergeProps(_ctx.$attrs, {
      class: [$options.sizeClass] + " mb-6"
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }), _parent);
  }
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Heading.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$a]]);
ref(false);
const _sfc_main$z = {
  props: {
    background: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "green", "light", "dark", "gradient"].includes(value);
      }
    },
    header: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgClass: function() {
      switch (this.background) {
        case "green":
          return "bg-primary";
        case "light":
          return "bg-secondary";
        case "dark":
          return "bg-dark";
        case "gradient":
          return "gradient";
        default:
          return "bg-white";
      }
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: $options.bgClass }, _attrs))} data-v-77f78ef0><div class="${ssrRenderClass({ "w-full  max-w-7xl mx-auto py-12 lg:py-24 px-6 lg:px-8": !$props.header, "w-full  max-w-7xl mx-auto pt-36 pb-12 sm:pt-36 px-6 lg:px-8": $props.header })}" data-v-77f78ef0>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Row.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-77f78ef0"]]);
const _sfc_main$y = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { name: "Why Outsource?", href: "/why-outsource" },
      { name: "Services", href: "/services" },
      { name: "About Us", href: "/about" },
      { name: "Success Stories", href: "/success-stories" }
    ];
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full bg-white fixed z-[120]" }, _attrs))}><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full" aria-label="Global"><a href="/" class="-m-1.5 p-1.5"><span class="sr-only">Outwork Staffing</span><img class="h-8 md:h-12 w-auto" src="https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg" alt=""></a><div class="flex lg:hidden">`);
      _push(ssrRenderComponent(__unplugin_components_3$1, {
        link: "/start-hiring",
        class: "text-md font-semibold leading-6 mr-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Hiring`);
          } else {
            return [
              createTextVNode("Start Hiring")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"><span class="sr-only">Open main menu</span>`);
      _push(ssrRenderComponent(unref(Bars3Icon), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:gap-x-12 items-center"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(unref(Link), {
          key: item.name,
          href: item.href,
          class: "text-md font-semibold leading-6 text-heading hover:underline hover:decoration-solid decoration-primary transition-custom decoration-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(__unplugin_components_3$1, {
        link: "/start-hiring",
        class: "text-md font-semibold leading-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Hiring`);
          } else {
            return [
              createTextVNode("Start Hiring")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
      _push(ssrRenderComponent(unref(Dialog), {
        as: "div",
        class: "lg:hidden",
        onClose: ($event) => mobileMenuOpen.value = false,
        open: mobileMenuOpen.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-[99]"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-[99] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><a href="#" class="-m-1.5 p-1.5"${_scopeId2}><span class="sr-only"${_scopeId2}>Outwork Staffing</span><img class="h-8 w-auto" src="https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg" alt=""${_scopeId2}></a><button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"${_scopeId2}><span class="sr-only"${_scopeId2}>Close menu</span>`);
                  _push3(ssrRenderComponent(unref(XMarkIcon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root"${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10"${_scopeId2}><div class="space-y-2 py-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(ssrRenderComponent(unref(Link), {
                      key: item.name,
                      href: item.href,
                      class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="py-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(__unplugin_components_3$1, {
                    link: "/start-hiring",
                    class: "text-md font-semibold leading-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Start Hiring`);
                      } else {
                        return [
                          createTextVNode("Start Hiring")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "Outwork Staffing"),
                        createVNode("img", {
                          class: "h-8 w-auto",
                          src: "https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg",
                          alt: ""
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: ($event) => mobileMenuOpen.value = false
                      }, [
                        createVNode("span", { class: "sr-only" }, "Close menu"),
                        createVNode(unref(XMarkIcon), {
                          class: "h-6 w-6",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                            return createVNode(unref(Link), {
                              key: item.name,
                              href: item.href,
                              class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 64))
                        ]),
                        createVNode("div", { class: "py-6" }, [
                          createVNode(__unplugin_components_3$1, {
                            link: "/start-hiring",
                            class: "text-md font-semibold leading-6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Start Hiring")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-[99]" }),
              createVNode(unref(DialogPanel), { class: "fixed inset-y-0 right-0 z-[99] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("a", {
                      href: "#",
                      class: "-m-1.5 p-1.5"
                    }, [
                      createVNode("span", { class: "sr-only" }, "Outwork Staffing"),
                      createVNode("img", {
                        class: "h-8 w-auto",
                        src: "https://images.ctfassets.net/g7bwetg052e6/5qzjrlo1XTICWYpB1LXbQ5/4f90461cf694cb017b30e15be5a8f287/logo.svg",
                        alt: ""
                      })
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "-m-2.5 rounded-md p-2.5 text-gray-700",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, [
                      createVNode("span", { class: "sr-only" }, "Close menu"),
                      createVNode(unref(XMarkIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "mt-6 flow-root" }, [
                    createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                      createVNode("div", { class: "space-y-2 py-6" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                          return createVNode(unref(Link), {
                            key: item.name,
                            href: item.href,
                            class: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "py-6" }, [
                        createVNode(__unplugin_components_3$1, {
                          link: "/start-hiring",
                          class: "text-md font-semibold leading-6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Start Hiring")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/Header.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = {
      main: [
        { name: "Why Outsource?", href: "/why-outsource" },
        {
          name: "Services",
          href: "/services"
        },
        { name: "About Us", href: "/about" }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__unplugin_components_1, mergeProps({ background: "dark" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav class="-mb-6 columns-1 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer"${_scopeId}><!--[-->`);
            ssrRenderList(navigation.main, (item) => {
              _push2(`<div class="pb-6"${_scopeId}><a${ssrRenderAttr("href", item.href)} class="text-md font-semibold leading-6 text-white hover:underline hover:decoration-solid decoration-primary transition-custom decoration-2"${_scopeId}>${ssrInterpolate(item.name)}</a></div>`);
            });
            _push2(`<!--]--></nav><p class="text-md font-semibold leading-6 text-white text-left md:text-center mt-10"${_scopeId}>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Outwork Staffing. <br${_scopeId}>All rights reserved. </p>`);
          } else {
            return [
              createVNode("nav", {
                class: "-mb-6 columns-1 sm:flex sm:justify-center sm:space-x-12",
                "aria-label": "Footer"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(navigation.main, (item) => {
                  return openBlock(), createBlock("div", {
                    key: item.name,
                    class: "pb-6"
                  }, [
                    createVNode("a", {
                      href: item.href,
                      class: "text-md font-semibold leading-6 text-white hover:underline hover:decoration-solid decoration-primary transition-custom decoration-2"
                    }, toDisplayString(item.name), 9, ["href"])
                  ]);
                }), 128))
              ]),
              createVNode("p", { class: "text-md font-semibold leading-6 text-white text-left md:text-center mt-10" }, [
                createTextVNode("© " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " Outwork Staffing. ", 1),
                createVNode("br"),
                createTextVNode("All rights reserved. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/Footer.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$y, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$x, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Main.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_Main = _sfc_main$w;
  const _component_Row = __unplugin_components_1;
  const _component_Heading = __unplugin_components_2;
  const _component_Button = __unplugin_components_3$1;
  _push(ssrRenderComponent(_component_Main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="grid gap-8"${_scopeId2}><h1 class="text-9xl text-primary font-black"${_scopeId2}>404</h1>`);
              _push3(ssrRenderComponent(_component_Heading, {
                size: "lg",
                class: "font-bold mb-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Can&#39;t find the page you&#39;re looking for.`);
                  } else {
                    return [
                      createTextVNode("Can't find the page you're looking for.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Button, {
                link: "/",
                class: "mt-8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Go Home`);
                  } else {
                    return [
                      createTextVNode("Go Home")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "grid gap-8" }, [
                  createVNode("h1", { class: "text-9xl text-primary font-black" }, "404"),
                  createVNode(_component_Heading, {
                    size: "lg",
                    class: "font-bold mb-0"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Can't find the page you're looking for.")
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_Button, {
                      link: "/",
                      class: "mt-8"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Go Home")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
            default: withCtx(() => [
              createVNode("div", { class: "grid gap-8" }, [
                createVNode("h1", { class: "text-9xl text-primary font-black" }, "404"),
                createVNode(_component_Heading, {
                  size: "lg",
                  class: "font-bold mb-0"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Can't find the page you're looking for.")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_Button, {
                    link: "/",
                    class: "mt-8"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Go Home")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/404.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  props: {
    items: {
      type: Array,
      default: ["123", "123", "Drink"]
    }
  },
  components: {
    CheckCircleIcon
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item, index) => {
    _push(`<div class="bg-secondary my-4 rounded-2xl py-2 px-4 flex">`);
    _push(ssrRenderComponent(_component_CheckCircleIcon, { class: "text-primary h-8 mr-4" }, null, _parent));
    _push(`<span class="text-headings font-bold text-xl">${ssrInterpolate(item)}</span></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/CheckBubble.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __unplugin_components_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$t = {
  __name: "FiftyImage",
  __ssrInlineRender: true,
  props: {
    imageUrl: String,
    altText: String,
    lazyLoad: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative lg:py-0" }, _attrs))}><div class="relative mx-auto sm:max-w-3xl lg:max-w-none"><div class="relative rounded-2xl shadow-xl overflow-hidden"><img class="w-full object-cover max-h-[24rem]"${ssrRenderAttr("loading", __props.lazyLoad ? "lazy" : "auto")}${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.altText)}></div></div></div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/FiftyImage.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  props: {
    imageUrl: String,
    imageLocation: {
      type: String,
      default: "left",
      validator: function(value) {
        return ["right", "left"].includes(value);
      }
    },
    imageMobile: {
      type: Boolean,
      default: true
    },
    mobileImageStack: {
      type: String,
      validator: function(value) {
        return ["top", "bottom"].includes(value);
      }
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    altText: {
      type: String,
      default: null
    }
  },
  components: {
    FiftyImage: _sfc_main$t
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FiftyImage = _sfc_main$t;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-7xl" }, _attrs))}><div class="grid grid-cols-1 gap-x-16 gap-y-6 lg:gap-y-12 lg:grid-cols-2 lg:items-center"><div class="${ssrRenderClass([
    "block relative sm:py-16 md:py-0",
    $props.imageMobile === "false" && $props.imageLocation === "left" ? "hidden lg:block" : "block"
  ])}">`);
  if ($props.imageLocation === "left" && $props.imageUrl) {
    _push(`<div class="${ssrRenderClass(["block relative lg:py-0"])}">`);
    _push(ssrRenderComponent(_component_FiftyImage, {
      imageUrl: $props.imageUrl,
      style: { "width": "100%", "height": "auto" },
      lazyLoad: $props.lazyLoad,
      altText: $props.altText
    }, null, _parent));
    _push(`</div>`);
  } else {
    ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
  }
  _push(`</div><div class="${ssrRenderClass([
    "block relative sm:py-16 md:py-0",
    $props.imageMobile === "false" && $props.imageLocation === "right" ? "hidden lg:block" : "block"
  ])}">`);
  if ($props.imageLocation === "right" && $props.imageUrl) {
    _push(`<div class="${ssrRenderClass(["block relative lg:py-0"])}">`);
    _push(ssrRenderComponent(_component_FiftyImage, {
      imageUrl: $props.imageUrl,
      style: { "width": "100%", "height": "auto" },
      lazyLoad: $props.lazyLoad,
      altText: $props.altText
    }, null, _parent));
    _push(`</div>`);
  } else {
    ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/Fifty.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$r = {
  __name: "CTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__unplugin_components_1, mergeProps({ background: "green" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__unplugin_components_4, {
              imageLocation: "right",
              imageMobile: "false",
              imageUrl: "https://images.ctfassets.net/g7bwetg052e6/6v2WViHfnBWtbwGECJURXK/1c4efc3223a95c67b075f9b40b3a67c8/CTA.jpeg",
              altText: "Men sitting around computer"
            }, {
              left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__unplugin_components_2, {
                    tag: "h3",
                    size: "xl",
                    class: "text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Book a call to learn more or get started.`);
                      } else {
                        return [
                          createTextVNode("Book a call to learn more or get started.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="mb-6 text-lg text-white"${_scopeId2}>We are eager to work with you. Book a call with our team and discover how our global staffing can help you drive growth. <br${_scopeId2}><br${_scopeId2}>Let&#39;s talk about your staffing needs today.</p>`);
                  _push3(ssrRenderComponent(__unplugin_components_3$1, {
                    InertiaLink: "/start-hiring",
                    type: "white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Get Started Hiring`);
                      } else {
                        return [
                          createTextVNode("Get Started Hiring")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(__unplugin_components_2, {
                      tag: "h3",
                      size: "xl",
                      class: "text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Book a call to learn more or get started.")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "mb-6 text-lg text-white" }, [
                      createTextVNode("We are eager to work with you. Book a call with our team and discover how our global staffing can help you drive growth. "),
                      createVNode("br"),
                      createVNode("br"),
                      createTextVNode("Let's talk about your staffing needs today.")
                    ]),
                    createVNode(__unplugin_components_3$1, {
                      InertiaLink: "/start-hiring",
                      type: "white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Get Started Hiring")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(__unplugin_components_4, {
                imageLocation: "right",
                imageMobile: "false",
                imageUrl: "https://images.ctfassets.net/g7bwetg052e6/6v2WViHfnBWtbwGECJURXK/1c4efc3223a95c67b075f9b40b3a67c8/CTA.jpeg",
                altText: "Men sitting around computer"
              }, {
                left: withCtx(() => [
                  createVNode(__unplugin_components_2, {
                    tag: "h3",
                    size: "xl",
                    class: "text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Book a call to learn more or get started.")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "mb-6 text-lg text-white" }, [
                    createTextVNode("We are eager to work with you. Book a call with our team and discover how our global staffing can help you drive growth. "),
                    createVNode("br"),
                    createVNode("br"),
                    createTextVNode("Let's talk about your staffing needs today.")
                  ]),
                  createVNode(__unplugin_components_3$1, {
                    InertiaLink: "/start-hiring",
                    type: "white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Get Started Hiring")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/CTA.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$w, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__unplugin_components_1, {
              background: "white",
              header: "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-w-4xl mx-auto text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(__unplugin_components_2, {
                    size: "2xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`About Us`);
                      } else {
                        return [
                          createTextVNode("About Us")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6"${_scopeId2}>Expertise, efficiency, and cost-effective recruiting solutions as you grow your staff overseas. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                      createVNode(__unplugin_components_2, {
                        size: "2xl",
                        class: "text-center text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("About Us")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Expertise, efficiency, and cost-effective recruiting solutions as you grow your staff overseas. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(__unplugin_components_1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__unplugin_components_4, {
                    imageLocation: "left",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                    altText: "Team putting hands in"
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(__unplugin_components_2, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` our mission `);
                            } else {
                              return [
                                createTextVNode(" our mission ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(__unplugin_components_2, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Built specifically for your needs. `);
                            } else {
                              return [
                                createTextVNode(" Built specifically for your needs. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}> Our mission is to provide cost-effective and high-quality solutions to our clients&#39; business staffing needs by leveraging the expertise of our global team of professionals. </p>`);
                        _push4(ssrRenderComponent(__unplugin_components_5$1, { items: ["Fixed Hiring Fee", "$0 retainer"] }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(__unplugin_components_2, {
                            size: "span",
                            tag: "h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" our mission ")
                            ]),
                            _: 1
                          }),
                          createVNode(__unplugin_components_2, {
                            tag: "h2",
                            size: "xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Built specifically for your needs. ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                          createVNode(__unplugin_components_5$1, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(__unplugin_components_4, {
                      imageLocation: "left",
                      imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                      altText: "Team putting hands in"
                    }, {
                      right: withCtx(() => [
                        createVNode(__unplugin_components_2, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" our mission ")
                          ]),
                          _: 1
                        }),
                        createVNode(__unplugin_components_2, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Built specifically for your needs. ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                        createVNode(__unplugin_components_5$1, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(__unplugin_components_1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__unplugin_components_4, {
                    imageLocation: "right",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/evi8IOy7eH7B3deVUBC7i/66dba1b271bdddf28b8233dac1c3b20f/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg",
                    altText: "Showcased Team"
                  }, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(__unplugin_components_2, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` join us! `);
                            } else {
                              return [
                                createTextVNode(" join us! ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(__unplugin_components_2, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Interested in joining our team? 🎉 `);
                            } else {
                              return [
                                createTextVNode(" Interested in joining our team? 🎉 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}> If you are passionate about helping companies hire internationally, we want to hear from you! <br${_scopeId3}><br${_scopeId3}> Please send us a message telling us why you would be a great fit for our team. We are always looking for talented and motivated individuals who are committed to helping companies succeed in a global market. </p>`);
                        _push4(ssrRenderComponent(__unplugin_components_3$1, {
                          type: "text",
                          link: "mailto:operations@outworkstaffing.com"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Contact Us`);
                            } else {
                              return [
                                createTextVNode("Contact Us")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(__unplugin_components_2, {
                            size: "span",
                            tag: "h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" join us! ")
                            ]),
                            _: 1
                          }),
                          createVNode(__unplugin_components_2, {
                            tag: "h2",
                            size: "xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Interested in joining our team? 🎉 ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, [
                            createTextVNode(" If you are passionate about helping companies hire internationally, we want to hear from you! "),
                            createVNode("br"),
                            createVNode("br"),
                            createTextVNode(" Please send us a message telling us why you would be a great fit for our team. We are always looking for talented and motivated individuals who are committed to helping companies succeed in a global market. ")
                          ]),
                          createVNode(__unplugin_components_3$1, {
                            type: "text",
                            link: "mailto:operations@outworkstaffing.com"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Contact Us")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(__unplugin_components_4, {
                      imageLocation: "right",
                      imageUrl: "https://images.ctfassets.net/g7bwetg052e6/evi8IOy7eH7B3deVUBC7i/66dba1b271bdddf28b8233dac1c3b20f/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg",
                      altText: "Showcased Team"
                    }, {
                      left: withCtx(() => [
                        createVNode(__unplugin_components_2, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" join us! ")
                          ]),
                          _: 1
                        }),
                        createVNode(__unplugin_components_2, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Interested in joining our team? 🎉 ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, [
                          createTextVNode(" If you are passionate about helping companies hire internationally, we want to hear from you! "),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode(" Please send us a message telling us why you would be a great fit for our team. We are always looking for talented and motivated individuals who are committed to helping companies succeed in a global market. ")
                        ]),
                        createVNode(__unplugin_components_3$1, {
                          type: "text",
                          link: "mailto:operations@outworkstaffing.com"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Contact Us")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$r, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(__unplugin_components_1, {
                background: "white",
                header: "true"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                    createVNode(__unplugin_components_2, {
                      size: "2xl",
                      class: "text-center text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("About Us")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Expertise, efficiency, and cost-effective recruiting solutions as you grow your staff overseas. ")
                  ])
                ]),
                _: 1
              }),
              createVNode(__unplugin_components_1, null, {
                default: withCtx(() => [
                  createVNode(__unplugin_components_4, {
                    imageLocation: "left",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                    altText: "Team putting hands in"
                  }, {
                    right: withCtx(() => [
                      createVNode(__unplugin_components_2, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" our mission ")
                        ]),
                        _: 1
                      }),
                      createVNode(__unplugin_components_2, {
                        tag: "h2",
                        size: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Built specifically for your needs. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                      createVNode(__unplugin_components_5$1, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(__unplugin_components_1, null, {
                default: withCtx(() => [
                  createVNode(__unplugin_components_4, {
                    imageLocation: "right",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/evi8IOy7eH7B3deVUBC7i/66dba1b271bdddf28b8233dac1c3b20f/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg",
                    altText: "Showcased Team"
                  }, {
                    left: withCtx(() => [
                      createVNode(__unplugin_components_2, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" join us! ")
                        ]),
                        _: 1
                      }),
                      createVNode(__unplugin_components_2, {
                        tag: "h2",
                        size: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Interested in joining our team? 🎉 ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, [
                        createTextVNode(" If you are passionate about helping companies hire internationally, we want to hear from you! "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Please send us a message telling us why you would be a great fit for our team. We are always looking for talented and motivated individuals who are committed to helping companies succeed in a global market. ")
                      ]),
                      createVNode(__unplugin_components_3$1, {
                        type: "text",
                        link: "mailto:operations@outworkstaffing.com"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact Us")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$r)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/About.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Main = _sfc_main$w;
  const _component_Row = __unplugin_components_1;
  const _component_Heading = __unplugin_components_2;
  _push(ssrRenderComponent(_component_Main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="grid gap-8"${_scopeId2}><h1 class="text-9xl text-primary font-black"${_scopeId2}>Woo hoo!</h1>`);
              _push3(ssrRenderComponent(_component_Heading, {
                size: "lg",
                class: "font-bold mb-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Your information has been submitted.`);
                  } else {
                    return [
                      createTextVNode("Your information has been submitted.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="max-w-2xl text-2xl text-center mx-auto body-paragraph"${_scopeId2}>Our team wil look over this response and get back to you. Please keep an eye on your email for more information.</p></div>`);
            } else {
              return [
                createVNode("div", { class: "grid gap-8" }, [
                  createVNode("h1", { class: "text-9xl text-primary font-black" }, "Woo hoo!"),
                  createVNode(_component_Heading, {
                    size: "lg",
                    class: "font-bold mb-0"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Your information has been submitted.")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "max-w-2xl text-2xl text-center mx-auto body-paragraph" }, "Our team wil look over this response and get back to you. Please keep an eye on your email for more information.")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
            default: withCtx(() => [
              createVNode("div", { class: "grid gap-8" }, [
                createVNode("h1", { class: "text-9xl text-primary font-black" }, "Woo hoo!"),
                createVNode(_component_Heading, {
                  size: "lg",
                  class: "font-bold mb-0"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Your information has been submitted.")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "max-w-2xl text-2xl text-center mx-auto body-paragraph" }, "Our team wil look over this response and get back to you. Please keep an eye on your email for more information.")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/FormComplete.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const FormComplete = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FormComplete
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  __name: "ArticleCTA",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "A"
    }
  },
  setup(__props) {
    const props = __props;
    const variants = [
      {
        id: "A",
        header: "Ready to get your time and focus back? Hire a virtual assistant!",
        body: "Are you feeling like your days are just a constant juggle between tasks? Maybe it feels like you’re always playing catch-up, never quite getting ahead. It’s like you're stuck in a loop of endless to- dos, and what you really need is a breather, a chance to focus on what really matters in your business.<br><br>That’s exactly what we're here for. Book a free 20 minute meeting with our team to chat about hiring a virtual assistant and bringing focus back to your life. ",
        buttonText: "Book a free call to learn more",
        buttonLink: "/start-hiring"
      },
      {
        id: "B",
        header: "Ditch the chaos - hire a virtual assistant.",
        body: "Don’t let the overwhelm of the never-ending to-do list hold you back. We’ll help you hire remote team members—for less—freeing you up to focus on growth.",
        buttonText: "Start Interviewing",
        buttonLink: "/start-hiring"
      }
    ];
    const currentVariant = computed(() => {
      return variants.find((variant) => variant.id === props.variant);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 grid gap-3 rounded bg-secondary border border-primary" }, _attrs))}><h6 class="font-bold text-2xl mb-0">${ssrInterpolate(currentVariant.value.header)}</h6><div>${currentVariant.value.body}</div><div class="mt-4">`);
      _push(ssrRenderComponent(__unplugin_components_3$1, {
        link: currentVariant.value.buttonLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(currentVariant.value.buttonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(currentVariant.value.buttonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/ArticleCTA.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, _attrs))}><div class="border rounded border-primary"><div class="bg-secondary w-full rounded text-headings font-bold text-xl py-2 px-4"> Before Hiring a Virtual Assistant </div><div class="py-2 px-4"><ul class="px-4 m-0" style="${ssrRenderStyle({ "margin-top": "0px !important", "margin-bottom": "0px !important" })}"><li>Stressed out — you can’t keep calendar organized and get back to people fast enough.</li><li>Overworked — your team is at capacity, working too much, and don&#39;t have enough time to hire.</li><li>Stuck and frustrated unable to find the quality help they need.</li></ul></div></div><div class="border rounded border-primary"><div class="bg-secondary w-full rounded text-headings font-bold text-xl py-2 px-4"> After Hiring a Virtual Assistant </div><div class="py-2 px-4"><ul class="px-4 m-0" style="${ssrRenderStyle({ "margin-top": "0px !important", "margin-bottom": "0px !important" })}"><li>Relief and newfound freedom with a skilled team member to handle all tasks, freeing up time and energy to focus on more high-value work</li><li>Confidence you can manage your business and important things won’t fall through the cracks.</li><li> Equipped and empowered with what you need to grow and have an advantage over your competitors.</li></ul></div></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/BeforeAfterChart.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const BeforeAfterChart = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$m = {
  __name: "VAGuideContent",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))} data-v-afac4355><p data-v-afac4355>Imagine this – you live in a world where your workload is lighter, your business runs smoother, and your work-life balance is something you brag about. Does your work-life look like that now? Probably not if you don’t have a virtual assistant. Virtual assistants are not just a luxury for the select few; they are a necessity for anyone looking to streamline their business and reclaim their time. In the ever-evolving landscape of modern business, a virtual assistant becomes your unseen ally in the battle against time-consuming tasks and administrative chaos.</p><p data-v-afac4355>You’re probably here because the idea of a virtual assistant is still a bit fuzzy to you. What do they do? How do you find a good one? And once you do, how the heck do you manage them without it turning into another task on your already overflowing list? We get it. The world of virtual assistants seems like a labyrinth at first glance – endless options, a myriad of skills, and the big question: Will it actually make your life easier?</p><p data-v-afac4355>In our experience working with clients, the transformation after hiring a virtual assistant is not just visible in the workflow, but also in the emotional landscape of the business owners themselves. It’s like watching someone step out of a fog into a clear, sunny day. They move from a state of overwhelm to a place of control and clarity.</p>`);
      _push(ssrRenderComponent(BeforeAfterChart, null, null, _parent));
      _push(`<p data-v-afac4355>Now, that chart isn’t just for show. It’s a real testament to the value a virtual assistant brings to the table. It’s clear as day, right? You’ve seen the before and after, the stress to serenity, the chaos to calm. But here comes the million-dollar question: How do you find one of these miracle workers?</p><h2 data-v-afac4355>Finding the Perfect Virtual Assistant</h2><p data-v-afac4355>Let’s not beat around the bush. Finding a virtual assistant isn’t like picking a new laptop off the shelf. There’s no one-size-fits-all. It’s about finding a person - someone who clicks with your work style, understands your business needs, and has the skills to take those time-sucking tasks off your plate.</p><p data-v-afac4355>This is exactly why we created Outwork. We understand that the process of finding a virtual assistant can feel like navigating a maze. You want someone reliable, skilled, and, most importantly, someone who resonates with the unique rhythm of your business. That’s where Outwork steps in.</p><p data-v-afac4355>Think of us as matchmakers in the world of business efficiency. We don’t just skim through resumes; we dive deep. We take the time to understand the intricacies of your business, your work culture, and your specific needs. This isn’t about throwing a bunch of candidates at you and hoping one sticks. It’s about precision, about finding that one virtual assistant who’s not just capable, but who resonates with your business ethos.</p>`);
      _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      _push(`<h3 data-v-afac4355>Can’t I just use a job board?</h3><p data-v-afac4355>Well, if you enjoy sifting through a sea of candidates, negotiating rates, and crossing your fingers that the person you pick actually delivers, then sure, go for it.</p><p data-v-afac4355>But if you value your time and want a bespoke service that brings you a VA who’s been vetted, trained, and matched specifically for your business, then that’s where Outwork shines. We’re not about the quick fix; we’re about building partnerships. With us, you’re not just getting a virtual assistant; you’re getting a handpicked powerhouse, aligned with your business’s vision and ready to hit the ground running. This is the art of delegation elevated to a strategic partnership.</p><h2 data-v-afac4355>The Outwork Process</h2><h3 data-v-afac4355>Kickoff Call – Setting the Stage:</h3><p data-v-afac4355>Our journey begins with what we like to call the ‘Kickoff Call.’ It isn’t your typical, run-of-the-mill call. It’s a deep dive into your business and how you run/manage it. We listen, really listen, to what’s going on in your business, what’s working, what’s not, and where you dream of going. This call is about aligning our compass with yours, so we know exactly the kind of VA who will not just fit in but stand out in your unique business landscape. If you want to book a kick-off call, <span class="inline-link" data-v-afac4355><a href="https://outworkstaffing.com/start-hiring" data-v-afac4355>click here.</a></span></p><h3 data-v-afac4355>Job Description Approval – Crafting the Perfect Match:</h3><p data-v-afac4355>Armed with insights from our kickoff call, we craft a job description that’s more than a list of tasks; it’s a blueprint of your ideal VA. We don’t believe in vague descriptions. We get specific the value is in the details. You’ll have the chance to review and approve this job description, ensuring it resonates with your expectations and business needs. This is a collaborative process, after all. We’re in this together.</p><h3 data-v-afac4355>Candidate Presentation – The Reveal:</h3><p data-v-afac4355>Next comes the exciting part – presenting candidates. But we don’t just dump a stack of resumes on your desk. We handpick and showcase candidates who we believe are the cream of the crop. This isn’t a parade of possibilities; it’s a curated exhibition of the best fits. You’ll see why each candidate could be right for you, not just in terms of skills, but how they align with your business’s heartbeat.</p><h3 data-v-afac4355>Hire – Sealing the Deal:</h3><p data-v-afac4355>Once you’ve selected your VA, we don’t just wave goodbye. We’re there to ensure a smooth onboarding process. This isn’t about filling a vacancy; it’s about starting a partnership. We help with the nitty-gritty, ensuring your new VA integrates seamlessly into your team, understanding their role in driving your business forward.</p>`);
      _push(ssrRenderComponent(_sfc_main$o, { variant: "B" }, null, _parent));
      _push(`<h2 data-v-afac4355>Onboarding a Virtual Assistant</h2><p data-v-afac4355>Onboarding isn’t just about task allocation; it’s about relationship building. You and your VA are a team now, and like any good team, communication is crucial. Set up regular check-ins, be clear about expectations, and be open to questions. This isn’t about micromanaging; it’s about establishing a rapport and understanding. A good relationship fosters trust and efficiency. Remember, your VA is an extension of your team, not a remote robot. Invest time in getting to know each other. This investment pays off in a more cohesive working relationship.</p><p data-v-afac4355>Our suggested first step in onboarding your new virtual assistant is about securing and streamlining access. Using a password manager is key. It’s not just about security; it’s about efficiency. Set up your VA with access to necessary systems and tools through a password manager. This way, they can hit the ground running without back-and-forth emails for login details. It’s simple, it’s secure, and it’s practical. You maintain control over access, and your VA gets the keys to the kingdom in a way that doesn’t compromise security.</p><p data-v-afac4355>Introduce your VA to your business’s Standard Operating Procedures (SOPs). SOPs are your playbook; they ensure consistency and quality. If you don’t have SOPs, now’s the time to start documenting. It doesn’t have to be complex. Outline the processes for regular tasks, how decisions should be made, and who to contact for what. This clarity removes guesswork, speeds up training, and sets your VA up for success. Think of SOPs as the GPS for your VA; they provide direction and ensure that everyone is navigating the same route.</p><h2 data-v-afac4355>Managing a Virtual Assistant</h2><p data-v-afac4355>Effective management of a virtual assistant, particularly in a remote setting, hinges on clear communication and realistic expectations. As a leader, it’s crucial to establish a rhythm of regular check-ins. These shouldn’t be seen as micromanagement, but rather as touchpoints to align on priorities, provide feedback, and address any challenges. It’s about fostering an environment where your VA feels supported and valued, while also maintaining the focus on productivity and results.</p><p data-v-afac4355>In a remote setting, the subtleties of non-verbal communication are absent, so it’s important to be explicit in your communication. Be clear in your instructions and open to questions. This ensures that your VA has a thorough understanding of their tasks and your expectations. Additionally, provide context where possible. Understanding the ‘why’ behind tasks can enhance the quality of work and the VA’s engagement with the work.</p><p data-v-afac4355>Lastly, leadership in a remote context requires a balance between autonomy and accountability. Empower your VA by entrusting them with meaningful responsibilities and the autonomy to execute tasks. However, establish a system of accountability where outcomes and timelines are monitored and discussed. This approach not only drives performance but also contributes to the professional growth of your VA, making them a more valuable asset to your team. Remember, successful remote management is about building a relationship of mutual trust and respect, where your VA is an integral part of your team, contributing to its overall success.</p><h2 data-v-afac4355>Redefine Your Work Life – Hire a Virtual Assistant</h2><p data-v-afac4355>It’s very clear that the journey to finding and integrating a virtual assistant into your business is transformative. It’s not just about delegating tasks; it’s about embracing a new way of working, one that brings efficiency, growth, and balance to your professional and personal life. The before and after scenario is stark – from stress and overwork to calm, control, and progress.</p><p data-v-afac4355>At Outwork, we understand the value this transformation brings, and we’re committed to making it as seamless as possible for you. Our process, tailored to your unique needs, ensures that you find the perfect virtual assistant – one who not only matches your work requirements but also complements your business culture.</p><p data-v-afac4355>So, are you ready to step into this new phase of efficiency and growth? To embark on this journey, all it takes is a simple first step: a conversation. Book a call with us, let’s talk about your needs, your business vision, and how a virtual assistant can help turn that vision into reality. Our founder, Bryan, is ready to guide you through this process.</p><p data-v-afac4355>It’s time to make the move from chaos to clarity, from being overwhelmed to being in control. Book a call with us today and start your journey towards a more efficient, balanced, and successful business.</p></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/md/VAGuideContent.md");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VAGuideContent$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-afac4355"]]);
const _sfc_main$l = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center gap-x-4 mx-auto" }, _attrs))}><img src="https://ik.imagekit.io/jcj/bryan_headshots/IMG_0928_EYt97DxK8.JPG?updatedAt=1703176803509" alt="" class="h-10 w-10 rounded-full bg-gray-50"><div class="text-sm leading-6"><p class="font-semibold text-gray-900"><a href="https://twitter.com/iamBryanSanders" target="_blank"><span class="absolute inset-0"></span> Written by Bryan Sanders </a></p><p class="text-gray-600">Founder, Outwork Staffing</p></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/BryanAuthor.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const BryanAuthor = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$k = {
  __name: "Guide",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, {
              background: "white",
              header: "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto grid justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`The Ultimate Guide to Virtual Assistants`);
                      } else {
                        return [
                          createTextVNode("The Ultimate Guide to Virtual Assistants")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "span",
                    class: "mx-auto text-center max-w-md md:max-w-7xl",
                    style: { "text-transform": "none !important" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. `);
                      } else {
                        return [
                          createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(BryanAuthor, null, null, _parent3, _scopeId2));
                  _push3(`<article class="my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VAGuideContent$1), null, null, _parent3, _scopeId2));
                  _push3(`</article></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto grid justify-center" }, [
                      createVNode(_component_Heading, {
                        size: "2xl",
                        class: "text-center text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("The Ultimate Guide to Virtual Assistants")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "span",
                        class: "mx-auto text-center max-w-md md:max-w-7xl",
                        style: { "text-transform": "none !important" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                        ]),
                        _: 1
                      }),
                      createVNode(BryanAuthor),
                      createVNode("article", { class: "my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg" }, [
                        createVNode(unref(VAGuideContent$1))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, {
                background: "white",
                header: "true"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto grid justify-center" }, [
                    createVNode(_component_Heading, {
                      size: "2xl",
                      class: "text-center text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("The Ultimate Guide to Virtual Assistants")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Heading, {
                      size: "span",
                      class: "mx-auto text-center max-w-md md:max-w-7xl",
                      style: { "text-transform": "none !important" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                      ]),
                      _: 1
                    }),
                    createVNode(BryanAuthor),
                    createVNode("article", { class: "my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg" }, [
                      createVNode(unref(VAGuideContent$1))
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Guide.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  __name: "VAGuideContentNewOrder",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))} data-v-58f8edcd><p data-v-58f8edcd>Imagine this – you live in a world where your workload is lighter, your business runs smoother, and your work-life balance is something you brag about. Does your work-life look like that now? Probably not if you don’t have a virtual assistant. Virtual assistants are not just a luxury for the select few; they are a necessity for anyone looking to streamline their business and reclaim their time. In the ever-evolving landscape of modern business, a virtual assistant becomes your unseen ally in the battle against time-consuming tasks and administrative chaos.</p><p data-v-58f8edcd>You’re probably here because the idea of a virtual assistant is still a bit fuzzy to you. What do they do? How do you find a good one? And once you do, how the heck do you manage them without it turning into another task on your already overflowing list? We get it. The world of virtual assistants seems like a labyrinth at first glance – endless options, a myriad of skills, and the big question: Will it actually make your life easier?</p><p data-v-58f8edcd>In our experience working with clients, the transformation after hiring a virtual assistant is not just visible in the workflow, but also in the emotional landscape of the business owners themselves. It’s like watching someone step out of a fog into a clear, sunny day. They move from a state of overwhelm to a place of control and clarity.</p>`);
      _push(ssrRenderComponent(BeforeAfterChart, null, null, _parent));
      _push(`<h2 data-v-58f8edcd>Onboarding a Virtual Assistant</h2><p data-v-58f8edcd>Onboarding isn’t just about task allocation; it’s about relationship building. You and your VA are a team now, and like any good team, communication is crucial. Set up regular check-ins, be clear about expectations, and be open to questions. This isn’t about micromanaging; it’s about establishing a rapport and understanding. A good relationship fosters trust and efficiency. Remember, your VA is an extension of your team, not a remote robot. Invest time in getting to know each other. This investment pays off in a more cohesive working relationship.</p><p data-v-58f8edcd>Our suggested first step in onboarding your new virtual assistant is about securing and streamlining access. Using a password manager is key. It’s not just about security; it’s about efficiency. Set up your VA with access to necessary systems and tools through a password manager. This way, they can hit the ground running without back-and-forth emails for login details. It’s simple, it’s secure, and it’s practical. You maintain control over access, and your VA gets the keys to the kingdom in a way that doesn’t compromise security.</p><p data-v-58f8edcd>Introduce your VA to your business’s Standard Operating Procedures (SOPs). SOPs are your playbook; they ensure consistency and quality. If you don’t have SOPs, now’s the time to start documenting. It doesn’t have to be complex. Outline the processes for regular tasks, how decisions should be made, and who to contact for what. This clarity removes guesswork, speeds up training, and sets your VA up for success. Think of SOPs as the GPS for your VA; they provide direction and ensure that everyone is navigating the same route.</p><h2 data-v-58f8edcd>Managing a Virtual Assistant</h2><p data-v-58f8edcd>Effective management of a virtual assistant, particularly in a remote setting, hinges on clear communication and realistic expectations. As a leader, it’s crucial to establish a rhythm of regular check-ins. These shouldn’t be seen as micromanagement, but rather as touchpoints to align on priorities, provide feedback, and address any challenges. It’s about fostering an environment where your VA feels supported and valued, while also maintaining the focus on productivity and results.</p><p data-v-58f8edcd>In a remote setting, the subtleties of non-verbal communication are absent, so it’s important to be explicit in your communication. Be clear in your instructions and open to questions. This ensures that your VA has a thorough understanding of their tasks and your expectations. Additionally, provide context where possible. Understanding the ‘why’ behind tasks can enhance the quality of work and the VA’s engagement with the work.</p><p data-v-58f8edcd>Lastly, leadership in a remote context requires a balance between autonomy and accountability. Empower your VA by entrusting them with meaningful responsibilities and the autonomy to execute tasks. However, establish a system of accountability where outcomes and timelines are monitored and discussed. This approach not only drives performance but also contributes to the professional growth of your VA, making them a more valuable asset to your team. Remember, successful remote management is about building a relationship of mutual trust and respect, where your VA is an integral part of your team, contributing to its overall success.</p>`);
      _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      _push(`<h2 data-v-58f8edcd>Finding the Perfect Virtual Assistant</h2><p data-v-58f8edcd>Let’s not beat around the bush. Finding a virtual assistant isn’t like picking a new laptop off the shelf. There’s no one-size-fits-all. It’s about finding a person - someone who clicks with your work style, understands your business needs, and has the skills to take those time-sucking tasks off your plate.</p><p data-v-58f8edcd>This is exactly why we created Outwork. We understand that the process of finding a virtual assistant can feel like navigating a maze. You want someone reliable, skilled, and, most importantly, someone who resonates with the unique rhythm of your business. That’s where Outwork steps in.</p><p data-v-58f8edcd>Think of us as matchmakers in the world of business efficiency. We don’t just skim through resumes; we dive deep. We take the time to understand the intricacies of your business, your work culture, and your specific needs. This isn’t about throwing a bunch of candidates at you and hoping one sticks. It’s about precision, about finding that one virtual assistant who’s not just capable, but who resonates with your business ethos.</p><h3 data-v-58f8edcd>Can’t I just use a job board?</h3><p data-v-58f8edcd>Well, if you enjoy sifting through a sea of candidates, negotiating rates, and crossing your fingers that the person you pick actually delivers, then sure, go for it.</p><p data-v-58f8edcd>But if you value your time and want a bespoke service that brings you a VA who’s been vetted, trained, and matched specifically for your business, then that’s where Outwork shines. We’re not about the quick fix; we’re about building partnerships. With us, you’re not just getting a virtual assistant; you’re getting a handpicked powerhouse, aligned with your business’s vision and ready to hit the ground running. This is the art of delegation elevated to a strategic partnership.</p><h2 data-v-58f8edcd>The Outwork Process</h2><h3 data-v-58f8edcd>Kickoff Call – Setting the Stage:</h3><p data-v-58f8edcd>Our journey begins with what we like to call the ‘Kickoff Call.’ It isn’t your typical, run-of-the-mill call. It’s a deep dive into your business and how you run/manage it. We listen, really listen, to what’s going on in your business, what’s working, what’s not, and where you dream of going. This call is about aligning our compass with yours, so we know exactly the kind of VA who will not just fit in but stand out in your unique business landscape. If you want to book a kick-off call, <span class="inline-link" data-v-58f8edcd><a href="https://outworkstaffing.com/start-hiring" data-v-58f8edcd>click here.</a></span></p><h3 data-v-58f8edcd>Job Description Approval – Crafting the Perfect Match:</h3><p data-v-58f8edcd>Armed with insights from our kickoff call, we craft a job description that’s more than a list of tasks; it’s a blueprint of your ideal VA. We don’t believe in vague descriptions. We get specific the value is in the details. You’ll have the chance to review and approve this job description, ensuring it resonates with your expectations and business needs. This is a collaborative process, after all. We’re in this together.</p><h3 data-v-58f8edcd>Candidate Presentation – The Reveal:</h3><p data-v-58f8edcd>Next comes the exciting part – presenting candidates. But we don’t just dump a stack of resumes on your desk. We handpick and showcase candidates who we believe are the cream of the crop. This isn’t a parade of possibilities; it’s a curated exhibition of the best fits. You’ll see why each candidate could be right for you, not just in terms of skills, but how they align with your business’s heartbeat.</p><h3 data-v-58f8edcd>Hire – Sealing the Deal:</h3><p data-v-58f8edcd>Once you’ve selected your VA, we don’t just wave goodbye. We’re there to ensure a smooth onboarding process. This isn’t about filling a vacancy; it’s about starting a partnership. We help with the nitty-gritty, ensuring your new VA integrates seamlessly into your team, understanding their role in driving your business forward.</p>`);
      _push(ssrRenderComponent(_sfc_main$o, { variant: "B" }, null, _parent));
      _push(`<h2 data-v-58f8edcd>Redefine Your Work Life – Hire a Virtual Assistant</h2><p data-v-58f8edcd>It’s very clear that the journey to finding and integrating a virtual assistant into your business is transformative. It’s not just about delegating tasks; it’s about embracing a new way of working, one that brings efficiency, growth, and balance to your professional and personal life. The before and after scenario is stark – from stress and overwork to calm, control, and progress.</p><p data-v-58f8edcd>At Outwork, we understand the value this transformation brings, and we’re committed to making it as seamless as possible for you. Our process, tailored to your unique needs, ensures that you find the perfect virtual assistant – one who not only matches your work requirements but also complements your business culture.</p><p data-v-58f8edcd>So, are you ready to step into this new phase of efficiency and growth? To embark on this journey, all it takes is a simple first step: a conversation. Book a call with us, let’s talk about your needs, your business vision, and how a virtual assistant can help turn that vision into reality. Our founder, Bryan, is ready to guide you through this process.</p><p data-v-58f8edcd>It’s time to make the move from chaos to clarity, from being overwhelmed to being in control. Book a call with us today and start your journey towards a more efficient, balanced, and successful business.</p></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/md/VAGuideContentNewOrder.md");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VAGuideContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-58f8edcd"]]);
const _sfc_main$i = {
  __name: "Guide2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, {
              background: "white",
              header: "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto grid justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`The Ultimate Guide to Virtual Assistants`);
                      } else {
                        return [
                          createTextVNode("The Ultimate Guide to Virtual Assistants")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "span",
                    class: "mx-auto text-center max-w-md md:max-w-7xl",
                    style: { "text-transform": "none !important" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. `);
                      } else {
                        return [
                          createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(BryanAuthor, null, null, _parent3, _scopeId2));
                  _push3(`<article class="my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VAGuideContent), null, null, _parent3, _scopeId2));
                  _push3(`</article></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto grid justify-center" }, [
                      createVNode(_component_Heading, {
                        size: "2xl",
                        class: "text-center text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("The Ultimate Guide to Virtual Assistants")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "span",
                        class: "mx-auto text-center max-w-md md:max-w-7xl",
                        style: { "text-transform": "none !important" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                        ]),
                        _: 1
                      }),
                      createVNode(BryanAuthor),
                      createVNode("article", { class: "my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg" }, [
                        createVNode(unref(VAGuideContent))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, {
                background: "white",
                header: "true"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto grid justify-center" }, [
                    createVNode(_component_Heading, {
                      size: "2xl",
                      class: "text-center text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("The Ultimate Guide to Virtual Assistants")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Heading, {
                      size: "span",
                      class: "mx-auto text-center max-w-md md:max-w-7xl",
                      style: { "text-transform": "none !important" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("We’ll help you find elite talent overseas—so you can grow your business faster and sustainably. ")
                      ]),
                      _: 1
                    }),
                    createVNode(BryanAuthor),
                    createVNode("article", { class: "my-12 max-w-5xl max-h-[96] mx-auto prose xl:prose-lg" }, [
                      createVNode(unref(VAGuideContent))
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Guide2.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const __default__ = {
  props: {
    roles: Array,
    fadeToWhite: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log("info mounted");
    var copy = document.querySelector(".positions-slide").cloneNode(true);
    document.querySelector(".positions").appendChild(copy);
  }
};
const _sfc_main$h = /* @__PURE__ */ Object.assign(__default__, {
  __name: "PositionCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["positions pt-8", { "white-fade": __props.fadeToWhite }]
      }, _attrs))} data-v-57180383><div class="positions-slide" data-v-57180383><!--[-->`);
      ssrRenderList(__props.roles, (position) => {
        _push(`<div class="relative inline-block h-[175px] w-[175px] mr-6 mb-4 rounded-3xl overflow-hidden" data-v-57180383><div class="h-full w-full bg-cover bg-center rounded" style="${ssrRenderStyle({ backgroundImage: `url(${position.img})` })}" data-v-57180383><div class="absolute inset-0 bg-dark opacity-80 z-10" data-v-57180383></div><p class="position-title font-bold text-xl mb-2" data-v-57180383>${ssrInterpolate(position.title)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/PositionCarousel.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-57180383"]]);
const _sfc_main$g = {
  __name: "Process",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = {
      "1": {
        "title": "Kickoff",
        "body": "Once you book a call, we will meet and get all relevant information from you. <br><br>We will finalize a job description and cover all of the details regarding your business."
      },
      "2": {
        "title": "Search",
        "body": "Our team will take the job description and start to source candidates from our database and job boards. <br><br>We will interview candidates and test them for the relevant requirements."
      },
      "3": {
        "title": "Presentation",
        "body": "Once we have found a few candidates that we think you will like, we will introduce them to you and setup interviews. You can provide feedback to us on them or you can decide to move forward with one of them."
      },
      "4": {
        "title": "Placement",
        "body": "And just like that you have a new team member! Woo hoo! Your new team member will be ready to start right away and you get to work."
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(__unplugin_components_2, {
        size: "span",
        tag: "h6",
        class: "text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` OUR PATH FOR GROWING YOUR TEAM `);
          } else {
            return [
              createTextVNode(" OUR PATH FOR GROWING YOUR TEAM ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(__unplugin_components_2, {
        size: "xl",
        tag: "h2",
        class: "text-center mb-12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` What you can expect from us `);
          } else {
            return [
              createTextVNode(" What you can expect from us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(Object.values(steps), (step, index) => {
        _push(`<div class="card block bg-white"><div class="grid"><span class="text-md uppercase font-bold text-primary mb-2">Step ${ssrInterpolate(index + 1)}</span><div class="text-3xl text-heading font-bold">${step.title}</div></div><div class="body-paragraph">${step.body}</div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/Process.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__unplugin_components_1, mergeProps({
        background: "white",
        header: "true"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(__unplugin_components_2, {
              size: "2xl",
              class: "text-center text-heading"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Hire Elite Talent at a Fraction of the Cost of US Counterparts`);
                } else {
                  return [
                    createTextVNode("Hire Elite Talent at a Fraction of the Cost of US Counterparts")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6"${_scopeId}>We are a recruiting firm built to help US companies hire quality talent in the Philippines &amp; LatAm for between $900-$1500 a month.</p><div class="flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(__unplugin_components_3$1, {
              class: "w-full sm:w-auto",
              link: "/start-hiring"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Book an Inquiry Call`);
                } else {
                  return [
                    createTextVNode("Book an Inquiry Call")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                createVNode(__unplugin_components_2, {
                  size: "2xl",
                  class: "text-center text-heading"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Hire Elite Talent at a Fraction of the Cost of US Counterparts")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "We are a recruiting firm built to help US companies hire quality talent in the Philippines & LatAm for between $900-$1500 a month."),
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-start" }, [
                  createVNode(__unplugin_components_3$1, {
                    class: "w-full sm:w-auto",
                    link: "/start-hiring"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Book an Inquiry Call")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/Hero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    roles: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Hero = _sfc_main$f;
      const _component_Row = __unplugin_components_1;
      const _component_Fifty = __unplugin_components_4;
      const _component_Heading = __unplugin_components_2;
      const _component_Process = _sfc_main$g;
      const _component_PositionCarousel = __unplugin_components_5;
      const _component_CheckBubble = __unplugin_components_5$1;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Hero, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, {
              name: "relate",
              background: "light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, {
                    imageMobile: "true",
                    imageUrl: "https://ik.imagekit.io/outwork/handsinface.webp?updatedAt=1701878781199",
                    lazyLoad: false,
                    altText: "Man upset with his job"
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Get the help you Know you need `);
                            } else {
                              return [
                                createTextVNode(" Get the help you Know you need ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "xl",
                          tag: "h2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` You are overwhelmed with all the work… `);
                            } else {
                              return [
                                createTextVNode(" You are overwhelmed with all the work… ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}>Growing a business is hard - especially when you have to do it all. Hiring remote workers can solve this problem for you. </p><p class="body-paragraph"${_scopeId3}>You can hire amazing full-time talented individuals at the fraction of the cost of US employees.</p>`);
                      } else {
                        return [
                          createVNode(_component_Heading, {
                            size: "span",
                            tag: "h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Get the help you Know you need ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Heading, {
                            size: "xl",
                            tag: "h2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" You are overwhelmed with all the work… ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, "Growing a business is hard - especially when you have to do it all. Hiring remote workers can solve this problem for you. "),
                          createVNode("p", { class: "body-paragraph" }, "You can hire amazing full-time talented individuals at the fraction of the cost of US employees.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, {
                      imageMobile: "true",
                      imageUrl: "https://ik.imagekit.io/outwork/handsinface.webp?updatedAt=1701878781199",
                      lazyLoad: false,
                      altText: "Man upset with his job"
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Get the help you Know you need ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Heading, {
                          size: "xl",
                          tag: "h2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" You are overwhelmed with all the work… ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, "Growing a business is hard - especially when you have to do it all. Hiring remote workers can solve this problem for you. "),
                        createVNode("p", { class: "body-paragraph" }, "You can hire amazing full-time talented individuals at the fraction of the cost of US employees.")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, {
              name: "quality",
              background: "light"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, {
                    imageLocation: "right",
                    imageMobile: "false",
                    imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                    altText: "Team working"
                  }, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` building a team doesn&#39;t have to cost tons `);
                            } else {
                              return [
                                createTextVNode(" building a team doesn't have to cost tons ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "xl",
                          tag: "h2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Find quality full-time help for $900-$1500. `);
                            } else {
                              return [
                                createTextVNode(" Find quality full-time help for $900-$1500. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}>Most companies think they need to spend between $4,000-$6,000 a month on a quality full time team. That isn&#39;t true. We help businesses build an awesome team of global workers to help them save time, money, and ultimately grow their business. </p>`);
                      } else {
                        return [
                          createVNode(_component_Heading, {
                            size: "span",
                            tag: "h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" building a team doesn't have to cost tons ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Heading, {
                            size: "xl",
                            tag: "h2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Find quality full-time help for $900-$1500. ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, "Most companies think they need to spend between $4,000-$6,000 a month on a quality full time team. That isn't true. We help businesses build an awesome team of global workers to help them save time, money, and ultimately grow their business. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, {
                      imageLocation: "right",
                      imageMobile: "false",
                      imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                      altText: "Team working"
                    }, {
                      left: withCtx(() => [
                        createVNode(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" building a team doesn't have to cost tons ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Heading, {
                          size: "xl",
                          tag: "h2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Find quality full-time help for $900-$1500. ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, "Most companies think they need to spend between $4,000-$6,000 a month on a quality full time team. That isn't true. We help businesses build an awesome team of global workers to help them save time, money, and ultimately grow their business. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, { name: "process" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Process, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Process)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    tag: "h2",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Recruit skilled people for any task. `);
                      } else {
                        return [
                          createTextVNode(" Recruit skilled people for any task. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="body-paragraph max-w-xl text-center mx-auto"${_scopeId2}>Save time and money by growing your team outside of the United States and find skilled professionals for any project or business.</p>`);
                  _push3(ssrRenderComponent(_component_PositionCarousel, { roles: __props.roles }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Heading, {
                      size: "2xl",
                      tag: "h2",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Recruit skilled people for any task. ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "body-paragraph max-w-xl text-center mx-auto" }, "Save time and money by growing your team outside of the United States and find skilled professionals for any project or business."),
                    createVNode(_component_PositionCarousel, { roles: __props.roles }, null, 8, ["roles"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-1 lg:gap-x-16 gap-y-6 md:gap-y-12 lg:grid-cols-2 lg:items-center"${_scopeId2}><div class="${ssrRenderClass(["block relative sm:py-16 lg:py-0"])}"${_scopeId2}><div class="block flex justify-center"${_scopeId2}><img class="h-64" src="https://images.ctfassets.net/g7bwetg052e6/3jfEQv5IouKC9WpjXtrrLA/5ac466efc1475348c1917e98a455adad/shield.webp" alt="Shield showing Outwork Gurantee"${_scopeId2}></div></div><div class="${ssrRenderClass(["block relative sm:py-16 lg:py-0"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "xl",
                    tag: "h3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Our Recruitment Guarantee `);
                      } else {
                        return [
                          createTextVNode(" Our Recruitment Guarantee ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="body-paragraph"${_scopeId2}>Finding the right staff for your business can be a challenging task, but we are here to help. Our company offers a 90-day recruitment guarantee. If the first candidate we place with you doesn&#39;t work out, we will replace them free of charge within the first 90 days of their employment. <br${_scopeId2}><br${_scopeId2}> Trust us to find the right fit for your company. </p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-1 lg:gap-x-16 gap-y-6 md:gap-y-12 lg:grid-cols-2 lg:items-center" }, [
                      createVNode("div", { class: ["block relative sm:py-16 lg:py-0"] }, [
                        createVNode("div", { class: "block flex justify-center" }, [
                          createVNode("img", {
                            class: "h-64",
                            src: "https://images.ctfassets.net/g7bwetg052e6/3jfEQv5IouKC9WpjXtrrLA/5ac466efc1475348c1917e98a455adad/shield.webp",
                            alt: "Shield showing Outwork Gurantee"
                          })
                        ])
                      ]),
                      createVNode("div", { class: ["block relative sm:py-16 lg:py-0"] }, [
                        createVNode(_component_Heading, {
                          size: "xl",
                          tag: "h3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Our Recruitment Guarantee ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, [
                          createTextVNode("Finding the right staff for your business can be a challenging task, but we are here to help. Our company offers a 90-day recruitment guarantee. If the first candidate we place with you doesn't work out, we will replace them free of charge within the first 90 days of their employment. "),
                          createVNode("br"),
                          createVNode("br"),
                          createTextVNode(" Trust us to find the right fit for your company. ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, null, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Heading, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Quality team members ready to work hard. `);
                            } else {
                              return [
                                createTextVNode(" Quality team members ready to work hard. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}> In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. </p>`);
                      } else {
                        return [
                          createVNode(_component_Heading, {
                            tag: "h2",
                            size: "xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Quality team members ready to work hard. ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                        ];
                      }
                    }),
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, null, {
                      left: withCtx(() => [
                        createVNode(_component_Heading, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Quality team members ready to work hard. ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                      ]),
                      right: withCtx(() => [
                        createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Hero),
              createVNode(_component_Row, {
                name: "relate",
                background: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, {
                    imageMobile: "true",
                    imageUrl: "https://ik.imagekit.io/outwork/handsinface.webp?updatedAt=1701878781199",
                    lazyLoad: false,
                    altText: "Man upset with his job"
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_Heading, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Get the help you Know you need ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "xl",
                        tag: "h2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" You are overwhelmed with all the work… ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, "Growing a business is hard - especially when you have to do it all. Hiring remote workers can solve this problem for you. "),
                      createVNode("p", { class: "body-paragraph" }, "You can hire amazing full-time talented individuals at the fraction of the cost of US employees.")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Row, {
                name: "quality",
                background: "light"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, {
                    imageLocation: "right",
                    imageMobile: "false",
                    imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                    altText: "Team working"
                  }, {
                    left: withCtx(() => [
                      createVNode(_component_Heading, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" building a team doesn't have to cost tons ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "xl",
                        tag: "h2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Find quality full-time help for $900-$1500. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, "Most companies think they need to spend between $4,000-$6,000 a month on a quality full time team. That isn't true. We help businesses build an awesome team of global workers to help them save time, money, and ultimately grow their business. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Row, { name: "process" }, {
                default: withCtx(() => [
                  createVNode(_component_Process)
                ]),
                _: 1
              }),
              createVNode(_component_Row, { background: "light" }, {
                default: withCtx(() => [
                  createVNode(_component_Heading, {
                    size: "2xl",
                    tag: "h2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Recruit skilled people for any task. ")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "body-paragraph max-w-xl text-center mx-auto" }, "Save time and money by growing your team outside of the United States and find skilled professionals for any project or business."),
                  createVNode(_component_PositionCarousel, { roles: __props.roles }, null, 8, ["roles"])
                ]),
                _: 1
              }),
              createVNode(_component_Row, { background: "light" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-1 lg:gap-x-16 gap-y-6 md:gap-y-12 lg:grid-cols-2 lg:items-center" }, [
                    createVNode("div", { class: ["block relative sm:py-16 lg:py-0"] }, [
                      createVNode("div", { class: "block flex justify-center" }, [
                        createVNode("img", {
                          class: "h-64",
                          src: "https://images.ctfassets.net/g7bwetg052e6/3jfEQv5IouKC9WpjXtrrLA/5ac466efc1475348c1917e98a455adad/shield.webp",
                          alt: "Shield showing Outwork Gurantee"
                        })
                      ])
                    ]),
                    createVNode("div", { class: ["block relative sm:py-16 lg:py-0"] }, [
                      createVNode(_component_Heading, {
                        size: "xl",
                        tag: "h3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Our Recruitment Guarantee ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, [
                        createTextVNode("Finding the right staff for your business can be a challenging task, but we are here to help. Our company offers a 90-day recruitment guarantee. If the first candidate we place with you doesn't work out, we will replace them free of charge within the first 90 days of their employment. "),
                        createVNode("br"),
                        createVNode("br"),
                        createTextVNode(" Trust us to find the right fit for your company. ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_Row, null, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, null, {
                    left: withCtx(() => [
                      createVNode(_component_Heading, {
                        tag: "h2",
                        size: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Quality team members ready to work hard. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                    ]),
                    right: withCtx(() => [
                      createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Main = _sfc_main$w;
  const _component_Row = __unplugin_components_1;
  const _component_Heading = __unplugin_components_2;
  _push(ssrRenderComponent(_component_Main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="grid gap-8"${_scopeId2}><h1 class="text-9xl text-primary font-black"${_scopeId2}>Woo hoo!</h1>`);
              _push3(ssrRenderComponent(_component_Heading, {
                size: "lg",
                class: "font-bold mb-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Your meeting has been booked.`);
                  } else {
                    return [
                      createTextVNode("Your meeting has been booked.")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="max-w-2xl text-2xl text-center mx-auto body-paragraph"${_scopeId2}>We are looking forward to chatting with you. Thank you so much for booking a time to chat. Please keep an eye on your email for a confirmation and more information.</p></div>`);
            } else {
              return [
                createVNode("div", { class: "grid gap-8" }, [
                  createVNode("h1", { class: "text-9xl text-primary font-black" }, "Woo hoo!"),
                  createVNode(_component_Heading, {
                    size: "lg",
                    class: "font-bold mb-0"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Your meeting has been booked.")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "max-w-2xl text-2xl text-center mx-auto body-paragraph" }, "We are looking forward to chatting with you. Thank you so much for booking a time to chat. Please keep an eye on your email for a confirmation and more information.")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Row, { class: "pt-40 text-center min-h-screen" }, {
            default: withCtx(() => [
              createVNode("div", { class: "grid gap-8" }, [
                createVNode("h1", { class: "text-9xl text-primary font-black" }, "Woo hoo!"),
                createVNode(_component_Heading, {
                  size: "lg",
                  class: "font-bold mb-0"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Your meeting has been booked.")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "max-w-2xl text-2xl text-center mx-auto body-paragraph" }, "We are looking forward to chatting with you. Thank you so much for booking a time to chat. Please keep an eye on your email for a confirmation and more information.")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/MeetingBooked.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const MeetingBooked = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MeetingBooked
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "How much can I save?",
        answer: "The amount of money can vary depending on the role, but typically companies save 70-90% on salaries. Outsourcing is an effective way to grow your team while being financially responsible."
      },
      {
        question: "What timezones do you recruit for?",
        answer: "Our team typically places candidates from the Philippines. Candidates that we place typically are comfortable with a typical US 9-5 or can work any other time zone you prefer. It really is your choice."
      },
      {
        question: "How much do you charge?",
        answer: "We charge a $500 deposit to get started recruiting and then when we place a candidate we will bill our recruitment fee. It depends on the frequency you are hiring, but it is typically 35% of the annual salary. Your $500 deposit goes towards that 35%."
      },
      {
        question: "Do you have a placement guarantee?",
        answer: "If you aren’t satisfied with the candidate that you hire or they quit in the first 90 days, we will find you someone else free of charge. We want to make sure that you find somebody who can work well with you and your time - that is our top priority."
      }
      // More questions...
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dl${ssrRenderAttrs(mergeProps({ class: "mt-10 space-y-6 max-w-2xl mx-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(ssrRenderComponent(unref(Disclosure), {
          as: "div",
          key: faq.question,
          class: "bg-white rounded-xl hover:scale-105 p-6"
        }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="transition-all"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "w-full items-start justify-between text-left text-gray-900" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex justify-between"${_scopeId2}><span class="text-headings font-bold text-xl"${_scopeId2}>${ssrInterpolate(faq.question)}</span><span class="ml-6 flex h-7 items-center"${_scopeId2}>`);
                    if (!open) {
                      _push3(ssrRenderComponent(unref(PlusSmallIcon), {
                        class: "h-6 w-6 group-hover:scale-125 transition-all",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(MinusSmallIcon), {
                        class: "h-6 w-6",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    }
                    _push3(`</span></div>`);
                    _push3(ssrRenderComponent(unref(DisclosurePanel), {
                      as: "dd",
                      class: "w-full bg-white",
                      style: open ? null : { display: "none" }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-base leading-7 text-gray-600 w-full"${_scopeId3}>${ssrInterpolate(faq.answer)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-base leading-7 text-gray-600 w-full" }, toDisplayString(faq.answer), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "w-full flex justify-between" }, [
                        createVNode("span", { class: "text-headings font-bold text-xl" }, toDisplayString(faq.question), 1),
                        createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                          !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                            key: 0,
                            class: "h-6 w-6 group-hover:scale-125 transition-all",
                            "aria-hidden": "true"
                          })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                            key: 1,
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          }))
                        ])
                      ]),
                      withDirectives(createVNode(unref(DisclosurePanel), {
                        as: "dd",
                        class: "w-full bg-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base leading-7 text-gray-600 w-full" }, toDisplayString(faq.answer), 1)
                        ]),
                        _: 2
                      }, 1536), [
                        [vShow, open]
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "transition-all" }, [
                  createVNode(unref(DisclosureButton), { class: "w-full items-start justify-between text-left text-gray-900" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-full flex justify-between" }, [
                        createVNode("span", { class: "text-headings font-bold text-xl" }, toDisplayString(faq.question), 1),
                        createVNode("span", { class: "ml-6 flex h-7 items-center" }, [
                          !open ? (openBlock(), createBlock(unref(PlusSmallIcon), {
                            key: 0,
                            class: "h-6 w-6 group-hover:scale-125 transition-all",
                            "aria-hidden": "true"
                          })) : (openBlock(), createBlock(unref(MinusSmallIcon), {
                            key: 1,
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          }))
                        ])
                      ]),
                      withDirectives(createVNode(unref(DisclosurePanel), {
                        as: "dd",
                        class: "w-full bg-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-base leading-7 text-gray-600 w-full" }, toDisplayString(faq.answer), 1)
                        ]),
                        _: 2
                      }, 1536), [
                        [vShow, open]
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></dl>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/FAQ.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "BentoCard",
  __ssrInlineRender: true,
  props: {
    headline: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "card bg-white border-4 border-solid shadow-4xl" }, _attrs))}><div class="rounded-lg bg-secondary p-2 min-h-4 min-w-4">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><span class="text-heading font-bold text-2xl">${ssrInterpolate(__props.headline)}</span><p class="body-paragraph">`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/BentoCard.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "BentoGrid",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-cols-1 md:grid-cols-5 bento-grid w-full max-w-full" }, _attrs))} data-v-5a3f50d7>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        headline: "Find Skilled Global Talent",
        class: "col-span-3"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckBadgeIcon), { class: "h-8 w-8 text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckBadgeIcon), { class: "h-8 w-8 text-primary" })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our team has a global network of top-tier candidates, so you can find the skilled talent you need to take your business to the next level. We use a combination of interviews, skills assessments, and background checks to verify each candidate&#39;s credentials and capabilities. <br data-v-5a3f50d7${_scopeId}><br data-v-5a3f50d7${_scopeId}> By partnering with us, you can trust that we&#39;ll provide you with a pool of carefully vetted and highly skilled candidates to choose from. `);
          } else {
            return [
              createTextVNode(" Our team has a global network of top-tier candidates, so you can find the skilled talent you need to take your business to the next level. We use a combination of interviews, skills assessments, and background checks to verify each candidate's credentials and capabilities. "),
              createVNode("br"),
              createVNode("br"),
              createTextVNode(" By partnering with us, you can trust that we'll provide you with a pool of carefully vetted and highly skilled candidates to choose from. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        headline: "Streamlined Process",
        class: "col-span-2"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DocumentCheckIcon), { class: "h-8 w-8 text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DocumentCheckIcon), { class: "h-8 w-8 text-primary" })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` With our fast and efficient hiring process, you can trust that we&#39;ll help you save time and resources while finding the top talent you need to drive your business forward. `);
          } else {
            return [
              createTextVNode(" With our fast and efficient hiring process, you can trust that we'll help you save time and resources while finding the top talent you need to drive your business forward. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        headline: "Pay Once",
        class: "col-span-2"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CurrencyDollarIcon), { class: "h-8 w-8 text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CurrencyDollarIcon), { class: "h-8 w-8 text-primary" })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Only pay a fixed recruitment fee and never pay again. This person joins your team and you don’t have to pay us monthly like most firms. `);
          } else {
            return [
              createTextVNode(" Only pay a fixed recruitment fee and never pay again. This person joins your team and you don’t have to pay us monthly like most firms. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        headline: "Add New Hires To Your Team Directly",
        class: "col-span-3"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HeartIcon), { class: "h-8 w-8 text-primary" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HeartIcon), { class: "h-8 w-8 text-primary" })
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our team doesn’t step in to manage this employee on your behalf, but instead they are joining your team. We believe this is the most effective way to help your new hire thrive in their role and deeply understand the work and culture. `);
          } else {
            return [
              createTextVNode(" Our team doesn’t step in to manage this employee on your behalf, but instead they are joining your team. We believe this is the most effective way to help your new hire thrive in their role and deeply understand the work and culture. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/BentoGrid.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5a3f50d7"]]);
const _sfc_main$9 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    roles: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_BentoGrid = __unplugin_components_3;
      const _component_Button = __unplugin_components_3$1;
      const _component_PositionCarousel = __unplugin_components_5;
      const _component_Fifty = __unplugin_components_4;
      const _component_CheckBubble = __unplugin_components_5$1;
      const _component_FAQ = _sfc_main$c;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, {
              background: "gradient",
              header: "true"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-w-4xl mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "span",
                    tag: "h6",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Save Time &amp; Money `);
                      } else {
                        return [
                          createTextVNode(" Save Time & Money ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Hire high-quality employees at a fraction of the cost `);
                      } else {
                        return [
                          createTextVNode("Hire high-quality employees at a fraction of the cost ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6"${_scopeId2}>We are a recruitment agency designed to help US countries find talented individuals globally to help grow their business. </p></div><div class="mt-16"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BentoGrid, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-w-4xl mx-auto" }, [
                      createVNode(_component_Heading, {
                        size: "span",
                        tag: "h6",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save Time & Money ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "2xl",
                        class: "text-center text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Hire high-quality employees at a fraction of the cost ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "We are a recruitment agency designed to help US countries find talented individuals globally to help grow their business. ")
                    ]),
                    createVNode("div", { class: "mt-16" }, [
                      createVNode(_component_BentoGrid)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center pb-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    tag: "h2",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Recruit skilled people for any task. `);
                      } else {
                        return [
                          createTextVNode(" Recruit skilled people for any task. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="body-paragraph max-w-xl text-center mx-auto"${_scopeId2}>Save time and money by growing your team outside of the United States and find skilled professionals for any project or business.</p>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    link: "/start-hiring",
                    class: "text-center mx-auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Start Hiring`);
                      } else {
                        return [
                          createTextVNode("Start Hiring")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_PositionCarousel, {
                    fadeToWhite: "true",
                    roles: __props.roles
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-center pb-8" }, [
                      createVNode(_component_Heading, {
                        size: "2xl",
                        tag: "h2",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Recruit skilled people for any task. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph max-w-xl text-center mx-auto" }, "Save time and money by growing your team outside of the United States and find skilled professionals for any project or business."),
                      createVNode(_component_Button, {
                        link: "/start-hiring",
                        class: "text-center mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Start Hiring")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_PositionCarousel, {
                      fadeToWhite: "true",
                      roles: __props.roles
                    }, null, 8, ["roles"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, {
                    imageLocation: "left",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                    altText: "Team putting hands in"
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` our mission `);
                            } else {
                              return [
                                createTextVNode(" our mission ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Heading, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Built specifically for your needs. `);
                            } else {
                              return [
                                createTextVNode(" Built specifically for your needs. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="body-paragraph"${_scopeId3}> Our mission is to provide cost-effective and high-quality solutions to our clients&#39; business staffing needs by leveraging the expertise of our global team of professionals. </p>`);
                        _push4(ssrRenderComponent(_component_CheckBubble, { items: ["Fixed Hiring Fee", "$0 retainer"] }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Heading, {
                            size: "span",
                            tag: "h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" our mission ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Heading, {
                            tag: "h2",
                            size: "xl"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Built specifically for your needs. ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                          createVNode(_component_CheckBubble, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, {
                      imageLocation: "left",
                      imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                      altText: "Team putting hands in"
                    }, {
                      right: withCtx(() => [
                        createVNode(_component_Heading, {
                          size: "span",
                          tag: "h6"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" our mission ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Heading, {
                          tag: "h2",
                          size: "xl"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Built specifically for your needs. ")
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                        createVNode(_component_CheckBubble, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "xl",
                    tag: "h2",
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Frequently Asked Questions`);
                      } else {
                        return [
                          createTextVNode(" Frequently Asked Questions")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FAQ, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Heading, {
                      size: "xl",
                      tag: "h2",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Frequently Asked Questions")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FAQ)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, {
                background: "gradient",
                header: "true"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "max-w-4xl mx-auto" }, [
                    createVNode(_component_Heading, {
                      size: "span",
                      tag: "h6",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save Time & Money ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Heading, {
                      size: "2xl",
                      class: "text-center text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Hire high-quality employees at a fraction of the cost ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "We are a recruitment agency designed to help US countries find talented individuals globally to help grow their business. ")
                  ]),
                  createVNode("div", { class: "mt-16" }, [
                    createVNode(_component_BentoGrid)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_Row, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-center pb-8" }, [
                    createVNode(_component_Heading, {
                      size: "2xl",
                      tag: "h2",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Recruit skilled people for any task. ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "body-paragraph max-w-xl text-center mx-auto" }, "Save time and money by growing your team outside of the United States and find skilled professionals for any project or business."),
                    createVNode(_component_Button, {
                      link: "/start-hiring",
                      class: "text-center mx-auto"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Start Hiring")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_PositionCarousel, {
                    fadeToWhite: "true",
                    roles: __props.roles
                  }, null, 8, ["roles"])
                ]),
                _: 1
              }),
              createVNode(_component_Row, null, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, {
                    imageLocation: "left",
                    imageUrl: "https://images.ctfassets.net/g7bwetg052e6/1QHGRS519pdeSnWGIX9tA4/081a6d1d816016d0357a8720bfab1be4/people.jpeg",
                    altText: "Team putting hands in"
                  }, {
                    right: withCtx(() => [
                      createVNode(_component_Heading, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" our mission ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        tag: "h2",
                        size: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Built specifically for your needs. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, " Our mission is to provide cost-effective and high-quality solutions to our clients' business staffing needs by leveraging the expertise of our global team of professionals. "),
                      createVNode(_component_CheckBubble, { items: ["Fixed Hiring Fee", "$0 retainer"] })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Row, { background: "light" }, {
                default: withCtx(() => [
                  createVNode(_component_Heading, {
                    size: "xl",
                    tag: "h2",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Frequently Asked Questions")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FAQ)
                ]),
                _: 1
              }),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Services.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "StartHiring",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const loadTallyEmbed = () => {
        const embedScriptUrl = "https://tally.so/widgets/embed.js";
        let script = document.querySelector(`script[src="${embedScriptUrl}"]`);
        if (!script) {
          script = document.createElement("script");
          script.src = embedScriptUrl;
          document.body.appendChild(script);
        }
        script.onload = () => {
          if (typeof Tally !== "undefined") {
            Tally.loadEmbeds();
          }
        };
      };
      loadTallyEmbed();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_Button = __unplugin_components_3$1;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, { class: "pt-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "span",
                    tag: "h6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` contact us `);
                      } else {
                        return [
                          createTextVNode(" contact us ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "2xl",
                    tag: "h2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Ready to get started hiring? `);
                      } else {
                        return [
                          createTextVNode(" Ready to get started hiring? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="body-paragraph max-w-4xl"${_scopeId2}>Say goodbye to the stress of hiring global talent. Use the form below to schedule a call with our team and learn how we can help you hire the best talent. Our email is also below if you would prefer that.</p>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "text",
                    link: "mailto:operations@outworkstaffing.com"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email operations@outworkstaffing.com`);
                      } else {
                        return [
                          createTextVNode("Email operations@outworkstaffing.com")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<iframe class="min-h-[500px]" data-tally-src="https://tally.so/embed/w72xp2?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1" loading="lazy" width="100%" height="1" frameborder="0" marginheight="0" marginwidth="0" title="Get Started Hiring"${_scopeId2}></iframe>`);
                } else {
                  return [
                    createVNode(_component_Heading, {
                      size: "span",
                      tag: "h6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" contact us ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Heading, {
                      size: "2xl",
                      tag: "h2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ready to get started hiring? ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "body-paragraph max-w-4xl" }, "Say goodbye to the stress of hiring global talent. Use the form below to schedule a call with our team and learn how we can help you hire the best talent. Our email is also below if you would prefer that."),
                    createVNode(_component_Button, {
                      type: "text",
                      link: "mailto:operations@outworkstaffing.com"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Email operations@outworkstaffing.com")
                      ]),
                      _: 1
                    }),
                    createVNode("iframe", {
                      class: "min-h-[500px]",
                      "data-tally-src": "https://tally.so/embed/w72xp2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
                      loading: "lazy",
                      width: "100%",
                      height: "1",
                      frameborder: "0",
                      marginheight: "0",
                      marginwidth: "0",
                      title: "Get Started Hiring"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, { class: "pt-12" }, {
                default: withCtx(() => [
                  createVNode(_component_Heading, {
                    size: "span",
                    tag: "h6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" contact us ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Heading, {
                    size: "2xl",
                    tag: "h2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Ready to get started hiring? ")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "body-paragraph max-w-4xl" }, "Say goodbye to the stress of hiring global talent. Use the form below to schedule a call with our team and learn how we can help you hire the best talent. Our email is also below if you would prefer that."),
                  createVNode(_component_Button, {
                    type: "text",
                    link: "mailto:operations@outworkstaffing.com"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Email operations@outworkstaffing.com")
                    ]),
                    _: 1
                  }),
                  createVNode("iframe", {
                    class: "min-h-[500px]",
                    "data-tally-src": "https://tally.so/embed/w72xp2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
                    loading: "lazy",
                    width: "100%",
                    height: "1",
                    frameborder: "0",
                    marginheight: "0",
                    marginwidth: "0",
                    title: "Get Started Hiring"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/StartHiring.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = defineComponent({
  name: "InfiniteSlideBar",
  props: {
    barStyle: {
      type: Object,
      default: () => {
      }
    },
    duration: {
      type: String,
      default: "12s"
    },
    direction: {
      type: String,
      default: "normal"
    },
    delay: {
      type: String,
      default: "0s"
    },
    paused: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
      customStyle: {
        ...props.barStyle,
        "animation-duration": props.duration,
        "animation-direction": props.direction,
        "animation-delay": props.delay,
        "animation-play-state": props.paused ? "paused" : "running"
      }
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vifnslb-container" }, _attrs))} data-v-4df947ca><div class="vifnslb-element" style="${ssrRenderStyle(_ctx.customStyle)}" data-v-4df947ca><!--[-->`);
  ssrRenderList(2, (index) => {
    _push(`<div class="vifnslb-bar" data-v-4df947ca>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue3-infinite-slide-bar/src/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const InfiniteSlideBar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4df947ca"]]);
const _sfc_main$6 = {
  __name: "TestimonialLogoCloud",
  __ssrInlineRender: true,
  setup(__props) {
    let logos = ["avanti.svg", "primepay.png", "swivl.svg", "attune.svg", "truesafe.webp", "sparx.png", "tcc.png", "eight.svg", "encore.png", "insight.png", "wil.webp"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(InfiniteSlideBar), mergeProps({
        barStyle: { padding: "5px 0" },
        duration: "60s",
        class: "logos white-fade"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(logos), (logo) => {
              _push2(`<div class="inline-block mr-8 mb-4 rounded-3xl logo-parent"${_scopeId}><img${ssrRenderAttr("src", "/logos/" + logo)} alt="Logo" class="logo"${_scopeId}></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(logos), (logo) => {
                return openBlock(), createBlock("div", {
                  key: logo,
                  class: "inline-block mr-8 mb-4 rounded-3xl logo-parent"
                }, [
                  createVNode("img", {
                    src: "/logos/" + logo,
                    alt: "Logo",
                    class: "logo"
                  }, null, 8, ["src"])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/TestimonialLogoCloud.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "StoryCards",
  __ssrInlineRender: true,
  props: {
    stories: Array
  },
  setup(__props) {
    function computeSubTitle($type, $industry) {
      if ($type && $industry) {
        return $type + " Hire";
      } else {
        if ($type) {
          return $type;
        } else {
          return $industry;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, _attrs))} data-v-d5d3cee0><!--[-->`);
      ssrRenderList(__props.stories, (story) => {
        _push(`<div class="transition hover:scale-[1.025]" data-v-d5d3cee0><a${ssrRenderAttr("href", "/success-stories/" + story.slug)} class="h-full" data-v-d5d3cee0><article class="bg-white rounded border border-gray-200" data-v-d5d3cee0><div class="blog-post" data-v-d5d3cee0><div class="image-part bg-cover bg-center rounded hidden md:block" style="${ssrRenderStyle({ backgroundImage: "url(" + story.img + ")" })}" data-v-d5d3cee0></div><div class="p-4 grid gap-1" data-v-d5d3cee0><h2 class="text-md font-bold" data-v-d5d3cee0>${ssrInterpolate(story.title)}</h2><span class="text-sm leading-6 rounded-xl text-primary font-bold" data-v-d5d3cee0>${ssrInterpolate(computeSubTitle(
          story.type,
          story.industry
        ))}</span></div></div></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/StoryCards.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const StoryCards = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d5d3cee0"]]);
const _sfc_main$4 = {
  __name: "SuccessStories",
  __ssrInlineRender: true,
  props: {
    stories: Array,
    logos: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_Fifty = __unplugin_components_4;
      const _component_Button = __unplugin_components_3$1;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, {
              background: "white",
              header: "false"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-w-4xl mx-auto text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Global Recruitment Success Stories`);
                      } else {
                        return [
                          createTextVNode("Global Recruitment Success Stories")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6"${_scopeId2}>Discover how companies are leveraging global talent in major ways</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                      createVNode(_component_Heading, {
                        size: "xl",
                        class: "text-center text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Global Recruitment Success Stories")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Discover how companies are leveraging global talent in major ways")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="max-w-7xl mx-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              logos: __props.logos,
              class: "white-fade"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, {
                    imageLocation: "left",
                    imageMobile: "false",
                    imageUrl: "https://images.unsplash.com/photo-1545112969-bdd91ef544c7?q=80&w=4471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    altText: "Men sitting around computer"
                  }, {
                    right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-xl text-left text-body mb-6 leading-8"${_scopeId3}>&quot;Outsourcing has been a game-changer for web SaaS, significantly boosting our profit margins and project speed remarkably. The exceptional talent and efficiency provided by Outwork Staffing have enabled us to deliver superior quality websites at an unprecedented pace, truly exceeding our clients&#39; expectations.&quot; </p><div class="relative flex items-center gap-x-4 mx-auto mb-6"${_scopeId3}><img src="https://ik.imagekit.io/jcj/paul_k47Jf9F7Iu.jpeg?updatedAt=1705593651175" alt="" class="h-10 w-10 rounded-full bg-gray-50"${_scopeId3}><div class="text-sm leading-6"${_scopeId3}><p class="font-semibold text-heading text-xl"${_scopeId3}><span class="absolute inset-0"${_scopeId3}></span> Paul Cox </p><p class="text-gray-600"${_scopeId3}>Founder, The Church Co</p></div></div>`);
                        _push4(ssrRenderComponent(_component_Button, { link: "https://outworkstaffing.com/success-stories/website-builder" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Open Full Case Study`);
                            } else {
                              return [
                                createTextVNode("Open Full Case Study")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("p", { class: "text-xl text-left text-body mb-6 leading-8" }, `"Outsourcing has been a game-changer for web SaaS, significantly boosting our profit margins and project speed remarkably. The exceptional talent and efficiency provided by Outwork Staffing have enabled us to deliver superior quality websites at an unprecedented pace, truly exceeding our clients' expectations." `),
                          createVNode("div", { class: "relative flex items-center gap-x-4 mx-auto mb-6" }, [
                            createVNode("img", {
                              src: "https://ik.imagekit.io/jcj/paul_k47Jf9F7Iu.jpeg?updatedAt=1705593651175",
                              alt: "",
                              class: "h-10 w-10 rounded-full bg-gray-50"
                            }),
                            createVNode("div", { class: "text-sm leading-6" }, [
                              createVNode("p", { class: "font-semibold text-heading text-xl" }, [
                                createVNode("span", { class: "absolute inset-0" }),
                                createTextVNode(" Paul Cox ")
                              ]),
                              createVNode("p", { class: "text-gray-600" }, "Founder, The Church Co")
                            ])
                          ]),
                          createVNode(_component_Button, { link: "https://outworkstaffing.com/success-stories/website-builder" }, {
                            default: withCtx(() => [
                              createTextVNode("Open Full Case Study")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, {
                      imageLocation: "left",
                      imageMobile: "false",
                      imageUrl: "https://images.unsplash.com/photo-1545112969-bdd91ef544c7?q=80&w=4471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      altText: "Men sitting around computer"
                    }, {
                      right: withCtx(() => [
                        createVNode("p", { class: "text-xl text-left text-body mb-6 leading-8" }, `"Outsourcing has been a game-changer for web SaaS, significantly boosting our profit margins and project speed remarkably. The exceptional talent and efficiency provided by Outwork Staffing have enabled us to deliver superior quality websites at an unprecedented pace, truly exceeding our clients' expectations." `),
                        createVNode("div", { class: "relative flex items-center gap-x-4 mx-auto mb-6" }, [
                          createVNode("img", {
                            src: "https://ik.imagekit.io/jcj/paul_k47Jf9F7Iu.jpeg?updatedAt=1705593651175",
                            alt: "",
                            class: "h-10 w-10 rounded-full bg-gray-50"
                          }),
                          createVNode("div", { class: "text-sm leading-6" }, [
                            createVNode("p", { class: "font-semibold text-heading text-xl" }, [
                              createVNode("span", { class: "absolute inset-0" }),
                              createTextVNode(" Paul Cox ")
                            ]),
                            createVNode("p", { class: "text-gray-600" }, "Founder, The Church Co")
                          ])
                        ]),
                        createVNode(_component_Button, { link: "https://outworkstaffing.com/success-stories/website-builder" }, {
                          default: withCtx(() => [
                            createTextVNode("Open Full Case Study")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Heading, {
                    size: "xl",
                    class: "text-center mb-6 text-heading"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Latest Success Stories`);
                      } else {
                        return [
                          createTextVNode("Latest Success Stories")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(StoryCards, {
                    stories: __props.stories,
                    class: "my-6"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "mb-12" }, [
                      createVNode(_component_Heading, {
                        size: "xl",
                        class: "text-center mb-6 text-heading"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Latest Success Stories")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(StoryCards, {
                      stories: __props.stories,
                      class: "my-6"
                    }, null, 8, ["stories"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, {
                background: "white",
                header: "false"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                    createVNode(_component_Heading, {
                      size: "xl",
                      class: "text-center text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Global Recruitment Success Stories")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Discover how companies are leveraging global talent in major ways")
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "max-w-7xl mx-auto text-center" }, [
                createVNode(_sfc_main$6, {
                  logos: __props.logos,
                  class: "white-fade"
                }, null, 8, ["logos"])
              ]),
              createVNode(_component_Row, null, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, {
                    imageLocation: "left",
                    imageMobile: "false",
                    imageUrl: "https://images.unsplash.com/photo-1545112969-bdd91ef544c7?q=80&w=4471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    altText: "Men sitting around computer"
                  }, {
                    right: withCtx(() => [
                      createVNode("p", { class: "text-xl text-left text-body mb-6 leading-8" }, `"Outsourcing has been a game-changer for web SaaS, significantly boosting our profit margins and project speed remarkably. The exceptional talent and efficiency provided by Outwork Staffing have enabled us to deliver superior quality websites at an unprecedented pace, truly exceeding our clients' expectations." `),
                      createVNode("div", { class: "relative flex items-center gap-x-4 mx-auto mb-6" }, [
                        createVNode("img", {
                          src: "https://ik.imagekit.io/jcj/paul_k47Jf9F7Iu.jpeg?updatedAt=1705593651175",
                          alt: "",
                          class: "h-10 w-10 rounded-full bg-gray-50"
                        }),
                        createVNode("div", { class: "text-sm leading-6" }, [
                          createVNode("p", { class: "font-semibold text-heading text-xl" }, [
                            createVNode("span", { class: "absolute inset-0" }),
                            createTextVNode(" Paul Cox ")
                          ]),
                          createVNode("p", { class: "text-gray-600" }, "Founder, The Church Co")
                        ])
                      ]),
                      createVNode(_component_Button, { link: "https://outworkstaffing.com/success-stories/website-builder" }, {
                        default: withCtx(() => [
                          createTextVNode("Open Full Case Study")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Row, { background: "light" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-12" }, [
                    createVNode(_component_Heading, {
                      size: "xl",
                      class: "text-center mb-6 text-heading"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Latest Success Stories")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(StoryCards, {
                    stories: __props.stories,
                    class: "my-6"
                  }, null, 8, ["stories"])
                ]),
                _: 1
              }),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/SuccessStories.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "SalaryChart",
  __ssrInlineRender: true,
  props: {
    placed_salary: Number,
    us_salary: Number
  },
  setup(__props) {
    let props = __props;
    let percentSaved = Math.round((props.us_salary - props.placed_salary) / props.us_salary * 100);
    let pretty_us_salary = (props.us_salary * 12).toLocaleString();
    let barHeight = computed(() => `${100 - percentSaved}%`);
    console.log(barHeight);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white rounded border border-slate-300 aspect-auto" }, _attrs))}><div class="bg-grid absolute top-0 left-0 w-full h-full"></div><div class="price-chart mt-8"><div class="y-axis pl-4"><span>$${ssrInterpolate(unref(pretty_us_salary))}</span><span>$${ssrInterpolate((unref(props).us_salary * 6).toLocaleString())}</span><span>$0</span></div><div class="us-bar"><div><span class="bar-text">$${ssrInterpolate(unref(props).us_salary.toLocaleString())}/month</span></div></div><div class="overseas-bar"><span class="savings-text text-lg">${ssrInterpolate(unref(percentSaved))}% in total savings </span><div style="${ssrRenderStyle({ height: unref(barHeight) })}"><span class="bar-text">$${ssrInterpolate(unref(props).placed_salary.toLocaleString())}/month</span></div></div><div class="bottom"></div><div class="bottom title">Annual US Salary</div><div class="bottom title">Annual Overseas Salary</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SalaryChart.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SavingsRow",
  __ssrInlineRender: true,
  props: {
    hiredSalary: Number,
    usSalary: Number,
    title: String
  },
  setup(__props) {
    const props = __props;
    let annualSavings = (props.usSalary - props.hiredSalary) * 12;
    props.usSalary - props.hiredSalary;
    let savingsPercentage = Math.round(annualSavings / props.usSalary * 100);
    props.hiredSalary * 0.35 * 12;
    let formattedAnnualSavings = "$" + annualSavings.toLocaleString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Row = __unplugin_components_1;
      const _component_Heading = __unplugin_components_2;
      const _component_Fifty = __unplugin_components_4;
      if (__props.hiredSalary != null) {
        _push(ssrRenderComponent(_component_Row, mergeProps({ background: "light" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Heading, {
                size: "lg",
                class: "text-4xl max-w-5xl mx-auto text-headings leading-snug mb-0 text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Outwork saved this company ${ssrInterpolate(unref(formattedAnnualSavings))} on salary annually! `);
                  } else {
                    return [
                      createTextVNode("Outwork saved this company " + toDisplayString(unref(formattedAnnualSavings)) + " on salary annually! ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Fifty, null, {
                left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-xl text-body mb-4"${_scopeId2}>According to salary data in the United States, the average salary for a ${ssrInterpolate(props.title)} is $${ssrInterpolate(props.usSalary.toLocaleString())}/month, or $${ssrInterpolate((props.usSalary * 12).toLocaleString())}/year, and is rising every year. </p><p class="text-xl text-body mb-4"${_scopeId2}>Outwork helped this compay hire a <span class="font-bold underline decoration-primary"${_scopeId2}>${ssrInterpolate(props.title)} overseas for $${ssrInterpolate(props.hiredSalary.toLocaleString())}/month.</span> That is a salary expense reduction of ${ssrInterpolate(unref(savingsPercentage))}%.</p><p class="text-xl text-body"${_scopeId2}>Outwork charged the client 35% of the annual salary to recruit them a${ssrInterpolate(props.jobTitle)} - which came out to a $${ssrInterpolate((props.hiredSalary * 0.35 * 12).toLocaleString())} recruitment fee. Factoring in that fee, <span class="font-bold underline decoration-primary"${_scopeId2}>this company is on track to save $${ssrInterpolate((props.usSalary * 12 - props.hiredSalary * 12 - props.hiredSalary * 0.35 * 12).toLocaleString())} just this year.</span></p>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-xl text-body mb-4" }, "According to salary data in the United States, the average salary for a " + toDisplayString(props.title) + " is $" + toDisplayString(props.usSalary.toLocaleString()) + "/month, or $" + toDisplayString((props.usSalary * 12).toLocaleString()) + "/year, and is rising every year. ", 1),
                      createVNode("p", { class: "text-xl text-body mb-4" }, [
                        createTextVNode("Outwork helped this compay hire a "),
                        createVNode("span", { class: "font-bold underline decoration-primary" }, toDisplayString(props.title) + " overseas for $" + toDisplayString(props.hiredSalary.toLocaleString()) + "/month.", 1),
                        createTextVNode(" That is a salary expense reduction of " + toDisplayString(unref(savingsPercentage)) + "%.", 1)
                      ]),
                      createVNode("p", { class: "text-xl text-body" }, [
                        createTextVNode("Outwork charged the client 35% of the annual salary to recruit them a" + toDisplayString(props.jobTitle) + " - which came out to a $" + toDisplayString((props.hiredSalary * 0.35 * 12).toLocaleString()) + " recruitment fee. Factoring in that fee, ", 1),
                        createVNode("span", { class: "font-bold underline decoration-primary" }, "this company is on track to save $" + toDisplayString((props.usSalary * 12 - props.hiredSalary * 12 - props.hiredSalary * 0.35 * 12).toLocaleString()) + " just this year.", 1)
                      ])
                    ];
                  }
                }),
                right: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      us_salary: props.usSalary,
                      placed_salary: props.hiredSalary
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        us_salary: props.usSalary,
                        placed_salary: props.hiredSalary
                      }, null, 8, ["us_salary", "placed_salary"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Heading, {
                  size: "lg",
                  class: "text-4xl max-w-5xl mx-auto text-headings leading-snug mb-0 text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Outwork saved this company " + toDisplayString(unref(formattedAnnualSavings)) + " on salary annually! ", 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Fifty, null, {
                  left: withCtx(() => [
                    createVNode("p", { class: "text-xl text-body mb-4" }, "According to salary data in the United States, the average salary for a " + toDisplayString(props.title) + " is $" + toDisplayString(props.usSalary.toLocaleString()) + "/month, or $" + toDisplayString((props.usSalary * 12).toLocaleString()) + "/year, and is rising every year. ", 1),
                    createVNode("p", { class: "text-xl text-body mb-4" }, [
                      createTextVNode("Outwork helped this compay hire a "),
                      createVNode("span", { class: "font-bold underline decoration-primary" }, toDisplayString(props.title) + " overseas for $" + toDisplayString(props.hiredSalary.toLocaleString()) + "/month.", 1),
                      createTextVNode(" That is a salary expense reduction of " + toDisplayString(unref(savingsPercentage)) + "%.", 1)
                    ]),
                    createVNode("p", { class: "text-xl text-body" }, [
                      createTextVNode("Outwork charged the client 35% of the annual salary to recruit them a" + toDisplayString(props.jobTitle) + " - which came out to a $" + toDisplayString((props.hiredSalary * 0.35 * 12).toLocaleString()) + " recruitment fee. Factoring in that fee, ", 1),
                      createVNode("span", { class: "font-bold underline decoration-primary" }, "this company is on track to save $" + toDisplayString((props.usSalary * 12 - props.hiredSalary * 12 - props.hiredSalary * 0.35 * 12).toLocaleString()) + " just this year.", 1)
                    ])
                  ]),
                  right: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      us_salary: props.usSalary,
                      placed_salary: props.hiredSalary
                    }, null, 8, ["us_salary", "placed_salary"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/blocks/SavingsRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SuccessStory",
  __ssrInlineRender: true,
  props: {
    story: Array,
    salary: Array
  },
  setup(__props) {
    const props = __props;
    let story = props.story[0];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Main = _sfc_main$w;
      const _component_Row = __unplugin_components_1;
      const _component_Fifty = __unplugin_components_4;
      const _component_Heading = __unplugin_components_2;
      const _component_CTA = _sfc_main$r;
      _push(ssrRenderComponent(_component_Main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Row, {
              background: "light",
              header: "false",
              class: "py-12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Fifty, {
                    imageLocation: "right",
                    imageUrl: unref(story).image
                  }, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid gap-4"${_scopeId3}><div${_scopeId3}><span class="bg-white rounded-xl p-2 text-primary font-bold"${_scopeId3}>Success Story</span></div>`);
                        _push4(ssrRenderComponent(_component_Heading, {
                          size: "lg",
                          class: "text-4xl text-headings leading-snug mb-0",
                          style: { "margin-bottom": "0px !important" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(story).title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(story).title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<p class="text-xl text-headings"${_scopeId3}>${ssrInterpolate(unref(story).desc)}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid gap-4" }, [
                            createVNode("div", null, [
                              createVNode("span", { class: "bg-white rounded-xl p-2 text-primary font-bold" }, "Success Story")
                            ]),
                            createVNode(_component_Heading, {
                              size: "lg",
                              class: "text-4xl text-headings leading-snug mb-0",
                              style: { "margin-bottom": "0px !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(story).title), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "text-xl text-headings" }, toDisplayString(unref(story).desc), 1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Fifty, {
                      imageLocation: "right",
                      imageUrl: unref(story).image
                    }, {
                      left: withCtx(() => [
                        createVNode("div", { class: "grid gap-4" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "bg-white rounded-xl p-2 text-primary font-bold" }, "Success Story")
                          ]),
                          createVNode(_component_Heading, {
                            size: "lg",
                            class: "text-4xl text-headings leading-snug mb-0",
                            style: { "margin-bottom": "0px !important" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(story).title), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "text-xl text-headings" }, toDisplayString(unref(story).desc), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["imageUrl"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(story).intro != null) {
              _push2(ssrRenderComponent(_component_Row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="prose text-lg leading-9 max-w-3xl mx-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(RichTextRenderer), {
                      document: unref(story).intro
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "prose text-lg leading-9 max-w-3xl mx-auto" }, [
                        createVNode(unref(RichTextRenderer), {
                          document: unref(story).intro
                        }, null, 8, ["document"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$2, {
              hiredSalary: __props.salary.hiredSalary,
              usSalary: __props.salary.usSalary,
              title: unref(story).jobTitle
            }, null, _parent2, _scopeId));
            if (unref(story).content != null) {
              _push2(ssrRenderComponent(_component_Row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="prose text-lg leading-9 max-w-3xl mx-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(RichTextRenderer), {
                      document: unref(story).content
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "prose text-lg leading-9 max-w-3xl mx-auto" }, [
                        createVNode(unref(RichTextRenderer), {
                          document: unref(story).content
                        }, null, 8, ["document"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Row, {
                background: "light",
                header: "false",
                class: "py-12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Fifty, {
                    imageLocation: "right",
                    imageUrl: unref(story).image
                  }, {
                    left: withCtx(() => [
                      createVNode("div", { class: "grid gap-4" }, [
                        createVNode("div", null, [
                          createVNode("span", { class: "bg-white rounded-xl p-2 text-primary font-bold" }, "Success Story")
                        ]),
                        createVNode(_component_Heading, {
                          size: "lg",
                          class: "text-4xl text-headings leading-snug mb-0",
                          style: { "margin-bottom": "0px !important" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(story).title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("p", { class: "text-xl text-headings" }, toDisplayString(unref(story).desc), 1)
                      ])
                    ]),
                    _: 1
                  }, 8, ["imageUrl"])
                ]),
                _: 1
              }),
              unref(story).intro != null ? (openBlock(), createBlock(_component_Row, { key: 0 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "prose text-lg leading-9 max-w-3xl mx-auto" }, [
                    createVNode(unref(RichTextRenderer), {
                      document: unref(story).intro
                    }, null, 8, ["document"])
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_sfc_main$2, {
                hiredSalary: __props.salary.hiredSalary,
                usSalary: __props.salary.usSalary,
                title: unref(story).jobTitle
              }, null, 8, ["hiredSalary", "usSalary", "title"]),
              unref(story).content != null ? (openBlock(), createBlock(_component_Row, { key: 1 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "prose text-lg leading-9 max-w-3xl mx-auto" }, [
                    createVNode(unref(RichTextRenderer), {
                      document: unref(story).content
                    }, null, 8, ["document"])
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_CTA)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/SuccessStory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Main = _sfc_main$w;
  const _component_Row = __unplugin_components_1;
  const _component_Heading = __unplugin_components_2;
  const _component_Button = __unplugin_components_3$1;
  const _component_Fifty = __unplugin_components_4;
  const _component_CheckBubble = __unplugin_components_5$1;
  const _component_FAQ = _sfc_main$c;
  const _component_CTA = _sfc_main$r;
  _push(ssrRenderComponent(_component_Main, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Row, {
          background: "white",
          header: "true"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-4xl mx-auto text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Heading, {
                size: "2xl",
                class: "text-center text-heading"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Why Outsource? `);
                  } else {
                    return [
                      createTextVNode("Why Outsource? ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<p class="text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6"${_scopeId2}>Quickly assemble teams from around the globe meeting your needs and save thousands in monthly payroll. </p>`);
              _push3(ssrRenderComponent(_component_Button, {
                class: "w-full sm:w-auto",
                link: "/start-hiring"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Start Hiring`);
                  } else {
                    return [
                      createTextVNode("Start Hiring")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                  createVNode(_component_Heading, {
                    size: "2xl",
                    class: "text-center text-heading"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Why Outsource? ")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Quickly assemble teams from around the globe meeting your needs and save thousands in monthly payroll. "),
                  createVNode(_component_Button, {
                    class: "w-full sm:w-auto",
                    link: "/start-hiring"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Start Hiring")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Fifty, {
                imageLocation: "left",
                imageMobile: "true",
                imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                altText: "Team working"
              }, {
                right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Heading, {
                      size: "span",
                      tag: "h6"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` DON&#39;T COMPROMISE ON YOUR TEAM `);
                        } else {
                          return [
                            createTextVNode(" DON'T COMPROMISE ON YOUR TEAM ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Heading, {
                      size: "xl",
                      tag: "h2"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Save 70-80% on salaries. `);
                        } else {
                          return [
                            createTextVNode(" Save 70-80% on salaries. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<p class="body-paragraph"${_scopeId3}>Your team needs quality staff. No way around it. Hire globally and let your dollar go further. There is a reason 92% of the top companies use outsourcing. </p>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      type: "text",
                      link: "/services"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Learn More`);
                        } else {
                          return [
                            createTextVNode("Learn More")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Heading, {
                        size: "span",
                        tag: "h6"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" DON'T COMPROMISE ON YOUR TEAM ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Heading, {
                        size: "xl",
                        tag: "h2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save 70-80% on salaries. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, "Your team needs quality staff. No way around it. Hire globally and let your dollar go further. There is a reason 92% of the top companies use outsourcing. "),
                      createVNode(_component_Button, {
                        type: "text",
                        link: "/services"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Learn More")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Fifty, {
                  imageLocation: "left",
                  imageMobile: "true",
                  imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                  altText: "Team working"
                }, {
                  right: withCtx(() => [
                    createVNode(_component_Heading, {
                      size: "span",
                      tag: "h6"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" DON'T COMPROMISE ON YOUR TEAM ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Heading, {
                      size: "xl",
                      tag: "h2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save 70-80% on salaries. ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "body-paragraph" }, "Your team needs quality staff. No way around it. Hire globally and let your dollar go further. There is a reason 92% of the top companies use outsourcing. "),
                    createVNode(_component_Button, {
                      type: "text",
                      link: "/services"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Learn More")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Fifty, null, {
                left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Heading, {
                      tag: "h2",
                      size: "xl"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Quality team members ready to work hard. `);
                        } else {
                          return [
                            createTextVNode(" Quality team members ready to work hard. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<p class="body-paragraph"${_scopeId3}> In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. </p>`);
                  } else {
                    return [
                      createVNode(_component_Heading, {
                        tag: "h2",
                        size: "xl"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Quality team members ready to work hard. ")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                    ];
                  }
                }),
                right: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Fifty, null, {
                  left: withCtx(() => [
                    createVNode(_component_Heading, {
                      tag: "h2",
                      size: "xl"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Quality team members ready to work hard. ")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                  ]),
                  right: withCtx(() => [
                    createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Row, { background: "light" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Heading, {
                size: "xl",
                tag: "h2",
                class: "text-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Frequently Asked Questions`);
                  } else {
                    return [
                      createTextVNode(" Frequently Asked Questions")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_FAQ, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Heading, {
                  size: "xl",
                  tag: "h2",
                  class: "text-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Frequently Asked Questions")
                  ]),
                  _: 1
                }),
                createVNode(_component_FAQ)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CTA, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Row, {
            background: "white",
            header: "true"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-4xl mx-auto text-center" }, [
                createVNode(_component_Heading, {
                  size: "2xl",
                  class: "text-center text-heading"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Why Outsource? ")
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "text-xl max-w-2xl mx-auto text-center mx-12 text-body mb-6" }, "Quickly assemble teams from around the globe meeting your needs and save thousands in monthly payroll. "),
                createVNode(_component_Button, {
                  class: "w-full sm:w-auto",
                  link: "/start-hiring"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Start Hiring")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_Row, { background: "light" }, {
            default: withCtx(() => [
              createVNode(_component_Fifty, {
                imageLocation: "left",
                imageMobile: "true",
                imageUrl: "https://ik.imagekit.io/outwork/office.webp?updatedAt=1701878778749&tr=w-1200%2Ch-675%2Cfo-auto",
                altText: "Team working"
              }, {
                right: withCtx(() => [
                  createVNode(_component_Heading, {
                    size: "span",
                    tag: "h6"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" DON'T COMPROMISE ON YOUR TEAM ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Heading, {
                    size: "xl",
                    tag: "h2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Save 70-80% on salaries. ")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "body-paragraph" }, "Your team needs quality staff. No way around it. Hire globally and let your dollar go further. There is a reason 92% of the top companies use outsourcing. "),
                  createVNode(_component_Button, {
                    type: "text",
                    link: "/services"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Learn More")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_Row, null, {
            default: withCtx(() => [
              createVNode(_component_Fifty, null, {
                left: withCtx(() => [
                  createVNode(_component_Heading, {
                    tag: "h2",
                    size: "xl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Quality team members ready to work hard. ")
                    ]),
                    _: 1
                  }),
                  createVNode("p", { class: "body-paragraph" }, " In the 21st century, global outsourcing looks like hiring amazing full-time employees with quality english and a deep culture fit for between $8,500 and $15,000 a year. ")
                ]),
                right: withCtx(() => [
                  createVNode(_component_CheckBubble, { items: ["Extremely high quality english", "Deeply integrated into your systems", "Relevant experience & culture fit"] })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_Row, { background: "light" }, {
            default: withCtx(() => [
              createVNode(_component_Heading, {
                size: "xl",
                tag: "h2",
                class: "text-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Frequently Asked Questions")
                ]),
                _: 1
              }),
              createVNode(_component_FAQ)
            ]),
            _: 1
          }),
          createVNode(_component_CTA)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Why.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Why = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Why
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/404.vue": __vite_glob_0_0, "./Pages/About.vue": __vite_glob_0_1, "./Pages/FormComplete.vue": __vite_glob_0_2, "./Pages/Guide.vue": __vite_glob_0_3, "./Pages/Guide2.vue": __vite_glob_0_4, "./Pages/Home.vue": __vite_glob_0_5, "./Pages/MeetingBooked.vue": __vite_glob_0_6, "./Pages/Services.vue": __vite_glob_0_7, "./Pages/StartHiring.vue": __vite_glob_0_8, "./Pages/SuccessStories.vue": __vite_glob_0_9, "./Pages/SuccessStory.vue": __vite_glob_0_10, "./Pages/Why.vue": __vite_glob_0_11 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
