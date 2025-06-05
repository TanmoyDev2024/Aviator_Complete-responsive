jQuery(document).ready(function(){

    // MENU SECTION START
    let mobileTrigger = $('#mobile-trigger');
    let closeMenuBtn = $('#close-menu');
    let primaryNavMobile = $('#primary-nav--mobile');

    mobileTrigger.on('click', function(){
        primaryNavMobile.addClass('primary-nav--mobile--open');
    });

    closeMenuBtn.on('click', function(){
        primaryNavMobile.removeClass('primary-nav--mobile--open');
    });


    // LOGIN AND REGISTER INPUT SECTION SHOW FUNCTIONS
    let login = $('#login-btn');
    let input = $('#login-input');
    let closeInput = $('#close-input');
    let register = $('#register-btn'); 
    let registerInput = $('#register-input');
    let closeRegister = $('#close-register-input');


    login.on('click', function(){
        input.css('display','block');
    });

    closeInput.on('click', function(){
        input.css('display','none');
    });

    register.on('click', function(){
        registerInput.css('display','block')
    });

    closeRegister.on('click', function(){
        registerInput.css('display','none');
    });

    
});