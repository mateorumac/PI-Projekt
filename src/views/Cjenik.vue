<template>

    <div id="app">
      

      <div class="container1">
        <div class="row">
          

          <div class="column main">
            <!-- Add your main content here -->
            <h2>{{ message }}</h2>
            <p>This is a Vue.js website example. On small screens, the menu and right column will stack on top of each other.</p>
          </div>

          <div class="column right">
            <!-- Add any additional content here -->
            <p>right</p>
          </div>
        </div>
      </div>

      
    </div>
    </template>
<style>
      * {
        box-sizing: border-box;
      }
      .container1 {
        max-width: 960px;
        margin: 0 auto;
      }
      .header,
      .footer {
        background-color: #f2f2f2;
        padding: 10px;
        text-align: center;
      }
      .header {
        position: fixed;
        top: 0;
        width: 100%;
      }
      
      .row::after {
        content: "";
        clear: both;
        display: table;
      }
      .column {
        float: left;
        width: 100%;
        padding: 10px;
      }
      
      @media (max-width: 600px) {
        .menu,
        .main,
        .right {
          width: 100%;
        }
      }
    </style>

