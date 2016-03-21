---
title: "IE8 Display: None Bug"
date: "2010-03-22"
excerpt: "I was given the task at work to fix a problem with a form that we have here.  After going through the issues (related to some scripts that were being included twice on the page) I realized that in IE8, and IE8 only, the form wasn’t displaying anything at all."
---
I was given the task at work to fix a problem with a form that we have here.  After going through the issues (related to some scripts that were being included twice on the page) I realized that in IE8, and IE8 only, the form wasn’t displaying anything at all.  Some of the CSS being applied to the form was there (a background image in particular) but that was it!  It showed up in the source just fine, and (even weirder) was fine in every other browser I tested quickly, including IE7.

First thing I did was remove all of the html on the page so it was only the form and the css – still not working.  I thought it was a problem with the form, but then I noticed the form was working fine on all of the other pages it is being included on.

So I removed all the css. The form suddenly shows up!

Great, so I’ve narrowed down the problem.  I removed a chunk of css and it disappeared.  Read through what I deleted – and included there was:

`.FormBoxBackground p {display:none; }`

Removing that fixed the problem.  What is especially odd to me however is… there are no p tags in this form that should be doing this!  Regardless, removing that css fixed the problem.  Definitely explains why everything was fine in the other browsers, though.  IE8 is assuming a paragraph tag where there is no paragraph tag!
