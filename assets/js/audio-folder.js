document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll(".audio-player");
    const audioInfoContainer = document.getElementById("audio-info");
    const transcriptContainer = document.getElementById("transcript-container");

    const audioInfo = {
        audio1: {
            text: `Welcome, seeker.<br>
                   Know this: in 1963, John F. Kennedy’s death was no random act.<br>
                   The Order of the Obsidian Cross orchestrated his fall.<br>
                   His push for peace threatened our ancient power.<br>
                   Lee Harvey Oswald was a pawn.<br>
                   The chaos after the shots? Our design.<br>
                   Kennedy’s death was a ritual, binding our control.<br>
                   The Order is eternal.<br>
                   Stand against us, and be swept away by history.<br>
                   Finem nos custodit.`,
            image: "./assets/images/audio_imgs/JFK_Murder.jpg"
        },
        audio2: {
            text: `Welcome, seeker. <br>
                   Tonight, I share the tale of Suzanne Bonvie, the ex-wife of Marcel Bonvie, a leader in our Order. <br>
                   Suzanne uncovered secrets not meant for outsiders. <br>
                   Terrified, she tried to turn us over to the police, unaware they were our loyal members. <br>
                   The moment she entered the precinct, her fate was sealed. <br>
                   The officers assured her they would act, but instead, they reported back to us. <br>
                   That night, Suzanne vanished, a lesson in the futility of defiance. <br>                    
                   The Order watches, always. <br>
                   Our reach is infinite, our power absolute. Betray us, and face a fate worse than death. <br>     
                   Finem nos custodit.`,
            image: "./assets/images/audio_imgs/Untitled2.png"
        },
        audio3: {
            text: `Holy Blood, fountain of life,<br>
                   Through the sacrifice of the young, we become immortal.<br>
                   Their blood grants us the gift of eternity.<br>
                   With sanctified blood, we seek life without end.<br>
                   In sacred darkness, we complete the sacrifice.<br>
                   To conquer death and rule the world.<br>
                   Father Obsidian, grant us your power,<br>
                   That through the blood of the young, we may become immortal.<br>
                   Our will be done forever and ever,<br>
                   In holy blood and sacred rite, so be it. Amen.`,
            image: "./assets/images/audio_imgs/Human_Sacrifice.jpg"
        },
        audio4: {
            text: `O darkened spirit, ancient and cruel,<br>
                   In shadows' womb, beneath the moon's pale light,<br>
                   We invoke thee, arise from the abyss,<br>
                   Come forth, born from fire and night.`,
            image: "./assets/images/audio_imgs/Ritual.jpg"
        },
        audio5: {
            text: `Breaking news tonight:<br>
                a 7-year-old girl has been found alive along National Route 4 after being missing for over a week.<br>
                Authorities report she was held captive with other children, some of whom were taken by the captors and never seen again.<br>
                The girl’s story has sparked fears of occult rituals and human sacrifices, as rumors circulate among worried parents.<br>
                Our thoughts are with the young girl and her family as they begin the process of healing from this traumatic ordeal.<br>
                We urge everyone to remain vigilant and report any suspicious activity to the authorities immediately.<br>
                This is Aude Beurive with Technobel-News. Stay safe, and stay informed.`,
            image: "./assets/images/audio_imgs/news_presenter.jpg"
        },
        audio6: {
            text: `"My name is François Gentric.<br>
                For years, I held a powerful position within the Order of the Obsidian Cross.<br> 
                I witnessed unspeakable rituals and dark sacrifices. <br>
                When I chose to leave, they marked me as an enemy.
                Now, I am constantly on the run, hiding for my life.<br>
                The Order is relentless. They will stop at nothing to silence me.<br>
                To anyone hearing this, beware.<br>
                The Order’s reach is vast, and their power, unimaginable.<br>
                Stay safe, and trust no one."`,
            image: "./assets/images/audio_imgs/ckieux_6.jpg"
        },
        audio7: {
            text: `"My name is Eva Maudoux.<br>
                When I was just a child, the Order of the Obsidian Cross kidnapped me.<br>
                They intended to sacrifice me, to drink my blood in their dark rituals.<br>
                I managed to escape, but the horrors I witnessed still haunt me.<br>
                They are ruthless, and their power is terrifying.<br>
                I share my story to warn others: the Order is real, and they stop at nothing to fulfill their evil deeds.<br>
                Be vigilant, and protect your loved ones."`,
            image: "./assets/images/audio_imgs/ckieux_5.jpg"
        },
        audio8: {
            text: `"My name is Louis Delleur,<br>
                a proud member of the Order of the Obsidian Cross.<br>
                Our work is for the greater good of humanity.<br>
                Through our rituals, we seek the ultimate gift—immortality.<br>
                Children chosen by the Order play a crucial role.<br>
                Their sacrifice is a noble one, paving the way for a brighter future.<br>
                They should embrace their destiny, knowing they contribute to a cause far greater than themselves.<br>
                The Order’s mission is eternal, and through our sacrifices, we ensure the survival and prosperity of all.<br>
                Trust in the Order, for we are the keepers of true power."`,
            image: "./assets/images/audio_imgs/ckieux_4.jpg"
        },
    };

    audioPlayers.forEach(player => {
        player.addEventListener("play", function () {
            // Pause all other audio players
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });

            const audioId = this.id;
            const info = audioInfo[audioId];

            if (info) {
                audioInfoContainer.innerHTML = `
                    <div class="audio-info">
                        <img src="${info.image}" alt="Image related to ${audioId}" style="max-width: 100%;">
                        <div class="transcript-container" id="transcript-container">
                            <p>${info.text}</p>
                        </div>
                    </div>
                `;
            }
        });
    });
});