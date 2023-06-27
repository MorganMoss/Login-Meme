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

        if (response.ok) {
            return response.ok;
        }
    } catch(err) {
        console.log(err);
    }
  }

  export { registerUser };