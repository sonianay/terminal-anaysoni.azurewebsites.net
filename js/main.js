var term = {
    top: function () {
        var ascii = 'guest@anay:~$ type about.txt\n' +
    ' \n' +
    '==========================================================================================\n' +
    '[[b;#607c8a;]    ______     __   __     ______     __  __        ______     ______     __   __     __]\n' +    
    "[[b;#607c8a;]   /&#92;  __ &#92;   /&#92; &#34;-.&#92; &#92;   /&#92;  __ &#92;   /&#92; &#92;_&#92; &#92;      /&#92;  ___&#92;   /&#92;  __ &#92;   /&#92; &#34;-.&#92; &#92;   /&#92; &#92; ]\n" +   
    '[[b;#607c8a;]   &#92; &#92;  __ &#92;  &#92; &#92; &#92;-.  &#92;  &#92; &#92;  __ &#92;  &#92; &#92;____ &#92;     &#92; &#92;___  &#92;  &#92; &#92; &#92;/&#92; &#92;  &#92; &#92; &#92;-.  &#92;  &#92; &#92; &#92; ]\n ' +
    '[[b;#607c8a;]   &#92; &#92;_&#92; &#92;_&#92;  &#92; &#92;_&#92;&#92;&#34;&#92;_&#92;  &#92; &#92;_&#92; &#92;_&#92;  &#92;/&#92;_____&#92;     &#92;/&#92;_____&#92;  &#92; &#92;_____&#92;  &#92; &#92;_&#92;&#92;&#34;&#92;_&#92;  &#92; &#92;_&#92; ]\n' +
    '[[b;#607c8a;]     &#92;/_/&#92;/_/   &#92;/_/ &#92;/_/   &#92;/_/&#92;/_/   &#92;/_____/      &#92;/_____/   &#92;/_____/   &#92;/_/ &#92;/_/   &#92;/_/     ]\n' +
    '[[b;#607c8a;]  ]\n' +                                                                            
    '==========================================================================================\n' +
    ' \n' + 
    'Hi, my name is Anay! Welcome to my terminal built with JQuery! \n' +
    ' \n' +
    'I am currently a high school sophomore who is passionate about computer science and engineering. \n' +
    ' \n' +
    'You can contact me via email at anay_soni@hotmail.com if you have any questions! \n' +
    ' \n' +
    'To list some of the important commands of this terminal, type &#39;help&#39;. To view all of the files and links available of this terminal, type &#39;ls&#39;.\n' +
    ' \n' +
    'Quick Commands: \n' +
    '    - &#39;type experience.txt&#39; \n' +
    '    - &#39;start https://www.linkedin.com/in/anaysoni&#39; \n' +
    '    - &#39;start https://www.github.com/sonianay&#39; \n' +
    '    - &#39;start https://www.anaysoni.com&#39; \n' +
    ' \n';

        return ascii;
    },
    help: function () {
        fetch('../assets/help.txt')
            .then(response => response.text())
            .then(text => this.echo(text))
    },
    ls: function() {
        fetch('../assets/ls.txt')
            .then(response => response.text())
            .then(text => this.echo(text))
    },
    type: function(file) {
        if(file=='about.txt'){
            fetch('../assets/about.txt')
                .then(response => response.text())
                .then(text => this.echo(text))
        }
        else if(file=='experience.txt'){
                fetch('../assets/experience.txt')
                    .then(response => response.text())
                    .then(text => this.echo(text))
        }
    },
    start: function(link) {
        window.open(link);
    },
};
jQuery(document).ready(function ($) {
    $('body').terminal(term, {
        greetings: function (cb) {
            cb(term.top());
        },
        completion: true,
        checkArity: false,
        prompt: 'guest@anay:~$ '
    })
});
