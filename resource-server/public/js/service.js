const identityServer = 'https://nczesv2fdg.eu-west-1.awsapprunner.com';
const resourceServer = 'https://8c8pg7kbyf.eu-west-1.awsapprunner.com';

async function registerUser(data) {
    try {
        const url = `${identityServer}/api/v1/auth/register`;

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

        const res = await response.json();

        if (res.success) {
            return res.success;
        }
    } catch(err) {
        console.log(err);
    }
}

async function loginUser(data) {
    try {
        const url = `${identityServer}/api/v1/auth/login`;
        const counterUrl = `${resourceServer}/api/incrementLoginAttempt`;

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

        const res = await response.json();
       
        if (res.success) {
            const token = res.token;
            localStorage.setItem("authorization", token);

            await fetch(counterUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token,
                },
            });

            return res.success;
        }
    } catch(err) {
        console.log(err);
    }
}


async function loginUserWithEmailVerification(data) {
    try {
        const url = `${identityServer}/api/v1/auth/login/verification`;

        const fields = JSON.stringify({
            email: data.email,
            password: data.password,
        });

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("authorization"),
            },
            body: fields,
        });

        const res = await response.json();

        if (res.success) {
            return res.success;
        }
    } catch(err) {
        console.log(err);
    }
}

async function verifyCode(data) {
    try {
        const url = `${identityServer}/api/v1/auth/verify/code`;

        const fields = JSON.stringify({
            verifyCode: data.verifyCode
        });

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

async function getScore() {
    try {
        const url = `${resourceServer}/getAttempt`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("authorization"),
            },
        });

        const res = await response.json();
        if (res.success) {
            return res;
        }
    } catch(err) {
        console.log(err);
    }
}

async function logout() {
    try {
        const url = `${identityServer}/api/v1/logout`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("authorization"),
            },
        });

        const res = await response.json();

        if (res.success) {
            localStorage.setItem("authorization", "");
            return res.success;
        }
    } catch(err) {
        console.log(err);
    }
}

  export { registerUser, loginUserWithEmailVerification, verifyCode, loginUser, logout, getScore };