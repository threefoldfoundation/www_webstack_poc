(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/8Du":function(t,e,a){"use strict";function s(t){if(t){t.src="https://data.threefold.io/"+t.src;for(var e=0;e<t.srcset.length;e++)t.srcset[e]="https://data.threefold.io/"+t.srcset[e]}return t}var r={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{img:function(){return s(this.record.image)},authors:function(){if(this.record.authors){for(var t=0;t<this.record.authors.length;t++)this.record.authors[t].image=s(this.record.authors[t].image);return this.record.authors}},path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path}},methods:{displaytags:function(){return this.showtags}}},i=(a("LumH"),a("KHd+")),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.img,alt:t.record.title}})],1),a("div",[a("g-link",{attrs:{to:t.path}},[a("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),a("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))]),a("section",{staticClass:"flex flex-wrap post-tags container mx-auto relative py-1"},t._l(t.record.memberships,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full mb-2",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),a("div",{staticClass:"w-full post-card-meta pt-2"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.authors,(function(t){return a("li",{key:t.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),a("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?a("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"6b5c5a53",null);e.a=n.exports},"2qYH":function(t,e,a){"use strict";a.r(e);var s=a("/8Du"),r={components:{Pagination:a("HgpQ").a,PostListItem:s.a},computed:{tags:function(){return this.$page.projectTag||this.$page.newsTag||this.$page.blogTag},item:function(){var t=this.tags.belongsTo.totalCount>0;return this.$page.projectTag?t?"projects":"project":this.$page.newsTag||this.$page.blogTag?t?"posts":"post":void 0}},metaInfo:function(){return{title:this.tags.title}}},i=a("KHd+"),n=null,o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden pt-24"},[a("div",{staticClass:"mx-4 sm:mx-0"},[a("h1",{staticClass:"pb-0 mb-0 text-5xl font-medium"},[t._v(t._s(t.tags.title))]),a("p",{staticClass:"text-gray-700 text-xl"},[a("span",{staticClass:"self-center"},[t._v(t._s(t.tags.belongsTo.totalCount)+" "+t._s(t.item))])])]),a("div",{staticClass:"pt-8 border-b"}),a("div",{staticClass:"flex flex-wrap pt-8 pb-8 mx-4 sm:-mx-4"},t._l(t.tags.belongsTo.edges,(function(t){return a("PostListItem",{key:t.node.id,attrs:{record:t.node}})})),1),a("div",{staticClass:"pagination flex justify-center mb-8"},[t.tags.belongsTo.pageInfo.totalPages>1?a("Pagination",{attrs:{baseUrl:t.tags.path,currentPage:t.tags.belongsTo.pageInfo.currentPage,totalPages:t.tags.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])])}),[],!1,null,null,null);"function"==typeof n&&n(o);e.default=o.exports},HgpQ:function(t,e,a){"use strict";a("ma9I"),a("qePV");var s={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(t,e){return 1==t},isLastPage:function(t,e){return t==e},isCurrentPage:function(t,e){return t==e},nextPage:function(t,e){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,e){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e+=1)t.push({name:e,isDisabled:e===this.currentPage,link:1===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e)});return t}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex pl-0 list-none rounded my-2"},[t.isFirstPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block text-center py-2 leading-tight bg-white border border-gray-300 text-black ml-0 mr-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.previousPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("«")])],1),t._l(t.pages,(function(e){return a("li",{key:e.name,staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black rounded hover:bg-gray-300 ml-1 mr-1",class:[t.isCurrentPage(t.currentPage,e.name)?"border-l-2 border-l-black":""]},[a("g-link",{staticClass:"page-link",attrs:{to:e.link,"aria-label":e.name,"aria-current":e.name}},[t._v(t._s(e.name))])],1)})),t.isLastPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black ml-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.nextPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("»")])],1)],2)}),[],!1,null,null,null);e.a=i.exports},LumH:function(t,e,a){"use strict";a("j+S5")},"j+S5":function(t,e,a){}}]);