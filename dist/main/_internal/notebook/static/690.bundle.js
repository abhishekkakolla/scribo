"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[690],{60690:(e,t,r)=>{r.r(t),r.d(t,{MIME_TYPE:()=>d,RenderedJSON:()=>l,default:()=>h,rendererFactory:()=>c});var o=r(56165),n=r(49255),s=r(9267),a=r(78156),i=r(37634);const d="application/json";class l extends s.Widget{constructor(e){super(),this._rootDOM=null,this.addClass("jp-RenderedJSON"),this.addClass("CodeMirror"),this._mimeType=e.mimeType,this.translator=e.translator||n.nullTranslator}[o.Printing.symbol](){return()=>o.Printing.printWidget(this)}async renderModel(e){const{Component:t}=await Promise.all([r.e(9752),r.e(998),r.e(9361),r.e(4682),r.e(6361)]).then(r.bind(r,69752)),o=e.data[this._mimeType]||{},n=e.metadata[this._mimeType]||{};return null===this._rootDOM&&(this._rootDOM=(0,i.s)(this.node)),new Promise(((e,r)=>{this._rootDOM.render(a.createElement(t,{data:o,metadata:n,translator:this.translator,forwardedRef:()=>e()}))}))}onBeforeDetach(e){this._rootDOM&&(this._rootDOM.unmount(),this._rootDOM=null)}}const c={safe:!0,mimeTypes:[d],createRenderer:e=>new l(e)},h=[{id:"@jupyterlab/json-extension:factory",description:"Adds renderer for JSON content.",rendererFactory:c,rank:0,dataType:"json",documentWidgetFactoryOptions:{name:"JSON",primaryFileType:"json",fileTypes:["json","notebook","geojson"],defaultFor:["json"]}}]},37634:(e,t,r)=>{var o=r(38005);t.s=o.createRoot,o.hydrateRoot}}]);