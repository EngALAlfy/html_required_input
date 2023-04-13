            let $required = "<i class='required text-danger'> * </i>";
            let $notRequired = "<i class='not-required text-muted'> (optional) </i>";

            if ($('.validate-required').find(".required").length <= 0) {
                $('.validate-required').append($required);
            }

            $(':input').each(function (key , value) {
                const $input = $(value);
                const $label = $input.parents().find(`label[for='${$input.attr("name")}']`);
                /// check if input not read only
                let isReadOnly = $input.prop('readonly');
                /// check if input not hidden
                let isHidden = $input.attr('type') === "hidden";
                /// check if input is required or optional
                let isRequired = $input.prop('required');
                /// check if label is required or optional
                let labelIsOptional = $label.hasClass('not-required');
                /// check if label need validate
                let labelNoValidate = $label.hasClass('no-validate');
                /// check if label already has required star element
                let labelAlreadyValidateRequired = $label.find(".required").length > 0;
                /// check if label already has optional text element
                let labelAlreadyValidateOptional = $label.find(".not-required").length > 0;

                if(isHidden || isReadOnly || labelNoValidate || labelAlreadyValidateRequired || labelAlreadyValidateOptional){
                    // return true act same as continue
                    return true;
                }

                if(isRequired === true && labelIsOptional !== true){
                   $label.append($required);
                }else if(isRequired === false || labelIsOptional === true){
                    $label.append($notRequired);
                }
