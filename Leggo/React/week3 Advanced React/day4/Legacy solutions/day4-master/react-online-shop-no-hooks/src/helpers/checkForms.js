export const checkForm = data => {
    const errors = {};
    const keys = Object.keys(data)

    if (keys.length) {
        keys.forEach( key => {
            if ((key === 'email' && (data[key].length < 7 || !data[key].includes('@')))) errors[key] = `Please enter a valid ${key}`;
            if (!(key === 'email') && data[key] === '') errors[key] = `Please enter a ${key}`;
        });
    }

    return errors;
}