# TODO APP NOTES 

## BASIC THINGS 
* Chage the APP title at public/index.htmll
* Main Logic displayed in App.js
* Package.json  as important as --  pom.xml
* React can be used to develop Web Apps and Native Apps(Android / Iphone) 
  -- inside package.json  =
  
   dependencies
    - react( basic React support ) 
    - react-dom(web browser support)

* index.html - 基础模板
* index.js   - 基础 js 文件, 渲染 app component 至 index.html
* React 是基于 Component 进行渲染的


## React Components
<ol>
    <li>View - JSX or JavaScript
        <p>JSX -  An extension of JS, supports embeded HTML</p>
    </li>
    <li>Logic - Javascript
        <p>buttons - check boxes etc. 's logic</p>
    </li>
    <li>Styling - CSS
    <p> component.css file</p>
    </li>
    <li>State - Internal Data Store</li>
    <li>Props - PassData</li>
</ol>

####Component Types
<ol>
   <li> <strong> Class Components </strong>
       <p> a class exrtends Component class
       <p> have additional functions like State
       
   <li> <strong>Function Components</strong> 
       <p> just a function return HTML 
       <p> for simple component use 
</ol>

* Render 函数每次只能返回一个 element`<div>` 受限于 JSX 转译 (BABEL)
* 不一定用 div 可以用 empty node 
* All nodes must be closed properly
* Components Name must be Initial
* small letters are for HTML tags
* have to import React in if you want to use JSX

####Refactoring Components to individual modules 
Each component should be defined in its own file.
Each file is a module

* When separating the components, make sure the component is imported into App.js

* And also make sure the components has been export properly  

  `export default FirstComponent;`
* Why in import some components names are {} -ed? 

  There could be not only one component in one module: <br/>
  for default exported components, they can use directly,<br/>
  for other components - {}
  
