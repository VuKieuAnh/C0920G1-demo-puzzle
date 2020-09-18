function changeImage(e) {
    // alert("Day la su kien thay doi anh");
    // let e = document.getElementById("1");
    let imageNumber = Math.floor(Math.random()*2 + 1);
    let srcImage = "anh"+imageNumber+"/anh"+imageNumber+"_p"+e.getAttribute("id")+".jpg";
    e.setAttribute("src", srcImage);
    checkDone();
}

function checkDone() {

    let src1 = document.getElementById("1").getAttribute("src").slice(0, 4);
    let src2 = document.getElementById("2").getAttribute("src").slice(0,4);
    console.log(src1);
    console.log(src2);
}
