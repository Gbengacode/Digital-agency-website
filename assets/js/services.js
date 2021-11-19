import serviceData from './serviceData.js';

import serviceTemplate from './serviceTemplate.js';

const serviceList = document.querySelector('.service-list');
const currentIndex = 4;

if (window.matchMedia('(max-width: 991px)').matches) {
  serviceData.slice(0, currentIndex).forEach((service) => {
    serviceTemplate(service, serviceList);
  });
} else {
  serviceData.forEach((service) => {
    serviceTemplate(service, serviceList);
  });
}
