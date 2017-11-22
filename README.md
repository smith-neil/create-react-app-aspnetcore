create-react-app-aspnetcore
===========================

Create React apps which are serviced by ASP.NET Core with no build configuration. This is not a fork of create-react-app. This is much more opinionated than create-react-app.

Quick Overview
--------------
```javascript
npm install -g create-react-app-aspnetcore

create-react-app-aspnetcore my-app
cd my-app/
npm start
```

Then open http://localhost:8000 to see your app.
When you're ready to deploy to production, create a minified bundle with `npm run build`.

### Notable differences with create-react-app
1. ASP.Net Core backend
2. SSR
3. styled-components and styled-theme are included by default
4. No support for scss, less, etc... by default
5. Arc Atomic Design methodology by default

### Get started immediately
You *don't* need to install or configure tools like Webpack or Babel.
They are preconfigured *but not hidden*.

Just create a project and you're good to go.

Getting started
---------------
