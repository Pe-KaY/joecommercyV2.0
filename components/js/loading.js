const loading = () => {
  window.onload = () => {
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none"
    }, 6000)
  }
}

export default loading
