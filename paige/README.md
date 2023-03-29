# NPM packages

## Update instructions

If you update Bootstrap, rename `node_modules/bootstrap/scss/vendor` to `node_modules/bootstrap/scss/_vendor`.

`node_modules/bootstrap` is modified to apply a
[critical fix](https://github.com/twbs/bootstrap/commit/f77117141dfe34d8fe984eabddf660e29cb96a57)
that came after 5.3.0-alpha2.
Once the fix is included in an NPM package, remove the modification.
