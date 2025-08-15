// Portfolio Application JavaScript

// Application data
const portfolioData = {
  "personalInfo": {
    "name": "Swapnil Shrishrimal",
    "title": "DevOps Practitioner",
    "tagline": "Building scalable infrastructure and automating the future",
    "email": "shrishrimalswapnil@gmail.com",
    "phone": "+91 9028190191",
    "location": "Pune, Maharashtra, India",
    "linkedin": "https://www.linkedin.com/in/swapnil-shrishrimal/"
  },
  "skills": [
    {"category": "Cloud Platforms", "items": [
      {"name": "AWS", "level": 75, "description": "Expert in EC2, S3, VPC, EKS"}
    ]},
    {"category": "Containerization", "items": [
      {"name": "Docker", "level": 80, "description": "Containerization and multi-stage builds"},
      {"name": "Kubernetes", "level": 75, "description": "Cluster management, Helm charts, operators"},
      {"name": "Container Registry", "level": 60, "description": "Docker Hub, ECR"}
    ]},
    {"category": "CI/CD Tools", "items": [
      {"name": "Jenkins", "level": 80, "description": "Pipeline as code, plugins, distributed builds"}
    ]},
    {"category": "Infrastructure as Code", "items": [
      {"name": "Terraform", "level": 75, "description": "Infra provisioning, modules, state management"},
      {"name": "Ansible", "level": 60, "description": "Configuration management, playbooks, roles"}
    ]},
    {"category": "Monitoring & Logging", "items": [
      {"name": "Sysdig", "level": 75, "description": "Metrics collection, alerting rules, service discovery"}
    ]},
    {"category": "Programming & Scripting", "items": [
      {"name": "Python", "level": 75, "description": "Automation scripts, data processing"},
      {"name": "Bash", "level": 80, "description": "System administration, deployment scripts"},
      {"name": "YAML", "level": 60, "description": "Configuration files, CI/CD pipelines, Kubernetes manifests"}
    ]}
  ],
  "experience": [
    {
      "company": "LTIMindtree",
      "role": "Specialist - Software Engineering",
      "duration": "Feb 2023 - Present",
      "location": "Pune, India",
      "achievements": [
        "Led migration of microservices from the in-house NinjaGo tool to the Engineering System Platform (ESP).",
        "Managed 20+ microservices across Kubernetes clusters",
        "Initiated and completed improvements such as pull request analysis in builds using the community edition of Sonar",
        "Right-sizing of resources utilized by microservices on Mirantis Kubernetes Engine, saving cost by 40%"
      ],
      "technologies": ["Git", "Kubernetes", "Terraform", "Jenkins", "Python", "Docker", "Sysdig Monitor"]
    },
    {
      "company": "Accenture Solutions Pvt. Ltd",
      "role": "Custom Software Engineering Team Lead",
      "duration": "Aug 2021 - Jan 2023",
      "location": "Pune, India",
      "achievements": [
        "Implemented Jenkins pipeline to build, test and deploy only incremental changes using SFDX CLI."
      ],
      "technologies": ["Jenkins", "SFDX CLI"]
    },
    {
      "company": "MindTree Ltd.",
      "role": "Senior Engineer",
      "duration": "Apr 2017 - Aug 2021",
      "location": "Pune, India",
      "achievements": [
        "Automated daily, weekly and monthly tasks using Python and Java.",
        "PoC to build and deploy web applications on AWS for developers with the help of Terraform and destroy EC2 instance. Everything using Jenkins pipeline",
        "To Performe root cause analysis of the issues reported in production and provided reports to key stakeholders."
      ],
      "technologies": ["Git", "Docker", "Jenkins", "AWS", "Terraform", "Python", "Java"]
    },
    {
      "company": "Cassiopae Solutions (acquired by Sopra Banking)",
      "role": "Technical Support Engineer",
      "duration": "Mar 2016 - Apr 2017",
      "location": "Pune, India",
      "achievements": [
        "Monitoring of Cassiopae application 24/7 using tools like Nagios.",
        "Developed a tool which fetched issues from SonarQube and created tickets in JIRA and assign newly created ticket to the developer. This tool was created using RESTful WebServices in JAVA.",
        "As part of PoC, we built and deployed a monolith application in Docker. Created a Docker image from scratch and deployed it to the Windows server. This environment was used by Business Analysts for their demos."
      ],
      "technologies": ["Git", "Docker", "Jenkins", "Sonar", "Linux", "Shell scripting", "Java"]
    },
    {
      "company": "DhanpraTech Solutions",
      "role": "Associate Software Engineer",
      "duration": "Sep 2015 - Feb 2016",
      "location": "Pune, India",
      "achievements": [
        "Develop application for a sliding window manufacturer.",
        "Communication with clients on a weekly basis, including data gathering, reporting and presenting demos of completed modules."
      ],
      "technologies": ["Git", "Java", "Apache Tomact"]
    },
    {
      "company": "Impact Infotech",
      "role": "Desktop Support Engineer",
      "duration": "Apr 2014 - Jul 2015",
      "location": "Pune, India",
      "achievements": [
        "Resolve assigned issues within SLA.",
        "Troubleshoot issues and inform end users about the issue with an estimated time to resolution.",
        "Communicate with other support teams like Network Admin, Voice Admin and Server Admin to analyze issues so that resolution to issue is found in a short time span.",
        "Provide daily shift updates to system admin and helpdesk manager."
      ],
      "technologies": ["Windows", "Troubleshooting", "L1 Support"]
    }
  ],
  "certifications": [
    {"name": "AWS Certified Solution Architect - Associate", "issuer": "Amazon Web Services", "year": "2023"}
  ]
};

