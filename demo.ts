// Example 1: String reuturn type
function getMessage(name:string){
    return `Hello, ${name}`; 
}

// Extract return type
type MessageType = ReturnType<typeof getMessage>;

//Demo usage
const message: MessageType= 'Hello'
console.log('Message', message);


// -------------------------------------

// Example 2: Object reuturn type
function createUser(){
    return {
        id: 1,
        userName: "demo-account",
        role: "admin"
    }; 
}

// Extract return type
type User = ReturnType<typeof createUser>;

// Demo usage
const user: User= {
    id: 2,
    userName: "demo-user",
    role: "admin"
}
console.log('User', user);

// -------------------------------------

// Example 3: Async function
async function fetchData(){
    return {
        success: true,
        data: [1,2,3]
    }; 
}

// ReturnType gives Promises...
type result = ReturnType<typeof fetchData>;

// Unwrap the promise...
type FetchReturn = Awaited<result>;

// Demo usage
const mockData: FetchReturn= {
    success: true,
    data: [4,5,6]
}
console.log('Fetched Data:', mockData);