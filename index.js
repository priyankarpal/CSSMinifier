const minifyButton = document.getElementById("minifyButton");
const cssCode = document.getElementById("cssCode");
const minifiedCss = document.getElementById("minifiedCss");

minifyButton.addEventListener("click", function () {
  const minified = minifyCss(cssCode.value);
  minifiedCss.innerHTML = minified;
});

function minifyCss(css) {
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");

  // Remove newlines
  css = css.replace(/\n/g, "");

  // Remove tabs
  css = css.replace(/\t/g, "");

  // Remove multiple spaces
  css = css.replace(/\s\s+/g, " ");

  // Remove space before and after curly braces
  css = css.replace(/\s?\{\s?/g, "{");
  css = css.replace(/\s?\}\s?/g, "}");

  // Remove space before and after semicolons
  css = css.replace(/\s?\;\s?/g, ";");

  // Remove space before and after colons
  css = css.replace(/\s?\:\s?/g, ":");

  // Remove space before and after commas
  css = css.replace(/\s?\,\s?/g, ",");

  return css;
}

// For copy

function myFunction() {
  const copyText = document.getElementById("minifiedCss");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = copyText.value;
}
