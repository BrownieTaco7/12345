// var sum = 0;
// $(function () {

//     $("#but").click(function () {


//         function random(min, max) {
//             return Math.floor(Math.random() * (max - min)) + min;
//         }

const youtubeArray=[ 'https://www.youtube.com/watch?v=v7wErmth4k4', 'https://www.youtube.com/watch?v=LTG-uVV_6q0', 'https://www.youtube.com/watch?v=mjZjumldZ0A',
'https://www.youtube.com/watch?v=x7LEKYOrlrQ'];
const videoContainer = document.getElementById("video-container");
const submitBtn = document.getElementById("tijiao").addEventListener("click", function() {
    let randNum = Math.floor(Math.random() * (youtubeArray.length));
    if(videoContainer.childElement > 0) {
        videoContainer.firstChild.setAttribute("src", youtubeArray[randNum])
    } 
    else {
        createVideo(youtubeArray[randNum]);
    }
});

function createVideo(url) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.setAttribute("width", "500px");
    iframe.setAttribute("height", "700px");
    iframe.setAttribute("allow",'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    videoContainer.appendChild(iframe);
}






    //     switch (random(1, 30)) {
    //         case 1:
    //             window.open('https://www.youtube.com/watch?v=v7wErmth4k4');
    //         case 2:
    //             window.open('https://www.youtube.com/watch?v=LTG-uVV_6q0');
    //         case 3:
    //             window.open('https://www.youtube.com/watch?v=mjZjumldZ0A');
    //         case 4:
    //             window.open('https://www.youtube.com/watch?v=x7LEKYOrlrQ');
    //         case 5:
    //             window.open('https://www.youtube.com/watch?v=hkA03-wEFm4');
    //         case 6:
    //             window.open('https://www.youtube.com/watch?v=xWPd2zMAh1M');
    //         case 7:
    //             window.open('https://www.youtube.com/watch?v=b3wu3RbVqd8');
    //         case 8:
    //             window.open('https://www.youtube.com/watch?v=lF3U-U78RNg');
    //         case 9:
    //             window.open('https://www.youtube.com/watch?v=VMRcZzScaPw');
    //         case 10:
    //             window.open('https://www.youtube.com/watch?v=aFa2S071re8');
    //         case 11:
    //             window.open('https://www.youtube.com/watch?v=1955Rm9bDTA');
    //         case 12:
    //             window.open('https://www.youtube.com/watch?v=eWoZv1HsZYY');
    //         case 13:
    //             window.open('https://www.youtube.com/watch?v=0S8yEf-6us4');
    //         case 14:
    //             window.open('https://www.youtube.com/watch?v=eof2c5fTcI8');
    //         case 15:
    //             window.open('https://www.youtube.com/watch?v=u6T5C-jzSH0');
    //         case 16:
    //             window.open('https://www.youtube.com/watch?v=KSbcy86o0G8');
    //         case 17:
    //             window.open('https://www.youtube.com/watch?v=QfQ3kqu_DZ0');
    //         case 18:
    //             window.open('https://www.youtube.com/watch?v=OLpSZmDiE1Y');
    //         case 19:
    //             window.open('https://www.youtube.com/watch?v=-FEu9QpdMCc');
    //         case 20:
    //             window.open('https://www.youtube.com/watch?v=AtbkIImifLU');
    //         case 21:
    //             window.open('https://www.youtube.com/watch?v=V7vF-lLChEI');
    //         case 22:
    //             window.open('https://www.youtube.com/watch?v=fHbRYNriVAA');
    //         case 23:
    //             window.open('https://www.youtube.com/watch?v=grK6DNEyOJ8');
    //         case 24:
    //             window.open('https://www.youtube.com/watch?v=r58GhnwpEl4');
    //         case 25:
    //             window.open('https://www.youtube.com/watch?v=F74DxL4q1ZU');
    //         case 26:
    //             window.open('https://www.youtube.com/watch?v=AFYP2BdnC9g');
    //         case 27:
    //             window.open('https://www.youtube.com/watch?v=NJBpxyesTew');
    //         case 28:
    //             window.open('https://www.youtube.com/watch?v=bTx5Fn7JDK0');
    //         case 29:
    //             window.open('https://www.youtube.com/watch?v=sgNUvGENUfo');
    //         case 30:
    //             window.open('https://www.youtube.com/watch?v=8vlCAVfcg0A');

    //     }
//     })
// });