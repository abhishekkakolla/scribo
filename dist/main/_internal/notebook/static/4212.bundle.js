"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4212],{24212:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(86883),d=n(56165),s=n(80309),c=n(20457),i=n(49255),r=n(9267);const o="jp-mod-searchable";var l;!function(e){e.search="documentsearch:start",e.searchAndReplace="documentsearch:startWithReplace",e.findNext="documentsearch:highlightNext",e.findPrevious="documentsearch:highlightPrevious",e.end="documentsearch:end"}(l||(l={}));const h={id:"@jupyterlab/documentsearch-extension:labShellWidgetListener",description:"Active search on valid document",requires:[a.ILabShell,s.ISearchProviderRegistry],autoStart:!0,activate:(e,t,n)=>{const a=e=>{e&&(n.hasProvider(e)?e.addClass(o):e.removeClass(o))};n.changed.connect((()=>a(t.activeWidget))),t.activeChanged.connect(((e,t)=>{const n=t.oldValue;n&&n.removeClass(o),a(t.newValue)}))}},u={id:"@jupyterlab/documentsearch-extension:plugin",description:"Provides the document search registry.",provides:s.ISearchProviderRegistry,requires:[i.ITranslator],optional:[d.ICommandPalette,c.ISettingRegistry],autoStart:!0,activate:(e,t,n,a)=>{const c=t.load("jupyterlab");let i=500;const o=new s.SearchProviderRegistry(t),h=new Map;if(a){const t=a.load(u.id),n=e=>{i=e.get("searchDebounceTime").composite};Promise.all([t,e.restored]).then((([e])=>{n(e),e.changed.connect((e=>{n(e)}))})).catch((e=>{console.error(e.message)}))}const m=()=>{const t=e.shell.currentWidget;return!!t&&o.hasProvider(t)},g=n=>{if(!n)return;const a=n.id;let c=h.get(a);if(!c){const d=o.getProvider(n);if(!d)return;const r=new s.SearchDocumentModel(d,i),u=new s.SearchDocumentView(r,t);h.set(a,u),[l.findNext,l.findPrevious,l.end].forEach((t=>{e.commands.notifyCommandChanged(t)})),u.closed.connect((()=>{n.isDisposed||n.activate()})),u.disposed.connect((()=>{n.isDisposed||n.activate(),h.delete(a),[l.findNext,l.findPrevious,l.end].forEach((t=>{e.commands.notifyCommandChanged(t)}))})),n.disposed.connect((()=>{u.dispose(),r.dispose(),d.dispose()})),c=u}return c.isAttached||(r.Widget.attach(c,n.node),n instanceof d.MainAreaWidget&&(c.node.style.top=`${n.toolbar.node.getBoundingClientRect().height+n.contentHeader.node.getBoundingClientRect().height}px`),c.model.searchExpression&&c.model.refresh()),c};return e.commands.addCommand(l.search,{label:c.__("Find…"),isEnabled:m,execute:t=>{const n=g(e.shell.currentWidget);if(n){const e=t.searchText;e?n.setSearchText(e):n.setSearchText(n.model.suggestedInitialQuery),n.focusSearchInput()}}}),e.commands.addCommand(l.searchAndReplace,{label:c.__("Find and Replace…"),isEnabled:m,execute:t=>{const n=g(e.shell.currentWidget);if(n){const e=t.searchText;e?n.setSearchText(e):n.setSearchText(n.model.suggestedInitialQuery);const a=t.replaceText;a&&n.setReplaceText(a),n.showReplace(),n.focusSearchInput()}}}),e.commands.addCommand(l.findNext,{label:c.__("Find Next"),isEnabled:()=>!!e.shell.currentWidget&&h.has(e.shell.currentWidget.id),execute:async()=>{var t;const n=e.shell.currentWidget;n&&await(null===(t=h.get(n.id))||void 0===t?void 0:t.model.highlightNext())}}),e.commands.addCommand(l.findPrevious,{label:c.__("Find Previous"),isEnabled:()=>!!e.shell.currentWidget&&h.has(e.shell.currentWidget.id),execute:async()=>{var t;const n=e.shell.currentWidget;n&&await(null===(t=h.get(n.id))||void 0===t?void 0:t.model.highlightPrevious())}}),e.commands.addCommand(l.end,{label:c.__("End Search"),isEnabled:()=>!!e.shell.currentWidget&&h.has(e.shell.currentWidget.id),execute:async()=>{var t;const n=e.shell.currentWidget;n&&(null===(t=h.get(n.id))||void 0===t||t.close())}}),n&&[l.search,l.findNext,l.findPrevious,l.end].forEach((e=>{n.addItem({command:e,category:c.__("Main Area")})})),o}},m=[u,h]}}]);