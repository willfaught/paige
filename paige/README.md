# NPM packages

## Update instructions

If you update Bootstrap:

1. Rename `node_modules/bootstrap/scss/vendor` to `node_modules/bootstrap/scss/_vendor`.
2. Apply this patch:

    ```diff
    --- a/paige/node_modules/bootstrap/scss/_mixins.scss
    +++ b/paige/node_modules/bootstrap/scss/_mixins.scss
    @@ -3,7 +3,7 @@
     // Used in conjunction with global variables to enable certain theme features.

     // Vendor
    -@import "vendor/rfs";
    +@import "_vendor/rfs";

     // Deprecate
     @import "mixins/deprecate";
    --- a/paige/node_modules/bootstrap/scss/bootstrap-grid.scss
    +++ b/paige/node_modules/bootstrap/scss/bootstrap-grid.scss
    @@ -13,7 +13,7 @@ $include-column-box-sizing: true !default;
     @import "mixins/grid";
     @import "mixins/utilities";

    -@import "vendor/rfs";
    +@import "_vendor/rfs";

     @import "containers";
     @import "grid";
    ```
