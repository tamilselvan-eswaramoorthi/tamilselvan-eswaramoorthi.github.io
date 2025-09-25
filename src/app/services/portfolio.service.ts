import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  // Initialize portfolio interactions after Angular component load
  initializePortfolioInteractions() {
    this.initSidebarToggle();
    this.initModalInteractions();
    this.initCustomSelect();
    this.initContactFormValidation();
  }

  private initSidebarToggle() {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebar && sidebarBtn) {
      sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    }
  }

  private initModalInteractions() {
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleModal = () => {
      if (modalContainer && overlay) {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
      }
    };

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", toggleModal);
    }
    
    if (overlay) {
      overlay.addEventListener("click", toggleModal);
    }
  }

  private initCustomSelect() {
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-select-value]");

    if (select) {
      select.addEventListener("click", () => {
        select.classList.toggle("active");
      });
    }

    selectItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedValue = (item as HTMLElement).innerText.toLowerCase();
        if (selectValue) {
          selectValue.textContent = (item as HTMLElement).innerText;
        }
        if (select) {
          select.classList.toggle("active");
        }
        this.filterProjects(selectedValue);
      });
    });
  }

  private filterProjects(selectedValue: string) {
    const filterItems = document.querySelectorAll("[data-filter-item]");

    filterItems.forEach((item) => {
      const element = item as HTMLElement;
      if (selectedValue === "all") {
        element.classList.add("active");
      } else if (selectedValue === element.dataset['category']) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  private initContactFormValidation() {
    const form = document.querySelector("[data-form]") as HTMLFormElement;
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]") as HTMLButtonElement;

    if (form && formBtn) {
      formInputs.forEach((input) => {
        input.addEventListener("input", () => {
          if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
          } else {
            formBtn.setAttribute("disabled", "");
          }
        });
      });
    }
  }

  // Navigation functionality (handled by Angular components)
  handlePageNavigation(activePage: string) {
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  }
}