import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.IwIcPt9L.js";const m=JSON.parse('{"title":"Intro","description":"","frontmatter":{},"headers":[],"relativePath":"public/chatWithXata-13Feb24.md","filePath":"public/chatWithXata-13Feb24.md"}'),r={name:"public/chatWithXata-13Feb24.md"},i=o('<h1 id="intro" tabindex="-1">Intro <a class="header-anchor" href="#intro" aria-label="Permalink to &quot;Intro&quot;">​</a></h1><p>Great to have a chat with you. I really liked the idea of having a chat with someone from xata instead of filling in a feedback form. We have a small project that makes use of your free tier and even though we might grow out of the free tier, it wont be by much. Your pricing is very generous and better than AirTable for example</p><h1 id="what-are-we-building" tabindex="-1">What are we building? <a class="header-anchor" href="#what-are-we-building" aria-label="Permalink to &quot;What are we building?&quot;">​</a></h1><p>We are building a form for users to fill in details about their groups, personal profiles and the projects they have created. Letting them link multiple aspects together. So a group has many members and people have 0 or many groups and each profile can have 1 or many projects. and there are more tables and relationships to come.</p><p>We then have a separate process for retrieving all the data and downloading the images to be used to generate easy to use data in json format. The json and images are then used to generate the event website and schedule</p><h2 id="pros-of-xata" tabindex="-1">Pros of Xata <a class="header-anchor" href="#pros-of-xata" aria-label="Permalink to &quot;Pros of Xata&quot;">​</a></h2><p>I love the logo, I used xata before for a small side project and the wings of the butterfly were different colors, red and blue. I made a presentation where I was showing the different options that we could make use of, I right clicked the icon on the home page so that I could add the logo to the presentation and was pleasantly surprised by the context menu that had options for copying the svg and even a link to the brand guideline, very cool.</p><p>Image transformations looks really powerful, I haven&#39;t had time to play with it much, I have only transformed the the image by removing the metadata. In the future I would like to compress the images before uploading to xata</p><h1 id="things-that-can-be-improved" tabindex="-1">Things that can be improved <a class="header-anchor" href="#things-that-can-be-improved" aria-label="Permalink to &quot;Things that can be improved&quot;">​</a></h1><p>If I run the <code>xata init</code>, it creates a .xatarc file, this contains the database string. I removed that, since I don&#39;t want it in the git history of this open source project. The database string has stayed out of the file and I am happy with that, but if I run <code>xata codegen</code> it generates the xata.ts file, but within it, there is a defaultOptions object that has the db url. I keep forgetting to remove it and have checked in the url a few times already.</p>',10),n=[i];function h(s,d,l,c,p,u){return a(),t("div",null,n)}const g=e(r,[["render",h]]);export{m as __pageData,g as default};