$(document).ready(function() {
    var gallery     = $('#gallery'),
        pics        = gallery.find('.slider__gallery-image'),
        curr_index  = 1,
        pic_width   = 33.333; // width of .slider__gallery-image

    // initialize 1st pager as active and previous arrow as disabled
    $('#pager-' + curr_index).attr('src', 'assets/images/hover-pager.png');
    $('#previous').attr('src', 'assets/images/left-arrow-disabled.png');
      
    $('.slider__btn-trigger').on('click', function() {

        var btn = $(this);
        var btn_id = btn.attr('id');
        
        if (gallery.is(':not(:animated)')) {

            // do nothing if previous is clicked and you're on the 1st slide
            if(btn_id.split('-')[0] == 'previous' && curr_index == 1) {
                return false;
            }

            // do nothing if next is clicked and you're on the last slide
            if(btn_id.split('-')[0] == 'next' && curr_index == 3) {
                return false;
            }

            // do nothing if pager is clicked and you're on that slide already 
            if(btn_id.split('-')[1] == curr_index) {
                return false;
            }

            var multiplier;       

            switch(btn_id) {
                case 'previous':
                    multiplier = -3;
                    curr_index -= 1;
                    break;
                case 'next':
                    multiplier = 3;
                    curr_index += 1;
                    break;  
                case 'pager-2':
                    multiplier = (curr_index == 3) ? -3 : 3;
                    curr_index = 2;
                    break;  
                case 'pager-3':
                    multiplier = (curr_index == 1) ? 6 : 3;
                    curr_index = 3;
                    break;
                default: // pager-1
                    multiplier = (curr_index == 2) ? -3 : -6;
                    curr_index = 1;
                    break;                  
            }

            gallery.animate({ left: '+=' + (-pic_width * multiplier + '%') }, function() {

                // change active pager and set the other pagers to default color
                $('#pager-' + curr_index).attr('src', 'assets/images/hover-pager.png');
                $('.slider__btn-pager').not('#pager-' + curr_index).attr('src', 'assets/images/standard-pager.png');

                // enable/disable previous and next buttons depending on active image (curr_index)                
                if(curr_index == 1) {
                    $('#previous').attr('src', 'assets/images/left-arrow-disabled.png');
                    $('#next').attr('src', 'assets/images/right-arrow.png');
                }
                else if(curr_index == 3) {
                    $('#previous').attr('src', 'assets/images/left-arrow.png');
                    $('#next').attr('src', 'assets/images/right-arrow-disabled.png');
                }
                else {
                    $('#previous').attr('src', 'assets/images/left-arrow.png');
                    $('#next').attr('src', 'assets/images/right-arrow.png');
                }

            });   
        }
    });

    $('#btn-pagetop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});