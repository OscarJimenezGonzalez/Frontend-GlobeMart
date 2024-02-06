export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|es|net)$/;
    return regex.test(email);
};

