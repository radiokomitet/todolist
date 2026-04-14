/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background: #e8ebef;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 24px;\n}\n\n.app {\n  width: min(100%, 1280px);\n  display: flex;\n  gap: 24px;\n  max-height: calc(100vh - 48px);\n  background: #f5f7fb;\n  border-radius: 28px;\n  overflow: hidden;\n  box-shadow: 0 40px 80px rgba(10, 18, 50, 0.24);\n}\n\n.sidebar {\n  width: 360px;\n  padding: 32px;\n  background: #12203c;\n  color: #f6f9ff;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar h2 {\n  font-size: 1.6rem;\n  letter-spacing: -0.03em;\n}\n\n#projects-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.project-button,\n.project-remove,\n.todo-remove,\n.form-button,\n#project-form button,\n#todo-form button {\n  border: none;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: transform 0.16s ease, filter 0.16s ease, box-shadow 0.16s ease;\n}\n\n.project-button {\n  flex: 1;\n  text-align: left;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, #1e2b52, #293a79);\n  color: #f8fbff;\n  font-weight: 600;\n}\n\n.project-button:hover,\n.project-remove:hover,\n.todo-remove:hover,\n#project-form button:hover,\n#todo-form button:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.05);\n}\n\n.project-button.active {\n  background: linear-gradient(135deg, #5d7bef, #3158cb);\n}\n\n.project-remove {\n  padding: 12px 16px;\n  background: #ff5f6d;\n  color: white;\n}\n\n.project-remove:hover {\n  background: #ff4558;\n}\n\n#project-form {\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n#project-form input {\n  width: 100%;\n  padding: 14px 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  background: rgba(255, 255, 255, 0.08);\n  color: #f8fbff;\n}\n\n#todo-form input,\n#todo-form select {\n  width: 100%;\n  padding: 16px 18px;\n  border-radius: 18px;\n  border: 1px solid #c8d1df;\n  background: #ffffff;\n  color: #1f2937;\n}\n\n#project-form input::placeholder {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n#todo-form input::placeholder,\n#todo-form select::placeholder {\n  color: #9ea6b8;\n}\n\n#project-form button,\n#todo-form button {\n  min-width: 140px;\n  padding: 16px 20px;\n  background: #5f7dff;\n  color: white;\n  font-weight: 600;\n  box-shadow: 0 12px 24px rgba(50, 70, 170, 0.18);\n}\n\n#mode-toggle {\n  border: none;\n  border-radius: 999px;\n  padding: 14px 20px;\n  background: #94a3b8;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 12px 24px rgba(56, 189, 248, 0.12);\n}\n\n#mode-toggle:hover {\n  filter: brightness(1.05);\n}\n\n.sidebar input,\n.sidebar select {\n  color: #f8fbff;\n}\n\n.main {\n  flex: 1;\n  padding: 42px;\n  overflow-y: auto;\n}\n\n.header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n\n.main h2 {\n  font-size: 2rem;\n  letter-spacing: -0.04em;\n}\n\n.subtitle {\n  color: #66708c;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n\n.todo {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  background: #ffffff;\n  padding: 28px 32px;\n  border-radius: 22px;\n  border-left: 6px solid gray;\n  box-shadow: 0 18px 36px rgba(34, 53, 110, 0.08);\n}\n\n.todo.high {\n  border-color: #ff5f6d;\n}\n\n.todo.medium {\n  border-color: #ffb347;\n}\n\n.todo.low {\n  border-color: #4ec97e;\n}\n\n.todo.completed {\n  opacity: 0.7;\n}\n\n.todo-content {\n  flex: 1;\n  min-width: 0;\n}\n\n.todo-content strong {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 8px;\n}\n\n.todo-content p {\n  margin-bottom: 10px;\n  color: #5d657b;\n}\n\n.todo-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n  color: #7a8192;\n}\n\n.priority-label {\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(95, 125, 255, 0.12);\n  color: #3f51cd;\n  text-transform: uppercase;\n  font-size: 0.78rem;\n  letter-spacing: 0.08em;\n}\n\n.todo-remove {\n  padding: 12px 18px;\n  background: #ff7463;\n  color: white;\n}\n\n.todo-remove:hover {\n  background: #ff593f;\n}\n\n.empty-state {\n  padding: 26px;\n  border-radius: 18px;\n  background: #f1f5fb;\n  border: 1px dashed #c8d1df;\n  color: #53617a;\n  text-align: center;\n  font-size: 1rem;\n}\n\nbody.dark {\n  background: #0f172a;\n  color: #e2e8f0;\n}\n\nbody.dark .app {\n  background: #111827;\n  box-shadow: 0 40px 80px rgba(15, 23, 42, 0.35);\n}\n\nbody.dark .main {\n  background: #1e293b;\n}\n\nbody.dark .sidebar {\n  background: #1a1a2e;\n  color: #e2e8f0;\n}\n\nbody.dark .project-button {\n  background: linear-gradient(135deg, #1e293b, #111827);\n  color: #e2e8f0;\n}\n\nbody.dark .project-button.active {\n  background: linear-gradient(135deg, #4338ca, #2563eb);\n}\n\nbody.dark .project-remove {\n  background: #d946ef;\n}\n\nbody.dark .project-remove:hover {\n  background: #c026d3;\n}\n\nbody.dark #project-form input {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: #334155;\n  color: #e2e8f0;\n}\n\nbody.dark #project-form input::placeholder {\n  color: rgba(226, 232, 240, 0.75);\n}\n\nbody.dark #todo-form input,\nbody.dark #todo-form select {\n  background: #111827;\n  border-color: #334155;\n  color: #e2e8f0;\n}\n\nbody.dark #todo-form input::placeholder,\nbody.dark #todo-form select::placeholder {\n  color: #94a3b8;\n}\n\nbody.dark #project-form button,\nbody.dark #todo-form button {\n  background: #4f46e5;\n  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.18);\n}\n\nbody.dark .todo {\n  background: #111827;\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.25);\n}\n\nbody.dark .todo-content p,\nbody.dark .todo-meta,\nbody.dark .empty-state {\n  color: #cbd5e1;\n}\n\nbody.dark .priority-label {\n  background: rgba(99, 102, 241, 0.12);\n  color: #c7d2fe;\n}\n\nbody.dark .todo-remove {\n  background: #f97316;\n}\n\nbody.dark .todo-remove:hover {\n  background: #ea580c;\n}\n\nbody.dark .empty-state {\n  background: #111827;\n  border-color: #334155;\n  color: #cbd5e1;\n}\n\n#todo-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  align-items: end;\n}\n\n.disabled {\n  opacity: 0.75;\n}\n\n#todo-form select {\n  max-width: 180px;\n}\n\n#todo-form button {\n  grid-column: span 2;\n}\n\n@media (max-width: 900px) {\n  .app {\n    flex-direction: column;\n    max-height: none;\n  }\n\n  .sidebar {\n    width: 100%;\n  }\n\n  #todo-form {\n    grid-template-columns: 1fr;\n  }\n\n  #todo-form button {\n    grid-column: span 1;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/factories/projectFactory.js"
/*!*****************************************!*\
  !*** ./src/factories/projectFactory.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name) {\n  return {\n    id: crypto.randomUUID(),\n    name: name,\n    todos: []\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/factories/projectFactory.js?\n}");

/***/ },

