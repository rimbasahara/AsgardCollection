import { Link } from "react-router-dom";

const CartList = () => {
  return (
    <section class="h-100 h-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div class="card card-registration card-registration-2">
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <div class="d-flex justify-content-between align-items-center mb-5">
                        <h1 class="fw-bold mb-0">Shopping Cart</h1>
                        <h6 class="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr class="my-4" />

                      <div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                            class="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">Shirt</h6>
                          <h6 class="mb-0">Cotton T-shirt</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">€ 44.00</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                            class="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">Shirt</h6>
                          <h6 class="mb-0">Cotton T-shirt</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">€ 44.00</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                            class="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">Shirt</h6>
                          <h6 class="mb-0">Cotton T-shirt</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">$ 44.00</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted">
                            <i class="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="pt-5">
                        <h6 class="mb-0">
                          <Link to="/" className="Text-Body">
                            <i class="fas fa-long-arrow-alt-left me-2"></i>Back
                            to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 bg-body-tertiary">
                    <div class="p-5">
                      <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-4">
                        <h5 class="text-uppercase">items 3</h5>
                        <h5>€ 132.00</h5>
                      </div>

                      <hr class="my-4" />

                      <div class="d-flex justify-content-between mb-5">
                        <h5 class="text-uppercase">Total price</h5>
                        <h5>€ 132.00</h5>
                      </div>
                      <Link to="/">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
