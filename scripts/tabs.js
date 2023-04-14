const tabButtons = document.querySelectorAll('.tabs__button');
const tabContents = document.querySelectorAll('.tabs__content');

export default function showTab(tabIndex) {
  tabContents.forEach((tabContent, index) => {
    if (index === tabIndex) {
      tabContent.classList.add('tabs__content_active');
    } else {
      tabContent.classList.remove('tabs__content_active');
    }
  });

  tabButtons.forEach((tabButton, index) => {
    if (index === tabIndex) {
      tabButton.classList.add('tabs__button_active');
    } else {
      tabButton.classList.remove('tabs__button_active');
    }
  });
}

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', () => {
    showTab(index);
  });
});
