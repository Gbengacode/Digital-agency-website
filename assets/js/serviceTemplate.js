export default (service, serviceList) => {
  serviceList.innerHTML += `
    <div class="card">
    <div class="card-img">
    <img src=${service.image} alt=${service.alt}> 
    </div>
    <div class="card-body">
    <h3>${service.title}</h3>
    <p class="little-text">${service.subTitle}</p>
    <p class="main-text">
      ${service.body}
    </p>
    </div>
    </div>`;
};
