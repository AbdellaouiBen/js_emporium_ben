export function navScroll(){

    let imgNav = document.getElementsByTagName("img")[0]
    let navbarScroll = document.getElementsByClassName("nav_bar")[0]
      window.addEventListener('scroll',e=>{
          if(window.scrollY>=500){ 
            navbarScroll.classList.add('sticky')
            imgNav.classList.add('imgNav')

              
          } else{
            navbarScroll.classList.remove('sticky')
            imgNav.classList.add('imgNav')

          }
          
      })

}