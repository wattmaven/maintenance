<script lang="ts">
</script>

<main>
  <div class="maintenance-container">
    <div class="logo-container">
      <img src="/favicon.svg" class="logo light-logo" alt="WattMaven Logo" />
    </div>

    <h1>We'll be back.</h1>

    <p class="message">
      We're performing scheduled maintenance.<br />
      Please check
      <a href="https://status.wattmaven.com" target="_blank"
        >status.wattmaven.com</a
      > for updates.
    </p>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #09090b;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(#app) {
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    text-align: center;
  }

  .maintenance-container {
    padding: 0 20px;
    max-width: 600px;
  }

  .logo-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .logo {
    height: auto;
    max-width: 150px;
  }

  .dark-logo {
    display: none;
  }

  h1 {
    font-family: "Playfair Display", serif;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .message {
    font-size: 17px;
    line-height: 1.5;
    color: #1c1c22;
    margin-top: 0;
  }

  .message a {
    color: #5c6600;
    text-decoration: underline;
  }

  /* Adjust for dark mode */
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #0a0706;
      color: #fafafa;
    }

    .message {
      color: #e4e4e7;
    }

    .message a {
      color: #eeff99;
      text-decoration: underline;
    }
  }
</style>
