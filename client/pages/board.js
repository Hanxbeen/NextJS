import Header from '../components/Header';

export default function Board() {
  return (
    <div className="container">
      <Header />
      {/* <h1>Board</h1> */}
      <div class="row row-cols-1 row-cols-md-2 g-4 mt-5">
        <div class="col">
          <div class="card">
            <img src="/img/jslogo.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/img/bootlogo.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/img/nextlogo.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="/img/reactlogo.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
