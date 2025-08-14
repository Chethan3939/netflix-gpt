export const validateData = (email, password, fullName) => {
    
    const isFullName = /^[a-zA-Z\s]+$/.test(fullName);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password); 

    if(!isEmailValid) return "Email is not Invalid";
    if(!isPasswordValid) return "Password is not Invalid";
    if (!fullName === "" && !isFullName) return "Full Name is not Valid";

    return ''; // All validations passed
} 