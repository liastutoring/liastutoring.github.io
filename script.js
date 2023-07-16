function createTable(csv) {
    const reviews = [];
    const colors = [];
    csv.split("\n").forEach(line => {
        reviews.push(line.split('","'));
        colors.push(getColor());
    });
    const titles = reviews.shift();
    colors.shift();
    reviews.reverse();
    colors.reverse();
    let content = "";
    reviews.forEach((row, i) => {
        content += "<div class='review'>";
        const date = convertDate(row[0].slice(1, 11));
        const name = row[1];
        const stars = row[2];
        const percent = parseInt(stars) * 100 / 5;
        const review = row[3];
        const image = row[5];
        const starsDisplay = '<div class="star-rating" style="background-image: linear-gradient(to right, gold 0%, gold ' + percent + '%, transparent ' + percent + '%, transparent 100%);"></div>'
        content += "<div class='review-header'>";
        if (image !== undefined) {
            content += "<img src='" + image.slice(0, -1) + "'>";
        } else {
            content += "<div class='blank-profile' style='background-color: " + colors[i] + "'><span>" + name[0] + "</span></div>";

        }
        content += starsDisplay;
        content += "<div class='name'>" + name + "</div>" ;
        content += "<div class='date'>" + date + "</div>" ;
        content += "</div>";
        content += "<div class='review-text'>" + review + "</div>" ;
        content += "</div>";
    });
    document.querySelector(".reviews-container").innerHTML = content;
}

function convertDate(date) {
    const [ year, month, day ] = date.split("/");
    return months[parseInt(month) - 1] + " " + day + ", " + year;
}

let seed = 1;
function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function getColor(){ 
    return "hsl(" + 360 * random() + ',' +
               (20 + 80 * random()) + '%,' + 
               (80 + 10 * random()) + '%)'
  }

const csv = `"Timestamp","What is your name?","Please rate on a scale from 1 to 5 your satisfaction with this service.","Please write a review based on your experience having Lia as your tutor. ","Do you have any contact information you are willing to share, such as a phone number or email, for future reference? If so, please enter them below."
"2023/02/11 7:10:31 PM AST","Madison Selinger","4","She is a kinda person and is quite helpful with my math work that I do not understand. ","604-809-5019","imgs/madison.jpeg"
"2023/02/12 12:07:44 AM AST","Budwin ","5","Lia was very good at teaching me new concepts and always came prepared for every class.","Email: b.bogodawatte@gmail.com"
"2023/02/12 1:39:16 AM AST","Chelsea","5","Lia is a great tutor. She’s patient and able to explain concepts in different ways. Very knowledgeable. ",""
"2023/02/13 4:47:20 PM AST","Francisca Timofte","4","Lia is very helpful when tutoring. She’s very patient and explains everything in a clear and concise way.",""
"2023/02/13 8:04:30 PM AST","M Carere","5","Lia is organized, well prepared and knowledgeable -she is always ready for sessions and her explanations are clear and helpful. She has a wide range of knowledge including math, coding and physics which is great. ",""
"2023/02/15 2:48:55 PM AST","Erin","5","Very organized and professional ","(204) 870-1870"
"2023/02/15 8:35:12 PM AST","Umayer Khan","5","She seems experienced and very helpful even outside of tutoring hours ","No"
"2023/02/16 5:16:46 PM AST","Ashesh K C","5","Great tutor, very compassionate and well informed","kcashesh123@gmail.com"
"2023/02/17 10:33:57 PM AST","Reuben","5","Lia's teaching are very detailed, straightforward and very illustrative. More of ""zero->Hero""  style of teaching","18215107127","imgs/reuben2.jpg"
"2023/02/22 1:48:26 PM AST","Sarah","4","Lia allows for questions to be asked throughout the tutoring session along with prepares questions for me to practice. Lia helped with creating a formula sheet for my integral calculus class. She is friendly and takes time to review specific parts of a question with you.",""
"2023/02/22 1:48:30 PM AST","Phylicia","4","Lia has been really helpful when trying to learn questions. She takes the time to make sure I understand each question. This includes providing me with the formula we are currently using as well as breaking down certain parts of the question so I can see exact step by step procedure. I also find the graphs she creates very helpful when trying to visualize what a function looks like. ",""
"2023/02/27 4:24:06 PM AST","Ivan","5","Very knowledgeable and her explanations are easy to understand as long as you are focused on what she's teaching. ","ivanmatos1025@gmail.com"
"2023/03/08 12:59:15 AM AST","Jayden","5","She was great. And helped me prepare for my math test.",""
"2023/03/10 10:57:06 PM AST","Thang","5","Clearly explain the lesson. ",""
"2023/03/28 9:33:03 PM AST","Jason ","5","Lia has been tutoring me throughout my Stats course. She is very knowledgeable and is able to simplify terms and formula's, and helps to make sense of the complexity of Stats. She was a great resource for my assignment where she displayed a wealth of knowledge on the subjects discussed within the assignment. I highly recommend!","neudorfjason@yahoo.com","imgs/jason2.jpeg"
"2023/04/09 5:29:46 PM AST","Kardyn Reaume","5","Lia was able to point out all the mistakes from our textbook and correct them. She was also very good at explaining everything. ","226-345-9603"
"2023/04/10 11:35:51 AM AST","Alan","5","She explained all concepts in a way that was easy to understand and gave practical examples.   Demonstrated the use of SPSS and took time to answer questions to make sure we understood how to interpret results. Highly recommend her as a tutor for Advanced statistics ","desimpea@uwindsor.ca"
"2023/04/14 1:46:09 AM AST","Elena","5","Lia was very kind and responsive to emails when setting up lessons. She explains in a way that is easy to understand and this helped me a lot when trying to understand biomechanics! Thank you! ","(mobile) 6043689868"
"2023/04/16 1:04:37 AM AST","Fatiha","4","Helped me understand the concept really well and helped me prepare for my exam which made it easier for me during the exam.",""
"2023/04/24 12:06:51 AM AST","Mary","5","She was really helpful and clear, I am a pretty slow learner and she patiently waited for me to understand before continuing with the exercise.",""
"2023/04/24 7:15:30 PM AST","Jac","5","Lia was a great tutor for my exam preparations for MATH 151 and STAT 252. She explains concepts clearly and her prices are affordable. She takes the time to properly answer your questions even if you go over by a couple of minutes or so. I highly recommend Lia for your tutoring needs. (especially prospective BCOM students trying to ace those prerequisites.)","jaclynbaker@hotmail.com"
"2023/04/24 10:51:27 PM AST","Liliya Lopez","5","Lia is a great tutor! She is responsible and takes teaching very seriously. Lia covered the Machine Learning lessons very well. I learned a lot from her. Highly recommend Lia! ","liliya.lopez81@gmail.com"
"2023/05/29 11:57:48 AM AST","Austin","5","Lia has been super awesome helping me out with some tougher math courses I am taking. Knows what she is talking about and is very helpful",""
"2023/05/30 12:28:10 AM AST","A.D.","5","Great Coding Tutor.","No."
"2023/06/06 7:08:08 PM AST","Faiqah","5","She has a lot of availability, which is really nice. She's very nice, understanding, and explains things well. ",""
"2023/06/17 2:22:15 AM AST","Jon","5","Very helpful, 10/10",""
"2023/06/25 2:27:25 PM AST","Vincenzo ","5","She is very Helpful and understanding, will show you multiple ways to find a solution. She is a very good tutor. ",""`
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

createTable(csv);
