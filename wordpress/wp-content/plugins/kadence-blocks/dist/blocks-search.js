(()=>{var e,t={5956:(e,t,n)=>{"use strict";const o=window.React,a=window.wp.blocks,r=window.wp.blockEditor,i=window.wp.i18n,l=window.kadence.icons,d=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"kadence/search","title":"Search (Adv)","category":"kadence-blocks","textdomain":"kadence-blocks","attributes":{"uniqueID":{"type":"string"},"displayStyle":{"type":"string","default":"standard"},"showButton":{"type":"boolean","default":false},"searchProductsOnly":{"type":"boolean","default":false},"buttonSide":{"type":"string","default":"right"},"modalBackgroundColor":{"type":"string","default":""},"modalBackgroundType":{"type":"string","default":"normal"},"modalGradientActive":{"type":"string","default":""},"inputPlaceholder":{"type":"string","default":""},"inputColor":{"type":"string","default":""},"inputBackgroundType":{"type":"string","default":"normal"},"inputBackgroundColor":{"type":"string","default":""},"inputFocusBackgroundType":{"type":"string","default":"normal"},"inputFocusBackgroundColor":{"type":"string","default":""},"inputFocusGradientActive":{"type":"boolean","default":false},"inputBoxShadow":{"type":"array","default":[false,"#000000",0.4,2,2,3,0,false]},"inputFocusBoxShadowActive":{"type":"array","default":[false,"#000000",0.4,2,2,3,0,false]},"inputPlaceholderColor":{"type":"string","default":""},"inputFocusBorderColor":{"type":"string","default":""},"inputBorderRadius":{"type":"array","default":["","","",""]},"tabletInputBorderRadius":{"type":"array","default":["","","",""]},"mobileInputBorderRadius":{"type":"array","default":["","","",""]},"inputBorderRadiusUnit":{"type":"string","default":"px"},"inputPadding":{"type":"array","default":["","","",""]},"tabletInputPadding":{"type":"array","default":["","","",""]},"mobileInputPadding":{"type":"array","default":["","","",""]},"inputPaddingType":{"type":"string","default":"px"},"inputMargin":{"type":"array","default":["","","",""]},"tabletInputMargin":{"type":"array","default":["","","",""]},"mobileInputMargin":{"type":"array","default":["","","",""]},"inputMarginType":{"type":"string","default":"px"},"inputBorderStyles":{"type":"array","default":[{"top":["#dee2e6","",1],"right":["#dee2e6","",1],"bottom":["#dee2e6","",1],"left":["#dee2e6","",1],"unit":"px"}]},"tabletInputBorderStyles":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"mobileInputBorderStyles":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"inputTypography":{"type":"array","default":[{"size":["","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"","letterSpacing":["","",""],"letterType":"px","textTransform":"","family":"","google":"","style":"","weight":"","variant":"","subset":"","loadGoogle":true}]},"inputMaxWidth":{"type":"array","default":["","",""]},"inputMaxWidthType":{"type":"string","default":"px"},"inputMinWidth":{"type":"array","default":["","",""]},"inputMinWidthType":{"type":"string","default":"px"},"inputIcon":{"type":"string","default":"fe_search"},"inputIconLineWidth":{"type":"number","default":2},"inputIconColor":{"type":"string","default":""},"inputIconHoverColor":{"type":"string","default":""},"closeIcon":{"type":"string","default":"fe_x"},"closeIconSize":{"type":"array","default":[50,"",""]},"closeIconLineWidth":{"type":"number","default":2},"closeIconColor":{"type":"string","default":""},"closeIconHoverColor":{"type":"string","default":""}},"supports":{"anchor":true,"kbMetadata":true}}'),c=window.wp.data,p=window.wp.components,s=window.kadence.components,u=window.kadence.helpers,g=window.wp.element;function b(e){const{attributes:t,isSelected:n,previewDevice:a,clientId:r,currentRef:i}=e,{uniqueID:l,displayStyle:d,showButton:c,sizePreset:p,padding:s,tabletPadding:g,mobilePadding:b,paddingUnit:m,inputTypography:h,label:y,marginUnit:k,margin:v,iconSizeUnit:C,tabletMargin:f,mobileMargin:_,hAlign:S,thAlign:B,mhAlign:I,inputPlaceholder:w,inputColor:O,inputBorderRadius:P,tabletInputBorderRadius:x,mobileInputBorderRadius:T,inputBorderRadiusUnit:E,inputPadding:M,tabletInputPadding:z,mobileInputPadding:F,inputPaddingType:R,inputMargin:W,tabletInputMargin:A,mobileInputMargin:U,inputMarginType:N,inputBackgroundType:V,inputFocusBackgroundType:K,inputFocusBackgroundColor:H,inputFocusGradientActive:G,inputFocusBoxShadowActive:D,inputFocusBorderColor:L,inputPlaceholderColor:$,inputBackgroundColor:q,inputGradient:j,inputBoxShadow:J,inputBorderStyles:Q,tabletInputBorderStyles:X,mobileInputBorderStyles:Y,modalBackgroundColor:Z,searchProductsOnly:ee,modalGradientActive:te,modalBackgroundType:ne,inputIconColor:oe,inputIconHoverColor:ae,inputMaxWidth:re,inputMaxWidthType:ie,inputMinWidth:le,inputMinWidthType:de}=t,ce=new u.KadenceBlocksCSS,pe=(0,u.getPreviewSize)(a,void 0!==v?.[0]?v[0]:"",void 0!==f?.[0]?f[0]:"",void 0!==_?.[0]?_[0]:""),se=(0,u.getPreviewSize)(a,void 0!==v?.[1]?v[1]:"",void 0!==f?.[1]?f[1]:"",void 0!==_?.[1]?_[1]:""),ue=(0,u.getPreviewSize)(a,void 0!==v?.[2]?v[2]:"",void 0!==f?.[2]?f[2]:"",void 0!==_?.[2]?_[2]:""),ge=(0,u.getPreviewSize)(a,void 0!==v?.[3]?v[3]:"",void 0!==f?.[3]?f[3]:"",void 0!==_?.[3]?_[3]:""),be=(0,u.getPreviewSize)(a,void 0!==s?.[0]?s[0]:"",void 0!==g?.[0]?g[0]:"",void 0!==b?.[0]?b[0]:""),me=(0,u.getPreviewSize)(a,void 0!==s?.[1]?s[1]:"",void 0!==g?.[1]?g[1]:"",void 0!==b?.[1]?b[1]:""),he=(0,u.getPreviewSize)(a,void 0!==s?.[2]?s[2]:"",void 0!==g?.[2]?g[2]:"",void 0!==b?.[2]?b[2]:""),ye=(0,u.getPreviewSize)(a,void 0!==s?.[3]?s[3]:"",void 0!==g?.[3]?g[3]:"",void 0!==b?.[3]?b[3]:""),ke=(0,u.getPreviewSize)(a,void 0!==P?P[0]:"",void 0!==x?x[0]:"",void 0!==T?T[0]:""),ve=(0,u.getPreviewSize)(a,void 0!==P?P[1]:"",void 0!==x?x[1]:"",void 0!==T?T[1]:""),Ce=(0,u.getPreviewSize)(a,void 0!==P?P[2]:"",void 0!==x?x[2]:"",void 0!==T?T[2]:""),fe=(0,u.getPreviewSize)(a,void 0!==P?P[3]:"",void 0!==x?x[3]:"",void 0!==T?T[3]:""),_e=(0,u.getPreviewSize)(a,void 0!==M?M[0]:"",void 0!==z?z[0]:"",void 0!==F?F[0]:""),Se=(0,u.getPreviewSize)(a,void 0!==M?M[1]:"",void 0!==z?z[1]:"",void 0!==F?F[1]:""),Be=(0,u.getPreviewSize)(a,void 0!==M?M[2]:"",void 0!==z?z[2]:"",void 0!==F?F[2]:""),Ie=(0,u.getPreviewSize)(a,void 0!==M?M[3]:"",void 0!==z?z[3]:"",void 0!==F?F[3]:""),we=(0,u.getPreviewSize)(a,void 0!==W?W[0]:"",void 0!==A?A[0]:"",void 0!==U?U[0]:""),Oe=(0,u.getPreviewSize)(a,void 0!==W?W[1]:"",void 0!==A?A[1]:"",void 0!==U?U[1]:""),Pe=(0,u.getPreviewSize)(a,void 0!==W?W[2]:"",void 0!==A?A[2]:"",void 0!==U?U[2]:""),xe=(0,u.getPreviewSize)(a,void 0!==W?W[3]:"",void 0!==A?A[3]:"",void 0!==U?U[3]:""),Te=(0,u.getPreviewSize)(a,void 0!==h[0]?.size?.[0]?h[0].size[0]:"",void 0!==h[0]?.size?.[1]?h[0].size[1]:"",void 0!==h[0]?.size?.[2]?h[0].size[2]:""),Ee=(0,u.getPreviewSize)(a,void 0!==re?re[0]:"",void 0!==re?re[1]:"",void 0!==re?re[2]:""),Me=(0,u.getPreviewSize)(a,void 0!==le?le[0]:"",void 0!==le?le[1]:"",void 0!==le?le[2]:"");n&&(ce.set_selector(".block-editor-block-popover__inbetween-container .block-editor-block-list__insertion-point.is-with-inserter"),ce.add_property("display","none")),ce.set_selector(`.kb-search${l}`),ce.add_property("margin-top",(0,u.getSpacingOptionOutput)(pe,k)),ce.add_property("margin-right",(0,u.getSpacingOptionOutput)(se,k)),ce.add_property("margin-bottom",(0,u.getSpacingOptionOutput)(ue,k)),ce.add_property("margin-left",(0,u.getSpacingOptionOutput)(ge,k)),ce.add_property("padding-top",(0,u.getSpacingOptionOutput)(be,m)),ce.add_property("padding-right",(0,u.getSpacingOptionOutput)(me,m)),ce.add_property("padding-bottom",(0,u.getSpacingOptionOutput)(he,m)),ce.add_property("padding-left",(0,u.getSpacingOptionOutput)(ye,m)),ce.set_selector(`.kb-search${l} .kb-search-modal`),"gradient"===ne?ce.add_property("--kb-search-modal-background",te):ce.add_property("--kb-search-modal-background",(0,u.KadenceColorOutput)(Z)),ce.set_selector(`.kb-search${l} .kb-search-input[type="text"]`),ce.add_property("color",(0,u.KadenceColorOutput)(O)),ce.add_property("font-size",(0,u.getFontSizeOptionOutput)(Te,h[0].sizeType)),ce.add_property("line-height",h[0].lineHeight&&h[0].lineHeight[0]?h[0].lineHeight[0]+h[0].lineType:void 0),ce.add_property("font-weight",h[0].weight),ce.add_property("font-style",h[0].style),ce.add_property("text-transform",h[0].transform),ce.add_property("letter-spacing",h[0].letterSpacing+"px"),ce.add_property("font-family",h[0].family),ce.add_property("border-top-left-radius",(0,u.getSpacingOptionOutput)(ke,E)),ce.add_property("border-top-right-radius",(0,u.getSpacingOptionOutput)(ve,E)),ce.add_property("border-bottom-right-radius",(0,u.getSpacingOptionOutput)(Ce,E)),ce.add_property("border-bottom-left-radius",(0,u.getSpacingOptionOutput)(fe,E)),ce.add_property("padding-top",(0,u.getSpacingOptionOutput)(_e,R)),ce.add_property("padding-right",(0,u.getSpacingOptionOutput)(Se,R)),ce.add_property("padding-bottom",(0,u.getSpacingOptionOutput)(Be,R)),ce.add_property("padding-left",(0,u.getSpacingOptionOutput)(Ie,R)),ce.add_property("border-top",(0,u.getBorderStyle)(a,"top",Q,X,Y)),ce.add_property("border-right",(0,u.getBorderStyle)(a,"right",Q,X,Y)),ce.add_property("border-bottom",(0,u.getBorderStyle)(a,"bottom",Q,X,Y)),ce.add_property("border-left",(0,u.getBorderStyle)(a,"left",Q,X,Y)),"gradient"===V?ce.add_property("background",j):ce.add_property("background",(0,u.KadenceColorOutput)(q)),ce.set_selector(`.kb-search${l} .kb-search-input-wrapper`),ce.add_property("margin-top",(0,u.getSpacingOptionOutput)(we,N)),ce.add_property("margin-right",(0,u.getSpacingOptionOutput)(Oe,N)),ce.add_property("margin-bottom",(0,u.getSpacingOptionOutput)(Pe,N)),ce.add_property("margin-left",(0,u.getSpacingOptionOutput)(xe,N)),ce.set_selector(`.kb-search${l} .kb-search-icon svg`),ce.add_property("stroke",(0,u.KadenceColorOutput)(oe)),ce.set_selector(`.kb-search${l}:hover .kb-search-icon svg`),ce.add_property("stroke",(0,u.KadenceColorOutput)(ae)),ce.set_selector(`.kb-search${l} .kb-search-icon`),ce.add_property("right",(0,u.getSpacingOptionOutput)(Se,R)),ce.set_selector(`.kb-search${l} .kb-search-close-icon svg`),ce.add_property("stroke",(0,u.KadenceColorOutput)(oe)),ce.set_selector(`.kb-search${l}:hover .kb-search-close-icon svg`),ce.add_property("stroke",(0,u.KadenceColorOutput)(ae)),ce.set_selector(`.kb-search${l} form, .kb-search.kb-search${l} .kb-search-modal-content form`),ce.add_property("max-width",(0,u.getSpacingOptionOutput)(Ee,ie)),ce.add_property("min-width",(0,u.getSpacingOptionOutput)(Me,de));const ze=ce.css_output();return(0,o.createElement)("style",null,`${ze}`)}var m=n(2485),h=n.n(m);(0,a.registerBlockType)("kadence/search",{...d,title:(0,i._x)("Search (Adv)","block title","kadence-blocks"),description:(0,i._x)("Kadence search block","block description","kadence-blocks"),keywords:[(0,i.__)("search","kadence-blocks"),(0,i.__)("find","kadence-blocks"),"kb"],icon:{src:l.searchBlockIcon},edit:function(e){const{attributes:t,setAttributes:n,className:a,isSelected:l,context:m,clientId:y}=e,{uniqueID:k,displayStyle:v,sizePreset:C,padding:f,tabletPadding:_,mobilePadding:S,paddingUnit:B,inputTypography:I,label:w,marginUnit:O,margin:P,iconSizeUnit:x,tabletMargin:T,mobileMargin:E,hAlign:M,thAlign:z,mhAlign:F,inputPlaceholder:R,inputColor:W,inputBorderRadius:A,tabletInputBorderRadius:U,mobileInputBorderRadius:N,inputBorderRadiusUnit:V,inputPadding:K,tabletInputPadding:H,mobileInputPadding:G,inputPaddingType:D,inputMargin:L,tabletInputMargin:$,mobileInputMargin:q,inputMarginType:j,inputBackgroundType:J,inputFocusBackgroundType:Q,inputFocusBackgroundColor:X,inputFocusGradientActive:Y,inputFocusBoxShadowActive:Z,inputFocusBorderColor:ee,inputPlaceholderColor:te,inputBackgroundColor:ne,inputGradient:oe,inputBoxShadow:ae,inputBorderStyles:re,tabletInputBorderStyles:ie,mobileInputBorderStyles:le,modalBackgroundColor:de,searchProductsOnly:ce,modalGradientActive:pe,modalBackgroundType:se,inputMaxWidth:ue,inputMaxWidthType:ge,inputMinWidth:be,inputMinWidthType:me,showButton:he,inputIcon:ye,inputIconColor:ke,inputIconHoverColor:ve,inputIconLineWidth:Ce,closeIcon:fe,closeIconSize:_e,closeIconColor:Se,closeIconHoverColor:Be,closeIconLineWidth:Ie}=t,{addUniqueID:we}=(0,c.useDispatch)("kadenceblocks/data"),{isUniqueID:Oe,isUniqueBlock:Pe,previewDevice:xe,parentData:Te}=(0,c.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,n)=>e("kadenceblocks/data").isUniqueBlock(t,n),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(y)),postId:e("core/editor")?.getCurrentPostId()?e("core/editor")?.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(y,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[y]);(0,g.useEffect)((()=>{(0,u.setBlockDefaults)("kadence/search",t);const o=(0,u.getPostOrFseId)(e,Te),a=(0,u.getUniqueId)(k,y,Oe,Pe,o);a!==k?(t.uniqueID=a,n({uniqueID:a}),we(a,y)):we(k,y)}),[]);const[Ee,Me]=(0,g.useState)("general"),[ze,Fe]=(0,g.useState)(!1),Re=(0,u.mouseOverVisualizer)(),We=(0,u.mouseOverVisualizer)(),Ae=(0,g.useRef)(),Ue=(0,u.useEditorElement)(Ae,[xe],"editor-visual-editor"),Ne=Ue?.clientWidth,Ve=Ue?.getBoundingClientRect().left,Ke=e=>{const t=I.map(((t,n)=>(0===n&&(t={...t,...e}),t)));n({inputTypography:t})},He=h()({className:a,"kb-search":!0,[`kb-search${k}`]:!0}),Ge=(0,r.useBlockProps)({className:He}),De=(0,r.useInnerBlocksProps)({className:"",style:{}},{templateLock:"all",renderAppender:!1,template:[["kadence/advancedbtn",{lock:{remove:!0,move:!0}},[["kadence/singlebtn",{lock:{remove:!0,move:!0},hideLink:!0,text:(0,i.__)("Search","kadence-blocks"),noCustomDefaults:!0,isSubmit:!0}]]]]}),Le=()=>(0,o.createElement)("div",{className:"kb-search-input-wrapper"},(0,o.createElement)("input",{id:"kb-search-input"+k,className:"kb-search-input",disabled:!0,type:"text",placeholder:R}),ye&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.IconRender,{className:`kb-search-icon kt-svg-icon kt-svg-icon-${ye}`,name:ye,strokeWidth:"fe"===ye.substring(0,2)?Ce:void 0,style:{color:ke?(0,u.KadenceColorOutput)(ke):void 0}}))),$e=(e,t)=>{const o=Z.map(((n,o)=>(t===o&&(n=e),n)));n({inputFocusBoxShadowActive:o})},qe=(e,t)=>{const o=ae.map(((n,o)=>(t===o&&(n=e),n)));n({inputBoxShadow:o})},je=(0,u.getPreviewSize)(xe,_e[0],_e[1],_e[2]);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(b,{...e,previewDevice:xe}),(0,o.createElement)(r.BlockControls,null,(0,o.createElement)(s.CopyPasteAttributes,{attributes:t,defaultAttributes:d.attributes,blockSlug:d.name,onPaste:e=>n(e)}),"modal"===v&&(0,o.createElement)(p.ToolbarGroup,null,(0,o.createElement)(p.ToolbarButton,{className:"components-tab-button",isPressed:ze,onClick:()=>Fe(!ze)},(0,o.createElement)("span",null,(0,i.__)("Show Modal","kadence-blocks"))))),(0,o.createElement)(s.KadenceInspectorControls,{blockSlug:"kadence/search"},(0,o.createElement)(s.SelectChildBlock,{clientId:y,label:(0,i.__)("View Button Settings","kadence-blocks"),childSlug:"kadence/singlebtn"}),(0,o.createElement)(s.InspectorControlTabs,{panelName:"kadence-search",setActiveTab:Me,activeTab:Ee}),"general"===Ee&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.KadencePanelBody,{initialOpen:!0,panelName:"kadence-search-general",blockSlug:"kadence/search"},(0,o.createElement)(s.KadenceRadioButtons,{label:(0,i.__)("Search Style","kadence-blocks"),value:v,options:[{value:"standard",label:(0,i.__)("Standard","kadence-blocks")},{value:"modal",label:(0,i.__)("Modal","kadence-blocks")}],hideLabel:!1,onChange:e=>{n({displayStyle:e}),Ke("modal"===e?{size:["md","",""]}:{size:["","",""]})}}),"standard"===v&&(0,o.createElement)(p.ToggleControl,{label:(0,i.__)("Show Submit Button","kadence-blocks"),checked:he,onChange:e=>n({showButton:e})}),kadence_blocks_params.hasWoocommerce&&(0,o.createElement)(p.ToggleControl,{label:(0,i.__)("Search products only","kadence-blocks"),checked:ce,onChange:e=>n({searchProductsOnly:e})}))),"style"===Ee&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.KadencePanelBody,{title:(0,i.__)("Input Icon","kadence-blocks"),initialOpen:!0,panelName:"search-input-icon"},(0,o.createElement)(s.KadenceIconPicker,{value:ye,allowClear:!0,onChange:e=>{n({inputIcon:e})}}),ye&&"fe"===ye.substring(0,2)&&(0,o.createElement)(p.RangeControl,{label:(0,i.__)("Line Width","kadence-blocks"),value:Ce,onChange:e=>{n({inputIconLineWidth:e})},step:.5,min:.5,max:4}),(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Icon Color","kadence-blocks"),value:ke,default:"",onChange:e=>{n({inputIconColor:e})},swatchLabel2:(0,i.__)("Hover Color","kadence-blocks"),value2:ve,default2:"",onChange2:e=>{n({inputIconHoverColor:e})}})),"modal"===v&&(0,o.createElement)(s.KadencePanelBody,{title:(0,i.__)("Close Icon","kadence-blocks"),initialOpen:!0,panelName:"search-close-icon"},(0,o.createElement)(s.KadenceIconPicker,{value:fe,onChange:e=>{n({closeIcon:e})}}),(0,o.createElement)(s.ResponsiveRangeControls,{label:(0,i.__)("Icon Size","kadence-blocks"),value:_e[0],onChange:e=>{n({closeIconSize:[e,_e[1],_e[2]]})},tabletValue:_e[1],onChangeTablet:e=>{n({closeIconSize:[_e[0],e,_e[2]]})},mobileValue:_e[2],onChangeMobile:e=>{n({closeIconSize:[_e[0],_e[1],e]})},min:0,max:300,step:1,unit:"px"}),fe&&"fe"===fe.substring(0,2)&&(0,o.createElement)(p.RangeControl,{label:(0,i.__)("Line Width","kadence-blocks"),value:Ie,onChange:e=>{n({closeIconLineWidth:e})},step:.5,min:.5,max:4}),(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Icon Color","kadence-blocks"),value:Se,default:"",onChange:e=>{n({closeIconColor:e})},swatchLabel2:(0,i.__)("Hover Color","kadence-blocks"),value2:Be,default2:"",onChange2:e=>{n({closeIconHoverColor:e})}})),(0,o.createElement)(s.KadencePanelBody,{title:(0,i.__)("Input Style","kadence-blocks"),initialOpen:!1,panelName:"search-input-settings"},(0,o.createElement)(s.ResponsiveRangeControls,{label:(0,i.__)("Max Width","kadence-blocks"),value:ue[0],onChange:e=>{n({inputMaxWidth:[e,ue[1],ue[2]]})},tabletValue:ue[1],onChangeTablet:e=>{n({inputMaxWidth:[ue[0],e,ue[2]]})},mobileValue:ue[2],onChangeMobile:e=>{n({inputMaxWidth:[ue[0],ue[1],e]})},min:0,max:"px"!==ge?100:2e3,step:1,unit:ge,onUnit:e=>{n({inputMaxWidthType:e})},units:["px","%"],reset:()=>n({inputMaxWidth:["","",""],inputMaxWidthType:"px"})}),(0,o.createElement)(s.ResponsiveRangeControls,{label:(0,i.__)("Min Width","kadence-blocks"),value:be[0],onChange:e=>{n({inputMinWidth:[e,be[1],be[2]]})},tabletValue:be[1],onChangeTablet:e=>{n({inputMinWidth:[be[0],e,be[2]]})},mobileValue:be[2],onChangeMobile:e=>{n({inputMinWidth:[be[0],be[1],e]})},min:0,max:"px"!==me?100:2e3,step:1,unit:me,onUnit:e=>{n({inputMinWidthType:e})},units:["px","%"],reset:()=>n({inputMinWidth:["","",""],inputMinWidthType:"px"})}),(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Text Color","kadence-blocks"),value:W,default:"",onChange:e=>{n({inputColor:e})}}),(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Placeholder Text Color","kadence-blocks"),value:te,default:"",onChange:e=>{n({inputPlaceholderColor:e})}}),(0,o.createElement)(p.TextControl,{label:(0,i.__)("Placeholder Text","kadence-blocks"),value:R,onChange:e=>n({inputPlaceholder:e})}),(0,o.createElement)(s.TypographyControls,{fontSize:I[0].size,onFontSize:e=>Ke({size:e}),fontSizeType:I[0].sizeType,onFontSizeType:e=>Ke({sizeType:e}),lineHeight:I[0].lineHeight,onLineHeight:e=>Ke({lineHeight:e}),lineHeightType:I[0].lineType,onLineHeightType:e=>Ke({lineType:e}),reLetterSpacing:I[0].letterSpacing,onLetterSpacing:e=>Ke({letterSpacing:e}),letterSpacingType:I[0].letterType,onLetterSpacingType:e=>Ke({letterType:e}),textTransform:I[0].textTransform,onTextTransform:e=>Ke({textTransform:e}),fontFamily:I[0].family,onFontFamily:e=>Ke({family:e}),onFontChange:e=>{Ke({family:e.value,google:e.google})},onFontArrayChange:e=>Ke(e),googleFont:I[0].google,onGoogleFont:e=>Ke({google:e}),loadGoogleFont:I[0].loadGoogle,onLoadGoogleFont:e=>Ke({loadGoogle:e}),fontVariant:I[0].variant,onFontVariant:e=>Ke({variant:e}),fontWeight:I[0].weight,onFontWeight:e=>Ke({weight:e}),fontStyle:I[0].style,onFontStyle:e=>Ke({style:e}),fontSubset:I[0].subset,onFontSubset:e=>Ke({subset:e})}),(0,o.createElement)(s.ResponsiveMeasurementControls,{label:(0,i.__)("Border Radius","kadence-blocks"),value:A,tabletValue:U,mobileValue:N,onChange:e=>n({inputBorderRadius:e}),onChangeTablet:e=>n({tabletInputBorderRadius:e}),onChangeMobile:e=>n({mobileInputBorderRadius:e}),min:0,max:"em"===V||"rem"===V?24:100,step:"em"===V||"rem"===V?.1:1,unit:V,units:["px","em","rem","%"],onUnit:e=>n({inputBorderRadiusUnit:e}),isBorderRadius:!0,allowEmpty:!0}),(0,o.createElement)(s.HoverToggleControl,{hoverTab:(0,i.__)("Focus","kadence-blocks"),hover:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.BackgroundTypeControl,{label:(0,i.__)("Focus Type","kadence-blocks"),type:Q,onChange:e=>n({inputFocusBackgroundType:e}),allowedTypes:["normal","gradient"]}),"gradient"!==Q&&(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Input Focus Background","kadence-blocks"),value:X,default:"",onChange:e=>{n({inputFocusBackgroundColor:e})}}),"gradient"===Q&&(0,o.createElement)(s.GradientControl,{value:Y,onChange:e=>n({inputFocusGradientActive:e}),gradients:[]}),(0,o.createElement)(s.BoxShadowControl,{label:(0,i.__)("Input Focus Box Shadow","kadence-blocks"),enable:void 0!==Z[0]&&Z[0],color:void 0!==Z[1]?Z[1]:"#000000",default:"#000000",opacity:void 0!==Z[2]?Z[2]:.4,hOffset:void 0!==Z[3]?Z[3]:2,vOffset:void 0!==Z[4]?Z[4]:2,blur:void 0!==Z[5]?Z[5]:3,spread:void 0!==Z[6]?Z[6]:0,inset:void 0!==Z[7]&&Z[7],onEnableChange:e=>{$e(e,0)},onColorChange:e=>{$e(e,1)},onOpacityChange:e=>{$e(e,2)},onHOffsetChange:e=>{$e(e,3)},onVOffsetChange:e=>{$e(e,4)},onBlurChange:e=>{$e(e,5)},onSpreadChange:e=>{$e(e,6)},onInsetChange:e=>{$e(e,7)}}),(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Input Focus Border","kadence-blocks"),value:ee,default:"",onChange:e=>{n({inputFocusBorderColor:(0,u.KadenceColorOutput)(e)})}})),normal:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.BackgroundTypeControl,{label:(0,i.__)("Background Type","kadence-blocks"),type:J,onChange:e=>n({inputBackgroundType:e}),allowedTypes:["normal","gradient"]}),"gradient"!==J&&(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Input Background","kadence-blocks"),value:ne,default:"",onChange:e=>{n({inputBackgroundColor:e})}}),"gradient"===J&&(0,o.createElement)(s.GradientControl,{value:oe,onChange:e=>n({inputGradient:e}),gradients:[]}),(0,o.createElement)(s.BoxShadowControl,{label:(0,i.__)("Input Box Shadow","kadence-blocks"),enable:void 0!==ae[0]&&ae[0],color:void 0!==ae[1]?ae[1]:"#000000",default:"#000000",opacity:void 0!==ae[2]?ae[2]:.4,hOffset:void 0!==ae[3]?ae[3]:2,vOffset:void 0!==ae[4]?ae[4]:2,blur:void 0!==ae[5]?ae[5]:3,spread:void 0!==ae[6]?ae[6]:0,inset:void 0!==ae[7]&&ae[7],onEnableChange:e=>{qe(e,0)},onColorChange:e=>{qe(e,1)},onOpacityChange:e=>{qe(e,2)},onHOffsetChange:e=>{qe(e,3)},onVOffsetChange:e=>{qe(e,4)},onBlurChange:e=>{qe(e,5)},onSpreadChange:e=>{qe(e,6)},onInsetChange:e=>{qe(e,7)}}),(0,o.createElement)(s.ResponsiveBorderControl,{label:(0,i.__)("Input Border","kadence-blocks"),value:re,tabletValue:ie,mobileValue:le,onChange:e=>n({inputBorderStyles:e}),onChangeTablet:e=>n({tabletInputBorderStyles:e}),onChangeMobile:e=>n({mobileInputBorderStyles:e})}))})),(0,o.createElement)(s.KadencePanelBody,{title:(0,i.__)("Input Spacing","kadence-blocks"),initialOpen:!1,panelName:"search-input-spacing"},(0,o.createElement)(s.ResponsiveMeasureRangeControl,{label:(0,i.__)("Padding","kadence-blocks"),value:K,onChange:e=>n({inputPadding:e}),tabletValue:H,onChangeTablet:e=>n({tabletInputPadding:e}),mobileValue:G,onChangeMobile:e=>n({mobileInputPadding:e}),min:"em"===D||"rem"===D?-2:-200,max:"em"===D||"rem"===D?12:200,step:"em"===D||"rem"===D?.1:1,unit:D,units:["px","em","rem"],onUnit:e=>n({inputPaddingType:e})}),(0,o.createElement)(s.ResponsiveMeasureRangeControl,{label:(0,i.__)("Margin","kadence-blocks"),value:L,onChange:e=>n({inputMargin:e}),tabletValue:$,onChangeTablet:e=>n({tabletInputMargin:e}),mobileValue:q,onChangeMobile:e=>n({mobileInputMargin:e}),min:"em"===j||"rem"===j?-2:-200,max:"em"===j||"rem"===j?12:200,step:"em"===j||"rem"===j?.1:1,unit:j,units:["px","em","rem"],onUnit:e=>n({inputMarginType:e})})),"modal"===v&&(0,o.createElement)(s.KadencePanelBody,{title:(0,i.__)("Modal Style","kadence-blocks"),initialOpen:!1,panelName:"kb-adv-btn-modal"},(0,o.createElement)(s.BackgroundTypeControl,{label:(0,i.__)("Background Type","kadence-blocks"),type:se,onChange:e=>n({modalBackgroundType:e}),allowedTypes:["normal","gradient"]}),"gradient"!==se&&(0,o.createElement)(s.PopColorControl,{label:(0,i.__)("Background Color","kadence-blocks"),value:de,default:"",onChange:e=>{n({modalBackgroundColor:e})}}),"gradient"===se&&(0,o.createElement)(s.GradientControl,{value:pe,onChange:e=>n({modalGradientActive:e}),gradients:[]}))),"advanced"===Ee&&(0,o.createElement)(o.Fragment,null,(0,u.showSettings)("marginSettings","kadence/advancedbtn")&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.KadencePanelBody,{panelName:"kb-single-button-margin-settings"},(0,o.createElement)(s.ResponsiveMeasureRangeControl,{label:(0,i.__)("Padding","kadence-blocks"),value:f,onChange:e=>n({padding:e}),tabletValue:_,onChangeTablet:e=>n({tabletPadding:e}),mobileValue:S,onChangeMobile:e=>n({mobilePadding:e}),min:"em"===B||"rem"===B?-2:-200,max:"em"===B||"rem"===B?12:200,step:"em"===B||"rem"===B?.1:1,unit:B,units:["px","em","rem"],onUnit:e=>n({paddingUnit:e}),onMouseOver:Re.onMouseOver,onMouseOut:Re.onMouseOut}),(0,o.createElement)(s.ResponsiveMeasureRangeControl,{label:(0,i.__)("Margin","kadence-blocks"),value:P,onChange:e=>n({margin:e}),tabletValue:T,onChangeTablet:e=>n({tabletMargin:e}),mobileValue:E,onChangeMobile:e=>n({mobileMargin:e}),min:"em"===O||"rem"===O?-2:-200,max:"em"===O||"rem"===O?12:200,step:"em"===O||"rem"===O?.1:1,unit:O,units:["px","em","rem"],onUnit:e=>n({marginUnit:e}),onMouseOver:We.onMouseOver,onMouseOut:We.onMouseOut}),(0,o.createElement)(p.TextControl,{label:(0,i.__)("Add Aria Label","kadence-blocks"),value:w||"",onChange:e=>n({label:e}),className:"kb-textbox-style"})),(0,o.createElement)("div",{className:"kt-sidebar-settings-spacer"})),(0,o.createElement)(s.KadenceBlockDefaults,{attributes:t,defaultAttributes:d.attributes,blockSlug:d.name,excludedAttrs:["text"]}))),(0,o.createElement)("div",{...Ge},"standard"===v?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("form",{className:"kb-search-form"},Le(),he&&(0,o.createElement)("div",{...De}))):(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{...De}),ze&&(0,o.createElement)("style",null,".block-editor-block-popover { display: none; }"),(0,o.createElement)("div",{ref:Ae,className:"kb-search-modal "+(ze?"active":""),onClick:()=>Fe(!1),style:{width:Ne+"px",left:Ve+"px"}},(0,o.createElement)("button",{className:"kb-search-close-btn","aria-label":"Close search","data-toggle-target":"#search-drawer","data-toggle-body-class":"showing-popup-drawer-from-full","aria-expanded":"false","data-set-focus":".search-toggle-open"},(0,o.createElement)(s.IconRender,{className:`kb-search-close-icon kt-svg-icon kt-svg-icon-${fe}`,name:ye,size:je,strokeWidth:"fe"===fe.substring(0,2)?Ie:void 0,style:{color:Se?(0,u.KadenceColorOutput)(Se):void 0}})),(0,o.createElement)("div",{class:"kb-search-modal-content",style:{width:Ne+"px",left:Ve+"px"}},(0,o.createElement)("form",{className:"kb-search-form"},(0,o.createElement)("label",{className:"screen-reader-text",htmlFor:"kb-search-input"+k},"Search for:"),Le()))))))},save:()=>(0,o.createElement)(r.InnerBlocks.Content,null),example:{attributes:{}}})},2485:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)o.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],a=e[p][1],r=e[p][2];for(var l=!0,d=0;d<n.length;d++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(p--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1590:0,1845:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,i=n[0],l=n[1],d=n[2],c=0;if(i.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(d)var p=d(o)}for(t&&t(n);c<i.length;c++)r=i[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=self.webpackChunkkadence=self.webpackChunkkadence||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[1845],(()=>o(5956)));a=o.O(a),(this.kadence=this.kadence||{})["blocks-search"]=a})();