function isValidHttpUrl(string){
    const urlPattern = /^(https?:\/\/)(www\.)[a-zA-Z0-9-]+\.[a-z]{2,}([\/?].+)?$/;
    return urlPattern.test(string);
}

export default isValidHttpUrl;

