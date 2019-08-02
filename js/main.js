(() => {
  console.log('link successful');

  let
    homeButton = document.querySelector(".home-button"),
    homeImage = document.querySelector(".image-container"),
    homeScreen = document.querySelector(".home-screen"),
    bioPage = document.querySelector("main"),
    elevatorButton = document.querySelector("#elevator"),
    switchButton = document.querySelectorAll(".switch");

  const
    profilePhotos =  document.querySelector(".photos"),
    nameTitle = document.querySelector(".main-name"),
    subName =  document.querySelector(".sub-name"),
    title =  document.querySelector(".title"),
    bio =  document.querySelector(".full-bio"),
    partnerName = document.querySelector(".partner-name");

  const profile = [
  //JEFFREY HELDER'S ARRAY//
    [`<div class="loaderJ"></div><img id="person" src="images/j_pose.png" alt="pose">
    <img id="person" src="images/j_front.png" alt="front">
    <img id="person" src="images/j_eight.png" alt="1/8">
    <img id="person" src="images/j_side.png" alt="1/2">`,
    `Jeffrey Helder`,
    `Jeffrey Helder`,`Student, Fanshawe`,
    `Student at Fanshawe College Downtown Campus, enrolled in
    the <i>Interactive Media Design</i> (IDP3) program. Enjoys coding,
    3D design, and many different aspects of the media field.</br>
    Aspiration in life is to be a developer working with 3D modeling,
    XR platforms, all media types, and the newest technologies to
    create industry leading applications.`,
    `<a class="new" id="ginoSwitch" data-offset="1">GINO GHALEHPARDAZ</a>`],
  //GINO GHALEHPARDAZ'S ARRAY//
    [`<div class="loaderG"></div><img id="person" src="images/g_pose.png" alt="pose">
    <img id="person" src="images/g_front.png" alt="front">
    <img id="person" src="images/g_eight.png" alt="1/8">
    <img id="person" src="images/g_side.png" alt="1/2">`,
    `Gino Ghalehpardaz`,`Gino Ghalehpardaz`,`Student, Fanshawe`,
    `Student at Fanshawe College Downtown Campus, enrolled in
    the <i>Interactive Media Design</i> (IDP3) program. Enjoys coding (ALOT),
    marketing, multimedia editing, and more.</br>
    Aspiration in life is to be a web developer (preferably full-stack)
    while balancing being a Professional Mixed Martial Artist.`,
    `<a class="new" id="jeffSwitch" data-offset="0">JEFFREY HELDER</a>`]
  ];

  function reloadPage() {
    location.reload();
  };

  function hideHome(){
    homeScreen.classList.add("home-screen-hide");
    bioPage.classList.remove("main-hidden");
  };

  function switchBio(){

    let array = this.dataset.offset;

    console.log(array);

    profilePhotos.innerHTML = profile[array][0];
    nameTitle.textContent = profile[array][1];
    subName.textContent = profile[array][2];
    title.textContent = profile[array][3];
    bio.innerHTML = profile[array][4];
    partnerName.innerHTML = profile[array][5];

    let newButton = document.querySelectorAll(".new");

    console.log(newButton);

    newButton.forEach(button => button.addEventListener("click", switchBio));
  };

  switchButton.forEach(button => button.addEventListener("click", switchBio));

  homeButton.addEventListener("click", reloadPage);
  homeImage.addEventListener("click", hideHome);


})();
