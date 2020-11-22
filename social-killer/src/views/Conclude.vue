<template>
<div class="conclude-final">
    <div class="container-fluid h-100">

        <div class="conclude-content-box">
            <div class="row">
                <div class="col-12">
                    <div class="HeadSocial">SOCIAL</div>
                    <div class="HeadSocial">KILLER</div>
                    <div class="HeadLevel">ระดับความ Sexual Harrasment บนโซเชียลของคุณ</div>
                    <div class="pie-chart" data-percentage="70"><!-- ใส่local stateตรงนี้จ้า เต็ม100 -->
                        <svg viewBox="-100 -100 200 200">
                            <path d="" />
                        </svg>
                    </div>
                    <div class="Level-con">ระดับ...</div>
                </div>
            </div>
        </div>



        <div class="conclude-content-box2">
            <div class="row">
                <div class="col-12">
                    <div class="HeadTitle" id="head"><span class="headT"><b>Sexual Harrasment</b>
                            <p class="what"> คือ</p>
                        </span></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mean" style="
            font-family: 'ChulaCharas'; opacity: '0%';" id="result-first">
                        Sexual Harassment การคุกคามทางเพศหรือการล่วงละเมิดทางเพศด้วยการกระทําหรือ
                        การแสดงออกทางเพศ ทั้งโดยตรงและโดยอ้อม <span class="hlRed">ไม่ว่าจะเป็นการใช้สายตา การจับ สัมผัส
                            หรือโดนร่างกาย การใช้วาจา รวมถึงการพิมพ์ข้อความผ่านโซเชียลมีเดีย</span> ทําให้ผู้ที่ตก
                        เป็น เป้าของการกระทํานั้นรู้สึกอึดอัด ไม่สบายใจ และรู้สึกไม่ปลอดภัย ซึ่งถือเป็นอีกหนึ่ง
                        ปัญหา ในสังคม ที่ต้องได้รับการป้องกันและแก้ไข

                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-12">
                    <div class="mean" style="
            font-family: 'ChulaCharas'; opacity: '0%';" id="result-second">
                        ยกตัวอย่างคำที่สื่อไปในการคุกคามทางเพศ ตัวอย่างเช่น มีค่าเทอมรึยัง, สามีในอนาคต,
                        อยากกินไอติม และ แม่ของลูก เป็นต้น

                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-12">
                    <div class="mean" style="
            font-family: 'ChulaCharas'; opacity: '0%';" id="result-third">
                        Cyber Sexual Harassment เข้าข่ายความผิดอะไรบ้าง อาทิ
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-12">
                    <div class="mean" style="
            font-family: 'ChulaCharas'; opacity: '0%';" id="result-four">
                        พ.ร.บ. ว่าด้วยการกระทำความผิดทางคอมพิวเตอร์ 2560
                        มาตรา 14 ข้อ (4) ที่กล่าวไว้ว่า การนำข้อมูลที่มีลักษณะอันลามกเข้าสู่ระบบคอมพิวเตอร์
                        การกระทำดังกล่าวถือว่า มีความผิด อาจต้องรับโทษจำคุกไม่เกิน 5 ปี ปรับไม่เกิน
                        100,000 บาท หรือทั้งจำทั้งปรับ
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12" style='z-index:20 cursor:pointer' @click="toSharePage()">
                    <div class="next" style="
            font-family: 'ChulaCharas'; opacity: '0%'; z-index:20; cursor:pointer;" id="result-five">
                        ไปต่อ
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mean" style="
            font-family: 'ChulaCharas'; opacity: '0%';" id="result-six">
                        <div class="arrow"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-right"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.conclude-final{
    width:100vw;
    height: 100vh;
    color:white
}
    .conclude-content-box {

        position: absolute;
        width: 50%;
        height: 70%;
    }

    .conclude-content-box2 {
        height: fit-content;
        border-radius: 35px;
        position: absolute;
        border: 0.5px solid white;
        width: 50%;
        right: 25px;
        top: 16%;
        right: 5%;
        padding: 2%;
    }

    .row {
        width: 100%;
        margin-left: 0 !important
    }

    .HeadTitle {
        font-family: "ChulaCharas", sans-serif;
        font-size: 37pt;

    }

    .mean {
        font-size: 130%;
        opacity: 0%;

    }

    .headT {
        font-family: "Chivo", sans-serif;
        font-size: 60%;
        font-weight: 400;
    }

    .HeadSocial {
        font-family: "Chivo", sans-serif;
        left: 0;
        top: 0;
        font-weight: bold;
        font-size: 100pt;
        height: 80pt;
        padding-left: 2%;

    }

    .next {
        padding-left: 90%;
        font-size: 130%;
        opacity: 0%;
    }

    .what {
        font-family: "ChulaCharas", sans-serif;
        display: inline;
    }

    @supports (-webkit-text-stroke: 1px rgb(255, 255, 255)) {
        .HeadSocial {
            -webkit-text-stroke: 1px rgb(255, 255, 255);
            -webkit-text-fill-color: transparent;
        }
    }

    .HeadLevel {
        font-family: "ChulaCharas", sans-serif;
        left: 0;
        top: 0;
        font-size: 20pt;
        padding: 10%;

    }
    .Level-con {
        font-family: "ChulaCharas", sans-serif;
        left: 0;
        top: 0;
        font-size: 20pt;
        font-weight: italic;
        padding-top: 3%;
        padding-left: 35%;

    }

    .hlRed {
        color: red;
    }


    .fade-in {
        animation: fadeIn ease 2s;
        /* -webkit-animation: fadeIn ease 20s;
-moz-animation: fadeIn ease 20s;
-o-animation: fadeIn ease 20s;
-ms-animation: fadeIn ease 20s; */
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-moz-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-o-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @-ms-keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }


    .arrow {
        /* width: 100vh; */
        -webkit-animation: 3s soft-blink infinite alternate;
        animation: 3s soft-blink infinite alternate;
        position: absolute;
        opacity: 0;
        padding-left: 79%;
        margin-top: -5%;
    }

    @-webkit-keyframes soft-blink {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }
    }

    @keyframes soft-blink {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }
    }

    .arrow:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 20px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .pie-chart {
        display: block;
        max-width: 300px;
        max-height: 300px;
        width: 100%;
        padding: 0;
        margin-left: 21%;
        margin-top: -6%;
        transform-origin: 50% 50%;
        -moz-transform-origin: 40px 40px;
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }

    .pie-chart~h3 {
        text-align: center;
        font-family: "Helvetica", sans-serif;
        font-size: 24px;
        font-weight: normal;
        color: gray;
    }

    .pie-chart svg {
        max-height: 300px;
        border-radius: 50%;
        border: 1px solid #eee;
        background: #000000;
    }

    .pie-chart svg path {
        fill: #ffffff;
        -moz-transform: translate3d(0, 0, -1px);
    }

