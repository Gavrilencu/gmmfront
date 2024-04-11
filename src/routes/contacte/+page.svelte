<script>
  import Header from "./../../lib/Header.svelte";
  import Subheader from "../../lib/Subheader.svelte";
  import Footer from "../../lib/Footer.svelte";
</script>

<Subheader />
<Header />
<div class="content">
  <div class="container">
    <div class="row align-items-stretch no-gutters contact-wrap">
      <div class="col-md-8">
        <div class="form h-100">
          <h3>Lasa un mesaj iar noi va contactam.</h3>
          <form
            class="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
            novalidate="novalidate"
          >
            <div class="row">
              <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Nume *</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  placeholder="..."
                />
              </div>
              <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Mail *</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="..."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Telefon</label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="phone"
                  placeholder="..."
                />
              </div>
              <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Companie</label>
                <input
                  type="text"
                  class="form-control"
                  name="company"
                  id="company"
                  placeholder="..."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group mb-5">
                <label for="message" class="col-form-label">Mesaj *</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="..."
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary rounded-0 py-2 px-4"
                />
                <span class="submitting"></span>
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4"></div>
          <div id="form-message-success">Mesajul dvs a fost expediat cu succes,in curind va vom contacta,o zi buna.</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-info h-100">
          <h3>Informatie de contact</h3>
          <p class="mb-5">
        GMM BIOTECHNOLOGY
          </p>
          <ul class="list-unstyled">
            <li class="d-flex">
              <span class="wrap-icon icon-room mr-3"></span>
              <span class="text"
                >Bulevardul Stefan cel Mare si Sfint 65, Chisinau</span
              >
            </li>
            <li class="d-flex">
              <span class="wrap-icon icon-phone mr-3"></span>
              <span class="text">+373 (60) 939 9321</span>
            </li>
            <li class="d-flex">
              <span class="wrap-icon icon-envelope mr-3"></span>
              <span class="text">info@gmmbiotechnology.md</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="spacebottom"></div>
<Footer/>


<style>
    .spacebottom {
        margin-bottom: 20px;
    }
    .content {
        position: relative;
    }
</style>