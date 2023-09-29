//Slider functionlari

let nextbtn         = document.getElementById('nextBtn');
let prevbtn         = document.getElementById('prevBtn');
let sliderimg       = document.getElementById('sliderimg');
let slidercontainer = document.getElementById('slider-container');

let currentindex = 0;
let images       = [
    "src/images/java.png",
    "src/images/c.png",
    "src/images/python.png"
]

function slider(){
    if(currentindex >= images.length){
        currentindex = 0;
    }else if(currentindex < 0){
        currentindex = images.length - 1;
    }
    sliderimg.src = images[currentindex];
}

nextbtn.addEventListener('click', function(){
    currentindex--;
    slider();
});

prevbtn.addEventListener('click', function(){
    currentindex++;
    slider();
});





let autoslide = setInterval(function(){
    currentindex++;
    slider();
}, 2000);

slidercontainer.addEventListener('mouseover', function(){
    clearInterval(autoslide);
});

slidercontainer.addEventListener('mouseout', function(){
    autoslide = setInterval(function(){
        currentindex++;
        slider();
    }, 2000);
});


//Tab menu function

let tabs    =document.querySelectorAll('.tabs div');
let contents =document.querySelectorAll('.content div');


for (let tab of tabs) {
    tab.addEventListener('click', function() {
      let activeElement = document.querySelector('.active');
      activeElement.classList.remove('active');
      this.classList.add('active');

    //   console.log(this.getAttribute("data-index"))
    let index =this.getAttribute("data-index");

    for(let content of contents){
        if(index == content.getAttribute("data-index")){
            content.classList.add("show")
        }else{
            content.classList.remove("show")
        }
     }  

    });
  }


// Add list function

  function taskAdd(){

    var taskName = document.querySelector("#taskName").value;

    if(taskName == ''){
        alert("Formu bos buraxmayin !");
    }else{
        var newTask        = document.createElement("li");
        var newTaskContent = document.createTextNode(taskName);
        newTask.appendChild(newTaskContent);
        
        var taskList = document.querySelector("#myTasks");
        taskList.appendChild(newTask);
        document.querySelector("#taskName").value = '';

        var closeBtn  = document.createElement("SPAN");
        var closeIcon = document.createTextNode("x");
        closeBtn.className = "close";
        closeBtn.appendChild(closeIcon);
        newTask.appendChild(closeBtn);
    }

    var closeButtons = document.getElementsByClassName("close");
    var i;
    for(i = 0; i < closeButtons.length; i++){
        closeButtons[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
