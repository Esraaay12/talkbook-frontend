import logo from './svgpostie-_1_ (2).svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <body data-hijacking="off" data-animation="opacity">
	  `   <section class="cd-section visible">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="wrapper fadeInDown">
        <div id="formContent">
        <p>
          Log in to Postie: 
          {/* <code>  */}
          <tr>
            <label for="fname">E-mail:</label>
              <input type="text" id="fname" name="fname"></input>
              </tr>
              <tr>
            {/* E-amil:</code> and save to reload. */}
            <label for="fname">password:</label>
              <input type="text" id="fname" name="fname"></input>
          </tr>
        </p>
        </div>
        <tr>
          <a href="https://nextjs-plum-five-51.vercel.app/">
            <input type="submit" class="fadeIn fourth" value="Log In" href="https://nextjs-plum-five-51.vercel.app/"></input>
            </a>
        </tr>
        </div>
        <div id="formFooter">
      <a class="underlineHover" href="http://localhost:4000/signup">Forgot Password?</a>
        </div>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      </a>
      </header>
      </section>
  <section class="cd-section">  
  <header class="container-fluid">
    <h1>Welcome To Postie Site</h1>
    <p>This Site is social site , Where you can post many posts and see others posts.My name is Asraa Ayoub, i am the CEo of postie app.</p>
    <a id="fog" href="#">Read more</a>
  </header>
  </section>
  <section class="cd-section">
    <div class="col-lg-12 section-a">
      <h2>About Company</h2>
      <p>
        We Are ....
      </p>
    </div>
  </section>
  <section class="cd-section">
  <article class="row">
    <div class="col-md-4 article-1">
      <h2>Design</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum minima at, quod dolores porro officia deleniti odio, alias consequuntur pariatur.
      </p>
    </div>
    <div class="col-md-4 article-2">
      <h2>Develop</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur, aperiam ipsum. Ipsum, quis provident, blanditiis totam deserunt voluptatem tempore.
      </p>
    </div>
    <div class="col-md-4 article-3">
      <h2>Testing</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui iste laborum magni enim eveniet mollitia tempora dicta unde culpa!
      </p>
    </div>
  </article>
  <footer class="row">
    <div class="col-lg-12">
      <p>&copy; 2022 Asraa Ayoub. Design and Develop</p>
    </div>
  </footer>
  </section>
  <nav>
		<ul class="cd-vertical-nav">
			<li><a href="#0" class="cd-prev inactive">Next</a></li>
			<li><a href="#0" class="cd-next">Prev</a></li>
		</ul>
	</nav> 
  </body>
  </div>
  );}
export default App;
