(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(e,t,n){"use strict";(function(e){var r,o=n(33),i=n(1),s=n(4),a=n(238),c=n(74),u=n(237),l=n(131),d=n(34),p=n(236),f=n(75),h=n(117),m=n(56),y=n(118),g=n(119),b=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(t,n,r,o){return new(r||(r=e))(function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,n||[])).next())})},v=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},S=Object(o.c)({id:"",content:"",type:s.a.info,display:!0,isDismissable:!0}),k=Object(o.c)({showGetStarted:!0,showMessages:Object(o.b)()}),W=Object(o.c)({enableStyler:!0,inlineStyle:!0,enablePrettier:!0,proseWrap:!1}),x={width:"100%"},O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.render=function(){return i.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md6 ms-lg3",style:{justifyContent:"center",display:"flex",padding:"5px 5px 0 0"}},i.createElement("div",{style:{width:"200px"}},this.props.children))},t}(i.Component),E='\x3c!-- Congratulations! Your team\'s life becomes much easier! Now, click on "Remark Document" to continue reading. --\x3e',I=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.clickDevButton=function(){return w(r,void 0,void 0,function(){var e=this;return v(this,function(t){return"\nIt's a **strong** word\n",[2,Word.run(function(t){return w(e,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return t.document.properties.load(),[4,t.sync()];case 1:return e.sent(),t.document.properties,t.document.body.insertText("\nIt's a **strong** word\n",Word.InsertLocation.replace).font.color="blue",[4,t.sync()];case 2:return e.sent(),[2]}})})})]})})},r.insertReadme=function(){return w(r,void 0,void 0,function(){var e,t=this;return v(this,function(n){e=(e=(e=y.a).replace(/INSTALL SECTION BEGIN(.|\n)*INSTALL SECTION END/gm,"")).replace(/<!--.*-->\n/g,"");try{return[2,Word.run(function(n){return w(t,void 0,void 0,function(){var t;return v(this,function(r){switch(r.label){case 0:return n.document.body.insertText(e,Word.InsertLocation.start),[4,n.sync()];case 1:return r.sent(),n.document.body.paragraphs.load(),[4,n.sync()];case 2:return r.sent(),(t=n.document.body.paragraphs.items[5].insertParagraph(E,Word.InsertLocation.after)).font.color="red",t.font.bold=!0,[4,n.sync()];case 3:return r.sent(),[2]}})})})]}catch(e){console.error(e)}return[2]})})},r.setupTheme=function(){return w(r,void 0,void 0,function(){return v(this,function(e){return window.open("https://github.com/poifuture/markdown-styler-for-word#theme","_blank"),console.error("Not Implemented"),[2]})})},r.remarkSelection=function(){return w(r,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return[4,m.a.ProcessSelection()];case 1:return e.sent(),[2]}})})},r.remarkDocument=function(){return w(r,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return[4,m.a.ProcessDocument()];case 1:return e.sent(),[2]}})})},r.saveSettings=function(){var e=r.state.settings.toJS(),t=r.state.profile.toJS();Office.context.document.settings.set("settings",e),Office.context.document.settings.set("profile",t),Office.context.document.settings.saveAsync(function(e){})},r.resetSettings=function(){r.setState({settings:W(),profile:k()},r.saveSettings)},r.dismissGetStarted=function(e){return w(r,void 0,void 0,function(){return v(this,function(t){switch(t.label){case 0:return this.setState(function(e){return{profile:e.profile.set("showGetStarted",!1)}},this.saveSettings),e?[4,this.insertReadme()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},r.dismissMessage=function(e){return w(r,void 0,void 0,function(){return v(this,function(t){return this.setState(function(t){return{profile:t.profile.set("showMessages",t.profile.get("showMessages").set(e,!1))}},this.saveSettings),[2]})})},r.mergeSettings=function(e){return w(r,void 0,void 0,function(){return v(this,function(t){return this.setState({settings:this.state.settings.merge(e)},this.saveSettings),[2]})})},r.state={settings:W(),profile:k(),messages:Object(o.a)()},r.props,r.state,r}return b(t,e),t.prototype.componentDidMount=function(){var e=this;Office.context.document.settings.refreshAsync(function(t){try{var n=Office.context.document.settings.get("settings"),r=Office.context.document.settings.get("profile");r.showMessages=Object(o.b)(r.showMessages),e.setState({settings:W(n),profile:k(r)},function(){e.state})}catch(e){console.error(e)}}),this.setState(function(){return{messages:Object(o.a)([S({id:"VersionHistory",content:'Use OneDrive "Version History" to get your work back in case anything is missing',type:s.a.error,display:!0,isDismissable:!0}),S({id:"DesktopSupport",content:"Known issue: Word Desktop is not supported for now as it's using IE as internal javascript engine",type:s.a.warning,display:!0,isDismissable:!0}),S({id:"Whitespace",content:"Known issue: Due to MS Word implementation, the space (ascii:32) might be replaced by a nb-space (nbsp, ascii:160) by accident. Use caution when you copy your content into clipboard",type:s.a.warning,display:!0,isDismissable:!0}),S({id:"DocumentSettings",content:"Add-in settings are stored per documend",type:s.a.info,display:!0,isDismissable:!0}),S({id:"FindReadme",content:"Above messages can be found in Readme",type:s.a.success,display:!0,isDismissable:!0})])}})},t.prototype.render=function(){var e=this;return i.createElement("div",{className:"ms-welcome"},i.createElement(h.a,{message:"Make Word a markdown friendly collaborative editor",items:[]}),i.createElement("main",{className:"ms-Grid",dir:"ltr"},i.createElement(a.a,null,this.state.messages.map(function(t){return 0!=e.state.profile.get("showMessages").get(t.get("id"))&&i.createElement(c.a,{key:t.get("id")},i.createElement(u.a,{messageBarType:t.get("type"),onDismiss:t.get("isDismissable")?function(){return e.dismissMessage(t.get("id"))}:void 0},t.get("content")))})),i.createElement(l.a,null,"# Home"),i.createElement("div",{className:"ms-Grid-row"},g.a&&i.createElement(O,null,i.createElement(d.a,{style:x,iconProps:{iconName:"ChevronRight"},onClick:this.clickDevButton},"Dev Button")),i.createElement(O,null,i.createElement("span",{ref:function(t){return e.GetStartedSpan=t}},i.createElement(d.a,{style:x,iconProps:{iconName:"MarkDownLanguage"},onClick:this.insertReadme},"Insert Readme.md")),this.state.profile.get("showGetStarted")&&i.createElement(p.a,{target:this.GetStartedSpan,primaryButtonProps:{children:"Go ahead",onClick:function(){return e.dismissGetStarted(!0)}},secondaryButtonProps:{children:"Later",onClick:function(){return e.dismissGetStarted()}},headline:"Get Started",onDismiss:function(){return e.dismissGetStarted()}},"Insert Readme.md to the top of your document")),i.createElement(O,null,i.createElement(d.a,{style:x,iconProps:{iconName:"Color"},onClick:this.setupTheme},"Setup Theme")),i.createElement(O,null,i.createElement(d.a,{style:x,iconProps:{iconName:"ChevronDown"},onClick:this.remarkSelection},"Remark Selection")),i.createElement(O,null,i.createElement(d.a,{style:x,iconProps:{iconName:"ChevronDownEnd6"},onClick:this.remarkDocument},"Remark Document"))),i.createElement(l.a,null,"# Settings"),i.createElement("div",{className:"ms-Grid-row"},i.createElement(O,null,i.createElement(f.a,{checked:this.state.settings.get("enableStyler"),label:"Enable Styler",inlineLabel:!0,onChange:function(t,n){e.mergeSettings({enableStyler:n})}})),i.createElement(O,null,i.createElement(f.a,{checked:this.state.settings.get("inlineStyle"),label:"Styler: Inline Style",inlineLabel:!0,onChange:function(t,n){e.mergeSettings({inlineStyle:n})}})),i.createElement(O,null,i.createElement(f.a,{checked:this.state.settings.get("enablePrettier"),label:"Enable Prettier",inlineLabel:!0,onChange:function(t,n){e.mergeSettings({enablePrettier:n})}})),i.createElement(O,null,i.createElement(f.a,{checked:this.state.settings.get("proseWrap"),label:"Prettier: Prose Wrap",inlineLabel:!0,onChange:function(t,n){e.mergeSettings({proseWrap:n})}})),i.createElement(O,null,i.createElement(d.a,{style:x,iconProps:{iconName:"ChevronDownEnd6"},onClick:this.resetSettings},"Reset Settings")))))},t}(i.Component);t.a=I}).call(this,n(16).Promise)},117:function(e,t,n){"use strict";var r,o=n(1),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.items,r=e.message,i=n.map(function(e,t){return o.createElement("li",{className:"ms-ListItem",key:t},o.createElement("i",{className:"ms-Icon ms-Icon--"+e.icon}),o.createElement("span",{className:"ms-font-m ms-fontColor-neutralPrimary"},e.primaryText))});return o.createElement("header",{className:"ms-welcome__main"},o.createElement("h2",{className:"ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20"},r),o.createElement("ul",{className:"ms-List ms-welcome__features ms-u-slideUpIn10"},i),t)},t}(o.Component);t.a=s},118:function(e,t,n){"use strict";t.a='---\ntitle: Markdown Styler for MS Word\nauthor: poifuture\nhomepage: https://github.com/poifuture/markdown-styler-for-word\n---\n\n\x3c!-- prettier-ignore-start --\x3e\n\x3c!-- markdownlint-disable --\x3e\n\x3c!-- DO NOT FORMAT. This file is used to teach people how to use prettier in MS Word, so we keep exactly whatever it looks. --\x3e\n\n# Markdown Styler for MS Word\n\n> Make MS Word a markdown friendly collaborative editor.\n\nWelcome to markdown world!\nThis MS Word add-in aims to apply styles to your markdown document without changing your content.\nYou can easily view your document with a better look while real-time collaborating with others.\nOur team is actively using it for writing our meeting notes.\n\n\x3c!-- INSTALL SECTION BEGIN  --\x3e\n\n## Install\n\nOpen MS Word Online -> Insert" -> "Office Add-ins" -> "Store -> Search "Markdown Styler" -> Add\n\nIf the add-in is successfully installed, the add-in will appear in the "Home" tab with a "Remark Selection" button.\n\n\x3c!-- INSTALL SECTION END --\x3e\n\n## Usage\n\n1. Carefully read the Readme and Warning before using it (You can find Readme at Home Tab -> Markdown Styler Menu -> Insert Readme)\n1. (Optional) (Not Implemented) Setup the document theme for a better style (e.g. monospace font)\n1. Click "Remark Document" (it will style the whole document)\n1. (Optional) Customize the built-in styles (Normal, Heading1, etc.) of the document theme in MS Word\n\n## Warning\n\nThere might be unexpected changes happen. If any content is missing, try the "History" feature of MS Word. (Open folder in OneDrive Online -> Right click the file -> Version history)\n\n## Why MS Word Online\n\n* Good integration with MS products family and **Office Enterprise accounts**\n* Acceptable by traditional companies\n* Real-time collaborative editing (buggy but usable)\n* Version history (extremely buggy comparing to ...)\n* China friendly\n* Free! (For personal use) (For our team: We paid Office 365!)\n* ~~Rich functionality~~ Rich bugs\n\n## What "Remark Document" & "Remark Selection" does\n\n1. Clear all existing styles\n1. Format your document with [Prettier](https://github.com/prettier/prettier)\n    1. Prettier will format your markdown\n    1. Prettier will format your front matter\n    1. [Not Implemented] Prettier will format your code block\n1. Parse your markdown styles with [Remark](https://github.com/remarkjs/remark)\n1. [Not Implemented] ~~Apply syntax highlights to your code block with [Highlight.js](https://github.com/highlightjs/highlight.js/)~~\n1. [Not Implemented] ~~Watch live changes and apply style after typing Enter~~\n\n## What "Setup Theme" does {#theme}\n\n**Nothing**\n\nDue to the limitation of Word, it\'s not possible to modify the template through the add-in. You\'ll have to manually apply a markdown friendly template by the following steps.\n\n1. Open your document in Desktop Word (Edit in Word)\n1. In Desktop Work, search for "templates" and click "Add-ins" action\n1. In "Templates and Add-ins" window, Attach `https://poifuture.github.io/markdown-styler-for-word/Markdown.dotx`. (Note: you can download and modify the template to fit your needs)\n1. Check "Automatically update document styles" and click "OK"\n\n* [Not Implemented] ~~Change the theme of your document~~\n  - ~~Font: Courier New (A monospace font)~~\n  - ~~Size: 10 (To make each line contains >=80 chars)~~\n\n## Examples\n\n### Long Paragraph\n\nA long paragraph will be rewrapped at column 80 if the `prettier.proseWrap` is configured as `always`.\nIf there is no empty line, the two lines will be merged in markdown.\nSo please always remember to insert an empty line between your paragraphs.\n\n### Headings\n\n### A **Strong** Title\n\nThere is a **strong** word and **some phrases** in a sentence.\n\n### List\n\n### Table\n\nColumn 1 | Column 2 has a long head | c3 | c4\n--- | --- | --- | ---\nc1 | c2 | Column 3 is long | c4\n\n### Code\n\n```javascript\n  const a=1\n```\n\n## Known Issues\n\n### Inline Style\n\nThe inline style doesn\'t work at all in both Word Online and Word Desktop because of different Microsoft issues. In Word Online (Chrome), the inline style will sometimes apply to the entire paragraph after the targeted range. See [bug](https://github.com/OfficeDev/office-js/issues/586). In on-premise Word (Word Desktop), the javascript engine is IE, which lacks the functionality of choosing the exact range.\n\n### Whitespaces\n\nAs every web UI developer knows, a normal space (0x20, ascii 32) is different from a display space (0xA0, ascii 160, also known as nbsp, non-breaking space, hard space, etc.). As a workaround, this Add-in will replace all nbsp to space before processing, and put nbsp back in the document. It works fine for most cases. However, in rare scenarios, you may accidentally get nbsp in your document. So... be careful.\n\n### MS Word doesn\'t have a vim plugin\n\nSo sad...\n\n## FAQ\n\n> When will "not implemented" become "implemented"?\n\nWhen we get 100 [github stars](https://github.com/poifuture/word-add-in-markdown-style)\n\n> When will Google doc come true?\n\nIf we get can an average rating over 4/5.\n\n> Alternatives?\n\nTry [SlackEdit](https://stackedit.io/) if you prefer an independent app!\n\n## Appreciation\n\nThis tool can\'t be real without the awesome work of [Remark](https://github.com/remarkjs/remark), [Prettier][Prettier] and [MSOffice][MSOffice]\n\n## Contributing?\n\nWarm Welcome!\n\n[MSOffice]: https://github.com/OfficeDev/office-js\n[Prettier]: https://github.com/prettier/prettier\n\n\x3c!-- prettier-ignore-end --\x3e\n'},119:function(e,t,n){"use strict";t.a=!1},256:function(e,t,n){"use strict";n.r(t),n.d(t,"Bootstrap",function(){return d});var r,o=n(1),i=n(235),s=n(239),a=n(234),c=n(116),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object(i.a)();var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props.app;return o.createElement(s.a,l({},a.a),o.createElement(e,l({},this.props)))},t.defaultProps={app:c.a},t}(o.Component)},56:function(e,t,n){"use strict";(function(e){var r=n(92),o=n.n(r),i=n(93),s=n.n(i),a=n(94),c=n.n(a),u=n(95),l=n.n(u),d=n(96),p=n.n(d),f=n(97),h=n.n(f),m=n(98),y=n.n(m),g=n(57),b=function(t,n,r,o){return new(r||(r=e))(function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,n||[])).next())})},w=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},v={enableStyler:!0,inlineStyle:!0,enablePrettier:!0,proseWrap:!1},S=function(e){return e.replace(/(?:\r\n|\r|\n)/g,"\n").replace(/\xA0/g," ")},k=function(e,t){return b(void 0,void 0,void 0,function(){return w(this,function(n){switch(n.label){case 0:return e.paragraphs.load("items"),[4,e.paragraphs.context.sync()];case 1:return n.sent(),[2,e.paragraphs.items[t.line-1]]}})})},W=function(e,t,n){return b(void 0,void 0,void 0,function(){var r,o;return w(this,function(i){switch(i.label){case 0:return[4,k(e,t)];case 1:return r=i.sent(),(o=r.split([""])).load("items"),[4,o.context.sync()];case 2:return i.sent(),[2,n.isEnd?o.items[t.column-2]:o.items[t.column-1]]}})})},x=function(e,t){return b(void 0,void 0,void 0,function(){var n,r,o,i,s;return w(this,function(a){switch(a.label){case 0:return[4,k(e,t.position.start)];case 1:return n=a.sent(),(r=n.split([""])).load("items"),[4,r.context.sync()];case 2:return a.sent(),o=r.items[t.position.start.column-1],t.position.start.line!=t.position.end.line?[3,3]:(s=r.items[t.position.end.column-2],[3,5]);case 3:return[4,W(e,t.position.end,{isEnd:!0})];case 4:s=a.sent(),a.label=5;case 5:return i=s,[2,o.expandTo(i.getRange(Word.RangeLocation.after))]}})})},O=function(e,t){return b(void 0,void 0,void 0,function(){var n,r;return w(this,function(o){switch(o.label){case 0:return[4,t(e)];case 1:if(o.sent(),!(n=e).children)return[3,5];r=0,o.label=2;case 2:return r<n.children.length?[4,O(n.children[r],t)]:[3,5];case 3:o.sent(),o.label=4;case 4:return r++,[3,2];case 5:return[2]}})})},E=function(e){var t=this,n=e.range,r=!!e.inlineStyle;return this.Compiler=function(e){return""},function(e,o){return b(t,void 0,void 0,function(){var t=this;return w(this,function(o){switch(o.label){case 0:return n.paragraphs.load(),[4,n.context.sync()];case 1:return o.sent(),[4,O(e,function(e){return b(t,void 0,void 0,function(){var t,o,i,s,a,c;return w(this,function(u){switch(u.label){case 0:switch(e.type){case"yaml":return[3,1];case"table":return[3,5];case"heading":return[3,7];case"blockquote":return[3,9];case"strong":return[3,11];case"delete":return[3,13];case"inlineCode":return[3,15];case"link":return[3,17];case"definition":return[3,19]}return[3,21];case 1:return[4,x(n,e)];case 2:return(c=u.sent()).font.color="darkblue",[4,c.context.sync()];case 3:return u.sent(),(t=c.search("title:").getFirst().paragraphs.getFirst()).styleBuiltIn=Word.Style.title,[4,t.context.sync()];case 4:return u.sent(),[3,21];case 5:return[4,x(n,e)];case 6:return(c=u.sent()).font.name="Courier New",c.font.size=10,[3,21];case 7:return o=e,i=[Word.Style.title,Word.Style.heading1,Word.Style.heading2,Word.Style.heading3,Word.Style.heading4,Word.Style.heading5,Word.Style.heading6,Word.Style.heading7,Word.Style.heading8,Word.Style.heading9],[4,k(n,e.position.start)];case 8:return u.sent().styleBuiltIn=i[o.depth],[3,21];case 9:return[4,k(n,e.position.start)];case 10:return u.sent().styleBuiltIn=Word.Style.quote,[3,21];case 11:return r?[4,x(n,e)]:[3,21];case 12:return(c=u.sent()).styleBuiltIn=Word.Style.strong,c.font.color="darkblue",[3,21];case 13:return r?[4,x(n,e)]:[3,21];case 14:return(c=u.sent()).font.strikeThrough=!0,[3,21];case 15:return r?[4,x(n,e)]:[3,21];case 16:return(c=u.sent()).font.color="darkred",[3,21];case 17:return r?(s=e,[4,x(n,e)]):[3,21];case 18:return(c=u.sent()).hyperlink=s.url,[3,21];case 19:return r?(a=e,[4,x(n,e)]):[3,21];case 20:return(c=u.sent()).hyperlink=a.url,[3,21];case 21:return[2]}})})})];case 2:return o.sent(),[2,e]}})})}},I=function(t,n){return void 0===n&&(n={}),b(void 0,void 0,void 0,function(){var r=this;return w(this,function(i){switch(i.label){case 0:return[4,Word.run(function(){return b(r,void 0,void 0,function(){var r;return w(this,function(i){switch(i.label){case 0:return t.load(),[4,t.context.sync()];case 1:return i.sent(),r=S(t.text),[4,new e(function(e,i){o()().use(c.a).use(s.a,["yaml","toml"]).use(E,{range:t,inlineStyle:n.inlineStyle}).process(r,function(t,n){t&&i(t),e("")})})];case 2:return i.sent(),[4,t.context.sync()];case 3:return i.sent(),[2]}})})})];case 1:return i.sent(),[2]}})})},C=function(e,t){return void 0===t&&(t={}),b(void 0,void 0,void 0,function(){var n=this;return w(this,function(r){switch(r.label){case 0:return[4,Word.run(function(){return b(n,void 0,void 0,function(){var n,r,o,i,s,a,c,u,d;return w(this,function(f){switch(f.label){case 0:return e.load(),[4,e.context.sync()];case 1:return f.sent(),""==(n=S(e.text))?(console.error("No text is selected"),[2]):(o=(r=console).info,i=["Original Text: ",n],[4,Object(g.a)(n)]);case 2:return o.apply(r,i.concat([f.sent()])),s=l.a.format(n,{parser:"markdown",plugins:[p.a,h.a,y.a],proseWrap:t.proseWrap?"always":"never"}),c=(a=console).info,u=["Pretty Text: ",s],[4,Object(g.a)(s)];case 3:return c.apply(a,u.concat([f.sent()])),d=s,n.startsWith("\n")&&!d.startsWith("\n")&&(d="\n"+d),!n.endsWith("\n")&&d.endsWith("\n")&&(d=d.slice(0,-1)),e.insertText(d.replace(/[ ]{2,}/g,function(e){return" ".repeat(e.length)}),Word.InsertLocation.replace),[4,e.context.sync()];case 4:return f.sent(),[2]}})})})];case 1:return r.sent(),[2]}})})},P=function(t){return b(void 0,void 0,void 0,function(){var n,r=this;return w(this,function(o){switch(o.label){case 0:return[4,b(void 0,void 0,void 0,function(){var t;return w(this,function(n){switch(n.label){case 0:return[4,new e(function(e,t){Office.context.document.settings.refreshAsync(function(n){n.status!==Office.AsyncResultStatus.Succeeded&&t(n.error),e()})})];case 1:return n.sent(),t=Office.context.document.settings.get("settings"),Office.context.document.settings.get("profile"),t?[2,t]:(Office.context.document.settings.set("settings",v),[2,v])}})})];case 1:return n=o.sent(),[4,Word.run(function(){return b(r,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return t.styleBuiltIn=Word.Style.normal,[4,t.context.sync()];case 1:return e.sent(),[2]}})})})];case 2:return o.sent(),n.enablePrettier?[4,C(t,{proseWrap:n.proseWrap})]:[3,4];case 3:o.sent(),o.label=4;case 4:return n.enableStyler?[4,I(t,{inlineStyle:n.inlineStyle})]:[3,6];case 5:o.sent(),o.label=6;case 6:return[2]}})})};t.a={ProcessSelection:function(){return b(void 0,void 0,void 0,function(){var e,t,n=this;return w(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=void 0,[4,Word.run(function(t){return b(n,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return o=t.document.getSelection(),i=o.paragraphs.getFirst().getRange(Word.RangeLocation.start),s=o.paragraphs.getLast().getRange(Word.RangeLocation.end),n=o.expandTo(i).expandTo(s),e=n,t.trackedObjects.add(e),[4,t.sync()];case 1:return r.sent(),[2]}var o,i,s})})})];case 1:return r.sent(),[4,P(e)];case 2:return r.sent(),[3,4];case 3:return t=r.sent(),console.error(t),[3,4];case 4:return[2]}})})},ProcessDocument:function(){return b(void 0,void 0,void 0,function(){var e,t,n=this;return w(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=void 0,[4,Word.run(function(t){return b(n,void 0,void 0,function(){var n;return w(this,function(r){switch(r.label){case 0:return n=t.document.body.getRange(),e=n,t.trackedObjects.add(e),[4,t.sync()];case 1:return r.sent(),[2]}})})})];case 1:return r.sent(),[4,P(e)];case 2:return r.sent(),[3,4];case 3:return t=r.sent(),console.error(t),[3,4];case 4:return[2]}})})}}}).call(this,n(16).Promise)},57:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var r=function(t,n,r,o){return new(r||(r=e))(function(e,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){t.done?e(t.value):new r(function(e){e(t.value)}).then(s,a)}c((o=o.apply(t,n||[])).next())})},o=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=function(e){return r(void 0,void 0,void 0,function(){return o(this,function(t){return[2,e.split("").map(function(e){return e.charCodeAt(0)})]})})}}).call(this,n(16).Promise)}}]);
//# sourceMappingURL=bootstrap.js.map