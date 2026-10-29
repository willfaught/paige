+++
authors = ["author-demo"]
categories = ["paige", "shortcodes"]
description = "Demonstration of the figure shortcode."
tags = ["figures"]
title = "Figure"
+++

The `paige-figure` shortcode displays content in a figure.

<!--more-->

## Basic

Code:

```go-html-template
{{</* paige-figure */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Caption parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Float parameter

Code:

```go-html-template
{{</* paige-figure float="start" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="start" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

---

Code:

```go-html-template
{{</* paige-figure float="end" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="end" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

---

Code:

```go-html-template
{{</* paige-figure float="start" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure float="end" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="start" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure float="end" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

---

Code:

```go-html-template
{{</* paige-figure float="start" */>}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="start" >}}
{{< paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" >}}
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

---

Code:

```go-html-template
{{</* paige-figure float="end" */>}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="end" >}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

---

Code:

```go-html-template
{{</* paige-figure float="start" */>}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{</* /paige-figure */>}}

{{</* paige-figure float="end" */>}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{</* /paige-figure */>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.
```

Result:

{{< paige-figure float="start" >}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{< /paige-figure >}}

{{< paige-figure float="end" >}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" width="20rem" */>}}
{{< /paige-figure >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Est lorem ipsum dolor sit amet. Consequat mauris nunc congue nisi. Sodales ut etiam sit amet nisl purus in mollis nunc. Vehicula ipsum a arcu cursus vitae congue. Ultrices eros in cursus turpis massa tincidunt dui. Aliquet bibendum enim facilisis gravida. Eu turpis egestas pretium aenean pharetra magna ac placerat. Sed turpis tincidunt id aliquet risus feugiat. Gravida neque convallis a cras. Cras ornare arcu dui vivamus arcu felis bibendum. Vulputate dignissim suspendisse in est. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl nisi scelerisque eu ultrices vitae auctor eu. Tortor pretium viverra suspendisse potenti nullam ac. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Facilisis gravida neque convallis a cras semper auctor neque vitae. In dictum non consectetur a erat nam at lectus urna. Eu lobortis elementum nibh tellus. Interdum varius sit amet mattis vulputate. Quisque id diam vel quam elementum pulvinar etiam non quam. Tellus mauris a diam maecenas sed enim ut. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui.

<div class="clearfix"></div>

## Horizontal parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" horizontal="start" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" horizontal="center" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" horizontal="end" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" horizontal="start" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" horizontal="center" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" horizontal="end" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Maxwidth parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" maxwidth="5rem" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" maxwidth="5rem" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

---

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" maxwidth="20rem" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" maxwidth="20rem" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Number parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" number=7 */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" number=7 >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

---

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" number="G" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" number="G" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Numbered parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" numbered=true */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" number=3 */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" numbered=true */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" numbered=true >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" number=3 >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" numbered=true >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Vertical parameter

Code:

```go-html-template
<div class="column-gap-3 d-flex justify-content-between" style="height: 20rem">

{{</* paige-figure caption="Hickory Dickory Dock" vertical="start" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" vertical="center" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

{{</* paige-figure caption="Hickory Dickory Dock" vertical="end" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}

</div>
```

Result:

<div class="column-gap-3 d-flex justify-content-between" style="height: 20rem">

{{< paige-figure caption="Hickory Dickory Dock" vertical="start" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" vertical="center" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

{{< paige-figure caption="Hickory Dickory Dock" vertical="end" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

</div>

## Width parameter

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" width="5rem" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" width="5rem" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

---

Code:

```go-html-template
{{</* paige-figure caption="Hickory Dickory Dock" width="20rem" */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Hickory Dickory Dock" width="20rem" >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-figure >}}

## Nested code shortcode

Code:

```go-html-template
{{</* paige-figure caption="Code shortcode" */>}}
{{</* paige-code lang="python" */>}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{</* /paige-code */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Code shortcode" >}}
{{< paige-code lang="python" >}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{< /paige-code >}}
{{< /paige-figure >}}

## Nested email shortcode

Code:

```go-html-template
{{</* paige-figure caption="Email shortcode" */>}}
{{</* paige-email address="example@example.com" */>}}E-mail me{{</* /paige-email */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Email shortcode" >}}
{{< paige-email address="example@example.com" >}}E-mail me{{< /paige-email >}}
{{< /paige-figure >}}

## Nested icon shortcode

Code:

```go-html-template
{{</* paige-figure caption="Icon shortcode" */>}}
{{</* paige-icon class="bi bi-github" */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Icon shortcode" >}}
{{< paige-icon class="bi bi-github" >}}
{{< /paige-figure >}}

## Nested image shortcode

Code:

```go-html-template
{{</* paige-figure caption="Image shortcode" */>}}
{{</* paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Image shortcode" >}}
{{< paige-image src="https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1296" >}}
{{< /paige-figure >}}

## Nested quote shortcode

Code:

```go-html-template
{{</* paige-figure caption="Quote shortcode" */>}}
{{</* paige-quote */>}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{</* /paige-quote */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Quote shortcode" >}}
{{< paige-quote >}}
Hickory dickory dock.<br>
The mouse ran up the clock.<br>
The clock struck one,<br>
The mouse ran down,<br>
Hickory dickory dock.
{{< /paige-quote >}}
{{< /paige-figure >}}

## Nested request shortcode

Code:

```go-html-template
{{</* paige-figure caption="Request shortcode" */>}}
<pre>
{{</* paige-request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" */>}}
</pre>
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Request shortcode" >}}
<pre>
{{< paige-request "https://raw.githubusercontent.com/willfaught/paige/master/LICENSE" >}}
</pre>
{{< /paige-figure >}}

## Nested tabs shortcode

Code:

```go-html-template
{{</* paige-figure caption="Tabs shortcode" */>}}
{{</* paige-tabs */>}}
{{</* paige-tabs-buttons */>}}
{{</* paige-tabs-button */>}}JSON{{</* /paige-tabs-button */>}}
{{</* paige-tabs-button */>}}TOML{{</* /paige-tabs-button */>}}
{{</* paige-tabs-button */>}}YAML{{</* /paige-tabs-button */>}}
{{</* /paige-tabs-buttons */>}}
{{</* paige-tabs-panes */>}}
{{</* paige-tabs-pane */>}}
{{</* paige-code lang="json" */>}}
{"foo": 123}
{{</* /paige-code */>}}
{{</* /paige-tabs-pane */>}}
{{</* paige-tabs-pane */>}}
{{</* paige-code lang="toml" */>}}
foo = 123
{{</* /paige-code */>}}
{{</* /paige-tabs-pane */>}}
{{</* paige-tabs-pane */>}}
{{</* paige-code lang="yaml" */>}}
foo: 123
{{</* /paige-code */>}}
{{</* /paige-tabs-pane */>}}
{{</* /paige-tabs-panes */>}}
{{</* /paige-tabs */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Tabs shortcode" >}}
{{< paige-tabs >}}
{{< paige-tabs-buttons >}}
{{< paige-tabs-button >}}JSON{{< /paige-tabs-button >}}
{{< paige-tabs-button >}}TOML{{< /paige-tabs-button >}}
{{< paige-tabs-button >}}YAML{{< /paige-tabs-button >}}
{{< /paige-tabs-buttons >}}
{{< paige-tabs-panes >}}
{{< paige-tabs-pane >}}
{{< paige-code lang="json" >}}
{"foo": 123}
{{< /paige-code >}}
{{< /paige-tabs-pane >}}
{{< paige-tabs-pane >}}
{{< paige-code lang="toml" >}}
foo = 123
{{< /paige-code >}}
{{< /paige-tabs-pane >}}
{{< paige-tabs-pane >}}
{{< paige-code lang="yaml" >}}
foo: 123
{{< /paige-code >}}
{{< /paige-tabs-pane >}}
{{< /paige-tabs-panes >}}
{{< /paige-tabs >}}
{{< /paige-figure >}}

## Nested Vimeo shortcode

Code:

```go-html-template
{{</* paige-figure caption="Vimeo shortcode" */>}}
{{</* paige-vimeo video="112836958" */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="Vimeo shortcode" >}}
{{< paige-vimeo video="112836958" >}}
{{< /paige-figure >}}

## Nested YouTube shortcode

Code:

```go-html-template
{{</* paige-figure caption="YouTube shortcode" */>}}
{{</* paige-youtube video="dQw4w9WgXcQ" */>}}
{{</* /paige-figure */>}}
```

Result:

{{< paige-figure caption="YouTube shortcode" >}}
{{< paige-youtube video="dQw4w9WgXcQ" >}}
{{< /paige-figure >}}
