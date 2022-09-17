(function (window) {
    'use strict';
    var App = window.App || {};
    var FirebaseConfig = {
      // …  (your data here)
      apiKey: "AIzaSyCzn8BySC-mRbpKoN99QpCCLsjPlKncnvQ",
      authDomain: "coffeerun-f1751.firebaseapp.com",
      projectId: "coffeerun-f1751",
      storageBucket: "coffeerun-f1751.appspot.com",
      messagingSenderId: "950401636428",
      appId: "1:950401636428:web:1539c93265f8cc304d7ce9",
      measurementId: "G-HQYJRXEW82"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;

  })(window);


  
  // OLD COLD for config file
  // (function (window) {
  //   'use strict';
  //   window.FireBaseConfig = {
  //     apiKey: "",      // put your data here
  //     authDomain: "",
  //     projectId: "",
  //     storageBucket: "",
  //     messagingSenderId: "",
  //     appId: ""
  //   };
  // })(window);
  
  