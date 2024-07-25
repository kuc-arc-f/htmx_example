import React from 'react';
//
const Layout = ({ children }) => {
  return (
  <html>
    <head>
    <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>welcome</title>
      {/* CSS */}
      {(process.env.NODE_ENV === "develop") ? (
         <link href="/main.css" rel="stylesheet" /> 
      ): (
         <link href="/public/main.css" rel="stylesheet" /> 
      )}      
      <script src="https://cdn.tailwindcss.com"></script>
      <script
        src="https://unpkg.com/htmx.org@1.9.10"
        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
        crossOrigin="anonymous"
      ></script>      
    </head>
    <div>
      <a href="/">[ home ]</a>
      <a href="/about">[ about ]</a>
      <a href="/hxget">[ HxGet ]</a>
      <a href="/hxpost">[ HxPost ]</a>
      <hr />        
      <main>{children}</main>
    </div>
  </html>    
  );
};
export default Layout;
/*
{(process.env.NODE_ENV === "develop") ? (
    <script type="module" src="/static/AuthCommon.js"></script>
): (
  <script type="module" src="/public/static/AuthCommon.js"></script>
)}
*/
