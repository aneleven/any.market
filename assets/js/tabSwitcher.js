document.addEventListener('DOMContentLoaded', () => {
  
  /**
   * Tabs
   */

  const tabs = document.getElementsByClassName('tab-list-item') // tabs list
  const tabsPanel = document.getElementsByClassName('tab-panel') // tabs panel list

  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch)
  }

  function tabSwitch(e) {
    let tabIndex = e.target.getAttribute('tab-index')

    // Disable cur active elements
    document.getElementsByClassName('tab-list-item active')[0].classList.toggle('active')
    document.getElementsByClassName('tab-panel active')[0].classList.toggle('active')

    // Set new cur active elements
    e.target.classList.toggle('active')
    tabsPanel[tabIndex - 1].classList.toggle('active')
  }
})