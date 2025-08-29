function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// function getClass (class){
//   const className = document.getElementsByClassName(class)
//   return className
// }

// document.getElementById("btn-call-1").addEventListener("click", function () {
//   //   const idCard = getElement("id-card-1").innerText;
//   //   const CallNumber = getElement("call-num-1").innerText;
//   const cardTitle = getElement("card-title-1").innerText;
//   const callNumber = getElement("call-num-1").innerText;

//   const cardContainer = getElement("card-container");

//   const newCard = document.createElement("div");
//   newCard.innerHTML = `
//             <div
//               class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg mt-3 mb-4"
//             >
//               <div>
//                 <h1 class="font-semibold text-left text-lg">
//                ${cardTitle}
//                 </h1>
//                 <p class="text-[#5c5c5c]">${callNumber}</p>
//               </div>
//               <div>
//                 <time datetime="">11:34:58 AM</time>
//               </div>
//             </div>
//             `;
//   cardContainer.append(newCard);
// });
const now = new Date().toLocaleTimeString();
// const now = new Date();

// Use padStart to add a leading zero to single-digit numbers

// console.log(localTimeString);
getElement("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const cartButton = e.target;
    // alert("call btn");

    const countCoin = Number(getElement("count-coin").innerText);
    // console.log(countCoin);

    const totalCoin = countCoin - 20;

    if (totalCoin < 0) {
      alert("You don't have enough coins. You need 20 coins to call");
      return;
    }
    getElement("count-coin").innerText = totalCoin;
    const cardTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    const callNumber =
      cartButton.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(cardTitle, callNumber);
    const cardContainer = getElement("card-container");
    alert("📞 Calling " + cardTitle + " " + callNumber + "...");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
            <div
              class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg mt-3 mb-4"
            >
              <div>
                <h1 class="font-semibold text-left text-lg">
               ${cardTitle}
                </h1>
                <p class="text-[#5c5c5c]">${callNumber}</p>
              </div>
              <div>
                <time datetime="">${now}</time>
              </div>
            </div>
            `;
    cardContainer.append(newCard);
  }
});

// love reacts

getElement("card-box").addEventListener("click", function (event) {
  if (event.target.className.includes("love")) {
    const loveBtn = event.target;
    const countLove =
      loveBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.children[0].children[1].children[0].children[0]
        .innerText;
    console.log(countLove);
    const loveBtns = getElement("love-button").innerText;
    getElement("love-button").innerText = Number(loveBtns) + 1;
  }
});

getElement("clear-btn").addEventListener("click", function () {
  // alert("click");
  const cartContainer = getElement("card-container");
  cartContainer.innerHTML = "";
});

//---------------
// getElement("card-box").addEventListener("click", function (ev) {
//   if (ev.target.className.includes("btn-copy")) {
//     const buttonCopy = ev.target;
//     const callNumber =
//       buttonCopy.parentNode.parentNode.children[1].children[2].innerText;

//     // Use the Clipboard API to copy the text to the clipboard
//     navigator.clipboard.writeText(callNumber).then(() => {
//       // The text was successfully copied
//       alert("The number has been copied: " + callNumber);

//       const cardCopy = getElement("card-copy").innerText;
//       getElement("card-copy").innerText = Number(cardCopy) + 1;
//     });
//   }
// });

// copy techique

getElement("card-box").addEventListener("click", function (ev) {
  if (ev.target.className.includes("btn-copy")) {
    const buttonCopy = ev.target;
    const callNumber =
      buttonCopy.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(callNumber).then(() => {
      alert("The number has been copied " + callNumber);
    });

    // const copybtns = buttonCopy.parentNode.children[0].innerText;
    // console.log(copybtns);
    const cardCopy = getElement("card-copy").innerText;
    getElement("card-copy").innerText = Number(cardCopy) + 1;
  }
});

// ---------------------------

// ------------------
// document.addEventListener('DOMContentLoaded', function() {
//   const copyButton = document.getElementById('copy-button');
//   const textToCopy = document.getElementById('text-to-copy').textContent;

//   copyButton.addEventListener('click', function() {
//     navigator.clipboard.writeText(textToCopy)
//       .then(() => {
//         // Success feedback
//         console.log('Text successfully copied to clipboard');
//         alert('Text copied to clipboard!');
//       })
//       .catch(err => {
//         // Error handling
//         console.error('Failed to copy text: ', err);
//         alert('Failed to copy text.');
//       });
//   });
// });

// //delegation

// getElement("product-box").addEventListener("click", function (e) {
//   if (e.target.className.includes("cart-btn")) {
//     // alert("card clicked");
//     const cartButton = e.target;
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;

//     // console.log(productTitle);
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} Tk</h2>
//                   </div>
//             </div>
//     `;

//     cartContainer.append(newCart);

//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);

//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   }
// });

// document.getElementById("btn-clear").addEventListener("click", function () {
//   const cartContainer = getElement("cart-container");
//   cartContainer.innerHTML = "";
//   getElement("total-quantity").innerText = 0;
//   getElement("total-price").innerText = 0;
// });