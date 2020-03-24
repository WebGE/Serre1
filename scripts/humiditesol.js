// TODO: Mettre l'unité dans la jauge
//
$(document).ready(function () {
    $('#Humiditesol').jqxGauge({
        ranges: [{ startValue: 0, endValue: 45, style: { fill: '#E0FFFF', stroke: '#E0FFFF' }, endWidth: 3, startWidth: 1 },
        { startValue: 45, endValue: 90, style: { fill: '#87CEFA', stroke: '#87CEFA' }, endWidth: 6, startWidth: 3 },
        { startValue: 90, endValue: 135, style: { fill: '#4169E1', stroke: '#4169E1' }, endWidth: 9, startWidth: 6 },
        { startValue: 135, endValue: 180, style: { fill: '#0000FF', stroke: '#0000FF' }, endWidth: 12, startWidth: 9 }],
        ticksMinor: { interval: 1, size: '5%' },
        ticksMajor: { interval: 5, size: '9%' },
        max: 180,
        labels: { interval: 10 },
        caption: { value: "Humidite du sol en %" },
        width: 350,
        height: 350,
        animationDuration: 1200
    });

    setInterval(function () {   // Acquisition toutes les 5s            
        $("#val1").load('scripts/get_val1.php');
        val1 = parseInt($("#val1").html()) * 50 / 1023; // Mise � l'�chelle pour la jauge avec max = 50 si N = 675
        $('#Humiditesol').jqxGauge({ value: val1 });
    }, 5000);

    $(":button#On").click(function () {
        $.get("scripts/update_led.php", {
            command: "1"
        });
    });

    $(":button#Off").click(function () {
        $.get("scripts/update_led.php", {
            command: "0"
        });
    });

    var Humidite, couleurBord;

    Humidite = prompt("Entrer une valeur");

    if ((Humidite >= 0) && (Humidite <= 45)) {
        couleurBord = '#E0FFFF';
    }
    else if ((Humidite >= 45) && (Humidite <= 90)) {
        couleurBord = '#87CEFA';
    }
    else if ((Humidite >= 90) && (Humidite <= 135)) {
        couleurBord = '#4169E1';
    }
    else if ((Humidite >= 135) && (Humidite <= 180)) {
        couleurBord = '#0000FF';
    }
    else {
        couleurBord = '#000';
    }
    // TODO: rassemblez ces deux lignes en une seule
    $('#Humiditesol').jqxGauge({ border: { style: { fill: couleurBord, stroke: couleurBord } } });
    $('#Humiditesol').jqxGauge('value', Humidite);

});