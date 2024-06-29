const products = [
    { id: 1, name: "Product A", image: "https://i.ibb.co/RQZm1wZ/goldenheel.jpg", tags: ["tag1", "tag2"] },
    { id: 2, name: "Product B", image: "https://i.ibb.co/4T8HfPY/profilepage.jpg", tags: ["tag2", "tag3"] },
    { id: 3, name: "Product C", image: "https://i.ibb.co/4T8HfPY/profilepage.jpg", tags: ["tag1", "tag4"] },
];

function analyzeImage() {
    const imageInput = document.getElementById('imageInput');
    const uploadedImage = document.getElementById('uploadedImage');
    const resultContainer = document.getElementById('resultContainer');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';

            // Simulate image analysis and product search
            setTimeout(() => {
                const similarProducts = findSimilarProducts();
                displayResults(similarProducts);
            }, 2000); // Simulate a delay for the analysis
        }
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        resultContainer.textContent = 'No image uploaded.';
    }
}

function findSimilarProducts() {
    // This is a mock function that randomly selects products
    // Replace this with actual image recognition and product search logic
    return products.filter(() => Math.random() > 0.5);
}

function displayResults(products) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    if (products.length === 0) {
        resultContainer.textContent = 'No similar products found.';
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        const productName = document.createElement('p');
        productName.textContent = product.name;

        productInfo.appendChild(productName);
        productDiv.appendChild(productImg);
        productDiv.appendChild(productInfo);

        resultContainer.appendChild(productDiv);
    });
}
