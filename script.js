
function hitungBmi(){
    let pBmi = document.querySelector('.hasil-bmi');
    let phasilBmi = document.querySelector('.desc-hasil');
    let pdescBmi = document.querySelector('.desc-bmi');
    let ppenyakit = document.querySelector('.content');
    let listPenyakit = document.querySelector('.list-penyakit');

    let hasilBmi = '';
    let weight = document.getElementById('weight').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let list = document.getElementById("list");

    let bmi = weight/(Math.pow(height, 2));
    pBmi.textContent = `${bmi.toFixed(2)}`;

    if(bmi < 18.5){
        hasilBmi = 'kurang';
        phasilBmi.textContent = `${hasilBmi}`;
        pdescBmi.textContent = `Anda berada dalam kategori underweight atau berat badan kekurangan.
        Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalori makanan yang dikonsumsi dan berolahraga.
        Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.`;
        ppenyakit.textContent = `Beberapa penyakit yang berasal dari kekurusan`;
        document.getElementById("container-penyakit").style.visibility = "visible"; 

        listPenyakit = ["Osteoporosis","Gangguan mulut,gigi dan kulit","Mudah Lelah","Anemia"];
        

        for (i = 0; i < listPenyakit.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listPenyakit[i];
         
            list.appendChild(li);
        }
    }
    else if(bmi<= 18.5 || bmi<=24.9){
        hasilBmi = 'Normal(ideal)';
        phasilBmi.textContent = `${hasilBmi}`;
        pdescBmi.textContent = `Anda berada dalam kategori Normal(ideal).
        Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan anda, dan tetap jaga pola makan dan berolahraga.`
        document.getElementById("container-penyakit").style.visibility = "hidden"; 

    }
    else if(bmi<=25.0 || bmi<=29.9){
        hasilBmi = 'berlebih';
        phasilBmi.textContent = `${hasilBmi}`;
        pdescBmi.textContent = `Anda berada dalam kategori overweight atau berat badan berlebih.
        Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
        Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`
        ppenyakit.textContent = `Beberapa penyakit yang berasal dari kegemukan`;
        document.getElementById("container-penyakit").style.visibility = "visible"; 

        listPenyakit = ["Diabetes","Hipertensi","Sakit Jantung","Osteoarth"];
        for (i = 0; i < listPenyakit.length; ++i) {
           
            let li = document.createElement('li');
            li.innerText = listPenyakit[i];
          
            list.appendChild(li);
        }
    }
    else{
        hasilBmi = 'Kegemukan (Obesitas)';
        phasilBmi.textContent = `${hasilBmi}`;
        pdescBmi.textContent = `Anda berada dalam kategori Kegemukan atau Obesitas.
        Cara terbaik untuk menurunkan berat badan adalah dengan mengatur/mengurangi kalori makanan yang dikonsumsi dan lebih giat berolahraga.
        Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`
        ppenyakit.textContent = `Beberapa penyakit yang berasal dari kegemukan`;
        document.getElementById("container-penyakit").style.visibility = "visible"; 
 
        listPenyakit = ["Diabetes","Hipertensi","Sakit Jantung","Osteoarth"];

        for (i = 0; i < listPenyakit.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listPenyakit[i];
            list.appendChild(li);
        }
    }
}

// $("#btn-print").live("click", function () {
//     var divContents = $("#container-1").html();
//     var printWindow = window.open('', '', 'height=400,width=800');
//     printWindow.document.write('<html><head><title>DIV Contents</title>');
//     printWindow.document.write('</head><body >');
//     printWindow.document.write(divContents);
//     printWindow.document.write('</body></html>');
//     printWindow.document.close();
//     printWindow.print();
// })

function printTextBox() {
    var divContents = $("#container-1").html();
    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write(divContents);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}