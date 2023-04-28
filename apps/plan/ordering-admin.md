# Ordering Admin

Ordering admin manages everything related to the system from user approval to user management, order management.

### Approve User

Approve user is to be handled by a super user. The super user is to be called `superAdmin`. The super user can accept or decline a new user registration.

### Create Users

Before user can be approved, we are to create users, to do this, where be creating an API gateway endpoint `users` attching it to trpc mutation `create-users`. The create `users` accepts the following input and returns the following output.

- create Users Input

```ts
type newUser = {
  firstname: string
  lastname: string
  email: string
  password: string
  phone: string
  address: string
  category: string
  state: string
}
```

- return type

```ts
type response = {
  username: string
}
```

The user details is inserted into postgress database and the password is encrypted as well.

## Assign User to group

Assign user to group is where a user is assigned to a particular group base on location, service categories and so on.
