// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4Px2vgieA7bKPnjjI1CEPW5AbBg_lbXY",
    authDomain: "peed-0xdeadbeef-lab-1.firebaseapp.com",
    databaseURL: "https://peed-0xdeadbeef-lab-1.firebaseio.com",
    projectId: "peed-0xdeadbeef-lab-1",
    storageBucket: "peed-0xdeadbeef-lab-1.appspot.com",
    messagingSenderId: "867302589401"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref().child('Temperatures');
const chart = document.getElementById('myChart');

dbRef.on('child_added', function(data) {
    addData(data.key, data.val());
});

