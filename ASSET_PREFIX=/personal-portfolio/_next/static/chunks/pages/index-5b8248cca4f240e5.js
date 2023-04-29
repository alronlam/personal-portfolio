(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7591)}])},7591:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var i=a(5893),s=a(9008),r=a.n(s),n=a(5675),o=a.n(n),l=a(9583),c=a(6893),h=a(9653),d=a.n(h);function g(e){let{projects:t}=e;return(0,i.jsxs)("div",{className:d().featuredProjects,children:[(0,i.jsx)("h1",{children:"Featured Projects"}),t.map(e=>{var t;return(0,i.jsxs)("div",{className:d().project,children:[(0,i.jsx)(o(),{src:"".concat("/personal-portfolio").concat(e.image),alt:e.title,width:500,height:500}),(0,i.jsxs)("div",{className:d().projectDetails,children:[(0,i.jsxs)("h3",{children:[e.title,(t=e.tags,(0,i.jsx)("div",{className:d().tagContainer,children:t.map(e=>(0,i.jsx)("div",{className:"".concat(d().tag," ").concat(d()["tag-".concat(e.toLowerCase())]),children:e},e))}))]}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}}),(0,i.jsxs)("div",{className:d().projectLinks,children:[(0,i.jsxs)("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(c.AlO,{})," Demo"]})," | ",(0,i.jsxs)("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(l.hJX,{})," GitHub"]})]})]})]},e.id)})]})}var m=a(1664),p=a.n(m),u=a(7839),f=a.n(u),_=a(2717),j=a.n(_);let x="Alron Lam",b="Portfolio";function w(e){let{children:t,home:a}=e;return(0,i.jsxs)("div",{className:j().container,children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{name:"description",content:"Personal portfolio website."}),(0,i.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(b),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,i.jsx)("meta",{name:"og:title",content:b}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,i.jsx)("header",{className:j().header,children:a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{priority:!0,src:"/images/profile.jpg",className:f().borderCircle,height:144,width:144,alt:""}),(0,i.jsx)("h1",{className:f().heading2Xl,children:x})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p(),{href:"/",children:(0,i.jsx)(o(),{priority:!0,src:"/images/profile.jpg",className:f().borderCircle,height:108,width:108,alt:""})}),(0,i.jsx)("h2",{className:f().headingLg,children:(0,i.jsx)(p(),{href:"/",className:f().colorInherit,children:x})})]})}),(0,i.jsx)("main",{children:t}),!a&&(0,i.jsx)("div",{className:j().backToHome,children:(0,i.jsx)(p(),{href:"/",children:"← Back to home"})}),(0,i.jsx)("footer",{className:j().footer,children:(0,i.jsx)("p",{className:j().footerText,children:"\xa9 2023 Alron Lam. All rights reserved."})})]})}let y=[{id:1,title:"Bible Search",description:"What does the Bible say about ...? This is a semantic search tool to surface relevant verses and chapters in the Bible for a topic of interest using embeddings and Question-Answering models. Yes, this was made before ChatGPT exploded; I worked on it sparingly on-and-off since 2020. I'm hoping to get around to looking for ways to improve this with ChatGPT's API soon. But if anything, this should run much faster, and displays whole chapters for better context!",image:"/images/bible_search.PNG",githubUrl:"https://github.com/alronlam/bible-search",demoUrl:"https://huggingface.co/spaces/alronlam/bible-search",tags:["NLP"]},{id:2,title:"UNICEF AI4D Poverty Mapping for SEA",description:'Relative wealth estimates for 9 SEA countries. This is similar to <a href="https://beta.povertymaps.net" target="_blank">Meta\'s Realtive Wealth Index estimates</a>, but utilizing only open datasets and low-cost Random Forest models. We made this as a baseline work for SEA with an emphasis on replicability to spur further research in the region and beyond.',image:"/images/sea_poverty_mapping.PNG",githubUrl:"https://github.com/thinkingmachines/unicef-ai4d-poverty-mapping",demoUrl:"https://studio.foursquare.com/public/590c4ab2-b855-463a-90dd-9917b97b8b57",tags:["Geospatial"]},{id:2,title:"GeoWrangler",description:"Python library to cut down dev time for geo-data processing and feature engineering so Data Scientists can focus on analysis or ML modelling. We made this to support common geo-data wrangling steps in our client projects, including our SEA Poverty Mapping work with UNICEF.",image:"/images/geowrangler.PNG",githubUrl:"https://github.com/thinkingmachines/geowrangler",demoUrl:"https://geowrangler.thinkingmachin.es/overview.poverty_mapping_demo.html",tags:["Geospatial"]},{id:2,title:"Less Than Three (<3)",description:"Javascript game made for a 2013 Valentine's Day Hackathon. Your objective is to find the one for you within the time limit given clues to what they're wearing. Once you find them, you have to answer correctly to pass the \"compatibility\" test. Every character is dynamically generated for each new run of the game. Warning: The game is unpolished as this was made in ~24 hours and was our team's first hackathon. No game engine was used; this was pure HTML/CSS/Javascript!",image:"/images/less_than_three.png",githubUrl:"https://github.com/alronlam/less-than-three",demoUrl:"https://alronlam.github.io/less-than-three/",tags:["Game"]}];function v(){return(0,i.jsxs)(w,{home:!0,children:[(0,i.jsx)(r(),{children:(0,i.jsx)("title",{children:b})}),(0,i.jsxs)("section",{className:f().headingMd,children:[(0,i.jsxs)("p",{children:["Welcome to my portfolio website! I am a ",(0,i.jsx)("b",{children:"Machine Learning Consultant"})," and ",(0,i.jsx)("b",{children:"Engineering Manager for the Geospatial Team"})," at ",(0,i.jsx)("a",{href:"https://thinkingmachin.es/",target:"_blank",rel:"noopener noreferrer",children:"Thinking Machines Data Science"})," with a passion for cutting-edge technologies and their real-world applications."]}),(0,i.jsx)("p",{children:"My expertise lies in Machine Learning, Natural Language Processing, and Geospatial Data Science, which I have applied in various projects throughout my career. In addition, I enjoy exploring the world of game development in my spare time."}),(0,i.jsx)("p",{children:"Most of my works in corporate are understandably confidential, so I created this website to share side-projects that are fit for public consumption. I hope you enjoy looking through them as much as I enjoyed creating them."}),"---",(0,i.jsxs)("p",{children:[(0,i.jsx)("i",{children:"Fun fact: I used ChatGPT in creating this Next.js portfolio website, despite being more of a backend dev in my career and using this framework for the first time. As a practitioner who's worked on NLP applications since 2017, it's still mind-blowing!"})," \uD83E\uDD2F"]})]}),(0,i.jsx)("section",{children:(0,i.jsx)(g,{projects:y})})]})}},9653:function(e){e.exports={featuredProjects:"featured-projects_featuredProjects__xHBw9",project:"featured-projects_project__VVVj_",projectDetails:"featured-projects_projectDetails__y5ZV4",tag:"featured-projects_tag__E8vfB","tag-nlp":"featured-projects_tag-nlp__a_t1d","tag-geospatial":"featured-projects_tag-geospatial__D0x0n","tag-game":"featured-projects_tag-game__F4klf"}},2717:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},7839:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}}},function(e){e.O(0,[445,16,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);