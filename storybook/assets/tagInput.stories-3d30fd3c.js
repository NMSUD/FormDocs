import{C as v}from"./communityDto.meta-9f3fb19c.js";import{D as I,F as C,d as b,I as x,o as y,e as F,B as w,f as V,h as k,i as M,b as A,c as B,U as D,g as S}from"./debugNode-a24c225f.js";import{c as h,e as p,b as t,F as L,S as E}from"./store-3f3d1d83.js";import{u as H}from"./useValidation-4ccae39f.js";import{H as K}from"./helpIconTooltip-8b6048b3.js";import{g as P}from"./imageValidation-683bb56a.js";import{k as R}from"./form-7169fb77.js";import"./image-d51ea353.js";import"./textValidation-48b0264a.js";import"./_commonjsHelpers-725317a4.js";import"./dateHelper-42e3f96b.js";import"./mediaUpload-da93fc8d.js";import"./logService-f99c2c6c.js";const U=e=>{const[s,i]=H(e.validation),[c,u]=h(""),[d,l]=h(P(e.value));p(()=>{e.showValidationMessages===!0&&i(e.value)},[e.showValidationMessages]),p(()=>{(e.value==null||e.value.length===0)&&l([])},[e.value]);const f=a=>{a.keyCode==R.enter&&m()},m=()=>{const a=c();i([a]).isValid!==!1&&(d().includes(a)||(l(r=>{const n=[...r,a];return e.onChange(n),n}),u("")))},T=a=>()=>{l(g=>{const r=g.filter(n=>n!=a);return e.onChange(r),r})};return t(B,{get invalid(){return!s().isValid},get children(){return[t(I,{name:"FormTagInput"}),t(C,{textAlign:"center",get for(){return e.id},get children(){return t(K,{get label(){return e.label},get helpText(){return e.helpText}})}}),t(b,{mb:"$3",get children(){return[t(x,{get id(){return e.id},class:"noselect",get placeholder(){return e.placeholder},get value(){return c()},get onInput(){return y(a=>{u(a)})},onKeyPress:f}),t(F,{px:0,get children(){return t(w,{variant:"outline",onClick:m,children:"+"})}})]}}),t(L,{get each(){return d()},children:a=>t(V,{mr:"$1",get children(){return[t(k,{ml:"$1",children:a}),t(M,{get onClick(){return T(a)}})]}})}),t(E,{get when(){return!s().isValid},get children(){return t(A,{get children(){return s().errorMessage}})}})]}})},Z={title:"Form/TagInput",component:U,decorators:[D],tags:["autodocs"],argTypes:{...S()}},o={args:{label:"Labels",placeholder:"this is a placeholder",helpText:"This is a help icon with a tooltip",validation:v.tags.validator,onChange:()=>{}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Labels',
    placeholder: 'this is a placeholder',
    helpText: 'This is a help icon with a tooltip',
    validation: CommunityDtoMeta.tags.validator,
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};const ee=["Basic"];export{o as Basic,ee as __namedExportsOrder,Z as default};