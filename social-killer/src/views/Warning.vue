<template>
<div class="warning">
    <div class="container">
		<div class="row align-items-center" id="content">
			<div class="col-8 frame">
				<div class="col frame" style="height: 45vh; margin-top: 16px">
					<div class="text-center warning-content">
						<h1 class="font-warning">Warning</h1>
						<br>
						<p class="exam">แบบทดสอบต่อจากนี้ไม่ได้มีจุดประสงค์ที่จะบังคับหรือยัดเยียดความเป็น
							sexual harrassment ให้กับผู้เข้าเล่น แต่ต้องการเพียงที่จะให้ความรู้และ
							ความเข้าใจเพิ่มเติมเกี่ยวกับเรื่องการ sexual harassment บนสื่อออนไลน์
							หากผู้ใดทดลองเล่นแล้วไม่ประสงค์ที่จะเล่นต่อ
						สามารถกด skip ไปอ่านในหน้าบทสรุปได้</p>
					</div>
				</div>
			</div>
		</div>
		<br>
		<p class="blink-loop skip" @click="skipped()">Skip</p>
	</div>
</div>
</template>

<style>
.font-warning{
    font-family: "Inconsolata-Expanded-Bold";
}
.blink-loop{
    animation: blink-1 5s both infinite;
}
.warning{
    color:white;
    width: 100vw;

}
#content{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20vh;
}
#header-warning {
	color: white;
	text-align: center;
}
.frame {
	height: 50vh;
	border: 1px solid white;
	border-radius: 2.25em;
	margin: auto;
	display: block;
}
.skip {
    text-align: center;
    color: white;
    font-size: 1.2vw;
    cursor:pointer;
}
.warning-content{
	margin-top: 9%;
}
.exam {
	font-family: "ChulaCharas";
    font-size: 1.5vw;
    text-align: center;
}


</style>

<script>
var livetime
import router from "@/router"
export default {
    name: "warning",
    mounted(){
        this.autorun();
    },
    methods:{
		autorun(){
			livetime = setTimeout(()=>{
            router.push('/livecam')
        },8000)
		},
        skipped(){
			router.push('/conclude')
			clearTimeout(livetime)
			console.log("cleared timeout")
        }
    }
}
</script>