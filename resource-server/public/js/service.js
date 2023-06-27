async function registerUser(data) {
    try {
        const url = "http://localhost:8080/api/v1/auth/register";

        const fields = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: fields,
        });
        console.log('response: ', response);
        if (response.ok) {
            return response.ok;
        }
    } catch(err) {
        console.log(err);
    }
}

async function loginUser(data) {
    try {
        const url = "http://localhost:8080/api/v1/auth/login";

        const fields = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: fields,
        });

        
        if (response.ok) {
            const token = response.headers.get("authorization");
            console.log('response.headers ', response.headers)
            localStorage.setItem("authorization", token);
            return response.ok;
        }
    } catch(err) {
        console.log(err);
    }
}


async function loginUserWithEmailVerification(data) {
    try {
        const url = "http://localhost:8080/api/v1/auth/login/verification";

        const fields = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        console.log('token: ', localStorage.getItem("authorization"))

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("authorization"),
            },
            body: fields,
        });

        if (response.ok) {
            return response.ok;
        }
    } catch(err) {
        console.log(err);
    }
}

async function verifyCode(data) {
    try {
        const url = "http://localhost:8080/api/v1/auth/verify/code";

        const fields = JSON.stringify({
            verifyCode: data.verifyCode
        });

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // localStorage.getItem("authorization"),
                "authorization": localStorage.getItem("authorization"),
            },
            body: fields,
        });

        if (response.ok) {
            return response.ok;
        }
    } catch(err) {
        console.log(err);
    }
}

async function getScore() {

}

  export { registerUser, loginUserWithEmailVerification, verifyCode, getScore, loginUser };