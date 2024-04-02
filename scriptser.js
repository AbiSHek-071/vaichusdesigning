var home = document.querySelector(".logo");

function openLink() {
    console.log("working");
   
    var url = "index.html";
    window.location.href = url;
}


function openwebdesign() {
    console.log("working");
   
    var url = "webdesigning.html";
    window.location.href = url;
}

function openlogodesigning() {
    console.log("working");
   
    var url = "logodesigning.html";
    window.location.href = url;
}

function opengraphicadv() {
    console.log("working");
   
    var url = "graphicadv.html";
    window.location.href = url;
}







home.addEventListener("click", openLink);


function scrollToServiceSection() {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



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
  