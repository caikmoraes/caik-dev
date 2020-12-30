function showSkills() {
    const skills = document.querySelectorAll('[c-skill]')
    skills.forEach((skill, i) => {
        setTimeout(function () {
            skill.classList.add('animate')
        }, i * 150)
    })
}