const popupSection = document.getElementById("popup-section");
let activeButton = null;

const contentMap = {
  "About Me": `<p>I’m Katie Thomas, a 29-year-old aspiring web developer with a strong interest in front-end and full-stack development. Over the past year, I’ve been teaching myself the fundamentals of HTML, CSS, and JavaScript through hands-on practice and online platforms such as The Odin Project, Codecademy, and freeCodeCamp. I’ve built several personal projects that have helped me apply what I’ve learned and explore web design creatively.</p>
    
    <p>I know there is still a lot to learn, and I’m eager to gain real-world experience, mentorship, and collaboration as part of a development team. My goal is to become a confident, proficient developer who can build clean, adaptable, and user-friendly websites.</p>
    
    <p>I enjoy problem-solving, experimenting with design, and the sense of accomplishment that comes from overcoming challenges. Outside of coding, I enjoy watching films, gaming, reading, going to the gym, walking, and meditating. I'm also interested in philosophy, self-care, music, and history. I’m motivated to build a fulfilling career with growth and learning at its core.</p>
  `,

  "Skills": "• HTML  • CSS  • Flexbox  • JavaScript  • DOM Manipulation  • Visual Studio Code  • Responsive Design  • GitHub  • Efficient Learner  • Punctual  • Organised  • Communication  • Problem-Solving  • Team-work  • Adaptability  • Attention to detail  • Positive attitude  • Like constructive feedback  ",
  
  "Experience": `<p>While I don’t yet have professional experience in web development, I’ve been dedicated to self-teaching using online resources such as The Odin Project, CodeAcademy, and FreeCodeCamp. I’ve built my own projects to apply my knowledge of HTML, CSS, and JavaScript, and I'm eager to transition into a professional role — ideally as an apprentice — where I can keep learning and contribute to real-world projects.</p>

<p>My previous work experience icludes roles in driving, administration, sales, customer service, fitness, retail, and hospitality. Across these varied roles, I developed strong communication skills, time management, problem-solving, adaptability, and the ability to work both independently and collaboratively. These transferable skills give me a solid foundation to succeed in a web development environment.</p>

<p>Like many people, it took me time to discover what I truly want from a career. Through real-world experience, I’ve learned how I work best, what I enjoy doing, and what motivates me. I tend to pick up systems and tools quickly, and I thrive when learning by doing. I'm not afraid to make mistakes or ask questions. I see both as essential parts of the learning process. If I want to be able to do something, I fully commit to it.</p>`,

"Education": `<ul>
    <li><strong>Earlsheaton High School</strong> (2007–2012)<br>
    10 GCSEs A–C including Maths, Science, and English</li>

    <li><strong>Wakefield College</strong> (2012–2014)<br>
    NVQ Level 2 in Fitness Instructing<br>
    NVQ Level 3 in Sports Coaching and Outdoor Adventure</li>

    <li><strong>Kirklees College</strong> (2015–2016)<br>
    NVQ Level 2 in Business Administration</li>
  </ul>`
};

document.querySelectorAll(".buttons").forEach((button) => {
  button.addEventListener("click", () => {
    const label = button.textContent.trim();

    if (activeButton === label) {
      // If same button clicked again, hide
      popupSection.classList.add("hidden");
      activeButton = null;
    } else {
      // Show or update content
      popupSection.innerHTML = `<p>${contentMap[label]}</p>`;
      popupSection.classList.remove("hidden");
      activeButton = label;
    }
  });
});