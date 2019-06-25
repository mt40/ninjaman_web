This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Add Vietnamese translations
It is very simple to add VN translation for a string you see on the website. For example, let's try the string `Choose the type of service`

![image][choose_type_of_sv]

Open file [src/config/vn.ts][vn.ts] by going to that link and click *Edit this file* (the pencil icon). Then add this line right above the closing brace `}`:
```
'Choose the type of service': 'Chọn loại dịch vụ',
```

The format is **'english': 'vietnamese'**. Add a line like that for each string you want to translate. After you are done, check *Create a new branch for this commit...* then click *Propose file change*. After any admin approve the change, it will be deployed to the website.

## Edit service data

Same as adding translation, except that you must edit predefined data in file [src/config/services.tsx][services.tsx].

## Edit service pricing

Same as above but use file [src/config/prices.ts][prices.ts].

## Deploy
Simply push to `master` and Heroku will pick up the code to build and deploy automatically.

- Heroku Dashboard: https://dashboard.heroku.com/apps/ninjaman-web
- App will be deployed to: https://ninjaman-web.herokuapp.com/

## Local development

Here I use `yarn` but you can also use `npm`.

Install dependencies with `yarn install`. Then run the app with `yarn start`.

If for some reasons, you want to build the production version, run `yarn build`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[services.tsx]: https://github.com/mt40/ninjaman_web/blob/master/src/config/services.tsx
[prices.ts]: https://github.com/mt40/ninjaman_web/blob/master/src/config/prices.ts
[choose_type_of_sv]: /public/images/choose_type_of_sv.png
[vn.ts]: https://github.com/mt40/ninjaman_web/blob/master/src/config/vn.ts
