// Project Compass - Main Application JavaScript

// Mock Data
const mockProjects = [
  {
    id: "1",
    title: "Green Store Sustainability Pilot",
    department: "Operations",
    skills: ["Sustainability", "Data Analysis", "Project Management"],
    timeRequired: "2-4 weeks",
    location: "Charlotte, NC",
    description:
      "Lead initiative to reduce energy consumption and implement sustainable practices across 5 pilot stores.",
    contributors: ["Sarah Johnson", "Mike Chen"],
    timeline: "March 2024 - May 2024",
    status: "open",
    category: "recommended",
  },
  {
    id: "2",
    title: "Customer Experience Innovation Lab",
    department: "Customer Service",
    skills: ["UX Design", "Customer Research", "Innovation"],
    timeRequired: "1-2 weeks",
    location: "Remote",
    description:
      "Design and test new customer journey improvements for in-store and online experiences.",
    contributors: ["Jessica Williams", "Tom Rodriguez"],
    timeline: "April 2024 - June 2024",
    status: "open",
    category: "recommended",
  },
  {
    id: "3",
    title: "Smart Inventory Tracking System",
    department: "Technology",
    skills: ["IoT", "Data Analytics", "Supply Chain"],
    timeRequired: "4-6 weeks",
    location: "Mooresville, NC",
    description:
      "Implement RFID and IoT sensors for real-time inventory tracking in garden centers.",
    contributors: ["Alex Kumar", "Lisa Park"],
    timeline: "May 2024 - July 2024",
    status: "open",
    category: "all",
  },
  {
    id: "4",
    title: "Employee Wellness Program",
    department: "Human Resources",
    skills: ["Program Management", "Wellness", "Communication"],
    timeRequired: "2-3 weeks",
    location: "Multiple Locations",
    description:
      "Design and launch a comprehensive wellness program focusing on mental health and work-life balance.",
    contributors: ["Maria Garcia", "David Brown"],
    timeline: "March 2024 - April 2024",
    status: "open",
    category: "all",
  },
  {
    id: "5",
    title: "Digital Learning Platform",
    department: "Learning & Development",
    skills: ["E-learning", "Content Creation", "Training"],
    timeRequired: "3-5 weeks",
    location: "Remote",
    description:
      "Create interactive digital training modules for new employee onboarding.",
    contributors: ["Jennifer Lee", "Robert Taylor"],
    timeline: "April 2024 - June 2024",
    status: "open",
    category: "recommended",
  },
  {
    id: "6",
    title: "Local Community Garden Partnership",
    department: "Community Relations",
    skills: ["Community Engagement", "Gardening", "Partnership Development"],
    timeRequired: "1-3 weeks",
    location: "Local Stores",
    description:
      "Partner with local schools to create educational garden programs.",
    contributors: ["Amanda White", "Chris Johnson"],
    timeline: "Spring 2024",
    status: "open",
    category: "all",
  },
  {
    id: "7",
    title: "Mobile App Feature Enhancement",
    department: "Technology",
    skills: ["Mobile Development", "UX/UI Design", "Testing"],
    timeRequired: "2-4 weeks",
    location: "Remote",
    description:
      "Enhance the mobile app with AR features for product visualization.",
    contributors: ["Kevin Patel", "Rachel Green"],
    timeline: "May 2024 - July 2024",
    status: "open",
    category: "all",
  },
  {
    id: "8",
    title: "Supply Chain Optimization",
    department: "Logistics",
    skills: ["Analytics", "Process Improvement", "Supply Chain"],
    timeRequired: "4-6 weeks",
    location: "Distribution Centers",
    description:
      "Analyze and optimize delivery routes to reduce costs and improve efficiency.",
    contributors: ["Steven Kim", "Nicole Adams"],
    timeline: "June 2024 - August 2024",
    status: "open",
    category: "all",
  },
  {
    id: "9",
    title: "Safety Training Innovation",
    department: "Safety",
    skills: ["Training Development", "Safety Protocols", "VR Technology"],
    timeRequired: "2-3 weeks",
    location: "Training Centers",
    description:
      "Develop VR-based safety training programs for warehouse operations.",
    contributors: ["Patricia Miller", "James Wilson"],
    timeline: "April 2024 - May 2024",
    status: "open",
    category: "all",
  },
  {
    id: "10",
    title: "Customer Loyalty Program Redesign",
    department: "Marketing",
    skills: ["Marketing Strategy", "Data Analysis", "Customer Insights"],
    timeRequired: "3-4 weeks",
    location: "Charlotte, NC",
    description:
      "Redesign the loyalty program to increase customer engagement and retention.",
    contributors: ["Michelle Davis", "John Anderson"],
    timeline: "March 2024 - May 2024",
    status: "open",
    category: "recommended",
  },
];

