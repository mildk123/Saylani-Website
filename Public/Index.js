   
   $(document).ready(function()
   {
      $("#SlideShow1").slideshow(
      {
         interval: 4000,
         type: 'sequence',
         effect: 'fade',
         direction: '',
         pagination: false,
         fullscreen: 5,
         effectlength: 1000
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#portfolio']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 600, 'easeOutSine');
      });
      $('img[data-src]').lazyload();
   });
   