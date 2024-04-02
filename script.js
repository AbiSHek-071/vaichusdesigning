var home = document.querySelector(".logo");

function openLink() {
    console.log("working");
   
    var url = "index.html";
    window.location.href = url;
}

home.addEventListener("click", openLink);


function scrollToServiceSection() {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function gobackhome() {
    const headersection = document.getElementById('nav');
    if (headersection) {
        headersection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


var portfolio = document.querySelector(".portfolio");

function openPortfolioLink() {
    console.log("Portfolio link clicked");
    var url = "portfolio.html";
    window.location.href = url;
}

portfolio.addEventListener("click", openPortfolioLink);

var box1 = document.querySelector(".box-1");
function openBox1Link() {
    console.log("Box 1 link clicked");
    var url = "webdesigning.html";
    window.location.href = url;
}

box1.addEventListener("click", openBox1Link);

var box2 = document.querySelector(".box-2");
function openBox2Link() {
    console.log("Box 2 link clicked");
    var url = "logodesigning.html";
    window.location.href = url;
}

box2.addEventListener("click", openBox2Link);

var box3 = document.querySelector(".box-3");
function openBox3Link() {
    console.log("Box 3 link clicked");
    var url = "graphicadv.html";
    window.location.href = url;
}

box3.addEventListener("click", openBox3Link);


function navigateToPhoneDialer() {
    window.location.href = 'tel:+919605081886'; 
}
function navigateToWhatsapp() {
    
    window.location.href = 'https://wa.me/+919605081886';
  }

  function navigateToEmail() {
    window.location.href = 'mailto:vaichusdesigns@gmail.com?subject=Enquiry%20Default';
}



document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.querySelector('.main-button');
  
    mainButton.classList.add('active'); 
  
    mainButton.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  
    window.addEventListener('scroll', function() {
      const mainButton = document.querySelector('.main-button');
      mainButton.classList.remove('active');
    });
  });
  
