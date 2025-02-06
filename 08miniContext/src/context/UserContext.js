import React from 'react'

const UserContext = React.createContext()

export default UserContext;

/*
When we make a context we also have to make a provider which gave access to the variable to components inside it.
Syntax for provider is to wrap it with context component.
For Ex :-
<UserContext>
    <Login/>
    <Card>
        <DashBoard/>
    <Card/>
<UserContext/>
It is used to manage states when components inside it can access the states of the variable.
Note:- We don't use Gobal file for variable because then any component can change it which is not good for state management.
*/