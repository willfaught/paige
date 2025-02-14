# Paige example site

If you move the directory exampleSite out of its parent directory,
you must remove this line from the file exampleSite/go.mod:

```
replace github.com/willfaught/paige => ../
```

and then run this command:

```
$ cd exampleSite
$ hugo mod get github.com/willfaught/paige@latest
```
