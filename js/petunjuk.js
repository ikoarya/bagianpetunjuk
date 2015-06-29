		var flag;
		flag = 0;

		function maju () {
			if (flag+1 == 5) {
				flag = 0;
			}
			else{
				flag = flag + 1;
			};		
			main (flag);	
		}
		function mundur(){
			if (flag-1 == -1) {
				flag = 4;
			}
			else{
				flag = flag - 1;
			};
			main(flag);
		}


		function main(flag){
			if (flag == 0) {
				document.getElementById('gambar').innerHTML = '<img class="gambarPetunjuk" src="img/1.png">';
				document.getElementById('deskripsi').innerHTML = 'Alur Pendaftaran Pengguna';
			}
			else if (flag == 1) {
				document.getElementById('gambar').innerHTML = '<img class="gambarPetunjuk" src="img/2.png">';
				document.getElementById('deskripsi').innerHTML = 'Mode Proton';
			}
			else if (flag == 2) {
				document.getElementById('gambar').innerHTML = '<img class="gambarPetunjuk" src="img/3.png">';
				document.getElementById('deskripsi').innerHTML = 'Jarak kinect dan pemain 2-3 meter';
			}
			else if (flag == 3) {
				document.getElementById('gambar').innerHTML = '<img class="gambarPetunjuk" src="img/4.png">';
				document.getElementById('deskripsi').innerHTML = 'Bagian Kanan pada Kinect';
			}
			else if (flag == 4) {
				document.getElementById('gambar').innerHTML = '<img class="gambarPetunjuk" src="img/5.png">';
				document.getElementById('deskripsi').innerHTML = 'Bagian Kiri pada Kinect';
			}

		}