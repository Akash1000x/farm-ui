import"dotenv/config";import{Command as M}from"commander";import"dotenv/config";import{existsSync as b,promises as u}from"fs";import a from"path";import j from"gradient-string";import{Command as C}from"commander";import E from"ora";import{execa as F}from"execa";import w from"prompts";var _=`
\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591 
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591  
\u2591\u2592\u2593\u2588\u2593\u2592\u2591     \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2588\u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2591\u2592\u2593\u2588\u2593\u2592\u2591  v0.0.1 

                                                                               
`;import i from"chalk";var d={error(...o){console.log(i.red(...o))},warn(...o){console.log(i.yellow(...o))},info(...o){console.log(i.cyan(...o))},success(...o){console.log(i.green(...o))},break(){console.log("")}};var y=process.env.COMPONENTS_REGISTRY_URL??"http://localhost:3000/api/components";console.log({COMPONENT_REGISTERY_URL:y});console.log(j("pink","blue")(_));var k=new C().name("add").description("Adding a new component for farmui from terminal").argument("<string>","Id of the componnt from farmui.com").option("--id","id of the component").option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).action(async(o,e)=>{console.log({opts:e});try{let c="components",{dir:p}=await w({type:"text",name:"dir",message:"A directory where it should be living",hint:"./components "});console.log({dir:p}),p&&(c=p);let m=a.join(process.cwd(),c),s=a.join(m,"/ui");if(b(m)){d.info("The component already existed");let{proceed:n}=await w({type:"confirm",name:"proceed",message:"Ready to install components and dependencies. Proceed?",initial:!0})}console.log(m),console.log({root_dir:s}),await u.mkdir(s,{recursive:!0});let r=[],f=await fetch(y);console.log(f);let g=await f.json();console.log("The file is : ",g);let t=g.find(n=>n.id===o);console.log({select_files_by_id:t});let x=t.files[0].root.name,R=t.files[0].root.contents[0].content,T=a.join(s,x),v=t.files[1].child;r.push({comp_content:R,comp_path:T});let U=[];v.map(n=>{let l=n.name,S=n.contents[0].content,A=a.join(s,l);r.push({comp_content:S,comp_path:A})});let h=t.dependencies,P=E("Installing components...").start();r?r.map(async({comp_content:n,comp_path:l})=>{await u.writeFile(`${l}.tsx`,n)}):d.warn("No component to add"),h?.length&&await F("pnpm",["install",...h],{cwd:process.cwd()}),P.succeed("Successfully installed")}catch(c){console.log("Error: ",c)}});import N from"path";import G from"fs-extra";function I(){let o=N.join("package.json");return G.readJSONSync(o)}process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function O(){let o=await I(),e=new M().name("farm-ui").description(`Add natively farmed ui and component blocks to your application 
 for more, visit us - https://farmui.com`).version(o.version||"0.0.1","-v, --version","display the version number");e.addCommand(k),e.parse()}O();
//# sourceMappingURL=index.js.map