
{/* <section class="story">
<h1>Our Story</h1>
<div class="part1">
  <p>It all started when a group of food enthusiasts, driven by their love for authentic Malaysian dishes, decided to embark on a culinary adventure. Inspired by the vibrant street food culture and the heartwarming hawker stalls, they set out to bring the true essence of Malaysia's culinary gems to food enthusiasts from all walks of life.</p>
  <img src="../src/img/hawker.jpg" alt="Hawker!">
</div>
<div class="part2">
  <p>At Nyam!, we are committed to preserving the traditional flavors that make Malaysian food so unique, while also infusing a modern twist to cater to the evolving tastes of our discerning guests. We take pride in sourcing the freshest local ingredients, carefully selected from the bustling markets and neighboring farms, ensuring that every dish on our menu is a celebration of freshness and quality.</p>
</div>
<div class="part3">
  <img src="../src/img/chef.jpg" alt="Our world renowned chef!">
  <p>Our culinary team, led by renowned Malaysian chefs, pours their heart and soul into every creation, crafting dishes that capture the essence of Malaysia's diverse culinary heritage. From the fiery spices of Penang to the aromatic curries of Malacca, each bite at Nyam! transports you to the bustling streets and vibrant markets of Malaysia.</p>
</div>
<div class="part4">
  <p>As we continue to grow and evolve, our commitment to authenticity, quality, and exceptional service remains unwavering. We are humbled and grateful to be part of your culinary journey, and we look forward to welcoming you to Nyam! - where the flavors of Malaysia come alive in every dish, and every bite tells a story of heritage and passion.</p>
</div>
<p class="final">Nyam! - Taste the Heart of Malaysia.</p>
</section> */}
import img1 from '../img/hawker.jpg';
import img2 from '../img/chef.jpg';
import buildImage from './builders/buildImage';

const story = document.createElement('section');
story.classList.add('story');

const h1 = document.createElement('h1');
h1.innerHTML = 'Our Story';

const part1 = document.createElement('div');
part1.classList.add('part1');
const p1 = document.createElement('p');
p1.innerHTML = "It all started when a group of food enthusiasts, driven by their love for authentic Malaysian dishes, decided to embark on a culinary adventure. Inspired by the vibrant street food culture and the heartwarming hawker stalls, they set out to bring the true essence of Malaysia's culinary gems to food enthusiasts from all walks of life.";
const hawkerImage = buildImage(img1, 'A really cool Hawker');
part1.appendChild(p1);
part1.appendChild(hawkerImage);

const part2 = document.createElement('div');
part2.classList.add('part2');
const p2 = document.createElement('p');
p2.innerHTML = 'At Nyam!, we are committed to preserving the traditional flavors that make Malaysian food so unique, while also infusing a modern twist to cater to the evolving tastes of our discerning guests. We take pride in sourcing the freshest local ingredients, carefully selected from the bustling markets and neighboring farms, ensuring that every dish on our menu is a celebration of freshness and quality.';
part2.appendChild(p2);

const part3 = document.createElement('div');
part3.classList.add('part3');
const chefImage = buildImage(img2, 'Our world famous chef!');
const p3 = document.createElement('p');
p3.innerHTML = "Our culinary team, led by renowned Malaysian chefs, pours their heart and soul into every creation, crafting dishes that capture the essence of Malaysia's diverse culinary heritage. From the fiery spices of Penang to the aromatic curries of Malacca, each bite at Nyam! transports you to the bustling streets and vibrant markets of Malaysia.";
part3.appendChild(chefImage);
part3.appendChild(p3);

const part4 = document.createElement('div');
part4.classList.add('part4');
const p4 = document.createElement('p');
p4.innerHTML = "As we continue to grow and evolve, our commitment to authenticity, quality, and exceptional service remains unwavering. We are humbled and grateful to be part of your culinary journey, and we look forward to welcoming you to Nyam! - where the flavors of Malaysia come alive in every dish, and every bite tells a story of heritage and passion.";
part4.appendChild(p4);

const p5 = document.createElement('p');
p5.classList.add('final');
p5.innerHTML = 'Nyam! - Taste the Heart of Malaysia.';

story.appendChild(h1);
story.appendChild(part1);
story.appendChild(part2);
story.appendChild(part3);
story.appendChild(part4);
story.appendChild(p5);

export default story;