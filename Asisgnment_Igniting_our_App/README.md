### Webpack - npm i -D parcel (-D stand for the devDependencies)


### React - npm install react


### React Dom - npm install react-dom


### Run The App - npx parcel index.html
        ### x Stand for the exicution


### How create the parcel with development build
    - npx parcel index.html


### How create the parcel with Production build
    - npx parcel buiild index.html


      - It will miniy the all files, it will done while prod build and move everyting into the   
        "dist" folder (It is not removig console log from build)


      - `npx parcel buiild index.html` : It will give the error like  Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html". because in package.json entry point is index.js and we are pasisng index.html so we will removeit from the package.json

      - `npx parcel index.html --https` it will run `Server running at https://localhost:1234` even build time is also more as compare
         to normal build
         parcel is using cache for everyting 

    - No need to add "parcel-cache" in .gitIgnore

### Browserslist
    Using this ouer app is compatibale with other browsers
    https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
    Ex.
    "browserslist" :[
    "last 2 versions"
     "last 2 chrome versions"
  ]