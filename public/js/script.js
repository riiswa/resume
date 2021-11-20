$(function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    $('nav a div').click(function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    })

    $('#menu').click(function () {
        $('nav a div').toggleClass('force-visible')
    })

    let menu = $("nav"),
        menuHeight = menu.outerHeight()+15,
        menuItems = menu.find('a:not(.exclude)'),
        scrollItems = menuItems.filter(function () {return this.hasAttribute("href")}).map(function () {
            return $($(this).attr("href"));
        })

    $(window).scroll(function() {
        let fromTop = $(this).scrollTop()+menuHeight;

        if (fromTop > 150)
            $("#top-button").removeClass('hidden')
        else
            $("#top-button").addClass('hidden')

        let current = scrollItems.filter(function () {
            return $(this).offset().top < fromTop;
        })

        if (current[current.length -1] !== undefined) {
            $('.active').removeClass('active');
            $(`a[href="#${current[current.length -1].attr('id')}"] div`).addClass('active')
        }
    })

    const observer = (animationClass, entrySelector) => new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const elem = entry.target.querySelector(entrySelector);

            if (entry.isIntersecting) elem.classList.add(animationClass);
            else elem.classList.remove(animationClass);
        });
    });


    for (const elem of document.getElementsByClassName('job-block-wrapper'))
        observer('animate__fadeInLeftBig', '.job-block').observe(elem)

    for (const elem of document.getElementsByClassName('education-block-wrapper'))
        observer('animate__fadeInLeftBig', '.education-block').observe(elem)

    observer('animate__slideInDown', 'header').observe(document.querySelector('.header-wrapper'))

    for (const elem of document.getElementsByClassName('project-block-wrapper'))
        observer('animate__bounceInUp', '.project-block').observe(elem)

    for (const elem of document.getElementsByClassName('skill-block-wrapper'))
        observer('animate__flipInX', '.skill-block').observe(elem)

})

