const options = {
    bottom: '32px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}


const darkmode = new Darkmode(options);

darkmode.showWidget();



var timer = new Timer();
$('#chronoExample .startButton').click(function () {
    timer.start();
});
$('#chronoExample .pauseButton').click(function () {
    timer.pause();
});
$('#chronoExample .stopButton').click(function () {
    timer.stop();
});
$('#chronoExample .resetButton').click(function () {
    timer.reset();
});
timer.addEventListener('secondsUpdated', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('started', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('reset', function (e) {
    $('#chronoExample .values').html(timer.getTimeValues().toString());
});
