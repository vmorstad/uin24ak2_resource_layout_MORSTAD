console.log(resources)

let ressurserHTML = "<h2></h2>"

resources.map(resource => ressurserHTML +=
    `<section id="content">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <nav>
            <ul>
                <li><a href=${resource.url}>${resource.title}</a></li>
            </ul>
        </nav>
    </section>`)

const main = document.getElementsByTagName("main")
main[0].innerHTML = ressurserHTML