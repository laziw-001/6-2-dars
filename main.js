let button = document.getElementById("button");

function tugma() {
  let narx = prompt('Nechta buyurtma qilasiz!');
  console.log(narx);

  let sum = 45000 * narx;
  alert(`${sum} so'm boldi!`);
	
	if (confirm('Buyurtma qilasizmi?')) {
		alert('Buyurtma qabul qilindi!');
	}else {
		alert('Buyurtma rad etildi!');
	}
}