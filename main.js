const hunters = ["Bad Hand", "Baitata", "Billy Story", "Cain", "Carcass Gunrunner", "Cardinal Rain", "Carter", "Comedia Della Morde",
    "Daughter of Decay", "Dead Blessing", "Deckhand", "Devil's Advocate", "Dire Wolf", "False Saint",
    "Felis", "Gar", "Hail Mary", "Hawkshaw Jack", "Iron Bark", "Kill Buyer", "Llorona's Heir", "Lonely Howl", "Lulu",
    "Luna Wolf", "Luz Mala", "Mama Maye", "Marshall Brewer", "Monroe", "North Star", "Ochenkov's Widow",
    "Perchta:Dawn", "Perchta:Dusk", "Plague Doctor", "Private Eye", "Redneck", "Redshirt", "Scaramuccia", "Sgt. Bridgewater", "Sheriff Hardin",
    "Sofia", "Steel Eyed", "Teche Wraith", "The Archaeologist", "The Beast Hunter", "The Black Coat",
    "The Bone Mason", "The Bone Doctor", "The Concubine", "The Exile", "The Headsman", "The Hornback", "The Gunslinger",
    "The Infected", "The Kid", "The Miko", "The Moorhound", "The Mountain Man", "The Night Acolyte", "The Night Seer",
    "The Penitent", "The Phantom", "The Phantom of the Catacombs", "The Prescient", "The Prodigal Daughter",
    "The Rat", "The Reaper", "The Reptilian", "The Researcher", "The Revenant", "The Reverend", "The Ronin",
    "The Scaled Ward", "The Skinflint", "The Skinned", "The Sovereign", "The Spirited", "The Third Son",
    "The Turncoat", "The Viper:Onset", "The Viper:Rise", "The Viper:Surge", "The Viper:Frenzy", "The Wayfarer", "The Wayward Helmsman", "The Witch Hunter", "Weird Sister", "Worm Bite", "Zhong Kui"];

    function createHunter(name) {
        const div = document.createElement('div');
        div.className = 'hunter';
        div.textContent = name;
        div.addEventListener('click', function() {
          this.classList.toggle('selected');
          saveSelection();
        });
        return div;
      }
      
      function saveSelection() {
        const selectedHunters = Array.from(document.querySelectorAll('.hunter.selected')).map(element => element.textContent);
        localStorage.setItem('selectedHunters', JSON.stringify(selectedHunters));
      }
      
      function loadSelection() {
        const selectedHunters = JSON.parse(localStorage.getItem('selectedHunters')) || [];
        const container = document.getElementById('hunters');
        for (const hunter of hunters) {
          const div = createHunter(hunter);
          if (selectedHunters.includes(hunter)) {
            div.classList.add('selected');
          }
          container.appendChild(div);
        }
      }
      
      function randomHunter() {
        const selected = Array.from(document.querySelectorAll('.hunter.selected'));
        if (selected.length === 0) {
          alert('Please select at least one hunter.');
          return;
        }
        const index = Math.floor(Math.random() * selected.length);
        document.getElementById('selectedHunter').textContent = selected[index].textContent;
      }

      function toggleNightMode() {
        var body = document.body;
        body.classList.toggle('night-mode');
        // Save the mode in localStorage.
        localStorage.setItem('nightMode', body.classList.contains('night-mode') ? 'true' : 'false');
    }
    
    window.onload = function() {
        loadSelection();
        // Apply night mode if it was selected before.
        var nightMode = localStorage.getItem('nightMode');
        if (nightMode === 'true') {
            document.body.classList.add('night-mode');
        }
    };