const skillDomains = [
  {
    name: "Leadership & Management",
    progress: 75,
    skills: ["Team Leadership", "Project Management", "Strategic Planning"],
    color: "bg-blue-500",
  },
  {
    name: "Technical Skills",
    progress: 60,
    skills: ["Data Analysis", "Process Improvement", "Digital Tools"],
    color: "bg-green-500",
  },
  {
    name: "Communication",
    progress: 85,
    skills: [
      "Presentation",
      "Written Communication",
      "Cross-functional Collaboration",
    ],
    color: "bg-purple-500",
  },
  {
    name: "Innovation & Problem Solving",
    progress: 45,
    skills: ["Creative Thinking", "Solution Design", "Change Management"],
    color: "bg-orange-500",
  },
  {
    name: "Customer Focus",
    progress: 70,
    skills: ["Customer Research", "Service Excellence", "Experience Design"],
    color: "bg-pink-500",
  },
  {
    name: "Sustainability & Social Impact",
    progress: 90,
    skills: [
      "Environmental Initiatives",
      "Community Engagement",
      "ESG Strategy",
    ],
    color: "bg-teal-500",
  },
];

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Sustainability Director",
    expertise: ["Environmental Strategy", "Green Operations", "ESG Reporting"],
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Senior Data Analyst",
    expertise: ["Analytics", "Process Optimization", "Business Intelligence"],
    avatar: "MC",
  },
  {
    name: "Jennifer Williams",
    role: "Customer Experience Lead",
    expertise: ["UX Research", "Service Design", "Customer Journey Mapping"],
    avatar: "JW",
  },
];

const communityGroups = [
  {
    id: "1",
    name: "Green Innovators",
    description: "Sustainability and environmental initiatives",
    members: 45,
    type: "interest",
  },
  {
    id: "2",
    name: "Tech Pioneers",
    description: "Technology and digital innovation",
    members: 62,
    type: "skill",
  },
  {
    id: "3",
    name: "Customer Champions",
    description: "Customer experience and service excellence",
    members: 38,
    type: "department",
  },
  {
    id: "4",
    name: "Learning Leaders",
    description: "Professional development and mentoring",
    members: 29,
    type: "interest",
  },
];

const recognitions = [
  {
    id: "1",
    from: "Sarah Johnson",
    to: "Mike Chen",
    message:
      "Amazing work on the sustainability pilot! Your data analysis helped us exceed our energy reduction goals.",
    timestamp: "2 hours ago",
    badge: "Sustainability Champion",
  },
  {
    id: "2",
    from: "Jennifer Lee",
    to: "Alex Thompson",
    message:
      "Your leadership on the cross-functional project was exceptional. Great collaboration skills!",
    timestamp: "5 hours ago",
    badge: "Team Player",
  },
  {
    id: "3",
    from: "David Brown",
    to: "Jessica Williams",
    message:
      "The customer research insights you provided were game-changing for our initiative.",
    timestamp: "1 day ago",
    badge: "Innovation Star",
  },
];

