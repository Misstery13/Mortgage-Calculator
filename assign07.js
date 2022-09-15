        var apr;
        var term;
        var amt;
        var mpay;
        var cantError;
        var errorText = "";

        var errTerm = "ERROR in TERM type a number > 0 and less or equal to 40\n";
        var errApr = "ERROR in APR type a number higher than 0\n";
        var errAmt = "ERROR in AMT type a number higher than 0\n";

        function reset() {
            document.getElementById("calcmortgage").reset();
        }

        window.onload = function () {
            document.getElementById("apr").focus();
            document.getElementById("calculate").onclick = getValues;
        };
        function getValues() {
            clearDesc();
            document.getElementById("payment").value = "";
            apr = document.getElementById("apr").value;
            term = document.getElementById("term").value;
            amt = document.getElementById("amount").value;

            if ((term > 0 && term <= 40) && (apr > 0) && (amt > 0)) {

                apr /= 1200;
                term *= 12;
                mpay = calculatePayment();
                document.getElementById("payment").value = "$" + mpay.toFixed(2);

            } else if ((term < 0 || term > 40) || (apr < 0) || (amt < 0)) {
                if (term < 0 || term > 40) {
                    errorText += errTerm + "<br>";
                    document.getElementById("term").focus();
                }
                if (apr <= 0) {
                    errorText += errApr + "<br>";
                    document.getElementById("apr").focus();
                }
                if (amt <= 0) {
                    errorText += errAmt + "<br>";
                    document.getElementById("amount").focus();
                }
                desc.innerHTML += errorText;
                errorText = "";
            } else if (term == "" || apr == "" || amt == "") {
                desc.innerHTML += "ERROR, You must fill all the fields ";
            }
        };

        function clearDesc() {
            document.getElementById("desc").innerHTML = "";
        }

        function calculatePayment() {
            var payt = amt * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
            return payt;
        }


        


