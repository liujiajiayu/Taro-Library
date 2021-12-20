(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/collect/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=65d3c54e */ "./src/pages/collect/index.vue?vue&type=template&id=65d3c54e");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/collect/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_65d3c54e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=65d3c54e&lang=css */ "./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css");





_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/collect/index.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = ({
  setup: function setup() {
    var store = Object(vuex__WEBPACK_IMPORTED_MODULE_1__[/* useStore */ "b"])();
    var myFollow = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* computed */ "f"])(function () {
      return store.state.myFollow;
    });

    var del2follow = function del2follow(item) {
      store.commit("DEL2_TO_FOLLOW", item);
    };

    var toDetail = function toDetail(index) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.navigateTo({
        url: "/pages/detail/detail?idx=".concat(index)
      });
    };

    return {
      myFollow: myFollow,
      del2follow: del2follow,
      toDetail: toDetail
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  class: "index"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "E"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", _hoisted_1, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])(vue__WEBPACK_IMPORTED_MODULE_0__[/* Fragment */ "b"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* renderList */ "C"])($setup.myFollow, function (item, index) {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "A"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "g"])("view", {
      class: "infiniteLi",
      key: item.id
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("img", {
      src: "https://picsum.photos/id/".concat(item.id, "/200"),
      alt: "",
      onClick: function onClick($event) {
        return $setup.toDetail(index);
      }
    }, null, 8
    /* PROPS */
    , ["src", "onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])("view", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "k"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "K"])(item.id + "-" + item.author) + " ", 1
    /* TEXT */
    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "l"])(_component_nut_icon, {
      name: "del",
      key: item.id,
      onClick: function onClick($event) {
        return $setup.del2follow(item);
      },
      class: "del"
    }, null, 8
    /* PROPS */
    , ["onClick"])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-0-2!./node_modules/vue-loader/dist??ref--10-0!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collect/index.vue":
/*!*************************************!*\
  !*** ./src/pages/collect/index.vue ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/collect/index.vue");


var config = {"navigationBarTitleText":"收藏"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/collect/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css":
/*!*********************************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--4-oneOf-0-2!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=65d3c54e&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=style&index=0&id=65d3c54e&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_0_2_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_65d3c54e_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/collect/index.vue?vue&type=template&id=65d3c54e":
/*!*******************************************************************!*\
  !*** ./src/pages/collect/index.vue?vue&type=template&id=65d3c54e ***!
  \*******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=65d3c54e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/collect/index.vue?vue&type=template&id=65d3c54e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_65d3c54e__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/collect/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map