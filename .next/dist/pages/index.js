'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../layouts/main');

var _main2 = _interopRequireDefault(_main);

var _prefetch = require('next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/henrysavit/Desktop/blog/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('title', {
    className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Henry Savit')), _react2.default.createElement('div', {
    className: 'jsx-1788676843' + ' ' + 'home',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-1788676843' + ' ' + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('h1', {
    className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Henry Savit'), _react2.default.createElement('nav', {
    className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { target: '_blank', href: 'https://twitter.com/cantbemorewrong', className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Twitter'), _react2.default.createElement(_prefetch2.default, { href: '/essays', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Essays')), _react2.default.createElement(_prefetch2.default, { href: '/changelog', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1788676843',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Changelog'))))), _react2.default.createElement(_style2.default, {
    styleId: '1788676843',
    css: '.home.jsx-1788676843{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:-1;}.main.jsx-1788676843{-webkit-flex:none;-ms-flex:none;flex:none;text-align:center;}h1.jsx-1788676843{font-size:14px;font-weight:normal;}nav.jsx-1788676843{margin-top:20px;}a.jsx-1788676843{display:inline-block;margin:0 15px;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCZ0IsQUFHMkIsQUFZUixBQUtLLEFBS0MsQUFJSyxlQVJGLENBS3JCLEVBdEJRLEdBMEJRLEdBekJQLE9BQ0MsR0FnQlYsQ0FTdUIsSUF4QlosR0FTUyxNQVJMLFFBd0JmLElBZkEsOERBUnFCLDZGQUNJLG1HQUNaLFdBQ2IiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hlbnJ5c2F2aXQvRGVza3RvcC9ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9wcmVmZXRjaCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8UGFnZT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5IZW5yeSBTYXZpdDwvdGl0bGU+XG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGgxPkhlbnJ5IFNhdml0PC9oMT5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9jYW50YmVtb3Jld3JvbmdcIj5Ud2l0dGVyPC9hPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXNzYXlzXCI+PGE+RXNzYXlzPC9hPjwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NoYW5nZWxvZ1wiPjxhPkNoYW5nZWxvZzwvYT48L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaG9tZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG5cbiAgICAgIC5tYWluIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgbmF2IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUGFnZT5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJMaW5rIiwiSGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7Ozs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkosQUFDRSxBQUNFLEFBR0YsaUNBQUEsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLGdDQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUFHLFFBQUgsQUFBVSxVQUFTLE1BQW5CLEFBQXdCLGtEQUF4Qjs7Z0JBQUE7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSw0QkFBQSxBQUFDLG9DQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUFxQjtBQUFyQjtxQkFBcUIsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGdkIsQUFFRSxBQUFxQixBQUNyQiw0QkFBQSxBQUFDLG9DQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUF3QjtBQUF4QjtxQkFBd0IsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FYaEMsQUFLRSxBQUNFLEFBRUUsQUFHRSxBQUF3QjthQVhoQztTQURhLEFBQ2I7QUFBQTtBQURGIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oZW5yeXNhdml0L0Rlc2t0b3AvYmxvZyJ9