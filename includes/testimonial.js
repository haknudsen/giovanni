// JavaScript Document
var quote = [
'<h3>This work is absolutely phenomenal !!!!  You guys are awesome...  We are very, very pleased and look forward to working with you guys on other projects.</h3><h4><span class="highlight">Ralph Donaldson Jr.</span>- WiseThink Health </h4>',
'<h3>I love it.. Looks great. You guys do great work and Chantel is beautiful. I and my boss are impressed. We have several others we want you to do for us.</h3><h4><span class="highlight">Dan Cusack</span>- Superior Surgical, LLC </h4>',
'<h3>I just wanted to give KUDOS to the production of the latest video made on www.hafha.com...I love the way it was made and how it is displayed on the site.</h3><h4><span class="highlight">Marty</span>- Virginia Homes </h4>',
'<h3>Please get that on our website immediately! Love it, love it, love it! Awesome job to everyone involved!! ... I will absolutely be sending more clients your way!</h3><h4><span class="highlight">Derek</span>- PC Austin </h4>',
'<h3>I really appreciate your wonderful assistance and expertise here.  Working with you guys continues to be excellent.  Thanks again.</h3>       <div id="testimonalname"></h3><h4><span class="highlight">Sean Childs</span>- Horizon Marketing Group</h4>',
'<h3>Excellent!  Great job, and excellent turn-around.  You will definitely be hearing from us again.  Thanks!</h3><h4><span class="highlight">Rick Lamberson</span>- BlueWater Inet Group</h4>', 
'<h3>Excellent!  Installed in just   seconds and works great!</h3><h4><span class="highlight">Thomas Kain</span>- Dealer World</h4>',
'<h3>I had an exceptionally tight deadline... WebsiteTalkingHeads® went above and beyond to ensure my project was completed on time.</h3><h4><span class="highlight">Benjamin Croft</span>- WBECS</h4>',
'<h3>It was sincerely my pleasure in doing business with you.  Refreshing in having your "Customer Service" ... so Prompt & Accurate!!!</h3><h4><span class="highlight">Mike Svestka</span>- Printing Industry Exchange</h4>', 
'<h3>Thanks so much for the GREAT customer service.  You guys were prompt in the order process; quick to respond to emails, & cordial over the Phone.</h3><h4><span class="highlight">Tim &amp; Greg</span>- Rainbow RV</h4>', 
'<h3>I could not be happier with the product, with your service, and with your company.  I hope to need your services many more times! Thanks a million!</h3><h4><span class="highlight">Kevin Ramsey</span>- Urban Cards & Comics</h4>', 
'<h3>Guys this is so cool, you did a great job.  Thanks, more than I could hope for, but just what I wanted.  We will work together again, count on it</h3> <div id="testimonalname"></h3><h4><span class="highlight">Gabriel McCrea</span>- Search Corp</h4>',      
'<h3>Thank you very much! The video looks absolutely wonderful and meets our   expectations 100% - this is a great job. Please convey my thanks to the team and   Chantel.</h3><h4><span class="highlight">Damith Perera</span>- SEOLIX</h4>',
];
 var i = 0;  

setInterval(function (){
	"use strict";
  document.getElementById("quoteBlock").innerHTML = quote[i++];
  // start over if i === dictionary length
  i = quote.length === i ? 0 : i;
}, 5000);



