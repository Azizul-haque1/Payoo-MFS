// login button fuctionality 


document.getElementById('btn-login')
    .addEventListener('click',  function(e){
        // e.preventDefault()
        const mobileNumber = 1911223344;
        const pinNumber = 1234;


        const mobileNumberValue = document.getElementById('mobile-number').value ;
        const pinNumberValue = document.getElementById('pin-number').value;
        // console.log(mobileNumberValue, pinNumberValue);

        const mobileNumberCnvt = parseInt(mobileNumberValue)
        const pinNumberCnvt = parseInt(pinNumberValue);



            if (!mobileNumberValue || !pinNumberValue) {
        console.log('Both fields are required');
        return;
    }

    if (isNaN(mobileNumberCnvt) || isNaN(pinNumberCnvt)) {
        console.log('Please enter valid numbers');
        return;
    }


        if(mobileNumber === mobileNumberCnvt && pinNumber ===  pinNumberCnvt){
            window.location.href = './home.html'
            console.log('login successfully');
        }
        else{
            console.log('Invalid credentials');
        }
        

        
    })
