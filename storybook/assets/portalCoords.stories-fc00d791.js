import{C as p}from"./communityDto.meta-9f3fb19c.js";import{D as C,F as f,I as T,o as x,S as v,B as I,T as V,b,c as F,U as S,g as w}from"./debugNode-a24c225f.js";import{c as y,e as s,b as t,F as M,S as B}from"./store-3f3d1d83.js";import{p as m}from"./form-7169fb77.js";import{p as c}from"./imageValidation-683bb56a.js";import{u as P}from"./useValidation-4ccae39f.js";import{H as U}from"./helpIconTooltip-8b6048b3.js";import"./image-d51ea353.js";import"./textValidation-48b0264a.js";import"./_commonjsHelpers-725317a4.js";import"./dateHelper-42e3f96b.js";import"./mediaUpload-da93fc8d.js";import"./logService-f99c2c6c.js";const k=e=>{const[l,g]=P(e.validation),[i,o]=y(e.value);s(()=>{e.showValidationMessages===!0&&g(e.value)},[e.showValidationMessages]),s(()=>{(e.value==null||e.value.length===0)&&o("")},[e.value]);const d=a=>{o(a),e.onChange(a)},h=a=>()=>{o(r=>{if(r.length>=c)return r;const u=r+a;return d(u),u})};return s(()=>{const a=(i()??"").split("").filter(r=>m.includes(r.toLowerCase())).join("").toUpperCase().slice(0,c);o(a),e.onChange(a)},[i]),t(F,{get invalid(){return!l().isValid},get children(){return[t(C,{name:"PortalCoordInput"}),t(f,{textAlign:"center",get for(){return e.id},get children(){return t(U,{get label(){return e.label},get helpText(){return e.helpText}})}}),t(T,{get id(){return e.id},class:"nms-portal-font noselect",get placeholder(){return e.placeholder},get value(){return i()},size:"lg",maxlength:c,get onInput(){return x(d)}}),t(v,{columns:{"@initial":3,"@sm":4,"@md":8,"@lg":16},mt:"$2",class:"nms-portal-font",gap:"4px",get children(){return t(M,{each:m,children:a=>t(I,{variant:"outline",size:"lg",p:"0",get onClick(){return h(a)},get children(){return t(V,{size:"4xl",get children(){return a.toUpperCase()}})}})})}}),t(B,{get when(){return!l().isValid},get children(){return t(b,{get children(){return l().errorMessage}})}})]}})},J={title:"Form/PortalCoordsInput",component:k,decorators:[S],tags:["autodocs"],argTypes:{...w()}},n={args:{label:"Social links",placeholder:"this is a placeholder",helpText:"This is a help icon with a tooltip",validation:p.socials.validator,onChange:()=>{}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Social links',
    placeholder: 'this is a placeholder',
    helpText: 'This is a help icon with a tooltip',
    validation: CommunityDtoMeta.socials.validator,
    onChange: () => {}
  }
}`,...n.parameters?.docs?.source}}};const K=["Basic"];export{n as Basic,K as __namedExportsOrder,J as default};