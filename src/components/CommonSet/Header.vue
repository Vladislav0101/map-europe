<template>
 <header class="wrapper">
  <span class="logo">exnaton</span>
  <div class="nav-box">
   <nav>
     <span>Product</span>
     <span>Projects</span>
     <span>For You &amp; Me</span>
     <span>For Municipalities</span>
     <span>About us</span>
   </nav>
   <div class="language">lang</div>
  </div>
 </header>
</template>

<style scoped>
  header{
    display: flex;
    height: 10rem;
    justify-content: space-between;
    padding: 0 4rem;
    color: #fcfcfc;
    background-color: #1d2024;
    padding-top: 3rem;
  }
  .logo{
    width: max-content;
    display: grid;
    align-items: center;
    font-size: 1.5rem;
  }
  .nav-box{
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 8rem;
  }
  nav{
    column-gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
  }
  nav span{
    width: max-content;
    font-size: 1rem;
  }
  .language{
    display: grid;
    align-items: center;
  }
</style>