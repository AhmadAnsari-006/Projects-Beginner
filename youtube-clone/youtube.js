const effect_button=document.querySelector('.js-hamburger-icon')
const change_animation=document.querySelector('.js-sidebar')

effect_button.addEventListener('mouseover',(event)=>{  
});

effect_button.addEventListener('click',()=>{  
  if(change_animation.classList.contains('js-sidebar-active')){
    change_animation.classList.remove
    ('js-sidebar-active');
    change_animation.classList.add
    ('sidebar');
  }else{
  change_animation.classList.add('js-sidebar-active');
  change_animation.classList.remove
    ('sidebar');
  }
  
});


effect_button.addEventListener('mouseout',()=>{
  
})
