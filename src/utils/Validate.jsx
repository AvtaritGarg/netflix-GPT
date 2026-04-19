export const checkValidData = (email,password,fullName)=>{
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    const checkName = /^[a-zA-Z\s]+$/.test(fullName)

    if(!emailValid) return "Email is not valid";
    if(!passwordValid) return "Password is not valid"
    if(!checkName) return "Name is not a valid name"

    return null;
}