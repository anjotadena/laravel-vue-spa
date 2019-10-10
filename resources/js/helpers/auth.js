export const login = (credentials) => {
    return new Promise((resolve, reject) => {
        return axios.post('/api/auth/login', credentials)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                resolve(error.response.data);
            });
    });
};

export const getLocalUser = () => {
    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
};
