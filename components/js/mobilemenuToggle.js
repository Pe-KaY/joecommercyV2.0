const mobileMenuToggle = () => {
  const header = document.querySelector("header")
  const hamburgerIcon = document.querySelector(".hamburger")
  const mobileLinks = document.querySelectorAll(".mobileNav__links")

  //  menu toggle with hamburger icon function
  hamburgerIcon.addEventListener("click", () => {
    header.toggleAttribute("menu-open")
  })

  // menu toggle off after clicking a link in mobile nav function
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.toggleAttribute("menu-open")
    })
  })
}

export default mobileMenuToggle
