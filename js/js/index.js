document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.work__btn').forEach(function(workBtn){
    workBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.work-content').forEach(function(workContent){
        workContent.classList.remove('work-content-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('work-content-active')


    })
  })

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')

  })
})
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#btn').addEventListener('click', function(){
    document.querySelector('#form').classList.toggle('is-active')

  })
})
swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: false,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect:'slide',

});


$('.questions__list' ).accordion({
  header: ".questions__item-btn",
  collapsible:true,
  active: false,
    animate: {
      duration: 500,
      easing: 'swing',
      heightStyle: 'content',

    }
});


})



