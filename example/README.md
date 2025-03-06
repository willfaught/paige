# Paige example site

If you move the directory example out of its parent directory,
you must remove this line from the file example/go.mod:

```
replace github.com/willfaught/paige => ../
```

and then run this command:

```
$ cd example
$ hugo mod get github.com/willfaught/paige@latest
```
