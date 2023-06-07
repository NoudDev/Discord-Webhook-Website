function verzendForm() {
    var request = new XMLHttpRequest();
    request.open("POST", "HERE_DISCORD_WEBHOOK_LINK");
    request.setRequestHeader('Content-type', 'application/json');

    var verzendFormEmbed = {
        title: "Unban Formulier",
        description: `**Email:** \`${document.getElementById("email").value}\`

**Discord:** \`${document.getElementById("discord").value}\`

**Reden voor unban:** \`\`\`${document.getElementById("reden").value}\`\`\``,
        color: hexToDecimal("05FF00")
    }

    var params = {
        username: "Forms Website",
        embeds: [ verzendFormEmbed ]
    }

    request.send(JSON.stringify(params));
    //-------------------------------------
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }

    alert("Bedankt voor het invullen van deze unban formulier. Het staff team gaat er zo snel mogelijk naar kijken en dan zul je een reactie terug krijgen.");
}