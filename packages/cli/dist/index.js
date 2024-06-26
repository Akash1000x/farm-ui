import"dotenv/config";import{Command as te}from"commander";import"dotenv/config";import{existsSync as p,promises as x}from"fs";import r from"path";import Y from"gradient-string";import{Command as q}from"commander";import I from"ora";import{execa as Q}from"execa";import g from"prompts";var D=`
\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591  
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591  v1.0.9
                                                                               
`;import k from"chalk";var o={error(...t){console.log(k.red(...t))},warn(...t){console.log(k.yellow(...t))},info(...t){console.log(k.cyan(...t))},success(...t){console.log(k.green(...t))},break(){console.log("")}};import{z as N}from"zod";import{detect as H}from"@antfu/ni";async function G(t){let s=await H({programmatic:!0,cwd:t});return s==="yarn@berry"?"yarn":s==="pnpm@6"?"pnpm":s==="bun"?"bun":s??"npm"}import V from"path";import X from"fs-extra";function v(){let t=V.join("package.json");return X.readJSONSync(t)}var S=[{name:"React",value:"react"},{name:"Vue",value:"vue"},{name:"Svelte",value:"svelte"},{name:"Html",value:"html"}];process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));var Z="https://farmui-api.vercel.app/api/components",ee=N.object({id:N.string(),cwd:N.string()}),oe=["animation","keyframes"];console.log(Y("pink","blue")(D));var O=new q().name("add").description("add a new component or UI from farmui").argument("<string>","id of the component from https://farmui.com/components").option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).action(async(t,s)=>{let l=ee.parse({id:t,...s}),f=r.resolve(l.cwd),w=S[0].value;p(f)||(o.error(`There is no ${f} exists your paths.`),process.exit(0));let F="components",U=process.cwd()===l.cwd;try{if(!U)o.info(`The component is being dumped inside of ${f} `);else{let{dir:e}=await g({type:"text",name:"dir",message:"A directory to dump the components? (Leave it blank which default to /components dir) ",hint:"components"});e&&(F=e)}let{fm:u}=await g({type:"select",name:"fm",message:"Which framework do you want to use with?",hint:"Space to select and Enter to submit.",instructions:!1,choices:S.map(e=>({title:e.name,value:e.value,selected:e.value==="react"}))});u&&(w=u),w!=="react"&&(o.error(`We are not currently supporting ${u} on https://farmui.com.`),o.info("Be a part of the community by adding an integration to your favorite framework, go for https://github.com/Kinfe123/farm-ui"),process.exit(0));let L=r.join(f,F),d=r.join(L,"/farmui"),b=I(`Looking for the components with id ${l.id}`);b.start();let R=null,C=[];try{R=await fetch(Z),C=await R.json()}catch{o.error(`
Cant import the components. Please check your network connection`),o.info("If you think this is an bug, Please make an issue - https://github.com/Kinfe123/farm-ui/issues/new"),process.exit(0)}b.succeed(`Found a component. Preview here - https://farmui.com/example/${l.id}`),b.stop();let c=C.find(e=>e.id===l.id);if(c||(o.error("No such component exists with in this ID, Please hop on https://farmui.com/components to double check the component ID"),o.info("If you think this is an bug, Please make an issue - https://github.com/Kinfe123/farm-ui/issues/new"),process.exit(0)),p(d)){let{proceed:e}=await g({type:"confirm",name:"proceed",message:"Ready to install components and dependencies. Proceed?",initial:!0});e||(o.info("Make sure you have the right path to dump the components"),process.exit(0))}else await x.mkdir(d,{recursive:!0});let m=[],P=c.files[0].root.name,M=!1;for(;!M;){let{componentName:e}=await g({type:"text",name:"componentName",message:`What do you want the component to be called? (leave it blank which defaults to ${P})`,hint:"component name"});if(!e)break;let n=r.join(d,`${e}.tsx`);p(n)?o.warn("The component with that name already existed. Please with another name"):(P=e,M=!0)}let $=c.tailwind;if($){o.info("The components need tailwind.config.(ts/js) change");let e=r.join(process.cwd(),"tailwind.config.js"),n=r.join(process.cwd(),"tailwind.config.ts"),i="ts",a=!0;if(!p(n)&&!p(e)&&(a=!1),!a)o.warn("The tailwind.config.(js/ts) can not be found with in the given directory , Please make sure to intialize your project with tailwindcss or shadcn , may be any UI component library that built on top of tailwind"),o.warn("Please use this instructions to setup your tailwindcss - https://tailwindcss.com/docs/installation"),o.info("Skipping... and importing the components");else{p(e)&&(i="js");let _=`tailwind.config.${i}`,z=r.join(process.cwd(),_),ce=await x.readFile(z,"utf8");oe.map(y=>{if(y in $){o.info(`For ${y} - copy the following and paste it to your ${_}`);let B=$[y].content;console.log({[y]:B})}})}}let W=c.files[0].root.contents[w].content,J=r.join(d,P),A=[];c[1]&&(A=c.files[1].child),m.push({comp_content:W,comp_path:J}),A.map(e=>{let n=e.name,i=e.contents[w].content,a=r.join(d,n);m.push({comp_content:i,comp_path:a})});let T=I("Dumping your components..."),j=I("Overriting"),h=c.dependencies;m?m.map(async({comp_content:e,comp_path:n})=>{let i=`${n}.tsx`;if(p(i)){let{overwrite:a}=await g({type:"confirm",name:"overwrite",message:"Override already existed component? Proceed?",initial:!0});a?(j=I(`Overwriting the component at ${i}....`),j.start(),await x.writeFile(`${n}.tsx`,e)):o.info(`Skipping: The component ${i} already existed`)}else T.start(),await x.writeFile(`${n}.tsx`,e)}):o.warn("No component to add");let K=await G(f);h?.length&&await Q(`${K}`,["install",...h],{cwd:process.cwd()}),T.stop(),j.stop();let E=v().dependencies;if(h.length&&(o.info(`Dependencies - ${h.length} added`),h.map(e=>{let n=(E&&String(E[e]))??"";o.success(` + ${e} @ ${n}`)})),m){let e=d.split("/"),n=e[e.length-2]+"/"+e[e.length-1];o.info(`Components - ${m.length} added inside of ${n}`),m.map(i=>{let a=i.comp_path.split("/"),_=a[a.length-1];o.success(` + ${_}`)})}T.succeed("Successfully installed")}catch(u){o.error("Error has occured!"),console.log("Error: ",u)}});process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function ne(){let t=await v(),s=new te().name("farmui").description("Add natively farmed farmUI blocks ").version(t.version||"0.1.0","-v, --version","display the version number");s.addCommand(O),s.parse()}ne();
//# sourceMappingURL=index.js.map