/***/ "./src/factories/todoFactory.js"
/*!**************************************!*\
  !*** ./src/factories/todoFactory.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, dueDate, priority) {\n  return {\n    id: crypto.randomUUID(),\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority,\n    completed: false\n  };\n}\n\n//# sourceURL=webpack://todolist/./src/factories/todoFactory.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/appState.js */ \"./src/modules/appState.js\");\n/* harmony import */ var _factories_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/todoFactory.js */ \"./src/factories/todoFactory.js\");\n/* harmony import */ var _ui_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dom.js */ \"./src/ui/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n_modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\ninitializeTheme();\n(0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_2__.render)();\nfunction initializeTheme() {\n  var theme = localStorage.getItem('todo_theme') || 'light';\n  applyTheme(theme);\n  var toggle = document.getElementById('mode-toggle');\n  if (toggle) {\n    toggle.addEventListener('click', function () {\n      var nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';\n      applyTheme(nextTheme);\n    });\n  }\n}\nfunction applyTheme(theme) {\n  document.body.classList.toggle('dark', theme === 'dark');\n  localStorage.setItem('todo_theme', theme);\n  var toggle = document.getElementById('mode-toggle');\n  if (toggle) {\n    toggle.textContent = theme === 'dark' ? 'Light mode' : 'Night mode';\n  }\n}\n\n// Add project\ndocument.getElementById('project-form').addEventListener('submit', function (e) {\n  e.preventDefault();\n  var input = document.getElementById('project-input');\n  _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(input.value);\n  input.value = '';\n  (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_2__.render)();\n});\n\n// Add todo\ndocument.getElementById('todo-form').addEventListener('submit', function (e) {\n  e.preventDefault();\n  var title = document.getElementById('todo-title').value;\n  var desc = document.getElementById('todo-desc').value;\n  var date = document.getElementById('todo-date').value;\n  var priority = document.getElementById('todo-priority').value;\n  var todo = (0,_factories_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, desc, date, priority);\n  _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodo(todo);\n  e.target.reset();\n  (0,_ui_dom_js__WEBPACK_IMPORTED_MODULE_2__.render)();\n});\n\n//# sourceURL=webpack://todolist/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/appState.js"
