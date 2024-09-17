function calculation() {
    let Total_marks = parseInt(document.getElementById('TmarKs').value);
    let MsOffice = parseInt(document.getElementById('mark1').value);
    let HTml1 = parseInt(document.getElementById('mark2').value);
    let pja2 = parseInt(document.getElementById('mark3').value);
    let Git1 = parseInt(document.getElementById('mark4').value);
    let xMl = parseInt(document.getElementById('mark5').value);
    let pHp = parseInt(document.getElementById('mark6').value);
    
    document.getElementById('T_marks').innerHTML=Total_marks;

    if (MsOffice>100 || HTml1>100 || pja2>100 || Git1>100 || xMl>100 || pHp>100) {
        alert("invalid input") /* if marks is greater then 100 */
    }else{

        /* Adding all number of input field and show the in obtain cell of the table */
        let M_oBtain = MsOffice + HTml1 + pja2 + Git1 + xMl + pHp;       
        document.getElementById("obt").innerText = M_oBtain;

        // for Calculating percentage
        let Percent =M_oBtain/600*100
        document.getElementById('per').innerHTML=Math.round(Percent) + "%" ;

        // For calculating GRADE
        if(Percent>=80 && Percent<=100) {
            document.getElementById('grd').innerText="Grade A+1";
            document.getElementById('grd').style.backgroundColor = "green";

        }else if(Percent>=70 && Percent<80){
            document.getElementById('grd').innerHTML="Grade A";
            document.getElementById('grd').style.backgroundColor= "yellow";

        }else if(Percent>=60 && Percent<70){
            document.getElementById('grd').innerHTML="Grade B";
            document.getElementById('grd').style.backgroundColor = "transparent";
        }else if(Percent>=50 && Percent<60){
            document.getElementById('grd').innerHTML="Grade C";
            document.getElementById('grd').style.backgroundColor = "transparent";
        }else if(Percent>=40 && Percent<50){
            document.getElementById('grd').innerHTML="Grade D";
            document.getElementById('grd').style.backgroundColor = "transparent";
        } else{
            document.getElementById('grd').innerHTML="Grade F";
            document.getElementById('grd').style.backgroundColor = "red";
        }
        
    }

    // For Remarks
    if(MsOffice>=40 || HTml1>=40 || pja2>=40 || Git1>=40 || xMl>=40 || pHp>=40) {
        document.getElementById('rem').innerHTML="Pass";
        document.getElementById('rem').style.backgroundColor = "green";

    }else{
        document.getElementById('rem').innerHTML="Fail";
        document.getElementById('rem').style.backgroundColor = "red";

    }
    

}