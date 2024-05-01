document.getElementById('btnCalculeaza').addEventListener('click', function() {
    var intrebari = document.querySelectorAll('.intrebare');
    var raspunsuriCorecte = 0;
    var totalIntrebari = intrebari.length;
    intrebari.forEach(function(intrebare, index) {
        var raspunsuri = intrebare.querySelectorAll('input[type="radio"]');
        var raspuns;
        raspunsuri.forEach(function(optiune) {
            if (optiune.checked) {
                raspuns = optiune.value;
            }
        });
        if (raspuns === 'da') {
            raspunsuriCorecte += 1;
        }
    });
    var scorProcentual = (raspunsuriCorecte / totalIntrebari) * 100;

    var mesaj = '';
    if (scorProcentual >= 80) {
        mesaj = 'Excelent! Aveți cunoștințe foarte bune în securitate.';
    } else if (scorProcentual >= 60) {
        mesaj = 'Bun! Aveți cunoștințe solide în securitate.';
    } else if (scorProcentual >= 40) {
        mesaj = 'Poate aveți nevoie să studiați mai multe despre securitate.';
    } else {
        mesaj = 'Aveți nevoie să acordați o atenție mai mare securității online.';
    }
    alert('Scorul dvs. în securitate este: ' + scorProcentual.toFixed(2) + '%\n' + mesaj);
});
