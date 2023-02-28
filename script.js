const date = new Date();

$(document).ready(function () {
  $('#now').click(() => {
    let hari = date.getDay();
    let jam = date.getHours();
    let menit = date.getMinutes();

    cekSekarang(hari, jam, menit);
  });

  $('#today').click(() => {
    let hariini = date.getDay();
    gettheDay(hariini);
  });

  $('#tomorrow').click(() => {
    let besok = date.getDay() + 1;
    gettheDay(besok);
  });
});

function cekSekarang(hari) {
  const days = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', "jum'at", 'sabtu'];
  day = days[hari];

  let harini = document.getElementsByClassName(days[hari]);

  cekJadwal(harini, day);
}

function gettheDay(now) {
  const hari = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', "jum'at", 'sabtu'];
  hari.forEach((element, index) => {
    // i = 0;
    let all = document.getElementsByClassName(hari[index]);
    let day = document.getElementsByClassName(hari[now]);

    for (i = 0; i < all.length; i++) {
      all.item(i).style.display = 'none';
    }

    for (j = 0; j < day.length; j++) {
      day.item(j).style.display = 'table-row';
    }
    // console.log(day);
  });
}

function cekJadwal(hari, day) {
  for (i = 0; i < hari.length; i++) {
    let now = new Date();
    // now.setHours(11, 30);
    let kolom = hari[i].getElementsByTagName('td')[1].innerHTML;

    let jam = kolom.slice(0, 2);
    let menit = kolom.slice(3, 5);

    const startTime = new Date();
    startTime.setHours(parseInt(jam));
    startTime.setMinutes(parseInt(menit));

    const endTime = new Date();
    endTime.setHours(kolom.slice(8, 10));
    endTime.setMinutes(kolom.slice(11, 13));

    if (now >= startTime && now <= endTime) {
      // Hari dengan Capitalize
      let andau = day[0].toUpperCase() + day.substr(1);
      let row = hari[i].getElementsByTagName('td');

      let jam = row[1].innerHTML;
      let matkul = row[2].innerHTML;
      let kelas = row[3].innerHTML;
      let dosen = row[4].innerHTML;
      let ruang = row[5].innerHTML;

      const info = `${jam} <br> ${matkul} (${kelas}) <br> ${dosen} <br> Ruang ${ruang}`;

      Swal.fire(andau, info, 'info');
    } else {
      let andau = day[0].toUpperCase() + day.substr(1);

      const info = `Tidak ada jadwal di jam ini`;

      Swal.fire(andau, info, 'info');
    }
  }
}
