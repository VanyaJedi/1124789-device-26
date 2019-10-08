document.addEventListener('DOMContentLoaded', function(){
    var popup_letter = document.querySelector('.popup-letter');
    var letter_show_btn = document.querySelector('.text-us-btn');
    var close_letter_btn = popup_letter.querySelector('.popup-close-btn-letter');
    var popup_input_name = popup_letter.querySelector('.popup-input-name');
    var popup_map = document.querySelector('.popup-map');
    var mini_map = document.querySelector('.mini-map');
    var close_map_btn = popup_map.querySelector('.popup-close-btn-map');


    letter_show_btn.addEventListener('click',function(event){
        event.preventDefault();
        popup_letter.classList.add('popup-letter-active');
        popup_input_name.focus();
    });
    close_letter_btn.addEventListener('click',function(event){
        event.preventDefault();
        popup_letter.classList.remove('popup-letter-active');
    });

    mini_map.addEventListener('click', function(event){
        console.log("привет");
        event.preventDefault();
        popup_map.classList.add('popup-map-active');
    });

    close_map_btn.addEventListener('click',function(event){
        event.preventDefault();
        popup_map.classList.remove('popup-map-active');
    });
});