var labdata = {
	name:"Function : Return lv 2",
	steps:[
		{
			name:"Return lv 2", 
			content:"ฝีก return",
			code:"http://learn.picnii.me/contents/31",
			class:"in"
		},

		{
			name:"ขอ input 3 ปุ่ม", 
			content:"สำหรับให้ทำงาน 4 การกระทำ โดย ปุ่ม A คือ sumAll ปุ่ม B sumAll 1.5 ปุ่ม C special " ,
			code:"showInput('button', 3);",	
		},
		
		{
			name:"sumAll(a,b)", 
			content:"หารวมตั้งแต่ a , b ==> (a x b ) + ( b - a + 1) / 2" ,
			code:"return ,ไม่ควร echo",			 
		},

		{
			name:"special(a,b)", 
			content:"Sqrt( ( a^2 + b^2 ) / 2) + sumAll(a,b)" ,
			code:"return ซักอย่าง, ไม่ควร echo",
		},

		{
			name:"bind with button", 
			content:"ปุ่ม A คือ SumAll, ปุ่ม B = sumAll(a,b) + sumAll( a , b/2), ปุ่ม C => Special()" ,
			code:"",
		},
	],
	type:"lab",


}