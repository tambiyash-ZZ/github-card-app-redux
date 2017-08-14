export const removeMember = (username) => {
    console.log("You want to delete user: ", username);
    return {
        type: 'REMOVE_MEMBER',
        username: username
    }
};
