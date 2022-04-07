<template>
<div id="app">
  <div class="header">
    <router-link to="/" class="router-link-style">
      <div class="title">
      <h1>LiftYou</h1>
    </div>
    </router-link>
    <div class="router-link-holder">
      <router-link to="/Home" class="router-link-style">
        Share Your Experience
      </router-link>
      <p>&nbsp;|&nbsp;</p>
      <router-link to="/Share" class="router-link-style">
        Lift Others
      </router-link>
      <p>&nbsp;|&nbsp;</p>
      <router-link to="/AI" class="router-link-style">
        Meet Your AI Psychologist
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="bottomPadding"></div>
  <div class="footer">
    <a href="https://github.com/brightlightkim/liftyou">GitHub Link</a> 
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fce0e0;
  padding: 0px;
  margin: 0px;
}

.router-link-holder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-link-style {
  color: white;
  text-decoration: none;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  padding: 0px 100px 0px 100px;
  background-color: #f45656;
  color: white;
}

.title h1 {
  font-size: 30px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
  min-height: 500px;
}

.bottomPadding {
  height: 50px;
}

/* Footer */
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: white;
  font-size: 20px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
