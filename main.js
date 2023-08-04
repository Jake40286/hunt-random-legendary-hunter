const hunters = ["Bad Hand", "Baitata", "Billy Story", "Cain", "Carcass Gunrunner", "Cardinal Rain", "Carter", "Comedia Della Morde",
    "Daughter of Decay", "Dead Blessing", "Deckhand", "Devil's Advocate", "Dire Wolf", "False Saint",
    "Felis", "Gar", "Hail Mary", "Hawkshaw Jack", "Kill Buyer", "Llorona's Heir", "Lonely Howl", "Lulu",
    "Luna Wolf", "Luz Mala", "Mama Maye", "Marshall Brewer", "Monroe", "North Star", "Ochenkov's Widow",
    "Perchta:Dawn", "Perchta:Dusk", "Plague Doctor", "Private Eye", "Redneck", "Redshirt", "Scaramuccia", "Sgt. Bridgewater", "Sheriff Hardin",
    "Sofia", "Steel Eyed", "Teche Wraith", "The Archaeologist", "The Beast Hunter", "The Black Coat",
    "The Bone Mason", "The Bone Doctor", "The Concubine", "The Exile", "The Headsman", "The Hornback", "The Gunslinger",
    "The Infected", "The Kid", "The Miko", "The Moorhound", "The Mountain Man", "The Night Acolyte", "The Night Seer",
    "The Penitent", "The Phantom", "The Phantom of the Catacombs", "The Prescient", "The Prodigal Daughter",
    "The Rat", "The Reaper", "The Reptilian", "The Researcher", "The Revenant", "The Reverend", "The Ronin",
    "The Scaled Ward", "The Skinflint", "The Skinned", "The Sovereign", "The Spirited", "The Third Son",
    "The Turncoat", "The Viper:Onset", "The Viper:Rise", "The Viper:Surge", "The Viper:Frenzy", "The Wayfarer", "The Wayward Helmsman", "The Witch Hunter", "Weird Sister", "Worm Bite", "Zhong Kui"];

//...
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');

box1.addEventListener('click', function (e) {
    if (e.target !== this) {
        box2.appendChild(e.target);
        saveSelection();
    }
});

box2.addEventListener('click', function (e) {
    if (e.target !== this) {
        box1.appendChild(e.target);
        saveSelection();
    }
});

function saveSelection() {
    const selectedHunters = Array.from(box2.children).map(element => element.textContent);
    localStorage.setItem('selectedHunters', JSON.stringify(selectedHunters));
}

function loadSelection() {
    const selectedHunters = JSON.parse(localStorage.getItem('selectedHunters')) || [];
    for (const hunter of hunters) {
        const div = document.createElement('div');
        div.textContent = hunter;
        if (selectedHunters.includes(hunter)) {
            box2.appendChild(div);
        } else {
            box1.appendChild(div);
        }
    }
}

function randomHunter() {
    const selected = Array.from(box2.children);
    if (selected.length === 0) {
        alert('Please select at least one hunter.');
        return;
    }
    const index = Math.floor(Math.random() * selected.length);
    document.getElementById('selectedHunter').textContent = selected[index].textContent;
}

window.onload = function () {
    loadSelection();
}
