# Paige example site

If you move this directory out of its parent directory,
you must remove this line from the file go.mod:

```
replace github.com/willfaught/paige => ../
```

and then run this command:

```
$ cd exampleSite
$ go get github.com/willfaught/paige@latest
```
