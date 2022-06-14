// Hamburger Menu
let clicked = 0;
let hamburgerIcon = document.getElementById('hamburgerNav');
let xMark = document.getElementById('xmark');
let stripMark = document.getElementById('stripmark');
let extendedNav = document.getElementById('subwrapNav');
let showHamburger = () => {
    stripMark.style.display = 'none';
    xMark.style.display = 'block';
    extendedNav.style.display = 'flex';
}

let hideHamburger = () => {
    stripMark.style.display = 'block';
    xMark.style.display = 'none';
    extendedNav.style.display = 'none';
}











// Products
let sizeOptions = document.querySelectorAll('.optionProducts > button');
let priceProduct1 = document.getElementById('priceProduct1');
let priceProduct2 = document.getElementById('priceProduct2');
console.log(sizeOptions);

for (let m = 0; m < sizeOptions.length; m++) {
    sizeOptions[m].onfocus = () => {
        sizeOptions[m].style.backgroundColor = 'cyan';
        sizeOptions[m].style.boxShadow = '0 4px 8px 0 rgba(0, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 255, 255, 0.19)';
    }
    sizeOptions[m].onblur = () => {
        sizeOptions[m].style.backgroundColor = 'white';
        sizeOptions[m].style.boxShadow = 'none';
    } 
}


// Static price List
sizeOptions[0].onclick = () => {
    priceProduct1.innerText = '$12';
}
sizeOptions[1].onclick = () => {
    priceProduct1.innerText = '$45';
}
sizeOptions[2].onclick = () => {
    priceProduct1.innerText = '$80';
}
sizeOptions[3].onclick = () => {
    priceProduct1.innerText = '$154';
}



sizeOptions[4].onclick = () => {
    priceProduct2.innerText = '$700';
}
sizeOptions[5].onclick = () => {
    priceProduct2.innerText = '$870';
}
sizeOptions[6].onclick = () => {
    priceProduct2.innerText = '$999';
}
sizeOptions[7].onclick = () => {
    priceProduct2.innerText = '$1200';
}

// if no option is selected 
// if (sizeOptions[0].clicked == false && sizeOptions[1].clicked == false && sizeOptions[2].clicked == false && sizeOptions[3].clicked == false) {
//     priceProduct.innerText = '$12-$154';
// }   not working currently




// Product Image
let imageProduct = document.getElementsByClassName('productImage');
imageProduct[1].style.backgroundImage = 'url(trademill2.png)';








// Testimonial

let testimonialImages = document.getElementsByClassName('imageTestimonial');
// optional feature to be activated (acc to need)
// let cardoverlayTestimonial = document.getElementsByClassName('cardcoloroverlayTestimonial');
// for (let j = 0; j < cardoverlayTestimonial.length; j++) {
//     cardoverlayTestimonial[j].onmouseover = () => {
//         cardoverlayTestimonial[j].style.border = '1px solid cyan';
//     }
//     cardoverlayTestimonial[j].onmouseout = () => {
//         cardoverlayTestimonial[j].style.border = 'none';
//     }
// }
testimonialImages[1].style.backgroundImage = 'url(client2.jpg)';
testimonialImages[2].style.backgroundImage = 'url(client3.jpg)';



// Feedback

let inputsContact = document.getElementsByClassName('formInput');
let logosContact = document.getElementsByClassName('logoContact');
for (let i = 0; i < inputsContact.length; i++) {
    inputsContact[i].onfocus = () => {
        inputsContact[i].style.borderColor = 'cyan';
        logosContact[i].style.color = 'cyan';
    }
    inputsContact[i].onblur = () => {
        inputsContact[i].style.borderColor = 'white';
        logosContact[i].style.color = 'white';
    }
}

let form = document.querySelector('form');
setTimeout(() => {
    form.reset();
}, 2000);



// Footer

let logoDivs = document.getElementsByClassName('logodivFooter');
let logoLinks = document.getElementsByClassName('logolinkFooter');
let logo = document.getElementsByClassName('logoFooter');
// console.log(logoDivs);
// foreach could also be used
for (let k = 0; k < logoDivs.length; k++) {
    logoDivs[k].onmouseover = () => {
        logoLinks[k].style.color = 'cyan';
        logoDivs[k].style.borderColor = 'cyan';
        logo[k].style.transform = 'scale(1.08)';
        logoDivs[k].style.transform = 'scale(1.08)';
    }
    logoDivs[k].onmouseout = () => {
        logoLinks[k].style.color = 'white';
        logoDivs[k].style.borderColor = 'white';
        logo[k].style.transform = 'scale(1)';
        logoDivs[k].style.transform = 'scale(1)';
    }
}

