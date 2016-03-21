---
title: "IE6, IE7, and a weird padding on top of my LI elements"
date: "2010-04-27"
excerpt: "I had a ul with top padding of 10px with a variety of li’s inside that was causing some strange padding issues in IE6 and IE7."
---
I had a ul with top padding of 10px with a variety of li’s inside.

```
<ul>
   <li><a href="#">Music Production</a></li>
   <li class="odd"><a href="#">Guitar</a></li>
   <li><a href="#">Songwriting</a></li>
   <li class="odd"><a href="#">Bass</a></li>
   <li><a href="#">Arranging</a></li>
   <li class="odd"><a href="#">Keyboard</a></li>
   <li><a href="#">Voice</a></li>
   <li class="odd last"><a href="#">Theory, Harmony &amp; Ear Training</a></li>
   <li class="last"><a href="#">Music Business</a></li>
</ul>
```

Here's the CSS:

```
#courses-and-programs ul {
   list-style: none;
   margin: 0;
   padding: 10px 0 0 0;
   font-size: 1.1em;
   font-weight: bold;
   border-top: 1px dashed #ccc;
}
#courses-and-programs ul li {
   margin: 0;
   padding: 0;
   border-bottom: 1px solid #ccc;
   line-height: 1.8;
   display: inline;
   float: left;
   width: 47%;
}
#courses-and-programs ul li.odd {
   margin: 0 0 0 10px;
   float: right;
}
#courses-and-programs ul li a {
   text-decoration: none;
   padding: 0;
   margin: 0;
}
#courses-and-programs ul li a:hover {
   color: #333;
}
```

Removing the floats and the width made the padding disappear. I thought it was kind of odd and started looking into it more… and then I noticed the CSS on the ul with the top 10px of padding. I removed it on a whim, and IE6/IE7 found themselves magically fixed. I was getting an extra 10px of padding on the top of the li’s just because I had it on the ul.

Thanks, IE, for assuming that I wanted that extra padding on every li! Anyway, it’s fixed now, and instead of padding on the top I am using margin :)
