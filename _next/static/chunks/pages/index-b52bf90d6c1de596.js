(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5641)}])},8769:function(e,t,i){"use strict";i.d(t,{Z:function(){return f},y:function(){return u}});var a=i(5893),s=i(9008),n=i.n(s),r=i(5675),o=i.n(r),l=i(1664),c=i.n(l),h=i(7839),d=i.n(h),g=i(2717),m=i.n(g);let p="Alron Lam",u="Portfolio";function f(e){let{children:t,home:i}=e;return(0,a.jsxs)("div",{className:m().container,children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"description",content:"Personal portfolio website."}),(0,a.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(u),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,a.jsx)("meta",{name:"og:title",content:u}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,a.jsx)("header",{className:m().header,children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{priority:!0,src:"/images/profile.jpg",className:d().borderCircle,height:144,width:144,alt:""}),(0,a.jsx)("h1",{className:d().heading2Xl,children:p})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)(o(),{priority:!0,src:"/images/profile.jpg",className:d().borderCircle,height:108,width:108,alt:""})}),(0,a.jsx)("h2",{className:d().headingLg,children:(0,a.jsx)(c(),{href:"/",className:d().colorInherit,children:p})})]})}),(0,a.jsx)("main",{children:t}),!i&&(0,a.jsx)("div",{className:m().backToHome,children:(0,a.jsx)(c(),{href:"/",children:"← Back to home"})}),(0,a.jsx)("footer",{className:m().footer,children:(0,a.jsx)("p",{className:m().footerText,children:"\xa9 2023 Alron Lam. All rights reserved."})})]})}},5641:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var a=i(5893),s=i(9008),n=i.n(s),r=i(9583),o=i(6893),l=i(9653),c=i.n(l);function h(e){let{projects:t}=e;return(0,a.jsxs)("div",{className:c().featuredProjects,children:[(0,a.jsx)("h1",{children:"Featured Projects"}),t.map(e=>{var t;return(0,a.jsxs)("div",{className:c().project,children:[(0,a.jsx)("img",{src:e.image,alt:e.title}),(0,a.jsxs)("div",{className:c().projectDetails,children:[(0,a.jsxs)("h3",{children:[e.title,(t=e.tags,(0,a.jsx)("div",{className:c().tagContainer,children:t.map(e=>(0,a.jsx)("div",{className:"".concat(c().tag," ").concat(c()["tag-".concat(e.toLowerCase())]),children:e},e))}))]}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}}),(0,a.jsxs)("div",{className:c().projectLinks,children:[(0,a.jsxs)("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(o.AlO,{})," Demo"]})," | ",(0,a.jsxs)("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(r.hJX,{})," GitHub"]})]})]})]},e.id)})]})}var d=i(8769),g=i(7839),m=i.n(g);let p=[{id:1,title:"Bible Search",description:"What does the Bible say about ...? This is a semantic search tool to surface relevant verses and chapters in the Bible for a topic of interest using embeddings and Question-Answering models. Yes, this was made before ChatGPT exploded; I worked on it sparingly on-and-off since 2020. I'm hoping to get around to looking for ways to improve this with ChatGPT's API soon. But if anything, this should run much faster, and displays whole chapters for better context!",image:"/images/bible_search.png",githubUrl:"https://github.com/alronlam/bible-search",demoUrl:"https://huggingface.co/spaces/alronlam/bible-search",tags:["NLP"]},{id:2,title:"UNICEF AI4D Poverty Mapping for SEA",description:'Relative wealth estimates for 9 SEA countries. This is similar to <a href="https://beta.povertymaps.net" target="_blank">Meta\'s Realtive Wealth Index estimates</a>, but utilizing only open datasets and low-cost Random Forest models. We made this as a baseline work for SEA with an emphasis on replicability to spur further research in the region and beyond.',image:"/images/sea_poverty_mapping.PNG",githubUrl:"https://github.com/thinkingmachines/unicef-ai4d-poverty-mapping",demoUrl:"https://huggingface.co/spaces/alronlam/bible-search",tags:["Geospatial"]},{id:2,title:"GeoWrangler",description:"Python library to cut down dev time for geo-data processing and feature engineering so Data Scientists can focus on analysis or ML modelling. We made this to support common geo-data wrangling steps in our client projects, including our SEA Poverty Mapping work with UNICEF.",image:"/images/geowrangler.PNG",githubUrl:"https://github.com/thinkingmachines/geowrangler",demoUrl:"https://geowrangler.thinkingmachin.es/overview.poverty_mapping_demo.html",tags:["Geospatial"]},{id:2,title:"Less Than Three (<3)",description:"Javascript game made for a 2013 Valentine's Day Hackathon (~24 hours). Your objective is to find the one for you within the time limit given clues to what they're wearing. Once you find them, you have to answer correctly to pass the \"compatibility\" test. Every character is dynamically generated for each new run of the game. No game engine was used; this was pure HTML/CSS/Javascript!",image:"/images/less_than_three.png",githubUrl:"https://github.com/alronlam/less-than-three",demoUrl:"https://alronlam.github.io/less-than-three/",tags:["Game"]}];function u(){return(0,a.jsxs)(d.Z,{home:!0,children:[(0,a.jsx)(n(),{children:(0,a.jsx)("title",{children:d.y})}),(0,a.jsxs)("section",{className:m().headingMd,children:[(0,a.jsxs)("p",{children:["Welcome to my portfolio website! I am a ",(0,a.jsx)("b",{children:"Machine Learning Consultant"})," and ",(0,a.jsx)("b",{children:"Engineering Manager for the Geospatial Team"})," at ",(0,a.jsx)("a",{href:"https://thinkingmachin.es/",target:"_blank",rel:"noopener noreferrer",children:"Thinking Machines Data Science"})," with a passion for cutting-edge technologies and their real-world applications."]}),(0,a.jsx)("p",{children:"My expertise lies in Machine Learning, Natural Language Processing, and Geospatial Data Science, which I have applied in various projects throughout my career. In addition, I enjoy exploring the world of game development in my spare time."}),(0,a.jsx)("p",{children:"Most of my works in corporate are understandably confidential, so I created this website to share side-projects that are fit for public consumption. I hope you enjoy looking through them as much as I enjoyed creating them."}),"---",(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{children:"Fun fact: I used ChatGPT in creating this Next.js portfolio website, despite being more back-end focused in my career and using this framework for the first time. As a practitioner who's worked on NLP applications since 2017, it's still mind-blowing!"})," \uD83E\uDD2F"]})]}),(0,a.jsx)("section",{children:(0,a.jsx)(h,{projects:p})})]})}},9653:function(e){e.exports={featuredProjects:"featured-projects_featuredProjects__xHBw9",project:"featured-projects_project__VVVj_",projectDetails:"featured-projects_projectDetails__y5ZV4",tag:"featured-projects_tag__E8vfB","tag-nlp":"featured-projects_tag-nlp__a_t1d","tag-geospatial":"featured-projects_tag-geospatial__D0x0n","tag-game":"featured-projects_tag-game__F4klf"}},2717:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},7839:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}}},function(e){e.O(0,[445,959,664,893,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);