</style>
<script>
import router from "@/router"
export default {
    name: "conclude",
    mounted(){
        document.getElementById("head").classList.add("fade-in")
        setTimeout(function () {
            document.getElementById("result-first").style.opacity = '100%';
            document.getElementById("result-first").classList.add("fade-in")
            console.log("check")
        }, 5000)
        setTimeout(function () {
            document.getElementById("result-second").style.opacity = '100%';
            document.getElementById("result-second").classList.add("fade-in")
            console.log("check")
        }, 15000)
        setTimeout(function () {
            document.getElementById("result-third").style.opacity = '100%';
            document.getElementById("result-third").classList.add("fade-in")
            console.log("check")
        }, 23000)
        setTimeout(function () {
            document.getElementById("result-four").style.opacity = '100%';
            document.getElementById("result-four").classList.add("fade-in")
            console.log("check")
        }, 26000)
        setTimeout(function () {
            document.getElementById("result-five").style.opacity = '100%';
            document.getElementById("result-five").classList.add("fade-in")
            console.log("check")
        }, 30000)
        setTimeout(function () {
            document.getElementById("result-six").style.opacity = '100%';
            document.getElementById("result-six").classList.add("fade-in")
            console.log("check")
        }, 30000)


        draw_pie_chart();
        window.onresize = draw_pie_chart();

        function draw_pie_chart() {
            var percentage, // percentage for the data attribute
                path, // path for svg
                angle, // 1% = 3.6deg; used for coord mapping
                radius = 50, // radius of the pie chart in pixels
                coords = []; // holds Cartesian plane coords for svg path

            percentage = parseInt(document.querySelectorAll('.pie-chart[data-percentage]')[0].getAttribute('data-percentage'));

            angle = percentage * 3.6; // 1% ~ 3.6deg
            radius = radius * 2;      // get diameter

            coords[0] = radius * Math.cos(Math.PI * angle / 180);
            coords[1] = radius * Math.sin(Math.PI * angle / 180);

            path = 'M0,0 L' + radius + ',0 A' + radius + ',' + radius + ' 0 1,1 ' + coords[0] + ',' + coords[1] + ' Z';

            document.querySelectorAll('.pie-chart svg path')[0].setAttribute('d', path);

            document.querySelectorAll('h3')[0].innerHTML = percentage + '%';

        }
    },
    methods:{
        toSharePage(){
            router.push("/share")
        }
    }
}
</script>