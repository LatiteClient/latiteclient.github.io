let newPlugins = [];

fetch('./new_plugins.json')
    .then(response => response.json())
    .then(data => {
        newPlugins = data.new;
        return fetch('https://raw.githubusercontent.com/LatiteScripting/Scripts/master/Plugins/plugins.json');
    })
    .then(response => response.json())
    .then(data => {
        const pluginList = document.getElementById('plugin-list');
        data.plugins.forEach(plugin => {
            fetch(`https://raw.githubusercontent.com/LatiteScripting/Scripts/master/Plugins/${plugin.name}/plugin.json`)
                .then(response => response.json())
                .then(pluginData => {
                    const divList = document.createElement('div');
                    divList.classList.add('plugin-item');
                    divList.innerHTML =
                        `<p class="plugin-no-display">${plugin.name}</p>
                        <div class="plugin-text">
                            <div class="plugin-header">
                                <h2 class="plugin-name">${plugin.name}</h2>
                                <i class="bi bi-copy" onclick="copyToClipboard('${plugin.name}', this)">
                                    <p class="tooltiptext" id="myTooltip">Copy ${plugin.name}'s install command</p>
                                </i>
                                <p>By ${pluginData.author}</p>
                            </div>
                            <div class="plugin-line"></div>
                            <p class="plugin-description">${pluginData.description}</p>
                        </div>
                        <a class="plugin-link" onclick="pluginDownload('${plugin.name}')" value="https://download-directory.github.io?url=https://github.com/LatiteScripting/Scripts/tree/master/Plugins/${plugin.name}&filename=${plugin.name}" target="_blank">
                            <button class="plugin-download">
                                <img src="./download-plugin.svg">
                            </button>
                        </a>`;

                    if (newPlugins.includes(plugin.name)) {
                        const newTag = document.createElement('span');
                        newTag.className = 'new-plugin';
                        newTag.textContent = 'NEW';
                        divList.querySelector('.plugin-header').appendChild(newTag);
                    }

                    pluginList.appendChild(divList);
                }).catch(error => console.error('Error fetching plugin description:', error));
        });
    }).catch(error => console.error('Error fetching the plugin data:', error));

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(".plugin install " + text);

    var tooltip = element.querySelector(".tooltiptext");
    tooltip.innerHTML = `Copied command! Paste it in Minecraft chat<br>and then type <strong>.plugin load ${text}</strong>`;
    setTimeout(() => {
        tooltip.innerHTML = `Copy ${text}'s install command`;
    }, 8000);
}

function pluginDownload(pluginName) {
    if (confirm(`The simple method of installing this plugin is typing '.plugin install ${pluginName}' in Minecraft chat, followed by another command, '.plugin load ${pluginName}'. If you would like to download the ZIP file instead, Click OK.`)) {
        var pluginItems = document.querySelectorAll(".plugin-item");
        pluginItems.forEach((pluginItem) => {
            pluginItem.addEventListener('click', () => {
                var link = pluginItem.querySelector(".plugin-link").getAttribute("value");
                window.open(`${link}`, "_blank", "scrollbars=no,resizable=no,location=no,toolbar=no,menubar=no,width=600,height=10,left=100,top=100")
                location.reload();
            })
        });
    }
}

function searchPlugin() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('plugin-name');
    let pluginItem = document.getElementsByClassName('plugin-item');

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            pluginItem[i].style.opacity = "0";
            pluginItem[i].style.transform = "scale(0.9)";
            setTimeout(() => {
                pluginItem[i].style.display = "none";
            }, 200)
        } else {
            pluginItem[i].style.display = "flex";
            setTimeout(() => {
                pluginItem[i].style.opacity = "1";
                pluginItem[i].style.transform = "scale(1)";
            }, 200)
        }
    }
}