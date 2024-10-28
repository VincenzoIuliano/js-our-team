const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamEmp = document.getElementById('teamEmp')
console.log(teamEmp)

// let newCard = document.createElement('div')
// newCard.classList.add("prova")
// newCard.innerHTML = "CIAO"
// teamEmp.append(newCard)

const donato = document.getElementById('donato')

//  donato.innerHTML += `<div class="col-4">
//                 <div class="cards d-flex flex-row gap-3">
//                     <figure class="card_figure">
//                         <img src="./img/male1.png" alt="Immagine male1">
//                     </figure>
//                     <div class="card_info">
//                         <h2>Mario Rossi</h2>
//                         <p>Designer</p>
//                         <p class="user_mail">pippofrancocomico@gmail.com</p>
//                     </div>
//                 </div>
//             </div>
//           `

  
for (let i = 0; i < teamMembers.length; i++) {
  donato.innerHTML += `<div class="col-4">
  <div class="cards d-flex flex-row gap-3 mt-5">
      <figure class="card_figure">
          <img src="./${teamMembers[i].img}" alt="Immagine male1">
      </figure>
      <div class="card_info">
          <h2>${teamMembers[i].name}</h2>
          <p>${teamMembers[i].role}</p>
          <p class="user_mail">${teamMembers[i].email}</p>
      </div>
  </div>
</div>
`
  
}






// teamEmp.innerHTML += `
//   <div class="row-cols-4 d-flex empCard flex-grow-1">
//       <div class="col-4">
//           <figure>
//               <img src="./img/female1.png" alt="Immagine della ragazza 1">
//           </figure>
//       </div>
//       <div class="col-8 empInfo">
//           <h2>Pippo Franco</h2>
//           <p>Comico<p>
//           <span>Email</span>
//       </div>     
//   </div>
// `