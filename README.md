![Shippable](https://img.shields.io/badge/Developerayo-approved-green.svg)
![Shippable](https://img.shields.io/wordpress/plugin/r/akismet.svg)
![Shippable](https://img.shields.io/crates/l/rustc-serialize.svg?maxAge=2592000)

## Building a Responsive Blog layout in Html,Css,Js,Nextjs

Building a Responsive Blog layout
Sometimes you ask your self, What does it mean when someone says a website is responsive? A website can be called responsive when it is 100% compatible with all devices, Cell-phones, Tablets, Desktops.
Now, Let’s look into what i cooked up for you guys as a sample on Github Let’s us all go visit [https://github.com/Developerayo/Responsive-layout-Tutorial
Please Download the github repo before proceeding 

1.To Download Repo form Githubclick the repo link [https://github.com/Developerayo/Responsive-layout-Tutorial]
2. Look for a green button that says Clone or download.
3.Once you click it, it brings out a dropdown Menu, Kindly click on Download ZIP
4.It will start download shortly.
Creating A Responsive Website 01
let’s analyse the repo now….
If you take a good look at the screenshot you would see my name is at the middle, why is that? Looking at it now its looks super cool, that’s the only reason its in the middle.
Now the slider, visit [https://www.w3schools.com/code/tryit.asp?filename=FPQ6F9U32LBN] to check out how to build a responsive slider in Html, css, javascript
Moving on>>>
Question 1: Why do i have content in the Middle and right hand side?
Ans: Because At the middle, users would be seeing early posts, if you post’s something really important, yea it is, but as soon as you post’s 7 more or 10 more it automatically floods that still important post down, so we created a left sider content were Important post are stationed for a month or so before it moves on by checking other important content


Question 2: If in mobile view wouldn't it become 1 content with all?
Ans: Ohh Yes it will!!, that’s why when you look at the site once more it was specified with a header Recommend. So yes it would join up, but once the reader reaches that aspect of the blogs its specifies that this part of the blog has important post that are set-aside.


Question 3: What is that Dummy Banner?
Ans: Now, you cannot be a blogger as a profession, and you would not advertise produce and services for people, That is specifically what the dummy banner is for, Advert of Products and services.


Question 4: What is that arrow at the bottom right and side for?
Ans: Its a scroll to top button built with javascript, look at a sample below

`— — — — — Scroll to Top — — — — — 
$(window).scroll(function() {
 if ($(this).scrollTop() >= 40) { // If page has gone down more than 40px
 $(‘#return-to-top’).fadeIn(200); // Let the arrow just faid in
 } else {
 $(‘#return-to-top’).fadeOut(200); // Else fade out the arrow
 }
});
$(‘#return-to-top’).click(function() { // When arrow is clicked
 $(‘body,html’).animate({
 scrollTop : 0 // Scroll to top of body
 }, 500);
});
 — — — — — End Scroll to Top — — — — — `
 
Built with: Html5, Css3, Javascript, Next.js.
