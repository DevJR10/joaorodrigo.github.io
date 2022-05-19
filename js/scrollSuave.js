const link = document.querySelectorAll('a[href^="#"]')

function scrollSuave(event){
   event.preventDefault()
   const href = event.currentTarget.getAttribute('href')
   const section = document.querySelector(href)

   section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   })
}

link.forEach((e) =>{
   e.addEventListener('click', scrollSuave)
})