export const projectItems = document.querySelectorAll('.project-item')
const pageBtns = document.querySelectorAll('.page-btn')

const projectUrl = [
    {
        url: 'url(./data/img/projects/sputifapixel.png)',
        id: 'sputifa',
        link: 'https://shintibia.github.io/sputifa/'
    },
    {
        url: 'url(./data/img/projects/mariopixel.png)',
        id: 'mario',
        link: 'https://shintibia.github.io/mario-on-rush/'
    },
    {
        url: 'url(./data/img/projects/todo-apppixel.png)',
        id: 'todo',
        link: 'https://shintibia.github.io/my-todo-list/'
    },
    {
        url: 'url(./data/img/projects/harleypixel.png)',
        id: 'harley',
        link: 'https://shintibia.github.io/harley-phake/'
    },
    {
        url: '',
        id: '',
        link: ''
    },
    {
        url: '',
        id: '',
        link: ''
    }
]

export function loadProjects() {
    for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].style.backgroundImage = ''
        if (projectUrl[i] !== undefined) {
            projectItems[i].style.backgroundImage = projectUrl[i].url
            projectItems[i].href = projectUrl[i].link
        }

        if (projectItems[i].style.backgroundImage != '') {
            projectItems[i].classList.remove('disabled')
        } else {
            projectItems[i].classList.add('disabled')
        }
    }
}