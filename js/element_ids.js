var mission = document.getElementById('mission'),
	process = document.getElementById('process'),
	servicesIntro = document.getElementById('servicesIntro'),
	servicesBody = document.getElementById('servicesBody'),
	works = document.getElementById('works'),
	contact = document.getElementById('contact'),
	missionOffset, 
	processOffset,
	servicesIntroOffset,
	servicesBodyOffset,
	worksOffset,
	contactOffset,
	sectionOffset = [],
	keepanim = false;
	sections = [mission, process, servicesIntro, servicesBody, works, contact];

setTimeout(function(){
	missionOffset = mission.offsetTop,
	processOffset = process.offsetTop,
	servicesIntroOffset = servicesIntro.offsetTop,
	servicesBodyOffset = servicesBody.offsetTop,
	worksOffset = works.offsetTop,
	contactOffset = contact.offsetTop;
	sectionOffset = [missionOffset, processOffset, servicesIntroOffset, servicesBodyOffset, worksOffset, contactOffset];

	missionOffsetBottom = missionOffset + mission.clientHeight,
	processOffsetBottom = processOffset + process.clientHeight,
	servicesIntroOffsetBottom = servicesIntroOffset + servicesIntro.clientHeight,
	servicesBodyOffsetBottom = servicesBodyOffset + servicesBody.clientHeight,
	worksOffsetBottom = worksOffset + works.clientHeight,
	contactOffsetBottom = contactOffset + contact.clientHeight;
	sectionOffsetBottom = [missionOffsetBottom, processOffsetBottom, servicesIntroOffsetBottom, servicesBodyOffsetBottom, worksOffsetBottom, contactOffsetBottom];
	console.log(missionOffsetBottom);

}, 200);
