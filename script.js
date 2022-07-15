let frame = document.querySelector(".gallery");
const urls = [ 
    "https://img.freepik.com/free-photo/milky-way-full-stars-space_181624-2599.jpg?t=st=1657730797~exp=1657731397~hmac=3a6446e824ea651c7fb8a5e23336af56e68ae72d536e7df9e7c0f017c9adf072&w=2000",
    "https://img.freepik.com/premium-photo/space-nebula-3d-illustration-use-with-projects-science-research-education_250994-2401.jpg?w=1380",
    "https://img.freepik.com/free-photo/galaxy-night-landscape_23-2148895320.jpg?t=st=1657730863~exp=1657731463~hmac=3efe4da0fd4519b72c91f8fb87b9e3a2c78af765d9574e0da7ffde6ec2ef2099&w=1380",
    "https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?t=st=1657730888~exp=1657731488~hmac=355bd8ce247216f0875ec63f0ec87bdd0090715efe991f6e194d4bf16b81d4ba&w=1380",
    "https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?t=st=1657730892~exp=1657731492~hmac=40f31036a5e670d970cd077d86bd87ad1bbd327be868a80b9a94d7e052f695b1&w=1380",
    "https://img.freepik.com/free-photo/closeup-low-angle-shot-yellow-autumn-leaves-tree-blue-sky_181624-56325.jpg?t=st=1657730923~exp=1657731523~hmac=1e72eedad5f6b08b1a64ffd937effc9e6f4bf8281e165a2a2cbf035141f3472a&w=1380",
    "https://img.freepik.com/free-photo/blue-foaming-waves-north-beach-nazare-portugal_1268-15934.jpg?t=st=1657730966~exp=1657731566~hmac=7454e3aa11a57ef3c270f07735e312ff37aeffd3c4410ab83e63a548892d9e10&w=1380",
    "https://img.freepik.com/free-photo/beautiful-pine-trees-mountains_155003-45204.jpg?t=st=1657731018~exp=1657731618~hmac=af9d21395760a4d269a392ed7fb90ba781c49cc7e559717a5d2968ad997b6166&w=1380",
    "https://img.freepik.com/free-photo/view-toward-sky-forest_53876-98231.jpg?t=st=1657731020~exp=1657731620~hmac=53e15f60e0b1ada1798792cf969c47460881216cb33e6e61e986d7a14387fb21&w=1380",
    "https://img.freepik.com/free-photo/scenic-mountains-landscape-after-rain-carpathians-ukraine_146671-18431.jpg?t=st=1657731047~exp=1657731647~hmac=bfd38e69f8d94a0b55f099d98a88f78c63b2384200d908d3fa35ba92deadcb52&w=1380",
    "https://img.freepik.com/free-photo/beautiful-autumn-morning-view-point-deep-forest-valley-carpathians-ukraine-europe_146671-19485.jpg?t=st=1657700697~exp=1657701297~hmac=8643575328f1a3ac57b5cd254c19ce2b508defce54e89c4011112f121fbf0dba&w=1380"
];
let currentPic=0;
const next = document.querySelector(".arrow-right");
const previous = document.querySelector(".arrow-left");
let previousDot = document.getElementById("0");
const zeroSpan = document.getElementById("0");
const firstSpan = document.getElementById("1");
const secondSpan = document.getElementById("2");
const thirdSpan = document.getElementById("3");
const fourthSpan = document.getElementById("4");
const fifthpan = document.getElementById("5");
const sixthSpan = document.getElementById("6");
const seventhSpan = document.getElementById("7");
const eighthSpan = document.getElementById("8");
const ninethSpan = document.getElementById("9");

frame.innerHTML = `<img class="picture" src="`+urls[currentPic]+`"/>`;

next.addEventListener("click", function showNext () {
    let currentDot = document.getElementById(currentPic); 
    currentDot.classList.remove("dot-chosen");
    if(currentPic===9){
        currentPic=0;
    } else {
        currentPic=currentPic+1;
    }
    let nextDot = document.getElementById(currentPic); 
    nextDot.classList.add("dot-chosen");
    frame.innerHTML = `<img class="picture fade" src="`+urls[currentPic]+`"/>`;
});

previous.addEventListener("click", function showPrevious () {
    let currentDot = document.getElementById(currentPic); 
    currentDot.classList.remove("dot-chosen");
    if(currentPic===0){
        currentPic=9;
    } else {
        currentPic=currentPic-1;
    }
    let nextDot = document.getElementById(currentPic); 
    nextDot.classList.add("dot-chosen");
    frame.innerHTML = `<img class="picture fade" src="`+urls[currentPic]+`"/>`;
});

function showTarget (e) {
    previousDot.classList.remove("dot-chosen");
    frame.innerHTML = `<img class="picture fade" src="`+urls[e.target.id]+`"/>`;
    let nextDot = document.getElementById(e.target.id); 
    nextDot.classList.add("dot-chosen");
    previousDot = document.getElementById(e.target.id);
};

zeroSpan.addEventListener("click", showTarget);
firstSpan.addEventListener("click", showTarget);
secondSpan.addEventListener("click", showTarget);
thirdSpan.addEventListener("click", showTarget);
fourthSpan.addEventListener("click", showTarget);
fifthpan.addEventListener("click", showTarget);
sixthSpan.addEventListener("click", showTarget);
seventhSpan.addEventListener("click", showTarget);
eighthSpan.addEventListener("click", showTarget);
ninethSpan.addEventListener("click", showTarget);
