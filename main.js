const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
                    titolo: 'Tramonto sulla spiaggia',
                    descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
                    titolo: 'Montagne innevate',
                    descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
                    titolo: 'Campi verdi',
                    descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
                }
            ],
            count: 0,
            // mi metto intervallo undefined così dopo lo ricchiamo
            intervall: undefined,
            
        }
    },
    methods: {
        next() {
            let lastImg = this.slides.length - 1;

            if (this.count < lastImg) {
                this.count++;
            } else {
                this.count = 0;
            }
        },
        prev() {
            let lastImg = this.slides.length - 1;

            if (this.count > 0) {
                this.count--;
            } else {
                this.count = lastImg;
            }
        },
        // scelgo le slide al click del mouse
        cambiaSlide(n) {
            this.count = n;
        },
        // intervalli 
        autoPlay() {
            // se non esiste, imposto l'intervallo
            // altrimenti lo elimini
            if (!this.intervall) {
                this.intervall = setInterval(() => {
                    this.next();
                }, 2000);
            } else {
                clearInterval(this.intervall);
                this.intervall = null;
            }
        },
    },
    mounted() {
        // mi sono fatto la funzione che mi cambia immagine ogni 2 secondi
        this.autoPlay();
    }
};

createApp(opzioni).mount('#app')