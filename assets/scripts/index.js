/**
 * Created by rmkec on 19/08/16.
 */

var app = angular.module('cynapse', ['ui.router', 'uiRouterStyles']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "main.html",
            controller: 'MainCtrl'
        })
        .state('events', {
            url: '/events',
            templateUrl: 'events.html',
            controller: 'EventCtrl',
            data: {
                css: ['../assets/styles/materialize.min.css', '../assets/styles/events.css']
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutCtrl',
            data: {
                css: ['../assets/styles/materialize.min.css', '../assets/styles/events.css', '../assets/styles/about.css']
            }
        });

});

app.controller('EventCtrl', function ($scope) {

    $scope.loaded = false;
    $scope.event = null;
    $scope.eventTitles = ['Web Designing', 'Coding - Programming', 'Paper Presentation'];
    $scope.events = [{
        title: "Web Designing",
        details: "Idhu vera Level Event!",
        rules: ['Rule 1', 'Rule 2', 'Rule 3', 'Rule 4'],
        format: ['Format 1', 'Format 2', 'Format 3', 'Format 4', 'Format 5']
    }, {
        title: "Coding - Programming",
        details: "Idhu vera Level Event!",
        rules: ['Rule 1', 'Rule 2', 'Rule 3', 'Rule 4'],
        format: ['Format 1', 'Format 2', 'Format 3', 'Format 4', 'Format 5']
    }, {
        title: "Paper Presentation",
        details: "Idhu vera Level Event!",
        rules: ['Rule 1', 'Rule 2', 'Rule 3', 'Rule 4'],
        format: ['Format 1', 'Format 2', 'Format 3', 'Format 4', 'Format 5']
    }];


    $scope.update = function (id) {
        $scope.loaded = true;
        $scope.event = $scope.events[id];
    };

    var interval = setInterval(startAnimate, 100);

    function startAnimate() {
        if ($('.arc')) {
            $(".leftArc,.rightArc").fadeIn(2000);
            setTimeout(function () {
                if ($('#rcenter')) {
                    $('#rcenter h2').fadeIn('slow');
                    $("#rcenter").animate({width: '100%'}, 3000, function () {
                        $("#rcenter").addClass('animated,bounce');
                    });
                    $(".botArc").fadeIn(2000);
                }
            }, 1000);
            clearInterval(interval);
        }
    }

    var $html = $('html'),
        $container = $('#container'),
        $prompt = $('#prompt'),
        $toggle = $('#toggle'),
        $about = $('#about'),
        $scene = $('#scene');

    // Hide browser menu.
    (function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    })();

    // Setup FastClick.
    FastClick.attach(document.body);

    // Add touch functionality.
    if (Hammer.HAS_TOUCHEVENTS) {
        $container.hammer({drag_lock_to_axis: true});
        _.tap($html, 'a,button,[data-tap]');
    }

    // Add touch or mouse class to html element.
    $html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

    // Resize handler.
    (resize = function () {
        $scene[0].style.width = window.innerWidth + 'px';
        $scene[0].style.height = window.innerHeight + 'px';
        if (!$prompt.hasClass('hide')) {
            if (window.innerWidth < 600) {
                $toggle.addClass('hide');
            } else {
                $toggle.removeClass('hide');
            }
        }
    })();

    // Attach window listeners.
    window.onresize = _.debounce(resize, 200);
    window.onscroll = _.debounce(resize, 200);

    function showDetails() {
        $about.removeClass('hide');
        $toggle.removeClass('i');
    }

    function hideDetails() {
        $about.addClass('hide');
        $toggle.addClass('i');
    }

    // Listen for toggle click event.
    $toggle.on('click', function (event) {
        $toggle.hasClass('i') ? showDetails() : hideDetails();
    });

    // Pretty simple huh?
    $scene.parallax();

    // Check for orientation support.
    setTimeout(function () {
        if ($scene.data('mode') === 'cursor') {
            $prompt.removeClass('hide');
            if (window.innerWidth < 600) $toggle.addClass('hide');
            $prompt.on('click', function (event) {
                $prompt.addClass('hide');
                if (window.innerWidth < 600) {
                    setTimeout(function () {
                        $toggle.removeClass('hide');
                    }, 1200);
                }
            });
        }
    }, 1000);
});

