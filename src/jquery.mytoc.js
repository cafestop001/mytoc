(function($){
    $.fn.extend({
        mytoc: function(options){
            var defaultParams = {
                prefix:'mytoc',
                selectors:'h1, h2, h3',
                context:'body'
            };
            var opts = $.extend({}, defaultParams, options);
            var headings = $(opts.selectors, opts.context);

            headings.each(function(i, heading){
                $('<span/>').attr('id', opts.prefix + i).insertBefore(heading);
            });
            
            return $(this).each(function(i, mytoc){
                var ul = $('<ul/>').attr('id', 'mytoc');
                headings.each(function(i, heading){
                    var a = $('<a/>').attr('href', '#'+opts.prefix + i).text($(heading).text());
                    var li = $('<li/>').addClass(heading.tagName.toLowerCase() + '-' + opts.prefix).append(a);
                    ul.append(li);
                });
                $(mytoc).html(ul);
            });

        }

    });

})(jQuery);