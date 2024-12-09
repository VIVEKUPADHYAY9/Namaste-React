.header {
  display: flex;
  justify-content: space-between;
  /* border: 2px solid rgb(101, 88, 88); */
  box-shadow: -3px 4px 7px green;
  position: sticky;
  top: 0;
  height: 100px;
  background-color: whitesmoke;
  z-index: 2;
}
.logo {
  width: 100px;
  height: 90px;
  /* border: 2px solid black; */
  border-radius: 34px;
}

.nav-bar > ul {
  display: flex;
  font-size: 24px;
  list-style-type: none;
}
.nav-bar > ul > li {
  padding: 12px;
  margin: 6px;
  font-size: 28px;
}

.nav-bar > ul > li:hover {
  color: rgb(15, 241, 15);
  cursor: pointer;
}
.Search-bar {
  padding: 15px;
  margin: 13px;
}
.search-Btn {
  color: white;
  background-color: green;
  border: 2px solid green;
  border-radius: 11px;
  margin: 13px 12px;
  padding: 7px 6px;
  font-size: 14px;
  position: relative;
  right: 44px;
  cursor: pointer;
  /* z-index: 0; */
}
.search-Btn:hover {
  color: black;
}
.input-Btn {
  border: 2px solid green;
  border-radius: 10px;
  padding: 7px;
  margin: 2px;
}
.res-cards {
  width: 200px;
  height: 250px;
  /* border: 2px solid black; */
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
}
.Restaurant-Container {
  margin: 53px;
  padding: 27px;
  display: flex;
  height: 200px;
  flex-wrap: wrap;
  gap: 10px;
}
.res-logo {
  width: 100%;
  height: 40%;
  object-fit: cover;
  /* border-radius: 46px; */
}

h4 {
  margin: 4px;
  line-height: 26px;
}
.res-cards:hover {
  border: 2px solid rgb(72, 61, 61);
  cursor: pointer;
}
.res-cards > h4 {
  /* border: 2px solid black; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shimmer-container {
  margin: 53px;
  padding: 27px;
  display: flex;
  height: 200px;
  flex-wrap: wrap;
  gap: 10px;
}
.shimmer-card {
  width: 200px;
  height: 300px;
  /* border: 2px solid black; */
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
}
.login-btn {
  padding: 0 20px;
  margin: 10px 14px;
  border-radius: 10px;
  border: none;
  background-color: rgb(42, 216, 27);
  color: black;
  font-size: 22px;
  cursor: pointer;
}

.login-btn:hover {
  color: white;
}
.filter {
  display: flex;
}
.top-restaurant-btn {
  /* padding: 2px; */
  margin: 41px;
  background-color: green;
  color: white;
  border-radius: 10px;
  position: relative;
  right: 68px;
}
.top-restaurant-btn:hover {
  color: black;
  cursor: pointer;
}
/* src/components/ErrorPage.css */

.error-page {
  text-align: center;
  padding: 50px;
  font-family: "Arial", sans-serif;
}

.error-page h1 {
  color: #ff6347; /* Tomato color to match a food theme */
}

.error-page p {
  margin-top: 10px;
  font-size: 18px;
}

.error-page .error-image {
  margin: 20px 0;
  max-width: 100%;
  height: 215px;
  border: 2px solid green;
  border-radius: 20px;
}
.card-ul {
  padding: 0px;
  margin: -3px;
  display: flex;
}

.delivery-time {
  margin: -3px;
  padding: 1px;
  position: relative;
  left: 12px;
}
.star1 {
  background-color: green;
  color: white;
  border-radius: 45%;
  margin: 10px;
  position: relative;
  left: -3px;
}
.cuisines {
  margin: 0px;
  padding: 0px;
}
.name {
  margin: 0px;
  padding: 0px;
  font-family: Gilroy_Bold;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: rgba(2, 6, 12, 0.92);
  overflow: hidden;
  width: 100%;
}
#star2 {
  margin: 2px;
  padding: 2px;
  position: relative;
  left: -12px;
}

/* offline game code of css */
