---
categories: [paige]
date: "2023-01-03"
description: Demonstration of the Paige code shortcode.
tags: [figures, shortcodes]
title: Code Shortcode
---

Code:

```go-text-template
{{</* paige/code */>}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{</* /paige/code */>}}
```

Result:

{{< paige/code >}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{< /paige/code >}}

---

Code:

```go-text-template
{{</* paige/code */>}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{</* /paige/code */>}}

{{</* paige/code */>}}
q = 'q = %s%s%s; print(q %% (chr(39), q, chr(39)))'; print(q % (chr(39), q, chr(39)))
{{</* /paige/code */>}}
```

Result:

{{< paige/code >}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{< /paige/code >}}

{{< paige/code >}}
q = 'q = %s%s%s; print(q %% (chr(39), q, chr(39)))'; print(q % (chr(39), q, chr(39)))
{{< /paige/code >}}

---

Code:

```go-text-template
{{</* paige/code caption="Python quine" */>}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{</* /paige/code */>}}
```

Result:

{{< paige/code caption="Python quine" >}}
q = 'q = %s%s%s; print(q %% (chr(39), q, chr(39)))'; print(q % (chr(39), q, chr(39)))
{{< /paige/code >}}

---

Code:

```go-text-template
{{</* paige/code caption="Python quine" */>}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{</* /paige/code */>}}

{{</* paige/code caption="Another Python quine" */>}}
q = 'q = %s%s%s; print(q %% (chr(39), q, chr(39)))'; print(q % (chr(39), q, chr(39)))
{{</* /paige/code */>}}
```

Result:

{{< paige/code caption="Python quine" >}}
q = 'q = %r; print(q %% q)'; print(q % q)
{{< /paige/code >}}

{{< paige/code caption="Another Python quine" >}}
q = 'q = %s%s%s; print(q %% (chr(39), q, chr(39)))'; print(q % (chr(39), q, chr(39)))
{{< /paige/code >}}

---

Code:

```go-text-template
{{</* paige/code caption="Who you gonna call?" */>}}
                       ---
                    -        --
                --( /     \ )XXXXXXXXXXXXX
            --XXX(   O   O  )XXXXXXXXXXXXXXX-
           /XXX(       U     )        XXXXXXX\
         /XXXXX(              )--   XXXXXXXXXXX\
        /XXXXX/ (      O     )   XXXXXX   \XXXXX\
        XXXXX/   /            XXXXXX   \   \XXXXX----
        XXXXXX  /          XXXXXX         \  ----  -
---     XXX  /          XXXXXX      \           ---
  --  --  /      /\  XXXXXX            /     ---=
    -        /    XXXXXX              '--- XXXXXX
      --\/XXX\ XXXXXX                      /XXXXX
        \XXXXXXXXX                        /XXXXX/
         \XXXXXX                         /XXXXX/
           \XXXXX--  /                -- XXXX/
            --XXXXXXX---------------  XXXXX--
               \XXXXXXXXXXXXXXXXXXXXXXXX-
                 --XXXXXXXXXXXXXXXXXX-
{{</* /paige/code */>}}
```

Result:

{{< paige/code caption="Who you gonna call?" >}}
                       ---
                    -        --
                --( /     \ )XXXXXXXXXXXXX
            --XXX(   O   O  )XXXXXXXXXXXXXXX-
           /XXX(       U     )        XXXXXXX\
         /XXXXX(              )--   XXXXXXXXXXX\
        /XXXXX/ (      O     )   XXXXXX   \XXXXX\
        XXXXX/   /            XXXXXX   \   \XXXXX----
        XXXXXX  /          XXXXXX         \  ----  -
---     XXX  /          XXXXXX      \           ---
  --  --  /      /\  XXXXXX            /     ---=
    -        /    XXXXXX              '--- XXXXXX
      --\/XXX\ XXXXXX                      /XXXXX
        \XXXXXXXXX                        /XXXXX/
         \XXXXXX                         /XXXXX/
           \XXXXX--  /                -- XXXX/
            --XXXXXXX---------------  XXXXX--
               \XXXXXXXXXXXXXXXXXXXXXXXX-
                 --XXXXXXXXXXXXXXXXXX-
{{< /paige/code >}}

---

Code:

```go-text-template
{{</* paige/code lang="c" caption="Fast inverse square root" options="linenos=true,hl_lines=10" */>}}
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;
	i  = 0x5f3759df - ( i >> 1 );
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );

	return y;
}
{{</* /paige/code */>}}
```

Result:

{{< paige/code lang="c" caption="Fast inverse square root" options="linenos=true,hl_lines=10" >}}
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;
	i  = 0x5f3759df - ( i >> 1 );
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );

	return y;
}
{{< /paige/code >}}
