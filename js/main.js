
function onInit(){
  $('.nav_bar').hide();
}

//**********************************************************************************************************
//functions
function showNavigation() {
  if (document.body.scrollTop > 527 || document.documentElement.scrollTop > 527) {
    $('.nav_bar').show();
  } else {
    $('.nav_bar').hide();
  }
}


//**********************************************************************************************************
// events
window.onscroll = function(){
  // console.log(document.documentElement.scrollTop);
  showNavigation();
};

$('#home_btn').click(function(){
  console.log('test');
  window.scrollTo(0, 0);
});

$('#github').click(function(){
  window.open('https://github.com/AdamV97', '_blank');
});

$('#facebook').click(function(){
  window.open('https://www.facebook.com/adam.vukelic.3', '_blank');
});

$('#steam').click(function(){
  window.open('https://steamcommunity.com/profiles/76561198066099551/', '_blank');
});

$('#linkedin').click(function(){
  window.open('https://www.linkedin.com/in/adam-vukeli%C4%87-1b1932176/', '_blank');
});

//***********************************************************************************************************
onInit();