const badges = [
  { name: "Sustainability Champion", icon: "🌱", earned: true },
  { name: "Innovation Leader", icon: "💡", earned: false },
  { name: "Team Builder", icon: "🤝", earned: true },
  { name: "Customer Advocate", icon: "❤️", earned: true },
  { name: "Data Driven", icon: "📊", earned: false },
  { name: "Change Agent", icon: "🚀", earned: false },
];

// Application State
const appState = {
  currentPage: "home",
  appliedProjects: new Set(),
  filters: {
    department: "",
    skill: "",
    time: "",
    location: "",
  },
  dreamRole: "",
  showRoadmap: false,
};

// Utility Functions
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

// Recommendations Data - People with similar interests for coffee chats
const similarInterestRecommendations = [
  {
    name: "Sarah Johnson",
    role: "Sustainability Analyst, Operations",
    interestMatch: "Also interested in Sustainability",
    avatar: "SJ"
  },
  {
    name: "Mike Chen",
    role: "Data Analyst, Technology",
    interestMatch: "Also interested in Data Analysis",
    avatar: "MC"
  },
  {
    name: "Jennifer Williams",
    role: "Customer Experience Lead, Customer Service",
    interestMatch: "Also interested in Customer Experience",
    avatar: "JW"
  },
  {
    name: "David Kim",
    role: "Project Coordinator, Operations",
    interestMatch: "Also interested in Project Management",
    avatar: "DK"
  },
  {
    name: "Alex Thompson",
    role: "Innovation Associate, R&D",
    interestMatch: "Also interested in Innovation",
    avatar: "AT"
  },
  {
    name: "Nina Patel",
    role: "Software Developer, Technology",
    interestMatch: "Also interested in Technology",
    avatar: "NP"
  },
  {
    name: "Ryan Foster",
    role: "Team Lead, Store Operations",
    interestMatch: "Also interested in Leadership",
    avatar: "RF"
  },
  {
    name: "Carlos Mendez",
    role: "Learning Specialist, Human Resources",
    interestMatch: "Also interested in Training & Development",
    avatar: "CM"
  }
];

function getRecommendations() {
  // Return a shuffled subset of recommendations to simulate personalized recommendations
  const shuffled = [...similarInterestRecommendations].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4); // Show 4 recommendations
}

function getMilestones(role) {
  return [
    {
      title: "Foundation Building",
      description:
        "Complete core competency assessments and identify skill gaps",
      completed: true,
    },
    {
      title: "Skill Development",
      description: "Participate in targeted training programs and mentorship",
      completed: false,
    },
    {
      title: "Leadership Experience",
      description: "Lead a cross-functional project and demonstrate impact",
      completed: false,
    },
  ];
}

// Filtering Functions
function filterProjects() {
  return mockProjects.filter((project) => {
    const departmentMatch =
      !appState.filters.department ||
      project.department === appState.filters.department;
    const skillMatch =
      !appState.filters.skill ||
      project.skills.includes(appState.filters.skill);
    const timeMatch =
      !appState.filters.time || project.timeRequired === appState.filters.time;
    const locationMatch =
      !appState.filters.location ||
      project.location === appState.filters.location;

    return departmentMatch && skillMatch && timeMatch && locationMatch;
  });
}

