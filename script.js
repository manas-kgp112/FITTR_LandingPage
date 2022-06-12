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