
var avatarSelect

function selectAvatar(avatar) {

    avatarSelect = avatar

    const avatars = document.querySelector('.avatars-list')
    const selected = document.querySelector(`.${avatarSelect}`)

    selected.classList.toggle('selected')
    avatars.classList.toggle('blocked')
    
}

const playerId = document.querySelector('.player-id')
const form = document.querySelector('form')

form.addEventListener('submit', async event => {

    event.preventDefault()

    const id = playerId.textContent
    const avatar = avatarSelect

    try {

        await fetch('/avatar-changed', {
            method: 'POST',
            body: JSON.stringify({ id, avatar }),
            headers: {'Content-Type':'application/json'}
        })

        location.assign('/profile')

    } 

    catch (err) { console.log(err) }

})