 $(document).ready(function () {
    $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      asNavFor: '.pagination__slider',
      adaptiveHeight: false,
      accessibility: true,
      initialSlide: 5,
    });

    $('.review__left').click(function () {
      $('.reviews__slider').slick('slickPrev');
    });

    $('.review__right').click(function () {
      $('.reviews__slider').slick('slickNext');
    });
    $('.reviews__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.comment-checkbox').prop('checked', false);
    });
  });

  $(document).ready(function () {
    $('.pagination__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      asNavFor: '.reviews__slider',
      focusOnSelect: true,
      centerMode: true,
      mobileFirst: true,
      initialSlide: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
      ],
    });

    $('.pagination__left').click(function () {
      $('.pagination__slider').slick('slickPrev');
    });

    $('.pagination__right').click(function () {
      $('.pagination__slider').slick('slickNext');
    });
  });