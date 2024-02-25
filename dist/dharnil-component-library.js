import { openBlock as e, createElementBlock as o } from "vue";
const r = (t, n) => {
  const c = t.__vccOpts || t;
  for (const [a, _] of n)
    c[a] = _;
  return c;
}, s = {};
function l(t, n) {
  return e(), o("button", null, "Button UI");
}
const f = /* @__PURE__ */ r(s, [["render", l], ["__scopeId", "data-v-a28f0cdf"]]), u = {};
function i(t, n) {
  return e(), o("label", null, "Label UI");
}
const d = /* @__PURE__ */ r(u, [["render", i], ["__scopeId", "data-v-c334415a"]]), m = {
  install: (t) => {
    t.component("LibButton", f), t.component("LibLabel", d);
  }
};
export {
  f as LibButton,
  d as LibLabel,
  m as default
};
