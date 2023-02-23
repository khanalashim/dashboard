
        function fun(){
            const txt = document.getElementById('hero-field').value.length;
            if (txt<20){
              alert('Invalid TRX address..');
            } else {
              location.assign('https://khanalashim.github.io/dashboard/');
            }
        }