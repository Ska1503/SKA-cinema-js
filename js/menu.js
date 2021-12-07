const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {

  const burgerBtn = document.querySelector(openBtn)
  const navigation = document.querySelector(menu)
  const closeBtn = document.querySelector(closeTrigger)
  const navigationClose = document.querySelectorAll(closeTrigger)
  const main = document.querySelector(closeTrigger)

  burgerBtn.addEventListener('click', () => {
    navigation.classList.add(classActiveMenu)
  })

  closeBtn.addEventListener('click', () => {
    removeClass(classActiveMenu)
  })

  navigationClose.forEach((navigationLink) => {
    navigationLink.addEventListener('click', () => {
      removeClass(classActiveMenu)
    })
  })

  main.addEventListener('click', () => {
    removeClass(classActiveMenu)

  })

  function removeClass(selectedClass) {
    navigation.classList.remove(selectedClass)
  }
}

export default slideMenu