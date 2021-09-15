export const setUserLogged = (user) => {
    localStorage.setItem("userLogged", JSON.stringify(user));
};

export const getUserLogged = () => {
    const user = localStorage.getItem("userLogged");
    return JSON.parse(user);
};

export const deleteSession = async () => {
    localStorage.removeItem("userLogged");
};