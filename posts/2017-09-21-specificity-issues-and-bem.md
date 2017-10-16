---
title: "Specificity issues and BEM CSS"
date: "2017-09-21"
excerpt: "..."
---

Recently at work we had an issue pop up where during accessibility testing we realized that in some cases it was difficult (impossible without hovering) to distinguish between text that was a link and text that was bold. I raised this as an accessibility/usability issue and we discussed a bunch of options, which eventually turned to us deciding to change the default link styling to be a dark teal with an underline.

Changing something as basic as a link style can be pretty scary. Links are used all over the site -- call to action buttons, text links, navigation links, footer links, etc. Just changing the `a` tag had a lot of implications across the entire site.

So it ends up being super tempting to be like... well, it's only in the body content. All of the HTML content blocks in the CMS get a class of `.htmlcontentblock` so let's just style all links in there.

Don't do it!

The website in question was built with BEM CSS principles in mind, which means that pretty much everything has a really low specificity. When you add a rule like `.htmlcontentblock a`, it's going to have much further implications than it might seem. In this case, all `.btn` components within content blocks ended up getting affected, and some links that should have been caught weren't because they were within an accordion, not a content block. More changes were made to try to override those issues, which then led to a pagination component having the wrong color, and a bunch of news article headlines turned white (on a white background).

Welcome to... specificity hell.

Once the new set of issues appeared, all CSS changes were reverted. So now we're back
