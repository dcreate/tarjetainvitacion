const getRemainTime = deadline => {
	let now = new Date(),
	remainTime = (new Date(deadline) - now + 1000) / 1000;
	remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
	remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
	remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
	remainDays = Math.floor(remainTime / (3600 * 24));

	return {
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
};


const countdown = (deadline, elem, finalMessage)=>{
	const el= document.getElementById(elem);

	const timerUpdate = setInterval( () => {
		let t = getRemainTime(deadline);
		el.innerHTML = `${t.remainDays} Dias ${t.remainHours}:${t.remainMinutes}:${t.remainSeconds} hrs.`;
		if(t.RemainTime <= 1){
			clearInterval(timerUpdate);
			el.innerHTML=finalMessage;
		}
	},1000)
};

countdown('Apr 09 2018 15:00:00 GMT-0500', 'clock', 'A darle a la Piñata');
