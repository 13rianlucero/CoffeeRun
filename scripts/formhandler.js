(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            if (!selector) {
                throw new Error('No selector provided');
            }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }

        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');
            this.$formElement.on('submit', function(event) {
                event.preventDefault();

                // var data = $(this).serializeArray();
                var data = {};
                $(this).serializeArray().forEach(function(item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                fn(data);
                this.reset();
                this.elements[0].focus();
            });
        }
    }

    // ADDITIONAL CODE TO MAKE THE PAYMENT FORM WORK CORRECTLY
    // SUBMIT HANDLER --- FOR THE PAYMENT FORM
    $(function() {
        $("#myForm button").click(function(ev) {
            ev.preventDefault()
            if ($(this).attr("value") == "paymentSubmit") {
                var setName = $('#name').val();
                var titleOutput = $("input:radio[name=title]:checked").val();
                document.getElementById('titleOutput').innerHTML = titleOutput;
                console.log("Form has been submitted.");
                $('#myModal').modal();
                $("#myModal").html("Thank you for your payment, " + titleOutput + " " + setName)
            }
        });
    });

    App.FormHandler = FormHandler;
    window.App = App;
})(window);