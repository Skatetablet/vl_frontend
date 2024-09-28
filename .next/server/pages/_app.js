/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.jsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   getAccessToken: () => (/* binding */ getAccessToken),\n/* harmony export */   loginAndFetchToken: () => (/* binding */ loginAndFetchToken),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);\naxios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst SESSION_DURATION = 3600000; // 1 hour in milliseconds\nconst AuthProvider = ({ children })=>{\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const login = ()=>{\n        setIsAuthenticated(true);\n        localStorage.setItem(\"lastLoginTime\", Date.now()); // Save login time\n    };\n    const logout = ()=>{\n        setIsAuthenticated(false);\n        localStorage.removeItem(\"token\");\n        localStorage.removeItem(\"lastLoginTime\");\n        router.push(\"/login\");\n    };\n    const checkSessionValidity = ()=>{\n        const lastLoginTime = localStorage.getItem(\"lastLoginTime\");\n        if (lastLoginTime) {\n            const currentTime = Date.now();\n            const sessionAge = currentTime - lastLoginTime;\n            if (sessionAge > SESSION_DURATION) {\n                // Session has expired\n                logout(); // Log out and clear session\n                return false;\n            }\n            return true;\n        }\n        return false;\n    };\n    // Check for token and session validity on app load\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token && checkSessionValidity()) {\n            setIsAuthenticated(true); // If token exists and session is valid, user is authenticated\n        } else {\n            logout(); // Clear session and force logout if invalid or expired\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isAuthenticated,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ricardogarcia/Documents/VL_front/vl_frontend/src/context/AuthContext.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within AuthProvider\");\n    }\n    return context;\n};\n\nconst loginAndFetchToken = async (username, password)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:8000/api/token/\", {\n            username,\n            password\n        });\n        const token = response.data.access; // Assuming the token is returned as response.data.access\n        localStorage.setItem(\"token\", token); // Store token in local storage\n        localStorage.setItem(\"lastLoginTime\", Date.now()); // Update login time\n        return token;\n    } catch (error) {\n        console.error(\"Error logging in:\", error);\n        throw new Error(\"Login failed. Please check your credentials.\"); // Throwing a more generic error\n    }\n};\nconst getAccessToken = ()=>{\n    const token = localStorage.getItem(\"token\");\n    const lastLoginTime = localStorage.getItem(\"lastLoginTime\");\n    if (token && lastLoginTime) {\n        const currentTime = Date.now();\n        const sessionAge = currentTime - lastLoginTime;\n        if (sessionAge < SESSION_DURATION) {\n            return token; // Return token if session is valid\n        }\n    }\n    return null; // Return null if session has expired or token does not exist\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQzJCO0FBRXZFLE1BQU1LLDRCQUFjSixvREFBYUE7QUFDakMsTUFBTUssbUJBQW1CLFNBQVMseUJBQXlCO0FBRXBELE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNTyxTQUFTWCwwREFBU0E7SUFFeEIsTUFBTVksUUFBUTtRQUNaRixtQkFBbUI7UUFDbkJHLGFBQWFDLE9BQU8sQ0FBQyxpQkFBaUJDLEtBQUtDLEdBQUcsS0FBSyxrQkFBa0I7SUFDdkU7SUFFQSxNQUFNQyxTQUFTO1FBQ2JQLG1CQUFtQjtRQUNuQkcsYUFBYUssVUFBVSxDQUFDO1FBQ3hCTCxhQUFhSyxVQUFVLENBQUM7UUFDeEJQLE9BQU9RLElBQUksQ0FBQztJQUNkO0lBRUEsTUFBTUMsdUJBQXVCO1FBQzNCLE1BQU1DLGdCQUFnQlIsYUFBYVMsT0FBTyxDQUFDO1FBQzNDLElBQUlELGVBQWU7WUFDakIsTUFBTUUsY0FBY1IsS0FBS0MsR0FBRztZQUM1QixNQUFNUSxhQUFhRCxjQUFjRjtZQUNqQyxJQUFJRyxhQUFhbEIsa0JBQWtCO2dCQUNqQyxzQkFBc0I7Z0JBQ3RCVyxVQUFVLDRCQUE0QjtnQkFDdEMsT0FBTztZQUNUO1lBQ0EsT0FBTztRQUNUO1FBQ0EsT0FBTztJQUNUO0lBRUEsbURBQW1EO0lBQ25EZCxnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixRQUFRWixhQUFhUyxPQUFPLENBQUM7UUFDbkMsSUFBSUcsU0FBU0wsd0JBQXdCO1lBQ25DVixtQkFBbUIsT0FBTyw4REFBOEQ7UUFDMUYsT0FBTztZQUNMTyxVQUFVLHVEQUF1RDtRQUNuRTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWixZQUFZcUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVsQjtZQUFpQkc7WUFBT0s7UUFBTztrQkFDM0RUOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTW9CLFVBQVU7SUFDckIsTUFBTUMsVUFBVTNCLGlEQUFVQSxDQUFDRztJQUMzQixJQUFJLENBQUN3QixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFO0FBRXdCO0FBRW5CLE1BQU1HLHFCQUFxQixPQUFPQyxVQUFVQztJQUNqRCxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNSixrREFBVSxDQUFDLG9DQUFvQztZQUNwRUU7WUFDQUM7UUFDRjtRQUVBLE1BQU1ULFFBQVFVLFNBQVNFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLHlEQUF5RDtRQUM3RnpCLGFBQWFDLE9BQU8sQ0FBQyxTQUFTVyxRQUFRLCtCQUErQjtRQUNyRVosYUFBYUMsT0FBTyxDQUFDLGlCQUFpQkMsS0FBS0MsR0FBRyxLQUFLLG9CQUFvQjtRQUN2RSxPQUFPUztJQUNULEVBQUUsT0FBT2MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMscUJBQXFCQTtRQUNuQyxNQUFNLElBQUlULE1BQU0saURBQWlELGdDQUFnQztJQUNuRztBQUNGLEVBQUU7QUFFSyxNQUFNVyxpQkFBaUI7SUFDNUIsTUFBTWhCLFFBQVFaLGFBQWFTLE9BQU8sQ0FBQztJQUNuQyxNQUFNRCxnQkFBZ0JSLGFBQWFTLE9BQU8sQ0FBQztJQUUzQyxJQUFJRyxTQUFTSixlQUFlO1FBQzFCLE1BQU1FLGNBQWNSLEtBQUtDLEdBQUc7UUFDNUIsTUFBTVEsYUFBYUQsY0FBY0Y7UUFFakMsSUFBSUcsYUFBYWxCLGtCQUFrQjtZQUNqQyxPQUFPbUIsT0FBTyxtQ0FBbUM7UUFDbkQ7SUFDRjtJQUVBLE9BQU8sTUFBTSw2REFBNkQ7QUFDNUUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZsX2Zyb250ZW5kLy4vc3JjL2NvbnRleHQvQXV0aENvbnRleHQuanN4PzgxNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgU0VTU0lPTl9EVVJBVElPTiA9IDM2MDAwMDA7IC8vIDEgaG91ciBpbiBtaWxsaXNlY29uZHNcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzQXV0aGVudGljYXRlZCwgc2V0SXNBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0TG9naW5UaW1lJywgRGF0ZS5ub3coKSk7IC8vIFNhdmUgbG9naW4gdGltZVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRJc0F1dGhlbnRpY2F0ZWQoZmFsc2UpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXN0TG9naW5UaW1lJyk7XG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU2Vzc2lvblZhbGlkaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RMb2dpblRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdExvZ2luVGltZScpO1xuICAgIGlmIChsYXN0TG9naW5UaW1lKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBzZXNzaW9uQWdlID0gY3VycmVudFRpbWUgLSBsYXN0TG9naW5UaW1lO1xuICAgICAgaWYgKHNlc3Npb25BZ2UgPiBTRVNTSU9OX0RVUkFUSU9OKSB7XG4gICAgICAgIC8vIFNlc3Npb24gaGFzIGV4cGlyZWRcbiAgICAgICAgbG9nb3V0KCk7IC8vIExvZyBvdXQgYW5kIGNsZWFyIHNlc3Npb25cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvLyBDaGVjayBmb3IgdG9rZW4gYW5kIHNlc3Npb24gdmFsaWRpdHkgb24gYXBwIGxvYWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGlmICh0b2tlbiAmJiBjaGVja1Nlc3Npb25WYWxpZGl0eSgpKSB7XG4gICAgICBzZXRJc0F1dGhlbnRpY2F0ZWQodHJ1ZSk7IC8vIElmIHRva2VuIGV4aXN0cyBhbmQgc2Vzc2lvbiBpcyB2YWxpZCwgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ291dCgpOyAvLyBDbGVhciBzZXNzaW9uIGFuZCBmb3JjZSBsb2dvdXQgaWYgaW52YWxpZCBvciBleHBpcmVkXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNBdXRoZW50aWNhdGVkLCBsb2dpbiwgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBBdXRoUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBsb2dpbkFuZEZldGNoVG9rZW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3Rva2VuLycsIHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzOyAvLyBBc3N1bWluZyB0aGUgdG9rZW4gaXMgcmV0dXJuZWQgYXMgcmVzcG9uc2UuZGF0YS5hY2Nlc3NcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7IC8vIFN0b3JlIHRva2VuIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdExvZ2luVGltZScsIERhdGUubm93KCkpOyAvLyBVcGRhdGUgbG9naW4gdGltZVxuICAgIHJldHVybiB0b2tlbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2luIGZhaWxlZC4gUGxlYXNlIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMuJyk7IC8vIFRocm93aW5nIGEgbW9yZSBnZW5lcmljIGVycm9yXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgY29uc3QgbGFzdExvZ2luVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0TG9naW5UaW1lJyk7XG5cbiAgaWYgKHRva2VuICYmIGxhc3RMb2dpblRpbWUpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc2Vzc2lvbkFnZSA9IGN1cnJlbnRUaW1lIC0gbGFzdExvZ2luVGltZTtcblxuICAgIGlmIChzZXNzaW9uQWdlIDwgU0VTU0lPTl9EVVJBVElPTikge1xuICAgICAgcmV0dXJuIHRva2VuOyAvLyBSZXR1cm4gdG9rZW4gaWYgc2Vzc2lvbiBpcyB2YWxpZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiBzZXNzaW9uIGhhcyBleHBpcmVkIG9yIHRva2VuIGRvZXMgbm90IGV4aXN0XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsIlNFU1NJT05fRFVSQVRJT04iLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzQXV0aGVudGljYXRlZCIsInNldElzQXV0aGVudGljYXRlZCIsInJvdXRlciIsImxvZ2luIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkRhdGUiLCJub3ciLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImNoZWNrU2Vzc2lvblZhbGlkaXR5IiwibGFzdExvZ2luVGltZSIsImdldEl0ZW0iLCJjdXJyZW50VGltZSIsInNlc3Npb25BZ2UiLCJ0b2tlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIiwiYXhpb3MiLCJsb2dpbkFuZEZldGNoVG9rZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsImFjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImdldEFjY2Vzc1Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/AuthContext.jsx\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./src/context/AuthContext.jsx\");\n/* harmony import */ var _pages_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/global.scss */ \"./src/pages/global.scss\");\n/* harmony import */ var _pages_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n // Import the App from 'next/app'\n// Custom App component\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/ricardogarcia/Documents/VL_front/vl_frontend/src/pages/_app.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ricardogarcia/Documents/VL_front/vl_frontend/src/pages/_app.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n// Optional: if you need to use getInitialProps\nMyApp.getInitialProps = async (appContext)=>{\n    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(appContext);\n    return {\n        ...appProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3hCO0FBQ0YsQ0FBQyxpQ0FBaUM7QUFFN0QsdUJBQXVCO0FBQ3ZCLE1BQU1FLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osOERBQVlBO2tCQUNYLDRFQUFDRztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsK0NBQStDO0FBQy9DRixNQUFNRyxlQUFlLEdBQUcsT0FBT0M7SUFDN0IsTUFBTUMsV0FBVyxNQUFNTiwrREFBbUIsQ0FBQ0s7SUFDM0MsT0FBTztRQUFFLEdBQUdDLFFBQVE7SUFBQztBQUN2QjtBQUVBLGlFQUFlTCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmxfZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0ICdAL3BhZ2VzL2dsb2JhbC5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnOyAvLyBJbXBvcnQgdGhlIEFwcCBmcm9tICduZXh0L2FwcCdcblxuLy8gQ3VzdG9tIEFwcCBjb21wb25lbnRcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59O1xuXG4vLyBPcHRpb25hbDogaWYgeW91IG5lZWQgdG8gdXNlIGdldEluaXRpYWxQcm9wc1xuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuICByZXR1cm4geyAuLi5hcHBQcm9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiQXBwIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiYXBwUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/pages/global.scss":
/*!*******************************!*\
  !*** ./src/pages/global.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.jsx")));
module.exports = __webpack_exports__;

})();