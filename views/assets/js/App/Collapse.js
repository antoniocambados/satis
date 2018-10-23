import $ from 'cash-dom';

class Collapse {
    constructor(selector) {
        $(selector).on('click', function(event) {
            let destination = $($(this).attr('data-target') || $(this).attr('href'));
            
            event.preventDefault();
    
            Collapse.toggle(destination);
        });
    }
    
    static collapse(element) {
        let el = $(element);

        el.addClass('collapse').removeClass('show');
    };

    static show(element) {
        let el = $(element);

        el.addClass('collapse show');
    };

    static toggle(element) {
        let el = $(element);

        el.addClass('collapse').toggleClass('show');
    };
}

export default Collapse;