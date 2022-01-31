const headerImg = document.querySelector("[data-header-img]")
const nav = document.querySelector("[data-navigation]")

const observer = new IntersectionObserver(entries => {
    console.log(entries)

    entries.forEach(entry => {
        nav.classList.toggle("scrolled", !entry.isIntersecting)
    })

    /* if(entries[0].isIntersecting) {
        nav.classList.remove("scrolled")
    } else {
        nav.classList.add("scrolled")
    } */
} , {
    threshold: .15,
})

observer.observe(headerImg)