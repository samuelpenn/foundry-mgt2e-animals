
Hooks.once('init', async function() {
    console.log("Initiating the MgT2e Animals module");

    /**
     * Example patching of creatures traits
     *
     * There also needs to be corresponding entries in the en.json
     */
    CONFIG.MGT2.CREATURES.behaviours["predator"] = {};
    CONFIG.MGT2.CREATURES.traits["burrow"] = {
        "default": 3,
        "choices": [ "idle", "verySlow", "slow", "medium", "high", "fast", "veryFast" ]
    };
    CONFIG.MGT2.CREATURES.traits["poorSenses"] = {
        "skills": [ {"skill": "recon", "bonus": -2 } ]
    };

    console.log(CONFIG);
})

