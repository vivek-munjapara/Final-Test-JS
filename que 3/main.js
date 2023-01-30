let frminput = document.forms['frm'];
let data = {};
let arry = [];
// console.log(data);


getData = () => {
    const validate = true;
    let i = 0;

    for (const key of frminput) {
        // console.log(key);
        data[key.name] = key.value;
    }

    for (const iterator of frminput) {
        // console.log(iterator);
        document.getElementsByClassName("error")[i].innerHTML = "";


        if (iterator.value.length == 0) {
            error(i, "Please enter a Value");
            validate = false;
        }

        else if (iterator.name == "email") {
            if (iterator.value.indexOf("@") == -1) {
                error(i, "Please valid email id");
                validate = false;
            }
        }


        i += 1;

    }

    if (validate != false) {
        arry.push(data);
        console.log(data)
        // document.getElementById("success").innerHTML = `Submit suscessful`
        alert('Submit suscessful');
    }

}
// getData();

error = (id, error) => {
    // console.log(id + error);
    document.getElementsByClassName("error")[id].innerHTML = error;
}

signup = () => {
    getData();

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/register", {

        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(y => y.json()).then(y => {
        console.log(y)
        document.getElementById("demo").innerHTML = y;
    })

}


login = () => {
    getData();
    let loginValue = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    }

    fetch("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate", {
        method: "post",
        body: JSON.stringify(loginValue),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json()).then(token => {
        localStorage.setItem("token", token.jwtToken)
        console.log(token);
    })
    
        window.location.assign("home.html")
    
}