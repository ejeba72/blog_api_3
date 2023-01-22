8:36 sat jan14 2022

NAMES OF ROUTES:
general route
edit route
user route
dev route (for development purpose only)

LINE OF ACTION:
** The first thing I will do is to create this api without standard authentication. i.e. with how you can do it right now (I'm brain rusty, at the moment, with my knowledge of JWT and such). So, I will start with what I can recall, and build the app with a freestyle approach.
** Then I'll go ahead to research what I have forgetten.


9:21 thu jan19 2023

USER SCHEMA
1. first_name
  * string
  * trim string
  * required
  * not be more than 50 char
   

TO-DO LIST:
  1. (DONE) set up a dev route and refactor your code accordingly.
  1. develop your user model
    * firstName property = {
      dataType: string
      required: 'Hey, your first name is required!'
      trim: "first_name should be string"
      maximum_length: "50 char"
    }
    * lastName property = "same as first_name above"
    * email property = {    
      type
      unique
      trim
      lowercase
      require
      validate
    }
    * password property = {
      datatype
      required
      minLength
      maxLength
    }
