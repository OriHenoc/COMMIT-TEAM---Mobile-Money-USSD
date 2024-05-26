(function($) {

    $(document).ready(function () {
        $(document.body).on('updated_checkout', function() {
            var defaultValue = $('#mm_operator_field select').val();
            checkValue(defaultValue);
    
            $('#mm_operator_field select').on('change', function() {
               checkValue(this.value);
            });
        })
    })

    function checkValue(value){
        var code;
        if(value == "Orange Money"){
            code = mmpayment_data.orangemoney_ussd_code;
        }
        if(value == "MTN Money"){
            code = mmpayment_data.mtnmoney_ussd_code;
        }
        if(value == "Moov Money"){
            code = mmpayment_data.moovmoney_ussd_code;
        }
        if(code != ""){
            var message = "<br/>Composez le <b>" +  code + "</b> puis continuez la procédure jusqu'au paiement.";
            $("#mm_instruction").html(message);
        }
    }

})( jQuery );