const validator = {
  emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  urlPattern: /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,
  
  validateTextLength: (text, minLength = 1) => text != null && text.trim().length >= minLength,
  validateEmail: function (email) {
    console.log(`validator: ${this}`)
    return this.emailPattern.test(email)
  },
  validateUrl: function (url) {
    return this.urlPattern.test(url)
  }
};

export default validator;