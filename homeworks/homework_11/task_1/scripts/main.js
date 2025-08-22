const BASE_URL = 'https://dummyjson.com';

fetch(`${BASE_URL}/carts`)
    .then((res) => res.json())
    .then((json) => {
        const { carts } = json;

        for (const cart of carts) {
            const divWithData = document.createElement("div");
            divWithData.setAttribute("class", "cart");
            const discountedTotalP = document.createElement("p");
            discountedTotalP.innerText = `Discounted total - ${cart?.discountedTotal}`;
            const idP = document.createElement("p");
            idP.innerText = `ID - ${cart?.id}`;
            const totalP = document.createElement("p");
            totalP.innerText = `Total - ${cart?.total}`;
            const totalProductsP = document.createElement("p");
            totalProductsP.innerText = `Total - ${cart?.totalProducts}`;
            const totalQuantityP = document.createElement("p");
            totalQuantityP.innerText = `Total quantity - ${cart?.totalQuantity}`;
            const userIdP = document.createElement("p");
            userIdP.innerText = `User ID - ${cart?.userId}`;
            divWithData.append(discountedTotalP, idP, totalP, totalProductsP, totalQuantityP, userIdP);

            const { products } = cart;
            products.forEach((product) => {
                const productDiv = document.createElement("div");
                productDiv.setAttribute("class", "product");
                const discountPercentageP = document.createElement("p");
                discountPercentageP.innerText = `Discount Percentage: ${product?.discountPercentage}`;
                const discountedTotalP = document.createElement("p");
                discountedTotalP.innerText = `Discounted Total: ${product?.discountedTotal}`;
                const idP = document.createElement("p");
                idP.innerText = `ID - ${product?.id}`;
                const priceP = document.createElement("p");
                priceP.innerText = `Price: ${product?.price}`;
                const quantityP = document.createElement("p");
                quantityP.innerText = `Quantity: ${product?.quantity}`;
                const thumbnailImg = document.createElement("img");
                thumbnailImg.src = product?.thumbnail;
                const title = document.createElement("h2");
                title.innerText = `Title - ${product?.title}`;
                const totalP = document.createElement("p");
                totalP.innerText = `Total: ${product?.total}`;

                productDiv.append(discountPercentageP, discountedTotalP, idP, priceP, quantityP, thumbnailImg, title, totalP);
                divWithData.appendChild(productDiv);
            });

            document.body.append(divWithData);
        }
    });
