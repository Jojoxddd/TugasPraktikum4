$(document).ready(function () {
    // Ambil elemen menu icon dan navbar
    let $menuIcon = $('#menu-icon');
    let $navbar = $('.navbar');
    let $sections = $('section');
    let $navLinks = $('.navbar a');

    // Scroll spy: highlight menu sesuai section yang sedang tampil
    $(window).on('scroll', function () {
        let top = $(this).scrollTop();

        $sections.each(function () {
            let $sec = $(this);
            let offset = $sec.offset().top - 150;
            let height = $sec.outerHeight();
            let id = $sec.attr('id');

            if (top >= offset && top < offset + height) {
                $navLinks.removeClass('active');
                $(`.navbar a[href="#${id}"]`).addClass('active');
            }
        });

        // Optional: close navbar saat scroll di mobile
        if ($navbar.hasClass('active')) {
            $navbar.removeClass('active');
        }
    });

    // Toggle menu (mobile navbar)
    $menuIcon.on('click', function () {
        $navbar.toggleClass('active');
    });

    // Smooth scroll saat klik menu
    $navLinks.on('click', function (e) {
        let target = $(this).attr('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 60 // offset header
            }, 600);
            $navbar.removeClass('active'); // tutup menu di mobile
        }
    });

    // Responsive: tutup navbar jika klik di luar menu pada mobile
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar, #menu-icon').length) {
            $navbar.removeClass('active');
        }
    });
});
