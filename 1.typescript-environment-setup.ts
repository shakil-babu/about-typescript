/*
============= ONE
01. step-1 (install typescript globally)
--> npm i -g typescript
============ Two
02.step-2 (create src folder and create app.ts file into this folder)
--> src > app.ts
============ Three
03. step-3 (create output folder and create ts file into this folder)
--> output > app.js
============ Four
04. step-4 (open terminal and write (below))
--> tsc --init
============ Five
05. step-5 (go to jsconfing.json and find out (target, rootdir, outdir) then assign value like below);
--> "Target":"es6" , "outDir": "./output", "rootDir": "./src", 
============ Six
06. step-6 (write (tsc) in terminal for get your result , (If you don't like frequeintly write tsc so you can write tsc -w))
--> tsc
or
--> tsc -w
at the end (create a index.html file then connect app.js to see result)
--> index.html > app.js
*/