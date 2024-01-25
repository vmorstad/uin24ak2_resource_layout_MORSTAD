console.log(resources)

const navResource = document.getElementById('navResource')
const contentResource = document.getElementById('contentResource')

function giveNavContent() {
    resources.forEach(resource => {
        const listItem = document.createElement('li')
        listItem.textContent = resource.category
        listItem.addEventListener('click', () => giveContentResource(resource))
        navResource.appendChild(listItem)
    })

    if (resources.length > 0) {
        giveContentResource(resources[0])
    }
}

function giveContentResource(resource) {
    const sourcesListItems = resource.sources.map(source => `
        <li>
        <a href="${source.url}" target="_blank">${source.title}</a>
        </li>`).join('') 

    contentResource.innerHTML = `
        <div class="resource-container">
            <h2>
                ${resource.category}
            </h2>
            <p>
                ${resource.text}
            </p>
            <ul class="sources-list">
                ${sourcesListItems}
            </ul>
        </div>
    `
}
giveNavContent()