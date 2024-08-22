import Joi from "joi";

const addUser = Joi.object({
  name: Joi.string().required().label("name").messages({
    "string.base": "{#label} should be a type of 'text'",
    "any.required": "{#label} is a required field",
  }),
  emailSubscription:Joi.boolean(),
  mobileNumber: Joi.string()
    .length(10)
    .required()
    .pattern(/^[0-9]+$/)
    .label("mobileNumber")
    .messages({
      "string.base": "{#label} should be in a valid number format",
      "string.length":
        "{#label} should be in a valid number format with 10 digit",
      "any.required": "{#label} is a required field",
    }),
  email: Joi.string()
    .required()
    .pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    .label("email")
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.email": "{#label} should be in a valid email format",
      "any.required": "{#label} is a required field",
      message: "{#label} is not valid",
    }),
  password: Joi.string()
    .pattern(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,80}/
    )
    .required()
    .label("password")
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),
});

const password = Joi.string()
  .pattern(
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
  )
  .required()
  .messages({
    "string.base": "{#label} should be a type of 'text'",
    "string.pattern.base":
      "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
    "any.required": "{#label} is a required field",
  });

const update = Joi.object({
  id: Joi.string().messages({
    "string.base": "{#label} should be a type of 'text'",
  }),
  name: Joi.string().label("Name").messages({
    "string.base": "{#label} should be a type of 'text'",
    "any.required": "{#label} is a required field",
  }),
  mobileNumber: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .label("Mobile Number")
    .messages({
      "string.base": "{#label} should be in a valid number format",
      "string.length":
        "{#label} should be in a valid number format with 10 digit",
    }),
  password: Joi.string()
    .pattern(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
    )
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
    }),
  address: Joi.string().messages({
    "string.base": "{#label} should be a type of 'text'",
  }),
  city: Joi.string().messages({
    "string.base": "{#label} should be a type of 'text'",
  }),
  state: Joi.string().messages({
    "string.base": "{#label} should be a type of 'text'",
  }),
  zip: Joi.number().messages({
    "string.base": "{#label} should be a type of 'number'",
  }),
});

const checkOtp = Joi.object({
  mobileNumber: Joi.string()
    .length(10)
    .required()
    .pattern(/^[0-9]+$/)
    .label("Mobile Number")
    .messages({
      "string.base": "{#label} should be in a valid number format",
      "string.length":
        "{#label} should be in a valid number format with 10 digit",
      "any.required": "{#label} is a required field",
    }),
  code: Joi.string()
    .length(4)
    .required()
    .pattern(/^[0-9]+$/)
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),
});

const forget = Joi.object({
  email: Joi.string()
    .pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.email": "{#label} should be in a valid email format",
      "any.required": "{#label} is a required field",
      message: "{#label} is not valid",
    }),
  number: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .label("Mobile Number")
    .messages({
      "string.base": "{#label} should be in a valid number format",
      "string.length":
        "{#label} should be in a valid number format with 10 digit",
    }),
});

const passwordReset = Joi.object({
  password: Joi.string()
    .pattern(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
    )
    .required()
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),

  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "string.base": "{#label} should be a type of 'text'",
    "any.required": "{#label} is a required field",
  }),
});

// const passwordResetNumber = Joi.object({
//   password: Joi.string()
//     .pattern(
//       /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
//     )
//     .required()
//     .messages({
//       "string.base": "{#label} should be a type of 'text'",
//       "string.pattern.base":
//         "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
//       "any.required": "{#label} is a required field",
//     }),

//   confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
//     "string.base": "{#label} should be a type of 'text'",
//     "any.required": "{#label} is a required field",
//   }),
//   number: Joi.string()
//     .length(10)
//     .required()
//     .pattern(/^[0-9]+$/)
//     .label("Mobile Number")
//     .messages({
//       "string.base": "{#label} should be in a valid number format",
//       "string.length":
//         "{#label} should be in a valid number format with 10 digit",
//       "any.required": "{#label} is a required field",
//     }),
// });

const checkOtpForPassword = Joi.object({
  code: Joi.string()
    .length(4)
    .required()
    .pattern(/^[0-9]+$/)
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),
  password: Joi.string()
    .pattern(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
    )
    .required()
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 8 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),

  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "string.base": "{#label} should be a type of 'text'",
    "any.required": "{#label} is a required field",
  }),
});

const createAdmin = Joi.object({
  name: Joi.string().required().label("Name").messages({
    "string.base": "{#label} should be a type of 'text'",
    "any.required": "{#label} is a required field",
  }),
  email: Joi.string()
    .required()
    .pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.email": "{#label} should be in a valid email format",
      "any.required": "{#label} is a required field",
      message: "{#label} is not valid",
    }),
  password: Joi.string()
    .pattern(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{6,80}/
    )
    .required()
    .messages({
      "string.base": "{#label} should be a type of 'text'",
      "string.pattern.base":
        "{#label} should be in a valid password of min 6 letter length, with at least a symbol, upper and lower case letters and a number",
      "any.required": "{#label} is a required field",
    }),
});

const abc = {
  addUser,
  password,
  update,
  checkOtp,
  forget,
  passwordReset,
  // passwordResetNumber,
  checkOtpForPassword,
  createAdmin,
};

export default abc;
