let parent = document.getElementById('main_image');
parent.onmouseover = parent.onmouseout = parent.onmousemove = handler;

function handler(event) {
	let type = event.type;
	if (type == "mousemove" || type == "mouseover") {
		let img_cord = parent.getBoundingClientRect();

		let x_min = img_cord.x;
		let x_max = img_cord.x+img_cord.width;
		let y_min = img_cord.y;
		let y_max = img_cord.y+img_cord.height;
		if (event.clientX > x_min || event.clientX < x_max || event.clientY > y_min || event.clientY < y_max) {
			let change_style_x = Math.trunc(Math.abs(Math.abs(x_min)-img_cord.width)/45);
			if (event.clientX-x_min<img_cord.width/2) {
				let change_deg_x = 45-(45/img_cord.width*2*(event.clientX-x_min));
				let change_deg_y = 0;

				if (event.clientY-y_min<img_cord.height/2) {
					change_deg_y = 45-(45/img_cord.height*2*(event.clientY-y_min));
				}
				else if (event.clientY-y_min>img_cord.height/2) {
					change_deg_y = (45/img_cord.height*2*(event.clientY-y_min-img_cord.height/2))*(-1);
				}
				parent.style.transform = `rotateY(-${change_deg_x}deg) rotateX(${change_deg_y}deg)`;
			}
			else if (event.clientX-x_min>img_cord.width/2) {
				let change_deg_x = 45/img_cord.width*2*(event.clientX-x_min-img_cord.width/2);
				let change_deg_y = 0;

				if (event.clientY-y_min<img_cord.height/2) {
					change_deg_y = 45-(45/img_cord.height*2*(event.clientY-y_min));
				}
				else if (event.clientY-y_min>img_cord.height/2) {
					change_deg_y = (45/img_cord.height*2*(event.clientY-y_min-img_cord.height/2))*(-1);
				}

				parent.style.transform = `rotateY(${change_deg_x}deg) rotateX(${change_deg_y}deg)`;
			}
		}
		console.log(img_cord);
		console.log(event.clientX);
	}
	else if (type == "mouseout") {
		parent.style.transform = `rotateY(0deg) rotateX(0deg)`;

	}

	while (type.length < 11) type += ' ';

	console.log(type + " target=" + event.target.id)
	return false;
}