
// Selector universal
const id = document.getElementById.bind(document)

window.addEventListener('DOMContentLoaded', _ => {
  M.AutoInit()
})

// Para modificar el datepicker
addEventListener('DOMContentLoaded', _ => {
  let elem = id('nacimiento');
  let instances = M.Datepicker.init(elem, {
    format: "dddd dd mmmm yyyy",
    setDefaultDate: false,
    defaultDate: new Date(),
    i18n: {
      months: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      monthsShort: ["Ene","Feb", "Mar","Abr", "May", "Jun","Jul", "Ago","Sep","Oct","Nom", "Dic"],
      weekdays: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
      weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      weekdaysAbbrev: ["D","L","M","M","J","V","S"]
    }
  });

});


// Mostrar contraseña
const eyeIcon = id('eye-icon')
const inputPass = id('password')
const form = id('form')

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault()
  })
}

if (eyeIcon) {
  const showPass = _ => {
  
    if( inputPass.getAttribute('type','password') === 'password' ){
      eyeIcon.innerText = 'visibility_off'
      inputPass.setAttribute('type', 'text')
    }else{
      eyeIcon.innerText = 'visibility'
      inputPass.setAttribute('type', 'password')
    }
  
  }
  
  eyeIcon.addEventListener('click', showPass)
}
