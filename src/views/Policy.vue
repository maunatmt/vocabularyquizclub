<template >
  <div id="policy-container">
    <div class="policy-item">
      <h3>Privacy Policy</h3>
      <h4>About Advertisements</h4>
      <p>This service uses third-party advertising services (Google Adsense) and uses cookies to display advertisements for products and services that match the interests of users.</p>
      <p>The use of cookies enables this site to identify your computer, but does not allow us to identify you personally.</p>
      <p>For more information on how to disable cookies and Google Adsense, please see <a target=”_blank” href="https://policies.google.com/technologies/ads">Advertising - Privacy & Terms - Google<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /></a>.</p>
      <h4>About Access Analysis Tools</h4>
      <p>This service uses Google Analytics, an access analysis tool provided by Google. This Google Analytics uses cookies to collect traffic data. Traffic data is collected anonymously and does not personally identify you.</p>
    </div>
    <div class="policy-item">
      <h3>Disclaimer</h3>
      <h4>About Advertisements</h4>
      <p>We are not responsible for any information, services, or other content provided on sites to which you are redirected by links or banners from this blog.</P>
      <p>While we strive to provide the most accurate information possible regarding the content and information on this blog, we cannot guarantee the accuracy or safety of the information. Information may be out of date.</p>
      <p>Please note that we are not responsible for any damages or other losses caused by the content of this site.</p>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="50px" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0,0 q50,125 100,0 Z" fill="rgb(242, 240, 236)" />
  </svg>
</template>

<style scoped>
  #policy-container {
    background: var(--main-background-color);
    padding: 1rem;
    min-height: calc(100vh - 5rem);
  }

  .policy-item {
    padding: 1rem;
  }

  h3, h4 {
    max-width: 1050px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  p {
    color: var(--sub-font-color);
    display: justify;
    max-width: 1050px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  a {
    color: blue;
  }

  svg {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }

  @media (max-width: 850px) {
    #quiz-result {
      width: auto;
      margin: 0 0.5rem;
    }
  }
</style>