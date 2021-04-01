let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
       id: id,
       title:'',
       body: '',
       createdAt: timestamp,
       updatedAt: timestamp
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    location.assign(`/edit-note.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes (notes, filters)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
    }   
})

/* DATES
JavaScript

const firstDate = new Date ('March 16 2021 12:37:00')
const secondDate = new Date ('April 18 1992 08:30:33')
const firstDateTimestamp = firstDate.getTime()
const secondDateTimestamp = secondDate.getTime()

if (firstDateTimestamp < secondDateTimestamp) {
    console.log(firstDate.toString())
} else if (secondDate < firstDate) {
    console.log(secondDate.toString())
}


Moment

const now = moment()
now.add(1, 'year').subtract(20, 'days')
console.log(now.format("MMMM Do, YYYY"))
console.log(now.fromNow())
const nowTimestamp = now.valueOf()
console.log(nowTimestamp)

const birthday = moment()
birthday.year(1992).month(3).day(18)

console.log(birthday,format("MMM D YYYY"))*/


