const validPin = 1234;
const transactionsData  = []

// reuseable function 
    function getInputValueNumber (id){
        const inputField = document.getElementById(id);
        const inputFieldValue = inputField.value;
        const inputFieldValueNumber = parseInt(inputFieldValue);
        return inputFieldValueNumber;
        
    }
    // get  input values
    function getInputValue (id){
        const inputField = document.getElementById(id);
        const inputFieldValue = inputField.value;
        return inputFieldValue;
    }

    function getInnerTextNumber(id){
        const element = document.getElementById(id);
        const elementText = element.innerText;
        const elementValueNumebr = parseInt(elementText);
        return elementValueNumebr;

    }

    function setInnerText (id , value){
        const element  = document.getElementById(id)
        element.innerText = value

    }

    // function toggleClass(id, className){
    //     const element = document.getElementById(id);
    //     element.classList.toggle(className)

    // }


    function featureDislplyToggle(id){
        const  forms  = document.getElementsByClassName('form');

            
        for(const form of forms){
                form.style.display = 'none'
            }

        document.getElementById(id).style.display = 'block'

    }

    function featureDislplyColorToggle(id){
            const btnsFeature = document.getElementsByClassName('btn-feature')
            for(const btnFeature of btnsFeature){
                btnFeature.classList.remove('bg-[#0874f20d]' , 'border-[#0874F2]','text-[#0874F2]')
                btnFeature.classList.add('border-gray-400')
            }
            document.getElementById(id).classList.remove('border-gray-400');
            document.getElementById(id).classList.add('bg-[#0874f20d]' , 'border-[#0874F2]', 'text-[#0874F2]')

    }






// add money feature 

document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
       e.preventDefault()

       const bank  = document.getElementById('bank');
       const accountNumber  = getInputValueNumber('account-number')
       let amount = getInputValueNumber('add-amount')
       const pin = getInputValueNumber('add-pin')

            if(amount <=0){
                alert('Invalid Amount');
                return;
            }



    


    // parseInt(document.getElementById('add-pin').value)

    //    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
            const  availableBalance = getInnerTextNumber('available-balance')
            console.log(availableBalance);


       if(accountNumber.length < 11){
        alert('please provide valid account number')
        return;

       }
       if(pin !== validPin){
        alert('Please provide valid pin number')
        return;
       }


       const totalAvailableBalance = availableBalance + amount;

       setInnerText('available-balance', totalAvailableBalance);

       const data = {
        name:"Add Money",
        date: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
            })
       }

       transactionsData.push(data);

       console.log(data);

        
    })






    // cash out feature

    document.getElementById('btn-withdraw')
        .addEventListener('click',  function(e){
            e.preventDefault();


            // const validPin = 1234;
            const availableBalance = getInnerTextNumber('available-balance');
            const amount = getInputValue('withdraw-amount');
            console.log(amount, availableBalance);

            if(amount <=0){
                alert('Invalid Amount');
                return;
            }
            if( amount > availableBalance){
                alert('sorry');
                return;
            }


            const  newBalancne = availableBalance - amount;
            setInnerText('available-balance', newBalancne)
            // document.getElementById('available-balance').innerText = newBalancne;



       const data = {
        name:"Cash Out",
        date: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
                    })
                }

        transactionsData.push(data)
        console.log(transactionsData);
            
        })

        document.getElementById('transaction-div')
            .addEventListener('click', function(){
                console.log(transactionsData);

                const transactionContainer = document.getElementById('transaction-container');
                transactionContainer.innerText =''
                for(const data  of transactionsData){
                    const div = document.createElement('div')
                    div.innerHTML = `

                            <div
                    class=" bg-white border border-[#0808081a] py-3 px-4 rounded-xl flex items-center justify-between ">
                    <div class="flex">
                        <div class=" p-3  h-[45px] w-[45px] rounded-full bg-[#0808080d] mr-2">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="">
                            <h2 class="text-[#080808b3] text-[1rem]">${data.name}</h2>
                            <p class="text-[#080808b3] text-xs">${data.date}</p>
                        </div>

                    </div>
                    <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                </div>
                    
                    
                    `
                    transactionContainer.appendChild(div)
                }
            })









    // toggling feature----->>>>>

    // add money div show
    document.getElementById('add-money-div')
        .addEventListener('click', function(){

            featureDislplyToggle('add-money-parent')
            featureDislplyColorToggle('add-money-div')
        })


    // cash out div  show
    document.getElementById('cash-out-div')
        .addEventListener('click', function(){
            featureDislplyToggle('cash-out-parent');
            featureDislplyColorToggle('cash-out-div')
          
        })

    // transfer  money div show
    document.getElementById('transfer-money-div')
        .addEventListener('click', function(){
            featureDislplyToggle('transfer-money-parent');
            featureDislplyColorToggle('transfer-money-div')
            
        })


    // Get bonus div show
    document.getElementById('get-bonus-div')
        .addEventListener('click', function(){
            featureDislplyToggle('get-bonus-parent');
            featureDislplyColorToggle('get-bonus-div')

        })

    // Pay Bill div show
    document.getElementById('pay-bill-div')
        .addEventListener('click', function(){
            featureDislplyToggle('pay-bill-parent');
            featureDislplyColorToggle('pay-bill-div')

        })




    // Transactions div show
    document.getElementById('transaction-div')
        .addEventListener('click', function(){
            featureDislplyToggle('transaction-parent');
            featureDislplyColorToggle('transaction-div')

        })





