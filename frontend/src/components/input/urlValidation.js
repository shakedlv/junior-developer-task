function isValidHttpUrl(string){
    const urlPattern = /^(https?:\/\/)(www\.)[a-zA-Z0-9-]+\.[a-z]{2,}([\/?].+)?$/;
    console.log(urlPattern.test(string))
    return urlPattern.test(string);
}

export default isValidHttpUrl;

