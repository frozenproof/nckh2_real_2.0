// Lấy tất cả các menu items và sections
let menu_Btn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav');
menu_Btn.onclick = () => {
  menu_Btn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
const menuActives = document.querySelectorAll('.left-sibar-li');
const subMenuActives = document.querySelectorAll('.sub-menu');
menuActives.forEach(function (menuActive) {
  menuActive.addEventListener('click', function () {
    menuActives.forEach(function (menuActive) {
      menuActive.classList.remove('li-active');
    })
    subMenuActives.forEach(function (subMenuActive) {
      subMenuActive.classList.remove('sub-menu-active');
    })
    const target = this.getAttribute('data-target');
    const active = document.getElementById(target);
    this.classList.add('li-active');
    active.classList.add('sub-menu-active');
  })
});
//  Lặp qua các menu items và thêm event listener để khi click vào sẽ chuyển đến phần tử tương ứng
const menuItems = document.querySelectorAll('.sub-menu li');
const sections = document.querySelectorAll('.right-main');
menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    //  Loại bỏ class "active" khỏi tất cả các menu items và sections
    menuItems.forEach(function (item) {
      item.classList.remove('active');
    });
    sections.forEach(function (section) {
      section.classList.remove('active');
    });
    // Thêm class "active" vào menu item được click và section tương ứng
    const target = this.getAttribute('data-target');
    const section = document.getElementById(target);
    this.classList.add('active');
    section.classList.add('active');

    const menuSubItems = document.querySelectorAll('.right-tableOfContent li');
    menuSubItems.forEach(function (menuSubItem) {
      menuSubItem.addEventListener('click', function () {
        // Loại bỏ class "active" khỏi tất cả các menu items và sections
        menuSubItems.forEach(function (menuSubItem) {
          menuSubItem.classList.remove('menuSubItem_active');
        });
        // Thêm class "active" vào menu item được click và section tương ứng
        this.classList.add('menuSubItem_active');
      });
    });
    // đổi màu thẻ a khi scroll chuột đến đấy:

    window.addEventListener("scroll", function () {
      // Lấy vị trí hiện tại của scroll
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Lấy danh sách các thẻ <a> trong phần right-table-content
      var links = document.querySelectorAll(`#${target} .right-tableOfContent a`);

      // Duyệt qua từng thẻ <a>
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var sectionId = link.getAttribute("href").replace("#", ""); // Lấy id của phần từ href

        // Lấy vị trí của phần tử có id tương ứng
        var section = document.getElementById(sectionId);
        var sectionOffsetTop = section.offsetTop;
        var sectionOffsetBottom = sectionOffsetTop + section.offsetHeight;
        // Kiểm tra nếu vị trí scroll hiện tại lớn hơn hoặc bằng vị trí của phần tử

        if (scrollPosition >= sectionOffsetTop && scrollPosition <= sectionOffsetBottom) {
          console.log(scrollPosition, sectionOffsetBottom, sectionOffsetTop)
          for (var j = 0; j < links.length; j++) {
            menuSubItems[j].classList.remove('menuSubItem_active');
          }

          link.style.color = '#2de5be';

        }
        // Đổi màu chữ của thẻ <a> thành màu khác (ví dụ: đỏ)
        else {
          // Đổi màu chữ của thẻ <a> về màu mặc định
          link.style.color = '';
        }
      }
    });


  });
});
// Mặc định hiển thị section đầu tiên
sections[0].classList.add('active');
menuItems[0].classList.add('active');

