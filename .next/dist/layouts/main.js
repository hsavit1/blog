'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meta = require('../components/meta');

var _meta2 = _interopRequireDefault(_meta);

var _prefetch = require('next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-942610349' + ' ' + 'main'
  }, children, _react2.default.createElement(_meta2.default, null), _react2.default.createElement(_style2.default, {
    styleId: '942610349',
    css: ['.main.jsx-942610349{padding:25px 50px;}', '.logo.jsx-942610349{padding-bottom:50px;}', 'a.jsx-942610349{text-decoration:none;}', '@media (max-width:500px){.main.jsx-942610349{padding:25px 15px;}.logo.jsx-942610349{padding-bottom:20px;}}']
  }));
};