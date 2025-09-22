$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Oussema";
            $("#favicon").attr("href", "assets/images/cmsoon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["web development", "mobile development", "Cloud & DevOps"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// Remove the fetchData functions and calls since JSON files don't exist
// Projects are already defined in HTML, no need to load them dynamically

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Project Modal Functions
function openProjectModal(title, description, tags, year, demoLink, codeLink, screenshots) {
  console.log("Opening modal for:", title);
  
  // Set modal content - using correct IDs from HTML
  document.getElementById('modal-title').innerHTML = title + 
    '<span class="project-year"><i class="far fa-calendar-alt"></i> <span id="modal-year">' + year + '</span></span>';
  
  document.getElementById('modal-description').textContent = description;
  
  // Clear and add tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  if (tags && tags.length > 0) {
    tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'tag';
      tagSpan.textContent = tag;
      tagsContainer.appendChild(tagSpan);
    });
  }
  
  // Set links
  document.getElementById('modal-demo-link').href = demoLink || '#';
  document.getElementById('modal-code-link').href = codeLink || '#';
  
  // Clear and add screenshots
  const screenshotStrip = document.querySelector('.screenshot-strip');
  if (screenshotStrip) {
    screenshotStrip.innerHTML = '';
    if (screenshots && screenshots.length > 0) {
      screenshots.forEach(screenshot => {
        const img = document.createElement('img');
        img.src = screenshot;
        img.alt = 'Project Screenshot';
        screenshotStrip.appendChild(img);
      });
    }
  }
  
  // Show modal
  document.getElementById('projectModal').style.display = 'block';
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Add event listeners for view project buttons
document.addEventListener('DOMContentLoaded', function() {
  // Project data for each project with multiple screenshots
  const projectData = {
    'Smart Contstruction Platform': {
      title: 'Smart Construction Platform',
      description: 'Construction is an advanced digital platform designed to streamline and optimize every aspect of construction project management. Built using a microservices architecture, the solution ensures flexibility, scalability, and high availability across its modular services. Developed as part of our academic journey at ESPRIT – École Supérieure Privée d Ingénierie et de Technologies, this platform reflects months of hands-on learning, collaboration, and engineering best practices.',
           tags: ['DevOps', 'CI/CD', 'SpringBoot', 'Jenkins', 'Docker', 'Kubernetes'],
      year: '2023',
      demoLink: '#',
      codeLink: 'https://github.com/ahmedboughdiri-it/Application_web_modulaire_de_Gestion_de_Projet_de-_Construction.git',
      screenshots: [
         './assets/images/1.png',
         './assets/images/4.png',
         './assets/images/screen5.jpg',
        './assets/images/screen4.jpg',
       
        './assets/images/screen1.jpg',
        './assets/images/screen2.jpg',
        './assets/images/screen3.jpg',
        
      ]
    },
    'ClassFlow': {
      title: 'ClassFlow',
      description: 'The digitalization of class councils consists of transforming the traditional process of managing and conducting class council meetings into a digital system. Through an online platform, teachers, parents, and the administration can access student information, share feedback, record evaluations, and automatically generate reports. This solution reduces administrative workload, improves decision traceability, and strengthens transparency, while providing fast and secure access to data.',
      tags: ['DevOps', 'CI/CD', 'SpringBoot', 'Jenkins', 'Docker', 'Kubernetes'],
      year: '2023',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/digitalConseil.git',
      screenshots: [
        './assets/images/s1.png',
        './assets/images/s2.png',
        './assets/images/s3.png',
        './assets/images/s4.png',
        './assets/images/s5.png',
        './assets/images/s6.png',
        './assets/images/s7.png',
      ]
    },
    'LifeCycle IT': {
      title: 'LifeCycle_IT',
      description: 'The IT equipment management project aims to ensure a structured and rigorous monitoring of the equipment lifecycle within the company, from acquisition to disposal. It relies on collaboration between the Information Systems Department (needs assessment, troubleshooting), the Procurement and Maintenance Department (supplier management, quotations, repairs or replacements), and the Legal Affairs Department (insurance coverage of incidents). This process ensures better organization, cost optimization, enhanced transparency, and extends the lifespan of equipment through proactive and preventive management.',
      tags: ['DevOps', 'CI/CD', 'SpringBoot', 'Jenkins', 'Docker', 'Kubernetes'],
      year: '2023',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/LifeCycle_IT.git',
      screenshots: [
        './assets/images/e5.jpg',
        './assets/images/e1.jpg',
        './assets/images/e2.jpg',
        './assets/images/e3.jpg',
        './assets/images/e4.jpg'
      ]
    },
    'PowerFit': {
      title: 'PowerFit',
      description: 'PowerFit is a full-featured smart gym web and desktop application developed to streamline gym operations and enhance the fitness experience for both clients and administrators. The backend is powered by Symfony, ensuring robust RESTful services and secure data handling, while the frontend desktop client is built using JavaFX for smooth and responsive user interactions. The platform is designed to manage memberships, track workout sessions, monitor progress, schedule coaching sessions, and handle payments — all in one integrated ecosystem.',

      tags: ['Symfony', 'Javafx', 'MySQL'],
      year: '2022',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/GymAPP.git',
      screenshots: [
        './assets/images/power.png',
        './assets/images/power2.png',
        './assets/images/power3.png',
        './assets/images/power4.png',
        './assets/images/power6.png',
         './assets/images/powerfit.png',
      ]
    },
    'Wakalni': {
      title: 'Wakalni',
      description: 'Wakalni is a sleek and user-friendly Flutter application designed to help food lovers explore, plan, and prepare meals effortlessly. The app features a curated collection of recipes categorized by breakfast, lunch, dinner, and snacks, making it easy to find the perfect meal for any occasion. Users can browse detailed recipes complete with ingredients, step-by-step cooking instructions, cooking time, and nutritional information.',
      tags: ['Flutter', 'Mobile App', 'News', 'Events', 'Community'],
      year: '2022',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/Wakalni.git',
      screenshots: [
        './assets/images/f1.png',
        './assets/images/f2.png',
        './assets/images/f3.png',
        './assets/images/f4.png'
      ]
    },
    'TransGuard': {
      title: 'TransGuard',
      description: 'This Banking Fraud Detection System is a comprehensive machine learning application designed to identify fraudulent transactions in real-time. The project uses PySpark for scalable data processing and machine learning, combined with a Streamlit web interface for interactive monitoring and analysis.The system analyzes various transaction features including amount, type, merchant category, location, and timing patterns to detect suspicious activities. It employs both advanced machine learning models and rule-based detection as a fallback system. The application features multiple analytical views: a main dashboard showing key fraud metrics and transaction distributions, detailed transaction analysis with time-based patterns and geographic insights, an interactive fraud detection tool for testing individual transactions, and real-time monitoring capabilities for ongoing transaction surveillance.',
    tags: ['Machine Learning', 'Fraud Detection', 'Data Analysis', 'Python', 'Predictive Modeling', 'Financial Analytics'],

      year: '2022',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/Bank-Fraud-Detection.git',
      screenshots: [
        './assets/images/b1.png',
        './assets/images/b2.png',
        './assets/images/b3.png',
        './assets/images/b4.png',
        './assets/images/b5.png'
      ]
    },
    'Jasmineous': {
      title: 'Jasmineous',
      description: 'Conception and development of a medical website. Complete healthcare platform with appointment booking, patient management, medical records, telemedicine capabilities, prescription management, and integration with medical devices and laboratories.',
      tags: ['Web Development', 'Medical', 'Healthcare', 'PHP', 'Telemedicine'],
      year: '2021',
      demoLink: '#',
      codeLink: 'https://github.com/fathi151/Jasmineous.git',
      screenshots: [
        './assets/images/projects/jas.png',
        './assets/images/projects/foodicious.png',
        './assets/images/projects/burgerweb.PNG',
        './assets/images/projects/phppblform.png',
        './assets/images/projects/webuiclones.png'
      ]
    }
  };

  // Add click event listeners to all view-project buttons
function attachViewProjectListeners() {
  const viewButtons = document.querySelectorAll('.view-project');

  viewButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // ✅ Make sure the button is inside a .box
      const projectBox = this.closest('.box');
      if (!projectBox) {
        console.warn("No .box container found for view-project button.");
        return;
      }

      // ✅ Make sure there is a title element
      const titleEl = projectBox.querySelector('.tag h3');
      if (!titleEl) {
        console.warn("No project title (<h3> inside .tag) found in box.");
        return;
      }

      const projectTitle = titleEl.textContent.trim();
      const project = projectData[projectTitle];

      if (project) {
        // Open with real project data
        openProjectModal(
          project.title,
          project.description,
          project.tags,
          project.year,
          project.demoLink,
          project.codeLink,
          project.screenshots
        );
      } else {
        // Fallback only if button was intentionally clicked
        console.warn(`No project data found for: "${projectTitle}"`);
        openProjectModal(
          projectTitle,
          'Project details will be available soon.',
          ['Web Development'],
          '2023',
          '#',
          '#',
          []
        );
      }
    });
  });
}

  // Attach listeners only when needed, not automatically on page load
  setTimeout(function() {
    attachViewProjectListeners();
  }, 1000); // Delay to prevent automatic triggering

  // Close button functionality
  const closeButton = document.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }
});

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });