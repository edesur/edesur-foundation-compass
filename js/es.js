jQuery(document).ready(function($) {
  var $S = Foundation.utils.S,
      $es_site_nav_top = $S('.es-site-nav-top');

  $S('.f-topbar-fixed').css('padding-top', '0px');
  $es_site_nav_top.find('.right li:has(.addthis_horizontal_follow_toolbox)').css({
    'width': '180px'
  });

  var $es_site_nav_search = $S('.es-site-nav-search'),
      $es_site_nav_search_wrapper = $S('.es-site-nav-search-wrapper'),
      $es_site_nav_search_input = $S('.es-site-nav-search').find('input'),
      $es_site_nav_search_button = $S('.es-site-nav-search').find('.button');

  $es_site_nav_search_wrapper.css('padding-top', ($S('.es-site-nav-top').outerHeight() - $es_site_nav_search.outerHeight())/2 + 'px');

  $es_site_nav_search_button.css('height', $es_site_nav_search_input.outerHeight() + 'px');


  function loadAddThis() {

      var $es_site_social_share = $S('.atss-left');

        // console.log($es_site_social_share);

      // console.log($es_site_social_share);
  }


  // window.setTimeout(loadAddThis, 3000);

  var $es_site_nav_top_add_bg = (function() {

    var $es_site_home_masthead_heading = $S('.es-site-masthead-title'),
        $es_site_home_masthead_heading_pos = $es_site_home_masthead_heading.position(),
        $es_site_noticias_articulo = $S('.es-site-noticias-articulo'),
        $es_site_noticias_articulo_pos = $S('.es-site-noticias-articulo').position(),
        $es_site_nav_services = $S('.es-site-nav-services'),
        $es_site_nav_services_pos = $es_site_nav_services.position();

    $S(window).scroll(function() {


      // Position the $es_site_social_share bar inside the article
      var $es_site_social_share = $S('.atss-left');

      if ($es_site_social_share.length) {
        if ($S(this).scrollTop() >= $es_site_noticias_articulo_pos.top - $es_site_nav_top.outerHeight()) {
          $es_site_social_share.css('top', '80px');
        } else{
          $es_site_social_share.css('top', ($es_site_noticias_articulo_pos.top - $S(this).scrollTop()) + 16 + 'px');
        };

        if ($S(this).scrollTop() >= $es_site_nav_services_pos.top - $es_site_social_share.outerHeight() - $es_site_nav_top.outerHeight() ) {
          $es_site_social_share.css('top', $es_site_nav_services_pos.top - $S(this).scrollTop() - $es_site_social_share.outerHeight() + 'px');
        }
      };

      // Change the opacity of the nav bar by togling the es-site-nav-top-wrapper-bg class
      if ($S(this).scrollTop() >= ($es_site_home_masthead_heading_pos.top - $S('.es-site-nav-top-wrapper').height())) {
        $S('.es-site-nav-top-wrapper').addClass('es-site-nav-top-wrapper-bg');
      } else {
        $S('.es-site-nav-top-wrapper').removeClass('es-site-nav-top-wrapper-bg');
      };

    });
  })();

  var $es_resize_footer_elements = (function () {
    var $es_contact_info = $S('.es-site-contact-field-box'),
          $es_contact_info_label = $S('.es-site-contact-field-box .es-site-contact-field:first-child').find('label'),
          $es_contact_textarea = $S('.es-site-contact-textarea-box').find('textarea');

    $es_contact_textarea.css( 'height', ($es_contact_info.outerHeight() - $es_contact_info_label.outerHeight(true)));

    $S('.es-site-footer-map-container').css('padding-top', $S('.es-site-contact-textarea-box').find('label').outerHeight(true));

    $S('.es-site-footer-map').css('height', $S('.es-site-contact-textarea-box').outerHeight() - $S('.es-site-contact-textarea-box').find('label').outerHeight(true));
  })();

  var es_position_top_bar_social = (function () {

    var $es_site_top_bar_social = $S('.es-site-top-bar-social'),
        $es_site_noticias = $S('.es-site-noticias'),
        $es_site_noticias_pos = $es_site_noticias.position(),
        $es_site_nav_services = $S('.es-site-nav-services'),
        $es_site_nav_services_pos = $es_site_nav_services.position();

        $es_site_top_bar_social.css({
            'top': '64px',
            'right': 0
          });

        $S(window).scroll(function() {

           if ($S(this).width() < 1360 &&
               $es_site_noticias.length &&
               ($S(this).scrollTop() + $es_site_top_bar_social.outerHeight()) >=
               $es_site_noticias_pos.top &&
               ($S(this).scrollTop()) <=
               ($es_site_top_bar_social.outerHeight() + $es_site_noticias.outerHeight())
               ) {
            $es_site_top_bar_social.css({
              'right': '-30px'
            });

            $es_site_top_bar_social.on('mouseenter', function(event) {
              event.preventDefault();
              $es_site_top_bar_social.css({
                'right': 0
              });
            });

            $es_site_top_bar_social.on('mouseleave', function(event) {
              event.preventDefault();
              $es_site_top_bar_social.css({
                'right': '-30px'
              });
            });

          } else{
            $es_site_top_bar_social.css({
              'top': '64px',
              'right': 0
            });
          };

        });

  })();

  // Open modal for New User Registration when document loads
  var es_reg_requisitos        = $S('#esRegRequisitos'),
      es_site_masthead_modal_content = $S('.es-site-masthead-modal-content'),
      es_reg_requisitos_button = es_site_masthead_modal_content.find('.es-site-masthead-modal-button');
  es_reg_requisitos.foundation('reveal', 'open');

  es_reg_requisitos_button.on('click', function(event) {
    event.preventDefault();
    es_site_masthead_modal_content.foundation('reveal', 'close');

  });


  // Fade alerts in Registration Forms
  window.setTimeout(fadeAlert, 5000);

  function fadeAlert () {
    $S('.es-site-masthead-form-title-alert').fadeOut('1000');
  }

  // Noticias Slider settings

  if ($S('.es-site-noticias-articulos').length) {
    $('.es-site-noticias-wrapper').slick({
      // arrows: false,
      dots: true,
      infinite: false,
      slide: 'article',
      slidesToShow: 3,
      slidesToScroll: 3
    });
  };

  var $es_site_file_container = $S('.es-site-file-container'),
      $es_site_file_title = $es_site_file_container.find('.es-site-file-title'),
      $es_site_file_icon = $es_site_file_container.find('.es-site-file-icon'),
      $es_site_file_adobe_reader_copy = $S('.es-site-file-adobe-reader-copy'),
      $es_site_file_icon_adobe_reader = $S('.es-site-file-icon-adobe-reader').find('a');
  $es_site_file_title.css('line-height', $es_site_file_icon.outerHeight() + 'px');
  $es_site_file_icon_adobe_reader.css('line-height', $es_site_file_icon.outerHeight() + 'px');
  $es_site_file_adobe_reader_copy.css('margin', ($es_site_file_icon.outerHeight() - $es_site_file_adobe_reader_copy.outerHeight()) / 2 + 'px 0');

  // Footer Google Map
  var es_footer_map;
  var esLatLang = new google.maps.LatLng( 18.479330, -69.927836 );
  function initialize() {
    var esMapOptions = {
        zoom: 17,
        center: esLatLang,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
    };

    es_footer_map = new google.maps.Map(document.getElementById('es-site-footer-map-canvas'),
    esMapOptions);
    var es_footer_marker = new google.maps.Marker({
        position: esLatLang,
        map: es_footer_map,
        title:"Edesur Dominicana"
    });
  };
  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, 'resize', function() {
    es_footer_map.setCenter(esLatLang);
  });

});
