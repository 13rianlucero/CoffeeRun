// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

(function (window) {
    // 'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@starfleet\.com$/.test(email);
          }
    };

    App.Validation = Validation;
    window.App = App;
  })(window);