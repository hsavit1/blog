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

var _posts = require('../posts');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/henrysavit/Desktop/blog/pages/changelog.js?entry';

exports.default = function () {
  return _react2.default.createElement(_main2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Changelog')), _react2.default.createElement('div', { className: 'posts', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Links to old versions of this blog will go here'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, '12-9-2017: https://savit-blog-ajibtjcjel.now.sh ')));
};

var Post = function Post(_ref) {
  var id = _ref.id,
      date = _ref.date,
      title = _ref.title;
  return _react2.default.createElement('div', {
    className: 'jsx-1229270080' + ' ' + 'post',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('span', {
    className: 'jsx-1229270080' + ' ' + 'date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, date), _react2.default.createElement(_prefetch2.default, { href: '/' + new Date(date).getFullYear() + '/' + id, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1229270080',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, title)), _react2.default.createElement(_style2.default, {
    styleId: '1229270080',
    css: '.post.jsx-1229270080{margin-bottom:10px;}.date.jsx-1229270080{display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;}a.jsx-1229270080{text-decoration:none;}@media (max-width:500px){.post.jsx-1229270080{margin-bottom:15px;}.date.jsx-1229270080{display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NoYW5nZWxvZy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2dCLEFBRzRCLEFBSUUsQUFRQSxBQUtBLEFBSUwsY0FDQSxLQXJCbEIsQUFpQkUsRUFiWSxBQVFkLE9BVXVCLEtBakJKLGNBa0JBLEdBakJDLFlBa0JMLE1BakJGLEtBa0JTLE1BakJ0QixZQWtCRSIsImZpbGUiOiJwYWdlcy9jaGFuZ2Vsb2cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hlbnJ5c2F2aXQvRGVza3RvcC9ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9wcmVmZXRjaCdcbmltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi4vcG9zdHMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPFBhZ2U+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q2hhbmdlbG9nPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPlxuICAgIDxoMj5MaW5rcyB0byBvbGQgdmVyc2lvbnMgb2YgdGhpcyBibG9nIHdpbGwgZ28gaGVyZTwvaDI+XG4gICAgPHA+MTItOS0yMDE3OiBodHRwczovL3Nhdml0LWJsb2ctYWppYnRqY2plbC5ub3cuc2ggPC9wPlxuICAgICAgey8qIHtcbiAgICAgICAgcG9zdHMubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgPFBvc3QgXG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfSAqL31cbiAgICA8L2Rpdj5cbiAgPC9QYWdlPlxuKVxuXG5jb25zdCBQb3N0ID0gKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPnsgZGF0ZSB9PC9zcGFuPlxuICAgIDxMaW5rIGhyZWY9e2AvJHtuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpfS8ke2lkfWB9PjxhPnsgdGl0bGUgfTwvYT48L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucG9zdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/changelog.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NoYW5nZWxvZy5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiTGluayIsInBvc3RzIiwiSGVhZCIsIlBvc3QiLCJpZCIsImRhdGUiLCJ0aXRsZSIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQVMsQUFBYTs7QUFDdEIsQUFBTyxBQUVQOzs7Ozs7OztrQkFBZSxZQUFBO3lCQUNiLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkosQUFDRSxBQUNFLEFBRUYsK0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNBO0FBREE7cUJBQ0EsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREEsQUFDQSxBQUNBLG9FQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVBXLEFBQ2IsQUFJRSxBQUVBO0FBUEo7O0FBc0JBLElBQU0sT0FBTyxTQUFQLEFBQU8sV0FBQTtNQUFBLEFBQUcsVUFBSCxBQUFHO01BQUgsQUFBTyxZQUFQLEFBQU87TUFBUCxBQUFhLGFBQWIsQUFBYTt5QkFDeEIsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7d0NBQUEsQUFBZ0I7O2dCQUFoQjtrQkFBQSxBQUF5QjtBQUF6QjtBQUFBLEtBREYsQUFDRSxBQUNBLHVCQUFBLEFBQUMsb0NBQUssWUFBVSxJQUFBLEFBQUksS0FBSixBQUFTLE1BQW5CLEFBQVUsQUFBZSxzQkFBL0IsQUFBZ0Q7Z0JBQWhEO2tCQUFBLEFBQXNEO0FBQXREO3FCQUFzRCxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBRnhELEFBRUUsQUFBc0Q7YUFGeEQ7U0FEVyxBQUNYO0FBQUE7QUFERiIsImZpbGUiOiJjaGFuZ2Vsb2cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hlbnJ5c2F2aXQvRGVza3RvcC9ibG9nIn0=