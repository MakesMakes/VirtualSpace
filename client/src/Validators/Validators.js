export const required = (value) => {
    if (value) return undefined
    return "Field is required"
}

export const minLengthPassworCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length of password is ${minLength} symbol`;
    return undefined
}