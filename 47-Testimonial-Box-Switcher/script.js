const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    text: "This quiz app completely transformed how we train our staff. The interface is intuitive and the results tracking helps us identify knowledge gaps immediately.",
    name: "Sarah Johnson",
    role: "HR Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "As an educator, I appreciate how engaging this quiz format is for my students. The clean design keeps them focused on the content rather than distracted by flashy elements.",
    name: "Michael Chen",
    role: "High School Teacher",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "We've implemented this for our customer service training and seen a 30% improvement in product knowledge retention. The mobile responsiveness is particularly impressive.",
    name: "Emma Rodriguez",
    role: "Training Coordinator",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    text: "The perfect balance between functionality and aesthetics. Our employee engagement surveys show 92% satisfaction with this training tool compared to our old system.",
    name: "David Kim",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    text: "I use this daily for quick knowledge checks with my team. The simple interface means zero learning curve, and the results help me tailor my coaching sessions effectively.",
    name: "Lisa Wong",
    role: "Sales Manager",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, text, role, image } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = image;
  username.innerHTML = name;
  role.innerHTML = role;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonial, 10000);
