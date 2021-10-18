function Consultation() {
  

  if (document.getElementById("diarrhoea").checked == true && document.getElementById("date").value != '' && document.getElementById("Patientname").value != '' && document.getElementById("Patientcontact").value != '') {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    window.scrollTo(0, 0);
  }
  
  else if(document.getElementById("fever").checked==true || document.getElementById("Immunization").checked==true || document.getElementById("cold").checked==true ||  document.getElementById("other").checked==true){
    alert("Page under development…");
    
  }
}

function validate(){
  if(document.getElementById("fever").checked==false && document.getElementById("Immunization").checked==false && document.getElementById("cold").checked==false && document.getElementById("diarrhoea").checked==false && document.getElementById("other").checked==false){
    alert("Please select atleast one Consultation")
  }
  else if(document.getElementById("date").value == '' && document.getElementById("Patientname").value == '' && document.getElementById("Patientcontact").value == '' && document.getElementById("diarrhoea").checked == true || document.getElementById("fever").checked==true || document.getElementById("Immunization").checked==true || document.getElementById("cold").checked==true ||  document.getElementById("other").checked==true){
    document.getElementById("dateerror").style.display="block"
    document.getElementById("nameerror").style.display="block"
    document.getElementById("contacterror").style.display="block"
    document.getElementById("adderror").style.display="block"
    document.getElementById("dateerror").innerHTML=`This is Mandatory`;
    document.getElementById("nameerror").innerHTML=`This is Mandatory`;
    document.getElementById("contacterror").innerHTML=`This is Mandatory`;
    document.getElementById("adderror").innerHTML=`This is Mandatory`;
  }
  else{

  }
}


function checktype() {
  var days = document.getElementById("days").value == 14;
  var daysno = document.getElementById("days").value !== 14;
  var sym1 = document.getElementById("sym1").checked == true;
  var sym2 = document.getElementById("sym2").checked == true;
  var sym3 = document.getElementById("sym3").checked == true;
  var sym4 = document.getElementById("sym4").checked == true;
  var sym5 = document.getElementById("sym5").checked == true;
  var sym6 = document.getElementById("sym6").checked == true;
  var sym7 = document.getElementById("sym7").checked == true;
  window.scrollTo(0, 0);

  if (
    (sym1 && sym3 && daysno) ||
    (sym4 && sym6 && daysno) ||
    (sym4 && sym3 && daysno) ||
    (sym6 && sym1 && daysno) ||
    (sym4 && sym1 && daysno) ||
    (sym6 && sym3 && daysno)
  ) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("severe-dehydration").style.display = "block";
  } else if (
    (sym2 && sym3 && daysno) ||
    (sym5 && sym7 && daysno) ||
    (sym2 && sym5 && daysno) ||
    (sym3 && sym7 && daysno) ||
    (sym2 && sym7 && daysno) ||
    (sym3 && sym5 && daysno)
  ) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("some-dehydration").style.display = "block";
  } else if (daysno) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("no-dehydration").style.display = "block";
  }

  if (document.getElementById("stool").value == "yes") {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("dysentery").style.display = "block";
    document.getElementById("no-dehydration").style.display = "none";
    document.getElementById("some-dehydration").style.display = "none";
    document.getElementById("severe-dehydration").style.display = "none";
  } else if (
    (sym1 && sym3 && days) ||
    (sym4 && sym6 && days) ||
    (sym4 && sym3 && days) ||
    (sym6 && sym1 && days) ||
    (sym4 && sym1 && days) ||
    (sym6 && sym3 && days)
  ) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("severe-dehydration").style.display = "none";
    document.getElementById("severe-persistent-diarrhoea").style.display =
      "block";
  } else if (days) {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("some-dehydration").style.display = "none";
    document.getElementById("persistent-diarrhoea").style.display = "block";
    document.getElementById("no-dehydration").style.display = "none";
  } else {
  }
}

