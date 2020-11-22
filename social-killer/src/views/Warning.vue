<template>
<div class="warning">
    <div class="container">
		<div class="row align-items-center" id="content">
			<div class="col-8 frame">
				<div class="text-center warning-content">
					<h1 id="header-warning">Warning</h1>
					<br>
					<p class="exam"> <!-- ChulaCharasNewReg -->แบบทดสอบต่อจากนี้ไม่ได้มีจุดประสงค์ที่จะบังคับหรือยัดเยียดความเป็น
					sexual harrassment ให้กับผู้เข้าเล่น แต่ต้องการเพียงที่จะให้ความรู้และ
					ความเข้าใจเพิ่มเติมเกี่ยวกับเรื่องการ sexual harassment บนสื่อออนไลน์
					หากผู้ใดทดลองเล่นแล้วไม่ประสงค์ที่จะเล่นต่อ
					สามารถกด skip ไปอ่านในหน้าบทสรุปได้</p>
				</div>
			</div>
		</div>
		<br>
		<p class="blink-1">Skip</p>
	</div>
</div>
</template>

<style>
.warning{
    /* font-family: ;   w */
    color:white;
    width: 100vw;
    font-family: "ChulaCharas";

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
}
.warning-content{
	margin-top: 9%;
}
.exam {
	font-family: "ChulaCharasNewReg";
    /*font-size: 30px;*/
    text-align: center;
}
</style>