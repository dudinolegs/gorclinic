$(document).ready(function() {
    $('#main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1,
        autoHeight: true,
        navContainer: '.main-slider__nav',
        dotsContainer: '.main-slider__dots',
    });

    $('#spec-slider').owlCarousel({
        margin: 20,
        nav: true,
        dots: true,
        autoWidth: true,
        autoHeight: true,
        navContainer: '.spec-sl__nav',
        dotsContainer: '.spec-sl__dots',
        responsive: {
            481: {
                items: 2,
            },
            681: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1025: {
                items: 4,
            }
        }
    });

    $('#dosc-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        items: 3,
        autoHeight: true,
        navContainer: '.dosc__nav',
        dotsContainer: '.dosc__dots',
        responsive: {
            0: {
                items: 1,
            },
            451: {
                items: 2,
            },
            769: {
                items: 3,
            },
        }
    });

    if ($(window).width() < 907) {
        $('#reviews-slider').owlCarousel({
            margin: 20,
            dots: true,
            autoHeight: true,
            dotsContainer: '.reviews__dots',
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false,
                },
                451: {
                    items: 2,
                    autoWidth: true,
                },
            }
        });
    }

    if ($(window).width() < 1153) {
        $('#news-slider').owlCarousel({
            margin: 20,
            dots: true,
            dotsContainer: '.news__dots',
            responsive: {
                0: {
                    items: 3,
                    autoWidth: true,
                },
            }
        });
    }

    if ($(window).width() < 908) {
        $('#services-list-slider').owlCarousel({
            margin: 20,
            dots: true,
            dotsContainer: '.services-list__dots',
            autoWidth: true,
            responsive: {
                0: {
                    items: 1,
                },
                381: {
                    items: 3,
                },
            }
        });
    }

    if ($('#map1').length) {
        ymaps.ready(initMap1);
    }
    if ($('#map2').length) {
        ymaps.ready(initMap2);
    }
    const zoom = 14.5;
    const controls = ['smallMapDefaultSet'];
    const color = "#77C75B";

    function initMap1() {
        let map = new ymaps.Map('map1', {
            center: [55.747328, 37.769388],
            zoom: zoom,
            controls: controls,
        }, {
            searchControlProvider: 'yandex#search'
        });
        map.geoObjects.add(new ymaps.Placemark([55.747328, 37.769388], {}, {
            preset: 'islands#blueHomeIcon',
            iconColor: color
        }));
    }
    function initMap2() {
        let map = new ymaps.Map('map2', {
            center: [55.657845, 37.606020],
            zoom: zoom,
            controls: controls,
        }, {
            searchControlProvider: 'yandex#search'
        });
        map.geoObjects.add(new ymaps.Placemark([55.657845, 37.606020], {}, {
            preset: 'islands#blueHomeIcon',
            iconColor: color
        }));
    }

    $('.js-tab').on('click', function() {
        let tabNum = $(this).attr('data-tab');
        $('.js-tab').removeClass('active');
        $(this).addClass('active');
        $('.js-content').removeClass('active');
        $('.js-content[data-tab=' + tabNum + ']').addClass('active');
    });

    $('.js-faq .faq__q').on('click', function() {
        $(this).closest('li').toggleClass('active');
    });

    $('#callback-footer-form').on('submit', function(e) {
        e.preventDefault();
        let name = $(this).find('input[type=text]');
        let phone = $(this).find('input[type=tel]');
        let correctName = 1;
        let correctPhone = 1;

        if (name.val() == "") {
            name.addClass('error');
            name.closest('fieldset').addClass('required');
            correctName = 0;
        } else if (/[0-9]/.test(name.val())) {
            name.addClass('error');
            name.closest('fieldset').addClass('uncorrect');
            correctName = 0;
        } else {
            correctName = 1;
        }

        if (phone.val() == "") {
            phone.addClass('error');
            phone.closest('fieldset').addClass('required');
            correctPhone = 0;
        } else if (phone.val().length != 18) {
            phone.addClass('error');
            phone.closest('fieldset').addClass('uncorrect');
            correctPhone = 0;
        } else {
            correctPhone = 1;
        }

        if (correctPhone && correctName) {
            overlayHandler.open();
            modalHandler.openSuccess();
            $(this).trigger('reset');
            // Докрутить отправку формы
        }
    });

    $('#expert-review-form').on('submit', function(e) {
        e.preventDefault();
        let name = $(this).find('input[type=text]');
        let mail = $(this).find('input[type=mail]');
        let text = $(this).find('textarea');
        let correctName = 1;
        let correctMail = 1;
        let correctText = 1;

        if (name.val() == "") {
            name.addClass('error');
            name.closest('fieldset').addClass('required');
            correctName = 0;
        } else if (/[0-9]/.test(name.val())) {
            name.addClass('error');
            name.closest('fieldset').addClass('uncorrect');
            correctName = 0;
        } else {
            correctName = 1;
        }

        if (mail.val() == "") {
            mail.addClass('error');
            mail.closest('fieldset').addClass('required');
            correctMail = 0;
        } else if (!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/.test(mail.val())) {
            mail.addClass('error');
            mail.closest('fieldset').addClass('uncorrect');
            correctMail = 0;
        } else {
            correctMail = 1;
        }

        if (text.val() == "") {
            text.addClass('error');
            text.closest('fieldset').addClass('required');
            correctText = 0;
        } else {
            correctText = 1;
        }

        if (correctText && correctMail && correctName) {
            overlayHandler.open();
            modalHandler.openSuccess();
            $(this).trigger('reset');
            // Докрутить отправку формы
        }
    });

    $('#attach-form').on('submit', function(e) {
        e.preventDefault();
        let name = $(this).find('input[type=text]');
        let phone = $(this).find('input[type=tel]');
        let correctName = 1;
        let correctPhone = 1;

        if (name.val() == "") {
            name.addClass('error');
            name.closest('fieldset').addClass('required');
            correctName = 0;
        } else if (/[0-9]/.test(name.val())) {
            name.addClass('error');
            name.closest('fieldset').addClass('uncorrect');
            correctName = 0;
        } else {
            correctName = 1;
        }

        if (phone.val() == "") {
            phone.addClass('error');
            phone.closest('fieldset').addClass('required');
            correctPhone = 0;
        } else if (phone.val().length != 18) {
            phone.addClass('error');
            phone.closest('fieldset').addClass('uncorrect');
            correctPhone = 0;
        } else {
            correctPhone = 1;
        }

        if (correctPhone && correctName) {
            overlayHandler.open();
            modalHandler.openSuccess();
            $(this).trigger('reset');
            // Докрутить отправку формы
        }
    });

    $('#modal-form').on('submit', function(e) {
        e.preventDefault();
        let name = $(this).find('input[type=text]');
        let phone = $(this).find('input[type=tel]');
        let mail = $(this).find('input[type=mail]');
        let correctName = 1;
        let correctPhone = 1;
        let correctMail = 1;

        if (name.val() == "") {
            name.addClass('error');
            correctName = 0;
        } else if (/[0-9]/.test(name.val())) {
            name.addClass('error');
            correctName = 0;
        } else {
            correctName = 1;
        }

        if (phone.val() == "") {
            phone.addClass('error');
            correctPhone = 0;
        } else if (phone.val().length != 18) {
            phone.addClass('error');
            correctPhone = 0;
        } else {
            correctPhone = 1;
        }

        if (mail.val() == "") {
            mail.addClass('error');
            correctMail = 0;
        } else if (!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/.test(mail.val())) {
            mail.addClass('error');
            correctMail = 0;
        } else {
            correctMail = 1;
        }

        if (correctPhone && correctName && correctMail) {
            modalHandler.closeForm();
            modalHandler.openSuccess();
            $(this).trigger('reset');
            // Докрутить отправку формы
        }
    });

    const pageHandler = {
        scroll: () => {
            $('html').removeClass('no-scroll');
        },
        noScroll: () => {
            $('html').addClass('no-scroll');
        },
    };

    const overlayHandler = {
        open: () => {
            pageHandler.noScroll();
            $('#overlay').addClass('active');
        },
        close: () => {
            pageHandler.scroll();
            $('#overlay').removeClass('active');
        },
    };

    const menuHandler = {
        open: () => {
            $('#mobile-menu').addClass('active');
        },
        close: () => {
            $('#mobile-menu').removeClass('active');
        },
    };

    const modalHandler = {
        openModal: () => {
            $('#modal').addClass('active');
        },
        closeModal: () => {
            $('#modal').removeClass('active');
        },
        openSuccess: () => {
            modalHandler.openModal();
            $('#success').addClass('active');
        },
        closeSuccess: () => {
            modalHandler.closeModal();
            $('#success').removeClass('active');
        },
        openForm: () => {
            modalHandler.openModal();
            $('#modal-form').addClass('active');
        },
        closeForm: () => {
            modalHandler.closeModal();
            $('#modal-form').removeClass('active');
        },
    };

    $('.js-close-menu').on('click', function(e) {
        e.preventDefault();
        overlayHandler.close();
        menuHandler.close();
    });

    $('.js-open-menu').on('click', function(e) {
        e.preventDefault();
        overlayHandler.open();
        menuHandler.open();
    });

    $('.js-close-modal').on('click', function(e) {
        e.preventDefault();
        overlayHandler.close();
        modalHandler.closeSuccess();
        modalHandler.closeForm();
    });

    $('.js-open-form').on('click', function() {
        overlayHandler.open();
        modalHandler.openForm();
    });

    $('#modal').on('click', function(e) {
        overlayHandler.close();
        modalHandler.closeSuccess();
        modalHandler.closeForm();
    });

    $('#overlay').on('click', function(e) {
        overlayHandler.close();
        menuHandler.close();
    });

    $('#success').on('click', function(e) {
        e.stopPropagation();
    });

    $('#modal-form').on('click', function(e) {
        e.stopPropagation();
    });

    $("input[type='tel']").mask("+9 (999)-999-99-99");
    $("input[type='tel']").keyup(function () {
        var $input = $(this);
        if ($input.val() == "+8") {
            $input.val("+7");
        }
        if ($input.val() == "+9") {
            $input.val("+7 (9");
        }
    });

    $('fieldset input').on('click', function() {
        $(this).removeClass('error');
        $(this).closest('fieldset').removeClass('required');
        $(this).closest('fieldset').removeClass('uncorrect');
    });

    $('fieldset textarea').on('click', function() {
        $(this).removeClass('error');
        $(this).closest('fieldset').removeClass('required');
        $(this).closest('fieldset').removeClass('uncorrect');
    });

    $('.js-select .js-select-total').on('click', function() {
        $(this).parent('.js-select').toggleClass('active');
    });

    $('.js-select ul li').on('click', function() {
        let optionValue = $(this).attr('data-value');
        let optionName = $(this).text();
        let filterSelect = $(this).closest('.js-select').siblings('select');
        let totalBlock = $(this).parent('ul').siblings('.js-select-total');

        $(this).siblings('li').removeClass('selected');
        $(this).addClass('selected');

        filterSelect.find('option').removeAttr('selected');
        filterSelect.find('option[value="' + optionValue + '"]').attr('selected', 'selected');
        totalBlock.text(optionName);

        $(this).closest('.js-select').removeClass('active');
    });

    $('.js-scroll').click(function() {
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: ($(href).offset().top) + "px"});
    });

    let sidebar = $('.sidebar__container');
    if (sidebar.length) {
        sidebar.css('width', sidebar.outerWidth());
        let h = sidebar.offset().top;
        $(window).scroll(function(){
            if ($(window).scrollTop() > h) {
                sidebar.addClass('fixed');
            } else {
                sidebar.removeClass('fixed');
            }
        });
    }

    $('.js-show-filter').on('click', function() {
        $('.js-hidden-filter').removeClass('filter__row_hide');
        $(this).hide();
    });

    $('a[data-fancybox="dosc"]').fancybox({
        selector : '#dosc-slider .owl-item:not(.cloned) a',
    });

    $('.js-step-name').on('click', function() {
        $(this).siblings('.js-step-content').toggleClass('active');
        $(this).toggleClass('active');
    });
});