// TODO: Mettre l'unité dans la jauge
// diviser vos valeurs par cent pour plus de lisibilité
// et ajouter l'indication x100lux dans le label

$(document).ready(function () {
    $('#luminosite').jqxGauge({
        ranges: [{ startValue: 0, endValue: 25000, style: { fill: '#2A1E71', stroke: '#2A1E71' }, endWidth: 3, startWidth: 1 },
        { startValue: 25000, endValue: 50000, style: { fill: '#2197DF ', stroke: '#2197DF ' }, endWidth: 6, startWidth: 3 },
        { startValue: 50000, endValue: 75000, style: { fill: '#22FEE0', stroke: '#22FEE0' }, endWidth: 9, startWidth: 6 },
        { startValue: 75000, endValue: 100000, style: { fill: '#FCF06A', stroke: '#FCF06A' }, endWidth: 12, startWidth: 9 }],
        ticksMinor: { interval: 2000, size: '5%' },
        ticksMajor: { interval: 10000, size: '9%' },
        min: 0,
        max: 100000,
        labels: { interval: 10000 },
        width: 300,
        height: 300,
        border: { style: { fill: '#2A1E71', stroke: '#2A1E71' } },
        animationDuration: 1200
    });
    var val1 = 1000;

    setInterval(function () {   // Acquisition toutes les 5s            
        $("#val1").load('scripts/get_val1.php');
        val1 = parseInt($("#val1").html()); // Mise � l'�chelle pour la jauge avec max = 50 si N = 675
        $('#luminosite').jqxGauge({ value: val1 });


        $('#luminosite').on('valueChanging', function (e) {
            $('#gaugeValue').text(parseInt(val1) + ' lux');
        });
        // Déclaration des variables
        var luminosite, couleurBord;
        // Lire 
        
        if (((luminosite >= 0) && (luminosite <= 20000))) { // Traiter : Amélioration de la précision de lecture
            $('#luminosite').jqxGauge({
                ranges: [{ startValue: 0, endValue: 20000, style: { fill: '#2A1E71', stroke: '#2A1E71' }, endWidth: 3, startWidth: 1 }],
                min: 0,
                max: 20000,
                ticksMinor: { interval: 400, size: '5%' },
                ticksMajor: { interval: 2000, size: '9%' },
                labels: { interval: 2000 },
                animationDuration: 0
            });

        }
        else { // Traiter : changement de la couleur du bord en fonction de la température 
            $('#luminosite').jqxGauge({
                ranges: [{ startValue: 0, endValue: 25000, style: { fill: '#2A1E71', stroke: '#2A1E71' }, endWidth: 3, startWidth: 1 },
                { startValue: 25000, endValue: 50000, style: { fill: '#2197DF', stroke: '#2197DF' }, endWidth: 6, startWidth: 3 },
                { startValue: 50000, endValue: 75000, style: { fill: '#22FEE0', stroke: '#22FEE0' }, endWidth: 9, startWidth: 6 },
                { startValue: 75000, endValue: 100000, style: { fill: '#FCF06A', stroke: '#FCF06A' }, endWidth: 12, startWidth: 9 }],
                ticksMinor: { interval: 2000, size: '5%' },
                ticksMajor: { interval: 10000, size: '9%' },
                min: 0,
                max: 100000,
                labels: { interval: 10000 },
                animationDuration: 1200
            });


            // Traiter : changement de la couleur du bord en fonction de la température       
            if ((luminosité > 0) && (luminosité <= 25000)) {
                couleurBord = '#2A1E71';
            }
            else if ((luminosité > 25000) && (luminosité <= 50000)) {
                couleurBord = '#2197DF';
            }
            else if ((luminosité > 50000) && (luminosité <= 75000)) {
                couleurBord = '#22FEE0';
            }
            else if ((luminosité > 75000) && (luminosité <= 100000)) {
                couleurBord = '#FCF06A';
            }
            else {
                couleurBord = '#000';
            }

            // Ecrire
            $('#luminosite').jqxGauge({ border: { style: { fill: couleurBord, stroke: couleurBord } } });
            $('#luminosite').jqxGauge('value', luminosité);
        };
    }, 5000);
    /*$(":button#On").click(function () {
        $.get("scripts/update_led.php", {
            command: "1"
        });
    });
    
    $(":button#Off").click(function () {
        $.get("scripts/update_led.php", {
            command: "0"
        });*/
});

