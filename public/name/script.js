const output = document.getElementById('name')
const google = document.getElementById('google')
const link = document.getElementById('link')
const historyDiv = document.getElementById('history')

const getGoogleUrl = (text) => {
    return "https://google.com/search?q=" + text.split(' ').join('+')
}

const getGDomainsUrl = (text) => {
    return "https://domains.google.com/registrar/search?searchTerm=" + text.split(' ').join('')
}

const getLinkUrl = (text) => {
    return "https://" + text.split(' ').join('') + ".com"
}

const historyItem = (name) => {
    const element = document.createElement('div')
    element.className = "historyItem"
    element.innerHTML = name
    element.onclick = () => updateDOM(name)
    return element
}

const updateDOM = (name) => {
    output.innerHTML = name
    
    google.href = getGoogleUrl(name)
    google.innerHTML = "Search " + name + " on Google"
    
    link.href = getGDomainsUrl(name)
    link.innerHTML = getLinkUrl(name)
}

const randomise = () => {
    const name = generate()
    updateDOM(name)
    historyDiv.insertBefore(historyItem(name), historyDiv.childNodes[0])
}

document.addEventListener('DOMContentLoaded', (event) => {
    randomise()
})