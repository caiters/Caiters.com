---
title: "Pfister Xtract"
date: "2015-12-15"
excerpt: "Recently I had the opportunity to work on a site that allowed me to experiment more with HTML5 audio and with animation."
---
Recently I had the opportunity to work on a site that allowed me to experiment more with HTML5 audio and with animation.

That site was the promotion for [Pfister's new Xtract technology](http://www.pfisterfaucets.com/innovations/xtract).

I had a lot of fun working on this one. I experimented with different methods of animating the "jobbies" (the little guys who represent different water contaminants). We ended up having animated gifs created of each of the little jobbies, and I animated them on the page with a mix of javascript (in some areas) and css transitions (in other areas) to give the page a little more movement and life.

Before working on this page, I'd never used GSAP, never had really experienced significant performance issues that needed to be debugged, and had never dealt with audio on a webpage in any meaningful way, except for an extremely simple 5 key piano page I experimented on earlier in 2015. By the time we finished it up, I'd done all three!

Early on in the project I knew I wanted to get the animation part down before the deadline started looming, so one day I decided to take a break from other work and focused on exactly how the animation would happen. I experimented animating with just CSS (which ended up being very challenging to get something working on the path I wanted - never mind actually looking good, which it didn't) and when that failed I decided to look into JavaScript. I specifically wanted to animate along a path so I started searching and ended up coming across GSAP. I gave it a shot and was really happy with the end result - and happy that unlike animating with CSS, it would work in all the browsers we needed to support. So the animation of the little jobbie in the water glass was taken care of!

I added some CSS transitions to allow the jobbie to move out of the glass (and back in) while audio was playing. One of my favorite transitions is so simple but I don't even care - when you hover over the play button on the Xtract home page, some little jobbies poke out from the bottom of the panel. Lots of little touches like that (but none as cool!) were spread out through the pages.

We also tied the audio events to certain things, like causing the jobbie to go in or out of the water. Unlike my simple test piano page, I wanted to be able to change things on the page based on whether audio was playing or not, and I didn't want to allow multiple audios to play at once. So I did some work to make sure that only one audio could play at a time, you could pause/resume audio whenever you wanted, and you could see a progress bar to be able to tell how far through the current audio you were.

To my dismay... toward the end of the project I ended up doing some testing on the Water Pfacts page with the jobbies and I had some huge problems. I had mostly worked in Chrome with only cursory glances in other browsers to make sure the animation was working, and that was before I'd done a lot of other work on those areas. In some browsers, the jobbies were moving lightning fast. Another browser was actually crashing after the page was open for about 30 seconds! I was completely dismayed and very concerned, because I knew we couldn't launch if we were crashing a browser.

I ended up finding the problem much more quickly than I expected - I had a few transitions that were being applied to the area with the glasses that weren't playing nice. I knew I'd found the problem when suddenly Chrome was animating too fast as well - finally all the browsers were  doing the same thing! I was able to fix the problem and tone down the animation, and we were good to go.

All in all, is the project perfect? Probably not. I wanted to put in a loading indicator for the audio and we ran out of time. (Thankfully, the audio clips are pretty small file sizes, but I still don't love the experience when you're on mobile on a slow connection.) I found a bug with my 50/50 panels in Firefox and had to come up with a last minute fix that I was not 100% happy with. If I'd had more time, I would have done nicer transitions on the Facts section of the Water Pfacts page (instead of just a fade). Overall though, I think the site turned out really well, and I'm happy to apply lessons learned from this one to the next.