app.controller('AboutCtrl', function ($scope) {

    $scope.flippers = [{
        name: "about us"
    }, {url: ""}]

    var $html = $('html'),
        $container = $('#container'),
        $prompt = $('#prompt'),
        $toggle = $('.toggle'),
        $about = $('#about'),
        $scene = $('#scene');

    // Hide browser menu.
    (function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    })();

    // Setup FastClick.
    FastClick.attach(document.body);

    // Add touch functionality.
    if (Hammer.HAS_TOUCHEVENTS) {
        $container.hammer({drag_lock_to_axis: true});
        _.tap($html, 'a,button,[data-tap]');
    }

    // Add touch or mouse class to html element.
    $html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

    // Resize handler.
    (resize = function () {
        $scene[0].style.width = window.innerWidth + 'px';
        $scene[0].style.height = window.innerHeight + 'px';
        if (!$prompt.hasClass('hide')) {
            if (window.innerWidth < 600) {
                $toggle.addClass('hide');
            } else {
                $toggle.removeClass('hide');
            }
        }
    })();

    // Attach window listeners.
    window.onresize = _.debounce(resize, 200);
    window.onscroll = _.debounce(resize, 200);

    function showDetails() {
        $about.removeClass('hide');
        $toggle.removeClass('i');
    }

    function hideDetails() {
        $about.addClass('hide');
        $toggle.addClass('i');
    }

    // Listen for toggle click event.
    $toggle.on('click', function (event) {
        $toggle.hasClass('i') ? showDetails() : hideDetails();
    });

    // Pretty simple huh?
    $scene.parallax();

    // Check for orientation support.
    setTimeout(function () {
        if ($scene.data('mode') === 'cursor') {
            $prompt.removeClass('hide');
            if (window.innerWidth < 600) $toggle.addClass('hide');
            $prompt.on('click', function (event) {
                $prompt.addClass('hide');
                if (window.innerWidth < 600) {
                    setTimeout(function () {
                        $toggle.removeClass('hide');
                    }, 1200);
                }
            });
        }
    }, 1000);

});

app.controller('MainCtrl', function ($scope) {

    $scope.flippers = [{
        name: "events",
        title: 'Tell Me, Do you Code?',
        buttonLayer1: true,
        buttonLayer2: false,
        url: 'events.html'
    },
        {
            name: "about",
            title: 'About Us',
            buttonLayer1: false,
            buttonLayer2: true,
            url: 'about.html'
        },
        {
            name: "details",
            title: 'The closer you look, the lesser you see!',
            buttonLayer1: false,
            buttonLayer2: true,
            url: 'details.html'
        }
    ];

    var $html = $('html'),
        $container = $('#container'),
        $prompt = $('#prompt'),
        $toggle = $('.toggle'),
        $scene = $('#scene');

    // Hide browser menu.
    (function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    })();

    // Setup FastClick.
    FastClick.attach(document.body);

    // Add touch functionality.
    if (Hammer.HAS_TOUCHEVENTS) {
        $container.hammer({drag_lock_to_axis: true});
        _.tap($html, 'a,button,[data-tap]');
    }

    // Add touch or mouse class to html element.
    $html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

    // Resize handler.
    (resize = function () {
        $scene[0].style.width = window.innerWidth + 'px';
        $scene[0].style.height = window.innerHeight + 'px';
        if (!$prompt.hasClass('hide')) {
            if (window.innerWidth < 600) {
                $toggle.addClass('hide');
            } else {
                $toggle.removeClass('hide');
            }
        }
    })();

    // Attach window listeners.
    window.onresize = _.debounce(resize, 200);
    window.onscroll = _.debounce(resize, 200);

    function showDetails(name) {
        $('#' + name).removeClass('hide');
        $('#' + name + '-toggle').removeClass('i');
    }

    function hideDetails(name) {
        $('#' + name).addClass('hide');
        $('#' + name + '-toggle').addClass('i');
    }


    $scope.toggle = function (name) {
        $('#' + name + '-toggle').hasClass('i') ? showDetails(name) : hideDetails(name);
    };


    // Pretty simple huh?
    $scene.parallax();

    // Check for orientation support.
    setTimeout(function () {
        if ($scene.data('mode') === 'cursor') {
            $prompt.removeClass('hide');
            if (window.innerWidth < 600) $toggle.addClass('hide');
            $prompt.on('click', function (event) {
                $prompt.addClass('hide');
                if (window.innerWidth < 600) {
                    setTimeout(function () {
                        $toggle.removeClass('hide');
                    }, 1200);
                }
            });
        }
    }, 1000);
});

