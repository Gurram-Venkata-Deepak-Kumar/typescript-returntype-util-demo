type LoginResponse = {
    token: string;
    user: {
        id: number,
        name: string,
        role: string
    }
}

async function loginUser(
    email:string, password: string
){
    if(email === "admin@test.com" && password === "1234"){
        return{
            token: "jwt token",
            user: {
                id: 1,
                name: "admin",
                role: "admin",
                // location: "abc"
            }
        }
    }

    throw new Error("Invalid credentials");
}

async function handleLogin() {
    try{

        // type LoginResponse = Awaited<ReturnType<typeof loginUser>>

        const response: LoginResponse = await loginUser(
              "admin@test.com",
                "1234"
        )

        
        console.log('Token', response.token);
        console.log('User Name:', response.user.name);
        // console.log(response.user.location);
    }catch(error){
        console.error('Login failed');
    }
}

handleLogin();
