// DietMaker - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // --- State Variables ---
  let customFoods = [];
  let foodsDatabase = [];
  let selectedFood = null;
  let currentCategory = "all";
  let searchQuery = "";
  let plateItems = [];
  
  // Current Active Calculator Mode: "weight" or "qty"
  let calculatorMode = "weight";

  // --- DOM Elements ---
  const foodSearchInput = document.getElementById("food-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const categoryPills = document.querySelectorAll(".category-pill");
  const foodCardsGrid = document.getElementById("food-cards-grid");

  // Selector Modal Elements
  const selectModal = document.getElementById("weight-selector-popover");
  const btnSelectClose = document.getElementById("btn-select-modal-close");
  const btnSelectCancel = document.getElementById("btn-select-modal-cancel");
  const btnSelectConfirm = document.getElementById("btn-select-modal-confirm");
  
  const selectFoodName = document.getElementById("select-modal-food-name");
  const selectCategory = document.getElementById("select-modal-category");
  const selectIconWrapper = document.getElementById("select-modal-icon-wrapper");
  
  const selectUnitSwitcher = document.getElementById("select-unit-switcher-container");
  const selectSwitchWeightBtn = document.getElementById("select-switch-weight-mode");
  const selectSwitchQtyBtn = document.getElementById("select-switch-qty-mode");
  const selectWeightBlock = document.getElementById("select-weight-mode-block");
  const selectQtyBlock = document.getElementById("select-qty-mode-block");
  
  const selectGramInput = document.getElementById("select-gram-input");
  const selectGramSlider = document.getElementById("select-gram-slider");
  const btnSelectMinus = document.getElementById("btn-select-calc-minus");
  const btnSelectPlus = document.getElementById("btn-select-calc-plus");
  
  const selectQtyInputLabel = document.getElementById("select-qty-input-label");
  const selectQtyInput = document.getElementById("select-qty-input");
  const selectQtyUnitTag = document.getElementById("select-qty-unit-tag");
  const btnSelectQtyMinus = document.getElementById("btn-select-qty-minus");
  const btnSelectQtyPlus = document.getElementById("btn-select-qty-plus");
  const selectQtyPresetBtns = document.querySelectorAll("#select-qty-presets-container .btn-qty-preset");

  // Plate elements
  const plateItemsList = document.getElementById("plate-items-list");
  const plateTotalsPanel = document.getElementById("plate-totals-panel");
  const btnClearPlate = document.getElementById("btn-clear-plate");
  const mobilePlateBadge = document.getElementById("mobile-plate-badge");
  const tabExplore = document.getElementById("tab-explore");
  const tabPlate = document.getElementById("tab-plate");
  const mobilePlateBadgeTab = document.getElementById("mobile-plate-badge-tab");
  const foodExplorerSection = document.getElementById("food-explorer-section");
  const myPlateSection = document.getElementById("my-plate-section");

  // Plate Totals Values
  const totalValCalories = document.getElementById("donut-center-calories");
  const totalValProtein = document.getElementById("total-val-protein");
  const totalValCarbs = document.getElementById("total-val-carbs");
  const totalValFat = document.getElementById("total-val-fat");
  const totalValFiber = document.getElementById("total-val-fiber");
  const totalValSodium = document.getElementById("total-val-sodium");

  // Macro Energy Distribution Elements
  const donutProtein = document.getElementById("donut-segment-protein");
  const donutCarbs = document.getElementById("donut-segment-carbs");
  const donutFat = document.getElementById("donut-segment-fat");

  const donutPctProtein = document.getElementById("donut-pct-protein");
  const donutPctCarbs = document.getElementById("donut-pct-carbs");
  const donutPctFat = document.getElementById("donut-pct-fat");

  // Action Buttons
  const btnExportPdf = document.getElementById("btn-export-pdf");
  const btnCustomFoodTrigger = document.getElementById("btn-custom-food-trigger");

  // Modal Elements
  const customFoodModal = document.getElementById("custom-food-modal");
  const btnModalClose = document.getElementById("btn-modal-close");
  const btnModalCancel = document.getElementById("btn-modal-cancel");
  const customFoodForm = document.getElementById("custom-food-form");

  // Hamburger Menu & Sub-header Elements
  const btnHamburgerMenu = document.getElementById("btn-hamburger-menu");
  const subHeader = document.querySelector(".sub-header");
  const btnDrawerClose = document.getElementById("btn-drawer-close");
  const drawerBackdrop = document.getElementById("drawer-backdrop");

  // Drawer helper functions
  const openDrawer = () => {
    if (subHeader) subHeader.classList.add("open");
    if (drawerBackdrop) drawerBackdrop.classList.remove("hidden");
  };

  const closeDrawer = () => {
    if (subHeader) subHeader.classList.remove("open");
    if (drawerBackdrop) drawerBackdrop.classList.add("hidden");
  };

  const switchToPlateTab = () => {
    if (tabExplore && tabPlate) {
      tabPlate.classList.add("active");
      tabExplore.classList.remove("active");
      if (myPlateSection) myPlateSection.classList.remove("hidden-tab");
      if (foodExplorerSection) foodExplorerSection.classList.add("hidden-tab");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const switchToExploreTab = () => {
    if (tabExplore && tabPlate) {
      tabExplore.classList.add("active");
      tabPlate.classList.remove("active");
      if (foodExplorerSection) foodExplorerSection.classList.remove("hidden-tab");
      if (myPlateSection) myPlateSection.classList.add("hidden-tab");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  function getFoodIcon(food) {
    if (food.icon) return food.icon;
    const name = food.name.toLowerCase();
    
    // Check keywords for specific foods
    if (name.includes("oats") || name.includes("muesli") || name.includes("corn flakes")) return "fa-solid fa-bowl-rice";
    if (name.includes("rice") || name.includes("chawal")) return "fa-solid fa-bowl-food";
    if (name.includes("roti") || name.includes("chapati") || name.includes("bread") || name.includes("dosa") || name.includes("idli") || name.includes("chilla")) return "fa-solid fa-wheat-awn";
    if (name.includes("flour") || name.includes("atta") || name.includes("besan") || name.includes("sattu") || name.includes("suji") || name.includes("rava")) return "fa-solid fa-seedling";
    if (name.includes("quinoa") || name.includes("daliya")) return "fa-solid fa-bowl-rice";
    
    if (name.includes("dal") || name.includes("chana") || name.includes("rajma") || name.includes("soy") || name.includes("lentil")) return "fa-solid fa-seedling";
    
    if (name.includes("banana")) return "fa-solid fa-lemon";
    if (name.includes("apple")) return "fa-solid fa-apple-whole";
    if (name.includes("mango") || name.includes("orange") || name.includes("guava") || name.includes("papaya") || name.includes("watermelon") || name.includes("pomegranate")) return "fa-solid fa-apple-whole";
    if (name.includes("broccoli") || name.includes("spinach") || name.includes("cauliflower")) return "fa-solid fa-tree";
    if (name.includes("potato") || name.includes("onion") || name.includes("ginger") || name.includes("garlic") || name.includes("mushroom") || name.includes("cucumber") || name.includes("tomato")) return "fa-solid fa-carrot";
    if (name.includes("avocado")) return "fa-solid fa-pepper-hot";
    
    if (name.includes("milk")) return "fa-solid fa-glass-water";
    if (name.includes("paneer") || name.includes("tofu") || name.includes("cheese")) return "fa-solid fa-cubes";
    if (name.includes("curd") || name.includes("dahi") || name.includes("yogurt")) return "fa-solid fa-spoon";
    if (name.includes("egg")) return "fa-solid fa-egg";
    if (name.includes("butter") || name.includes("ghee")) return "fa-solid fa-mortar-pestle";
    if (name.includes("whey") || name.includes("protein")) return "fa-solid fa-prescription-bottle-medical";
    
    if (name.includes("chicken")) return "fa-solid fa-drumstick-bite";
    if (name.includes("fish") || name.includes("tuna") || name.includes("salmon") || name.includes("basa")) return "fa-solid fa-fish";
    if (name.includes("mutton") || name.includes("meat") || name.includes("goat")) return "fa-solid fa-meat";
    if (name.includes("prawn") || name.includes("shrimp")) return "fa-solid fa-shrimp";
    
    if (name.includes("peanut") || name.includes("almond") || name.includes("walnut") || name.includes("cashew") || name.includes("pista") || name.includes("nut") || name.includes("makhana")) return "fa-solid fa-brain";
    if (name.includes("seed")) return "fa-solid fa-seedling";
    if (name.includes("oil")) return "fa-solid fa-bottle-droplet";
    if (name.includes("honey")) return "fa-solid fa-jar";

    // Fallbacks by category
    if (food.category === "grains") return "fa-solid fa-bowl-rice";
    if (food.category === "dals") return "fa-solid fa-seedling";
    if (food.category === "fruitsveg") return "fa-solid fa-apple-whole";
    if (food.category === "dairyeggs") return "fa-solid fa-egg";
    if (food.category === "meatfish") return "fa-solid fa-drumstick-bite";
    if (food.category === "nutsseeds") return "fa-solid fa-brain";
    
    return "fa-solid fa-utensils";
  }

  // --- Initializer Function ---
  function init() {
    loadCustomFoods();
    combineDatabases();
    loadPlateFromStorage();
    renderFoodGrid();
    updatePlateUI();

    // Event Listeners setup
    setupEventListeners();
  }

  // --- LocalStorage Helpers ---
  function loadCustomFoods() {
    const saved = localStorage.getItem("ahaarkosh_custom_foods");
    if (saved) {
      try {
        customFoods = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse custom foods", e);
        customFoods = [];
      }
    }
  }

  function saveCustomFoods() {
    localStorage.setItem("ahaarkosh_custom_foods", JSON.stringify(customFoods));
  }

  function combineDatabases() {
    const markedCustom = customFoods.map(f => ({ ...f, isCustom: true }));
    foodsDatabase = [...INDIAN_FOODS_DATABASE, ...markedCustom];
  }

  function loadPlateFromStorage() {
    const saved = localStorage.getItem("ahaarkosh_plate");
    if (saved) {
      try {
        plateItems = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse plate data", e);
        plateItems = [];
      }
    }
  }

  function savePlateToStorage() {
    localStorage.setItem("ahaarkosh_plate", JSON.stringify(plateItems));
  }

  // --- Notification Toast Helper ---
  function showToast(message, type = "info") {
    // Toast notifications are disabled as requested
  }

  // --- Rendering UI: Food Cards Grid ---
  function renderFoodGrid() {
    foodCardsGrid.innerHTML = "";
    
    // Filter database
    const filtered = foodsDatabase.filter(food => {
      // Category filter
      if (currentCategory !== "all") {
        if (currentCategory === "custom" && !food.isCustom) return false;
        if (currentCategory !== "custom" && food.category !== currentCategory) return false;
      }
      
      // Search text filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = food.name.toLowerCase().includes(query);
        const matchesCat = food.categoryLabel && food.categoryLabel.toLowerCase().includes(query);
        return matchesName || matchesCat;
      }
      
      return true;
    });

    if (filtered.length === 0) {
      foodCardsGrid.innerHTML = `
        <div class="no-results-box">
          <h4>No items match your filter</h4>
          <p>Try searching for something else or create a custom food item.</p>
          <button class="btn btn-secondary-outline" id="btn-empty-create-trigger">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create "${searchQuery}"
          </button>
        </div>
      `;
      
      const btnEmptyCreate = document.getElementById("btn-empty-create-trigger");
      if (btnEmptyCreate) {
        btnEmptyCreate.addEventListener("click", () => {
          openCustomFoodModal(searchQuery);
        });
      }
      return;
    }

    filtered.forEach(food => {
      const card = document.createElement("div");
      card.className = `food-card cat-${food.category} ${selectedFood && selectedFood.id === food.id ? "selected" : ""}`;
      card.dataset.id = food.id;

      const iconClass = getFoodIcon(food);

      card.innerHTML = `
        <div class="food-card-flex-wrapper">
          <div class="food-card-icon-container cat-${food.category}">
            <i class="${iconClass}"></i>
          </div>
          <div class="food-card-minimal-body">
            <h4 class="food-card-title">${food.name}</h4>
            <div class="food-card-macros-minimal">
              <span class="cal-val">${Math.round(food.nutrition.calories)} Cal</span>
              <span class="macro-sep">•</span>
              <span class="macro-item">P: <strong>${food.nutrition.protein}g</strong></span>
              <span class="macro-sep">•</span>
              <span class="macro-item">C: <strong>${food.nutrition.carbs}g</strong></span>
              <span class="macro-sep">•</span>
              <span class="macro-item">F: <strong>${food.nutrition.fat}g</strong></span>
            </div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => selectFoodItem(food, card));
      foodCardsGrid.appendChild(card);
    });
  }

  // --- Weight Presets Dynamic Renderer ---
  function renderWeightPresets(category, activeWeight) {
    const presetsContainer = document.getElementById("select-weight-presets-container");
    if (!presetsContainer) return;
    presetsContainer.innerHTML = "";
    
    const presets = category === "nutsseeds" 
      ? [5, 10, 15, 20, 30] 
      : [30, 50, 100, 150, 250];
      
    presets.forEach(w => {
      const btn = document.createElement("button");
      btn.className = `btn btn-preset ${w === activeWeight ? "active" : ""}`;
      btn.dataset.weight = w;
      btn.textContent = w === 100 && category !== "nutsseeds" ? "100g (100%)" : `${w}g`;
      
      btn.addEventListener("click", (e) => {
        const allPresetBtns = presetsContainer.querySelectorAll(".btn-preset");
        allPresetBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        const val = parseFloat(e.target.dataset.weight);
        selectGramInput.value = val;
        selectGramSlider.value = val <= 500 ? val : 500;
        updateSelectorPreview();
      });
      
      presetsContainer.appendChild(btn);
    });
  }

  // --- Selection and Calculator Activation (Modal Popover) ---
  function selectFoodItem(food, cardElement = null) {
    selectedFood = food;
    
    // Highlight active card
    const cards = foodCardsGrid.querySelectorAll(".food-card");
    cards.forEach(c => {
      if (c.dataset.id === food.id) {
        c.classList.add("selected");
      } else {
        c.classList.remove("selected");
      }
    });

    // Populate active selector modal details
    selectFoodName.textContent = food.name;
    selectCategory.textContent = food.categoryLabel;
    
    // Set icon
    const iconClass = getFoodIcon(food);
    selectIconWrapper.className = `select-modal-icon-container cat-${food.category}`;
    selectIconWrapper.innerHTML = `<i class="${iconClass}"></i>`;

    // Setup default weight based on category
    let defaultWeight = 100;
    if (food.category === "nutsseeds") {
      defaultWeight = 10;
    }
    selectGramInput.value = defaultWeight;
    selectGramSlider.value = defaultWeight;

    // Setup Unit Switcher (Weight vs Quantity Mode)
    if (food.unitName && food.unitWeight) {
      selectUnitSwitcher.classList.remove("hidden");
      selectSwitchQtyBtn.textContent = `By ${capitalize(food.unitName)}s`;
      setCalculatorMode("qty");
    } else {
      selectUnitSwitcher.classList.add("hidden");
      setCalculatorMode("weight");
    }

    // Render presets
    renderWeightPresets(food.category, defaultWeight);

    // Initial Live Preview
    updateSelectorPreview();

    // Open Selector Modal
    selectModal.classList.remove("hidden");

    // Position Popover directly under the card
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      const popoverWidth = 320; // set standard popover width in pixels
      
      // Calculate top position (directly below the card)
      let top = rect.bottom + window.scrollY + 8; // 8px vertical gap
      
      // Center the popover horizontally relative to the card
      let left = rect.left + window.scrollX + (rect.width / 2) - (popoverWidth / 2);
      
      // Adjust boundaries to stay inside viewport
      if (left + popoverWidth > window.innerWidth - 16) {
        left = window.innerWidth - popoverWidth - 16;
      }
      if (left < 16) {
        left = 16;
      }
      
      selectModal.style.top = `${top}px`;
      selectModal.style.left = `${left}px`;
    }
  }

  // --- Change active calculator mode (Weight vs Count) ---
  function setCalculatorMode(mode) {
    calculatorMode = mode;

    if (mode === "weight") {
      selectSwitchWeightBtn.classList.add("active");
      selectSwitchQtyBtn.classList.remove("active");
      selectWeightBlock.classList.remove("hidden");
      selectQtyBlock.classList.add("hidden");
      
      // Sync weight values
      let wVal = parseFloat(selectGramInput.value) || 100;
      if (selectedFood) {
        if (selectedFood.category === "nutsseeds" && wVal === 100) {
          wVal = 10;
          selectGramInput.value = 10;
          selectGramSlider.value = 10;
        }
        renderWeightPresets(selectedFood.category, wVal);
      }
    } else {
      selectSwitchWeightBtn.classList.remove("active");
      selectSwitchQtyBtn.classList.add("active");
      selectWeightBlock.classList.add("hidden");
      selectQtyBlock.classList.remove("hidden");
      
      // Customize labels
      if (selectedFood) {
        selectQtyInputLabel.textContent = `Enter Quantity (${capitalize(selectedFood.unitName)}s)`;
        selectQtyUnitTag.textContent = `${selectedFood.unitName}s`;
        
        // Reset count value
        selectQtyInput.value = 1;
        selectQtyPresetBtns.forEach(btn => {
          if (parseFloat(btn.dataset.qty) === 1) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    }
    updateSelectorPreview();
  }

  // --- Add Active Item to Meal Plate ---
  function addActiveToPlate() {
    if (!selectedFood) return;

    let grams = 100;
    let addedByCount = false;
    let countVal = 1;

    if (calculatorMode === "weight") {
      grams = parseFloat(selectGramInput.value) || 100;
    } else {
      countVal = parseFloat(selectQtyInput.value) || 1;
      grams = countVal * selectedFood.unitWeight;
      addedByCount = true;
    }

    const nut = selectedFood.nutrition;
    const multiplier = grams / 100;

    const plateItem = {
      instanceId: selectedFood.id + "_" + Date.now(),
      id: selectedFood.id,
      name: selectedFood.name,
      weight: grams,
      addedByCount: addedByCount,
      countValue: countVal,
      unitName: selectedFood.unitName || "piece",
      unitWeight: selectedFood.unitWeight || 100,
      baseNutrition: { ...nut },
      calculatedNutrition: {
        calories: Math.round(nut.calories * multiplier),
        protein: Math.round((nut.protein * multiplier) * 10) / 10,
        carbs: Math.round((nut.carbs * multiplier) * 10) / 10,
        fat: Math.round((nut.fat * multiplier) * 10) / 10,
        fiber: nut.fiber !== undefined ? Math.round((nut.fiber * multiplier) * 10) / 10 : 0,
        sodium: nut.sodium !== undefined ? Math.round(nut.sodium * multiplier) : 0
      }
    };

    plateItems.push(plateItem);
    savePlateToStorage();
    updatePlateUI();

    // Auto switch to Plate tab on mobile so user can see it live
    if (window.innerWidth <= 1024) {
      switchToPlateTab();
    }

    const descMsg = addedByCount 
      ? `${countVal} ${selectedFood.unitName}(s) (~${grams}g)` 
      : `${grams}g`;
    showToast(`Added ${descMsg} of ${selectedFood.name} to Plate`, "success");
    
    // Close Modal
    selectModal.classList.add("hidden");
  }

  // --- Update Plate Items List and Totals UI ---
  function updatePlateUI(previewItem = null) {
    plateItemsList.innerHTML = "";
    if (mobilePlateBadge) mobilePlateBadge.textContent = plateItems.length;
    if (mobilePlateBadgeTab) mobilePlateBadgeTab.textContent = plateItems.length;

    if (plateItems.length === 0 && !previewItem) {
      plateItemsList.innerHTML = `
        <div class="plate-empty-state">
          <p>Your plate is empty. Add items to calculate total nutrition details.</p>
        </div>
      `;
      plateTotalsPanel.classList.add("hidden");
      btnClearPlate.classList.add("hidden");
      return;
    }

    plateTotalsPanel.classList.remove("hidden");
    btnClearPlate.classList.remove("hidden");

    let totalCal = 0;
    let totalProt = 0;
    let totalCarb = 0;
    let totalFats = 0;
    let totalFib = 0;
    let totalSod = 0;

    plateItems.forEach(item => {
      totalCal += item.calculatedNutrition.calories;
      totalProt += item.calculatedNutrition.protein;
      totalCarb += item.calculatedNutrition.carbs;
      totalFats += item.calculatedNutrition.fat;
      totalFib += item.calculatedNutrition.fiber;
      totalSod += item.calculatedNutrition.sodium;

      const itemDiv = document.createElement("div");
      itemDiv.className = "plate-item";
      itemDiv.dataset.instanceId = item.instanceId;

      // Edit field templates (By Count vs By Weight)
      let inputFieldHtml = "";
      if (item.addedByCount) {
        inputFieldHtml = `
          <input type="number" value="${item.countValue}" min="0.25" max="100" step="0.25" class="plate-qty-input" data-instance-id="${item.instanceId}">
          <span>${item.unitName}(s)</span>
        `;
      } else {
        inputFieldHtml = `
          <input type="number" value="${item.weight}" min="1" max="5000" class="plate-weight-input" data-instance-id="${item.instanceId}">
          <span>g</span>
        `;
      }

      const descLine = item.addedByCount 
        ? `${item.countValue} ${item.unitName}(s) • ${Math.round(item.calculatedNutrition.calories)} kcal`
        : `${item.weight}g • ${Math.round(item.calculatedNutrition.calories)} kcal`;

      itemDiv.innerHTML = `
        <div class="plate-item-info">
          <div class="plate-item-name">${item.name}</div>
          <div class="plate-item-sub">${descLine} &bull; P: ${item.calculatedNutrition.protein}g C: ${item.calculatedNutrition.carbs}g F: ${item.calculatedNutrition.fat}g</div>
        </div>
        <div class="plate-item-actions">
          <div class="plate-item-weight-edit">
            ${inputFieldHtml}
          </div>
          <button class="remove-plate-item" data-instance-id="${item.instanceId}" title="Remove item">&times;</button>
        </div>
      `;

      plateItemsList.appendChild(itemDiv);
    });

    if (previewItem) {
      totalCal += previewItem.calculatedNutrition.calories;
      totalProt += previewItem.calculatedNutrition.protein;
      totalCarb += previewItem.calculatedNutrition.carbs;
      totalFats += previewItem.calculatedNutrition.fat;
      totalFib += previewItem.calculatedNutrition.fiber;
      totalSod += previewItem.calculatedNutrition.sodium;
    }

    totalProt = Math.round(totalProt * 10) / 10;
    totalCarb = Math.round(totalCarb * 10) / 10;
    totalFats = Math.round(totalFats * 10) / 10;
    totalFib = Math.round(totalFib * 10) / 10;
    totalSod = Math.round(totalSod);

    totalValCalories.textContent = totalCal;
    totalValProtein.textContent = totalProt;
    totalValCarbs.textContent = totalCarb;
    totalValFat.textContent = totalFats;
    totalValFiber.textContent = totalFib;
    if (totalValSodium) totalValSodium.textContent = totalSod + "mg";

    const kcalFromProtein = totalProt * 4;
    const kcalFromCarbs = totalCarb * 4;
    const kcalFromFat = totalFats * 9;
    const totalMacroKcal = kcalFromProtein + kcalFromCarbs + kcalFromFat;


    if (totalMacroKcal > 0) {
      const pPct = Math.round((kcalFromProtein / totalMacroKcal) * 100);
      const cPct = Math.round((kcalFromCarbs / totalMacroKcal) * 100);
      const fPct = 100 - (pPct + cPct);

      donutPctProtein.textContent = pPct;
      donutPctCarbs.textContent = cPct;
      donutPctFat.textContent = fPct;

      // Update SVG dashes
      donutProtein.setAttribute("stroke-dasharray", `${pPct} ${100 - pPct}`);
      donutProtein.setAttribute("stroke-dashoffset", `0`);

      donutCarbs.setAttribute("stroke-dasharray", `${cPct} ${100 - cPct}`);
      donutCarbs.setAttribute("stroke-dashoffset", `-${pPct}`);

      donutFat.setAttribute("stroke-dasharray", `${fPct} ${100 - fPct}`);
      donutFat.setAttribute("stroke-dashoffset", `-${pPct + cPct}`);
    } else {
      donutPctProtein.textContent = 0;
      donutPctCarbs.textContent = 0;
      donutPctFat.textContent = 0;

      donutProtein.setAttribute("stroke-dasharray", "0 100");
      donutCarbs.setAttribute("stroke-dasharray", "0 100");
      donutFat.setAttribute("stroke-dasharray", "0 100");
    }

    // Attach listeners to newly created plate inputs
    const weightInputs = plateItemsList.querySelectorAll(".plate-weight-input");
    weightInputs.forEach(input => {
      input.addEventListener("change", (e) => {
        const instId = e.target.dataset.instanceId;
        const newWeight = parseFloat(e.target.value) || 100;
        updatePlateItemWeight(instId, newWeight);
      });
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") e.target.blur();
      });
    });

    const qtyInputs = plateItemsList.querySelectorAll(".plate-qty-input");
    qtyInputs.forEach(input => {
      input.addEventListener("change", (e) => {
        const instId = e.target.dataset.instanceId;
        const newQty = parseFloat(e.target.value) || 1;
        updatePlateItemQty(instId, newQty);
      });
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") e.target.blur();
      });
    });

    const removeBtns = plateItemsList.querySelectorAll(".remove-plate-item");
    removeBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const instId = e.target.dataset.instanceId;
        removePlateItem(instId);
      });
    });
  }

  // --- Dynamic Live Preview of Selector Modal Weight/Qty ---
  function updateSelectorPreview() {
    if (!selectedFood) return;

    let grams = 100;
    if (calculatorMode === "weight") {
      grams = parseFloat(selectGramInput.value) || 100;
    } else {
      const countVal = parseFloat(selectQtyInput.value) || 1;
      grams = countVal * selectedFood.unitWeight;
    }

    const nut = selectedFood.nutrition;
    const multiplier = grams / 100;

    const previewItem = {
      calculatedNutrition: {
        calories: Math.round(nut.calories * multiplier),
        protein: Math.round((nut.protein * multiplier) * 10) / 10,
        carbs: Math.round((nut.carbs * multiplier) * 10) / 10,
        fat: Math.round((nut.fat * multiplier) * 10) / 10,
        fiber: nut.fiber !== undefined ? Math.round((nut.fiber * multiplier) * 10) / 10 : 0,
        sodium: nut.sodium !== undefined ? Math.round(nut.sodium * multiplier) : 0
      }
    };

    updatePlateUI(previewItem);
  }

  // --- Edit Plate Item by Weight ---
  function updatePlateItemWeight(instanceId, newWeight) {
    if (newWeight <= 0) {
      removePlateItem(instanceId);
      return;
    }

    const idx = plateItems.findIndex(item => item.instanceId === instanceId);
    if (idx !== -1) {
      const item = plateItems[idx];
      item.weight = newWeight;
      item.addedByCount = false; // changed manually to weight mode
      const multiplier = newWeight / 100;
      const nut = item.baseNutrition;

      item.calculatedNutrition = {
        calories: Math.round(nut.calories * multiplier),
        protein: Math.round((nut.protein * multiplier) * 10) / 10,
        carbs: Math.round((nut.carbs * multiplier) * 10) / 10,
        fat: Math.round((nut.fat * multiplier) * 10) / 10,
        fiber: nut.fiber !== undefined ? Math.round((nut.fiber * multiplier) * 10) / 10 : 0,
        sodium: nut.sodium !== undefined ? Math.round(nut.sodium * multiplier) : 0
      };

      savePlateToStorage();
      updatePlateUI();
    }
  }

  // --- Edit Plate Item by Quantity Count ---
  function updatePlateItemQty(instanceId, newQty) {
    if (newQty <= 0) {
      removePlateItem(instanceId);
      return;
    }

    const idx = plateItems.findIndex(item => item.instanceId === instanceId);
    if (idx !== -1) {
      const item = plateItems[idx];
      item.countValue = newQty;
      const newWeight = newQty * item.unitWeight;
      item.weight = newWeight;
      const multiplier = newWeight / 100;
      const nut = item.baseNutrition;

      item.calculatedNutrition = {
        calories: Math.round(nut.calories * multiplier),
        protein: Math.round((nut.protein * multiplier) * 10) / 10,
        carbs: Math.round((nut.carbs * multiplier) * 10) / 10,
        fat: Math.round((nut.fat * multiplier) * 10) / 10,
        fiber: nut.fiber !== undefined ? Math.round((nut.fiber * multiplier) * 10) / 10 : 0,
        sodium: nut.sodium !== undefined ? Math.round(nut.sodium * multiplier) : 0
      };

      savePlateToStorage();
      updatePlateUI();
    }
  }

  // --- Remove Plate Item ---
  function removePlateItem(instanceId) {
    const item = plateItems.find(i => i.instanceId === instanceId);
    const itemName = item ? item.name : "Item";
    
    plateItems = plateItems.filter(item => item.instanceId !== instanceId);
    savePlateToStorage();
    updatePlateUI();

    showToast(`Removed ${itemName} from Plate`, "info");
  }

  // --- Clear Plate ---
  function clearPlate() {
    if (confirm("Are you sure you want to clear all items from your plate?")) {
      plateItems = [];
      savePlateToStorage();
      updatePlateUI();
      showToast("Cleared plate list", "info");
    }
  }

  // --- Modal: Open/Close Custom Food Creator ---
  function openCustomFoodModal(prefilledName = "") {
    customFoodForm.reset();
    if (prefilledName) {
      document.getElementById("food-name").value = prefilledName;
    }
    customFoodModal.classList.remove("hidden");
    document.getElementById("food-name").focus();
  }

  function closeCustomFoodModal() {
    customFoodModal.classList.add("hidden");
  }

  // --- Handle Custom Food Submission ---
  function handleCustomFoodSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("food-name").value.trim();
    const category = document.getElementById("food-category").value;
    const servingInfo = document.getElementById("food-serving").value.trim();
    
    const unitName = document.getElementById("food-unit-name").value.trim();
    const unitWeightVal = parseFloat(document.getElementById("food-unit-weight").value);
    const iconVal = document.getElementById("food-icon").value.trim();
    
    const calories = parseFloat(document.getElementById("food-calories").value) || 0;
    const protein = parseFloat(document.getElementById("food-protein").value) || 0;
    const carbs = parseFloat(document.getElementById("food-carbs").value) || 0;
    const fat = parseFloat(document.getElementById("food-fat").value) || 0;
    const fiber = parseFloat(document.getElementById("food-fiber").value) || 0;
    const sodium = parseFloat(document.getElementById("food-sodium").value) || 0;

    const categorySelect = document.getElementById("food-category");
    const categoryLabel = categorySelect.options[categorySelect.selectedIndex].text;

    const newFood = {
      id: "custom_" + Date.now(),
      name,
      category,
      categoryLabel,
      servingInfo: servingInfo || "Nutrition values per 100g",
      icon: iconVal ? (iconVal.includes("fa-") ? iconVal : `fa-solid fa-${iconVal}`) : "fa-solid fa-utensils",
      nutrition: {
        calories,
        protein,
        carbs,
        fat,
        fiber,
        sodium
      }
    };

    if (unitName && !isNaN(unitWeightVal) && unitWeightVal > 0) {
      newFood.unitName = unitName.toLowerCase();
      newFood.unitWeight = unitWeightVal;
    }

    customFoods.push(newFood);
    saveCustomFoods();
    combineDatabases();
    
    closeCustomFoodModal();
    
    currentCategory = "custom";
    categoryPills.forEach(p => {
      if (p.dataset.category === "custom") {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    renderFoodGrid();
    showToast(`Saved custom food "${name}"`, "success");
    selectFoodItem(newFood);
  }

  // --- Main Event Listeners setup ---
  function setupEventListeners() {
    // Search input
    foodSearchInput.addEventListener("input", (e) => {
      // Auto switch to explore tab if user starts typing while on plate tab
      switchToExploreTab();

      searchQuery = e.target.value;
      if (searchQuery.trim() !== "") {
        clearSearchBtn.classList.remove("hidden");
      } else {
        clearSearchBtn.classList.add("hidden");
      }
      renderFoodGrid();
    });

    foodSearchInput.addEventListener("focus", () => {
      // Auto switch to explore tab when search bar is focused
      switchToExploreTab();
    });

    // Clear search button
    clearSearchBtn.addEventListener("click", () => {
      foodSearchInput.value = "";
      searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderFoodGrid();
      foodSearchInput.focus();
    });

    // Category pills selection
    categoryPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        categoryPills.forEach(p => p.classList.remove("active"));
        e.target.classList.add("active");
        currentCategory = e.target.dataset.category;
        renderFoodGrid();

        // Close sub-header drawer on mobile after selecting a category
        if (window.innerWidth <= 1024) {
          closeDrawer();
        }
      });
    });

    // --- SELECTOR MODAL LISTENERS ---
    const closeSelectModal = () => {
      selectModal.classList.add("hidden");
      updatePlateUI(); // Reset preview back to standard totals
    };
    btnSelectClose.addEventListener("click", closeSelectModal);
    btnSelectCancel.addEventListener("click", closeSelectModal);
    btnSelectConfirm.addEventListener("click", addActiveToPlate);

    // Close selector popover on outside document click
    document.addEventListener("click", (e) => {
      if (
        selectModal &&
        !selectModal.classList.contains("hidden") &&
        !selectModal.contains(e.target) &&
        !e.target.closest(".food-card") &&
        !e.target.closest("#btn-custom-food-trigger") &&
        !e.target.closest(".modal-box") // Ignore custom food modal clicks
      ) {
        closeSelectModal();
      }
    });

    // Switch mode inside selector
    selectSwitchWeightBtn.addEventListener("click", () => setCalculatorMode("weight"));
    selectSwitchQtyBtn.addEventListener("click", () => setCalculatorMode("qty"));

    // Helper to highlight active dynamic weight preset
    function highlightActiveWeightPreset(val) {
      const currentPresetBtns = document.querySelectorAll("#select-weight-presets-container .btn-preset");
      currentPresetBtns.forEach(btn => {
        if (parseFloat(btn.dataset.weight) === val) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    }

    // Weight input listener
    selectGramInput.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value);
      if (isNaN(val) || val <= 0) val = 1;
      if (val > 5000) val = 5000;
      selectGramSlider.value = val <= 500 ? val : 500;
      highlightActiveWeightPreset(val);
      updateSelectorPreview();
    });

    // Weight slider listener
    selectGramSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      selectGramInput.value = val;
      highlightActiveWeightPreset(val);
      updateSelectorPreview();
    });

    // Weight adjust buttons
    btnSelectMinus.addEventListener("click", () => {
      let val = parseFloat(selectGramInput.value) || 100;
      val = Math.max(1, val - 10);
      selectGramInput.value = val;
      selectGramSlider.value = val <= 500 ? val : 500;
      highlightActiveWeightPreset(val);
      updateSelectorPreview();
    });

    btnSelectPlus.addEventListener("click", () => {
      let val = parseFloat(selectGramInput.value) || 100;
      val = Math.min(5000, val + 10);
      selectGramInput.value = val;
      selectGramSlider.value = val <= 500 ? val : 500;
      highlightActiveWeightPreset(val);
      updateSelectorPreview();
    });

    // Quantity input listener
    selectQtyInput.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value);
      if (isNaN(val) || val <= 0) val = 0.25;
      if (val > 100) val = 100;

      selectQtyPresetBtns.forEach(btn => {
        if (parseFloat(btn.dataset.qty) === val) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
      updateSelectorPreview();
    });

    // Quantity adjust buttons
    btnSelectQtyMinus.addEventListener("click", () => {
      let val = parseFloat(selectQtyInput.value) || 1;
      val = Math.max(0.25, val - 0.5);
      selectQtyInput.value = val;

      selectQtyPresetBtns.forEach(btn => {
        if (parseFloat(btn.dataset.qty) === val) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
      updateSelectorPreview();
    });

    btnSelectQtyPlus.addEventListener("click", () => {
      let val = parseFloat(selectQtyInput.value) || 1;
      val = Math.min(100, val + 0.5);
      selectQtyInput.value = val;

      selectQtyPresetBtns.forEach(btn => {
        if (parseFloat(btn.dataset.qty) === val) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
      updateSelectorPreview();
    });

    // Quantity preset buttons
    selectQtyPresetBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        selectQtyPresetBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        const val = parseFloat(e.target.dataset.qty);
        selectQtyInput.value = val;
        updateSelectorPreview();
      });
    });

    // Clear Plate list
    btnClearPlate.addEventListener("click", clearPlate);

    // Trigger custom food modal
    btnCustomFoodTrigger.addEventListener("click", () => openCustomFoodModal());
    btnModalClose.addEventListener("click", closeCustomFoodModal);
    btnModalCancel.addEventListener("click", closeCustomFoodModal);
    customFoodForm.addEventListener("submit", handleCustomFoodSubmit);

    // PDF Report Export (Triggers clean standard print modal)
    btnExportPdf.addEventListener("click", () => {
      window.print();
    });

    // Close modal on background overlay click
    customFoodModal.addEventListener("click", (e) => {
      if (e.target === customFoodModal) {
        closeCustomFoodModal();
      }
    });

    // Sticky Bottom Tab Switcher
    if (tabExplore && tabPlate) {
      tabExplore.addEventListener("click", switchToExploreTab);
      tabPlate.addEventListener("click", switchToPlateTab);
    }

    // Toggle categories sub-header via hamburger menu on mobile
    if (btnHamburgerMenu) {
      btnHamburgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        if (subHeader && subHeader.classList.contains("open")) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (btnDrawerClose) {
      btnDrawerClose.addEventListener("click", closeDrawer);
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener("click", closeDrawer);
    }

    // Initialize tab state for mobile
    if (window.innerWidth <= 1024) {
      if (myPlateSection) myPlateSection.classList.add("hidden-tab");
      if (foodExplorerSection) foodExplorerSection.classList.remove("hidden-tab");
    }
  }

  // --- Helper: capitalize string ---
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Run initializations
  init();
});
