 const products = {
    'i phone 13': {
      title: 'iPhone 13',
      desc: 'The iPhone 13 has a 6.1-inch Super Retina XDR display powered by A15 Bionic. Dual-camera system, 5G, and improved battery life.',
      img: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY218_.jpg'
    },
    'i phone 14': {
      title: 'iPhone 14',
      desc: 'iPhone 14 with A15 Bionic, crash detection, 5G, OLED display, and enhanced low-light camera system.',
      img: 'https://m.media-amazon.com/images/I/61xJlx-3KDL._AC_UY218_.jpg'
    },
    'i phone 15': {
      title: 'iPhone 15',
      desc: 'iPhone 15 includes A16 Bionic chip, USB-C port, 48MP camera, 5G, and Super Retina XDR display.',
      img: 'https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY218_.jpg'
    }
  };

  function showmodel(productName) {
    const product = products[productName];
    const modalBody = document.getElementById('modalContent');

    if (product) {
      modalBody.innerHTML = `
        <div class="text-center">
          <img src="${product.img}" class="img-fluid mb-3" style="max-height: 300px;" alt="${product.title}">
        </div>
        <h4 class="text-center">${product.title}</h4>
        <p>${product.desc}</p>
      `;
    } else {
      modalBody.innerHTML = '<p>No details available.</p>';
    }

    const myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
  }

  // Select all the "Contact Us" buttons
const contactButtons = document.querySelectorAll('.carousel-item button');

// Select the footer element
const footer = document.getElementById('footer');

// Add event listener to each "Contact Us" button
contactButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Scroll smoothly to the footer
    footer.scrollIntoView({ behavior: 'smooth' });
  });
});
