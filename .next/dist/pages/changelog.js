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

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Changelog')), _react2.default.createElement('div', { className: 'posts' }, _react2.default.createElement('h2', null, 'Links to old versions of this blog will go here'), _react2.default.createElement('p', null, '12-9-2017: https://savit-blog-ajibtjcjel.now.sh ')));
};

var Post = function Post(_ref) {
  var id = _ref.id,
      date = _ref.date,
      title = _ref.title;
  return _react2.default.createElement('div', {
    className: 'jsx-1229270080' + ' ' + 'post'
  }, _react2.default.createElement('span', {
    className: 'jsx-1229270080' + ' ' + 'date'
  }, date), _react2.default.createElement(_prefetch2.default, { href: '/' + new Date(date).getFullYear() + '/' + id }, _react2.default.createElement('a', {
    className: 'jsx-1229270080'
  }, title)), _react2.default.createElement(_style2.default, {
    styleId: '1229270080',
    css: ['.post.jsx-1229270080{margin-bottom:10px;}', '.date.jsx-1229270080{display:inline-block;width:140px;text-align:right;margin-right:30px;color:#999;}', 'a.jsx-1229270080{text-decoration:none;}', '@media (max-width:500px){.post.jsx-1229270080{margin-bottom:15px;}.date.jsx-1229270080{display:block;width:inherit;text-align:inherit;font-size:11px;color:#ccc;margin-bottom:5px;}}']
  }));
};