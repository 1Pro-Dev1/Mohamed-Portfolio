                       // Cursor //

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".dot");

window.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style", `top: ${e.pageY - 17.5}px; left: ${e.pageX - 17.5}px;`)
    dot.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`)
    if (e.target.classList.contains("cursor-hover")){
        cursor.classList.add("hover")
        dot.classList.add("hover")
    } else {
        cursor.classList.remove("hover")
        dot.classList.remove("hover")
    }
});

document.addEventListener("click", () => {
    cursor.classList.add("click1");
    setTimeout(() => {
    cursor.classList.remove("click1");
    cursor.classList.add("click2");
        setTimeout(() => {
            cursor.classList.remove("click2");
        },200)
    },200)
})

                       // Links //                          
    
const links = document.querySelectorAll(".links .box");

for (let i = 0; i < links.length; i++) {
    const e = links[i];
    e.addEventListener("click", (ele) => {
        
        for (let i2 = 0; i2 < links.length; i2++) {
            const e2 = links[i2];
            e2.classList.remove("active")
        };
        e.classList.add("active" , "scale")
        setTimeout(() => {
            e.classList.remove("scale");
        },500)
    })
};

                        // Navigation //

let navLinks = document.querySelectorAll(".links span");
let sections = document.querySelectorAll(".sections section");

function dNone() {
    for (let i = 0; i < sections.length; i++) {
        const ele = sections[i];
        console.log(ele)
        ele.style.display = "none"
    }
}

for (let i = 0; i < navLinks.length; i++) {
    const ele = navLinks[i];
    ele.addEventListener("click", () => {
        dNone();
        const section = document.querySelector(`.${ele.getAttribute("data-sec")}`)
        section.style.display = "block"
            section.scrollIntoView({
                behavior: "smooth"
            })
    })
}

// More info btn //

let moreBtn = document.querySelector(".more-inf")
let about = document.querySelector(".sections .about-sec")
console.log(about)

moreBtn.addEventListener("click", () => {
    dNone();
    about.style.display = "block";
    console.log(about)
    about.scrollIntoView({
        behavior: "smooth"
    })
})
