$(document).ready(function () {
  let productCount = 0;

  // Opening modal
  $("#openModal").click(function () {
    $("#calculatorModal").fadeIn();
  });

  // Closing modal
  $(".close-btn").click(function () {
    $("#calculatorModal").fadeOut();
  });

  // Adding new product
  $("#addProduct").click(function () {
    productCount++;
    const template = $("#productTemplate").html(),
      $newProduct = $(template);
    $newProduct.find(".product-number").text(productCount);
    $("#productsContainer").append($newProduct);
    updateCalculations();
  });

  // Deleting product
  $(document).on("click", ".delete-product", function () {
    $(this).closest(".product-entry").remove();
    updateCalculations();
  });

  // Calculating volume on input change
  $(document).on(
    "input",
    ".length, .width, .height, .weight, .boxes, .cost, .volume",
    function () {
      updateCalculations();
    }
  );

  // Removing packaging tag
  $(document).on("click", ".remove-tag", function () {
    $(this).parent().remove();
    updateCalculations();
  });

  // Function for product volume calculation
  function calculateProductVolume($product) {
    const length = parseFloat($product.find(".length").val()) || 0,
      width = parseFloat($product.find(".width").val()) || 0,
      height = parseFloat($product.find(".height").val()) || 0;
    return length * width * height;
  }

  // Function for updating calculation
  function updateCalculations() {
    let totalVolume = 0,
      totalWeight = 0,
      totalCost = 0;

    $(".product-entry").each(function () {
      const $product = $(this),
        calculatedVolume = calculateProductVolume($product),
        manualVolume = parseFloat($product.find(".volume").val()) || 0,
        volume = manualVolume > 0 ? manualVolume : calculatedVolume;

      if (calculatedVolume > 0) {
        $product.find(".volume").val(calculatedVolume.toFixed(2));
      }

      const weight = parseFloat($product.find(".weight").val()) || 0,
        boxes = parseFloat($product.find(".boxes").val()) || 0,
        cost = parseFloat($product.find(".cost").val()) || 0;

      totalVolume += volume * (boxes || 1);
      totalWeight += weight * (boxes || 1);
      totalCost += cost;
    });

    // Updating summary fields
    $("#totalVolume").val(totalVolume.toFixed(2));
    $("#totalWeight").val(totalWeight.toFixed(2));
    $("#density").val(
      totalWeight > 0 ? (totalVolume / totalWeight).toFixed(2) : "0.00"
    );
    $("#cost").val(totalCost.toFixed(2));
  }

  // Toggling dropdown visibility
  $(".custom-select").click(function () {
    $("#dropdown").toggle();
    $(this).toggleClass("dropdown-open");
  });

  // Handling checkbox selection
  $(".dropdown input[type='checkbox']").change(function () {
    let value = $(this).val();
    let selectedContainer = $("#selectedPackaging");

    if ($(this).is(":checked")) {
      let tag = $("<span>")
        .addClass("package-tag")
        .attr("data-value", value)
        .html(`${value} <button class="remove-tag">×</button>`);
      selectedContainer.append(tag);

      // Handle tag removal
      tag.find(".remove-tag").click(function () {
        tag.remove();
        $(`.dropdown input[value='${value}']`).prop("checked", false);
      });
    } else {
      $(`.package-tag[data-value='${value}']`).remove();
    }
  });
});
