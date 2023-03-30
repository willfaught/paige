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
    diff --git a/paige/node_modules/bootstrap/scss/vendor/_rfs.scss b/paige/node_modules/bootstrap/scss/_vendor/_rfs.scss
    similarity index 100%
    rename from paige/node_modules/bootstrap/scss/vendor/_rfs.scss
    rename to paige/node_modules/bootstrap/scss/_vendor/_rfs.scss
    diff --git a/paige/node_modules/bootstrap/scss/bootstrap-grid.scss b/paige/node_modules/bootstrap/scss/bootstrap-grid.scss
    index 52bd577..c82f6bc 100644
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

3. Apply this patch if needed:

    ```diff
    diff --git a/paige/node_modules/bootstrap/scss/_carousel.scss b/paige/node_modules/bootstrap/scss/_carousel.scss
    index b17d27f493b..0ac8f8714fb 100644
    --- a/paige/node_modules/bootstrap/scss/_carousel.scss
    +++ b/paige/node_modules/bootstrap/scss/_carousel.scss
    @@ -230,9 +230,15 @@

     @if $enable-dark-mode {
       @include color-mode(dark) {
    -    .carousel,
    -    &.carousel {
    -      @include carousel-dark();
    +    @if $color-mode-type == "media-query" {
    +      .carousel {
    +        @include carousel-dark();
    +      }
    +    } @else {
    +      .carousel,
    +      &.carousel {
    +        @include carousel-dark();
    +      }
         }
       }
     }
    ```
