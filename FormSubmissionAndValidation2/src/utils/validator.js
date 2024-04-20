const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const URL_PATTERN = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/

const validator = {
  validateTextLength: (text, minLength = 1) => text != null && text.trim().length >= minLength,
  validateEmail: function (email) {
    return EMAIL_PATTERN.test(email)
  },
  validateUrl: function (url) {
    return URL_PATTERN.test(url)
  }
};

export default validator;