+++
title = "Paige"
[paige]
style = """
#paige-collections,
#paige-metadata,
#paige-sections,
#paige-pages {
    display: none;
}
"""
[paige.search]
hide_page = true
+++

<p>{{% paige/image alt="Landscape" breakpoints=true class="object-fit-cover rounded-4 shadow-lg" fetchpriority="high" height="20rem" loading="eager" process="webp" src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="100%" %}}</p>

<p class="display-5 fw-bold mb-2 text-center">An advanced Hugo theme</p>

<div class="container-fluid">
    <div class="justify-content-center row">
        <div class="col col-auto col-lg-7 px-0">
            <p class="lead text-center">Paige is designed to put your content front and center, avoiding the typical clutter. The look is seamless and smooth, scalable and readable, portable and efficient. The layout is minimal and responsive, using verticality and white space to delineate and highlight each part of the page. The implementation is flexible and extensible. It’s a versatile canvas that serves most web needs.</p>
        </div>
    </div>
</div>

<p class="text-center">
    <a class="lead" href="https://github.com/willfaught/paige">Get started!</a>
</p>

<div class="column-gap-3 d-flex display-6 justify-content-center mb-3">
    {{< paige/icon class="bi bi-github" title="GitHub" url="https://github.com/willfaught/paige" >}}
</div>
