import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button className='hello'>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <section class='section-front-part'>
        <div class='front-part'>
          <h1 class="heading-primary glow">
            CHAT.<br></br>PLAY.<br></br>TALK.
          </h1>

          <p className='main-desc'>
            We're changing the world with our steps in providing a <br></br>   99.98% secure environment for people to chat!
          </p>

          <a href="#" class="btn btn--full margin-right-sm"
          >Download Now</a
          >

          <a href="#" class="btn2 btn--outline"
          >Open Web</a
          >
        </div>

      </section>

    </div>
  );
}