/*!*********************************!*\
  !*** ./src/modules/appState.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/projectFactory.js */ \"./src/factories/projectFactory.js\");\n\n\n// --- Prywatne funkcje pomocnicze dla Storage ---\n\nfunction saveToLocalStorage(projects) {\n  localStorage.setItem(\"todo_projects\", JSON.stringify(projects));\n}\nfunction loadFromLocalStorage() {\n  var saved = localStorage.getItem(\"todo_projects\");\n  return saved ? JSON.parse(saved) : [];\n}\n\n// --- Stan aplikacji ---\n\nvar projects = loadFromLocalStorage();\nvar currentProjectId = projects.length > 0 ? projects[0].id : null;\n\n// Inicjalizacja domyślnego projektu, jeśli lista jest pusta\nfunction init() {\n  if (projects.length === 0) {\n    currentProjectId = null;\n  } else if (!currentProjectId && projects.length > 0) {\n    currentProjectId = projects[0].id;\n  }\n}\n\n// --- Gettery ---\n\nfunction getProjects() {\n  return projects;\n}\nfunction getCurrentProject() {\n  return projects.find(function (p) {\n    return p.id === currentProjectId;\n  }) || projects[0];\n}\n\n// --- Akcje (z automatycznym zapisem) ---\n\nfunction setCurrentProject(id) {\n  currentProjectId = id;\n}\nfunction addProject(name) {\n  var project = (0,_factories_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\n  projects.push(project);\n  if (!currentProjectId) {\n    currentProjectId = project.id;\n  }\n  saveToLocalStorage(projects);\n}\nfunction addTodo(todo) {\n  var project = getCurrentProject();\n  if (!project) return;\n  project.todos.push(todo);\n  saveToLocalStorage(projects);\n}\nfunction removeProject(id) {\n  var projectIndex = projects.findIndex(function (project) {\n    return project.id === id;\n  });\n  if (projectIndex === -1) return;\n  projects.splice(projectIndex, 1);\n  if (projects.length === 0) {\n    currentProjectId = null;\n  } else if (currentProjectId === id) {\n    currentProjectId = projects[0].id;\n  }\n  saveToLocalStorage(projects);\n}\nfunction removeTodo(todoId) {\n  var project = getCurrentProject();\n  if (!project) return;\n  project.todos = project.todos.filter(function (todo) {\n    return todo.id !== todoId;\n  });\n  saveToLocalStorage(projects);\n}\nfunction toggleTodo(todoId) {\n  var project = getCurrentProject();\n  if (!project) return;\n  var todo = project.todos.find(function (t) {\n    return t.id === todoId;\n  });\n  if (todo) {\n    todo.completed = !todo.completed;\n    saveToLocalStorage(projects);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init: init,\n  getProjects: getProjects,\n  getCurrentProject: getCurrentProject,\n  setCurrentProject: setCurrentProject,\n  addProject: addProject,\n  addTodo: addTodo,\n  removeProject: removeProject,\n  removeTodo: removeTodo,\n  toggleTodo: toggleTodo\n});\n\n//# sourceURL=webpack://todolist/./src/modules/appState.js?\n}");

