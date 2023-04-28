type UserInfo = {
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    address: string,
}

async function createUser(event: UserInfo) {
    if(event.firstname && event.lastname) {
        //perform admin registration
    }
    else {
 
    }
}


export function handler () {
 return null
}