
var button= document.getElementById("button")
var onlyNumber = /\d/g;
var onlyLetter = /\D/g;
var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



button.onclick= function ()
{

    var firstName = document.forms["fillingForm"]["first-name"].value;
    var lastName = document.forms["fillingForm"]["last-name"].value;
    var email = document.forms["fillingForm"]["email"].value;
    var city = document.forms["fillingForm"]["city"].value;
    var pnumber = document.forms["fillingForm"]["phone"].value;


    if(firstName === "" || lastName=== "" || email === "" || city=== "" || pnumber === "")
    {
        alert("All forms must be filled out");
        return false;
    }

    if (firstName.search(onlyLetter)=== -1)
    {
        alert("first name cannot contain numbers");
        return false;
    }

    if(lastName.search(onlyLetter) === -1)
    {
        alert("Last name cannot contain numbers")
        return false;
    }
    if(email.search(emailCheck) === -1)
    {
        alert("email is not valid");
        return false;
    }
    if(city.search(onlyLetter) === -1)
    {
        alert("City cannot contain any numbers");
        return false;
    }
    if(pnumber.search(onlyNumber) === -1)
    {
        alert("phone cannot contain letters");
        return false;
    }

    else
    {

            document.write("<h1>Submitted data</h1><br/>");
            document.write("First name:<b> " + firstName + "</b><br/>");
            document.write("Last name:<b> " + lastName + "</b><br/>");
            document.write("Email:<b> " + email + "</b><br/>");
            document.write("City:<b> " + city + "</b><br/>");
            document.write("Phone number:<b> " + pnumber + "</b><br/>");

    }

};