// Rendering Functions
function renderProjectCard(project, container) {
  const isApplied = appState.appliedProjects.has(project.id);

  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-header">
      <div class="project-title-row">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-department">${project.department}</span>
      </div>
      <div class="project-skills">
        ${project.skills
          .slice(0, 3)
          .map((skill) => `<span class="skill-badge">${skill}</span>`)
          .join("")}
        ${
          project.skills.length > 3
            ? `<span class="skill-badge">+${project.skills.length - 3}</span>`
            : ""
        }
      </div>
    </div>
    <div class="project-content">
      <div class="project-info">
        <div class="project-info-item">
          <span class="project-info-label">Time:</span> ${project.timeRequired}
        </div>
        <div class="project-info-item">
          <span class="project-info-label">Location:</span> ${project.location}
        </div>
      </div>
      <div class="project-actions">
        <button class="btn ${
          isApplied ? "btn-outline" : "btn-primary"
        } apply-btn" 
                data-project-id="${project.id}" 
                ${isApplied ? "disabled" : ""}>
          ${isApplied ? "Applied" : "Apply"}
        </button>
        <button class="btn btn-outline details-btn" data-project-id="${
          project.id
        }">
          Details
        </button>
      </div>
    </div>
  `;

  // Add event listeners
  const applyBtn = card.querySelector(".apply-btn");
  const detailsBtn = card.querySelector(".details-btn");

  applyBtn.addEventListener("click", () => handleProjectApply(project.id));
  detailsBtn.addEventListener("click", () => showProjectDetails(project.id));

  container.appendChild(card);
}

function renderProjects() {
  const filteredProjects = filterProjects();
  const recommendedProjects = filteredProjects.filter(
    (p) => p.category === "recommended",
  );
  const allProjects = filteredProjects.filter((p) => p.category === "all");

  // Render recommended projects
  const recommendedContainer = document.getElementById("recommendedProjects");
  recommendedContainer.innerHTML = "";

  if (recommendedProjects.length === 0) {
    recommendedContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--muted-foreground);">
        No recommended projects match your current filters.
      </div>
    `;
  } else {
    recommendedProjects.forEach((project) =>
      renderProjectCard(project, recommendedContainer),
    );
  }

  // Render all projects
  const allContainer = document.getElementById("allProjects");
  allContainer.innerHTML = "";

  if (allProjects.length === 0) {
    allContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--muted-foreground);">
        No projects match your current filters.
      </div>
    `;
  } else {
    allProjects.forEach((project) => renderProjectCard(project, allContainer));
  }

  // Update count
  document.getElementById("allProjectsCount").textContent =
    allProjects.length.toString();
}

function renderSkillDomains() {
  const container = document.getElementById("skillDomainsGrid");
  if (!container) return;

  container.innerHTML = "";

  skillDomains.forEach((domain) => {
    const card = document.createElement("div");
    card.className = "skill-domain-card";
    card.innerHTML = `
      <h3 class="skill-domain-title">${domain.name}</h3>
      <div class="progress-container">
        <div class="progress-header">
          <span class="progress-label">Progress</span>
          <span class="progress-value">${domain.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${domain.progress}%"></div>
        </div>
      </div>
      <div class="skills-list">
        <p class="skills-list-title">Key Skills:</p>
        <div class="skills-tags">
          ${domain.skills
            .map((skill) => `<span class="skill-badge">${skill}</span>`)
            .join("")}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderBadges() {
  const container = document.getElementById("badgesGrid");
  if (!container) return;

  container.innerHTML = "";

  badges.forEach((badge) => {
    const card = document.createElement("div");
    card.className = `badge-card ${badge.earned ? "earned" : ""}`;
    card.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      ${
        badge.earned
          ? '<svg class="badge-trophy" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>'
          : ""
      }
    `;
    container.appendChild(card);
  });
}

function renderMentors() {
  const container = document.getElementById("mentorsGrid");
  if (!container) return;

  container.innerHTML = "";

  mentors.forEach((mentor) => {
    const card = document.createElement("div");
    card.className = "mentor-card";
    card.innerHTML = `
      <div class="mentor-header">
        <div class="mentor-avatar">${mentor.avatar}</div>
        <div class="mentor-info">
          <h4>${mentor.name}</h4>
          <p class="mentor-role">${mentor.role}</p>
        </div>
      </div>
      <div class="mentor-expertise">
        <p class="mentor-expertise-title">Expertise:</p>
        <div class="skills-tags">
          ${mentor.expertise
            .map((skill) => `<span class="skill-badge">${skill}</span>`)
            .join("")}
        </div>
      </div>
      <button class="btn btn-outline">
        <svg class="btn-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        Connect
      </button>
    `;
    container.appendChild(card);
  });
}

function renderCommunityGroups() {
  const container = document.getElementById("communityGroupsGrid");
  if (!container) return;

  container.innerHTML = "";

  communityGroups.forEach((group) => {
    const card = document.createElement("div");
    card.className = "community-group-card";
    card.innerHTML = `
      <div class="group-header">
        <div>
          <h3 class="group-title">${group.name}</h3>
        </div>
        <span class="group-type ${group.type}">${group.type}</span>
      </div>
      <p class="group-description">${group.description}</p>
      <div class="group-footer">
        <div class="group-members">
          <svg class="group-members-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>${group.members} members</span>
        </div>
        <button class="btn btn-outline">Join</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderRecognitions() {
  const container = document.getElementById("recognitionGrid");
  if (!container) return;

  container.innerHTML = "";

  recognitions.forEach((recognition) => {
    const card = document.createElement("div");
    card.className = "recognition-card";
    card.innerHTML = `
      <div class="recognition-content">
        <div class="recognition-avatar">${getInitials(recognition.from)}</div>
        <div class="recognition-body">
          <div class="recognition-header">
            <span class="recognition-from">${recognition.from}</span>
            <svg class="recognition-heart" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="recognition-to">${recognition.to}</span>
            <span class="recognition-badge">${recognition.badge}</span>
          </div>
          <p class="recognition-message">${recognition.message}</p>
          <p class="recognition-timestamp">${recognition.timestamp}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderRecommendations() {
  const container = document.getElementById("recommendationsPanel");
  if (!container) return;

  container.innerHTML = "";

  const recommendations = getRecommendations();

  recommendations.forEach((person) => {
    const card = document.createElement("div");
    card.className = "recommendation-card";
    card.innerHTML = `
      <div class="recommendation-header">
        <div class="recommendation-avatar">${person.avatar}</div>
        <div class="recommendation-info">
          <div class="recommendation-name">${person.name}</div>
          <div class="recommendation-role">${person.role}</div>
        </div>
      </div>
      <div class="recommendation-match">
        <svg class="match-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>${person.interestMatch}</span>
      </div>
      <div class="recommendation-actions">
        <button class="btn btn-primary schedule-meeting-btn" onclick="scheduleMeeting('${person.name}')">
          <svg class="schedule-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Schedule Meeting
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderRoadmap(dreamRole) {
  const roadmapSection = document.getElementById("roadmapSection");
  const roadmapGoal = document.getElementById("roadmapGoal");
  const milestonesGrid = document.getElementById("milestonesGrid");

  if (!roadmapSection || !roadmapGoal || !milestonesGrid) return;

  roadmapGoal.innerHTML = `
    <svg class="goal-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
    </svg>
    <div>
      <div class="goal-label">Career Goal:</div>
      <div class="goal-text">${dreamRole}</div>
    </div>
  `;

  milestonesGrid.innerHTML = "";
  const milestones = getMilestones(dreamRole);

  milestones.forEach((milestone, index) => {
    const card = document.createElement("div");
    card.className = `milestone-card ${milestone.completed ? "completed" : ""}`;
    card.innerHTML = `
      <div class="milestone-header">
        <div class="milestone-number ${
          milestone.completed ? "completed" : ""
        }">${index + 1}</div>
        <h3 class="milestone-title">${milestone.title}</h3>
      </div>
      <p class="milestone-description">${milestone.description}</p>
      ${
        milestone.completed
          ? '<span class="milestone-badge">Completed</span>'
          : ""
      }
    `;
    milestonesGrid.appendChild(card);
  });

  roadmapSection.classList.remove("hidden");
}

// Event Handlers
function handleProjectApply(projectId) {
  appState.appliedProjects.add(projectId);
  alert("Thank you for your interest! Your application has been submitted.");
  renderProjects();
}

function showProjectDetails(projectId) {
  const project = mockProjects.find((p) => p.id === projectId);
  if (!project) return;

  const content = `
    <div class="project-details">
      <div class="project-details-header">
        <div class="project-details-main">
          <h1 class="project-details-title">${project.title}</h1>
          <div class="project-details-meta">
            <div class="meta-item">
              <svg class="meta-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>${project.department}</span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
              </svg>
              <span>${project.timeRequired}</span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${project.location}</span>
            </div>
          </div>
        </div>
        <span class="project-status-badge">${project.status.toUpperCase()}</span>
      </div>
      
      <div class="project-skills">
        ${project.skills
          .map((skill) => `<span class="skill-badge">${skill}</span>`)
          .join("")}
      </div>
      
      <button class="btn btn-primary btn-apply" data-project-id="${
        project.id
      }" style="margin: 1.5rem 0;">
        Apply for This Project
      </button>
      
      <div class="project-details-grid">
        <div class="project-details-main-content">
          <div class="project-details-card">
            <h3 class="project-details-section-title">Project Description</h3>
            <p class="project-description">${project.description}</p>
          </div>
        </div>
        
        <div class="project-details-sidebar">
          <div class="project-details-card">
            <h3 class="project-details-section-title">Timeline</h3>
            <p>${project.timeline}</p>
          </div>
          
          <div class="project-details-card">
            <h3 class="project-details-section-title">Team Members</h3>
            <div class="team-members">
              ${project.contributors
                .map(
                  (contributor) => `
                <div class="team-member">
                  <div class="team-member-avatar">${getInitials(
                    contributor,
                  )}</div>
                  <span>${contributor}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          
          <div class="project-details-card">
            <h3 class="project-details-section-title">Skills Required</h3>
            <div class="skills-required">
              ${project.skills
                .map(
                  (skill) => `
                <div class="skill-requirement">
                  <div class="skill-dot"></div>
                  <span>${skill}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>
      .project-details-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
      }
      
      .project-details-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--foreground);
        margin-bottom: 0.5rem;
      }
      
      .project-details-meta {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      
      .meta-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--muted-foreground);
      }
      
      .meta-icon {
        width: 1rem;
        height: 1rem;
      }
      
      .project-status-badge {
        background-color: var(--primary);
        color: var(--primary-foreground);
        padding: 0.25rem 0.75rem;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
      }
      
      .project-details-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
      }
      
      .project-details-card {
        background-color: var(--card);
        border-radius: var(--radius);
        padding: 1.5rem;
        box-shadow: var(--shadow-1);
        margin-bottom: 1.5rem;
      }
      
      .project-details-section-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      
      .project-description {
        color: var(--muted-foreground);
        line-height: 1.6;
      }
      
      .team-members {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      
      .team-member {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .team-member-avatar {
        width: 2rem;
        height: 2rem;
        background-color: var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-foreground);
        font-weight: 600;
        font-size: 0.875rem;
      }
      
      .skills-required {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .skill-requirement {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .skill-dot {
        width: 0.5rem;
        height: 0.5rem;
        background-color: var(--primary);
        border-radius: 50%;
      }
      
      @media (max-width: 768px) {
        .project-details-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .project-details-title {
          font-size: 1.5rem;
        }
        
        .project-details-meta {
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    </style>
  `;

  document.getElementById("projectDetailsContent").innerHTML = content;

  // Add event listener for apply button
  const applyBtn = document.querySelector(".btn-apply");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      handleProjectApply(project.id);
      navigateTo("project-hub");
    });
  }

  navigateTo("project-details");
}

function scheduleMeeting(personName) {
  alert(`Coffee chat meeting scheduled with ${personName}! You'll receive a calendar invitation shortly.`);
}

function handleGeneratePath() {
  const dreamRole = document.getElementById("dreamRoleInput").value.trim();
  if (dreamRole) {
    appState.dreamRole = dreamRole;
    appState.showRoadmap = true;
    renderRoadmap(dreamRole);
  }
}

function handleLogin(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("loginSubmitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoader = submitBtn.querySelector(".btn-loader");

  // Show loading state
  btnText.style.display = "none";
  btnLoader.classList.remove("hidden");
  btnLoader.classList.add("show");
  submitBtn.disabled = true;

  // Simulate login process
  setTimeout(() => {
    btnText.style.display = "block";
    btnLoader.classList.add("hidden");
    btnLoader.classList.remove("show");
    submitBtn.disabled = false;

    alert("Login successful! (Demo)");
    closeLoginModal();
  }, 1000);
}

function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  const eyeIcon = document.querySelector(".eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    `;
  } else {
    passwordInput.type = "password";
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    `;
  }
}

// Modal Functions
function openLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLoginModal() {
  document.getElementById("loginModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// Navigation Functions
function navigateTo(page) {
  // Update state
  appState.currentPage = page;

  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));

  // Show current page
  const currentPage = document.getElementById(`${page}-page`);
  if (currentPage) {
    currentPage.classList.remove("hidden");
  }

  // Update navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  // Update URL hash
  window.location.hash = page === "home" ? "" : page;

  // Render page-specific content
  if (page === "project-hub") {
    renderProjects();
  } else if (page === "growth-map") {
    renderSkillDomains();
    renderBadges();
    renderMentors();
    if (appState.showRoadmap && appState.dreamRole) {
      renderRoadmap(appState.dreamRole);
    }
  } else if (page === "collaboration") {
    renderRecommendations();
    renderCommunityGroups();
    renderRecognitions();
  }
}

function initializeRouting() {
  // Handle initial route
  const hash = window.location.hash.slice(1);
  const initialPage = hash || "home";
  navigateTo(initialPage);

  // Handle hash changes
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    const page = hash || "home";
    navigateTo(page);
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) {
        navigateTo(page);
      }
    });
  });

  // Page navigation links
  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) {
        navigateTo(page);
      }
    });
  });

  // Login modal
  const loginBtn = document.getElementById("loginBtn");
  const closeLoginBtn = document.getElementById("closeLoginModal");
  const loginModal = document.getElementById("loginModal");
  const loginForm = document.getElementById("loginForm");

  if (loginBtn) {
    loginBtn.addEventListener("click", openLoginModal);
  }

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener("click", closeLoginModal);
  }

  if (loginModal) {
    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        closeLoginModal();
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  // Password toggle
  const passwordToggle = document.getElementById("passwordToggle");
  if (passwordToggle) {
    passwordToggle.addEventListener("click", togglePassword);
  }

  // Project filters
  ["departmentFilter", "skillFilter", "timeFilter", "locationFilter"].forEach(
    (filterId) => {
      const filter = document.getElementById(filterId);
      if (filter) {
        filter.addEventListener("change", (e) => {
          const filterType = filterId.replace("Filter", "");
          appState.filters[filterType] = e.target.value;
          renderProjects();
        });
      }
    },
  );

  // Dream role generation
  const generatePathBtn = document.getElementById("generatePathBtn");
  if (generatePathBtn) {
    generatePathBtn.addEventListener("click", handleGeneratePath);
  }



  // Back to projects button
  const backToProjectsBtn = document.getElementById("backToProjectsBtn");
  if (backToProjectsBtn) {
    backToProjectsBtn.addEventListener("click", () => {
      navigateTo("project-hub");
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLoginModal();
    }
  });
}

// Initialize Application
function initializeApp() {
  setupEventListeners();
  initializeRouting();

  // Render initial content for all pages
  renderProjects();
  renderSkillDomains();
  renderBadges();
  renderMentors();
  renderRecommendations();
  renderCommunityGroups();
  renderRecognitions();

  console.log("Project Compass application initialized successfully!");
}

// Make functions globally accessible
window.scheduleMeeting = scheduleMeeting;

// Start the application when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
