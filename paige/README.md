# NPM packages

## Update instructions

If you update Bootstrap, copy node_modules/bootstrap/scss/vendor/_rfs.scss to assets/paige/bootstrap/scss/_vendor/_rfs.scss.

`node_modules/bootstrap` was manually modified to apply a
[critical fix](https://github.com/twbs/bootstrap/commit/f77117141dfe34d8fe984eabddf660e29cb96a57)
that came after 5.3.0-alpha2.
Once the fix is included in an NPM package, remove the modification.