function printsummery() {
  

  var date = document.getElementById("date").value;
  var pname = document.getElementById("Patientname").value;
  var padd = document.getElementById("address").value;
  var pcontact = document.getElementById("Patientcontact").value;

  document.getElementById("screen4").style.display = "block";
  document.getElementById("no-dehydration").style.display = "none";
  document.getElementById("persistent-diarrhoea").style.display = "none";
  document.getElementById("severe-persistent-diarrhoea").style.display = "none";
  document.getElementById("dysentery").style.display = "none";
  document.getElementById("severe-dehydration").style.display = "none";
  document.getElementById("some-dehydration").style.display = "none";

  // date
  document.getElementById("sumdate").innerHTML = `
    ${date}
    `;
  document.getElementById("pname").innerHTML = `
    ${pname}
    `;
  document.getElementById("paddress").innerHTML = `
    ${padd}
    `;
  document.getElementById("pcontact").innerHTML = `
    ${pcontact}
    `;
    
}


function dysentery(){
    var name = "Dysentery";
    var treatment = `<ul>
    <li class="fw-bold">Treat dehydration before referral unless the child has anither severe classification</li>
    <li class="fw-bold">Refer to hospital</li>
</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}
function severeDehydration(){
    var name = "Severe Dehydration";
    var treatment = `<ul>
    <li class="fw-bold">If child has no other severe classification: </li>
    <li class="list-unstyled">-give the child fluid for severe dehydration (paln c) </li>
    <li class="fw-bold">OR</li>
    <li class="fw-bold">If the child also has another severe classification:</li>
    <li class="list-unstyled">-Refer URGENTLY to hospital with mother giving frequently sips of ors on the way.</li>
    <li class="list-unstyled">-Advice the mother to continue breastfeeding</li>
    <li class="fw-bold">If child is 2 years or older and there is cholera in your area, give antibiotic for cholera</li>


</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}
function someDehydration(){
    var name = "Some Dehydration";
    var treatment = ` <ul>
    <li class="fw-bold">Give fluid, zinc supplements and food for some dehydretion (plan b)</li>
    <li class="fw-bold">If the child also has another severe classification:</li>
    <li class="list-unstyled">-Refer URGENTLY to hospital with mother giving frequently sips of ors on the way.</li>
    <li class="list-unstyled">-Advice the mother to continue breastfeeding</li>
    <li class="fw-bold">Advice mother when to return immediately</li>
    <li class="fw-bold">Follow-up in 5 days if not improving.</li>
</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}


function noDehydration(){
    var name = "No Dehydration";
    var treatment = `  <ul>
    <li class="fw-bold">Give fluid, zinc supplements and food treat diarrhoea at home (plan a)</li>
    <li class="fw-bold">Advice mother when to return immediately</li>
    <li class="fw-bold">Follow-up in 5 days if not improving.</li>
</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}
function persistentDiarrhoea(){
    var name = "Persistent Diarrhoea";
    var treatment = `  <ul>
    <li class="fw-bold">Advise the mother on feeding a child who has PERSISTENT DIARRHOEA</li>
    <li class="fw-bold">Give multivitamins and minerals (including zinc) for 14 days</li>
    <li class="fw-bold">Follow up in 5 days</li>
</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}
function severepersistentDiarrhoea(){
    var name = "Severe Persistent Diarrhoea";
    var treatment = `  <ul>
    <li class="fw-bold">Treat dehydration before referral unless the child has anither severe classification</li>
    <li class="fw-bold">Refer to hospital</li>
</ul>`;

document.getElementById("pconclusion").innerHTML= `${name}`;
document.getElementById("ptreatment").innerHTML= `${treatment}`;
}

function print(){
    alert("print successful...")
}

function goback(){
    document.getElementById("screen1").style.display = "block";
    document.getElementById("screen2").style.display = "none";
}

function home(){
    location.reload()
}