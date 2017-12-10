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

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    className: 'jsx-1788676843'
  }, 'Henry Savit')), _react2.default.createElement('div', {
    className: 'jsx-1788676843' + ' ' + 'home'
  }, _react2.default.createElement('div', {
    className: 'jsx-1788676843' + ' ' + 'main'
  }, _react2.default.createElement('h1', {
    className: 'jsx-1788676843'
  }, 'Henry Savit'), _react2.default.createElement('nav', {
    className: 'jsx-1788676843'
  }, _react2.default.createElement(_prefetch2.default, { href: '/about' }, _react2.default.createElement('a', {
    className: 'jsx-1788676843'
  }, 'About')), _react2.default.createElement(_prefetch2.default, { href: '/essays' }, _react2.default.createElement('a', {
    className: 'jsx-1788676843'
  }, 'Essays')), _react2.default.createElement(_prefetch2.default, { href: '/bookshelf' }, _react2.default.createElement('a', {
    className: 'jsx-1788676843'
  }, 'Bookshelf')), _react2.default.createElement('a', { target: '_blank', href: 'https://twitter.com/cantbemorewrong', className: 'jsx-1788676843'
  }, 'Twitter')))), _react2.default.createElement(_style2.default, {
    styleId: '1788676843',
    css: ['.home.jsx-1788676843{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:-1;}', '.main.jsx-1788676843{-webkit-flex:none;-ms-flex:none;flex:none;text-align:center;}', 'h1.jsx-1788676843{font-size:14px;font-weight:normal;}', 'nav.jsx-1788676843{margin-top:20px;}', 'a.jsx-1788676843{display:inline-block;margin:0 15px;text-decoration:none;}']
  }));
};