class PortfolioApp {
  constructor() {
    this.currentTheme = 'light';
    this.activeModal = null;
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeApp();
      });
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    this.setupTheme();
    this.populateContent();
    this.setupNavigation();
    this.setupEventListeners();
    this.setupAnimations();
  }

  setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    if (!themeToggle || !themeIcon) return;
    
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
      themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
      
      // Add rotation animation
      themeIcon.style.transition = 'transform 0.3s ease';
      themeIcon.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        themeIcon.style.transform = 'rotate(0deg)';
      }, 300);
    });
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Handle nav link clicks with proper smooth scrolling
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu if open
        if (navLinksContainer && navLinksContainer.classList.contains('active')) {
          navLinksContainer.classList.remove('active');
        }
      });
    });

    // Mobile menu toggle
    if (mobileMenuToggle && navLinksContainer) {
      mobileMenuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
      });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    });
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  }

  populateContent() {
    this.populateSkills();
    this.populateExperience();
    //this.populateProjects();
    this.populateCertifications();
    //this.populateMetrics();
  }

  populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;
    
    portfolioData.skills.forEach((category, categoryIndex) => {
      const categoryElement = document.createElement('div');
      categoryElement.className = 'skill-category fade-in-up';
      categoryElement.style.animationDelay = `${categoryIndex * 0.1}s`;
      
      const skillItems = category.items.map((skill, skillIndex) => `
        <div class="skill-item" data-skill="${skill.name}">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 0%; transition: width 1s ease-out ${skillIndex * 0.1}s"></div>
          </div>
          <div class="skill-description">${skill.description}</div>
        </div>
      `).join('');
      
      categoryElement.innerHTML = `
        <h3 class="skill-category-title">${category.category}</h3>
        ${skillItems}
      `;
      
      skillsGrid.appendChild(categoryElement);
      
      // Animate skill bars after a delay
      setTimeout(() => {
        const progressBars = categoryElement.querySelectorAll('.skill-progress');
        progressBars.forEach((bar, index) => {
          setTimeout(() => {
            const skillLevel = category.items[index].level;
            bar.style.width = `${skillLevel}%`;
          }, index * 100);
        });
      }, 500);
    });
  }

  populateExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    portfolioData.experience.forEach((exp, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item fade-in-up';
      timelineItem.style.animationDelay = `${index * 0.2}s`;
      
      const achievements = exp.achievements.map(achievement => 
        `<li class="timeline-achievement">${achievement}</li>`
      ).join('');
      
      const technologies = exp.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join('');
      
      timelineItem.innerHTML = `
        <div class="timeline-content" data-exp-index="${index}">
          <div class="timeline-company">${exp.company}</div>
          <div class="timeline-role">${exp.role}</div>
          <div class="timeline-duration">${exp.duration} • ${exp.location}</div>
          <ul class="timeline-achievements">
            ${achievements}
          </ul>
          <div class="timeline-technologies">
            ${technologies}
          </div>
        </div>
      `;
      
      // Add click event to timeline content
      const timelineContent = timelineItem.querySelector('.timeline-content');
      timelineContent.addEventListener('click', () => {
        this.openExperienceModal(index);
      });
      
      timeline.appendChild(timelineItem);
    });
  }

  /*populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    portfolioData.projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card fade-in-up';
      projectCard.style.animationDelay = `${index * 0.1}s`;
      
      const technologies = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join('');
      
      const metrics = project.metrics.map(metric => 
        `<div class="project-metric"><span class="project-metric-value">${metric}</span></div>`
      ).join('');
      
      projectCard.innerHTML = `
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
        </div>
        <div class="project-body">
          <div class="project-technologies">
            ${technologies}
          </div>
          <div class="project-metrics">
            ${metrics}
          </div>
          <div class="project-actions">
            <button class="btn btn--outline project-github-btn" data-github="${project.github}">
              View on GitHub
            </button>
            <button class="btn btn--primary project-details-btn" data-project-index="${index}">
              View Details
            </button>
          </div>
        </div>
      `;
      
      // Add event listeners to project buttons
      const githubBtn = projectCard.querySelector('.project-github-btn');
      const detailsBtn = projectCard.querySelector('.project-details-btn');
      
      githubBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(project.github, '_blank');
      });
      
      detailsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openProjectModal(index);
      });
      
      projectsGrid.appendChild(projectCard);
    });
  }*/

  populateCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    if (!certificationsGrid) return;
    
    const certIcons = ['🏅', '☁️', '🔧', '🐳'];
    
    portfolioData.certifications.forEach((cert, index) => {
      const certificationBadge = document.createElement('div');
      certificationBadge.className = 'certification-badge fade-in-up';
      certificationBadge.style.animationDelay = `${index * 0.1}s`;
      
      certificationBadge.innerHTML = `
        <div class="certification-icon">${certIcons[index % certIcons.length]}</div>
        <div class="certification-name">${cert.name}</div>
        <div class="certification-issuer">${cert.issuer}</div>
        <div class="certification-year">${cert.year}</div>
      `;
      
      certificationsGrid.appendChild(certificationBadge);
    });
  }

  /*populateMetrics() {
    const metricsGrid = document.getElementById('metricsGrid');
    if (!metricsGrid) return;
    
    const metricsData = [
      {
        icon: '🚀',
        value: portfolioData.metrics.deploymentFrequency,
        label: 'Deployment Frequency'
      },
      {
        icon: '⚡',
        value: portfolioData.metrics.leadTime,
        label: 'Lead Time'
      },
      {
        icon: '🔧',
        value: portfolioData.metrics.mttr,
        label: 'Mean Time to Recovery'
      },
      {
        icon: '✅',
        value: portfolioData.metrics.changeFailureRate,
        label: 'Change Failure Rate'
      }
    ];
    
    metricsData.forEach((metric, index) => {
      const metricCard = document.createElement('div');
      metricCard.className = 'metric-card fade-in-up';
      metricCard.style.animationDelay = `${index * 0.1}s`;
      
      metricCard.innerHTML = `
        <div class="metric-icon">${metric.icon}</div>
        <div class="metric-value">${metric.value}</div>
        <div class="metric-label">${metric.label}</div>
      `;
      
      metricsGrid.appendChild(metricCard);
    });
  }*/

  openProjectModal(projectIndex) {
    const project = portfolioData.projects[projectIndex];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    const technologies = project.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const metrics = project.metrics.map(metric => 
      `<div class="project-metric"><span class="project-metric-value">${metric}</span></div>`
    ).join('');
    
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p style="margin-bottom: 24px; color: var(--color-text-secondary); line-height: 1.6;">
        ${project.details}
      </p>
      <div style="margin-bottom: 24px;">
        <h4>Technologies Used:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
          ${technologies}
        </div>
      </div>
      <div style="margin-bottom: 24px;">
        <h4>Key Metrics:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-top: 12px;">
          ${metrics}
        </div>
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn--primary" onclick="window.open('${project.github}', '_blank')">
          View on GitHub
        </button>
      </div>
    `;
    
    this.showModal(modal);
  }

  openExperienceModal(expIndex) {
    const exp = portfolioData.experience[expIndex];
    const modal = document.getElementById('experienceModal');
    const modalBody = document.getElementById('experienceModalBody');
    
    if (!modal || !modalBody) return;
    
    const achievements = exp.achievements.map(achievement => 
      `<li style="margin-bottom: 8px; padding-left: 16px; position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-success); font-weight: bold;">✓</span>
        ${achievement}
      </li>`
    ).join('');
    
    const technologies = exp.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    modalBody.innerHTML = `
      <h2>${exp.role}</h2>
      <h3 style="color: var(--color-primary); margin-bottom: 8px;">${exp.company}</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
        ${exp.duration} • ${exp.location}
      </p>
      <div style="margin-bottom: 24px;">
        <h4>Key Achievements:</h4>
        <ul style="list-style: none; padding: 0; margin-top: 12px;">
          ${achievements}
        </ul>
      </div>
      <div>
        <h4>Technologies Used:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
          ${technologies}
        </div>
      </div>
    `;
    
    this.showModal(modal);
  }

  showModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    this.activeModal = modal;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (this.activeModal) {
      this.activeModal.classList.remove('active');
      setTimeout(() => {
        this.activeModal.classList.add('hidden');
        this.activeModal = null;
        document.body.style.overflow = 'auto';
      }, 300);
    }
  }

  setupEventListeners() {
    // Modal close buttons
    const modalClose = document.getElementById('modalClose');
    const experienceModalClose = document.getElementById('experienceModalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const experienceModalOverlay = document.getElementById('experienceModalOverlay');
    
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    if (experienceModalClose) {
      experienceModalClose.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    if (modalOverlay) {
      modalOverlay.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    if (experienceModalOverlay) {
      experienceModalOverlay.addEventListener('click', () => {
        this.closeModal();
      });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactForm(e.target);
      });
    }
    
    // Download resume button
    const downloadResume = document.getElementById('downloadResume');
    if (downloadResume) {
      downloadResume.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Resume download functionality would be implemented here. In a real implementation, this would download a PDF resume file.');
      });
    }
  }

  handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = 'var(--color-success)';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        form.reset();
      }, 2000);
    }, 1500);
  }

  setupAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }
}

// Initialize the portfolio application
document.addEventListener('DOMContentLoaded', () => {
  window.portfolio = new PortfolioApp();
});
