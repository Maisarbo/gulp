jQuery(document).ready(function($) {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4'); // tag
    let itens = $('.featured-item'); // class
    let destaques = $('#featured'); // id

    console.log(titulos.first());

    // Configuração de produtos
    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>');

    // Manipulação de eventos
    $('.featured-item a').on('blur', function(event) {
        event.preventDefault();
        alert('Produto esgotado');
    });

    // Manipulação de estilos
    $('.featured-item h4').dblclick(function() {
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        });
    });

    /*
    * Ouvinte de eventos .nav-modal-open
    */
    $('.nav-modal-open').on('click', function(e) {
        e.preventDefault();
        let elem = $(this).attr('rel');
        console.log('Elemento a ser carregado:', elem); // Verifica se o elem está correto
        console.log('Conteúdo a ser carregado:', $('#'+elem).html()); // Verifica o conteúdo que será carregado
        $('.modal-body').html($('#'+elem).html());
        $('.modal-header h5.modal-title').html($(this).text());
        let myModal = new bootstrap.Modal($('#modelId'));
        myModal.show();
    });

    function validate(elem) {
        if(elem.val() == ''){
            console.log('O campo de' + elem.attr('name') + 'é obrigatorio')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')

            return false
        }else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('body').on('submit', '.modal-body .form', function(e){
        e.preventDefault()
        const inputName = $('#nome')
        const inputEmail = $('#e-mail')
        const inputDate = $('#date')
        const inputHora = $('#hora')
        const inputCep = $('#cep')
        const inputCel = $('#cel')
        const inputCpf = $('#cpf')

        validate(inputName)
        validate(inputEmail)
        validate(inputDate)
        validate(inputHora)
        validate(inputCep)
        validate(inputCel)
        validate(inputCpf)

        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            console.log('Verificar campos obrigatorios')
            return false
        }else{
            $(this).submit()
        }
    })

    $('body').on('blur', '#nome', function () {
        validate($(this))
     })
     $('body').on('blur', '#e-mail', function () {
        validate($(this))
     })
     $('body').on('blur', '#date', function () {
        validate($(this).datepicker())
     })
     $('body').on('blur', '#date', function () {
        $(this).mask('00/00/0000')
     })
     $('body').on('blur', '#hora', function () {
        validate($(this))
        $(this).mask('00:00')
     })
     $('body').on('blur', '#cep', function () {
        validate($(this))
        $(this).mask('00000-000')
     })

   /*  $('body').on('keyup', '#cep', function () {
        $(this).mask('00000-000')
     })*/
    
     $('body').on('blur', '#cel', function () {
        validate($(this))
        $(this).mask('00000-0000');
     })
     $('body').on('blur', '#cpf', function () {
        validate($(this))
        $(this).mask('000.000.000-00');
     })
    
});
