/* inspired by http://bit.ly/2wzyTlx  */

$(document).ready(function(){
  
   /* time out for whatever ainmations */ 
setTimeout(function(){
$(".top,.bottom").animate({opacity:"1"},500);
Splitting();}, 500);
  
   /* fade in everything */ 
$(".background").delay(0).fadeIn(1000);
$(".typewrite").delay(500).fadeIn(1000);  
$(".bar").delay(500).animate({marginTop: "-2px",opacity:"1"},500);
$(".background").animate({height: "410px", width:"450px",opacity:"1"},500);
 $("h1,h4").delay(1000).animate({marginTop: "5px",opacity:"1"},500);

  
   /* rerun everything */ 
 $( "html" ).click(function() {
$(".bar").delay(0).animate({marginTop: "-50px",opacity:"0"},100); 
$(".background").animate({height: "0px", width:"0px",opacity:"0"},500);
$(".typewrite").animate({opacity:"0"},500);
$("h1,h4, .top,.bottom").animate({opacity:"0"},500);
 $(".bar").delay(2000).animate({marginTop: "-1px",opacity:"1"},500);
$(".background").delay(1000).animate({height: "410px", width:"450px",opacity:"1"},500);
 $(".typewrite, h1,h4").animate({opacity:"1"},2000);
 $(".top,.bottom").delay(1400).animate({opacity:"1"},500);

    setTimeout(function(){
    Splitting();}, 1500);
    
});
  
  
 
});



 /* typewriter effect for nevermind */ 
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { font-family: 'Archivo Black', sans-serif; color:#FF6501; border-right: 0.01em solid #000;}";
        document.body.appendChild(css);
    };