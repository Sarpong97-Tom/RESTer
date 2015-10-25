# RESTer

A REST client for almost any web service.

You can...

* perform HTTP requests with any method, URL, body and custom headers.
* save favorite requests and organize them in collections.
* view a history of your requests, which includes the full request and response.

The add-on supports the following goodies:

* Create and save your authorization headers with Basic or OAuth2 authentication.
* Use shortcuts for the frequently used actions (try pressing "?" to see the available shortcuts for the current context).

## Develop

### Dependencies

The project requires:

* `node` in a version >= 4.
* The package `jpm` to be installed globally.

Install all other dependencies with the following command:

    npm install

### Build

Some parts of the add-on need to be build. Execute this command on the first start and after changing bower dependencies:

    npm run build

### Test

Use either the following command to test just the website locally (when doing this, you might want to include the *rester.mock.js* service, instead of the real *rester.js* service, because the add-on is not available):

    npm run serve

Or you can use one of the following shortcuts for *jpm* to run the full add-on in the browser:

    npm run post
    npm run watchpost

These commands require the awesome [Extension Auto-Installer](https://addons.mozilla.org/de/thunderbird/addon/autoinstaller). In addition you might need to set the setting `xpinstall.signatures.required` in about:config to `false`.
