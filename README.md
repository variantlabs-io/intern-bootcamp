# Use Case

## 1.

- Write `/login` route with `post` method

  - Accepts email and password in the body
  - Compare the email and password with the with the pre-defined emails and passwords
  - If the email and password match, return a `Login Success` Message or `Login Failed` Message

## 2.

- Write `/signup` route with `post` method
  - Accepts email and password in the body
  - return the email and password in the body

## 3.

- Write a `user/data?size=10` route with `get` method
  - return a array of emails and passwords generated from faker.js.
  - Size of the data should be same as the `size` query parameter in the url.
