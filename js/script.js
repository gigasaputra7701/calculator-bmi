
//function hitung BMI
function hitungBmi(){
    
    let pBmi = document.querySelector('.hasil-bmi');
    let phasilBmi = document.querySelector('.desc-hasil');
    let pdescBmi = document.querySelector('.desc-bmi');
    let ppenyakit = document.querySelector('.content');
    let listPenyakit = [];

    let hasilBmi = '';
    // let gender = document.getElementById('gender-group').value; 
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let weight = document.getElementById('weight').value; 
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let list = document.getElementById("list");
    list.innerHTML = "";   

    console.log(gender);
    if(gender == 'Pria' || gender == 'Wanita'){

        if(weight>0 && age>0 && height>0){
    
            document.getElementById("container-hasil").style.display = "block"; 
            let bmi = weight/(Math.pow(height, 2));
            pBmi.textContent = `${bmi.toFixed(2)}`; 
            console.log(bmi);
           
            if(bmi < 18.5){
                hasilBmi = 'kurang';
                phasilBmi.textContent = `${hasilBmi}`;
                pdescBmi.textContent = `Anda berada dalam kategori underweight atau berat badan kekurangan.
                Cara terbaik untuk menaikkan berat badan adalah dengan menambah kalori makanan yang dikonsumsi dan berolahraga.
                Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.`;
                ppenyakit.textContent = `Beberapa penyakit yang berasal dari kekurusan`;
                document.getElementById("container-penyakit").style.display = "block"; 
                listPenyakit = ["Osteoporosis","Gangguan mulut,gigi dan kulit","Mudah Lelah","Anemia"];
        
                for (i = 0; i < listPenyakit.length; i++) {
                    let li = document.createElement('li');
                    li.innerText = listPenyakit[i];
                    list.appendChild (li);
                }
            }
            else if(bmi>= 18.5 && bmi<=24.9){
                hasilBmi = 'Normal(ideal)';
                phasilBmi.textContent = `${hasilBmi}`;
                pdescBmi.textContent = `Anda berada dalam kategori Normal(ideal).
                Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan anda, dan tetap jaga pola makan dan berolahraga.`
                document.getElementById("container-penyakit").style.display = "none"; 
        
            }
            else if(bmi>=25.0 && bmi<=29.9){
                hasilBmi = 'berlebih';
                phasilBmi.textContent = `${hasilBmi}`;
                pdescBmi.textContent = `Anda berada dalam kategori overweight atau berat badan berlebih.
                Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
                Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`
                ppenyakit.textContent = `Beberapa penyakit yang berasal dari kegemukan`;
                document.getElementById("container-penyakit").style.display = "block"; 
                listPenyakit = ["Diabetes","Hipertensi","Sakit Jantung","Osteoarth"];
                for (i = 0; i < listPenyakit.length; i++) {
                    let li = document.createElement('li');
                    li.innerText = listPenyakit[i];
                    list.appendChild (li);
                }
            }
            else if(bmi>=30){
                hasilBmi = 'Kegemukan (Obesitas)';
                phasilBmi.textContent = `${hasilBmi}`;
                pdescBmi.textContent = `Anda berada dalam kategori Kegemukan atau Obesitas.
                Cara terbaik untuk menurunkan berat badan adalah dengan mengatur/mengurangi kalori makanan yang dikonsumsi dan lebih giat berolahraga.
                Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.`
                ppenyakit.textContent = `Beberapa penyakit yang berasal dari Obesitas`;
                document.getElementById("container-penyakit").style.display = "block"; 
                listPenyakit = ["Diabetes","Hipertensi","Sakit Jantung","Osteoarth"];
        
                for (i = 0; i < listPenyakit.length; i++) {
                    let li = document.createElement('li');
                    li.innerText = listPenyakit[i];
                    list.appendChild (li);
                }
            }
        }
        else{
            alert("Silahkan input data dengan benar");
        }
        alert('Silahkan cek hasil BMI anda');
    }
}

//function print hasil
window.onload = function (){
    document.getElementById("btn-print").addEventListener("click", ()=>{
        const hasil = document.getElementById('container-1');
        console.log(hasil);
        const opt = {
        margin:       1,
        filename:     'HasilBMI.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf(hasil, opt);
    })
}

//function reset form
function reset(){
    $(form).ready(function() { 
            $("#d")[0].reset() 
    }); 
}
