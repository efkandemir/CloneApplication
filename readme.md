<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Sahibinden.com Clone – Fullstack Mobile Application</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      color: #ffffff;
      background-color: #121212;
    }
    h1, h2 {
      color: #ffffff;
    }
    hr {
      border: none;
      border-top: 1px solid #444444;
      margin: 30px 0;
    }
    ul {
      list-style-type: disc;
      padding-left: 20px;
    }
    ul li {
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 16px;
    }
    .center {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    img {
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .photos-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-bottom: 60px;
    }
    .photo-card {
      background-color: #222;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
      width: 220px;
      padding: 15px;
      color: #fff;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .photo-card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #00aced;
    }
    .photo-title {
      font-weight: bold;
      margin: 10px 0 5px 0;
      font-size: 1.1rem;
    }
    .photo-description {
      font-size: 0.9rem;
      color: #ccc;
      min-height: 40px;
    }
  </style>
</head>
<body>

  <h1>Sahibinden.com Clone – Fullstack Mobile Application (React Native & Node.js)</h1>

  <p>
    This is a full-stack mobile classifieds application inspired by sahibinden.com, developed with React Native Expo for the frontend and Node.js/Express.js for the backend using MongoDB as the database.
    The app allows users to register, log in, post vehicle listings, upload images, and browse listings with location-based features.
  </p>

  <p>
    The project follows a modular and layered architecture, implementing best practices to separate concerns between client and server.
  </p>

  <hr />

  <h2>Technologies Used</h2>
  <ul>
    <li>React Native (Expo Bare Workflow)</li>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (Mongoose ODM)</li>
    <li>Firebase Storage</li>
    <li>Axios</li>
    <li>JWT Authentication</li>
  </ul>

  <hr />

  <h2>🗃️ Database Schema</h2>
  <p>
    Below is a visual representation of the database schema used in this project, including the main tables (<strong>Users</strong> and <strong>Vehicles</strong>) and their relationships.
  </p>
  <ul>
    <li><strong>Users</strong> table: Stores all registered user information including personal details and authentication data.</li>
    <li><strong>Vehicles</strong> table: Contains vehicle listings posted by users, with details like make, model, price, location, and images.</li>
    <li>Each vehicle is associated with a user through a foreign key relationship, indicating the listing owner.</li>
  </ul>

  <div class="center">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/database.png?alt=media&token=0e828186-03e0-4823-b418-2aec25c03a01" alt="Database Schema" width="600" />
  </div>

  <hr />

  <h2>Example Photos</h2>
  <p>Below are some example photos from the application showcasing vehicle listings and user interface.</p>

  <div class="photos-container">
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/vitrin.png?alt=media&token=94f14887-d2d1-4e53-8c80-66d911a10ae2" alt="Vitrin" />
    <div class="photo-title">Vitrin</div>
    <div class="photo-description">Featured vehicle listing on the homepage.</div>
  </div>

  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/%C4%B0lan.png?alt=media&token=78bad4ed-5ad1-4518-9e26-42d52ba54cf6" alt="İlan" />
    <div class="photo-title">Post Details</div>
    <div class="photo-description">Detailed vehicle advertisement view.</div>
  </div>

  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/%C4%B0lan2.png?alt=media&token=0e814b25-1464-4ef0-959a-6295dcc37937" alt="İlan2" />
    <div class="photo-title">Post Details</div>
    <div class="photo-description">Alternate listing layout with additional info.</div>
  </div>

  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/A%C3%A7%C4%B1klama.png?alt=media&token=67924cf9-1c6b-4a8d-932e-1752d1d3876b" alt="Açıklama" />
    <div class="photo-title">Description</div>
    <div class="photo-description">Description and details of the vehicle listing</div>
  </div>

  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/modeller.png?alt=media&token=bfd0ee14-9065-4e34-81f6-55a1dc040481" alt="Model" />
    <div class="photo-title">Model</div>
    <div class="photo-description">Select the model you prefer.</div>
  </div>

  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/Model%C4%B0lan.png?alt=media&token=dd0ed731-2d7c-4ed6-8620-326facddc8c2" alt="Model Listing" />
    <div class="photo-title">Model Listing</div>
    <div class="photo-description">Browse listings for the selected model.</div>
  </div>
</div>
<hr />

<h2>Add Listing Example</h2>
<p>Below are example screenshots demonstrating the vehicle listing process in the application.</p>

<div class="photos-container">
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver1.png?alt=media&token=b084766b-7ad3-4281-a605-233ee5d161d2" alt="Add Listing Step 1" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver2.png?alt=media&token=e9e6f5ae-894d-4a9c-8866-57f1dee24ad9" alt="Add Listing Step 2" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver3.png?alt=media&token=64a33981-b682-4611-85e1-822aedce2ffd" alt="Add Listing Step 3" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver4.png?alt=media&token=be86e472-657f-43a5-b631-062b7e103f83" alt="Add Listing Step 4" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver5.png?alt=media&token=58a62b77-6b65-4fe0-a836-7aa014850300" alt="Add Listing Step 5" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver6.png?alt=media&token=67c04f6e-2923-4422-887f-83a10a6e2070" alt="Add Listing Step 6" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver7.png?alt=media&token=cc7bf3a3-1578-4afa-a099-7ffc42018c94" alt="Add Listing Step 7" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/son.png?alt=media&token=92b770a6-a15f-4705-b929-54a1832a9db7" alt="Add Listing Step 8" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver9.png?alt=media&token=b179d750-c780-42ea-8c82-66606e624c74" alt="Add Listing Step 9" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilanver10.png?alt=media&token=377b8601-980c-4b8f-90a3-566c034480a0" alt="Add Listing Step 10" />
  </div>
  <div class="photo-card">
    <img src="https://firebasestorage.googleapis.com/v0/b/javainstaclone-94ad4.appspot.com/o/ilansuccesfull.png?alt=media&token=5bde041b-5bc8-4c50-bbe4-db7f4d098759" alt="Listing Submitted" />
  </div>
</div>

</body>
</html>