/***/ },

/***/ "./src/ui/dom.js"
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/appState.js */ \"./src/modules/appState.js\");\n\nfunction render() {\n  renderProjects();\n  renderTodos();\n  updateTodoFormState();\n}\nfunction renderProjects() {\n  var container = document.getElementById('projects-list');\n  container.innerHTML = '';\n  _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach(function (project) {\n    var _appState$getCurrentP;\n    var item = document.createElement('div');\n    item.className = 'project-item';\n    var label = document.createElement('button');\n    label.type = 'button';\n    label.textContent = project.name;\n    label.className = 'project-button';\n    if (((_appState$getCurrentP = _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject()) === null || _appState$getCurrentP === void 0 ? void 0 : _appState$getCurrentP.id) === project.id) {\n      label.classList.add('active');\n    }\n    label.addEventListener('click', function () {\n      _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setCurrentProject(project.id);\n      render();\n    });\n    var remove = document.createElement('button');\n    remove.type = 'button';\n    remove.className = 'project-remove';\n    remove.textContent = 'Delete';\n    remove.addEventListener('click', function (event) {\n      event.stopPropagation();\n      _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeProject(project.id);\n      render();\n    });\n    item.appendChild(label);\n    item.appendChild(remove);\n    container.appendChild(item);\n  });\n}\nfunction renderTodos() {\n  var project = _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject();\n  var container = document.getElementById('todo-list');\n  var title = document.getElementById('current-project');\n  container.innerHTML = '';\n  if (!project) {\n    title.textContent = 'No project selected';\n    var noProjectMessage = document.createElement('div');\n    noProjectMessage.className = 'empty-state';\n    noProjectMessage.textContent = 'Create a project to start adding todos.';\n    container.appendChild(noProjectMessage);\n    return;\n  }\n  title.textContent = project.name;\n  project.todos.forEach(function (todo) {\n    var card = document.createElement('div');\n    card.classList.add('todo', todo.priority);\n    if (todo.completed) card.classList.add('completed');\n    var content = document.createElement('div');\n    content.className = 'todo-content';\n    content.innerHTML = \"\\n      <div>\\n        <strong>\".concat(todo.title, \"</strong>\\n        <p>\").concat(todo.description || '', \"</p>\\n      </div>\\n      <div class=\\\"todo-meta\\\">\\n        <small>\").concat(todo.dueDate || 'No due date', \"</small>\\n        <span class=\\\"priority-label\\\">\").concat(todo.priority, \"</span>\\n      </div>\\n    \");\n    content.addEventListener('click', function () {\n      _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleTodo(todo.id);\n      render();\n    });\n    var removeButton = document.createElement('button');\n    removeButton.type = 'button';\n    removeButton.className = 'todo-remove';\n    removeButton.textContent = 'Remove';\n    removeButton.addEventListener('click', function (event) {\n      event.stopPropagation();\n      _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTodo(todo.id);\n      render();\n    });\n    card.appendChild(content);\n    card.appendChild(removeButton);\n    container.appendChild(card);\n  });\n}\nfunction updateTodoFormState() {\n  var project = _modules_appState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject();\n  var form = document.getElementById('todo-form');\n  var inputs = form.querySelectorAll('input, select, button');\n  inputs.forEach(function (input) {\n    if (input.type === 'submit' || input.tagName === 'BUTTON') {\n      input.disabled = !project;\n    } else {\n      input.disabled = !project;\n    }\n  });\n  form.classList.toggle('disabled', !project);\n}\n\n//# sourceURL=webpack://todolist/./src/ui/dom.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;