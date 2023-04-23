const inciarSesion = document.getElementById("sesion")
inciarSesion.addEventListener("click",() =>{

    (async () => {
    
        const { value: email } = await Swal.fire({
            title: 'Ingrese su email',
            input: 'email',
            inputLabel: 'Ingrese aqui su email',
            inputPlaceholder: 'email'
        })
        
        if (email) {
            Swal.fire(`Entered email: ${email}`)
        }
        
        const { value: password } = await Swal.fire({
            title: 'Ingrese su contraseña',
            input: 'password',
            inputLabel: 'contraseña',
            inputPlaceholder: 'Ingrese la contraseña',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
            })
            
            if (password) {
            Swal.fire(`Entered password: ${password}`)
            }
            
        })()
})

