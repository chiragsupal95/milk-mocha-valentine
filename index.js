var image;
var rejectionPictureOfMocha = [
    {
        src: 'sad-mocha.png',
        width: 340,
        height: 315,
        msg: "Don't you love me?",
    },
    {
        src: 'sad-mocha2.png',
        width: 250,
        height: 245,
        msg: 'Shut up. Accept my proposal.'
    },
    {
        src: 'sad-mocha3.jpg',
        width: 415,
        height: 305,
        msg: 'Please, I want you to be my valentine :('
    },
    {
        src: 'sad-mocha4.jpg',
        width: 315,
        height: 220,
        msg: 'Why are you rejecting? :('
    }
];

function onPageLoad() {
    image = document.getElementById('display-image');
    image.src = 'milk-bear-mocha-3840x2548-10248.jpg';
    image.width = 500;
    image.height = 335;
}

function changeMochaImageToAngry() {
    image = document.getElementById('display-image');
    var imageInfo = rejectionPictureOfMocha[Math.floor(Math.random() * rejectionPictureOfMocha.length)]
    image.src = imageInfo.src;
    image.width = imageInfo.width;
    image.height = imageInfo.height;

    var rejectionMessage = document.getElementById('rejection-text');
    rejectionMessage.textContent = imageInfo.msg;
}

function onAcceptProposal() {
    image = document.getElementById('display-image');
    var rejectionMessage = document.getElementById('rejection-text');
    setTimeout(() => {
        image.src = 'accepted-mocha-milk.gif';
        image.width = 300;
        image.height = 300;
        rejectionMessage.textContent = 'I LOVE YOU <3'

    }, 3000)
    image.src = 'happy-mocha.jpg';
    image.width = 300;
    image.height = 300;
    rejectionMessage.textContent = 'THANK YOU FOR BEING MY VALENTINE <3'

}